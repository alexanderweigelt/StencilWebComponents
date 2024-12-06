import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-main',
  styleUrl: 'ui-main.css',
  shadow: true,
})
export class UiMain {
  render() {
    return (
      <Host>
        <main>
          <slot></slot>
        </main>
      </Host>
    );
  }
}
