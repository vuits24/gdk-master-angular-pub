import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleModule} from "./sample/sample.module";
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SampleModule,
    HomeModule
  ],

})
export class MainModule {
}
