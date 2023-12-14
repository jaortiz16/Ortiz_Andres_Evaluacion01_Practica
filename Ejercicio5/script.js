
class ContadorComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._contador = 0;
    const contadorDisplay = document.createElement("div");
    contadorDisplay.textContent = this._contador;
    const incrementarButton = document.createElement("button");
    incrementarButton.textContent = "Incrementar";
    incrementarButton.addEventListener("click", () => this.incrementar());
    const disminuirButton = document.createElement("button");
    disminuirButton.textContent = "Disminuir";
    disminuirButton.addEventListener("click", () => this.disminuir());
    this.shadowRoot.appendChild(contadorDisplay);
    this.shadowRoot.appendChild(incrementarButton);
    this.shadowRoot.appendChild(disminuirButton);
  }
  incrementar() {
    this._contador++;
    this.actualizarDisplay();
  }
  disminuir() {
    this._contador--;
    this.actualizarDisplay();
  }
  actualizarDisplay() {
    const contadorDisplay = this.shadowRoot.querySelector("div");
    contadorDisplay.textContent = this._contador;
  }
}
customElements.define("contador-component", ContadorComponent);


