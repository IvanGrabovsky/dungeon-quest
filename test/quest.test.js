import { describe, it, expect } from 'vitest';
import { canOpenChest, calculateDamage, getHeroStatus } from '../src/quest.js';

describe('🗝️ 1. Функція canOpenChest', () => {
  it('забороняє відкривати скриню, якщо пастка не знешкоджена, навіть за наявності ключа', () => {
    expect(canOpenChest(true, 100, false)).toBe(false);
  });

  it('дозволяє відкрити знешкоджену скриню магічним ключем', () => {
    expect(canOpenChest(true, 10, true)).toBe(true);
  });

  it('дозволяє відкрити знешкоджену скриню вмілим зломом (lockpick >= 60)', () => {
    expect(canOpenChest(false, 60, true)).toBe(true);
    expect(canOpenChest(false, 85, true)).toBe(true);
  });

  it('забороняє відкрити скриню без ключа і з недостатнім рівнем злому (< 60)', () => {
    expect(canOpenChest(false, 59, true)).toBe(false);
    expect(canOpenChest(false, 0, true)).toBe(false);
  });
});

describe('⚔️ 2. Функція calculateDamage', () => {
  it('розраховує базову шкоду мечем (* 1.0)', () => {
    expect(calculateDamage(50, 'sword', false)).toBe(50);
  });

  it('розраховує шкоду луком (* 1.2)', () => {
    expect(calculateDamage(50, 'bow', false)).toBe(60);
  });

  it('розраховує шкоду посохом мага (* 1.5)', () => {
    expect(calculateDamage(40, 'staff', false)).toBe(60);
  });

  it('розраховує шкоду кулаками/іншим предметом (* 0.5)', () => {
    expect(calculateDamage(30, 'fist', false)).toBe(15);
  });

  it('подвоює шкоду при критичному ударі (isCrit === true)', () => {
    // 50 * 1.0 * 2 = 100
    expect(calculateDamage(50, 'sword', true)).toBe(100);
    // 40 * 1.5 * 2 = 120
    expect(calculateDamage(40, 'staff', true)).toBe(120);
  });
});

describe('❤️ 3. Функція getHeroStatus', () => {
  it('повертає "Defeated" при нульовому або відʼємному здоровʼї', () => {
    expect(getHeroStatus(0, 100)).toBe('Defeated');
    expect(getHeroStatus(-15, 100)).toBe('Defeated');
  });

  it('повертає "Critical" коли менше 25% HP', () => {
    expect(getHeroStatus(24, 100)).toBe('Critical');
    expect(getHeroStatus(10, 200)).toBe('Critical'); // 5%
  });

  it('повертає "Wounded" від 25% до 75% HP включно', () => {
    expect(getHeroStatus(25, 100)).toBe('Wounded');
    expect(getHeroStatus(50, 100)).toBe('Wounded');
    expect(getHeroStatus(75, 100)).toBe('Wounded');
  });

  it('повертає "Healthy" коли більше 75% HP', () => {
    expect(getHeroStatus(76, 100)).toBe('Healthy');
    expect(getHeroStatus(100, 100)).toBe('Healthy');
  });
});
