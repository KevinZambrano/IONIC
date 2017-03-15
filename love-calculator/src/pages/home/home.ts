import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 nombre1 = '';
 nombre2 = '';


 get score() {
   const letras = (this.nombre1 + this.nombre2).toLowerCase();
   let sum = 0;
   for (let i = 0; i < letras.length; i++){
     sum = sum + letras.charCodeAt(i);
   }
   return sum % 101;
 }
}
