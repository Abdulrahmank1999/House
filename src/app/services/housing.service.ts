import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map}from 'rxjs/operators'
import { Iproperty } from '../property/Iproperty.interface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {


    }

    getallproperties():Observable<Iproperty[]>{
      return this.http.get('Data/properties.json').pipe(

        map(data=>
          {
            const propertiesarray:Array<Iproperty>=[];
            for(const id in data){
              if(data.hasOwnProperty(id)){
                propertiesarray.push(data[id]);
              }

            }

            return propertiesarray;


          }
          )
      )

    }

   }

