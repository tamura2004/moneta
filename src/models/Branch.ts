import BaseCollection from '@/models/BaseCollection';

export default class Branch extends BaseCollection {
  public static collectionName = 'branches';

  public num!: string;
  public name!: string;
  public bankId!: string;
}
