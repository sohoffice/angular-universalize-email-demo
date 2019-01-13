import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {noop} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  form: FormGroup;
  working = false;

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private http: HttpClient,
              private meta: Meta) {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email, Validators.maxLength(200)]),
      username: this.fb.control(undefined, Validators.maxLength(40))
    });
  }

  ngOnInit() {
  }

  onSubmit($event: Event) {
    $event.stopPropagation();
    if (this.form.invalid) {
      this.snackBar.open('Invalid form value', 'OK', {
        duration: 5000
      });
      return;
    }

    console.log('Form value: ', this.form.value);
    this.working = true;
    this.http.post('https://gowithme-prod.herokuapp.com/oss/nue-welcome', this.form.value).pipe(
      tap(res => {
        if (res === 'ok') {
          this.snackBar.open(`Email sent to ${this.form.value.email}`, 'OK', {
            duration: 5000
          });
        }
      }),
      finalize(() => {
        this.working = false;
      })
    ).subscribe(noop);
  }
}
