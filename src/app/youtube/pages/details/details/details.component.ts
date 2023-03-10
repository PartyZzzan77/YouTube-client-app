import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../../../../core/services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseItem } from '../../../../shared/models/response-item/response-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private id: string;
  public entity: ResponseItem;
  private subscription: Subscription;

  public back = 'back to home';
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.subscription = this.cardService.entities.subscribe(
      (entities) =>
        (this.entity = entities.filter((entity) => entity.id === this.id)[0]),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public goHome() {
    this.router.navigate(['/main']);
  }

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
}
