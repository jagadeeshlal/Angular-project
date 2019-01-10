import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import * as $ from 'jquery';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(function () {
      var ht = $(window).height();
      $(".banner,.banner__story, .banner__block")
        .animate({ height: ht },
          'slow', 'linear');
      $(".banner").fadeIn('slow');
    })
  }
}