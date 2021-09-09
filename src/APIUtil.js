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
      return Promise.resolve(jsonData.hours[1])
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
      return Promise.resolve(jsonData.hours[2])
    });
  }
  static async wardell() {
    const lat = 37.09767;
    const lng = -122.277;
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
  static async davenport() {
    const lat = 37.01076;
    const lng = -122.19722;
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
  static async huntington() {
    const lat = 33.65956;
    const lng = -117.9988;
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
  static async blacksBeach() {
    const lat = 32.8907;
    const lng = -117.2535;
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

  static async malibu() {
    const lat = 34.0259;
    const lng = -118.7798;
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

  static async islaVista() {
    const lat = 34.4079;
    const lng = -119.8790;
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
  static async newport() {
    const lat = 33.6189;
    const lng = -117.9298;
    const params = 'waveHeight,airTemperature,waterTemperature';

    return fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
      }
    }).then((response) => response.json()).then((jsonData) => {
      // console.log(jsonData);
      // console.log(jsonData.hours[0]);
      return Promise.resolve(jsonData.hours[5])
    });
  }


}

export {APIUtil};