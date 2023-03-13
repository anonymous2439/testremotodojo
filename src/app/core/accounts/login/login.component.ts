import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pages } from '../../enums/pages';
import { Routers } from '../../enums/routers';
import { NavbarService } from '../../services/navbar/navbar.service';
import { validationPatterns } from '../../utils/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  routers = Routers

  loginForm: FormGroup
  hidePassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.buildForm()
    this.navbarService.getCurrentPage(Pages.Login)
  }

  buildForm() {
    return this.formBuilder.group({
      email: ['', validationPatterns.email],
      password: ['', validationPatterns.password],
      keepSignedIn: [false]
    })
  }

  onSubmit() {
  }

}
