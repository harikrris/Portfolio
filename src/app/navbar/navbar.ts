import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Output() openContact = new EventEmitter<void>();
  isMenuOpen = false;

  navigateTo(section: string, event: Event) {
    event.preventDefault();
    
    if (section === 'contact') {
      this.openContact.emit();
      this.closeMenu();
    } else {
      this.scrollToSection(section);
      this.closeMenu();
    }
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL without triggering navigation
      history.replaceState(null, '', `#${section}`);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  // Close menu when clicking outside on mobile or when window is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.closeMenu();
    }
  }
}