import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// import style from './button-style.scss';
import style from './button-style.css';

@customElement('md-button')
export class MdButton extends LitElement {
	static styles = [style];

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
