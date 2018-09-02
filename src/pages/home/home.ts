import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  hideMe: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  HideNavigateButton(){
    this.hideMe = true
  }
  NavigateToSignIn(){
    this.navCtrl.setRoot(SignInPage, {nama:'Andre,', umur:' 25 tahun'})
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
