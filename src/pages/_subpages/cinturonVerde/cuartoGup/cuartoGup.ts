// Requsitos minimos
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: "page-home", // Estilos del archivo SCSS
    templateUrl: "cuartoGup.html" // Diseño HTML
})

export class CuartoGupPage {
    // Variables globales

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}