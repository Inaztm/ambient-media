import { newSpecPage } from '@stencil/core/testing';
import { AmbientMedia } from '../ambient-media';

describe('ambient-media', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmbientMedia],
      html: `<ambient-media></ambient-media>`,
    });
    expect(page.root).toEqualHtml(`
      <ambient-media>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ambient-media>
    `);
  });
});
