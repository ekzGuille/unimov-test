import { ErgPriceClass } from "./ergPriceClass";

export class ErgObject {
  private _code: string;
  private _latitude: number;
  private _longitude: number;
  private _powerBattery: number;
  private _isLocked: boolean;
  private _kind: number;
  private _key: string;
  private _lockCode: string;
  private _color: string;
  private _colorIcon: string;
  private _name: string;
  private _icon: string;
  private _franchisee: string;
  private _price: ErgPriceClass;
  private _electricKind: string;

  constructor(
    code: string,
    latitude: number,
    longitude: number,
    powerBattery: number,
    isLocked: boolean,
    kind: number,
    key: string,
    lockCode: string,
    color: string,
    colorIcon: string,
    name: string,
    icon: string,
    franchisee: string,
    price: ErgPriceClass,
    electricKind: string
  ) {
    this._code = code;
    this._latitude = latitude;
    this._longitude = longitude;
    this._powerBattery = powerBattery;
    this._isLocked = isLocked;
    this._kind = kind;
    this._key = key;
    this._lockCode = lockCode;
    this._color = color;
    this._colorIcon = colorIcon;
    this._name = name;
    this._icon = icon;
    this._franchisee = franchisee;
    this._price = price;
    this._electricKind = electricKind;
  }

  /**
   * Getter code
   * @return {string}
   */
  public get code(): string {
    return this._code;
  }

  /**
   * Getter latitude
   * @return {number}
   */
  public get latitude(): number {
    return this._latitude;
  }

  /**
   * Getter longitude
   * @return {number}
   */
  public get longitude(): number {
    return this._longitude;
  }

  /**
   * Getter powerBattery
   * @return {number}
   */
  public get powerBattery(): number {
    return this._powerBattery;
  }

  /**
   * Getter isLocked
   * @return {boolean}
   */
  public get isLocked(): boolean {
    return this._isLocked;
  }

  /**
   * Getter kind
   * @return {number}
   */
  public get kind(): number {
    return this._kind;
  }

  /**
   * Getter key
   * @return {string}
   */
  public get key(): string {
    return this._key;
  }

  /**
   * Getter lockCode
   * @return {string}
   */
  public get lockCode(): string {
    return this._lockCode;
  }

  /**
   * Getter color
   * @return {string}
   */
  public get color(): string {
    return this._color;
  }

  /**
   * Getter colorIcon
   * @return {string}
   */
  public get colorIcon(): string {
    return this._colorIcon;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter icon
   * @return {string}
   */
  public get icon(): string {
    return this._icon;
  }

  /**
   * Getter franchisee
   * @return {string}
   */
  public get franchisee(): string {
    return this._franchisee;
  }

  /**
   * Getter price
   * @return {ErgPriceClass}
   */
  public get price(): ErgPriceClass {
    return this._price;
  }

  /**
   * Getter electricKind
   * @return {string}
   */
  public get electricKind(): string {
    return this._electricKind;
  }

  /**
   * Setter code
   * @param {string} value
   */
  public set code(value: string) {
    this._code = value;
  }

  /**
   * Setter latitude
   * @param {number} value
   */
  public set latitude(value: number) {
    this._latitude = value;
  }

  /**
   * Setter longitude
   * @param {number} value
   */
  public set longitude(value: number) {
    this._longitude = value;
  }

  /**
   * Setter powerBattery
   * @param {number} value
   */
  public set powerBattery(value: number) {
    this._powerBattery = value;
  }

  /**
   * Setter isLocked
   * @param {boolean} value
   */
  public set isLocked(value: boolean) {
    this._isLocked = value;
  }

  /**
   * Setter kind
   * @param {number} value
   */
  public set kind(value: number) {
    this._kind = value;
  }

  /**
   * Setter key
   * @param {string} value
   */
  public set key(value: string) {
    this._key = value;
  }

  /**
   * Setter lockCode
   * @param {string} value
   */
  public set lockCode(value: string) {
    this._lockCode = value;
  }

  /**
   * Setter color
   * @param {string} value
   */
  public set color(value: string) {
    this._color = value;
  }

  /**
   * Setter colorIcon
   * @param {string} value
   */
  public set colorIcon(value: string) {
    this._colorIcon = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter icon
   * @param {string} value
   */
  public set icon(value: string) {
    this._icon = value;
  }

  /**
   * Setter franchisee
   * @param {string} value
   */
  public set franchisee(value: string) {
    this._franchisee = value;
  }

  /**
   * Setter price
   * @param {ErgPriceClass} value
   */
  public set price(value: ErgPriceClass) {
    this._price = value;
  }

  /**
   * Setter electricKind
   * @param {string} value
   */
  public set electricKind(value: string) {
    this._electricKind = value;
  }
}
