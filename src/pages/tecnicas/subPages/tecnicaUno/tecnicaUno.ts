// Requsitos minimos
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: "page-list", // Estilos del archivo SCSS
	templateUrl: "tecnicaUno.html" // Diseño HTML
})

export class TecnicaUnoPage {
	// Variables globales

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
}