import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public myform: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: [
      '',
      [Validators.required, Validators.minLength(9), Validators.maxLength(12)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  onSave(): void {
    if (this.myform.valid) return;

    console.log(this.myform.value);
  }

  validField(field: string) {
    return (
      this.myform.controls[field].errors && this.myform.controls[field].touched
    );
  }
}
