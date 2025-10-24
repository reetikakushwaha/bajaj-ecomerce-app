import { Component, signal } from '@angular/core';
import { SideNavBar } from "./shared/components/side-nav-bar/side-nav-bar";

@Component({
  selector: 'bajaj-root',
  imports: [SideNavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bajaj-ecomerce-app');
}
