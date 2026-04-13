/* =============================================
   Calorie Tracker — app.js
   ============================================= */

// ---- Data ----

const FOODS = [
  // Grains & Carbs
  { name: "Steamed Rice (1 cup)",        kcal: 206, cat: "Grains",    icon: "🍚" },
  { name: "White Bread (2 slices)",       kcal: 160, cat: "Grains",    icon: "🍞" },
  { name: "Oatmeal (1 cup)",              kcal: 154, cat: "Grains",    icon: "🥣" },
  { name: "Whole Wheat Bread (2 slices)", kcal: 138, cat: "Grains",    icon: "🍞" },
  { name: "Pasta (1 cup)",                kcal: 220, cat: "Grains",    icon: "🍝" },
  { name: "Pancakes (2 medium)",          kcal: 175, cat: "Grains",    icon: "🥞" },
  { name: "Corn Tortilla (2)",            kcal: 120, cat: "Grains",    icon: "🫓" },
  // Proteins
  { name: "Grilled Chicken (100g)",       kcal: 165, cat: "Protein",   icon: "🍗" },
  { name: "Fried Egg (1)",                kcal: 90,  cat: "Protein",   icon: "🍳" },
  { name: "Boiled Egg (1)",               kcal: 78,  cat: "Protein",   icon: "🥚" },
  { name: "Beef Steak (100g)",            kcal: 271, cat: "Protein",   icon: "🥩" },
  { name: "Tuna (100g)",                  kcal: 130, cat: "Protein",   icon: "🐟" },
  { name: "Salmon (100g)",                kcal: 208, cat: "Protein",   icon: "🐟" },
  { name: "Tilapia/Fish (100g)",          kcal: 128, cat: "Protein",   icon: "🐠" },
  { name: "Tofu (100g)",                  kcal: 76,  cat: "Protein",   icon: "🫘" },
  { name: "Pork Chop (100g)",             kcal: 242, cat: "Protein",   icon: "🥩" },
  { name: "Shrimp (100g)",                kcal: 99,  cat: "Protein",   icon: "🦐" },
  // Fast Food
  { name: "Burger (regular)",             kcal: 354, cat: "Fast Food", icon: "🍔" },
  { name: "Cheese Burger",                kcal: 440, cat: "Fast Food", icon: "🍔" },
  { name: "Pizza Slice",                  kcal: 285, cat: "Fast Food", icon: "🍕" },
  { name: "French Fries (medium)",        kcal: 365, cat: "Fast Food", icon: "🍟" },
  { name: "Hot Dog",                      kcal: 290, cat: "Fast Food", icon: "🌭" },
  { name: "Fried Chicken (1 pc)",         kcal: 320, cat: "Fast Food", icon: "🍗" },
  { name: "Shawarma Wrap",                kcal: 430, cat: "Fast Food", icon: "🌯" },
  // Fruits
  { name: "Apple (medium)",               kcal: 95,  cat: "Fruits",    icon: "🍎" },
  { name: "Banana (medium)",              kcal: 105, cat: "Fruits",    icon: "🍌" },
  { name: "Mango (1 cup)",                kcal: 99,  cat: "Fruits",    icon: "🥭" },
  { name: "Orange (medium)",              kcal: 62,  cat: "Fruits",    icon: "🍊" },
  { name: "Grapes (1 cup)",               kcal: 104, cat: "Fruits",    icon: "🍇" },
  { name: "Watermelon (1 cup)",           kcal: 46,  cat: "Fruits",    icon: "🍉" },
  { name: "Strawberries (1 cup)",         kcal: 49,  cat: "Fruits",    icon: "🍓" },
  // Vegetables
  { name: "Mixed Salad (1 cup)",          kcal: 20,  cat: "Veggies",   icon: "🥗" },
  { name: "Broccoli (1 cup)",             kcal: 55,  cat: "Veggies",   icon: "🥦" },
  { name: "Carrot (medium)",              kcal: 25,  cat: "Veggies",   icon: "🥕" },
  { name: "Sweet Potato (medium)",        kcal: 103, cat: "Veggies",   icon: "🍠" },
  { name: "Avocado (half)",               kcal: 120, cat: "Veggies",   icon: "🥑" },
  // Drinks
  { name: "Soda / Cola (355ml)",          kcal: 140, cat: "Drinks",    icon: "🥤" },
  { name: "Orange Juice (240ml)",         kcal: 110, cat: "Drinks",    icon: "🍊" },
  { name: "Whole Milk (240ml)",           kcal: 149, cat: "Drinks",    icon: "🥛" },
  { name: "Coffee (black)",               kcal: 5,   cat: "Drinks",    icon: "☕" },
  { name: "Coffee with Milk & Sugar",     kcal: 80,  cat: "Drinks",    icon: "☕" },
  { name: "Energy Drink (250ml)",         kcal: 110, cat: "Drinks",    icon: "⚡" },
  { name: "Beer (355ml)",                 kcal: 153, cat: "Drinks",    icon: "🍺" },
  { name: "Smoothie (300ml)",             kcal: 190, cat: "Drinks",    icon: "🥤" },
  // Snacks & Sweets
  { name: "Chocolate Bar (45g)",          kcal: 230, cat: "Snacks",    icon: "🍫" },
  { name: "Potato Chips (30g)",           kcal: 155, cat: "Snacks",    icon: "🥔" },
  { name: "Yogurt (150g)",                kcal: 88,  cat: "Snacks",    icon: "🍦" },
  { name: "Donut (glazed)",               kcal: 253, cat: "Snacks",    icon: "🍩" },
  { name: "Ice Cream Scoop",              kcal: 207, cat: "Snacks",    icon: "🍨" },
  { name: "Cookie (1 large)",             kcal: 142, cat: "Snacks",    icon: "🍪" },
  { name: "Peanuts (30g)",                kcal: 176, cat: "Snacks",    icon: "🥜" },
];

