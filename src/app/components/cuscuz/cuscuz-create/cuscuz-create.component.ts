import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CuscuzService } from '../../../services/cuscuz.service';
import { Cuscuz } from '../../../models/cuscuz';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuscuz-create',
  templateUrl: './cuscuz-create.component.html',
  styleUrls: ['./cuscuz-create.component.css']
})
export class CuscuzCreateComponent implements OnInit {

  //instanciando Cuscuz
  cuscuz: Cuscuz = {
    id:     '',
    titulo: '',
    texto:  ''

  }

  //Validando campos para abilitar o botão criar
  titulo: FormControl = new FormControl(null, Validators.minLength(3));
  texto: FormControl = new FormControl(null, Validators.minLength(20));

  //intanciano CuscuzService, toastr
  constructor(
    private service:  CuscuzService,
    private toast:    ToastrService,
    private router:   Router, ) {}

  ngOnInit(): void {}

  //Metodo create
  create(){
      this.service.create(this.cuscuz).subscribe(resposta => {
      this.toast.success('Cuscuz criado com sucesso','Nova mensagem');
      this.router.navigate(['cuscuz']);
    }, ex =>{
    this.toast.error(ex.error.error);

  })
}

//Metodo valida campos
validaCampos(): boolean {
  return this.titulo.valid && this.texto.valid
}
}
