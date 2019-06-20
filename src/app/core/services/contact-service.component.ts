import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup } from '@angular/forms';
import { ApiService } from './api-service.component';

@Injectable()
export class ContactService {
  constructor(private apiService: ApiService) {}

  public sendMessage(formData: FormGroup): Observable<any> {
    const url = `https://olivia-gosselin-contact-form.prod.with-datafire.io/contact`;
    return this.apiService.post(url, formData.getRawValue());
  }
}
