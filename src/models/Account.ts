const isAccount = (init: IAccount): init is IAccount =>
  init.id !== undefined &&
  init.num !== undefined &&
  init.kind !== undefined &&
  init.customer_id !== undefined;

interface IAccount {
  id: number;
  num: string;
  kind: string;
  customer_id: number;
}

export default class Account {
  public id: number;
  public num: string;
  public kind: string;
  public customerId: number;

  constructor(init: IAccount) {
    if (!isAccount(init)) {
      throw new Error('Bad account data:' + JSON.stringify(init));
    }
    this.id = init.id;
    this.num = init.num;
    this.kind = init.kind;
    this.customerId = init.customer_id;
  }
}
