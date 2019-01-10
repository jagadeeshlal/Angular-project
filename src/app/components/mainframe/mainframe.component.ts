import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.scss']
})
export class MainframeComponent implements OnInit {
  constructor(private homeService: HomeService) {
  }
  Page: string = "expertize"
  ngOnInit() {
    $(function loadContent() {
      $(".loading").fadeOut("slow");
      var nav = $('.fact-link');
      if (nav.length) {
        var contentNav = nav.offset().top;
      }
    });
  }
  onActivate(event) {
    window.scroll(0, 0);
  }
}
