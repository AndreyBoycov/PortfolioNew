import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss']
})
export class EditOrganizationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public orgData) { }

  hiddenInfo = false;

  ngOnInit() {
  }

}
