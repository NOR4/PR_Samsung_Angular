import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  action  = 'insert';
  posicion = 0;
  

  usersList: Array<User> = []

  user : User = {
    name : '',
    surname : '',
    age : '',
    birthday : '',
    dni : '',
    gender : '',
    favColor : ''

  }

  registerUser() {
    if (this.action === 'insert') {
      if(this.user.age > 0 && this.user.age <= 125){
        this.usersList.push(this.user);
      } else {
        this.usersList[this.posicion] = this.user;
      }
     
      this.user = {
        name : '',
        surname : '',
        age : '',
        birthday : '',
        dni : '',
        gender : '',
        favColor : ''
      }  
      
    }    

  }
  constructor() {}

  ngOnInit(): void {}

  actualizar ( posicionActualizar: any) {
    this.user = this.usersList[posicionActualizar];
    this.action = 'actualizar';
    this.posicion = posicionActualizar;
  }

  eliminar ( posicionEliminar: any) {
    this.usersList.splice ( posicionEliminar, 1);
  }

}
