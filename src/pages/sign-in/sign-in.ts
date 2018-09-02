import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  NavigateToSecond(){
    this.navCtrl.setRoot(SecondPage)
  }
  ionViewDidLoad() {
    let getNama = this.navParams.get('nama');
    let getUmur = this.navParams.get('umur');
        
    console.log(getNama, getUmur);
  }
}
