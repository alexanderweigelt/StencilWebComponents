import { newE2EPage } from '@stencil/core/testing';

describe('ui-button', () => {
  it('should render with default properties', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-button>Click me</ui-button>');

    const button = await page.find('ui-button >>> button');
    expect(button).not.toBeNull();
    expect(button.getAttribute('type')).toBe('button');
    expect(button).not.toHaveAttribute('disabled');
    expect(button.textContent).toBe('Click me');
  });

  it('should apply passed attributes correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-button type="submit" aria-label="submit-button" disabled>Submit</ui-button>');

    const button = await page.find('ui-button >>> button');
    expect(button.getAttribute('type')).toBe('submit');
    expect(button).toHaveAttribute('disabled');
    expect(button.getAttribute('aria-label')).toBe('submit-button');
  });

  it('should respond to click events', async () => {
    const page = await newE2EPage();
    const clickHandler = jest.fn();

    await page.exposeFunction('clickHandler', clickHandler);
    await page.setContent('<ui-button onClick="clickHandler()">Click me</ui-button>');

    const button = await page.find('ui-button >>> button');
    await button.click();

    expect(clickHandler).toHaveBeenCalled();
  });
});
