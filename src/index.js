import {APIUtil} from "./APIUtil";
import {Location} from "./location";
import {compareLocation } from './scripts/compare.js'
import {loadLocationData, exitBtn, toggleCompare} from './scripts/load_location_data'
let APIInfo = APIUtil.cowellBeach();
let compareVar = false;

document.addEventListener('DOMContentLoaded', () => {




  document.body.addEventListener("click", function(e) {
    loadLocationData(e.target.className.baseVal);
    exitBtn(e);
    toggleCompare(e);
  })

  document.body.addEventListener("click", function(e) {
    compareLocation(e);
  })

});

export {compareVar}