class APIUtil {
  static async cowellBeach() {
    const lat = 36.96;
    const lng = -122.02;
    const params = 'waveHeight,airTemperature,waterTemperature';

    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
      }
    }).then((response) => response.json()).then((jsonData) => {
      // console.log(jsonData);
      // console.log(jsonData.hours[0]);
      return jsonData.hours;
    });
  }
  // async function cowellBeach() {
  //   const lat = 36.96;
  //   const lng = -122.02;
  //   const params = 'waveHeight,airTemperature,waterTemperature';

  //   const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  //     headers: {
  //       'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
  //     }
  //   });
  //   if (!response.ok) {
  //     throw new Error("network response was not ok");
  //   }
  //   const data = await response.json();
  //   return data;
  // }
  // static async capitola() {
  //   const lat = 36.96;
  //   const lng = -122.02;
  //   const params = 'waveHeight,airTemperature,waterTemperature';

  //   fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  //     headers: {
  //       'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
  //     }
  //   }).then((response) => response.json()).then((jsonData) => {
  //     return jsonData;
  //   });
  // }

  // static async pleasurePoint() {
  //   const lat = 36.96;
  //   const lng = -122.02;
  //   const params = 'waveHeight,airTemperature,waterTemperature';

  //   fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  //     headers: {
  //       'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
  //     }
  //   }).then((response) => response.json()).then((jsonData) => {
  //     return jsonData;
  //   });
  // }


}

export {APIUtil};