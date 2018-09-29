// Requsitos minimos
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: "page-list", // Estilos del archivo SCSS
	templateUrl: "misionDosMil.html" // Diseño HTML
})

export class MisionDosMilPage {
	// Variables globales

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
}