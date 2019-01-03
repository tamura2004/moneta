import { Bank, isIBank} from '@/models/Bank';
import { Branch, isIBranch} from '@/models/Branch';

type IAccount = Partial<Account>;

const isIAccount = (init: IAccount): init is IAccount =>
  init.id !== undefined &&
  init.num !== undefined &&
  init.kind !== undefined &&
  init.name !== undefined &&
  init.branch_id !== undefined;

class Account {
  public id!: number;
  public num!: string;
  public kind!: string;
  public name!: string;
  public branch_id!: number;
  public login_id?: string;
  public hashed_password?: string;
  public bank?: Bank;
  public branch?: Branch;
  public balance?: number;

  constructor(init: IAccount) {
    if (!isIAccount(init)) {
      throw new Error('Bad account data:' + JSON.stringify(init));
    }
    Object.assign(this, init);
    if (init.bank !== undefined && isIBank(init.bank)) {
      this.bank = new Bank(init.bank);
    } else {
      this.bank = undefined;
    }
    if (init.branch !== undefined && isIBranch(init.branch)) {
      this.branch = new Branch(init.branch);
    } else {
      this.branch = undefined;
    }
  }
}

export { Account, IAccount, isIAccount };
