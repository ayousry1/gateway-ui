import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {GatewayService} from "../../services/gateway.service";
import {Gateway} from "../../models/Gateway";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-gateway-list',
  templateUrl: './gateway-list.component.html',
  styleUrls: ['./gateway-list.component.css']
})
export class GatewayListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource;
  filterValue = '';
  displayedColumns: string[] = ['serialNumber', 'name', 'ip4Address', 'peripheralDevices','action'];

  constructor(private gatewayService: GatewayService, private router: Router) {
  }

  ngOnInit(): void {
    this.gatewayService.getAllGateways().subscribe((data: Gateway[]) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  public doFilter = () => {
    this.dataSource.filter = this.filterValue.trim().toLocaleLowerCase();
  };

  displayDetails(row: Gateway) {
    this.router.navigate(['details'], {queryParams: {serial: row.serialNumber}});
  }

}
