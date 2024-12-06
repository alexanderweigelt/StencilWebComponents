import { newSpecPage } from '@stencil/core/testing';
import { UiButton } from '../ui-button';

describe('ui-button', () => {
  it('should render correctly with default properties', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button>Submit</ui-button>`,
    });

    expect(page.root).toEqualHtml(`
      <ui-button>
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
          Submit
        </mock:shadow-root>
      </ui-button>
    `);
  });

  it('should apply all native button attributes', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button type="submit" disabled name="test-button">Submit</ui-button>`,
    });

    const button = page.root.shadowRoot.querySelector('button');
    expect(button.getAttribute('type')).toBe('submit');
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('name')).toBe('test-button');
  });

  it('should handle custom attributes (aria, data)', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button aria-label="custom-button" data-test="value">Test</ui-button>`,
    });

    const button = page.root.shadowRoot.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe('custom-button');
    expect(button.getAttribute('data-test')).toBe('value');
  });
});
