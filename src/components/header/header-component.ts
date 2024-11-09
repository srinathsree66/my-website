import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sc-header',
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.scss'],
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  title = 'Sreecodes Portfolio';
}
