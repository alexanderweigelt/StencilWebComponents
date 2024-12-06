import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true, // Shadow DOM sorgt für Style-Isolation
})
export class UiButton {
  @Prop() type: string = 'button'; // Standard-Attribut des Buttons
  @Prop() disabled: boolean = false; // Disabled-Attribut

  render() {
    return (
      <button
        type={this.type}
        disabled={this.disabled}
        {...this.getNativeProps()} // Alle nativen Button-Attribute
      >
        <slot></slot>
      </button>
    );
  }

  private getNativeProps() {
    const nativeProps = {};
    const attributes = Object.keys(this as any);
    for (const key of attributes) {
      if (key.startsWith('data-') || key.startsWith('aria-') || this.isNativeButtonProp(key)) {
        nativeProps[key] = (this as any)[key];
      }
    }
    return nativeProps;
  }

  private isNativeButtonProp(key: string) {
    return ['autofocus', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'name', 'value'].includes(key);
  }
}
