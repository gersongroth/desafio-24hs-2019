const SensorType = require('./sensor-type');

class Sensor {
  constructor({
    id,
    sensorType,
  }) {
    this.id = id;
    this.sensorType = sensorType;
    this.type = sensorType.name;
    this.stop = false;
  }

  randomizeValues() {
    this.timestamp = new Date();
    this.value = this.sensorType.nextValue(this.value);
    this.defect =this.sensorType.hasDefect(this.value);
    
    if(this.stop) {
      this.errorCounter--;
    }
    if(this.errorCounter > 0) {
      this.value = undefined;
      return;
    }
    this.errorCode = this.sensorType.getErrorCode();

    if(this.errorCode) {
      this.stop = true;
      this.value = undefined;
      this.errorCounter = Math.random()*60;
    }  
  }
  
  getSleepTime() {
    return this.sensorType.getSleepTime();
  }
}

module.exports = Sensor;