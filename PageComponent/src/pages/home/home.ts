import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any = {}
  showContact: Boolean = false
  constructor(public navCtrl: NavController) {

  }

  openContact() {
    this.navCtrl.push(ContactPage, {user: this.user})
  }

  toggleContact() {
    this.showContact = !this.showContact
  }

}
