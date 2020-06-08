import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { IRepresentative } from './irepresentative';
import { RepresentativePageResult, RepresentativeDetail } from './representative-page-result';
import { GOOGLE_API } from './apikeys'

@Injectable({
  providedIn: 'root'
})
export class RepresentativeService {

  private url: string = `https://www.googleapis.com/civicinfo/v2/representatives?key=${GOOGLE_API}`;
  constructor(private http: HttpClient) { }

  getRepresentatives(searchString: string, secondReturn: {} = {}): Observable<IRepresentative[]> {
    let params = new HttpParams().set("address", searchString);
    return this.http.get(this.url, { params: params }).pipe(
      tap(x => {
        secondReturn['address'] = x['normalizedInput']['line1'] + ' ' +
                                  x['normalizedInput']['city'] + ', ' +
                                  x['normalizedInput']['state'] + ' ' +
                                  x['normalizedInput']['zip']
      }),
      map(representativeResult => {
        const reps = representativeResult['officials'];
        const offices = representativeResult['offices'];
        for (let o of offices) {
          for (let r of o['officialIndices'])
            reps[r]['office'] = o
        }
        return reps
      })
    );
  }
}
