import {Component}from '@angular/core';
@Component({
  selector:'app-property-card',
  templateUrl:'property-card.component.html',
  styleUrls:['./property-card.component.css']

})
export class propertycardcomponent{
property:any={
  "Id":1,
  "Name":"Biral House",
  "Type":"House",
  "Price":12000
}
}
