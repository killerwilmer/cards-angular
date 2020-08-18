import { CardService } from '../../card.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../../dialogs/delete/delete.dialog.html',
  styleUrls: ['../../dialogs/delete/delete.dialog.css']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: CardService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete() {
    this.dataService.deleteFicha(this.data.id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
