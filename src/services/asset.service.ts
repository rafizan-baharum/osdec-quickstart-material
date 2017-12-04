import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../environments/environment';
import {Asset} from '../app/dashboard/asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetMaintenance} from '../app/dashboard/asset-maintenance.interface';

@Injectable()
export class AssetService {

  constructor(private http: Http) {
    // no op
  }

  findAssets(): Observable<Asset[]> {
    return this.http.get(environment.endpoint + '/assets.json')
      .map((res: Response) => <Asset[]>res.json());
  }

  findAssetByAssetNo(assetNo: string): Observable<Asset> {
    return this.http.get(environment.endpoint + '/asset_' + assetNo + '.json')
      .map((res: Response) => <Asset>res.json());
  }

  findAssetMaintenancesByAsset(asset: Asset): Observable<AssetMaintenance[]> {
    return this.http.get(environment.endpoint + '/asset_maintenances_' + asset.assetNo + '.json')
      .map((res: Response) => <AssetMaintenance[]>res.json());
  }
}
