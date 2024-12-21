import { newSpecPage } from '@stencil/core/testing';
import { AddTodo } from '../add-todo';

describe('add-todo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddTodo],
      html: `<add-todo></add-todo>`,
    });
    expect(page.root).toEqualHtml(`
      <add-todo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </add-todo>
    `);
  });
});
