
export class MapCal {

  private toRad(x: number): number { return x * Math.PI / 180; }

  /**
   * Calcular las coordenadas intermedias de dos coordenadas
   * 
   * @param coords1
   * @param coords2
   * 
   * @returns number[]
   */
  midCoords(coords1: number[], coords2: number[]): number[] {
    return [(coords1[0] + coords2[0]) / 2, (coords1[1] + coords2[1]) / 2];
  }

  /**
   * Calcular la distancia entre dos coordenadas
   *
   * @param coords1
   * @param coords2
   *
   * @returns number
   */
  distance2Points(coords1: number[], coords2: number[]): number {

    let lat1 = coords1[1];
    let lon1 = coords1[0];
    let lat2 = coords2[1];
    let lon2 = coords2[0];

    let R = 6371;
    let dLon = this.toRad(lon2 - lon1);
    lat1 = this.toRad(lat1);
    lat2 = this.toRad(lat2);
    let d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLon)) * R;
    return d;
  }

  /**
   * Calcular la coordenada mapeada
   *
   * @param variable
   * @param i_min
   * @param i_max
   * @param o_min
   * @param o_max
   *
   * @returns number 
   */
  mapping(variable: number, i_min: number, i_max: number, o_min: number, o_max: number): number {
    return (variable - i_min) * (o_max - o_min) / (i_max - i_min) + o_min;
  }

}
