import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';

@Component({
selector: 'app-news',
templateUrl: './news.page.html',
styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

constructor(private router: Router) { }

ngOnInit() {
}

//Opens a Browser Window to the designated URL
async openBrowser(){
await Browser .open ({url: 'http://capacitorjs.com/'});
}

//Navigates to Home Page
goToHomePage(){
this.router.navigate(['home']);
}

}