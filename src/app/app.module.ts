import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// COMPONENTE
import { MyApp } from './app.component';

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


@NgModule({
  declarations: [
    MyApp, // Principal
    SideMenuContentComponent, // Submenu
    InicioPage,
    PresentacionPage,
    WorldMooDukKwanPage,
    SooBahkDoPage,
    CincoValoresMooDoPage,
    MisionDosMilPage,
    OchoConceptosClavesPage,
    DiezCodigosFePage,
    SipSamSePage,
    // SUBPAGINA
    DecimoGupPage,
    NovenoGupPage,
    OctavoGupPage,
    SeptimoGupPage,
    SextoGupPage,
    QuintoGupPage,
    CuartoGupPage,
    TerceroGupPage,
    SegundoGupPage,
    PrimerGupPage,
    PrimerDanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PresentacionPage,
    WorldMooDukKwanPage,
    SooBahkDoPage,
    CincoValoresMooDoPage,
    MisionDosMilPage,
    OchoConceptosClavesPage,
    DiezCodigosFePage,
    SipSamSePage,
    // SUBPAGINA
    DecimoGupPage,
    NovenoGupPage,
    OctavoGupPage,
    SeptimoGupPage,
    SextoGupPage,
    QuintoGupPage,
    CuartoGupPage,
    TerceroGupPage,
    SegundoGupPage,
    PrimerGupPage,
    PrimerDanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
  static injector: Injector;
  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
