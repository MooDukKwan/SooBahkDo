import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Mis subpaginas
import { TecnicaUnoPage } from './subPages/tecnicaUno/tecnicaUno';

@Component({
    templateUrl: "tecnicas.html"
})

export class TecnicasComponent {
    // Variables globales
    @ViewChild(Nav) nav: Nav;
    rootSubPage: any = TecnicaUnoPage;
    subPages: Array<{ title: string, component: any }>;


    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();
        this.subPages = [
            { title: 'Inicio', component: TecnicaUnoPage }
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openSubPage(subpage) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(subpage.component);
    }
}