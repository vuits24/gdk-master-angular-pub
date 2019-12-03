import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule, MatIconModule} from "@angular/material";
import {TranslateModule} from "@ngx-translate/core";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {
  GdkSharedModule, GdkModule, GdkLayoutModule, GdkThemeOptionsModule, GdkProgressBarModule, GdkSidebarModule
} from "gdk-ang-lib";

import {MainModule} from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TranslateModule.forRoot(),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,

    // Gdk modules
    GdkModule,
    GdkProgressBarModule,
    GdkSharedModule,
    GdkSidebarModule,
    GdkThemeOptionsModule,
    // App modules
    GdkLayoutModule,
    MainModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
