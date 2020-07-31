import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  boletaForm = this.fb.group({
    monto: ['', Validators.required],
    porcentaje: ['10.75', Validators.required],
    // address: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: ['']
    // }),
    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])
  });

  resultadoLiquido: any = '0';
  resultadoBruto: any = '0';
  resultadoRetencion: any = '0';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit2() {

  }

  onSubmit() {
    var monto: any = this.boletaForm.controls['monto'].value;
    var porcentaje: any = this.boletaForm.controls['porcentaje'].value;

    porcentaje = 100 - porcentaje;
    porcentaje = porcentaje.toString().replace(/\./g, '')
    porcentaje = '.' + porcentaje;

    this.resultadoBruto = Math.floor(monto / porcentaje);
    this.resultadoLiquido = (monto * porcentaje);
    this.resultadoRetencion = (monto / porcentaje) / 100;

  }

}
