import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seachflight',
  templateUrl: './seachflight.component.html',
  styleUrls: ['./seachflight.component.css']
})
export class SeachflightComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  flightname=""

readValue=()=>{
  let data={
    "flightname":this.flightname
  }
  console.log(data)
  this.myapi.searchFlight(data).subscribe(
    (resp)=>{
     this.data=resp

      this.flightname=""
    }
  )
}

data:any=[]

  ngOnInit(): void {
  }

}
