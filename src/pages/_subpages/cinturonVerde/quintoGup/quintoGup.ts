// Requsitos minimos
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: "page-home", // Estilos del archivo SCSS
    templateUrl: "quintoGup.html" // Diseño HTML
})

export class QuintoGupPage {
    // Variables globales

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}