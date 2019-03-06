"use strict";
class Model {
    constructor(data) {
        this.data = data;
    }
    get name() {
        return this.data.name;
    }
    set name(name) {
        this.data.name = name;
    }
    get familyName() {
        return this.data.familyName;
    }
}
class View {
    constructor(model) {
        this.model = model;
    }
    renderContent() {
        return `<span>Name:</span><span class="name">${this.model.name}</span>
                <span>${this.model.familyName}</span>`;
    }
    get template() {
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
    get element() {
        if (!this._el) {
            this._el = View.render(this.template);
            this.bind();
        }
        return this._el;
    }
    bind() {
        this.nameElements = this.element.querySelectorAll('.name');
        const input = this.element.querySelector('.input-enter');
        input.addEventListener('input', () => {
            this.onNameChanged(input.value);
        });
    }
    onNameChanged(target) {
        console.log(target);
    }
    changeName(newName) {
        Array.from(this.nameElements).forEach((node) => {
            console.dir(node);
            if (node.nodeName === 'INPUT') {
                let nodee = node;
                nodee.value = newName;
                console.log(nodee);
                return;
            }
            node.textContent = newName;
        });
    }
    static render(html) {
        const element = document.createElement(`div`);
        element.innerHTML = html;
        return element;
    }
}
class Controller {
    constructor() {
        // Создаем модель
        this.model = new Model({
            name: 'Nastya',
            familyName: 'Dementeva'
        });
        // Создаем представление на основе модели
        this.view = new View(this.model);
        // Обновляем модель и представление при изменении представления
        this.view.onNameChanged = (name) => {
            this.model.name = name;
            this.view.changeName(this.model.name);
        };
        setTimeout(() => {
            this.model.name = 'kdkdk';
        }, 5000);
    }
    show() {
        const body = document.body;
        body.insertBefore(this.view.element, body.children[0]);
    }
}
const controllerInstance = new Controller();
controllerInstance.show();
