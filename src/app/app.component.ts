import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Mis paginas
import { InicioPage } from '../pages/inicio/inicio';
import { PresentacionPage } from '../pages/presentacion/presentacion';
import { WorldMooDukKwanPage } from '../pages/worldMooDukKwan/worldMooDukKwan';
import { SooBahkDoPage } from '../pages/sooBahkDo/sooBahkDo';
import { CincoValoresMooDoPage } from '../pages/cincoValoresMooDo/cincoValoresMooDo';
import { MisionDosMilPage } from '../pages/misionDosMil/misionDosMil';
import { OchoConceptosClavesPage } from '../pages/ochoConceptosClaves/ochoConceptosClaves';
import { DiezCodigosFePage } from '../pages/diezCodigosFe/diezCodigosFe';
import { SipSamSePage } from '../pages/sipSamSe/sipSamSe';

// Subpaginas
import { MooPalDanKumPage } from '../pages/subpages/mooPalDanKum/mooPalDanKum';
import { KiChoSooGuiPage } from '../pages/subpages/kiChoSooGui/kiChoSooGui';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // Declaración de variables
  rootPage: any = InicioPage;
  pagesLeft: Array<{ title: string, component: any }>;
  pagesRight: Array<{ title: string, component: any }>;
  activePageLeft: any;
  activePageRight: any;

  showSubmenu: boolean = false;

  password: string = "";
  passwordValue: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pagesLeft = [
      { title: 'Inicio', component: InicioPage },
      { title: 'Presentación', component: PresentacionPage },
      { title: 'World Moo Duk Kwan', component: WorldMooDukKwanPage },
      { title: 'Soo Bahk Do', component: SooBahkDoPage },
      { title: '5 Valores Moo Do', component: CincoValoresMooDoPage },
      { title: 'Misión 2000', component: MisionDosMilPage },
      { title: '8 Conceptos Clave', component: OchoConceptosClavesPage },
      { title: '10 Códigos de Fe', component: DiezCodigosFePage },
      { title: 'Sip Sam Se', component: SipSamSePage }
    ];

    this.pagesRight = [
      { title: 'Moo Pal Dan Kum', component: MooPalDanKumPage },
      { title: 'Ki Cho Soo Gui', component: KiChoSooGuiPage }
    ];

    this.activePageLeft = this.pagesLeft[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePageLeft = page;
    this.activePageRight = page;
  }

  checkActive(page) {
    // https://www.joshmorony.com/create-a-menu-with-active-page-highlight-in-ionic-2/
    if (page == this.activePageLeft) {
      return page;
    } else {
      return page == this.activePageRight;
    }
  }

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }


  authenticated() {
    return this.passwordValue;
  }

  checkPassword() {
    if (this.password == "admin") {
      this.passwordValue = true;
    }
  }
}
