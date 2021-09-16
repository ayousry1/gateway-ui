import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Gateway} from "../../models/Gateway";
import {GatewayService} from "../../services/gateway.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {
  serial = '';
  editMode = false;
  gateway = new Gateway('', '', '', []);
  displayedColumns: string[] = ['uid', 'vendor', 'status', 'dateCreated', 'action'];
  @ViewChild(MatTable, {static: true})
  table!: MatTable<any>;

  constructor(private gatewayService: GatewayService, private route: ActivatedRoute,
              private _snackBar: MatSnackBar, private router: Router) {
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

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  removeDevice(uid: number) {
    this.gatewayService.deleteDevice(this.serial, uid).subscribe((data) => {
      if (data == null) {
        this.gateway.peripheralDevices = this.gateway.peripheralDevices
          .filter((value, key) => {
            return value.uid != uid;
          });
        this.table.renderRows();
      } else {

      }
    }, error => {
      if (error.status == 404) {
        this.openSnackBar("device or gateway not found");
      }
    });
  }

  goToMainList() {
    this.router.navigate(['']);
  }

}
