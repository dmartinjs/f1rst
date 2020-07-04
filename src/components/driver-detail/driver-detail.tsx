import { Component, h, Prop, State, Host } from '@stencil/core';
import { Driver } from '../../models';

@Component({
  tag: 'driver-detail',
})
export class DriverDetail {

  @State() error = null;

  @State() isLoaded = false;

  @State() driver?: Driver;

  /**
   * Id of the driver
   */
  @Prop() driverId?: string;

  componentDidLoad() {
    fetch(`https://ergast.com/api/f1/drivers/${this.driverId}.json`)
      .then(res => res.json())
      .then(
        (result) => {
          this.isLoaded = true;
          this.driver = result.MRData.DriverTable.Drivers[0];
        },
        (error) => {
          this.isLoaded = true;
          this.error = error;
        }
      );
  }

  render() {
    return (
      <Host>
        <ion-header translucent>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/ranks"></ion-back-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>,

        <ion-content class="ion-padding">
          <h1>{this.driver && `${this.driver.givenName} ${this.driver.familyName}`}</h1>
        </ion-content>
      </Host>
    );
  }
}
