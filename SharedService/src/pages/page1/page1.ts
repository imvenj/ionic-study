import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserService } from '../../services/user'
import { Page2 } from "../page2/page2"

@Component({
    selector: 'page-one',
    templateUrl: 'page1.html'
})

export class Page1 {
    private user: any
    private nav: any

    constructor(public navCtrl: NavController, user: UserService) {
        console.log(user.name)
        this.user = user
        this.nav = navCtrl
    }

    gotoPage2() {
        this.nav.push(Page2)
    }
}