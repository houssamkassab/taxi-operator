import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-cab-modal',
  templateUrl: './cab-modal.component.html',
  styleUrls: ['./cab-modal.component.css']
})
export class CabModalComponent implements OnInit {

   addingCabForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CabModalComponent>,
    private _fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void{
    this.addingCabForm = this._fb.group({
      model: new FormControl('',  [Validators.required]),
      number: new FormControl('',  [Validators.required]),
      owner: new FormControl('',  [Validators.required]),
    });

  }

  saveCab(): void{
    let dataToSend = this.addingCabForm.getRawValue();
    dataToSend.id = Guid.create().toString();
    this.dialogRef.close(dataToSend);
     console.log({dataToSend});
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

}
