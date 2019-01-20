import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MuvingResponse } from '../../models/muving/muvingResponse';
import { Observable } from 'rxjs/Observable';
import { TierResponse } from '../../models/tier/tierResponse';
import { VoiResponse } from '../../models/voi/voiResponse';
import { MobikeResponse } from '../../models/mobike/mobikeResponse';

@Injectable()
export class TransportServiceProvider {
  private muving_url = 'https://nube000.muving.com/RestAPI/RestServices/vehicles/in_rectangle';
  // private lime_url = 'https://web-production.lime.bike/api/rider';
  private mobike_api = 'http://app.mobike.com/api/nearby/v4/nearbyBikeInfo';
  private tier_url = 'https://tier.frontend.fleetbird.eu/api/prod/v1.06/map/cars';
  private voi_url = 'https://api.voiapp.io/v1/vehicle/status/ready';

  constructor(public http: HttpClient) { }

  getMuving(coordsRectangle: number[][]): Observable<MuvingResponse> {
    const lat1 = coordsRectangle[0][0];
    const lon1 = coordsRectangle[0][1];
    const lat2 = coordsRectangle[1][0];
    const lon2 = coordsRectangle[1][1];

    const params = `?lat1=${lat1}&lon1=${lon1}&lat2=${lat2}&lon2=${lon2}`;
    return this.http.get<MuvingResponse>(this.muving_url + params);
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
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/63.0"
      })
    };

    return this.http.post<MobikeResponse>(this.mobike_api,body,options);

  }

  getTier(coordsRectangle: number[][]): Observable<TierResponse> {
    const lat1 = coordsRectangle[0][0];
    const lon1 = coordsRectangle[0][1];
    const lat2 = coordsRectangle[1][0];
    const lon2 = coordsRectangle[1][1];

    const params = `?lat1=${lat1}&lon1=${lon1}&lat2=${lat2}&lon2=${lon2}`;
    return this.http.get<TierResponse>(this.tier_url + params);
  }

  getVoi(coordsLocation: number[]): Observable<VoiResponse> {
    let lat = coordsLocation[0];
    let lon = coordsLocation[1];

    const params = `?la=${lat}&lo=${lon}`;
    return this.http.get<VoiResponse>(this.voi_url + params);
  }

}
