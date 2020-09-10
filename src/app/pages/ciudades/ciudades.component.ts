import { Component, OnInit } from '@angular/core';
import { Ciudad, Clima, Temperatura} from '/Users/María/Desktop/CODENOTCH/RETOS/ANGULAR 2/angular-app2/src/app/models/ciudad'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
   
  public misCiudades : Ciudad[];

   public clima1: Clima;
   public clima2: Clima;
   public clima3: Clima;

   public temp1: Temperatura;
   public temp2: Temperatura;
   public temp3: Temperatura;

  

  constructor() {

    this.temp1 = {valor: 30, unidad:"Celsius"};
    this.temp2 = {valor: 35, unidad: "Celsius"};
    this.temp3 = {valor: 25, unidad: "Fahrenheit"};
    
    this.clima1 = {temperatura: this.temp1, viento: 15, precipitaciones: 3};
    this.clima2 = {temperatura: this.temp2, viento: 5, precipitaciones: 1};
    this.clima3 = {temperatura: this.temp3, viento: 25, precipitaciones: 90};


    this.misCiudades = [
     {nombre: "Segovia", pais: "España", codigo: "SEG", clima: this.clima1},
     {nombre: "Roma", pais: "Italia", codigo: "ROM", clima: this.clima2},
     {nombre: "Dublin", pais: "Irlanda", codigo: "DUB", clima: this.clima3}

    ]

  }
   
   
  //  FUNCION DE AÑADIR CIUDAD

  //  anyadirCiudad(nombre, pais, codigo){

  //   var ciudad1 = new Ciudad(nombre.value, pais.value, codigo.value);
  //   this.misCiudades.push(ciudad1)
  //  }


  //FUNCION DE MOSTRAR CLIMA

  public indice : number;

  mostrarClima(indice){
    this.indice = indice;
    

  }

  
  




  ngOnInit(): void {
  }

}
