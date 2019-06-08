
class SensorType {
  constructor({
    name,
    min,
    max,
    maxVariation,
    intervalInSeconds,
  }) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.maxVariation = maxVariation;
    this.intervalInSeconds = intervalInSeconds;
  }

  nextValue(value) {
    if (value === undefined) {
      return Math.random() * (this.max - this.min + 1) + this.min;
    }

    return value + ((Math.random() * this.maxVariation) - (this.maxVariation / 2));
  }

  getSleepTime() {
    return this.intervalInSeconds * 1000
  }

  getErrorCode() {
    return undefined;
  }
  
  hasDefect() {
    return false;
  }
}

module.exports = SensorType;