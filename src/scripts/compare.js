import {APIUtil} from "../APIUtil";
import {loadLocation} from './load_location_data';
import {compareVar} from '../index';
import {isCompare} from './load_location_data';

let isCompare2 = true;

const loadComparisonLocationData = (location) => {
  let locationInfo = {};
  if (location === "sm_location_0") {
    let APIInfo = APIUtil.cowellBeach();
    // if (document.querySelector('.name').innerHTML !==  'Name: ') {

    // }
    APIUtil.cowellBeach().then(data => {
      console.log("cowell " ,data)
      locationInfo["name"] = "Cowell Beach";
      locationInfo["temp"] = data.airTemperature.noaa;
      locationInfo["waterTemp"] = data.waterTemperature.meto;
      locationInfo["wave"] = data.waveHeight.icon;

      document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

      document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

      document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

      document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
    });
  } else if (location === "sm_location_1") {
      // let locationInfo = {};
      let APIInfo = APIUtil.pleasurePoint();
      APIUtil.pleasurePoint().then(data => {
        console.log("pleasure point " ,data)
        locationInfo["name"] = "Pleasure Point";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_2") {
      // let locationInfo = {};
      let APIInfo = APIUtil.capitola();
      APIUtil.capitola().then(data => {
        console.log("capitola " ,data)
        locationInfo["name"] = "Capitola";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_3") {
      // let locationInfo = {};
      let APIInfo = APIUtil.wardell();
      APIUtil.wardell().then(data => {
        console.log("wardell " ,data)
        locationInfo["name"] = "Wardell Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_4") {
      // let locationInfo = {};
      let APIInfo = APIUtil.davenport();
      APIUtil.davenport().then(data => {
        console.log("davenport " ,data)
        locationInfo["name"] = "Davenport Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_5") {
      // let locationInfo = {};
      let APIInfo = APIUtil.huntington();
      APIUtil.huntington().then(data => {
        console.log("huntington " ,data)
        locationInfo["name"] = "Huntington Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_6") {
      // let locationInfo = {};
      let APIInfo = APIUtil.blacksBeach();
      APIUtil.blacksBeach().then(data => {
        console.log("Blacks Beach " ,data)
        locationInfo["name"] = "Black's Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_7") {
      // let locationInfo = {};
      let APIInfo = APIUtil.malibu();
      APIUtil.malibu().then(data => {
        console.log("Malibu Beach " ,data)
        locationInfo["name"] = "Malibu Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_8") {
      // let locationInfo = {};
      let APIInfo = APIUtil.islaVista();
      APIUtil.islaVista().then(data => {
        console.log("Isla Vista Beach " ,data)
        locationInfo["name"] = "Isla Vista Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    } else if (location === "sm_location_9") {
      // let locationInfo = {};
      let APIInfo = APIUtil.newport();
      APIUtil.newport().then(data => {
        console.log("Newport Beach " ,data)
        locationInfo["name"] = "Newport Beach";
        locationInfo["temp"] = data.airTemperature.noaa;
        locationInfo["waterTemp"] = data.waterTemperature.meto;
        locationInfo["wave"] = data.waveHeight.icon;

        document.querySelector("#hiddenname").innerHTML = `Name: ${locationInfo.name}`;

        document.querySelector("#weather2").innerHTML = `Weather: ${locationInfo.temp}°C`;

        document.querySelector("#tide-level2").innerHTML = `Tide Level: ${locationInfo.wave} m.`;

        document.querySelector("#water-temp2").innerHTML = `Water Temperature: ${locationInfo.waterTemp} °C`;
      });
    }

}

async function compareLocation(e) {
  const name2 = document.getElementById('hiddenname');
  const weather2 = document.getElementById('weather2');
  const tideLevel2 = document.getElementById('tide-level2');
  const waterTemp2 = document.getElementById('water-temp2');
  const stopComparison = document.getElementById('stop');

  const name = document.getElementById('name');
  const weather1 = document.getElementById('weather');
  const tideLevel = document.getElementById('tide-level');
  const waterTemp = document.getElementById('water-temp');


  if (e.target.className === 'compare') {
    name2.style.display = 'block'
    weather2.style.display = 'block'
    tideLevel2.style.display = 'block'
    waterTemp2.style.display = 'block'
    stopComparison.style.display = 'block'

    // isCompare = true;
  }

  if (e.target.id === 'stop') {
    document.querySelector("#hiddenname").innerHTML = `Name: `;
    document.querySelector("#weather2").innerHTML = `Weather: `;
    document.querySelector("#tide-level2").innerHTML = `Tide Level: `;
    document.querySelector("#water-temp2").innerHTML = `Water Temperature: `;

    name2.style.display = 'none'
    weather2.style.display = 'none'
    tideLevel2.style.display = 'none'
    waterTemp2.style.display = 'none'
    stopComparison.style.display = 'none'

    // isCompare2 = false;
  }
  loadComparisonLocationData(e.target.className.baseVal);
}

export {compareLocation, isCompare2};
