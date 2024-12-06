import { newE2EPage } from '@stencil/core/testing';

describe('ui-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-text></ui-text>');

    const element = await page.find('ui-text');
    expect(element).toHaveClass('hydrated');
  });
});
