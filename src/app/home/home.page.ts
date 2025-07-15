import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false,
})
export class HomePage {
  loginForm: FormGroup;
  resultMessage: string = '';

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin() {
    const { username, password } = this.loginForm.value;

    this.formService.login(username, password).subscribe(
      (res: any) => {
        this.resultMessage = res?.message || 'Login successful!';
      },
      (err) => {
        this.resultMessage =
          err?.error?.message || 'Invalid credentials or server error';
      }
    );
  }
}
