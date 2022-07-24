import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Card } from '../models/card';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gameId: string = '';

  constructor(private http: HttpClient) { }

  setGameId(newGameId: string) {
    this.gameId = newGameId
  }

  getGameId() {
    return this.gameId
  }

  //getCards(): Observable<Card[]>{
  getCards(){
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get<Card[]>('http://localhost:8081/api/v1/carta', requestOptions);
   // return this.http.get<Card[]>('/api/v1/carta'); 
  }

  connectToWebSocket(juegoId: string) {
    const webSocketSubject: WebSocketSubject<string> = webSocket(`ws://localhost:8081/retrieve/${juegoId}`);
    return webSocketSubject.asObservable();
  }
}
