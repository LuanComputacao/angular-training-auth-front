import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.formAuth.valid) {
      this.authService.signIn({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password
      })
        .subscribe({
          next: (res) => res,
          error: (err) => err
        });
    }
  }
}
