import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Gateway} from "../../models/Gateway";
import {GatewayService} from "../../services/gateway.service";
import {Device} from "../../models/Device";

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {
  serial = '';
  editMode = false;
  gateway = new Gateway('', '', '', []);
  displayedColumns: string[] = ['UID', 'vendor', 'status', 'dateCreated', 'action'];

  constructor(private gatewayService: GatewayService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.serial = params['serial'];

      if (this.serial && this.serial != '') {
        this.editMode = true;
        this.getGatewayDetailsBySerial();
      }
    });
  }

  getGatewayDetailsBySerial() {
    this.gatewayService.getGatewayDetails(this.serial).subscribe((data: Gateway) => {
      console.log(data);
      this.gateway = data;
    });
  }

  removeDevice(element: Device) {
    console.log("*****");
    console.log(element);
    console.log("******");
  }
}
