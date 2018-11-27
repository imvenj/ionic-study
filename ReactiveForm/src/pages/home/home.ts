import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from '../../app/confirmPassword'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  registerForm: FormGroup
  constructor(public navCtrl: NavController, 
    private fb: FormBuilder,
    private alertCtrl: AlertController) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      repass: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: confirmPassword('pass', 'repass')
    })
  }

  onSubmit() {
    this.alertCtrl.create({
      title: 'Your inputs are:',
      message: JSON.stringify(this.registerForm.value),
      buttons:['Dismiss']
    })
    .present()

    console.log(this.registerForm)
  }

}
