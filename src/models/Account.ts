type IAccount = Required<Account>;

const isIAccount = (init: IAccount): init is IAccount =>
  init.id !== undefined &&
  init.bankId !== undefined &&
  init.bankName !== undefined &&
  init.branchId !== undefined &&
  init.branchName !== undefined &&
  init.num !== undefined &&
  init.kind !== undefined &&
  init.name !== undefined &&
  init.total !== undefined;

class Account {
  public id!: string;
  public bankId!: string;
  public bankName!: string;
  public branchId!: string;
  public branchName!: string;
  public num!: string;
  public kind!: string;
  public name!: string;
  public total!: number;

  constructor(init: IAccount) {
    if (!isIAccount(init)) {
      throw new Error('Bad account data:' + JSON.stringify(init));
    }
    Object.assign(this, init);
  }
}

export { Account, IAccount, isIAccount };
