import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkWithHref],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Output() openContact = new EventEmitter<void>();
}