export class MobikeObject {

  private _distId: string;
  private _distX: number;
  private _distY: number;
  private _distNum: number;
  private _distance: string;
  private _bikeIds: string;
  private _biketype: number;
  private _type: number;
  private _boundary: string;
  private _operateType: number;


  constructor(distId: string, distX: number, distY: number, distNum: number, distance: string, bikeIds: string, biketype: number, type: number, boundary: string, operateType: number) {
    this._distId = distId;
    this._distX = distX;
    this._distY = distY;
    this._distNum = distNum;
    this._distance = distance;
    this._bikeIds = bikeIds;
    this._biketype = biketype;
    this._type = type;
    this._boundary = boundary;
    this._operateType = operateType;
  }

  /**
   * Getter distId
   * @return {string}
   */
  public get distId(): string {
    return this._distId;
  }

  /**
   * Getter distX
   * @return {number}
   */
  public get distX(): number {
    return this._distX;
  }

  /**
   * Getter distY
   * @return {number}
   */
  public get distY(): number {
    return this._distY;
  }

  /**
   * Getter distNum
   * @return {number}
   */
  public get distNum(): number {
    return this._distNum;
  }

  /**
   * Getter distance
   * @return {string}
   */
  public get distance(): string {
    return this._distance;
  }

  /**
   * Getter bikeIds
   * @return {string}
   */
  public get bikeIds(): string {
    return this._bikeIds;
  }

  /**
   * Getter biketype
   * @return {number}
   */
  public get biketype(): number {
    return this._biketype;
  }

  /**
   * Getter type
   * @return {number}
   */
  public get type(): number {
    return this._type;
  }

  /**
   * Getter boundary
   * @return {string}
   */
  public get boundary(): string {
    return this._boundary;
  }

  /**
   * Getter operateType
   * @return {number}
   */
  public get operateType(): number {
    return this._operateType;
  }

  /**
   * Setter distId
   * @param {string} value
   */
  public set distId(value: string) {
    this._distId = value;
  }

  /**
   * Setter distX
   * @param {number} value
   */
  public set distX(value: number) {
    this._distX = value;
  }

  /**
   * Setter distY
   * @param {number} value
   */
  public set distY(value: number) {
    this._distY = value;
  }

  /**
   * Setter distNum
   * @param {number} value
   */
  public set distNum(value: number) {
    this._distNum = value;
  }

  /**
   * Setter distance
   * @param {string} value
   */
  public set distance(value: string) {
    this._distance = value;
  }

  /**
   * Setter bikeIds
   * @param {string} value
   */
  public set bikeIds(value: string) {
    this._bikeIds = value;
  }

  /**
   * Setter biketype
   * @param {number} value
   */
  public set biketype(value: number) {
    this._biketype = value;
  }

  /**
   * Setter type
   * @param {number} value
   */
  public set type(value: number) {
    this._type = value;
  }

  /**
   * Setter boundary
   * @param {string} value
   */
  public set boundary(value: string) {
    this._boundary = value;
  }

  /**
   * Setter operateType
   * @param {number} value
   */
  public set operateType(value: number) {
    this._operateType = value;
  }


}
