// Requsitos minimos
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: "page-list", // Estilos del archivo SCSS
	templateUrl: "ochoConceptosClaves.html" // Diseño HTML
})

export class OchoConceptosClavesPage {
	// Variables globales

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
}