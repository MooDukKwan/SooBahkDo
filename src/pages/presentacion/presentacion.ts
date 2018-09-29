import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: "page-list", // Estilos del archivo SCSS
    templateUrl: "presentacion.html" // Diseño HTML
})

export class PresentacionPage {
    // Variables globales

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}