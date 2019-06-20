import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact-service.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public isLoading = false;
  public submissionResponse = '';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });

  }

  sendEmail(): void {
    this.isLoading = true;
    this.contactForm.disable();

    this.contactService.sendMessage(this.contactForm).subscribe(
      (result) => {
        this.contactForm.reset();
      },
      (error) => {
        this.isLoading = false;
        this.submissionResponse = 'error';
        this.contactForm.enable();
      },
      () => {
        this.isLoading = false;
        this.submissionResponse = 'success';
        this.contactForm.enable();
      }
    );
  }
}
