import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PresentacionPage,
    WorldMooDukKwanPage,
    SooBahkDoPage,
    CincoValoresMooDoPage,
    MisionDosMilPage,
    OchoConceptosClavesPage,
    DiezCodigosFePage,
    SipSamSePage
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
    SipSamSePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
