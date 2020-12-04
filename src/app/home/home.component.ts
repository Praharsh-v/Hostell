import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router'; 
import { getMaxListeners, mainModule } from 'process';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
 {
  mail:String;
  addcard : String='addcard';
  Heading='HostelName';
  Bodytext='Some description';
  Reviews='reviews';
  RateThis='Rate This Hostel'
  login='loginorsignup';
  
 public Profilenav ;

  constructor(private router:Router, private activatedRoute:ActivatedRoute)
   {
    console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit(): void
   {
    var maill:String[]=history.state;
    var x:String[]=new Array(maill[0],maill[1],maill[2],maill[3],maill[4],maill[5],maill[6],maill[7],maill[8],maill[9]);
    var y=   x.join("");
    this.Profilenav=y;
    document.getElementById('Loginorsignup').innerHTML=y
    y=this.Profilenav
  }
  myFunc()
     {
     this.router.navigateByUrl('/Profile', { state: this.Profilenav});
    }
}
