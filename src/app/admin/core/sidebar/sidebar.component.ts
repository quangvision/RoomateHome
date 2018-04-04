import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    private router: Router 
  ) { }

  ngOnInit() {
  }
  level: number;
  
  setLevel(level){
    this.level =  level
  }
  getLevel(){
    return this.level;
  }
}
