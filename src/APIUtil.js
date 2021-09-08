class APIUtil {
  static async cowellBeach() {
    const lat = 36.96;
    const lng = -122.02;
    const params = 'waveHeight,airTemperature, waterTemperature';

    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
      }
    })
    if (!response.ok) {
      throw new Error("Data unable to be fetched");
    }
    const data = await response.json();
    return data;
  }

  static async pleasurePoint() {
    const lat = 36.96;
    const lng = -121.984;
    const params = 'waveHeight,airTemperature, waterTemperature';

    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
      }
    })
    if (!response.ok) {
      throw new Error("Data unable to be fetched");
    }
    const data = await response.json();
    return data;
  }

  static async capitola() {
    const lat = 36.975;
    const lng = -121.954;
    const params = 'waveHeight,airTemperature, waterTemperature';

    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'de1c098c-0c43-11ec-bc94-0242ac130002-de1c0a04-0c43-11ec-bc94-0242ac130002'
      }
    })
    if (!response.ok) {
      throw new Error("Data unable to be fetched");
    }
    const data = await response.json();
    return data;
  }
}

export {APIUtil};