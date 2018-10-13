import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// COMPONENTE
import { TecnicasComponent } from './tecnicas.component';

// Mis Subpáginas
import { TecnicaUnoPage } from './subPages/tecnicaUno/tecnicaUno';

@NgModule({
    declarations: [
        TecnicasComponent,
        TecnicaUnoPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(TecnicasComponent),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        TecnicasComponent,
        TecnicaUnoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class TecnicasModule { }