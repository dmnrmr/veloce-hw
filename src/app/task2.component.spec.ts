import { Shallow } from 'shallow-render';
import { AppModule } from './app.module';
import { Task2Component } from './task2.component';
import { TagStoreService } from './services/tag-store.service';
import { Router } from '@angular/router';

describe('Task2Component', () => {
  const text1 = 'foo';
  const text2 = 'bar';
  const tags = [
    `<p>${text1}</p>`,
    `<p>${text2}</p>`
  ];
  let shallow: Shallow<Task2Component>;

  beforeEach(() => {
    shallow = new Shallow(Task2Component, AppModule);
  });

  it('should render set amount of html tags from provided value', async () => {
    const { find } = await shallow
      .mock(TagStoreService, {
        getTags: () => tags
      })
      .render();
    const parentElement = find('div').nativeElement;

    expect(parentElement.children.length).toBe(tags.length);
  });

  it('should render html tags from provided value', async () => {
    const { find } = await shallow
      .mock(TagStoreService, {
        getTags: () => tags
      })
      .render();
    const parentElement = find('div').nativeElement;
    const [tag1, tag2] = parentElement.children;

    expect(tag1.innerText).toBe(text1);
    expect(tag2.innerText).toBe(text2);
  });

  it('should call router to navigate to index page if no tags are stored', async () => {
    const navigate = jasmine.createSpy('navigate');

    await shallow
      .mock(TagStoreService, {
        getTags: () => undefined
      })
      .mock(Router, { navigate })
      .render();

    expect(navigate).toHaveBeenCalledWith(['/']);
  });
});
