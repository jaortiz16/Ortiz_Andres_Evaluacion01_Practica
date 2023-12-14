class SaludoComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const mensajeElement = document.createElement("p");
    mensajeElement.textContent = "¡Hola, Mundo!";
    shadowRoot.appendChild(mensajeElement);
  }
}
customElements.define("saludo-component", SaludoComponent);
