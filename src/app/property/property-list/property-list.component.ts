import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties:Array<Iproperty>;
  constructor(private housing: HousingService) { }

  ngOnInit(): void {

this.housing.getallproperties().subscribe(
 Data=>{
    this.properties=Data;
    console.log(Data);
  },error=>{
    console.log(error);
  }

);
    //this.http.get('Data/properties.json').subscribe(
//Data=>{
  //this.properties=Data;
  //console.log(Data)}
    //)
  }

}
