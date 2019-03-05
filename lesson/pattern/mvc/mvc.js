"use strict";
class Model {
    constructor(data) {
        this.data = data;
        this.listeners = new Set();
    }
    subscribe(listener) {
        this.listeners.add(listener);
        console.log(this.listeners, 'listeners-subscribe-model');
    }
    notifyAll() {
        for (const listener of this.listeners) {
            console.log(this, 'notify', listener);
            listener(this);
        }
    }
    get name() {
        return this.data.name;
    }
    set name(name) {
        this.data.name = name;
        this.notifyAll();
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
        return `<span>Name:</span><span>${this.model.name}</span>
                <span>${this.model.familyName}</span>`;
    }
    get template() {
        return `
            <div class="content">
                ${this.renderContent()}
             </div>
             <div>
                <label>Name:<input value="${this.model.name}"></label>
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
        this.content = this.element.querySelector('.content');
        const input = this.element.querySelector('input');
        input.addEventListener('input', () => {
            this.onNameChanged(input.value);
        });
    }
    onNameChanged(target) {
        console.log(target);
    }
    static render(html) {
        const element = document.createElement(`div`);
        element.innerHTML = html;
        return element;
    }
    update() {
        this.content.innerHTML = this.renderContent();
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
        // Обновляем представлени при изменении модели
        this.model.subscribe(() => this.view.update());
        // Обновляем модель при изменении представления
        this.view.onNameChanged = (name) => this.model.name = name;
        setTimeout(() => {
            this.model.name = 'kdkdk';
        }, 5000);
    }
    show() {
        const body = document.body;
        body.insertBefore(this.view.element, body.children[0]);
    }
}
const controller = new Controller();
controller.show();
