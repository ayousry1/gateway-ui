import {Device} from './Device';

export class Gateway {
  serialNumber: string;
  name: string;
  ip4Address: string;
  peripheralDevices: Device[];



  constructor(serialNumber: string, name: string, ip4Address: string, peripheralDevices: Device[]) {
    this.serialNumber = serialNumber;
    this.name = name;
    this.ip4Address = ip4Address;
    this.peripheralDevices = peripheralDevices;
  }
}
