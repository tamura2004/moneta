import SessionStore from '@/store/SessionStore';
import SessionState from '@/store/SessionState';
import BaseState from '@/store/BaseState';
import Account from '@/models/Account';
import Branch from '@/models/Branch';
import Bank from '@/models/Bank';

describe('SessionStore.ts', () => {
  const sessionState = new SessionState();
  sessionState.accountId = 'a002';

  const baseState = new BaseState();
  baseState.accounts = new Map<string, Account>([
    ['a001', new Account({ name: 'A001', branchId: 'b001' })],
    ['a002', new Account({ name: 'A002', branchId: 'b002' })],
    ['a003', new Account({ name: 'A003', branchId: 'b003' })],
  ]);

  baseState.branches = new Map<string, Branch>([
    ['b001', new Branch({ name: 'B001', bankId: 'c001' })],
    ['b002', new Branch({ name: 'B002', bankId: 'c002' })],
    ['b003', new Branch({ name: 'B003', bankId: 'c003' })],
  ]);

  baseState.banks = new Map<string, Bank>([
    ['c001', new Bank({ name: 'C001' })],
    ['c002', new Bank({ name: 'C002' })],
    ['c003', new Bank({ name: 'C003' })],
  ]);

  if (SessionStore.getters === undefined) {
    return;
  }
  const getters = SessionStore.getters;

  it('can get account', () => {
    const account = getters.account(sessionState, {}, baseState, {});
    expect(account.name).toBe('A002');
  });

  it('can get branch', () => {
    const account = getters.account(sessionState, {}, baseState, {});
    const branch = getters.branch(sessionState, { account }, baseState, {});
    expect(branch.name).toBe('B002');
  });

  it('can get bank', () => {
    const account = getters.account(sessionState, {}, baseState, {});
    const branch = getters.branch(sessionState, { account }, baseState, {});
    const bank = getters.bank(sessionState, { branch }, baseState, {});
    expect(bank.name).toBe('C002');
  });
});
