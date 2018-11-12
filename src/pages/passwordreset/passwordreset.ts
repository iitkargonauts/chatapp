import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the PasswordresetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public userservice: UserProvider, public alertCtrl: AlertController) {
  }
 
  ionViewDidLoad() {
   console.log('ionViewDidLoad PasswordresetPage');
  }
 
  reset() {
    // let alert = this.alertCtrl.create({
    //   buttons: ['Ok']
    // });
    this.userservice.passwordreset(this.email).then((res: any) => {
      console.log('1');
      if (res.success) {
        console.log('2');
        alert('Email has been Sent.\n'+'Please follow the instructions in the email to reset your password');
        this.goback();
      }
      else {
        console.log('3');
        var erro = 'The Email is not registered'
        alert(erro);
      }
    })
  }
 
  goback() {
    this.navCtrl.setRoot('LoginPage');
  }
 
}