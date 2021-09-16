import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Device} from "../../models/Device";

class DialogOverviewExampleDialog {
}

@Component({
  selector: 'app-device-dialog-box',
  templateUrl: './device-dialog-box.component.html',
  styleUrls: ['./device-dialog-box.component.css']
})
export class DeviceDialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Device) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
