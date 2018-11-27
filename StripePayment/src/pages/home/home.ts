import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThankyouPage } from '../thankyou/thankyou'

declare var Stripe: any

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private token: string = "";
  private card: any;
  private elements: any;
  private stripe: any;

  @ViewChild("cardElement")
  cardElement;
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    this.stripe = Stripe("pk_test_ZBPY2pIn2A1rKlfYt4nVNCk4");
    this.elements = this.stripe.elements();
  }

  ngOnInit() {
    const style = {
      base: {
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "10px"
      }
    };
    this.card = this.elements.create("card", { style });
    this.card.mount(this.cardElement.nativeElement);
  }

  onSubmit() {
    this.stripe.createToken(this.card).then(data => {
      this.stripeResponseHandler(data);
    });
  }

  stripeResponseHandler(response) {
    if (response.error) {
      console.log("error")
      console.log(response.console.error.message);
    }
    else {
      this.token = response.token.id
      console.log('success')
      console.log('Sending token param:')
      console.log(this.token)
      this.navCtrl.push(ThankyouPage, {token: this.token})
    }
  }
}
