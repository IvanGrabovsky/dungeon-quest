/**
 * ⚔️ Dungeon Loot Quest: Меч, Магія та Скрині
 * 
 * Практичне завдання з теми:
 * - Умовні конструкції (if / else if / else, switch)
 * - Логічні оператори (&&, ||, !)
 * - Оператори порівняння (===, !==, >, <, >=, <=)
 * - Тернарний оператор (? :)
 */

/**
 * Завдання 1: Відкриття замкненої скрині
 * 
 * Правила безпеки в підземеллі:
 * 1. Якщо пастка НЕ знешкоджена (!isTrapDisarmed або isTrapDisarmed === false) ->
 *    скриню відкривати заборонено (повертає false), інакше герой загине від отрути!
 * 2. Якщо пастка знешкоджена, скриня відкриється за умови:
 *    - герой має магічний ключ (hasKey === true) АБО
 *    - рівень майстерності відмичок не менше 60 (lockpickLevel >= 60)
 * 
 * @param {boolean} hasKey - Наявність ключа від скрині
 * @param {number} lockpickLevel - Рівень навички зламу замків (від 0 до 100)
 * @param {boolean} isTrapDisarmed - Чи знешкоджено пастку
 * @returns {boolean} true, якщо скриню безпечно відкрито, інакше false
 */
export function canOpenChest(hasKey, lockpickLevel, isTrapDisarmed) {
  // TODO: Реалізуйте перевірку відкриття скрині
  return false;
}

/**
 * Завдання 2: Розрахунок бойової шкоди по ворогу
 * 
 * Правила атаки:
 * 1. Базова шкода залежить від класу зброї (weaponClass):
 *    - 'sword' (меч) -> attackPower * 1.0
 *    - 'bow' (лук) -> attackPower * 1.2
 *    - 'staff' (посох мага) -> attackPower * 1.5
 *    - будь-яка інша зброя чи без зброї -> attackPower * 0.5
 * 2. Якщо удар критичний (isCrit === true) -> розрахована шкода подвоюється (* 2).
 * 3. Результат поверніть цілим числом, округливши за допомогою Math.round().
 * 
 * @param {number} attackPower - Базова сила атаки (число)
 * @param {string} weaponClass - Клас зброї ('sword', 'bow', 'staff' тощо)
 * @param {boolean} isCrit - Чи спрацював критичний удар
 * @returns {number} Фінальна шкода
 */
export function calculateDamage(attackPower, weaponClass, isCrit) {
  // TODO: Розрахуйте бойову шкоду
  return 0;
}

/**
 * Завдання 3: Визначення бойового стану героя за здоров'ям (HP)
 * 
 * Правила:
 * 1. Якщо maxHp <= 0 або currentHp <= 0 -> повертає 'Defeated'
 * 2. Розрахуйте відсоток здоров'я: (currentHp / maxHp) * 100
 * 3. Категорії стану:
 *    - менше 25% (< 25) -> 'Critical' (критичний стан)
 *    - від 25% до 75% включно -> 'Wounded' (поранений)
 *    - більше 75% (> 75) -> 'Healthy' (повний сил)
 * 
 * @param {number} currentHp - Поточні бали здоров'я
 * @param {number} maxHp - Максимальні бали здоров'я
 * @returns {'Defeated' | 'Critical' | 'Wounded' | 'Healthy'}
 */
export function getHeroStatus(currentHp, maxHp) {
  // TODO: Визначте стан здоров'я
  return 'Healthy';
}
