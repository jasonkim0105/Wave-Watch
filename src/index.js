import {APIUtil} from "./APIUtil";
import {simplemaps_statemap_mapdata} from "./html5statemapv4.1/mapdata.js"
// locationInfo["temp"] = APIInfo.hours[0].airTemperature.noaa;
// console.log(locationInfo);

window.addEventListener('DOMContentLoaded', () => {
  const pickLocation = (e) => {
    e.preventDefault();
    // if (location = cowellBeach) {
      let locationInfo = {};
      let APIInfo = APIUtil.cowellBeach();
      console.log(APIInfo[0].airTemperature);
      // }

  }
  });
  console.log(simplemaps_statemap_mapdata.locations[0].description)