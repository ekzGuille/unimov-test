export class MuvingObject {
  private _id: number;
  private _lat: number;
  private _lon: number;
  private _vehicleRegistration: string;
  private _charge: number;
  private _stateId: number;
  private _typeId: number;
  private _reservationStateId: number;
  private _address: string;
  private _zipCode: string;
  private _city: string;
  private _helmets: number;
  private _hardwareId: string;
  private _damageDescription: string;
  private _fuelCardPin: string;
  private _estimatedRange: number;
  private _isHelmetDetectionSupported: boolean;
  private _isClean: boolean;
  private _isDamaged: boolean;
  private _isRequestRunning: boolean;
  private _helmetDetectionSupported: boolean;
  private _clean: boolean;
  private _damaged: boolean;
  private _requestRunning: boolean;

  constructor(
    id: number,
    lat: number,
    lon: number,
    vehicleRegistration: string,
    charge: number,
    stateId: number,
    typeId: number,
    reservationStateId: number,
    address: string,
    zipCode: string,
    city: string,
    helmets: number,
    hardwareId: string,
    damageDescription: string,
    fuelCardPin: string,
    estimatedRange: number,
    isHelmetDetectionSupported: boolean,
    isClean: boolean,
    isDamaged: boolean,
    isRequestRunning: boolean,
    helmetDetectionSupported: boolean,
    clean: boolean,
    damaged: boolean,
    requestRunning: boolean
  ) {
    this._id = id;
    this._lat = lat;
    this._lon = lon;
    this._vehicleRegistration = vehicleRegistration;
    this._charge = charge;
    this._stateId = stateId;
    this._typeId = typeId;
    this._reservationStateId = reservationStateId;
    this._address = address;
    this._zipCode = zipCode;
    this._city = city;
    this._helmets = helmets;
    this._hardwareId = hardwareId;
    this._damageDescription = damageDescription;
    this._fuelCardPin = fuelCardPin;
    this._estimatedRange = estimatedRange;
    this._isHelmetDetectionSupported = isHelmetDetectionSupported;
    this._isClean = isClean;
    this._isDamaged = isDamaged;
    this._isRequestRunning = isRequestRunning;
    this._helmetDetectionSupported = helmetDetectionSupported;
    this._clean = clean;
    this._damaged = damaged;
    this._requestRunning = requestRunning;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
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
   * Getter vehicleRegistration
   * @return {string}
   */
  public get vehicleRegistration(): string {
    return this._vehicleRegistration;
  }

  /**
   * Getter charge
   * @return {number}
   */
  public get charge(): number {
    return this._charge;
  }

  /**
   * Getter stateId
   * @return {number}
   */
  public get stateId(): number {
    return this._stateId;
  }

  /**
   * Getter typeId
   * @return {number}
   */
  public get typeId(): number {
    return this._typeId;
  }

  /**
   * Getter reservationStateId
   * @return {number}
   */
  public get reservationStateId(): number {
    return this._reservationStateId;
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
   * Getter helmets
   * @return {number}
   */
  public get helmets(): number {
    return this._helmets;
  }

  /**
   * Getter hardwareId
   * @return {string}
   */
  public get hardwareId(): string {
    return this._hardwareId;
  }

  /**
   * Getter damageDescription
   * @return {string}
   */
  public get damageDescription(): string {
    return this._damageDescription;
  }

  /**
   * Getter fuelCardPin
   * @return {string}
   */
  public get fuelCardPin(): string {
    return this._fuelCardPin;
  }

  /**
   * Getter estimatedRange
   * @return {number}
   */
  public get estimatedRange(): number {
    return this._estimatedRange;
  }

  /**
   * Getter isHelmetDetectionSupported
   * @return {boolean}
   */
  public get isHelmetDetectionSupported(): boolean {
    return this._isHelmetDetectionSupported;
  }

  /**
   * Getter isClean
   * @return {boolean}
   */
  public get isClean(): boolean {
    return this._isClean;
  }

  /**
   * Getter isDamaged
   * @return {boolean}
   */
  public get isDamaged(): boolean {
    return this._isDamaged;
  }

  /**
   * Getter isRequestRunning
   * @return {boolean}
   */
  public get isRequestRunning(): boolean {
    return this._isRequestRunning;
  }

  /**
   * Getter helmetDetectionSupported
   * @return {boolean}
   */
  public get helmetDetectionSupported(): boolean {
    return this._helmetDetectionSupported;
  }

  /**
   * Getter clean
   * @return {boolean}
   */
  public get clean(): boolean {
    return this._clean;
  }

  /**
   * Getter damaged
   * @return {boolean}
   */
  public get damaged(): boolean {
    return this._damaged;
  }

  /**
   * Getter requestRunning
   * @return {boolean}
   */
  public get requestRunning(): boolean {
    return this._requestRunning;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
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
   * Setter vehicleRegistration
   * @param {string} value
   */
  public set vehicleRegistration(value: string) {
    this._vehicleRegistration = value;
  }

  /**
   * Setter charge
   * @param {number} value
   */
  public set charge(value: number) {
    this._charge = value;
  }

  /**
   * Setter stateId
   * @param {number} value
   */
  public set stateId(value: number) {
    this._stateId = value;
  }

  /**
   * Setter typeId
   * @param {number} value
   */
  public set typeId(value: number) {
    this._typeId = value;
  }

  /**
   * Setter reservationStateId
   * @param {number} value
   */
  public set reservationStateId(value: number) {
    this._reservationStateId = value;
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
   * Setter helmets
   * @param {number} value
   */
  public set helmets(value: number) {
    this._helmets = value;
  }

  /**
   * Setter hardwareId
   * @param {string} value
   */
  public set hardwareId(value: string) {
    this._hardwareId = value;
  }

  /**
   * Setter damageDescription
   * @param {string} value
   */
  public set damageDescription(value: string) {
    this._damageDescription = value;
  }

  /**
   * Setter fuelCardPin
   * @param {string} value
   */
  public set fuelCardPin(value: string) {
    this._fuelCardPin = value;
  }

  /**
   * Setter estimatedRange
   * @param {number} value
   */
  public set estimatedRange(value: number) {
    this._estimatedRange = value;
  }

  /**
   * Setter isHelmetDetectionSupported
   * @param {boolean} value
   */
  public set isHelmetDetectionSupported(value: boolean) {
    this._isHelmetDetectionSupported = value;
  }

  /**
   * Setter isClean
   * @param {boolean} value
   */
  public set isClean(value: boolean) {
    this._isClean = value;
  }

  /**
   * Setter isDamaged
   * @param {boolean} value
   */
  public set isDamaged(value: boolean) {
    this._isDamaged = value;
  }

  /**
   * Setter isRequestRunning
   * @param {boolean} value
   */
  public set isRequestRunning(value: boolean) {
    this._isRequestRunning = value;
  }

  /**
   * Setter helmetDetectionSupported
   * @param {boolean} value
   */
  public set helmetDetectionSupported(value: boolean) {
    this._helmetDetectionSupported = value;
  }

  /**
   * Setter clean
   * @param {boolean} value
   */
  public set clean(value: boolean) {
    this._clean = value;
  }

  /**
   * Setter damaged
   * @param {boolean} value
   */
  public set damaged(value: boolean) {
    this._damaged = value;
  }

  /**
   * Setter requestRunning
   * @param {boolean} value
   */
  public set requestRunning(value: boolean) {
    this._requestRunning = value;
  }
}
