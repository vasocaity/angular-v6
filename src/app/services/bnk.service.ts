import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { Feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }

  getMemberInBnk(id): Observable<Member> {
    return this.http.get<Member>(`${environment.api_url}/bnk/members/${id}`);
  }

  updateMember(id: string, member: Member): Observable<Member> {
    return this.http.patch<Member>(`${environment.api_url}/bnk/members/${id}`, member);
  }

  instagram(id: string): Observable<Feed> {
    return this.http.get<Feed>(`${environment.instagram_api_url}${id}`);
  }
}
