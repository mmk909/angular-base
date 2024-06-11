import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: number[] = []
  constructor () {
    for (let i = 0; i < 100; i++) {
      this.items.push(i)
    }
  }
}
