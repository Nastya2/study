var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherData.prototype.removeObserver = function (observer) {
        var indexObserver = this.observers.indexOf(observer);
        if (indexObserver >= 0) {
            this.observers.splice(indexObserver, 1);
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
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.weatherData.registerObserver(this);
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
        var currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
        var statisticDisplay = new StatisticDisplay(weatherData);
        weatherData.setParameters(1, 2, 3);
        weatherData.setParameters(4, 44, 4);
    };
    return WeatherSration;
}());
WeatherSration.main();
