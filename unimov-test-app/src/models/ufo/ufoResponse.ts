import { UfoObject } from "./ufoObject";

export class UfoResponse {
  private _UfoObject: UfoObject[];

  constructor(UfoObject: UfoObject[]) {
    this._UfoObject = UfoObject;
  }

  /**
   * Getter UfoObject
   * @return {UfoObject[]}
   */
  public get UfoObject(): UfoObject[] {
    return this._UfoObject;
  }

  /**
   * Setter UfoObject
   * @param {UfoObject[]} value
   */
  public set UfoObject(value: UfoObject[]) {
    this._UfoObject = value;
  }
}
