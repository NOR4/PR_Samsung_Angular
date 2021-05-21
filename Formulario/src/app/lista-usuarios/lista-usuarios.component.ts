import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-lista',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})


export class ListaUsuariosComponent implements OnInit {

 
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

  actualizar ( posicionActualizar) {
    this.user = this.usersList[posicionActualizar];
    this.action = 'actualizar';
    this.posicion = posicionActualizar;
  }

  eliminar ( posicionEliminar) {
    this.usersList.splice ( posicionEliminar, 1);
  }

}
