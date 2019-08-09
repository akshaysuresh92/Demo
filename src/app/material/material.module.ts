import { NgModule } from '@angular/core';

import { MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatInputModule, MatRadioModule, MatCheckboxModule, MatAutocompleteModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
