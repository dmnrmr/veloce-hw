import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { hasPlaceholderAttribute } from './utils';
import { TagFormService } from './services/tag-form.service';
import { TagStoreService } from './services/tag-store.service';

interface FormControl {
  control: AbstractControl;
  key: string;
}

const filterByPlaceholderAttribute = (
  element: Element
): boolean => Array.from(element.attributes).some(hasPlaceholderAttribute);

@Component({
  templateUrl: 'task1.component.html',
  styleUrls: ['task1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task1Component implements OnInit {
  public content: string;
  public form: FormGroup;
  public formControls: FormControl[] = [];

  constructor(
    private formService: TagFormService,
    private storeService: TagStoreService
  ) {}

  private getValidTags(children: HTMLCollection): Element[] {
    return Array.from(children).filter(filterByPlaceholderAttribute);
  };


  private setformControls(form: FormGroup): void {
    const controlKeys = Object.keys(form.controls);

    this.formControls = controlKeys.map(key => ({
      control: form.get(key),
      key
    }));
  }

  private setInputTags(elements: Element[]): void {
    this.form = this.formService.buildForm(elements);
    this.setformControls(this.form);
  }

  public ngOnInit(): void {
    this.content = `
      <div #placeholder_first_name></div>

      <div #placeholder_last_name></div>
    `;
  }

  public parseTemplate(): void {
    const tempElement = document.createElement('div');

    tempElement.innerHTML = this.content;

    const validTags = this.getValidTags(tempElement.children);

    this.setInputTags(validTags);
  }

  public displayResult(): void {
    const tags = this.formControls.map(({ control, key }) =>  {
      return `<div ${key}><ng-container>${control.value}</ng-container></div>`;
    });

    this.storeService.storeTags(tags);
  }

  public trackByFormControlKey(_: number, { key }: FormControl): string {
    return key;
  }

  public trackByValue(_: number, value: string): string {
    return value;
  }

  public get result(): string[] {
    return this.storeService.getTags();
  }
}
