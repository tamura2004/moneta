type IBranch = Required<Branch>;

const isIBranch = (init: IBranch): init is IBranch =>
  init.id !== undefined &&
  init.num !== undefined &&
  init.name !== undefined &&
  init.bankId !== undefined;

class Branch {
  public id!: string;
  public num!: string;
  public name!: string;
  public bankId!: string;

  constructor(init: IBranch) {
    if (!isIBranch(init)) {
      throw new Error('Bad branch data:' + JSON.stringify(init));
    }
    Object.assign(this, init);
  }
}

export { Branch, IBranch, isIBranch};
