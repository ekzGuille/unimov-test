export class VoiObject {
  private _id: string;
  private _short: string;
  private _name: string;
  private _zone: number;
  private _type: string;
  private _status: string;
  private _bounty: number;
  private _location: number[];
  private _battery: number;
  private _locked: boolean;
  private _updated: string;


  constructor(id: string, short: string, name: string, zone: number, type: string, status: string, bounty: number, location: number[], battery: number, locked: boolean, updated: string) {
    this._id = id;
    this._short = short;
    this._name = name;
    this._zone = zone;
    this._type = type;
    this._status = status;
    this._bounty = bounty;
    this._location = location;
    this._battery = battery;
    this._locked = locked;
    this._updated = updated;
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter short
   * @return {string}
   */
  public get short(): string {
    return this._short;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter zone
   * @return {number}
   */
  public get zone(): number {
    return this._zone;
  }

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter status
   * @return {string}
   */
  public get status(): string {
    return this._status;
  }

  /**
   * Getter bounty
   * @return {number}
   */
  public get bounty(): number {
    return this._bounty;
  }

  /**
   * Getter location
   * @return {number[]}
   */
  public get location(): number[] {
    return this._location;
  }

  /**
   * Getter battery
   * @return {number}
   */
  public get battery(): number {
    return this._battery;
  }

  /**
   * Getter locked
   * @return {boolean}
   */
  public get locked(): boolean {
    return this._locked;
  }

  /**
   * Getter updated
   * @return {string}
   */
  public get updated(): string {
    return this._updated;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter short
   * @param {string} value
   */
  public set short(value: string) {
    this._short = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter zone
   * @param {number} value
   */
  public set zone(value: number) {
    this._zone = value;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter status
   * @param {string} value
   */
  public set status(value: string) {
    this._status = value;
  }

  /**
   * Setter bounty
   * @param {number} value
   */
  public set bounty(value: number) {
    this._bounty = value;
  }

  /**
   * Setter location
   * @param {number[]} value
   */
  public set location(value: number[]) {
    this._location = value;
  }

  /**
   * Setter battery
   * @param {number} value
   */
  public set battery(value: number) {
    this._battery = value;
  }

  /**
   * Setter locked
   * @param {boolean} value
   */
  public set locked(value: boolean) {
    this._locked = value;
  }

  /**
   * Setter updated
   * @param {string} value
   */
  public set updated(value: string) {
    this._updated = value;
  }

}
