import { MuvingObject } from "./muvingObject";

export class MuvingResponse {
  private _responseCode: string;
  private _object: MuvingObject[];

  constructor(responseCode: string, object: MuvingObject[]) {
    this._responseCode = responseCode;
    this._object = object;
  }

  /**
   * Getter responseCode
   * @return {string}
   */
  public get responseCode(): string {
    return this._responseCode;
  }

  /**
   * Getter object
   * @return {MuvingObject[]}
   */
  public get object(): MuvingObject[] {
    return this._object;
  }

  /**
   * Setter responseCode
   * @param {string} value
   */
  public set responseCode(value: string) {
    this._responseCode = value;
  }

  /**
   * Setter object
   * @param {MuvingObject[]} value
   */
  public set object(value: MuvingObject[]) {
    this._object = value;
  }
}
