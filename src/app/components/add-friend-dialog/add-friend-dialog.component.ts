import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-friend-dialog',
  templateUrl: './add-friend-dialog.component.html',
  styleUrls: ['./add-friend-dialog.component.scss'],
})
export class AddFriendDialogComponent implements OnInit {
  phoneControl: FormControl = new FormControl('', [Validators.required]);
  constructor(
    private dialogRef: MatDialogRef<AddFriendDialogComponent>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  addFriend() {
    this.authService.addFriend(this.phoneControl.value).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });
  }
}
