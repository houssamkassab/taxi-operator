import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.css']
})
export class CustomerModalComponent implements OnInit {
  private fromPage: string;

   addingCabForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CustomerModalComponent>,
    private _fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromPage = data.pageValue;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void{
    this.addingCabForm = this._fb.group({
      model: new FormControl('',  [Validators.required]),
      number: new FormControl('',  [Validators.required]),
      owner: new FormControl('',  [Validators.required]),
    });

   /* this.addingCabForm = new FormGroup({
      model: new FormControl()
    })*/
  }

  saveCab(formValue): void{
     console.log({formValue});
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

}
