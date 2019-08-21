import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { hasPlaceholderAttribute } from '../utils';

const mapControls = (element: Element): [string, null] => {
  const [placeholderAttribute] = Array.from(element.attributes).filter(hasPlaceholderAttribute)

  return [placeholderAttribute.name, null];
};

@Injectable()
export class TagFormService {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {}

  public buildForm(elements: Element[]): FormGroup {
    const controls = elements.map(mapControls);

    this.form = this.fb.group(Object.fromEntries(controls));

    return this.form;
  }
}
