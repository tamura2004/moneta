const isBank = (init: Required<Bank>): init is Required<Bank> =>
  init.id !== undefined &&
  init.num !== undefined &&
  init.name !== undefined;

export default class Bank {
  public id: number;
  public num: string;
  public name: string;

  constructor(init: Required<Bank>) {
    if (!isBank(init)) {
      throw new Error('Bad bank data:' + JSON.stringify(init));
    }
    this.id = init.id;
    this.num = init.num;
    this.name = init.name;
  }
}
