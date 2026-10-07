import { canOpenChest, calculateDamage, getHeroStatus } from './src/quest.js';

console.log('\n' + '='.repeat(55));
console.log('⚔️   DUNGEON LOOT QUEST: ТЕСТОВИЙ ПРОГІН СИСТЕМИ');
console.log('='.repeat(55));

console.log('\n[1] 🧪 Тестуємо стан героя (getHeroStatus):');
console.log('  • 100/100 HP (очікуємо "Healthy"):  ', getHeroStatus(100, 100));
console.log('  • 50/100 HP  (очікуємо "Wounded"):  ', getHeroStatus(50, 100));
console.log('  • 15/100 HP  (очікуємо "Critical"): ', getHeroStatus(15, 100));
console.log('  • 0/100 HP   (очікуємо "Defeated"): ', getHeroStatus(0, 100));

console.log('\n[2] ⚔️  Тестуємо розрахунок шкоди (calculateDamage):');
console.log('  • Меч (сила 50, звичайний удар -> очікуємо 50):       ', calculateDamage(50, 'sword', false));
console.log('  • Лук (сила 50, звичайний удар -> очікуємо 60):       ', calculateDamage(50, 'bow', false));
console.log('  • Посох (сила 40, КРИТИЧНИЙ удар! -> очікуємо 120):  ', calculateDamage(40, 'staff', true));
console.log('  • Кулаки (сила 30 -> очікуємо 15):                   ', calculateDamage(30, 'fist', false));

console.log('\n[3] 🗝️  Тестуємо злам скринь (canOpenChest):');
console.log('  • Пастка активна + є ключ (очікуємо false):          ', canOpenChest(true, 100, false));
console.log('  • Пастка знешкоджена + є ключ (очікуємо true):       ', canOpenChest(true, 0, true));
console.log('  • Пастка знешкоджена + відмичка 75 (очікуємо true):  ', canOpenChest(false, 75, true));
console.log('  • Пастка знешкоджена + відмичка 40 (очікуємо false): ', canOpenChest(false, 40, true));

console.log('\n' + '='.repeat(55));
console.log('💡 Відкрийте src/quest.js, напишіть розвʼязок і запустіть знову!');
console.log('='.repeat(55) + '\n');
