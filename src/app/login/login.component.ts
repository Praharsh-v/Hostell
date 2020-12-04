import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})

export class LoginComponent implements OnInit {
 mail:String;
 pass:String;
 LoginMessage='';
 Content='';
  
  public product = { mail:'', pass:''};
  constructor(private router:Router, private activatedRoute:ActivatedRoute)
  {

  console.log(this.router.getCurrentNavigation().extras.state);
}
  myFunc(mail,pass) {
    var x=mail;
    var y=pass;
    console.log(x,y);//here you will get input value through ng-model

    this.router.navigateByUrl('/Home', { state: this.mail});
    console.log(this.mail)
  }
   
  
  
ngOnInit(): void {
}


}

