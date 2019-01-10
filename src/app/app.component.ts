import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular6-boiler';
  constructor(
    private wowService: NgwWowService
  ){
    this.wowService.init();
    this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
      });
  }
  onActivate(event) {
    window.scroll(0, 0);
  }
}
