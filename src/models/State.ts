import Customer from './Customer';
import Bank from './Bank';
import Branch from './Branch';
import Account from './Account';
import Statement from './Statement';

export default class State {
  constructor(
    public authenticated: boolean,
    public customer: Customer | null,
    public banks: Bank[],
    public branches: Branch[],
    public customers: Customer[],
    public accounts: Account[],
    public statements: Statement[],
  ) {}
}
