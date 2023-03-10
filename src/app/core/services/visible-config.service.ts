import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisibleConfigService {
  public isCardsListVisible: BehaviorSubject<boolean> = new BehaviorSubject(
    false,
  );

  public isFilterVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public isViewsDesc: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private isFilterVisible$: Observable<boolean> =
    this.isFilterVisible.asObservable();

  public isViewsDesc$: Observable<boolean> = this.isViewsDesc.asObservable();

  private isCardsListVisible$: Observable<boolean> =
    this.isCardsListVisible.asObservable();

  public toggleVisible() {
    let flag: boolean;

    this.isCardsListVisible$.pipe(take(1)).subscribe((v) => {
      flag = !v;
      this.isCardsListVisible.next(flag);
    });
  }

  public toggleFilterVisible() {
    let flag: boolean;

    this.isFilterVisible$.pipe(take(1)).subscribe((v) => {
      flag = !v;
      this.isFilterVisible.next(flag);
    });
  }

  public toggleOrderViews() {
    let flag: boolean;

    this.isViewsDesc$.pipe(take(1)).subscribe((v) => {
      flag = !v;
      this.isViewsDesc.next(flag);
    });
  }
}
