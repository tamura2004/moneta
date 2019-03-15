/* tslint:disable */

class Bank {
  public name: string;
  public num: number;
}

interface partialBank {
  name?: string;
  num?: number;
}

const bad: Bank = { name: 'mejiro' };
const good1: Partial<Bank> = { name: 'mejiro' };
const good2: partialBank = { name: 'mejiro' };
