import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ownerName:string ='Yarik';
  languages = ['C#','C++','Pascal','Vasik','Assembler'];
  constructor() { }

  ngOnInit() {
  }

}
