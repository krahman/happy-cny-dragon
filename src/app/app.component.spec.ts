import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

import {MyService} from '../services/my.service';
import {MyFakeService} from '../services/my.fake.service';
import {DragonComponent} from '../components/dragon/dragon.component';
import {WarriorComponent} from '../components/warrior/warrior.component';
import {BasePlayerController} from '../components/base/base.controller';
import {CommentComponent} from '../components/comments/item/comment.component';
import {CommentsComponent} from '../components/comments/comments.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DragonComponent,
        WarriorComponent,
        CommentsComponent,
        CommentComponent
      ],
      providers: [{provide: MyService, useClass: MyFakeService}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Battle of Dragon'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Battle of Dragon');
  }));
  it(`should have completed default to false`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.completed).toEqual(false);
  }));
  it(`should have a warrior instance of 'BasePlayerController'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.warrior).isPrototypeOf(BasePlayerController);
  }));
  it(`should have a dragon instance of 'BasePlayerController'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.dragon).isPrototypeOf(BasePlayerController);
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Battle of Dragon!');
  }));
  it('should attach message from service to component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.message).toBe('fake service');
  }));
  it('dragonWon() dragon wins', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.dragonWon();
    expect(app.dragon.getTitle()).toEqual('Winner');
  }));
  it('dragonWon() warrior lost', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.dragonWon();
    expect(app.warrior.getTitle()).toEqual('Loser');
  }));
  it('dragonWon() status changed to completed', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.dragonWon();
    expect(app.completed).toEqual(true);
  }));
  it('warriorWon() warrior won', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.warriorWon();
    expect(app.warrior.getTitle()).toEqual('Winner');
  }));
  it('warriorWon() warrior lost', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.warriorWon();
    expect(app.dragon.getTitle()).toEqual('Loser');
  }));
  it('warriorWon() status changed to completed', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.warriorWon();
    expect(app.completed).toEqual(true);
  }));
  it('getPower() return promsise with random number', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getPower(false)).isPrototypeOf(Promise);
  }));
  it('getPower(isPowerful) return promsise with random number * 2', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getPower(true)).isPrototypeOf(Promise);
  }));
  it('blast() will call attack', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'attack');
    app.blast();
    expect(app.attack).toHaveBeenCalledWith(true);
  }));
  it('heal() should return getPower Promise', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.completed = false;
    // spyOn(app, 'getPower');
    app.heal();
    expect(app.getPower(false)).isPrototypeOf(Promise);
  }));
  it('heal() should return false if completed', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.completed = true;
    app.warrior.setHealth(0);
    expect(app.heal()).toEqual(false);
  }));
  it('gotHitBack() should return getPower() promise', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.completed = false;
    app.gotHitBack(false);
    expect(app.getPower(false)).isPrototypeOf(Promise);
  }));
  it('gotHitBack() should return false if completed', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.completed = true;
    app.dragon.setHealth(0);
    expect(app.gotHitBack()).toEqual(false);
  }));
  it('gotHitBack() should call dragonWon if warrior health = 0', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.completed = true;
    app.warrior.setHealth(0);
    expect(app.gotHitBack()).isPrototypeOf(Promise);
  }));
  it('attack() should return getPower() promise', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.completed = false;
    app.attack(false);
    expect(app.getPower(false)).isPrototypeOf(Promise);
  }));
  it('attack() should return false if completed', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.completed = true;
    app.warrior.setHealth(0);
    expect(app.attack(false)).toEqual(false);
  }));
  it('attack() should also call warriorWon if dragon health <= 0', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'warriorWon');
    app.completed = false;
    app.attack(false);
    app.dragon.setHealth(0);
    expect(app.attack()).isPrototypeOf(Promise);
  }));
});
