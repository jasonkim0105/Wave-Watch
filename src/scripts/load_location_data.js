import {APIUtil} from "../APIUtil";
import {compareVar} from '../index';
import {isCompare2} from './compare'



let isCompare;

function loadLocationData(location)  {


  if (isCompare === true) {
    return null;
  } else {

    let locationInfo = {};
    let compareLocationInfo = {};
    switch (location) {
      case "sm_location_0":
        let APIInfo = APIUtil.cowellBeach();
        APIUtil.cowellBeach().then(data => {
        console.log("cowell " ,data)
        locationInfo["name"] = "Cowell Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;


        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
        });
        break;
      case "sm_location_1":
        APIInfo = APIUtil.pleasurePoint();
        APIUtil.pleasurePoint().then(data => {
        console.log("pleasure point " ,data)
        locationInfo["name"] = "Pleasure Point";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
        });
        break;
      case "sm_location_2":
        APIInfo = APIUtil.capitola();
        APIUtil.capitola().then(data => {
        console.log("capitola " ,data)
        locationInfo["name"] = "Capitola";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
        break;
      case "sm_location_3":
        APIInfo = APIUtil.wardell();
        APIUtil.wardell().then(data => {
        console.log("wardell " ,data)
        locationInfo["name"] = "Wardell Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
        break;
      case "sm_location_4":
        APIInfo = APIUtil.davenport();
        APIUtil.davenport().then(data => {
        console.log("davenport " ,data)
        locationInfo["name"] = "Davenport Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
        break;
      case "sm_location_5":
        APIInfo = APIUtil.huntington();
        APIUtil.huntington().then(data => {
        console.log("huntington " ,data)
        locationInfo["name"] = "Huntington Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
        break;
      case "sm_location_6":
        APIInfo = APIUtil.blacksBeach();
        APIUtil.blacksBeach().then(data => {
        console.log("Blacks Beach " ,data)
        locationInfo["name"] = "Black's Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
        break;
      case "sm_location_7":
        APIInfo = APIUtil.malibu();
        APIUtil.malibu().then(data => {
        console.log("Malibu Beach " ,data)
        locationInfo["name"] = "Malibu Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
        break;
      case "sm_location_8":
        APIInfo = APIUtil.islaVista();
        APIUtil.islaVista().then(data => {
        console.log("Isla Vista Beach " ,data)
        locationInfo["name"] = "Isla Vista Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
        break;
      case "sm_location_9":
        APIInfo = APIUtil.newport();
        APIUtil.newport().then(data => {
        console.log("Newport Beach " ,data)
        locationInfo["name"] = "Newport Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector(".name").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector(".weather").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector(".tide-level").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector(".water-temp").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
        break;
      case "compare":
        break;
      case "stop":
      default:
        console.log('hi')
        break;
    }
  }

}

function exitBtn(e) {
  const name = document.getElementById('hiddenname');
  const weather2 = document.getElementById('weather2');
  const tideLevel2 = document.getElementById('tide-level2');
  const waterTemp2 = document.getElementById('water-temp2');
  const stopComparison = document.getElementById('stop');

  if (e.target.className === "exit") {
    document.querySelector(".name").innerHTML = `Name: `;

    document.querySelector(".weather").innerHTML = `Weather: `;

    document.querySelector(".tide-level").innerHTML = `Tide Level: `;

    document.querySelector(".water-temp").innerHTML = `Water Temperature: `;
    if (document.getElementById('stop')) {
      name.style.display = 'none'
      weather2.style.display = 'none'
      tideLevel2.style.display = 'none'
      waterTemp2.style.display = 'none'
      stopComparison.style.display = 'none'
      isCompare = false;

    }
    isCompare = false;
  }

  if (e.target.id === "stop") {
    isCompare = false;
  }
}

function toggleCompare(e) {
  if (e.target.className === "compare" ) {
    isCompare = true;
  }
}

export {loadLocationData, exitBtn, toggleCompare, isCompare}