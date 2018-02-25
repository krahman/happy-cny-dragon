import {BasePlayer} from './base.component';

export interface IBasePlayer extends BasePlayer {
  getTitle(): string;

  setTitle(title: string): void;

  getHealth(): number;

  setHealth(health: number): void;

  addHealth(health: number): number;

  attack(): void;

  gotHit(power: number): number;
}
