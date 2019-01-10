import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  classActive: boolean = false;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  routeTo(param) {
    this.router.navigate([param])
    this.classActive = !this.classActive;
  }
  change() {
    this.classActive = !this.classActive;
  }
}
