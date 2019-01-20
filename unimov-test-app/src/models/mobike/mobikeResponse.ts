import { MobikeObject } from "./mobikeObject";

export class MobikeResponse {
  private _code: number;
  private _message: string;
  private _bike: MobikeObject[];
  private _mpl: string[];
  private _biketype: number;
  private _radius: number;
  private _autoZoom: boolean;
  private _hasRedPacket: number;

  constructor(code: number, message: string, bike: MobikeObject[], mpl: string[], biketype: number, radius: number, autoZoom: boolean, hasRedPacket: number) {
    this._code = code;
    this._message = message;
    this._bike = bike;
    this._mpl = mpl;
    this._biketype = biketype;
    this._radius = radius;
    this._autoZoom = autoZoom;
    this._hasRedPacket = hasRedPacket;
  }

  /**
   * Getter code
   * @return {number}
   */
  public get code(): number {
    return this._code;
  }

  /**
   * Getter message
   * @return {string}
   */
  public get message(): string {
    return this._message;
  }

  /**
   * Getter bike
   * @return {MobikeObject[]}
   */
  public get bike(): MobikeObject[] {
    return this._bike;
  }

  /**
   * Getter mpl
   * @return {string[]}
   */
  public get mpl(): string[] {
    return this._mpl;
  }

  /**
   * Getter biketype
   * @return {number}
   */
  public get biketype(): number {
    return this._biketype;
  }

  /**
   * Getter radius
   * @return {number}
   */
  public get radius(): number {
    return this._radius;
  }

  /**
   * Getter autoZoom
   * @return {boolean}
   */
  public get autoZoom(): boolean {
    return this._autoZoom;
  }

  /**
   * Getter hasRedPacket
   * @return {number}
   */
  public get hasRedPacket(): number {
    return this._hasRedPacket;
  }

  /**
   * Setter code
   * @param {number} value
   */
  public set code(value: number) {
    this._code = value;
  }

  /**
   * Setter message
   * @param {string} value
   */
  public set message(value: string) {
    this._message = value;
  }

  /**
   * Setter bike
   * @param {MobikeObject[]} value
   */
  public set bike(value: MobikeObject[]) {
    this._bike = value;
  }

  /**
   * Setter mpl
   * @param {string[]} value
   */
  public set mpl(value: string[]) {
    this._mpl = value;
  }

  /**
   * Setter biketype
   * @param {number} value
   */
  public set biketype(value: number) {
    this._biketype = value;
  }

  /**
   * Setter radius
   * @param {number} value
   */
  public set radius(value: number) {
    this._radius = value;
  }

  /**
   * Setter autoZoom
   * @param {boolean} value
   */
  public set autoZoom(value: boolean) {
    this._autoZoom = value;
  }

  /**
   * Setter hasRedPacket
   * @param {number} value
   */
  public set hasRedPacket(value: number) {
    this._hasRedPacket = value;
  }

}
