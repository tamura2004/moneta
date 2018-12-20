import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';
import Statement from '@/models/Statement';
import { Transfer } from '@/models/Transfer';

export default class State {
  // public authenticated: boolean = false;
  public account?: Account = undefined;
  public transfer: Transfer = new Transfer();
  public banks: Bank[] = [];
  public branches: Branch[] = [];
  public accounts: Account[] = [];
  public statements: Statement[] = [];
}
