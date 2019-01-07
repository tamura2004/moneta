const isStatement = (init: IStatement): init is IStatement =>
  init.id !== undefined &&
  init.date !== undefined &&
  init.kind !== undefined &&
  init.amount !== undefined &&
  init.memo !== undefined &&
  init.total !== undefined &&
  init.account_id !== undefined;

interface IStatement {
  id: number;
  date: string;
  kind: string;
  amount: number;
  memo: string;
  total: number;
  account_id: number;
}

export default class Statement {
  public id: number;
  public accountId: number;
  public date: string;
  public kind: string;
  public amount: number;
  public memo: string;
  public total: number;

  constructor(init: IStatement) {
    if (!isStatement(init)) {
      throw new Error('Bad statement data:' + JSON.stringify(init));
    }
    this.id = init.id;
    this.date = init.date;
    this.kind = init.kind;
    this.amount = init.amount;
    this.memo = init.memo;
    this.total = init.total;
    this.accountId = init.account_id;
  }
}
