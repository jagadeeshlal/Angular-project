import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $(".banner").animate({
        height: "250px"
      });
    })
  }

}
