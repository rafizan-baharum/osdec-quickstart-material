import {Component, OnDestroy, OnInit} from '@angular/core';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy {

  assets$: Observable<Asset[]>;

  // constructor
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  loadPosts(): void {
    this.assets$ = this.assetService.findAssets();
  }

  viewAsset(asset: Asset): void {
    console.log(JSON.stringify(asset));
    this.router.navigate(['/detail', asset.assetNo]);
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy(): void {
    // no op
  }
}
