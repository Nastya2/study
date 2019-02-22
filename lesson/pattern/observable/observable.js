"use strict";

var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherData.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    };
    WeatherData.prototype.setParameters = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers();
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    return WeatherData;
}());
/**  ----------------------------------------------------------------------------------------  */
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData, la) {
        this.weatherData = weatherData;
        this.la = la;
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.weatherData.registerObserver(this);
        console.log(this.la);
    }
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log('Обновление данных', this, this.temperature);
    };
    return CurrentConditionsDisplay;
}());
var StatisticDisplay = /** @class */ (function () {
    function StatisticDisplay(weatherData) {
        this.weatherData = weatherData;
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.weatherData.registerObserver(this);
    }
    StatisticDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    StatisticDisplay.prototype.display = function () {
        console.log('Обновление данных', this, this.temperature);
    };
    return StatisticDisplay;
}());
var WeatherSration = /** @class */ (function () {
    function WeatherSration() {
    }
    WeatherSration.main = function () {
        var weatherData = new WeatherData();
        var currentConditionsDisplay = new CurrentConditionsDisplay(weatherData, 4);
        var statisticDisplay = new StatisticDisplay(weatherData);
        weatherData.setParameters(1, 1, 1);
        weatherData.setParameters(4, 4, 4);
    };
    return WeatherSration;
}());
//WeatherSration.main();

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}
  
function makeCaching(f) {
    //return f.bind(null,arg);
    let arg = [];
    let value = {};
    return function(newArg) {
      if(arg.indexOf(newArg) == -1) {
        arg.push(newArg);
        value['newArg'] = f.call(null,newArg);
      } else {
        return value['newArg'];
      }
      return value['newArg'];
    }   
}
  
f = makeCaching(f);
  
  var a, b;
  
  a = f(1);
  b = f(1);
  console.log( a == b ,a,b); // true (значение закешировано)
  
  b = f(2);
  console.log( a == b,a,b ); // false, другой аргумент => другое значение




