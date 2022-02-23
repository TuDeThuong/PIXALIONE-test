import { Component, OnInit } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
