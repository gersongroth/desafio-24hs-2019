const axios = require('axios')
const crypto = require('crypto');
const Sensor = require('./model/sensor');
const SensorType = require('./model/sensor-type');
const Temperature = require('./model/temperature');
const Counter = require('./model/counter');


class Main {

  constructor(sensorType) {
    this.buildSensorTypes();

    const id = crypto.randomBytes(20).toString('hex');

    this.sensor = new Sensor({id, sensorType: this.sensorTypes[sensorType]});
  }

  buildSensorTypes() {
    this.sensorTypes = {};
    this.addTemperatureSensor();
    this.addCounterSensor();
  } 

  async start() {
    let sleepTime = 10000;
    while(true) {
      this.sendNotification();

      await this.sleep(this.sensor.getSleepTime()).catch((error) => console.log(error));
    }

    
  }

  sendNotification() {
    this.sensor.randomizeValues();

    let data = { ... this.sensor };
    data.sensorType = undefined;
    data.stop = undefined;
    data.errorCounter = undefined;

    axios.post('http://localhost:3000/sensor', data)
      .then((res) => {
        console.log(`statusCode: ${res.status}`)
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  addTemperatureSensor() {
    this.sensorTypes.temperatura = new Temperature();
  }

  addCounterSensor() {
    this.sensorTypes.contador = new Counter();
  }

  async sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
  }

}

let sensorType = 'contador';

if (process.argv.length >= 3) {
  sensorType = proces.argv[2];
}

const main = new Main(sensorType);
main.start();
