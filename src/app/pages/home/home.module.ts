import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactsComponent, ContactComponent, ContactListComponent } from './contacts';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SkillsComponent } from './skills/skills.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    ContactsComponent,
    ContactComponent,
    ContactListComponent,
    EducationComponent,
    FeedbacksComponent,
    SideNavComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [SideNavComponent]
})
export class HomeModule { }
