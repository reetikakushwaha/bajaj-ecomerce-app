import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bajaj-side-nav-bar',
  imports: [CommonModule],
  templateUrl: './side-nav-bar.html',
  styleUrls: ['./side-nav-bar.css'] 
})
export class SideNavBar {
  ngAfterViewInit() {
  const toggler = document.querySelector('.navbar-toggler');
  const navbar = document.querySelector('.custom-navbar');
  const collapse = document.getElementById('navbarContent');

  if (toggler && navbar && collapse) {
    collapse.addEventListener('shown.bs.collapse', () => {
      navbar.classList.add('show-height');
    });

    collapse.addEventListener('hidden.bs.collapse', () => {
      navbar.classList.remove('show-height');
    });
  }
}

}
