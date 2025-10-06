import { AsyncPipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  imports: [AsyncPipe, RouterLink], // Add RouterLink to imports
  styleUrls: ['./homepage.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  roles: string[] = ["Lead SDET", "QA", "AI Enabled SDET"];
  displayText$ = new BehaviorSubject<string>('');
  private roleIndex = 0;
  private charIndex = 0;
  private typing = true;
  private sub: Subscription | null = null;

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  startTyping() {
    this.sub = timer(0, 100).subscribe(() => {
      const currentRole = this.roles[this.roleIndex];
      if (this.typing) {
        if (this.charIndex < currentRole.length) {
          this.charIndex++;
          this.displayText$.next(currentRole.substring(0, this.charIndex));
        } else {
          this.typing = false;
          this.pause(1000);
        }
      } else {
        if (this.charIndex > 0) {
          this.charIndex--;
          this.displayText$.next(currentRole.substring(0, this.charIndex));
        } else {
          this.typing = true;
          this.roleIndex = (this.roleIndex + 1) % this.roles.length;
          this.pause(300);
        }
      }
    });
  }

  pause(ms: number) {
    this.sub?.unsubscribe();
    setTimeout(() => this.startTyping(), ms);
  }
}