import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipe/filter.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NavbarComponent,FilterPipe, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, FilterPipe, HeaderComponent]
})
export class SharedModule { }
