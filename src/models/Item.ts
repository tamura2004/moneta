interface Named {
  name: string;
}

type Filter<T> = (t: T) => boolean;

export default class Item {
  public static convertFromMap<T extends Named>(map: Map<string, T>, fn: Filter<T>): Item[] {
    const items = [];
    for (const [key, value] of map) {
      if (fn(value)) {
        items.push(new this({ id: key, name: value.name }));
      }
    }
    return items;
  }

  public id!: string;
  public name!: string;

  constructor(init: Required<Item>){
    Object.assign(this, init);
  }
}
