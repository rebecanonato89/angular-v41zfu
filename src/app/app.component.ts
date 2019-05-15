import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  formConcluidoErro: boolean = false;
  formConcluido: boolean = false;
  
  inserir(){
    this.formConcluido = true;
  }
}
