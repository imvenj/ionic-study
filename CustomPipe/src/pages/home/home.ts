import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: any
  constructor(public navCtrl: NavController) {
    this.user = {
      name: "John Conner",
      birthyear: 1985
    }
    console.log(this.user)
  }

}
