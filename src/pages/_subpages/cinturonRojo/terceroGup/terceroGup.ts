// Requsitos minimos
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: "page-home", // Estilos del archivo SCSS
    templateUrl: "terceroGup.html" // Diseño HTML
})

export class TerceroGupPage {
    // Variables globales

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}