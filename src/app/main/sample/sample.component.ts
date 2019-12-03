import {AfterViewInit, Component} from '@angular/core';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements  AfterViewInit {
  /**
   * Constructor
   *
   * @param {GdkTranslationLoaderService} _gdkTranslationLoaderService
   */
  constructor(
    // private _gdkTranslationLoaderService: GdkTranslationLoaderService,
  ) {
    // this._gdkTranslationLoaderService.loadTranslations(english, turkish);
  }
  ngAfterViewInit(): void {
  }
}
