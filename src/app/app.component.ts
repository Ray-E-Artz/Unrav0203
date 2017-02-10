import { Component } from '@angular/core';
import { DiveSite } from './classes/dive-site';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sites = DiveSite.FavoriteSites.slice(0); //cloning array
  currentView = 'list';

  navigateTo(view: string){
    console.log('navigating to' + view);
    this.currentView = view;
  }
}
