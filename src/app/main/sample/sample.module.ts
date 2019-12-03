import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {SampleComponent} from './sample.component';
import {GdkSharedModule} from "gdk-ang-lib";

const routes: Routes = [
  {
    path: 'sample',
    pathMatch: 'full',
    component: SampleComponent
  }
];

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    GdkSharedModule
  ],
  exports: [
    SampleComponent
  ]
})

export class SampleModule {
}
