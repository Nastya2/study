var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('i am flying!');
    };
    return FlyWithWings;
}());
var FlyNotWay = /** @class */ (function () {
    function FlyNotWay() {
    }
    FlyNotWay.prototype.fly = function () {
        console.log('i am not flying!');
    };
    return FlyNotWay;
}());
var FlyRocketPower = /** @class */ (function () {
    function FlyRocketPower() {
    }
    FlyRocketPower.prototype.fly = function () {
        console.log('i fly RocketPower!');
    };
    return FlyRocketPower;
}());
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log('Quack!');
    };
    return Quack;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log('silence');
    };
    return MuteQuack;
}());
/** ----------------------------------------------------------------- */
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehavior = fb;
        //this.flyBehavior.fly();
    };
    Duck.prototype.setQuackBehavior = function (qb) {
        this.quackBehavior = qb;
        //this.quackBehavior.quack();
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        console.log('i am swim yoo!');
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.quackBehavior = new Quack();
        _this.flyBehavior = new FlyNotWay();
        return _this;
    }
    // public setFlyBehavior() {
    //     super.setFlyBehavior(new FlyWithWings());
    // }
    MallardDuck.prototype.display = function () {
        console.log('i am really mallard duck');
    };
    return MallardDuck;
}(Duck));
/** ----------------------------------------------------------------- */
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //quackBehavior =  new Quack(); 
    //flyBehavior = new FlyWithWings();
    ModelDuck.prototype.display = function () {
        console.log('i am really mallard duck');
    };
    return ModelDuck;
}(Duck));
/** ----------------------------------------------------------------- */
var MiniDuckSimulator = /** @class */ (function () {
    function MiniDuckSimulator() {
    }
    MiniDuckSimulator.main = function () {
        //let mallardDuck = new MallardDuck();
        //mallardDuck.performFly();
        var model = new ModelDuck();
        model.setFlyBehavior(new FlyRocketPower());
        model.performFly();
    };
    return MiniDuckSimulator;
}());
MiniDuckSimulator.main();
