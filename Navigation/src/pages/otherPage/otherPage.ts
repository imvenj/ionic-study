import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-other',
    templateUrl: 'otherPage.html'
})
export class OtherPage {

    message: string = ""

    constructor(public navCtrl: NavController,
        public navParams: NavParams) {
        this.message = this.navParams.get("text");
    }

}
