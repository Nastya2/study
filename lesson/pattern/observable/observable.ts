interface ISubject {
    registerObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(): void;
}

interface IObserver {
    update(a: number, b: number, c: number): void;
}

interface IDisplayElement {
    display(): void;
}

class WeatherData implements ISubject {
    private observers: IObserver[] = [];
    private temperature!: number;
    private humidity!: number;
    private pressure!: number;


    public registerObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: IObserver): void {
        const indexObserver: number = this.observers.indexOf(observer);
        if (indexObserver >= 0) {
            this.observers.splice(indexObserver, 1);
        }
    }

    public setParameters(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.notifyObservers();
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }
}

/**  ----------------------------------------------------------------------------------------  */

class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    public constructor(private weatherData: ISubject) {
        this.weatherData.registerObserver(this);
    }

    public update(temperature: number , humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    public display(): void {
        console.log('Обновление данных', this, this.temperature, this.humidity, this.pressure);
    }
}

class StatisticDisplay implements IObserver, IDisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    public constructor(private weatherData: ISubject) {
        this.weatherData.registerObserver(this);
    }

    public update(temperature: number , humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    public display(): void {
        console.log('Обновление данных', this, this.temperature, this.humidity, this.pressure);
    }
}

class WeatherSration {
    public static main(): void {
      const weatherData: WeatherData = new WeatherData();
      new CurrentConditionsDisplay(weatherData);
      new StatisticDisplay(weatherData);

      weatherData.setParameters(1, 2, 3);

      weatherData.setParameters(4, 44, 4);
    }
}

WeatherSration.main();



