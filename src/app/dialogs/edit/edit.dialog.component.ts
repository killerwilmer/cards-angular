import { CardService } from '../../card.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Card } from 'src/app/model/Card';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.css']
})
export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: CardService
  ) {}

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  areas: any[] = [
    { value: 'Tecnología', viewValue: 'Tecnología' },
    { value: 'Comercial', viewValue: 'Comercial' },
    { value: 'Gerencia', viewValue: 'Gerencia' }
  ];

  canales: any[] = [
    { value: 'SMS', viewValue: 'SMS' },
    { value: 'Email', viewValue: 'Email' },
    { value: 'Voz', viewValue: 'Voz' }
  ];

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService
    .updateFicha(this.data.id, {
      name: this.data.name,
      body: this.data.body,
      area: this.data.area,
      channel: this.data.channel
    })
    .subscribe(
      data => {
        console.log(data);
        this.data = data as Card;
      },
      error => console.log(error)
    );
  }

}
