import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  private REST_API_SERVER = 'http://localhost:8080/gateways/';

  constructor(private http: HttpClient) {
  }

  public getAllGateways() {
    return this.http.get(this.REST_API_SERVER);
  }
}
