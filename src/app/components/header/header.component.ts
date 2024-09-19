import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../responses/user.response';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  // Icons
  faBell = faBell;
  
  userResponse!: UserResponse;

  constructor(
    private localStorageService : LocalStorageService,
    private router : Router
  ) {
    const user = localStorageService.getValueFromLocalStorage("user");

  }

  ngOnInit(): void {
    
  }

  

}
