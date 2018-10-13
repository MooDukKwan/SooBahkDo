# SooBahkDo
Manual de artes marciales

################
## CREAR MENU ##
################

1) En la ruta ".\src\pages" crear carpeta con el "nombreOpcionMenu".

2) Dentro dela carpeta, crear 3 archivos en formato: "nombreOpcionMenu.html", "nombreOpcionMenu.scss" y "nombreOpcionMenu.ts"

RUTA FINAL:

-src
   |-pages
      |-tecnicas
         |-tecnicas.html
         |-tecnicas.scss
         |-tecnicas.ts

nombreOpcionMenu.ts
	// Requsitos minimos
	import { Component } from '@angular/core';
	import { NavController, NavParams } from 'ionic-angular';

	@Component({
	    selector: "page-list", // Estilos del archivo SCSS
	    templateUrl: "nombreOpcionMenu.html" // Diseño HTML
	})

	export class NombreOpcionMenuPage {
	    // Variables globales

	    constructor(public navCtrl: NavController, public navParams: NavParams) {
	    }
	}

nombreOpcionMenu.html
	<!-- Esqueleto básico -->
	<ion-header>
	<ion-navbar>
		<button ion-button menuToggle>
		<ion-icon name="menu"></ion-icon>
		</button>
		<ion-title>TITULO</ion-title>
	</ion-navbar>
	</ion-header>

	<ion-content padding class="contenido">
	<!-- Titulo y contenido -->
	</ion-content>

app.module.ts
	a) Crear: import { NombreOpcionMenu } from 'ruta de la pagina';
	import { IntroduccionPage } from '../pages/introduccion/introduccion';

	b) añadir en "declaration" el NombreOpcionMenu

	c) añadir en "entryComponents" el NombreOpcionMenu

app.component.ts
	a) Crear: import { NombreOpcionMenu } from 'ruta de la pagina';
	import { IntroduccionPage } from '../pages/introduccion/introduccion';
	
	b) Añadir la pagina al array: {title: 'titulo', component: 'NombreOpcionMenu del import'}
	{ title: 'Introduccion', component: IntroduccionPage }

