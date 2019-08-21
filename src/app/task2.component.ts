import { TagStoreService } from './services/tag-store.service';
import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'task2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task2Component implements OnInit {
  constructor(
    private storeService: TagStoreService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    if (!this.result) {
      this.router.navigate(['/']);
    }
  }

  public trackByValue(_: number, value: string): string {
    return value;
  }

  get result(): string {
    const tags = this.storeService.getTags();

    return tags && tags.join('');
  }
}
