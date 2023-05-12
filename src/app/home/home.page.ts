import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor(private router: Router) {}
  ngOnInit() {
  }
  sendToScores(){
    // code for sending user to live scores page
    this.router.navigate(['/live']);
  }

sendToNews(){
  // code for sending user to news page
  this.router.navigate(['/news']);
}
sendToDiscussion(){
  // code for sending user to discussion page
  this.router.navigate(['/discussion']);
}
  
}
