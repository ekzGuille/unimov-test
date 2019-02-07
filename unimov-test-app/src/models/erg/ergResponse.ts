import { ErgDataRes } from "./ergDataRes";

export class ErgResponse {
  private _data: ErgDataRes;
  private _statusCode: number;
  private _message: string;
  private _success: boolean;

  constructor(
    data: ErgDataRes,
    statusCode: number,
    message: string,
    success: boolean
  ) {
    this._data = data;
    this._statusCode = statusCode;
    this._message = message;
    this._success = success;
  }

  /**
   * Getter data
   * @return {ErgDataRes}
   */
  public get data(): ErgDataRes {
    return this._data;
  }

  /**
   * Getter statusCode
   * @return {number}
   */
  public get statusCode(): number {
    return this._statusCode;
  }

  /**
   * Getter message
   * @return {string}
   */
  public get message(): string {
    return this._message;
  }

  /**
   * Getter success
   * @return {boolean}
   */
  public get success(): boolean {
    return this._success;
  }

  /**
   * Setter data
   * @param {ErgDataRes} value
   */
  public set data(value: ErgDataRes) {
    this._data = value;
  }

  /**
   * Setter statusCode
   * @param {number} value
   */
  public set statusCode(value: number) {
    this._statusCode = value;
  }

  /**
   * Setter message
   * @param {string} value
   */
  public set message(value: string) {
    this._message = value;
  }

  /**
   * Setter success
   * @param {boolean} value
   */
  public set success(value: boolean) {
    this._success = value;
  }
}
