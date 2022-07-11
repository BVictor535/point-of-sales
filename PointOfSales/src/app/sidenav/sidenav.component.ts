import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {


  expandElements: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  expand(): void {
    this.expandElements = !this.expandElements;
  }

}
