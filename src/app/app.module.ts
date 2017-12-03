import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule, dynamicComponents, routedComponents} from './app.routes';
import {HttpModule} from '@angular/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    dynamicComponents,
    MainLayout,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpModule,
  ], // modules needed to run this module
  providers: [AssetService], // additional providers needed for this module
  entryComponents: [dynamicComponents],
  bootstrap: [AppComponent],
})
export class AppModule {
}
