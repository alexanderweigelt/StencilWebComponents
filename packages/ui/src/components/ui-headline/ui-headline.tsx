import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-headline',
  styleUrl: 'ui-headline.css',
  shadow: true,
})
export class UiHeadline {
  render() {
    return (
      <Host>
        <h1>
          <slot></slot>
        </h1>
      </Host>
    );
  }
}
