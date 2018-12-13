interface IBranch {
  id: number;
  num: string;
  name: string;
  bank_id: number;
}

const isBranch = (init: IBranch): init is IBranch =>
  init.id !== undefined &&
  init.num !== undefined &&
  init.name !== undefined &&
  init.bank_id !== undefined;

export default class Branch {
  public id: number;
  public num: string;
  public name: string;
  public bankId: number;

  constructor(init: IBranch) {
    if (!isBranch(init)) {
      throw new Error('Bad branch data:' + JSON.stringify(init));
    }
    this.id = init.id;
    this.num = init.num;
    this.name = init.name;
    this.bankId = init.bank_id;
  }
}
