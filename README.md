# SooBahkDo
Manual de artes marciales


# CREAR MENU 

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
	    selector: "page-home", // Estilos del archivo SCSS
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
			<ion-title style="text-align: center">Soo Bahk Do</ion-title>
			<button ion-button start menuToggle="leftMenu">
				<ion-icon name="Book"></ion-icon>
			</button>
			<button ion-button end menuToggle="rightMenu">
				<ion-icon name="Karate"></ion-icon>
			</button>
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

# Generar APK
https://ionicframework.com/docs/v1/guide/publishing.html

1. cd [PROJECT PATH]
2. ionic cordova build --release android
3. cd "C:\Program Files\Java\jdk1.8.0_181\bin"
4. jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "[RUTA_PREFERIDA]\my-release-key.keystore" "[RUTA_PROYECTO]\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" alias_name
5. cd "[RUTA_USUARIO]\AppData\Local\Android\Sdk\build-tools\28.0.2"
6. zipalign -v 4 "[RUTA_PROYECTO]\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" "[RUTA_PROYECTO]\platforms\android\app\build\outputs\apk\release\SooBahkDo.apk"

3.1 Crear clave firmada: keytool -genkey -v -keystore "[RUTA_PREFERIDA]\my-release-key.keystore" -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

# POSIBLES ERRORES
- Licencia SDK del Android Studio no firmado
	1. Ejecutar Andorid Studio.
	2. Ejecutar "cd %appdata%\..\Local\Android\Sdk\tools\bin". Ejecutar "sdkmanager --licenses"
