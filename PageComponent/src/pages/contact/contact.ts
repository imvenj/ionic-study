import { Component, Input } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    user: any

    @Input() userInput

    constructor(public navControl: NavController, params: NavParams) {
        this.user = params.get('user')
    }

    ngOnChanges() {
        if (this.userInput) {
            this.user = this.userInput
        }
    }
}