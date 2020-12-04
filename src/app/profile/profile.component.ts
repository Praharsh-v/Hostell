import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  login='';
  Profilenav='';
  public profile;
  Username:'';
  Name:'';
  Email:'';
  CurrentHostel:'';
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void
   {
    var maill:String[]=history.state;
    
    var x:String[]=new Array(maill[0],maill[1],maill[2],maill[3],maill[4],maill[5],maill[6],maill[7],maill[8],maill[9]);
    var y=x.join("");
    this.profile=y
  if(  Boolean(history.state)==true)
    {
      if(this.router.url === '/Profile')
      {
          document.getElementById('Loginorsignup').innerHTML=y;
      }
    }
    
  }
  myfunc()
  {
     this.router.navigateByUrl('/Home', { state:this.profile}); 
  }
  ProfileUpdate(Username,Name,Email,CurrentHostel)
  {
    console.log(Username);
    console.log(Name);
    console.log(Email);
    console.log(CurrentHostel);

  }

}
