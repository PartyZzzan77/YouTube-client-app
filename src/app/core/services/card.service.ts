import { Injectable } from '@angular/core';
import { mockEntities } from '../../shared/mocks/mock';
import { ResponseItem } from '../../shared/models/response-item/response-item.model';
import { BehaviorSubject, Observable, take } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CardService {
  public entities: BehaviorSubject<ResponseItem[]> = new BehaviorSubject<
    ResponseItem[]
  >(mockEntities);

  private entities$: Observable<ResponseItem[]> = this.entities.asObservable();

  public reset(
    subj: BehaviorSubject<ResponseItem[]> = this.entities,
    referenceData: ResponseItem[] = [...mockEntities],
  ): void {
    subj.next(referenceData);
  }

  public filterEntities(value: string): void {
    this.entities$.pipe(take(1)).subscribe((obs) => {
      if (!value) {
        this.reset(this.entities);
        return;
      }

      const filteredEntities = obs.filter(({ snippet }) =>
        snippet.title.toLowerCase().includes(value.toLowerCase()),
      );

      this.entities.next(filteredEntities);
    });
  }
}
