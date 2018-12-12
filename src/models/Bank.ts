export interface IBank {
  id: number;
  num: string;
  name: string;
}

export class Bank {
  public id: number;
  public num: string;
  public name: string;

  constructor({id, num, name}: IBank = { id: 0, num: '', name: '' }) {
    this.id = id;
    this.num = num;
    this.name = name;
  }
}
