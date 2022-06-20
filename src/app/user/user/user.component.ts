import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { User } from './../model/user';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable <User[]>;
  displayedColumns = [
    'id',
    'username',
    'password',
    'is_enabled',
    'register_date',
    'name',
	  'surname',
	  'email',
	  'phone'

  ];


  constructor(
    private userService: UserService,
    public dialog: MatDialog
    ) {

      this.user$ = this.userService.list()
      .pipe(
        catchError(error =>{
          this.onError('Erro ao carregar usuarios.');
          return of([])
        })
      );

     }

     onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });

    }

  ngOnInit(): void {
  }

}

