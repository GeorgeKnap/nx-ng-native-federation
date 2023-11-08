import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { DemoComponent } from '@nx-ng-native-federation/shared';

@Component({
  standalone: true,
  imports: [DemoComponent, MatChipsModule],
  selector: 'nx-ng-native-federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
