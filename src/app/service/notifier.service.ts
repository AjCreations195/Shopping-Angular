import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import {NotifierComponent} from '../components/notifier/notifier.component'

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar:MatSnackBar) { }

  showNotification(displayMessage:string,buttonText:string,messageType:'error' | 'success'){
    this.snackbar.openFromComponent(NotifierComponent,{
      data:{
        message:displayMessage,
        buttonText:buttonText,
        type:messageType
      },
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass:messageType
    })
  }
}
