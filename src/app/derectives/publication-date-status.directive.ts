import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPublicationDateStatus]',
})
export class PublicationDateStatusDirective implements OnInit {
  @Input('appPublicationDateStatus') date: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const currentDate = new Date();
    const publicationDate = new Date(this.date);
    const timeDifferenceInDays = (currentDate.getTime() - publicationDate.getTime()) / (1000 * 60 * 60 * 24);
    let color: string;

    if (timeDifferenceInDays > 180) {
      color = 'red';
    } else if (timeDifferenceInDays > 30) {
      color = 'yellow';
    } else if (timeDifferenceInDays > 7) {
      color = 'green';
    } else {
      color = 'blue';
    }

    this.el.nativeElement.style.borderBottomColor = color;
  }
}
