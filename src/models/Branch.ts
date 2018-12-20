type IBranch = Required<Branch>;

const isIBranch = (init: IBranch): init is IBranch =>
  init.id !== undefined &&
  init.num !== undefined &&
  init.name !== undefined &&
  init.bank_id !== undefined;

class Branch {
  public id!: number;
  public num!: string;
  public name!: string;
  public bank_id!: number;

  constructor(init: IBranch) {
    if (!isIBranch(init)) {
      throw new Error('Bad branch data:' + JSON.stringify(init));
    }
    Object.assign(this, init);
  }
}

export { Branch, IBranch, isIBranch};
