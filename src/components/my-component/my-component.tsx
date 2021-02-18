import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() switched: boolean = false;

  /**
   * The middle name
   */
  @Prop({ mutable: true }) disabled: boolean = true;

  render() {
    return (
      <Host>
        <calcite-label>
          Switch
          <calcite-switch disabled={this.disabled} switched={this.switched}></calcite-switch>
        </calcite-label>
        <calcite-label>
          Toggle disabled on switch ^^
          <calcite-switch onCalciteSwitchChange={() => this.disabled = !this.disabled}></calcite-switch>
        </calcite-label>
        Switch is no longer disabled after toggle and prop update, but cannot be switched. Underlying input still shows disabled in dev tools.
      </Host>
    )
  }
}
