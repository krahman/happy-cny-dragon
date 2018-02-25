import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyService } from '../services/my.service';
import {DragonComponent} from '../components/dragon/dragon.component';
import {WarriorComponent} from '../components/warrior/warrior.component';
import {CommentsComponent} from '../components/comments/comments.component';
import {CommentComponent} from '../components/comments/item/comment.component';


@NgModule({
  declarations: [
    AppComponent, DragonComponent, WarriorComponent, CommentsComponent, CommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
