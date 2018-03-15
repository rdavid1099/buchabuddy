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
        body: [
          "Follow every batch from brew to bottle",
          "Record new recipes",
          "Trace the usage of ingredients and batches",
        ],
        icon: "donut_small",
        title: "Tracking",
      },
      {
        body: [
          "Keep tabs on every SCOBY",
          "Track the batch produced by each SCOBY",
          "Ensure the best for every SCOBY",
        ],
        icon: "mood",
        title: "SCOBY Hotel",
      },
      {
        body: [
          "Customizable dashboards",
          "Clear data presentation",
          "Predict future ingredient needs",
        ],
        icon: "insert_chart",
        title: "Reporting",
      },
      {
        body: [
          "File the best recipes",
          "List every success and failure",
          "Improve upon batches",
        ],
        icon: "mode_edit",
        title: "Results",
      },
      {
        body: [
          "Note fermenting time to taste",
          "Document the fermenting process across multiple batches",
        ],
        icon: "bubble_chart",
        title: "Fermentation",
      },
      {
        body: [
          "Batch completion notifications",
          "Simply follow through the brewing lifecycle",
          "Alerts when to taste and bottle batches",
        ],
        icon: "warning",
        title: "Notifications",
      },
    ];
    this.columnizedToolCards = this.columnizeToolCards(3);
  }

  public columnizeToolCards(columnNum: number): IToolCard[][] {
    const columnizedCards: IToolCard[][] = [];
    for (let i = 0; i < Math.ceil(this.toolCards.length / columnNum); i++) {
      const startDigit = columnNum * i;
      const rowCards = [];
      for (let x = 0; x < columnNum; x++) { rowCards.push(this.toolCards[startDigit + x]); }
      columnizedCards.push(rowCards);
    }
    return columnizedCards;
  }
}
