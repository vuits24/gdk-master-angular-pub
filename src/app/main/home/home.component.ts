import { Component, OnInit } from '@angular/core';
import {GdkConfigService} from "gdk-ang-lib";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private  gdkConfig: GdkConfigService) {
    this.gdkConfig.titleView = "Trang chủ";
  }

  ngOnInit() {
  }

}
