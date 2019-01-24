const isStatement = (init: IStatement): init is IStatement =>
  init.id !== undefined &&
  init.date !== undefined &&
  init.kind !== undefined &&
  init.amount !== undefined &&
  init.memo !== undefined &&
  init.total !== undefined &&
  init.accountId !== undefined;

interface IStatement {
  id: string;
  accountId: string;
  date: string;
  kind: string;
  amount: number;
  memo: string;
  total: number;
}

export default class Statement {
  public id: string;
  public accountId: string;
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
    this.accountId = init.accountId;
  }
}
