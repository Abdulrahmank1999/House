import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties:Array<any>=[{
    "Id":1,
    "Name":"Biral House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":2,
    "Name":"Erose Villa House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":3,
    "Name":"Macro House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":4,
    "Name":"Pearl White House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":5,
    "Name":"Hay White House",
    "Type":"House",
    "Price":12000
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
