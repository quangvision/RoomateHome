import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {   
  }
  logout(){
  }
}
