import { newE2EPage } from '@stencil/core/testing';

describe('ambient-media', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ambient-media></ambient-media>');

    const element = await page.find('ambient-media');
    expect(element).toHaveClass('hydrated');
  });
});
