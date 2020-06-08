import { Injectable } from '@angular/core';
import { IElection } from './election/election.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { GOOGLE_API } from './apikeys'

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private gen_url: string = `https://www.googleapis.com/civicinfo/v2/elections?key=${GOOGLE_API}`;
  private loc_url: string = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${GOOGLE_API}`;
  private selected: IElection;

  constructor(private http: HttpClient) { }

  getAllElections(): Observable<IElection[]> {
    return this.http.get(this.gen_url).pipe(
      map(electionResult => electionResult = electionResult['elections'])
    )
  }

  getElection(id: number, address: string): Observable<IElection> {
    const params = new HttpParams().set("address", address).append("id", id.toString());
    return this.http.get<IElection>(this.loc_url, { params: params });
  }

  getCachedElection(): IElection {
    return this.selected;
  }

  setCachedElection(election: IElection) {
    this.selected = election;
  }

  getElections(searchString: string, secondReturn: {} = {}): Observable<IElection[]> {
    const params = new HttpParams().set("address", searchString);
    return this.http.get(this.loc_url, { params: params }).pipe(
      tap(x => {
        secondReturn['address'] = x['normalizedInput']['line1'] + ' ' +
          x['normalizedInput']['city'] + ', ' +
          x['normalizedInput']['state'] + ' ' +
          x['normalizedInput']['zip'];
      }),
      map(electionResult => {
        const elections = [electionResult['election']];
        return elections.concat(electionResult['otherElections']);
      })
    )
  }
}
