import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tag-input',
  templateUrl: 'tag-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagInputComponent {
  @Input() public value: string;
}
