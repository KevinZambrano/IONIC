import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThankyouPage } from '../thankyou/thankyou';
import { MyFormService } from '../../services/myForm';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private data: any;
  private isSubmitted: Boolean = false;
  constructor(public nav: NavController, private formData:
  MyFormService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      name: '',
      phone: '',
      comment: '',
      tos: false
    }
  }

}
