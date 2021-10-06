import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel  } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LoaderService } from './service/loader/loader.service';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desi-admin';
  private loaderTimeOut: any;
  private routerSubscription: Subscription;
  constructor(private router: Router, public ui: LoaderService) {}
  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.ui.loader.show();
        } else if (event instanceof NavigationEnd) {
          this.loaderTimeOut = setTimeout(() => {
            this.ui.loader.hide();
          }, 500);
        } else if (event instanceof NavigationCancel) {
          this.ui.loader.hide();
        }
    });
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
    $(() => {
$('[data-toggle="popover"]').popover();
$('.popover-dismiss').popover({
trigger: 'focus'
});
$('.vv').click(() => {
$('.ss').show();
});
});
$(() => {
  $('[data-toggle="popover"]').popover();
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
});
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    clearTimeout(this.loaderTimeOut);
  }
  
}
