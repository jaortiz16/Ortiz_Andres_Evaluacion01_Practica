
class EmisorComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const boton = document.createElement("button");
    boton.textContent = "¡Emitir Mensaje!";
    boton.addEventListener("click", () => this.emitirMensaje());
    shadowRoot.appendChild(boton);
  }

  emitirMensaje() {
    const mensajeEvento = new CustomEvent("mensajeEnviado", {
      bubbles: true,
      detail: { mensaje: "¡Hola desde emisor-component!" },
    });
    this.dispatchEvent(mensajeEvento);
  }
}
customElements.define("emisor-component", EmisorComponent);
class ReceptorComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.h2Element = document.createElement("h2");
    shadowRoot.appendChild(this.h2Element);
    document.addEventListener("mensajeEnviado", (event) =>
      this.mostrarMensaje(event)
    );
  }
  mostrarMensaje(event) {
    this.h2Element.textContent = event.detail.mensaje;
  }
}
customElements.define("receptor-component", ReceptorComponent);

