import { AddFriendDialogComponent } from './../add-friend-dialog/add-friend-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<FriendListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {

  }

  closeBtnClicked() {
    this.dialogRef.close();
  }

  deleteFriend(telefono: string) {
    this.authService.deleteFriend(this.authService.loggedUser.id, telefono).subscribe((res) => {
      this.data.friends = this.data.friends.filter(friend => friend.telefono !== telefono);
    });
  }

  addFriend() {
    this.dialog.open(AddFriendDialogComponent, {
      panelClass: 'user-modal-container',
    })
  }
}
