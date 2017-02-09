import { Component, OnInit } from '@angular/core';
import { DiveSite } from '../Classes/dive-site';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {
  sites = DiveSite.FavoriteSites;
  constructor() { }

  ngOnInit() {
  }

}
