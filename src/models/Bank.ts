type IBank = Required<Bank>;

const isIBank = (init: IBank): init is IBank =>
  init.id !== undefined &&
  init.num !== undefined &&
  init.name !== undefined;

class Bank {
  public id!: number;
  public num!: string;
  public name!: string;

  constructor(init: IBank) {
    if (!isIBank(init)) {
      throw new Error('Bad bank data:' + JSON.stringify(init));
    }
    Object.assign(this, init);
  }
}

export { Bank, IBank, isIBank };
