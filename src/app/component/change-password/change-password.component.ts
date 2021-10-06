import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public email = localStorage.getItem('email');
  public old_password:string;
  public new_password: string;
  public confirm_password: string;
  public isError = false;
  public msg = 'Change Password for Admin' 
  public errMsg = '';

  constructor(private userService: UserService,
              private ui: LoaderService,
              private router: Router) { }

  ngOnInit(): void {
  }


  changePassword = () => {
    this.isError = false;
    if(this.new_password !== this.confirm_password) {
      this.isError = true;
      this.errMsg = 'Password do not match'
    } else {

      this.ui.loader.show();
      let payload = {
        email: this.email,
        oldPassword: this.old_password,
        newPassword: this.new_password
      }
      this.userService.changePassword(payload).subscribe((res) => {
        if(!res.error) {
          this.logout()
         
        } else {
          this.isError = true;
          this.errMsg = res.message
        }
         this.ui.loader.hide()
      },(err) => {
        this.ui.loader.hide()
        this.isError = true;
        this.errMsg = err
      })
    }
  }


  logout(){
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }

}
