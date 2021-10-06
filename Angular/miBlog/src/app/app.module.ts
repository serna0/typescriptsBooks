import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Componentes */
import { AppComponent } from './app.component';

/* Rutas */
import { AppRoutingModule } from './app-routing.module';

/* Modulos */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ContactModule } from './contact/contact.module';

/* Scully */
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ContactModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
