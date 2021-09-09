import {Map} from "./map";
import {APIUtil} from "./APIUtil";

class Location {
  constructor(locationInfo) {

    this.name = locationInfo.name;
    this.temp = locationInfo.temp;
    this.wave = locationInfo.wave;
    this.waterTemp = locationInfo.waterTemp;
  }


}

export {Location}