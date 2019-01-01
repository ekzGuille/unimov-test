export class TierObject {
  private _carId: number;
  private _title: string;
  private _lat: number;
  private _lon: number;
  private _licencePlate: string;
  private _fuelLevel: number;
  private _vehicleStateId: number;
  private _vehicleTypeId: number;
  private _pricingTime: string;
  private _pricingParking: string;
  private _reservationState: number;
  private _address: string;
  private _zipCode: string;
  private _city: string;
  private _locationId: number;


  constructor(carId: number, title: string, lat: number, lon: number, licencePlate: string, fuelLevel: number, vehicleStateId: number, vehicleTypeId: number, pricingTime: string, pricingParking: string, reservationState: number, address: string, zipCode: string, city: string, locationId: number) {
    this._carId = carId;
    this._title = title;
    this._lat = lat;
    this._lon = lon;
    this._licencePlate = licencePlate;
    this._fuelLevel = fuelLevel;
    this._vehicleStateId = vehicleStateId;
    this._vehicleTypeId = vehicleTypeId;
    this._pricingTime = pricingTime;
    this._pricingParking = pricingParking;
    this._reservationState = reservationState;
    this._address = address;
    this._zipCode = zipCode;
    this._city = city;
    this._locationId = locationId;
  }

  /**
   * Getter carId
   * @return {number}
   */
  public get carId(): number {
    return this._carId;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Getter lat
   * @return {number}
   */
  public get lat(): number {
    return this._lat;
  }

  /**
   * Getter lon
   * @return {number}
   */
  public get lon(): number {
    return this._lon;
  }

  /**
   * Getter licencePlate
   * @return {string}
   */
  public get licencePlate(): string {
    return this._licencePlate;
  }

  /**
   * Getter fuelLevel
   * @return {number}
   */
  public get fuelLevel(): number {
    return this._fuelLevel;
  }

  /**
   * Getter vehicleStateId
   * @return {number}
   */
  public get vehicleStateId(): number {
    return this._vehicleStateId;
  }

  /**
   * Getter vehicleTypeId
   * @return {number}
   */
  public get vehicleTypeId(): number {
    return this._vehicleTypeId;
  }

  /**
   * Getter pricingTime
   * @return {string}
   */
  public get pricingTime(): string {
    return this._pricingTime;
  }

  /**
   * Getter pricingParking
   * @return {string}
   */
  public get pricingParking(): string {
    return this._pricingParking;
  }

  /**
   * Getter reservationState
   * @return {number}
   */
  public get reservationState(): number {
    return this._reservationState;
  }

  /**
   * Getter address
   * @return {string}
   */
  public get address(): string {
    return this._address;
  }

  /**
   * Getter zipCode
   * @return {string}
   */
  public get zipCode(): string {
    return this._zipCode;
  }

  /**
   * Getter city
   * @return {string}
   */
  public get city(): string {
    return this._city;
  }

  /**
   * Getter locationId
   * @return {number}
   */
  public get locationId(): number {
    return this._locationId;
  }

  /**
   * Setter carId
   * @param {number} value
   */
  public set carId(value: number) {
    this._carId = value;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Setter lat
   * @param {number} value
   */
  public set lat(value: number) {
    this._lat = value;
  }

  /**
   * Setter lon
   * @param {number} value
   */
  public set lon(value: number) {
    this._lon = value;
  }

  /**
   * Setter licencePlate
   * @param {string} value
   */
  public set licencePlate(value: string) {
    this._licencePlate = value;
  }

  /**
   * Setter fuelLevel
   * @param {number} value
   */
  public set fuelLevel(value: number) {
    this._fuelLevel = value;
  }

  /**
   * Setter vehicleStateId
   * @param {number} value
   */
  public set vehicleStateId(value: number) {
    this._vehicleStateId = value;
  }

  /**
   * Setter vehicleTypeId
   * @param {number} value
   */
  public set vehicleTypeId(value: number) {
    this._vehicleTypeId = value;
  }

  /**
   * Setter pricingTime
   * @param {string} value
   */
  public set pricingTime(value: string) {
    this._pricingTime = value;
  }

  /**
   * Setter pricingParking
   * @param {string} value
   */
  public set pricingParking(value: string) {
    this._pricingParking = value;
  }

  /**
   * Setter reservationState
   * @param {number} value
   */
  public set reservationState(value: number) {
    this._reservationState = value;
  }

  /**
   * Setter address
   * @param {string} value
   */
  public set address(value: string) {
    this._address = value;
  }

  /**
   * Setter zipCode
   * @param {string} value
   */
  public set zipCode(value: string) {
    this._zipCode = value;
  }

  /**
   * Setter city
   * @param {string} value
   */
  public set city(value: string) {
    this._city = value;
  }

  /**
   * Setter locationId
   * @param {number} value
   */
  public set locationId(value: number) {
    this._locationId = value;
  }

}
