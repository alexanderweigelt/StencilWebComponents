import { newSpecPage } from '@stencil/core/testing';
import { UiText } from '../ui-text';

describe('ui-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiText],
      html: `<ui-text></ui-text>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-text>
        <mock:shadow-root>
          <p>
            <slot></slot>
          </p>
        </mock:shadow-root>
      </ui-text>
    `);
  });
});
