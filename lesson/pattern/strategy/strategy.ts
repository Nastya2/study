interface FlyBehavior {
    fly(): void;
}

class FlyWithWings implements FlyBehavior { // классы поведения
    public fly(): void {
        console.log('i am flying!');
    }
}

class FlyNotWay implements FlyBehavior {
    public fly(): void {
        console.log('i am not flying!');
    }
}

class FlyRocketPower implements FlyBehavior {
    public fly(): void {
        console.log('i fly RocketPower!');
    }
}


/** ----------------------------------------------------------------- */

interface QuackBehavior {
    quack(): void; 
}

class Quack implements QuackBehavior {
    public quack(): void {
        console.log('Quack!');
    }
}

class MuteQuack implements QuackBehavior {
    public quack(): void {
        console.log('silence');
    }
}

/** ----------------------------------------------------------------- */

class Duck {
    public flyBehavior!: FlyBehavior;
    public quackBehavior!: QuackBehavior;

    public setFlyBehavior(fb:FlyBehavior): void {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb:QuackBehavior): void {
        this.quackBehavior = qb;
    }
     
    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public swim(): void {
        console.log('i am swim yoo!');
    }
}

class MallardDuck extends Duck {
    
    public display(): void {
        console.log('i am really mallard duck');
    }
}

/** ----------------------------------------------------------------- */


class ModelDuck extends Duck {

    public display(): void {
        console.log('i am really mallard duck');
    }
}

/** ----------------------------------------------------------------- */

class MiniDuckSimulator {
    static main() {
       let model = new ModelDuck();
       model.setFlyBehavior(new FlyRocketPower());
       model.performFly();
    }
}

MiniDuckSimulator.main();


