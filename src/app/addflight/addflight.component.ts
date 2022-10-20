import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  flightname=""
  origin=""
  destination=""
  capacity=""
  status:boolean=false

  readValues=()=>{
    let data={
    "flightname":this.flightname,
    "origin":this.origin,
    "destination":this.destination,
  "capacity":this.capacity
    }
    console.log(data)
    this.myapi.addData(data).subscribe(
      (response)=>{
        console.log(response)
        alert("successfully added")
        this.flightname=""
        this.origin=""
        this.destination=""
        this.capacity=""
        this.status=true
      }
    )
  }
  ngOnInit(): void {
  }

}
