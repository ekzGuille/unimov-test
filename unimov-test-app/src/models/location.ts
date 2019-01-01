export class Location {
  private _ip: string;
  private _city: string;
  private _region: string;
  private _region_code: string;
  private _country: string;
  private _country_name: string;
  private _continent_code: string;
  private _in_eu: boolean;
  private _postal: string;
  private _latitude: number;
  private _longitude: number;
  private _timezone: string;
  private _utc_offset: string;
  private _country_calling_code: string;
  private _currency: string;
  private _languages: string;
  private _asn: string;
  private _org: string;


  constructor(ip: string, city: string, region: string, region_code: string, country: string, country_name: string, continent_code: string, in_eu: boolean, postal: string, latitude: number, longitude: number, timezone: string, utc_offset: string, country_calling_code: string, currency: string, languages: string, asn: string, org: string) {
    this._ip = ip;
    this._city = city;
    this._region = region;
    this._region_code = region_code;
    this._country = country;
    this._country_name = country_name;
    this._continent_code = continent_code;
    this._in_eu = in_eu;
    this._postal = postal;
    this._latitude = latitude;
    this._longitude = longitude;
    this._timezone = timezone;
    this._utc_offset = utc_offset;
    this._country_calling_code = country_calling_code;
    this._currency = currency;
    this._languages = languages;
    this._asn = asn;
    this._org = org;
  }

  /**
   * Getter ip
   * @return {string}
   */
  public get ip(): string {
    return this._ip;
  }

  /**
   * Getter city
   * @return {string}
   */
  public get city(): string {
    return this._city;
  }

  /**
   * Getter region
   * @return {string}
   */
  public get region(): string {
    return this._region;
  }

  /**
   * Getter region_code
   * @return {string}
   */
  public get region_code(): string {
    return this._region_code;
  }

  /**
   * Getter country
   * @return {string}
   */
  public get country(): string {
    return this._country;
  }

  /**
   * Getter country_name
   * @return {string}
   */
  public get country_name(): string {
    return this._country_name;
  }

  /**
   * Getter continent_code
   * @return {string}
   */
  public get continent_code(): string {
    return this._continent_code;
  }

  /**
   * Getter in_eu
   * @return {boolean}
   */
  public get in_eu(): boolean {
    return this._in_eu;
  }

  /**
   * Getter postal
   * @return {string}
   */
  public get postal(): string {
    return this._postal;
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
   * Getter timezone
   * @return {string}
   */
  public get timezone(): string {
    return this._timezone;
  }

  /**
   * Getter utc_offset
   * @return {string}
   */
  public get utc_offset(): string {
    return this._utc_offset;
  }

  /**
   * Getter country_calling_code
   * @return {string}
   */
  public get country_calling_code(): string {
    return this._country_calling_code;
  }

  /**
   * Getter currency
   * @return {string}
   */
  public get currency(): string {
    return this._currency;
  }

  /**
   * Getter languages
   * @return {string}
   */
  public get languages(): string {
    return this._languages;
  }

  /**
   * Getter asn
   * @return {string}
   */
  public get asn(): string {
    return this._asn;
  }

  /**
   * Getter org
   * @return {string}
   */
  public get org(): string {
    return this._org;
  }

  /**
   * Setter ip
   * @param {string} value
   */
  public set ip(value: string) {
    this._ip = value;
  }

  /**
   * Setter city
   * @param {string} value
   */
  public set city(value: string) {
    this._city = value;
  }

  /**
   * Setter region
   * @param {string} value
   */
  public set region(value: string) {
    this._region = value;
  }

  /**
   * Setter region_code
   * @param {string} value
   */
  public set region_code(value: string) {
    this._region_code = value;
  }

  /**
   * Setter country
   * @param {string} value
   */
  public set country(value: string) {
    this._country = value;
  }

  /**
   * Setter country_name
   * @param {string} value
   */
  public set country_name(value: string) {
    this._country_name = value;
  }

  /**
   * Setter continent_code
   * @param {string} value
   */
  public set continent_code(value: string) {
    this._continent_code = value;
  }

  /**
   * Setter in_eu
   * @param {boolean} value
   */
  public set in_eu(value: boolean) {
    this._in_eu = value;
  }

  /**
   * Setter postal
   * @param {string} value
   */
  public set postal(value: string) {
    this._postal = value;
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
   * Setter timezone
   * @param {string} value
   */
  public set timezone(value: string) {
    this._timezone = value;
  }

  /**
   * Setter utc_offset
   * @param {string} value
   */
  public set utc_offset(value: string) {
    this._utc_offset = value;
  }

  /**
   * Setter country_calling_code
   * @param {string} value
   */
  public set country_calling_code(value: string) {
    this._country_calling_code = value;
  }

  /**
   * Setter currency
   * @param {string} value
   */
  public set currency(value: string) {
    this._currency = value;
  }

  /**
   * Setter languages
   * @param {string} value
   */
  public set languages(value: string) {
    this._languages = value;
  }

  /**
   * Setter asn
   * @param {string} value
   */
  public set asn(value: string) {
    this._asn = value;
  }

  /**
   * Setter org
   * @param {string} value
   */
  public set org(value: string) {
    this._org = value;
  }

}
