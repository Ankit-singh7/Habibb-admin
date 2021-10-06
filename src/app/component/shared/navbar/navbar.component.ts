import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  public groupId: string;
  constructor(private route: Router) {}
  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(() => {
      $('#sidebar').mCustomScrollbar({
          theme: 'minimal'
      });

      $('#sidebarCollapse').on('click', () => {
          $('#sidebar, #content').toggleClass('active');
          $('.collapse.in').toggleClass('in');
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
  });
  }


  logout(){
    localStorage.setItem('isLoggedIn', String(false));
    this.route.navigate(['/login']);
  }
}
