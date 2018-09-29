import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: "page-list", // Estilos del archivo SCSS
    templateUrl: "introduccion.html" // Diseño HTML
})

export class IntroduccionPage {
    // Variables globales

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}