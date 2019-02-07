export class ErgPriceClass {
  private _unitPrice: number;
  private _unitInterval: number;

  constructor(unitPrice: number, unitInterval: number) {
    this._unitPrice = unitPrice;
    this._unitInterval = unitInterval;
  }

  /**
   * Getter unitPrice
   * @return {number}
   */
  public get unitPrice(): number {
    return this._unitPrice;
  }

  /**
   * Getter unitInterval
   * @return {number}
   */
  public get unitInterval(): number {
    return this._unitInterval;
  }

  /**
   * Setter unitPrice
   * @param {number} value
   */
  public set unitPrice(value: number) {
    this._unitPrice = value;
  }

  /**
   * Setter unitInterval
   * @param {number} value
   */
  public set unitInterval(value: number) {
    this._unitInterval = value;
  }
}
