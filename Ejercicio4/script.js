
class UserListComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const userListContainer = document.createElement("div");
    this.fetchUserData(userListContainer);
    this.shadowRoot.appendChild(userListContainer);
  }
  async fetchUserData(container) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      const userList = document.createElement("ul");
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
      container.appendChild(userList);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  }
}
customElements.define("user-list-component", UserListComponent);
