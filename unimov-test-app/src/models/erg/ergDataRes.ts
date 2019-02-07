import { ErgObject } from "./ergObject";

export class ErgDataRes {
  private _count: number;
  private _items: ErgObject[];

  constructor(count: number, items: ErgObject[]) {
    this._count = count;
    this._items = items;
  }

  /**
   * Getter count
   * @return {number}
   */
  public get count(): number {
    return this._count;
  }

  /**
   * Getter items
   * @return {ErgObject[]}
   */
  public get items(): ErgObject[] {
    return this._items;
  }

  /**
   * Setter count
   * @param {number} value
   */
  public set count(value: number) {
    this._count = value;
  }

  /**
   * Setter items
   * @param {ErgObject[]} value
   */
  public set items(value: ErgObject[]) {
    this._items = value;
  }
}
