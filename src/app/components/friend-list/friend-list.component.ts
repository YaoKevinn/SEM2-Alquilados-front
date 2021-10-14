import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FriendListComponent>) { }

  ngOnInit(): void {
  }

  closeBtnClicked() {
    this.dialogRef.close();
  }
}
