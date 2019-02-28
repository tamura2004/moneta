import BaseCollection from '@/models/BaseCollection';

export default class Bank extends BaseCollection {
  public static collectionName = 'branches';

  public num!: string;
  public name!: string;
}
