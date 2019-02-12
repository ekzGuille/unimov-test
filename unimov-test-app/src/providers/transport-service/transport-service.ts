import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MuvingResponse } from '../../models/muving/muvingResponse';
import { Observable } from 'rxjs/Observable';
import { TierResponse } from '../../models/tier/tierResponse';
import { VoiResponse } from '../../models/voi/voiResponse';
import { MobikeResponse } from '../../models/mobike/mobikeResponse';
import { UfoResponse } from '../../models/ufo/ufoResponse';
import { ErgResponse } from '../../models/erg/ergResponse';

@Injectable()
export class TransportServiceProvider {
  private MUVING_URL = 'https://nube000.muving.com/RestAPI/RestServices/vehicles/in_rectangle';
  // private lime_url = 'https://web-production.lime.bike/api/rider';
  private MOBIKE_API = 'http://app.mobike.com/api/nearby/v4/nearbyBikeInfo';
  private TIER_URL = 'https://tier.frontend.fleetbird.eu/api/prod/v1.06/map/cars';
  private VOI_URL = 'https://api.voiapp.io/v1/vehicle/status/ready';
  private ERG_URL = 'http://gbike-api.gonbike.com.cn/bikes'
  private UFO_URL = 'https://ufo.frontend.fleetbird.eu/api/prod/v1.06/map/cars'

  constructor(public http: HttpClient) { }

  getMuving(coordsRectangle: number[][]): Observable<MuvingResponse> {
    const lat1 = coordsRectangle[0][0];
    const lon1 = coordsRectangle[0][1];
    const lat2 = coordsRectangle[1][0];
    const lon2 = coordsRectangle[1][1];

    const params = `?lat1=${lat1}&lon1=${lon1}&lat2=${lat2}&lon2=${lon2}`;
    return this.http.get<MuvingResponse>(this.MUVING_URL + params);
  }

  getMobike(coordsLocation: number[]): Observable<MobikeResponse> {
    let lat = coordsLocation[0];
    let lon = coordsLocation[1];

    const body = {
      latitude : lat,
      longitude : lon
    };
    const options = {
      headers: new HttpHeaders({
        "platform": "1",
        // "User-Agent": "Mozilla/63.0",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };
    return this.http.post<MobikeResponse>(this.MOBIKE_API,body,options);

  }

  getTier(coordsRectangle: number[][]): Observable<TierResponse> {
    const lat1 = coordsRectangle[0][0];
    const lon1 = coordsRectangle[0][1];
    const lat2 = coordsRectangle[1][0];
    const lon2 = coordsRectangle[1][1];

    const params = `?lat1=${lat1}&lon1=${lon1}&lat2=${lat2}&lon2=${lon2}`;
    return this.http.get<TierResponse>(this.TIER_URL + params);
  }

  getVoi(coordsLocation: number[]): Observable<VoiResponse> {
    let lat = coordsLocation[0];
    let lon = coordsLocation[1];

    const params = `?la=${lat}&lo=${lon}`;
    return this.http.get<VoiResponse>(this.VOI_URL + params);
  }

  getErg(coordsLocation: number[]): Observable<ErgResponse> {
    let lat = coordsLocation[0];
    let lon = coordsLocation[1];

    const params = `?latitude=${lat}&longitude=${lon}&agent=E-cycling&kind=2`;
    return this.http.get<ErgResponse>(this.ERG_URL + params);
  }

  getUfo(coordsRectangle: number[][]): Observable<UfoResponse> {
    const lat1 = coordsRectangle[0][0];
    const lon1 = coordsRectangle[0][1];
    const lat2 = coordsRectangle[1][0];
    const lon2 = coordsRectangle[1][1];

    const params = `?lat1=${lat1}&lon1=${lon1}&lat2=${lat2}&lon2=${lon2}`;
    return this.http.get<UfoResponse>(this.UFO_URL + params);
  }

}
