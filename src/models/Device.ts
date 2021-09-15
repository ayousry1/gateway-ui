export class Device {
  UID: number;
  vendor: string;
  dateCreated: string;
  status: string;


  constructor(UID: number, vendor: string, dateCreated: string, status: string) {
    this.UID = UID;
    this.vendor = vendor;
    this.dateCreated = dateCreated;
    this.status = status;
  }
}
