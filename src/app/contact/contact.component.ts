import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor() {}

  ngOnInit() {

    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  get firstName () { return this.contactForm.get('firstName'); }
  get lastName () { return this.contactForm.get('lastName'); }
  get email () { return this.contactForm.get('email'); }
  get subject () { return this.contactForm.get('subject'); }
  get message () { return this.contactForm.get('message'); }
}