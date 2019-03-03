import FormStore from '@/store/FormStore';
import FormState from '@/store/FormState';
import BaseState from '@/store/BaseState';
import Account from '@/models/Account';
import Branch from '@/models/Branch';
import Bank from '@/models/Bank';
import Item from '@/models/Item';

describe('FormStore.ts', () => {
  const formState = new FormState();

  const baseState = new BaseState();
  baseState.accounts = new Map<string, Account>([
    ['a001', new Account({ name: 'A001', branchId: 'b001' })],
    ['a002', new Account({ name: 'A002', branchId: 'b002' })],
    ['a003', new Account({ name: 'A003', branchId: 'b003' })],
  ]);

  baseState.branches = new Map<string, Branch>([
    ['b001', new Branch({ name: 'B001', bankId: 'c001' })],
    ['b002', new Branch({ name: 'B002', bankId: 'c002' })],
    ['b012', new Branch({ name: 'B012', bankId: 'c002' })],
    ['b003', new Branch({ name: 'B003', bankId: 'c003' })],
  ]);

  baseState.banks = new Map<string, Bank>([
    ['c001', new Bank({ name: 'C001' })],
    ['c002', new Bank({ name: 'C002' })],
    ['c003', new Bank({ name: 'C003' })],
  ]);

  if (FormStore.getters === undefined) {
    return;
  }
  const getters = FormStore.getters;

  it('can get branches', () => {
    formState.bankId = 'c002';
    const branches: Item[] = getters.branches(formState, {}, baseState, {});
    const expected = [
      { id: 'b002', name: 'B002' },
      { id: 'b012', name: 'B012' },
    ];
    expect(branches).toEqual(expected);
  });
});
