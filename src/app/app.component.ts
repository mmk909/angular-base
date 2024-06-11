import { Component } from '@angular/core';

export interface Item {
  id: number,
  isOpen: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-base';
  isNavOpen:boolean = true
  items: Item[] = []
  openItem = -1
  constructor () {
    for (let i = 0; i < 5; i++) {
      this.items.push({
        id: i,
        isOpen: false
      })
    }
  }

  toggleNav () {
    this.isNavOpen = !this.isNavOpen
  }

  toggleMenu(item:Item){
    item.isOpen = !item.isOpen
  }
}
