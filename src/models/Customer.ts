export default class Customer {
  constructor(
    public id: number,
    public branchId: number,
    public num: string,
    public name: string,
    public loginId: string,
    public hashedPassword: string,
  ) {}
}
