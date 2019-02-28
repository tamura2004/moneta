export default class BaseCollection {
  public static collectionName: string;

  constructor(init: Partial<BaseCollection>) {
    Object.assign(this, init);
  }
}
