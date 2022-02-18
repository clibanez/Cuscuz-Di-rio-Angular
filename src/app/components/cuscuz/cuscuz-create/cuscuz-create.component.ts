import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CuscuzService } from '../../../services/cuscuz.service';
import { Cuscuz } from '../../../models/cuscuz';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cuscuz-create',
  templateUrl: './cuscuz-create.component.html',
  styleUrls: ['./cuscuz-create.component.css']
})
export class CuscuzCreateComponent implements OnInit {

  //instanciando Cuscuz
  cuscuz: Cuscuz = {
    id: '',
    titulo:'',
    texto:''

  }

  //Validando campos para abilitar o botão criar
  titulo: FormControl = new FormControl(null, Validators.minLength(3));
  texto: FormControl = new FormControl(null, Validators.minLength(10));

  //intanciano CuscuzService
  constructor(
    private service: CuscuzService,
    private toast:ToastrService, ) {}

  ngOnInit(): void {}

  //Metodo create
  create(){
    this.service.create(this.cuscuz).subscribe(resposta => {
      this.toast.success('Cuscuz criado com sucesso','criado');
    }, ex =>{
    console.log(ex);
  })
}

//Metodo valida campos
validaCampos(): boolean {
  return this.titulo && this.texto.valid
}
}
