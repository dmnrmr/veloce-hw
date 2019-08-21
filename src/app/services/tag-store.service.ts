import { Injectable } from '@angular/core';

@Injectable()
export class TagStoreService {
  private tags: string[];

  public storeTags(tags: string[]): void {
    this.tags = tags;
  }

  public getTags(): string[] {
    return this.tags;
  }
}
