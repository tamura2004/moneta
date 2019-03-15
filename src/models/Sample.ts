export default class Sample {
  public static className: string = 'sample class';

  public x: number;
  public y: number;
  public label: string;

  constructor(x: number = 0, y: number = 0, label: string = '') {
    this.x = x;
    this.y = y;
    this.label = label;
  }

  public distance(other: Sample): number {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}
