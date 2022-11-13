import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Bancaria de tasas de inversión'; // permite modificar el titulo de la app
  v_actual:number=0; // variable en donde se almacena el valor a depositar
  m_inversion:number=0; // variable en donde se almacena los meses de inversión
  resultado:number=0; // variable que almacena el resultado del calculo

  b = Array.of(this.v_actual, this.m_inversion, this.resultado);
  // arreglo que va a almacenar los datos solicitados

  // configuración del controlador
  // metodo para calcular la inversión
  Calcular():void{
    this.resultado = this.v_actual*(1+0.02)**this.m_inversion
    // Valor final = valor actual * (1+ (tasa de interes))** (elevado) meses de inversión

  }
  // metodo para almacenar los datos solicitados en el arreglo
  Registro():void{
    this.b = [this.v_actual, this.m_inversion, this.resultado]
  }
  //

}