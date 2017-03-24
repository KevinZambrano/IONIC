import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ThankyouPage } from '../pages/thankyou/thankyou'
import { MyFormService } from '../services/myForm'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ThankyouPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ThankyouPage
  ],
  providers: [MyFormService]
})
export class AppModule {}
