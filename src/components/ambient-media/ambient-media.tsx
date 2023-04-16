import { Component, Host, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'ambient-media',
  styleUrl: 'ambient-media.css',
  shadow: true,
})
export class AmbientMedia {

  @Element() host: HTMLElement;
  private fxEl?: HTMLCanvasElement;
  private childEl?: HTMLElement;

  @Prop() intervalTime: number = 100;
  @Prop() oneshot: boolean = false;
  @Prop() strength?: 'low'|'big' = 'big';

  timer: number;

  getCurrentImage() {
    if (!this.childEl || !this.fxEl) return;
    const ctx = this.fxEl?.getContext("2d");
    ctx?.drawImage(this.childEl as CanvasImageSource, 0, 0, this.fxEl?.width, this.fxEl?.height);
  }

  connectedCallback() {
    this.childEl = this.host.querySelector('video,img') as HTMLElement;
 
    this.timer = window.setInterval(() => {
      this.getCurrentImage();
      if (this.oneshot) {
        window.clearInterval(this.timer);
      }
    }, this.intervalTime);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <Host>
        <canvas ref={(el) => this.fxEl = el} class={`fx ${this.strength}`}></canvas>
        <slot></slot>
      </Host>
    );
  }

}
