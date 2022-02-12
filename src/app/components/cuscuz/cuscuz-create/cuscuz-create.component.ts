import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuscuz-create',
  templateUrl: './cuscuz-create.component.html',
  styleUrls: ['./cuscuz-create.component.css']
})
export class CuscuzCreateComponent implements OnInit {

  //Validando campos para abilitar o botão criar
  titulo: FormControl = new FormControl(null, Validators.minLength(3));
  texto: FormControl = new FormControl(null, Validators.minLength(10));

  constructor() { }

  ngOnInit(): void {
  }

  //metodo valida campos
  validaCampos(): boolean {
    return this.titulo && this.texto.valid
  }

}
