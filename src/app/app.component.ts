import {Component} from '@angular/core';
import {MyService} from '../services/my.service';
import {BasePlayerController} from '../components/base/base.controller';
import {CommentaryController} from '../components/base/commentary/commentry.controller';
import {CommentaryItem} from '../components/base/commentary/commentary.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public warrior: BasePlayerController;
  public dragon: BasePlayerController;
  public commentary: CommentaryController;

  public title: string;
  public message: string;
  public completed: boolean;
  public started: boolean;
  public comments: any;
  public dragonLife: number;
  public warriorLife: number;
  public dragonWins: boolean;
  public warriorWins: boolean;

  constructor(myService: MyService) {
    this.title = 'Battle of Dragon';
    this.message = myService.getMessage();
    this.reset();
  }

  attack(isPowerful) {

    this.startGame();

    if (!this.completed || this.warrior.getHealth() > 0) {
      return this.getPower(isPowerful)
        .then((power) => {
          this.logComment('Warrior', 'Dragon', power);
          return this.dragon.gotHit(power);
        })
        .then((health) => {
          this.dragon.setHealth(health);
        })
        .then(() => {
          if (this.dragon.getHealth() <= 0) {
            this.warriorWon();
          } else {
            this.gotHitBack(isPowerful);
          }
        });
    }

    return false;
  }

  gotHitBack(isPowerful) {

    if (!this.completed || this.dragon.getHealth() > 0) {
      return this.getPower(isPowerful)
        .then((power) => {
          this.logComment('Dragon', 'Warrior', power);
          return this.warrior.gotHit(power);
        })
        .then((health) => {
          this.warrior.setHealth(health);
        })
        .then(() => {
          if (this.warrior.getHealth() <= 0) {
            this.dragonWon();
          }
        });
    }

    return false;
  }

  heal() {

    this.startGame();

    if (!this.completed || this.warrior.getHealth() > 0) {
      return this.getPower(false)
        .then((power) => {
          return this.warrior.addHealth(power);
        })
        .then((health) => {
          this.warrior.setHealth(health);
        })
        .then(() => {
          this.gotHitBack(false);
        });
    }

    return false;
  }

  blast() {
    this.startGame();

    const isPowerful = true;
    this.attack(isPowerful);
  }

  getPower(isPowerful) {
    let power = Math.floor((Math.random() * 10) + 1);
    if (isPowerful) {
      power *= 2;
    }
    return Promise.resolve(power);
  }

  warriorWon() {
    this.dragon.setTitle('Loser');
    this.warrior.setTitle('Winner');
    this.completed = true;
    this.warriorWins = true;
    this.getCurrentWarriorDamageDiff();
    this.logComment('Warrior', 'Dragon', 0);
  }

  dragonWon() {
    this.dragon.setTitle('Winner');
    this.warrior.setTitle('Loser');
    this.completed = true;
    this.dragonWins = true;
    this.getCurrentDragonDamageDiff();
    this.logComment('Dragon', 'Warrior', 0);
  }

  reset() {
    this.dragonWins = false;
    this.warriorWins = false;
    this.dragonLife = 50;
    this.warriorLife = 50;
    this.dragon = new BasePlayerController('Dragon');
    this.warrior = new BasePlayerController('Warrior');
    this.completed = false;
    this.started = false;
    this.comments = [];
  }

  addComment(comment: CommentaryItem) {
    return this.comments.push(comment) - 1;
  }

  logComment(attacker, target, power) {
    const comment = new CommentaryItem();
    comment.attacker = attacker;
    comment.target = target;
    comment.power = power;
    if (this.completed) {
      comment.message = this.completeMessage(attacker, target);
    } else {
      comment.message = this.newMessage(attacker, target, power);
    }
    this.addComment(comment);
    this.getCurrentWarriorDamageDiff();
    this.getCurrentDragonDamageDiff();
  }

  newMessage(attacker, target, power) {
    return `${attacker} attacks ${target} for ${power}`;
  }

  completeMessage(attacker, target) {
    return `${attacker} killed ${target}`;
  }

  startGame() {
    if (!this.started) {
      this.started = true;
    }
  }

  getCurrentWarriorDamageDiff() {
    if (this.warriorWins) {
      return this.warriorLife = 100;
    }
    const health = (this.warrior.getHealth() - this.dragon.getHealth()) / 2;
    if (health === 0) {
      return this.warriorLife = 50;
    } else {
      if (this.warriorLife + health >= 100) {
        return 100;
      }
      return this.warriorLife += health;
    }
  }

  getCurrentDragonDamageDiff() {
    if (this.dragonWins) {
      return this.dragonLife = 100;
    }

    const health = (this.dragon.getHealth() - this.warrior.getHealth()) / 2;
    if (health === 0) {
      return this.dragonLife = 50;
    } else {
      if (this.dragonLife + health >= 100) {
        return 100;
      }
      return this.dragonLife += health;
    }
  }
}
