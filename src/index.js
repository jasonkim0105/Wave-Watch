import {APIUtil} from "./APIUtil";
import {Location} from "./location";
// import "./html5statemapv4.1/statemap";
// locationInfo["temp"] = APIInfo.hours[0].airTemperature.noaa;
// console.log(locationInfo);
// console.log(APIInfo);
// console.log(APIInfo[0].airTemperature);


document.addEventListener('DOMContentLoaded', () => {

  // console.log("no timeout", locationInfo)

  // setTimeout(() => console.log("timeout",locationInfo), 5000);
  const map = document.getElementById("map");

  const pickLocation = (e) => {
    e.preventDefault();
    if (loading === true) {
      console.log(cowellBeachInt);
      const cowellBeachInt = new Location(locationInfo);
      console.log(cowellBeachInt);
    }
  }

  const loadLocationData = (location) => {
    if (location === "sm_location_0") {
      let locationInfo = {};
      let APIInfo = APIUtil.cowellBeach();
      APIUtil.cowellBeach().then(data => {
        console.log("cowell " ,data)
        locationInfo["name"] = "Cowell Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["wave"] = data.waterTemperature.meto;
        locationInfo["waterTemp"] = data.waveHeight.icon;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}`
      });
    } else if (location === "sm_location_1") {
      let locationInfo = {};
      let APIInfo = APIUtil.pleasurePoint();
      APIUtil.pleasurePoint().then(data => {
        console.log("pleasure point " ,data)
        locationInfo["name"] = "Pleasure Point";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["wave"] = data.waterTemperature.meto;
        locationInfo["waterTemp"] = data.waveHeight.icon;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}`
      });
    } else if (location === "sm_location_2") {
      let locationInfo = {};
      let APIInfo = APIUtil.capitola();
      APIUtil.capitola().then(data => {
        console.log("capitola " ,data)
        locationInfo["name"] = "Pleasure Point";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["wave"] = data.waterTemperature.meto;
        locationInfo["waterTemp"] = data.waveHeight.icon;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}`
      });
    }

  }


  document.body.addEventListener("click", function(e) {
    loadLocationData(e.target.className.baseVal)
  })

});