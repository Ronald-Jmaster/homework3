import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AvatarComponent],
})
export class SharedModule { }
