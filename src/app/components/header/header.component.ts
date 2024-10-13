import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../responses/user.response';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGear} from '@fortawesome/free-solid-svg-icons'
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  // Icons
  faBell = faBell;
  faGear = faGear;
  
  userResponse?: UserResponse;

  constructor(
    private localStorageService : LocalStorageService,
    private userService : UserService,
    private router : Router
  ) {

  }
  
  ngOnInit(): void {
    this.userResponse = this.localStorageService.get("user");
  }

  
}
