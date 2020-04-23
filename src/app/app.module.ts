import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {ChangeLogFormComponent} from './change-log-form/change-log-form.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AddNewOrganizationStructureComponent} from './organization-structure/add-new-organization-structure/add-new-organization-structure.component';
import {OrganizationCartComponent} from "./organization-structure/organization-cart/organization-cart.component";

@NgModule({
  declarations: [
    AppComponent,
    ChangeLogFormComponent,
    AddNewOrganizationStructureComponent,
    OrganizationCartComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [ChangeLogFormComponent,
                    AddNewOrganizationStructureComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
