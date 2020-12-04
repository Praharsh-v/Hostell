import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hostel';
 
  
  // @HostListener('click', ['$event.target'])
  // onClickMe() {
  //   var div1=document.createElement('div');

  //   div1.innerHTML='<div><div class="card"><h5 class="card-header">Featured</h5><div class="card-body"><h5 class="card-title">Special title treatment</h5><p class="card-text">With supporting text below as a natural lead-in to additional content.</p><button (click)="onClickMe()" id="button"  class="btn btn-primary" >Add Card</button></div></div></div><div id="hello"></div>'
  //   document.getElementById("newElementId").appendChild(div1);
//  }

}
