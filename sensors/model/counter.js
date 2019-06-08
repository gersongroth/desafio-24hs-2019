const crypto = require('crypto');
const SensorType = require('./sensor-type');

class Counter extends SensorType {
  constructor(name) {
    super({
      name: name || crypto.randomBytes(5).toString('hex'),
      maxVariation:  0.2,
      intervalInSeconds: 60,
    })
  }

  getSleepTime() {
    let sleep = this.intervalInSeconds * 1000;
    sleep += Math.random() * 1000;
    return sleep;
  }

  nextValue() {
    if (Math.random() > (0.94 + (Math.random() * this.maxVariation - (this.maxVariation / 2)))) { // POG
      return 0;
    }

    return 1;
  }

  getErrorCode() {
    if(Math.random() > 0.95) {
      return Math.floor(Math.random() * 17 + 101); // 17 codigos de erro
    }

    return undefined;
  }

  hasDefect(value) {
    return value == 0;
  }

}

module.exports = Counter;