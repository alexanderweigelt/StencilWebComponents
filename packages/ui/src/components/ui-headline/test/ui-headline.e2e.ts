import { newE2EPage } from '@stencil/core/testing';

describe('ui-headline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-headline></ui-headline>');

    const element = await page.find('ui-headline');
    expect(element).toHaveClass('hydrated');
  });
});
