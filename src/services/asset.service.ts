import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { Asset } from '../app/dashboard/asset.interface';
import { Observable } from 'rxjs/Observable';

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
}
