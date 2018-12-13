const isCustomer = (init: ICustomer): init is ICustomer =>
  init.id !== undefined &&
  init.num !== undefined &&
  init.name !== undefined &&
  init.login_id !== undefined &&
  init.hashed_password !== undefined &&
  init.branch_id !== undefined;

interface ICustomer {
  id: number;
  num: string;
  name: string;
  login_id: string;
  hashed_password: string;
  branch_id: number;
}

export default class Customer {
  public id: number;
  public num: string;
  public name: string;
  public loginId: string;
  public hashedPassword: string;
  public branchId: number;

  constructor(init: ICustomer) {
    if (!isCustomer(init)) {
      throw new Error('Bad customer data:' + JSON.stringify(init));
    }
    this.id = init.id;
    this.num = init.num;
    this.name = init.name;
    this.loginId = init.login_id;
    this.hashedPassword = init.hashed_password;
    this.branchId = init.branch_id;
  }
}
