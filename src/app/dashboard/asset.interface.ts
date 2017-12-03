import {AssetMaintenance} from './asset-maintenance.interface';
export interface Asset {
  id: number;
  assetNo: string;
  description: string;
  category: string;
  checkedOutDate: Date;
  loaned: boolean;
  maintenances?: AssetMaintenance[];
}
