import { html, css, LitElement, _$LE } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number }, //reflective thing
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }
//:host ([counter = 10]) reflective thing
  __increment() {
    this.counter += 1;
    if (this.counter === 10) {
      this.shadowRoot.querySelector('button').style.backgroundColor = "red";
    }
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
  
}
