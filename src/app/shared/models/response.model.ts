import { PageInfo } from './page-info.model';
import { ResponseItem } from './response-item/response-item.model';

export interface Response {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ResponseItem[];
}
