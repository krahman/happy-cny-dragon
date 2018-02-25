import {BasePlayer} from './base.component';
import {IBasePlayer} from './base.interface';

export class BasePlayerController extends BasePlayer implements IBasePlayer {
  title: string;
  health: number;
  damage: number;

  constructor(title: string) {
    super();
    this.setTitle(title);
    this.setHealth(100);
    this.damage = 0;
  }

  public setTitle(title: string) {
    return this.title = title;
  }

  public getTitle() {
    return this.title;
  }

  public setHealth(health: number) {
    this.health = health;
  }

  public getHealth() {
    return this.health;
  }

  public addHealth(health: number) {
    this.health += health;

    if (this.health > 100) {
      return 100;
    }
    return this.health;
  }

  public attack() {
    return Math.floor((Math.random() * 10) + 1);
  }

  public gotHit(power: number) {
    this.damage = power;
    const healthLeft = this.health - power;
    if (healthLeft <= 0) {
      return 0;
    }
    return healthLeft;
  }
}
