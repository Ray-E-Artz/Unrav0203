import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dives = [];
  private index = 0;

  private stockDives = [
    {
      site: 'Abu Gotta Ramada',
      location: 'Hurghada, Egypt',
      depth: 72,
      time: 54
    },
    {
      site: 'Ponte Mahoon',
      location: 'Maehbourg, Mauritius',
      depth: 54,
      time: 38
    },
    {
      site: 'Molnar Cave',
      location: 'Budapest, Hungary',
      depth: 98,
      time: 62
    }];

  public enableAdd() {
    return this.index < this.stockDives.length;
  }

  public addDive() {
    if (this.enableAdd()) {
      this.dives.push(this.stockDives[this.index++]);
    }
  }

  public clearDives() {
    this.dives = [];
    this.index = 0;
  }
}
