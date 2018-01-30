import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

import templateString from "./app.component.html";

@Component({
  selector: "buchabuddy",
  template: templateString,
})
export class AppComponent {
  public name = "Angular";
  constructor(
    private http: HttpClient,
  ) {}

  private changeName() {
    // this.http.get("/testing").subscribe((data) => {
    //   return this.name = data["name"];
    // })
  }
}
