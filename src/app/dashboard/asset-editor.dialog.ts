import {Component, OnDestroy, OnInit} from '@angular/core';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AssetMaintenance} from './asset-maintenance.interface';
import {MdDialogRef, MdSnackBar, MdSnackBarConfig} from '@angular/material';

@Component({
  selector: 'qs-asset-editor',
  templateUrl: './asset-editor.dialog.html',
})
export class AssetEditorDialog implements OnInit{

  private _asset: Asset;
  editorForm: FormGroup;

  // constructor
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MdSnackBar,
              private formBuilder: FormBuilder,
              private dialog: MdDialogRef<AssetEditorDialog>
  ) {
  }

  get asset(): Asset {
    return this._asset;
  }

  set asset(value: Asset) {
    this._asset = value;
  }

  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      referenceNo: ['', Validators.required],
      cost: ['', [(Validators.required)]],
    });
  }

  add(maintenance: AssetMaintenance): void {
    // do something
    this.snackBar.open('Detail added', '', <MdSnackBarConfig>{duration: 3000});
    this.dialog.close();
  }
}
