import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  @Output() onAddThis = new EventEmitter();
  @Output() onCancelThis = new EventEmitter();

  addThis() {
    this.onAddThis.emit(null);
  }

  cancelThis() {
    this.onCancelThis.emit(null);
  }

  constructor() { }

  ngOnInit() {
  }

}
