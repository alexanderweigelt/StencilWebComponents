import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-text',
  styleUrl: 'ui-text.css',
  shadow: true,
})
export class UiText {
  render() {
    return (
      <Host>
        <p>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
