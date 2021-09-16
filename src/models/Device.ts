export class Device {
  uid: number;
  vendor: string;
  dateCreated: string;
  status: string;


  constructor(uid: number, vendor: string, dateCreated: string, status: string) {
    this.uid = uid;
    this.vendor = vendor;
    this.dateCreated = dateCreated;
    this.status = status;
  }
}
