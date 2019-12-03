import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {TranslateService} from "@ngx-translate/core";
import {takeUntil} from "rxjs/operators";
import {Platform} from "@angular/cdk/platform";
import {navigation} from "./navigation/navigation";
// @ts-ignore
import {GdkConfigService, GdkNavigationService, GdkSidebarService, GdkSplashScreenService, GdkTranslationLoaderService} from "gdk-ang-lib";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  gdkConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {GdkConfigService} _gdkConfigService
   * @param {GdkNavigationService} _gdkNavigationService
   * @param {GdkSidebarService} _gdkSidebarService
   * @param {GdkSplashScreenService} _gdkSplashScreenService
   * @param {GdkTranslationLoaderService} _gdkTranslationLoaderService
   * @param {Platform} _platform
   * @param {TranslateService} _translateService
   */
  constructor(
    @Inject(DOCUMENT) private document: any,
    private _gdkConfigService: GdkConfigService,
    private _gdkNavigationService: GdkNavigationService,
    private _gdkSidebarService: GdkSidebarService,
    private _gdkSplashScreenService: GdkSplashScreenService,
    private _gdkTranslationLoaderService: GdkTranslationLoaderService,
    private _translateService: TranslateService,
    private _platform: Platform
  ) {
    // Get default navigation
    this.navigation = navigation;

    // Register the navigation to the service
    this._gdkNavigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._gdkNavigationService.setCurrentNavigation('main');

    // Add languages
    this._translateService.addLangs(['en']);
    //
    // // Set the default language
    this._translateService.setDefaultLang('en');
    //
    // // Set the navigation translations
    // this._gdkTranslationLoaderService.loadTranslations(navigationEnglish, navigationTurkish);
    //
    // // Use a language
    this._translateService.use('en');
    this._gdkNavigationService.setMyInfo({
      name: 'Demo',
      logo: '/assets/images/logos/logo.png',
      avatar: '/assets/images/avatars/apluc.png',
      email: 'info@noihoidonganh.com',
      username: 'admin'
    });


    // Add is-mobile class to the body if the platform is mobile
    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._gdkConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.gdkConfig = config;

        // Boxed
        if (this.gdkConfig.layout.width === 'boxed') {
          this.document.body.classList.add('boxed');
        } else {
          this.document.body.classList.remove('boxed');
        }

        // Color theme - Use normal for loop for IE11 compatibility
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.document.body.classList.length; i++) {
          const className = this.document.body.classList[i];

          if (className.startsWith('theme-')) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.gdkConfig.colorTheme);
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._gdkSidebarService.getSidebar(key).toggleOpen();
  }
}

