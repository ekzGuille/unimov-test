import { VoiObject } from "./voiObject";

export class VoiResponse {
  private _voiObject: VoiObject[];

  constructor(voiObject: VoiObject[]) {
    this._voiObject = voiObject;
  }

  /**
   * Getter voiObject
   * @return {VoiObject[]}
   */
  public get voiObject(): VoiObject[] {
    return this._voiObject;
  }

  /**
   * Setter voiObject
   * @param {VoiObject[]} value
   */
  public set voiObject(value: VoiObject[]) {
    this._voiObject = value;
  }

}
