import { Component, OnInit } from '@angular/core';
import {MatSlideToggle, MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Theme Changer App';
  isChecked: boolean = false;
  mode: string = 'nightlight_round';

  constructor() {}
  ngOnInit() {}

  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'nightlight_round' : 'light_mode';
    document.body.classList.toggle('darkMode');
  }
}
