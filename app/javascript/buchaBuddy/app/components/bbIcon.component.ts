/* tslint:disable: max-line-length */
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "bb-icon",
  template: `<svg [attr.height]="height" [attr.viewBox]="viewBox" [attr.width]="width" xmlns="http://www.w3.org/2000/svg">
               <g>
                <title>background</title>
                <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                 <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                </g>
               </g>
               <g>
                <title>icon</title>
                <ellipse [attr.stroke]="stroke" ry="186.232758" rx="189.499999" id="svg_1" cy="200.474125" cx="201.999988" stroke-width="21.5" fill="none"/>
                <text [attr.fill]="fill" transform="matrix(16.649699017125293,0,0,16.29932917175114,-3916.0664172065804,-2467.665624098381) " xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_2" y="172.113395" x="237.565332" fill-opacity="null" stroke-opacity="null" stroke-width="0">B</text>
                <text [attr.fill]="fill" font-weight="bold" transform="matrix(8.744170402801041,0,0,8.947777628723026,-3772.9713820186744,-1283.5312809885386) " xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_3" y="176.607794" x="459.935702" fill-opacity="null" stroke-opacity="null" stroke-width="0">B</text>
                <polyline stroke-linecap="round" id="svg_8" points="-237.5,132.5 -237.5,132.5 " stroke-width="15.5" fill="none"/>
               </g>
              </svg>`,
})

export class BBIconComponent implements OnInit {
  @Input() private viewBox: string;
  @Input() private height: string;
  @Input() private width: string;
  @Input() private stroke: string;
  @Input() private fill: string;
  private colorDict = {
    "primary-color": "#66bb6a",
    "primary-dark": "#338a3e",
    "primary-light": "#98ee99",
    "secondary-color": "#263238",
    "secondary-dark": "#000a12",
    "secondary-light": "#4f5b62",
    "text-on-primary": "#000000",
    "text-on-second": "#ffffff",
  };

  public ngOnInit() {
    this.viewBox = this.viewBox || "0 0 400 400";
    this.height = this.height || "200";
    this.width = this.width || "250";
    this.stroke = this.getRGBColor(this.stroke);
    this.fill = this.getRGBColor(this.fill);
  }

  private getRGBColor(color): string {
    if (!color) { return "#000000"; }
    return this.colorDict[color] || color;
  }
}
