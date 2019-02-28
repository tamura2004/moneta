import BaseCollection from '@/models/BaseCollection';

export default class Account extends BaseCollection {
  public static collectionName = 'accounts';

  public bankId!: string;
  public bankName!: string;
  public branchId!: string;
  public branchName!: string;
  public num!: string;
  public kind!: string;
  public name!: string;
  public total!: number;
}
