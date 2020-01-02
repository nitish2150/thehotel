import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
  } from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatBadgeModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule

    ]

})

export class MaterialModule{

}