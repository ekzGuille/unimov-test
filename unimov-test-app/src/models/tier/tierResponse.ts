import { TierObject } from "./tierObject";

export class TierResponse {
  private _tierObject: TierObject[];

  constructor(tierObject: TierObject[]) {
    this._tierObject = tierObject;
  }

  /**
   * Getter tierObject
   * @return {TierObject[]}
   */
  public get tierObject(): TierObject[] {
    return this._tierObject;
  }

  /**
   * Setter tierObject
   * @param {TierObject[]} value
   */
  public set tierObject(value: TierObject[]) {
    this._tierObject = value;
  }

}
