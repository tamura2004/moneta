import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Customer from '@/models/Customer';
import Account from '@/models/Account';

export default class Transfer {
  public AccountFrom?: Account;
  public BankTo?: Bank;
  public BranchTo?: Branch;
  public CustomerTo?: Customer;
  public AccountTo?: Account;
}
