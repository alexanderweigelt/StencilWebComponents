import { newSpecPage } from '@stencil/core/testing';
import { UiHeadline } from '../ui-headline';

describe('ui-headline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiHeadline],
      html: `<ui-headline></ui-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-headline>
        <mock:shadow-root>
          <h1>
            <slot></slot>
          </h1>
        </mock:shadow-root>
      </ui-headline>
    `);
  });
});
