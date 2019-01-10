import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      $(".banner").animate({
        height: "250px"
      });
    })
  }
}
