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
  resp = "Está com algum erro!!!";

  inserir(){
    this.formConcluido = true;
  }
  inserir2(){
    this.formConcluidoErro = true;
  }
}
