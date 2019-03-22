import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';

type TransferProgress = 'BANK' | 'BRANCH' | 'ACCOUNT' | 'AMOUNT';

class Transfer {
  public bankTo?: Bank = undefined;
  public branchTo?: Branch = undefined;
  public accountTo?: Account = undefined;
  public amount?: number = undefined;
  // public branches?: Branch[] = undefined;
  // public accounts?: Account[] = undefined;

  // public get bankName(): string {
  //   return this.bankTo !== undefined ? this.bankTo.name : '';
  // }
  // public get branchName(): string {
  //   return this.branchTo !== undefined ? this.branchTo.name : '';
  // }
  // public get accountName(): string {
  //   return this.accountTo !== undefined ? this.accountTo.name : '';
  // }
  // public get accountKind(): string {
  //   return this.accountTo !== undefined ? this.accountTo.kind : '';
  // }
  // public get accountNum(): string {
  //   return this.accountTo !== undefined ? this.accountTo.num : '';
  // }
  public get progress(): 'BANK' | 'BRANCH' | 'ACCOUNT' | 'AMOUNT' {
    if (this.bankTo === undefined) {
      return 'BANK';
    } else if (this.branchTo === undefined) {
      return 'BRANCH';
    } else if (this.accountTo === undefined) {
      return 'ACCOUNT';
    } else {
      return 'AMOUNT';
    }
  }

  public get return_before(): string {
    if (this.bankTo === undefined) {
      return ' ';
    } else if (this.branchTo === undefined) {
      return 'setBankTo';
    } else if (this.accountTo === undefined) {
      return 'setBranchTo';
    } else if (this.amount === undefined) {
      return 'setAccountTo';
    } else {
      return 'setAmountTo';
    }
  }
}

export { Transfer, TransferProgress };
