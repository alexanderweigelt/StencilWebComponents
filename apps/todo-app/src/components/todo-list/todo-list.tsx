import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'todo-list',
  shadow: true,
})
export class TodoList {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
