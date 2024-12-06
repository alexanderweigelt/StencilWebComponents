import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  @Element() el: HTMLButtonElement;

  private getAttributes() {
    const attributes = {};
    Array.from(this.el.attributes).forEach(attr => {
      attributes[attr.name] = attr.value;
    });
    return attributes;
  }

  render() {
    return (
      <button {...this.getAttributes()}>
        <slot />
      </button>
    );
  }
}
