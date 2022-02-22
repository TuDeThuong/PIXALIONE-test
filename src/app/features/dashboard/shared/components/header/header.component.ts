import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  ngOnInit() {}

  logout() {
    this.authService
      .logout()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      })
      .catch((e) => console.log(e.message));
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
}
