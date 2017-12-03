import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {AssetEditorDialog} from './asset-editor.dialog';

@Component({
  selector: 'qs-asset-detail',
  templateUrl: './asset-detail.page.html',
})
export class AssetDetailPage implements OnInit, OnDestroy {

  asset$: Observable<Asset>;
  editorDialogRef: MdDialogRef<AssetEditorDialog>;

  columns: any[] = [
    {name: 'referenceNo', label: 'Reference No'},
    {name: 'cost', label: 'Cost'},
  ];

  // constructor
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MdDialog,) {
  }

  loadAsset(assetNo: string): void {
    console.log('assetNo: ' + assetNo);
    this.asset$ = this.assetService.findAssetByAssetNo(assetNo);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { assetNo: string }) => {
      this.loadAsset(params.assetNo);
    });
  }

  ngOnDestroy(): void {
    // no op
  }

  showMaintenanceDialog(asset: Asset): void {
    console.log('showContainerDialog');
    let config: MdDialogConfig = new MdDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '70%';
    config.position = {top: '0px'};
    this.editorDialogRef = this.dialog.open(AssetEditorDialog, config);
    this.editorDialogRef.componentInstance.asset = asset;
    this.editorDialogRef.afterClosed().subscribe((res) => {
      console.log('close dialog');
    });
  }
}
