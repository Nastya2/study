
type modelType = {
    name: string,
    familyName: string
};

class Model {

    constructor(private data: modelType) {}

    get name(): string {
        return this.data.name;
    }

    set name(name) {
        this.data.name = name;
    }

    get familyName(): string {
        return this.data.familyName;
    }
}


class View {

    private _el!: HTMLDivElement;
    public nameElements!: NodeListOf<HTMLDivElement | HTMLInputElement>;

    constructor(private model: modelType) {}

    private renderContent():string {
        return `<span>Name:</span><span class="name">${this.model.name}</span>
                <span>${this.model.familyName}</span>`;
    }

    private get template():string {
        return `
            <div class="content">
                ${this.renderContent()}
             </div>
             <div>
                <label>Name:<input class="input-enter" value="${this.model.name}"></label>
                <label>Name:<input class="name" value="${this.model.name}"></label>
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
        this.nameElements  = this.element.querySelectorAll('.name');
        const input =  this.element.querySelector('.input-enter') as HTMLInputElement;

        input.addEventListener('input',()=> {
            this.onNameChanged(input.value);
        });
    }

    public onNameChanged(target: any):void {
        console.log(target);
    }

    public changeName(newName:string):void {
        Array.from(this.nameElements).forEach((node: HTMLInputElement | HTMLDivElement) => {
            if(node.nodeName === 'INPUT') {
                let nodeInput = node as HTMLInputElement;
                nodeInput.value = newName;
                return;
            }
           node.textContent = newName;
        })
    }

    static render(html: string): HTMLDivElement {
        const element: HTMLDivElement = document.createElement(`div`);
        element.innerHTML = html;
        return element;
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

        // Обновляем модель и представление везде,где нужно  при изменении представления в 1 месте
        this.view.onNameChanged = (name) => {
            this.model.name = name;
            this.view.changeName(this.model.name);
        }

        setTimeout(()=> {
            this.model.name = 'kdkdk';
        },5000);
    }

    public show() {
        const body = document.body;
        body.insertBefore(this.view.element,body.children[0]);
    } 
}

const controllerInstance = new Controller();
controllerInstance.show();
