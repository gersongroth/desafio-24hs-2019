
const SensorType = require('./sensor-type');

class Temperature extends SensorType {
  constructor(name) {
    super({
      name: name || 'Temperatura',
      min: -10,
      max: 50,
      maxVariation:  0.5,
      intervalInSeconds: 10,
    })
  }

}

module.exports = Temperature;