import BaseCollection from '@/models/BaseCollection';

export default class Statement extends BaseCollection {
  public static collectionName = 'statements';

  public accountId!: string;
  public date!: string;
  public kind!: string;
  public amount!: number;
  public memo!: string;
  public total!: number;
  public createdAt!: number;
}
