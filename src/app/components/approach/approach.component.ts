import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-approach',
  templateUrl: './approach.component.html',
  styleUrls: ['./approach.component.scss']
})
export class ApproachComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      $(".banner").animate({
        height: "250px"
      });
      var a = 0;
      $(window).scroll(function () {
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-value').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            },

              {
                duration: 7000,
                easing: 'swing',
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
                }

              });
          });
          a = 1;
        }
      });
    })
  }

}
