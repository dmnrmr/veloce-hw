import { Shallow } from 'shallow-render';
import { AppModule } from './app.module';
import { Task1Component } from './task1.component';
import { TagStoreService } from './services/tag-store.service';
import { PlaceholderLabelPipe } from './pipes/placeholder.pipe';
import { TagInputComponent } from './components/tag-input/tag-input.component';


describe('Task1Component', () => {
  const placeholder = '#placeholder_foo_bar';
  const controlValue = 'foo';
  const tag = `<div ${placeholder}><ng-container>${controlValue}</ng-container></div>`;

  let shallow: Shallow<Task1Component>;

  beforeEach(() => {
    shallow = new Shallow(Task1Component, AppModule)
      .mock(TagStoreService, {
        getTags: () => []
      })
      .mockPipe(PlaceholderLabelPipe, input => input);
  });

  it('should render input field on parse template button click', async () => {
    const { find, instance, fixture } = await shallow.render();
    const parseTemplateButtonRef = find('#parseTemplate');

    instance.content = `<div ${placeholder}></div>`
    parseTemplateButtonRef.nativeElement.click();

    fixture.detectChanges();

    const labelRef = find('label');
    const inputRef = find('input');

    expect(labelRef.nativeElement.innerText.toLowerCase()).toEqual(placeholder);
    expect(inputRef.length).toBe(1);
  });

  it('should call store service on display result button click', async () => {
    const storeTags = jasmine.createSpy('storeTags');
    const { find, instance, fixture } = await shallow
      .mock(TagStoreService, { storeTags })
      .render();
    const displayResultButtonRef = find('#displayResult');

    instance.formControls = [
      {
        control: {
          value: controlValue
        },
        key: placeholder
      }
    ] as any;

    displayResultButtonRef.nativeElement.click();

    fixture.detectChanges();

    expect(storeTags).toHaveBeenCalledWith([tag]);
  });

  it('should render tag-input component for stored tags', async () => {
    const { findComponent } = await shallow
      .mock(TagStoreService, {
        getTags: () => [tag]
      })
      .render();

    const tagInputComponentRef = findComponent(TagInputComponent);

    expect(tagInputComponentRef.value).toBe(tag);
  });
});
