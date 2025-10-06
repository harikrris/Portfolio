import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  showModal = false;
  contactForm: FormGroup;
  sending = false;
  sent = false;
  error = '';

  // ✅ REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
  private readonly emailjsConfig = {
    serviceId: 'service_tjgm4tm',      // From Email Services
    templateId: 'template_j0aiuse',    // From Email Templates  
    userId: 'o8Zv7QvU68DvL7TTd'             // Public Key from Account
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  open() { 
    this.showModal = true; 
    this.sent = false; 
    this.error = ''; 
  }
  
  close() { 
    this.showModal = false; 
  }

  async send() {
    if (this.contactForm.invalid) return;
    
    this.sending = true;
    this.error = '';

    try {
      const templateParams = {
        from_name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
        from_email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.content,
        reply_to: this.contactForm.value.email
      };

      // Send email using EmailJS
      await emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        templateParams,
        this.emailjsConfig.userId
      );

      this.sent = true;
      this.contactForm.reset();
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        this.close();
      }, 3000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      this.error = 'Failed to send message. Please try again later or contact me directly.';
    }
    
    this.sending = false;
  }
}