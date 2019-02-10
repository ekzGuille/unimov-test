export class UserPreferences {
  private _selMobike: boolean;
  private _selMuving: boolean;
  private _selTier: boolean;
  private _selVoi: boolean;
  private _selUfo: boolean;
  private _selErg: boolean;

  constructor(
    selMobike: boolean,
    selMuving: boolean,
    selTier: boolean,
    selVoi: boolean,
    selUfo: boolean,
    selErg: boolean
  ) {
    this._selMobike = selMobike;
    this._selMuving = selMuving;
    this._selTier = selTier;
    this._selVoi = selVoi;
    this._selUfo = selUfo;
    this._selErg = selErg;
  }

  /**
   * Getter selMobike
   * @return {boolean}
   */
  public get selMobike(): boolean {
    return this._selMobike;
  }

  /**
   * Getter selMuving
   * @return {boolean}
   */
  public get selMuving(): boolean {
    return this._selMuving;
  }

  /**
   * Getter selTier
   * @return {boolean}
   */
  public get selTier(): boolean {
    return this._selTier;
  }

  /**
   * Getter selVoi
   * @return {boolean}
   */
  public get selVoi(): boolean {
    return this._selVoi;
  }

  /**
   * Getter selUfo
   * @return {boolean}
   */
  public get selUfo(): boolean {
    return this._selUfo;
  }

  /**
   * Getter selErg
   * @return {boolean}
   */
  public get selErg(): boolean {
    return this._selErg;
  }

  /**
   * Setter selMobike
   * @param {boolean} value
   */
  public set selMobike(value: boolean) {
    this._selMobike = value;
  }

  /**
   * Setter selMuving
   * @param {boolean} value
   */
  public set selMuving(value: boolean) {
    this._selMuving = value;
  }

  /**
   * Setter selTier
   * @param {boolean} value
   */
  public set selTier(value: boolean) {
    this._selTier = value;
  }

  /**
   * Setter selVoi
   * @param {boolean} value
   */
  public set selVoi(value: boolean) {
    this._selVoi = value;
  }

  /**
   * Setter selUfo
   * @param {boolean} value
   */
  public set selUfo(value: boolean) {
    this._selUfo = value;
  }

  /**
   * Setter selErg
   * @param {boolean} value
   */
  public set selErg(value: boolean) {
    this._selErg = value;
  }
}
