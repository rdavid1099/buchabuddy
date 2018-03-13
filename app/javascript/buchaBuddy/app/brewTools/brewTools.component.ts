import { Component, OnInit } from "@angular/core";

import templateString from "./brewTools.component.html";
import { IToolCard } from "./iToolCard.interface";

@Component({
  selector: "tracking-tools",
  template: templateString,
})

export class BrewToolsComponent implements OnInit {
  public toolCards: IToolCard[];
  public columnizedToolCards: IToolCard[][];

  public ngOnInit() {
    this.toolCards = [
      {
        body: "This is a test card 0",
        icon: "business",
        title: "Testing",
      },
      {
        body: "This is a test card 1",
        icon: "business",
        title: "Testing",
      },
      {
        body: "This is a test card 2",
        icon: "business",
        title: "Testing",
      },
      {
        body: "This is a test card 3",
        icon: "business",
        title: "Testing",
      },
      {
        body: "This is a test card 4",
        icon: "business",
        title: "Testing",
      },
      {
        body: "This is a test card 5",
        icon: "business",
        title: "Testing",
      },
    ];
    this.columnizedToolCards = this.columnizeToolCards(3);
  }

  public columnizeToolCards(columnNum: number): IToolCard[][] {
    const columnizedCards: IToolCard[][] = [];
    for (let i = 0; i < Math.ceil(this.toolCards.length / columnNum); i++) {
      const startDigit = columnNum * i;
      const rowCards = [];
      for (let x = 0; x < columnNum; x++) {
        if (this.toolCards[startDigit + x]) {
          rowCards.push(this.toolCards[startDigit + x]);
        }
      }
      columnizedCards.push(rowCards);
    }
    return columnizedCards;
  }
}
