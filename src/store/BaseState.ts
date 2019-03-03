import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Account from '@/models/Account';
import Statement from '@/models/Statement';
import SessionState from '@/store/SessionState';
import TransferState from '@/store/TransferState';
import SignupState from '@/store/SignupState';

export default class BaseState {
  public banks: Map<string, Bank> = new Map<string, Bank>();
  public branches: Map<string, Branch> = new Map<string, Branch>();
  public accounts: Map<string, Account> = new Map<string, Account>();
  public statements: Map<string, Statement> = new Map<string, Statement>();
  public session!: SessionState;
  public transfer!: TransferState;
  public signup!: SignupState;
}
