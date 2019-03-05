
type modelType = {
    name: string,
    familyName: string
}

class Model {

    private listeners = new Set();

    constructor(private data: modelType) {}

    public subscribe(listener:any): void {
        this.listeners.add(listener);
        console.log(this.listeners,'listeners-subscribe-model');
    }

    public notifyAll(): void {
        for(const listener of this.listeners) {
            console.log(this,'notify',listener);
            listener(this);
        }
    }

    get name(): string {
        return this.data.name;
    }

    set name(name) {
        this.data.name = name;
        this.notifyAll();
    }

    get familyName(): string {
        return this.data.familyName;
    }
}


class View {

    private _el!: HTMLDivElement;
    public content!: HTMLElement;

    constructor(private model: modelType) {}

    private renderContent():string {
        return `<span>Name:</span><span>${this.model.name}</span>
                <span>${this.model.familyName}</span>`;
    }

    private get template():string {
        return `
            <div class="content">
                ${this.renderContent()}
             </div>
             <div>
                <label>Name:<input value="${this.model.name}"></label>
            </div>
             `;
    }

    public get element() {
        if(!this._el) {
            this._el = View.render(this.template);
            this.bind();
        }
        return this._el;
    }

    private bind(): void {
        this.content  = this.element.querySelector('.content') as HTMLElement;
        const input =  this.element.querySelector('input') as HTMLInputElement;

        input.addEventListener('input',()=> {
            this.onNameChanged(input.value);
        });
    }

    public onNameChanged(target: any) {
        console.log(target);
    }

    static render(html: string): HTMLDivElement {
        const element: HTMLDivElement = document.createElement(`div`);
        element.innerHTML = html;
        return element;
    }

    public update(): void {
        this.content.innerHTML = this.renderContent();
    }
}


class Controller {

    private model: Model;
    private view: View;

    constructor() {

        // Создаем модель
        this.model = new Model({
            name: 'Nastya',
            familyName: 'Dementeva'
        });

        // Создаем представление на основе модели
        this.view = new View(this.model);

        // Обновляем представлени при изменении модели
       this.model.subscribe(()=> this.view.update());

        // Обновляем модель при изменении представления
        this.view.onNameChanged = (name) => this.model.name = name;

        setTimeout(()=> {
            this.model.name = 'kdkdk';
        },5000);
    }

    public show() {
        const body = document.body;
        body.insertBefore(this.view.element,body.children[0]);
    } 
}

const controller = new Controller();
controller.show();
