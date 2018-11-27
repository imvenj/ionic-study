import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from "../otherPage/otherPage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myString: string = "Example 1 - This is just a string";
  public myJSON: any = {text: ""};
  otherPage: any = OtherPage;

  constructor(public navCtrl: NavController) {

  }

  gotoOtherPage() {
    this.navCtrl.push(this.otherPage, {text: "Example 3 - This is an object."})
  }
}
