import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public name: any[] = [];
  public fullName = localStorage.getItem('name')
  public activatedRoute = window.location.pathname;
  public title:string

  public groupId: string;
  constructor(private route: Router) {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = '';
        this.activatedRoute = window.location.pathname;
        if(this.activatedRoute === '/user/employee') {
          this.title = 'EMPLOYEE LIST'
        }
        if(this.activatedRoute === '/user/operator') {
          this.title = 'OPERATOR LIST'
        }
        if(this.activatedRoute === '/user/branch') {
          this.title = 'BRANCH LIST'
        }
        if(this.activatedRoute === '/user/ingredient-cat') {
          this.title = 'INGREDIENT TYPE LIST'
        }
        if(this.activatedRoute === '/user/unit') {
         this.title = 'UNIT LIST'
        }
        if(this.activatedRoute === '/user/ingredient') {
         this.title = 'INGREDIENT LIST'
        }
        if(this.activatedRoute === '/user/food-cat') {
         this.title = 'FOOD CAT LIST'
        }
        if(this.activatedRoute === '/user/food-list') {
          this.title = 'FOOD LIST'
         }
         if(this.activatedRoute === '/user/food-ing') {
          this.title = 'INGREDIENT LIST'
         }
         if(this.activatedRoute === '/user/billing') {
          this.title = 'BILLING LIST'
         }
         if(this.activatedRoute === '/user/session') {
          this.title = 'SESSION LIST'
         }
         if(this.activatedRoute === '/user/report') {
          this.title = 'INGREDIENT REPORT'
         }
         if(this.activatedRoute === '/user/product-sales') {
          this.title = 'PRODUCT SALES REPORT'
         }
         if(this.activatedRoute === '/user/service-sales') {
          this.title = 'SERVICE SALES REPORT'
         }
         if(this.activatedRoute === '/user/payment') {
          this.title = 'PAYMENT MODE LIST'
         }
         if(this.activatedRoute === '/user/delivery') {
          this.title = 'DELIVERY MODE LIST'
         }
         if(this.activatedRoute === '/user/brand') {
          this.title = 'BRAND LIST'
         }
         if(this.activatedRoute === '/user/product-list') {
          this.title = 'PRODUCT LIST'
         }
         if(this.activatedRoute === '/user/service-type') {
          this.title = 'SERVICE TYPE LIST'
         }
         if(this.activatedRoute === '/user/service') {
          this.title = 'SERVICE LIST'
         }
         if(this.activatedRoute === '/user/change-pass') {
          this.title = 'CHANGE PASSWORD'
         }
         if(this.activatedRoute === '/user/appointment-list') {
          this.title = 'APPOINTMENT LIST'
         }
      }
    })
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.route.navigate(['/login']);
  }

}
