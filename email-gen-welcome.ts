// Use angular-universalize-email instead.

import 'zone.js';
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {renderModuleFactory} from '@angular/platform-server';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/email-server/main');

const DIST_FOLDER = join(process.cwd(), 'dist');

// TODO Change this to match your browser dist folder
const BROWSER_FOLDER = join(DIST_FOLDER, 'email');

// Our index.html we'll use as our template
const template = readFileSync(join(BROWSER_FOLDER, 'index.html')).toString();

renderModuleFactory(AppServerModuleNgFactory, {
  document: template,
  url: '/email/welcome',
  extraProviders: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
})
  .then(html => {
    console.log('Pre-rendering successful, saving dist/email/email-welcome.html');
    writeFileSync('./dist/email/email-welcome.html', html);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
