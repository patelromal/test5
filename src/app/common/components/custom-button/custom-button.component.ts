import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `<button type="button" class="btn" (click)="countClicks()">{{text}}</button>`,
  styles: [` 
    .btn {
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    }
    .btn:hover {
      color: #fff;
      background-color: #218838;
      border-color: #1e7e34;
      cursor: pointer;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class CustomButtonComponent implements OnInit {

  @Input() text = 'Custom Button';
  @Output() countChanged = new EventEmitter<number>();
  private totalClicks: number = 0;

  constructor() { }

  ngOnInit() {
  }

  countClicks() {
    this.totalClicks++;
    this.countChanged.emit(this.totalClicks);
  }

}