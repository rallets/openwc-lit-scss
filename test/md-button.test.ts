import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MdButton } from '../src/components/button/button';
import '../src/components/button/md-button.js';

describe('MdButton', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MdButton>(html`<md-button></md-button>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MdButton>(html`<md-button></md-button>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MdButton>(html`<md-button title="attribute title"></md-button>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MdButton>(html`<md-button></md-button>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
