import { Shallow } from 'shallow-render';
import { TagInputComponent } from './tag-input.component';
import { AppModule } from '../../app.module';

describe('TagInputComponent', () => {
  let shallow: Shallow<TagInputComponent>;

  beforeEach(() => {
    shallow = new Shallow(TagInputComponent, AppModule);
  });

  it('should render div with provided value', async () => {
    const value = 'foo';
    const { find } = await shallow.render({
      bind: { value }
    });
    const result = find('div').nativeElement.innerText;

    expect(result).toBe(value);
  });
});
