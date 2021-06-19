import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Minar's Travel Album";
  menuvisible = false;
  selectedMenu = '';
  showMenu() {
    this.menuvisible = !this.menuvisible;
  }

  hideMenu() {
    this.selectedMenu = '';
    this.menuvisible = false;
  }

  stopPropagetion(event: Event) {
    event.stopPropagation();
  }

  manuselected(menu) {
    if(this.selectedMenu == menu) {
      this.selectedMenu = '';
    } else {
      this.selectedMenu = menu;
    }

  }

}
