export default class Statement {
  private static monetary(value: number): string {
    return '￥' + value.toLocaleString() + ' -';
  }

  constructor(
    public id: number,
    public accountId: number,
    public date: string,
    public type: string,
    public amount: number,
    public memo: string,
    public total: number,
  ) {}

  public monetaryTotal(): string {
    return Statement.monetary(this.total);
  }

  public monetaryAmount(): string {
    return Statement.monetary(this.amount);
  }
}

