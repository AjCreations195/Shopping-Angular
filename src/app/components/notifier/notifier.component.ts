import { Component, OnInit, Inject } from '@angular/core';
import {MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar'
@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {

  constructor(public snackBarbRef: MatSnackBarRef<NotifierComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data:any) { }
    
  ngOnInit(): void {
  }

}
