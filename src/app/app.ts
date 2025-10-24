import { Component, signal } from '@angular/core';
import { SideNavBar } from "./shared/components/side-nav-bar/side-nav-bar";
import { Footer } from './shared/components/footer/footer';
import { Banner } from './shared/components/banner/banner';
import { Slider } from './shared/components/slider/slider';

@Component({
  selector: 'bajaj-root',
  imports: [SideNavBar,Slider, Banner, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bajaj-ecomerce-app');
}
