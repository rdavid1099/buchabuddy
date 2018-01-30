import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import templateString from './app.component.html';

@Component({
  selector: 'buchabuddy',
  template: templateString
})
export class AppComponent {
  name = 'Angular';
  constructor(
    private http: HttpClient,
  ){}

  changeName() {
    this.http.get('/testing').subscribe(data => {
      return this.name = data['name'];
    })
  }
}
