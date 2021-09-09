class APIUtil {
  static async cowellBeach() {
    const lat = 36.96;
    const lng = -122.02;
    const params = 'waveHeight,airTemperature,waterTemperature';

    return fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
      }
    }).then((response) => response.json()).then((jsonData) => {
      // console.log(jsonData);
      // console.log(jsonData.hours[0]);
      return Promise.resolve(jsonData.hours[0])
    });
  }
  static async pleasurePoint() {
    const lat = 36.96;
    const lng = -121.984;
    const params = 'waveHeight,airTemperature,waterTemperature';

    return fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
      }
    }).then((response) => response.json()).then((jsonData) => {
      // console.log(jsonData);
      // console.log(jsonData.hours[0]);
      return Promise.resolve(jsonData.hours[0])
    });
  }
  static async capitola() {
    const lat = 36.975;
    const lng = -121.954;
    const params = 'waveHeight,airTemperature,waterTemperature';

    return fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
      }
    }).then((response) => response.json()).then((jsonData) => {
      // console.log(jsonData);
      // console.log(jsonData.hours[0]);
      return Promise.resolve(jsonData.hours[0])
    });
  }


}

export {APIUtil};