import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditOrganizationComponent} from '../edit-organization/edit-organization.component';

@Component({
  selector: 'app-add-new-organization-structure',
  templateUrl: './add-new-organization-structure.component.html',
  styleUrls: ['./add-new-organization-structure.component.scss']
})
export class AddNewOrganizationStructureComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  fullInfo = false;

  ngOnInit() {
  }

  openEditOrg() {
    const cfg: MatDialogConfig = {
      data: {},
      width: '800px',
      panelClass: 'personal_panel'
    };
    this.matDialog.open(EditOrganizationComponent, cfg);
  }
}