const CATS = {
  "Grains":    "🌾",
  "Protein":   "🥩",
  "Fast Food": "🍔",
  "Fruits":    "🍎",
  "Veggies":   "🥦",
  "Drinks":    "🥤",
  "Snacks":    "🍫",
};

// ---- State ----
let log  = [];
let goal = 2000;

// ---- DOM helpers ----
const $ = (id) => document.getElementById(id);

// ---- Categories ----
function renderCategories() {
  const el = $('categoriesEl');
  el.innerHTML = Object.keys(CATS).map(cat => {
    const foods = FOODS.filter(f => f.cat === cat);
    const chips = foods.slice(0, 5).map(f => {
      const idx = FOODS.indexOf(f);
      return `<span class="chip" onclick="addFood(${idx})">${f.icon} ${f.name.split('(')[0].trim()}</span>`;
    }).join('');
    return `<div class="cat-row">
      <div class="cat-title">${CATS[cat]} ${cat}</div>
      ${chips}
    </div>`;
  }).join('');
}

// ---- Autocomplete ----
$('foodInput').addEventListener('input', function () {
  const q  = this.value.toLowerCase().trim();
  const ac = $('autocomplete');
  if (!q) { ac.classList.remove('show'); return; }

  const matches = FOODS.filter(f => f.name.toLowerCase().includes(q)).slice(0, 6);
  if (!matches.length) { ac.classList.remove('show'); return; }

  ac.innerHTML = matches.map(f => {
    const idx = FOODS.indexOf(f);
    return `<div class="ac-item" onclick="addFood(${idx})">
      <span>${f.icon} ${f.name}</span>
      <span class="ac-kcal">${f.kcal} kcal</span>
    </div>`;
  }).join('');
  ac.classList.add('show');
});

// Close autocomplete when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrap')) {
    $('autocomplete').classList.remove('show');
  }
});

// Enter key to add
$('foodInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addFromInput();
});

// ---- Add food ----
function addFromInput() {
  const val = $('foodInput').value.trim();
  if (!val) return;

  const match = FOODS.find(f => f.name.toLowerCase().includes(val.toLowerCase()));
  if (match) {
    addFood(FOODS.indexOf(match));
  } else {
    // Unknown food — default to 100 kcal
    log.push({ name: val, kcal: 100, cat: "Custom", icon: "🍽️" });
    render();
  }

  $('foodInput').value = '';
  $('autocomplete').classList.remove('show');
}

function addFood(idx) {
  log.push({ ...FOODS[idx] });
  $('foodInput').value = '';
  $('autocomplete').classList.remove('show');
  render();
}

// ---- Remove food ----
function removeFood(idx) {
  const cards = document.querySelectorAll('.food-card');
  const card  = cards[idx];
  if (!card) return;
  card.classList.add('removing');
  card.addEventListener('animationend', () => {
    log.splice(idx, 1);
    render();
  }, { once: true });
}

// ---- Reset all ----
function resetAll() {
  if (log.length === 0) return;
  log = [];
  render();
}

