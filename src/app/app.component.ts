import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
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

// Submenu
import { SideMenuContentComponent } from '../side-menu-content/side-menu-content.component';
import { SideMenuOption } from '../side-menu-content/models/side-menu-option';
import { SideMenuSettings } from '../side-menu-content/models/side-menu-settings';

// Subpaginas
import { DecimoGupPage } from '../pages/_subpages/cinturonBlanco/decimoGup/decimoGup';
import { NovenoGupPage } from '../pages/_subpages/cinturonBlanco/novenoGup/novenoGup';
import { OctavoGupPage } from '../pages/_subpages/cinturonBlanco/octavoGup/octavoGup';
import { SeptimoGupPage } from '../pages/_subpages/cinturonBlanco/septimoGup/septimoGup';
import { SextoGupPage } from '../pages/_subpages/cinturonVerde/sextoGup/SextoGup';
import { QuintoGupPage } from '../pages/_subpages/cinturonVerde/quintoGup/quintoGup';
import { CuartoGupPage } from '../pages/_subpages/cinturonVerde/cuartoGup/cuartoGup';
import { TerceroGupPage } from '../pages/_subpages/cinturonRojo/terceroGup/terceroGup';
import { SegundoGupPage } from '../pages/_subpages/cinturonRojo/segundoGup/segundoGup';
import { PrimerGupPage } from '../pages/_subpages/cinturonRojo/primerGup/primerGup';
import { PrimerDanPage } from  '../pages/_subpages/cinturonAzul/primerDan/primerDan';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // Declaración de variables
  rootPage: any = InicioPage;
  pagesLeft: Array<{ title: string, component: any }>;
  //pagesRight: Array<{ title: string, component: any }>;
  activePageLeft: any;
  //activePageRight: any;

  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;
  public options: Array<SideMenuOption>;
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'active-option'
  }

  // showSubmenu: boolean = false;

  password: string = "";
  passwordValue: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuController: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.inicializarMenus();
    });
  }

  private inicializarMenus(): void {
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

    /*this.pagesRight = [
      { title: 'Moo Pal Dan Kum', component: MooPalDanKumPage },
      { title: 'Ki Cho Soo Gui', component: KiChoSooGuiPage }
    ];*/

    this.activePageLeft = this.pagesLeft[0];

    // SUBMENUS
    this.options = new Array<SideMenuOption>();

    this.options.push({
      displayText: 'Cinturón blanco',
      suboptions: [
        {
          displayText: '10º GUP',
          component: DecimoGupPage
        },
        {
          displayText: '9º GUP',
          component: NovenoGupPage
        },
        {
          displayText: '8º GUP',
          component: OctavoGupPage
        },
        {
          displayText: '7º GUP',
          component: SeptimoGupPage
        }
      ]
    });
    this.options.push({
      displayText: 'Cinturón verde',
      suboptions: [
        {
          displayText: '6º GUP',
          component: SextoGupPage
        },
        {
          displayText: '5º GUP',
          component: QuintoGupPage
        },
        {
          displayText: '4º GUP',
          component: CuartoGupPage
        }
      ]
    });
    this.options.push({
      displayText: 'Cinturón rojo',
      suboptions: [
        {
          displayText: '3º GUP',
          component: TerceroGupPage
        },
        {
          displayText: '2º GUP',
          component: SegundoGupPage
        },
        {
          displayText: '1º GUP',
          component: PrimerGupPage
        }
      ]
    });
    this.options.push({
      displayText: 'Cinturón azul',
      suboptions: [
        {
          displayText: '1º Dan',
          component: PrimerDanPage
        }
      ]
    });
  }

  public onOptionSelected(option: SideMenuOption): void {
    this.menuController.close().then(() => {
      // Get the params if any
      const PARAMS = option.custom && option.custom.param;
      // Redirect to the selected page
      this.nav.setRoot(option.component, PARAMS);
    });
  }

  public collapseMenuOptions(): void {
    this.sideMenu.collapseAllOptions();
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePageLeft = page;
    //this.activePageRight = page;
  }

  public checkActive(page) {
    // https://www.joshmorony.com/create-a-menu-with-active-page-highlight-in-ionic-2/
    if (page == this.activePageLeft) {
      return page;
    } else {
      // return page == this.activePageRight;
    }
  }

  /*menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }*/


  public authenticated() {
    return this.passwordValue;
  }

  public checkPassword() {
    if (this.password == "admin") {
      this.passwordValue = true;
    }
  }
}
