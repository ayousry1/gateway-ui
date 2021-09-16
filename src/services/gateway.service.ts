import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gateway} from '../models/Gateway';
import {Device} from "../models/Device";

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  private REST_API_SERVER = 'http://localhost:8080/gateways/';

  constructor(private http: HttpClient) {
  }

  public getAllGateways() {
    return this.http.get<Gateway[]>(this.REST_API_SERVER);
  }

  public getGatewayDetails(serial: string) {
    return this.http.get<Gateway>(this.REST_API_SERVER + "/" + serial);
  }

  public deleteDevice(serial: string, uid: number) {
    return this.http.delete(this.REST_API_SERVER + serial + "/devices/" + uid);
  }

  public addDevice(serial: string, device: Device) {
    return this.http.post(this.REST_API_SERVER + serial + "/devices" , device);
  }
}