// ---- Main render ----
function render() {
  const total  = log.reduce((sum, f) => sum + f.kcal, 0);
  const pct    = Math.min((total / goal) * 100, 100);
  const remain = goal - total;

  // Dashboard numbers
  $('totalCal').innerHTML    = `${total} <span>kcal</span>`;
  $('itemCount').textContent  = `${log.length} item${log.length !== 1 ? 's' : ''}`;
  $('remainLabel').textContent = remain >= 0
    ? `${remain} kcal left`
    : `${Math.abs(remain)} kcal over`;
  $('calGoalLabel').textContent = `Goal: ${goal} kcal`;
  $('progGoalLabel').textContent = `${goal} kcal`;

  // Progress bar
  const fill = $('progressFill');
  fill.style.width = pct + '%';
  fill.className   = 'progress-fill' + (total > goal ? ' over' : '');

  // Food list
  const listEl = $('foodList');
  if (log.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <span class="big">🥗</span>
        Nothing logged yet.<br>Add your first meal above!
      </div>`;
  } else {
    listEl.innerHTML = log.map((f, i) => `
      <div class="food-card">
        <div class="food-icon">${f.icon}</div>
        <div class="food-info">
          <div class="food-name">${f.name}</div>
          <div class="food-cat">${f.cat || 'Custom'}</div>
        </div>
        <div class="food-kcal">${f.kcal}<small> kcal</small></div>
        <button class="remove-btn" onclick="removeFood(${i})" title="Remove">✕</button>
      </div>`
    ).join('');
  }

  // Suggestions
  updateSuggestions(total, remain);
}

// ---- Suggestions ----
function updateSuggestions(total, remain) {
  const card  = $('suggestCard');
  const emoji = $('suggestEmoji');
  const title = $('suggestTitle');
  const text  = $('suggestText');
  const chips = $('suggestChips');

  if (total === 0) {
    card.className    = 'suggest-card under';
    emoji.textContent = '💡';
    title.textContent = 'Start tracking to get suggestions';
    text.textContent  = "Add foods above and we'll give you personalized recommendations based on your calorie goal.";
    chips.innerHTML   = '';
    return;
  }

  const pct = total / goal;

  if (pct < 0.5) {
    card.className    = 'suggest-card under';
    emoji.textContent = '😊';
    title.textContent = 'Good start — you need more fuel!';
    text.textContent  = `You've consumed ${total} kcal — only ${Math.round(pct * 100)}% of your goal. Add some hearty, nutritious foods to reach your energy target.`;
    chips.innerHTML   = makeChips(['Grilled Chicken (100g)', 'Steamed Rice (1 cup)', 'Boiled Egg (1)', 'Banana (medium)', 'Oatmeal (1 cup)', 'Avocado (half)']);
  } else if (pct < 0.85) {
    card.className    = 'suggest-card under';
    emoji.textContent = '🌿';
    title.textContent = 'On track — keep it balanced!';
    text.textContent  = `Great progress! You have about ${remain} kcal left. Try adding proteins or fiber-rich foods to feel fuller and stay on track.`;
    chips.innerHTML   = makeChips(['Tuna (100g)', 'Mixed Salad (1 cup)', 'Broccoli (1 cup)', 'Apple (medium)', 'Yogurt (150g)', 'Strawberries (1 cup)']);
  } else if (pct <= 1.05) {
    card.className    = 'suggest-card good';
    emoji.textContent = '🎯';
    title.textContent = `Almost at your ${goal} kcal goal!`;
    text.textContent  = `Excellent! You're very close to your daily goal. If you need a little something, go for low-calorie options.`;
    chips.innerHTML   = makeChips(['Mixed Salad (1 cup)', 'Coffee (black)', 'Carrot (medium)', 'Watermelon (1 cup)', 'Strawberries (1 cup)']);
  } else {
    card.className    = 'suggest-card over';
    emoji.textContent = '⚠️';
    title.textContent = 'Over your calorie goal!';
    text.textContent  = `You've exceeded your goal by ${Math.abs(remain)} kcal. Consider lighter options for the rest of the day — or a short walk to balance things out! 🚶`;
    chips.innerHTML   = makeChips(['Mixed Salad (1 cup)', 'Watermelon (1 cup)', 'Coffee (black)', 'Carrot (medium)', 'Broccoli (1 cup)']);
  }
}

function makeChips(names) {
  return names.map(n => {
    const f = FOODS.find(x => x.name === n);
    if (!f) return '';
    const idx = FOODS.indexOf(f);
    return `<span class="suggest-chip" onclick="addFood(${idx})">
      ${f.icon} ${f.name.split('(')[0].trim()}
      <b style="opacity:.6;font-size:11px">${f.kcal}k</b>
    </span>`;
  }).join('');
}

// ---- Goal input ----
$('goalInput').addEventListener('input', function () {
  const v = parseInt(this.value);
  if (v >= 500 && v <= 5000) {
    goal = v;
    render();
  }
});

// ---- Init ----
renderCategories();
render();
