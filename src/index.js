import {APIUtil} from "./APIUtil";
import {Location} from "./location";
// import "./html5statemapv4.1/statemap";
// locationInfo["temp"] = APIInfo.hours[0].airTemperature.noaa;
// console.log(locationInfo);
let APIInfo = APIUtil.cowellBeach();
// console.log(APIInfo);
// console.log(APIInfo[0].airTemperature);


document.addEventListener('DOMContentLoaded', () => {

  // console.log("no timeout", locationInfo)

  // setTimeout(() => console.log("timeout",locationInfo), 5000);
  // const map = document.getElementById("map");
  // const pickLocation = (e) => {
  //   e.preventDefault();
  //   if (loading === true) {
  //     console.log(cowellBeachInt);
  //     const cowellBeachInt = new Location(locationInfo);
  //     console.log(cowellBeachInt);
  //   }
  // }

  const loadLocationData = (location) => {
    if (location === "sm_location_0") {
      let locationInfo = {};
      let APIInfo = APIUtil.cowellBeach();
      APIUtil.cowellBeach().then(data => {
        console.log("cowell " ,data)
        locationInfo["name"] = "Cowell Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} ft.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_1") {
      let locationInfo = {};
      let APIInfo = APIUtil.pleasurePoint();
      APIUtil.pleasurePoint().then(data => {
        console.log("pleasure point " ,data)
        locationInfo["name"] = "Pleasure Point";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} ft.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_2") {
      let locationInfo = {};
      let APIInfo = APIUtil.capitola();
      APIUtil.capitola().then(data => {
        console.log("capitola " ,data)
        locationInfo["name"] = "Capitola";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} ft.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_3") {
      let locationInfo = {};
      let APIInfo = APIUtil.wardell();
      APIUtil.wardell().then(data => {
        console.log("wardell " ,data)
        locationInfo["name"] = "Wardell Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} ft.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_4") {
      let locationInfo = {};
      let APIInfo = APIUtil.davenport();
      APIUtil.davenport().then(data => {
        console.log("davenport " ,data)
        locationInfo["name"] = "Davenport Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} ft.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    }

  }

  document.body.addEventListener("click", function(e) {
    loadLocationData(e.target.className.baseVal)
  })

});