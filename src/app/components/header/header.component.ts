import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classActive: boolean = false;
  current: string = '';
  constructor(private router: Router) {
    this.current = this.router.url.substring(1, this.router.url.length)
  }
  ngOnInit() {

    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
          $('.header').addClass("fixed-top");
        }
        else {
          $('.header').removeClass("fixed-top");
        }
      });
      $(".fact-link").click(function () {
        $('.logo-image').hide();
        if ($('.logo-loader').hide()) {
          $('.logo-loader').show();
        }
        setTimeout(
          function () {
            $('.logo-image').fadeIn();
            $('.logo-loader').fadeOut();
          },
          300);
      });
    })
  }
  handleOpen() {
    this.classActive = !this.classActive;
  }
  routeTo(param) {
    this.router.navigate([param])
    this.classActive = true;
  }

  change() {
    this.classActive = !this.classActive;
  }
}

