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
    if (!this.authService.loggedUser.value.friends) {
      console.log('Calleando');
      this.authService.getFullUserInfo(this.authService.loggedUser.value.id).subscribe(user => {
        this.data.friends = user.friends;
      })
    }
  }

  closeBtnClicked() {
    this.dialogRef.close();
  }

  deleteFriend(user: any) {
    this.authService.deleteFriend(user.id, user.telefono).subscribe((res) => {
      this.data.friends = this.data.friends.filter(friend => friend.telefono !== user.telefono);
    });
  }

  addFriend() {
    this.dialog.open(AddFriendDialogComponent, {
      panelClass: 'user-modal-container',
    }).afterClosed().subscribe((res) => {
      if (res?.message?.email) {
        this.data.friends.push(res.message);
      }
    })
  }
}
