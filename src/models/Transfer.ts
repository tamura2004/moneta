export default class Transfer {
  public bankId?: string = undefined;
  public branchId?: string = undefined;
  public accountId?: string = undefined;
  public amount?: number = undefined;
  public processing?: boolean = false;

  public clear(): void {
    this.bankId = undefined;
    this.branchId = undefined;
    this.accountId = undefined;
    this.amount = undefined;
  }
}
