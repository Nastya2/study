export interface Subject {
    registerObserver(observer:Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}
  
export interface Observer {
    update(a:number,b:number,c:number): void;
}
  
export interface DisplayElement {
    display(): void;
}

class WeatherData implements Subject {
    private observers: Observer[] = [];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
    }

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        let index = this.observers.indexOf(observer);
        if(index >= 0) {
            this.observers.splice(index,1);
        }
    }

    public setParameters(temperature,humidity,pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.notifyObservers();
    }

    public notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature,this.humidity,this.pressure);
        }
    }
}

/**  ----------------------------------------------------------------------------------------  */

class CurrentConditionsDisplay implements Observer,DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    constructor(private weatherData: Subject) {
        this.weatherData.registerObserver(this);
    }

    update(temperature: number ,humidity: number,pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    display() :void {
        console.log('Обновление данных',this,this.temperature);
    }
}

class StatisticDisplay implements Observer,DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    constructor(private weatherData: Subject) {
        this.weatherData.registerObserver(this);
    }

    update(temperature: number ,humidity: number,pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    display() :void {
        console.log('Обновление данных',this,this.temperature);
    }
}

class WeatherSration {
    public static main(): void {
      let weatherData = new WeatherData();
      let currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
      let statisticDisplay = new StatisticDisplay(weatherData);

      weatherData.setParameters(1,1,1);

      weatherData.setParameters(4,4,4);
    }
}

//WeatherSration.main();







