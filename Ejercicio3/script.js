


class ContenedorComponent extends HTMLElement{
    constructor(){
        super();
        this.slot1;
        this.slot2;
    }

    static get observedAttributes(){
        return ['slot1', "slot2"];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "slot1":
                this.slot1 = newValue;
            break;
            case "slot2":
                this.slot2 = newValue;
            break;
        }
    }

    connectedCallback(){
        this.innerHTML = `<div>
            <h1> ${this.slot1} </h1>
            <p>${this.slot2}</p>
        </div>`;
     
    }
}

window.customElements.define("contenedor-component", ContenedorComponent);