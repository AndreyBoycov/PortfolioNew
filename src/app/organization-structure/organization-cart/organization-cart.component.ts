import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditOrganizationComponent} from "../edit-organization/edit-organization.component";

@Component({
  selector: 'app-organization-cart',
  templateUrl: './organization-cart.component.html',
  styleUrls: ['./organization-cart.component.scss']
})
export class OrganizationCartComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() index;

  elementColor;

  constructor(private matDialog: MatDialog,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getLineColorImage();
  }

  // async getImage() {
  //   this.image = await this.loadImage(this.imgSrc);
  // }

  loadImage(src) {
    return new Promise((resolve, reject) => {
      try {
        const image = new Image;
        image.onload = () => resolve(image);
        image.src = src;
      } catch (err) {
        return reject(err);
      }
    });
  }

  async getLineColorImage() {
    const image: any = await this.loadImage(this.imgSrc);
    this.elementColor = document.getElementById('color_line_log' + this.index);
    this.elementColor.style.backgroundColor = 'rgba(' + this.getColor(image) + ')';
    this.cdRef.markForCheck();
  }

  getColor(image) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(
      image,
      0, 0, image.width, image.height,
      0, 0, image.width, image.height
    );
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const startIndexPixel = Math.floor((Math.random() * Math.floor(imageData.data.length - 1)) / 4) * 4;
    const currentPixel = Array.from(imageData.data).splice(startIndexPixel, 4);
    return currentPixel.join('').match(/000|255255255/g) ? this.getColor(image) : currentPixel;
  }

  openEditOrg() {
    // const cfg: MatDialogConfig = {
    //   data: {},
    //   width: '800px',
    //   panelClass: 'personal_panel'
    // };
    // const dialogRef = this.matDialog.open(EditOrganizationComponent, cfg);
  }

}
