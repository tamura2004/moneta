import BaseCollection from '@/models/BaseCollection';

export default class Bank extends BaseCollection {
  public static collectionName = 'banks';

  public num!: string;
  public name!: string;
}
