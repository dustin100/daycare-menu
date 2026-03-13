// ── Constants ──

const DAY_NAMES = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Reference date used to anchor the 4-week menu rotation. */
const REFERENCE_DATE = new Date(2026, 2, 9); // March 9, 2026

/** The menu number that applies to the reference week. */
const REFERENCE_MENU = 1;

/** Breakpoint (px) below which the app defaults to day view. */
const MOBILE_BREAKPOINT = 600;

// ── Menu Data ──

/** @type {Record<number, Record<string, MealSet>>} */
const MENUS = Object.freeze({
  1: {
    monday: {
      morning: "Mini Croissants with Cream Cheese",
      lunch: "Three Cheese Macaroni with Tuna & Baby Carrots, Whole Wheat Bread Slices, Steam Carrots, Seasonal Fruit",
      snack: "Seasonal Fruit",
      lateSnack: "Banana Bread",
    },
    tuesday: {
      morning: "Apples with Cheese",
      lunch: "Chicken Strips & Creamy Mash Potatoes, Whole Wheat Bread Slices, Sweet Corn, Seasonal Fruit",
      snack: "Cheese & Crackers",
      lateSnack: "Veggies Dip",
    },
    wednesday: {
      morning: "Hot Cereal (Oatmeal)",
      lunch: "Chicken Chow Mein with Mixed Vegs, Whole Wheat Bread Slices, Seasonal Fruit",
      snack: "Seasonal Fruit",
      lateSnack: "Yogurt",
    },
    thursday: {
      morning: "Banana Slices",
      lunch: "Meatloaf & Spinach Rice with Vegs, Whole Wheat Bread Slices, Steam Celery, Seasonal Fruit",
      snack: "Berry Muffins",
      lateSnack: "Cheese Slice with Crackers",
    },
    friday: {
      morning: "Cheerios with Raisins",
      lunch: "Spaghetti with Zesty Meat Sauce & Mixed Vegs, Whole Wheat Bread Slices, Cucumber Coins, Seasonal Fruit",
      snack: "Seasonal Fruit",
      lateSnack: "Carrot Muffin",
    },
  },
  2: {
    monday: {
      morning: "Scrambled Eggs with Spinach & Cheese Toast",
      lunch: "Cheese & Spinach Tortellini with Ground Beef, Whole Wheat Bread Slices, Cucumber Coins, Seasonal Fruit",
      snack: "Banana Bread",
      lateSnack: "Fruit Yogurt",
    },
    tuesday: {
      morning: "Mini Blueberry Muffins",
      lunch: "Tuna Casserole with Egg Noodle, Caesar Salad, Whole Wheat Bread Slices, Tomato Wedges, Seasonal Fruit",
      snack: "Rice Cakes with Seasonal Fruit & Cream Cheese",
      lateSnack: "Seasonal Fruit",
    },
    wednesday: {
      morning: "Seasonal Fruit with Whole Wheat Waffles",
      lunch: "Meat Burritos or Bean Tortillas, Tomato & Cucumber, Garden Salad with Italian Dressing, Whole Wheat Bread Slices, Seasonal Fruit",
      snack: "Croissant with Cheese",
      lateSnack: "Blueberry Muffins",
    },
    thursday: {
      morning: "English Muffins with Cheddar Cheese Slices",
      lunch: "Teriyaki Chicken with Rice & Peas, Whole Wheat Bread Slices & Garden Salad, Seasonal Fruit",
      snack: "Mini Apple Muffins",
      lateSnack: "Mini Croissants",
    },
    friday: {
      morning: "Cheerios with Raisins",
      lunch: "Chicken Strips, Potato Wedges & Corn, Carrot Sticks, Seasonal Fruit",
      snack: "Bagel with Cream Cheese",
      lateSnack: "Rice Cakes with Cheese",
    },
  },
  3: {
    monday: {
      morning: "Seasonal Fruit",
      lunch: "Salmon Stew with White Rice, Whole Wheat Bread Slices, Tomato, Seasonal Fruit",
      snack: "Seasonal Fruit with Cheese",
      lateSnack: "Mini Croissants",
    },
    tuesday: {
      morning: "Scrambled Eggs with Whole Wheat Toast",
      lunch: "Chicken Burger with Lettuce & Tomato, Whole Wheat Bread Slices, Seasonal Fruit",
      snack: "English Muffins & Cream Cheese",
      lateSnack: "Cheerios with Raisins",
    },
    wednesday: {
      morning: "Toast Raisin Bread with Cottage Cheese",
      lunch: "Chinese Chicken Fried Rice with Mixed Vegs, Whole Wheat Bread Slices, Seasonal Fruit",
      snack: "Seasonal Fruit",
      lateSnack: "Fruit Yogurt",
    },
    thursday: {
      morning: "Spinach & Cheese Omelette Toast & Tomato Slice",
      lunch: "Penne with Meat Sauce & Mixed Vegs, Whole Wheat Bread Slices, Steam Carrots, Seasonal Fruit",
      snack: "Variety Flavoured Yogurt",
      lateSnack: "Goldfish & Fresh Seasonal Fruit",
    },
    friday: {
      morning: "Mini Bagels with Cream Cheese",
      lunch: "Shepherd's Pie with Ground Beef & Mixed Vegs, Whole Wheat Bread Slices, Celery Stick, Seasonal Fruit",
      snack: "Seasonal Fruit",
      lateSnack: "Cheese & Crackers",
    },
  },
  4: {
    monday: {
      morning: "French Toast with Seasonal Fruit",
      lunch: "Homemade Pizza with Red Peppers & Grilled Chicken, Garden Salad with Italian Dressing, Seasonal Fruit",
      snack: "Fruit Yogurt, Seasonal Fruit",
      lateSnack: "Seasonal Fruit",
    },
    tuesday: {
      morning: "Toasted Raisin Bread with Cottage Cheese",
      lunch: "Spaghetti with Zesty Meat Sauce & Mixed Vegs, Cucumber Slices, Whole Wheat Bread, Seasonal Fruit",
      snack: "Mini Croissants with Cream Cheese",
      lateSnack: "Fruit Yogurt",
    },
    wednesday: {
      morning: "English Muffin with Cheddar Cheese Slice & Seasonal Fruit",
      lunch: "Chicken Stew with Potatoes, Carrots & Rice, Steamed Celery Sticks, Whole Wheat Bread Slices, Seasonal Fruit",
      snack: "Melba Toast with Apple Sauce",
      lateSnack: "Mini Croissants with Cheese",
    },
    thursday: {
      morning: "Blueberry Pancake with Seasonal Fruit",
      lunch: "Lemon Fish with Macaroni Salad & Corn, Whole Wheat Bread Slices, Tomato Rings, Seasonal Fruit",
      snack: "Mini Banana Muffin",
      lateSnack: "Cheese Slice with Crackers",
    },
    friday: {
      morning: "Cheerios with Seasonal Fruit",
      lunch: "Spinach & Cheese Meat Lasagna, Caesar Salad, Whole Wheat Bread Slices, Sweet Corn, Seasonal Fruit",
      snack: "Mini Bagel with Cream Cheese",
      lateSnack: "Rice Cakes with Cheese",
    },
  },
});

// ═══════════════════════════════════════════════════════════════
// Date Helpers
// ═══════════════════════════════════════════════════════════════

/**
 * Returns the Sunday that starts the week containing the given date.
 * @param {Date} date - Any date within the target week.
 * @returns {Date} The Sunday at 00:00:00.
 */
function getWeekStart(date) {
  const result = new Date(date);
  result.setDate(result.getDate() - result.getDay());
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Calculates the number of whole weeks between two dates.
 * @param {Date} earlier - The earlier date.
 * @param {Date} later   - The later date.
 * @returns {number} Signed number of weeks (positive if later > earlier).
 */
function weeksBetween(earlier, later) {
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const startA = getWeekStart(earlier).getTime();
  const startB = getWeekStart(later).getTime();
  return Math.round((startB - startA) / msPerWeek);
}

/**
 * Determines which menu number (1–4) applies to a given date.
 * @param {Date} date - The target date.
 * @returns {number} Menu number between 1 and 4.
 */
function getMenuForDate(date) {
  const diff = weeksBetween(REFERENCE_DATE, date);
  const index = ((diff % 4) + 4) % 4; // always 0–3
  return index + REFERENCE_MENU;
}

/**
 * Retrieves the meal data for a specific date.
 * Returns null for weekends (no meals scheduled).
 * @param {Date} date - The target date.
 * @returns {{ meals: MealSet, menuNum: number } | null}
 */
function getMealsForDate(date) {
  const dayIndex = date.getDay();
  if (dayIndex === 0 || dayIndex === 6) return null;

  const dayName = DAY_NAMES[dayIndex];
  const menuNum = getMenuForDate(date);
  return { meals: MENUS[menuNum][dayName], menuNum };
}

/**
 * Checks whether a date is today.
 * @param {Date} date - The date to check.
 * @returns {boolean}
 */
function isToday(date) {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

/**
 * Formats a date as a short label like "Mar 9".
 * @param {Date} date - The date to format.
 * @returns {string}
 */
function formatShort(date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/**
 * Truncates a string to a maximum length, appending an ellipsis if needed.
 * @param {string} text      - The source string.
 * @param {number} maxLength - Maximum character count before truncation.
 * @returns {string}
 */
function truncate(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
}

/**
 * Extracts the main dish from a lunch description (text before the first comma).
 * @param {string} lunchText - Full lunch description.
 * @returns {string}
 */
function extractMainDish(lunchText) {
  if (!lunchText) return "";
  return lunchText.split(",")[0];
}

// ═══════════════════════════════════════════════════════════════
// Application State
// ═══════════════════════════════════════════════════════════════

/** @type {'month' | 'week' | 'day'} */
let currentView = window.innerWidth < MOBILE_BREAKPOINT ? "day" : "month";

/** The currently focused date for navigation. */
let currentDate = new Date();

// ── DOM References ──

const contentEl = document.getElementById("calendarContent");
const labelEl = document.getElementById("currentLabel");

// ═══════════════════════════════════════════════════════════════
// Rendering — Shared
// ═══════════════════════════════════════════════════════════════

/**
 * Dispatches rendering to the active view and triggers the fade-in animation.
 */
function render() {
  const renderers = {
    month: renderMonth,
    week: renderWeek,
    day: renderDay,
  };

  contentEl.innerHTML = "";
  renderers[currentView]();

  // Re-trigger fade animation
  contentEl.classList.remove("fade-in");
  void contentEl.offsetWidth; // force reflow
  contentEl.classList.add("fade-in");
}

// ═══════════════════════════════════════════════════════════════
// Rendering — Month View
// ═══════════════════════════════════════════════════════════════

/**
 * Renders the full month grid with day headers, cells, and legend.
 */
function renderMonth() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  labelEl.textContent = `${MONTH_NAMES[month]} ${year}`;

  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month + 1, 0);
  const leadingBlanks = firstOfMonth.getDay();

  // Day-of-week headers
  const headers = DAY_LABELS.map(
    (label) => `<div class="day-header">${label}</div>`
  ).join("");

  // Previous month overflow cells
  const prevMonthEnd = new Date(year, month, 0);
  const prevCells = Array.from({ length: leadingBlanks }, (_, index) => {
    const dayNum = prevMonthEnd.getDate() - (leadingBlanks - 1 - index);
    const date = new Date(year, month - 1, dayNum);
    return buildMonthCell(date, true);
  }).join("");

  // Current month cells
  const currentCells = Array.from({ length: lastOfMonth.getDate() }, (_, index) => {
    const date = new Date(year, month, index + 1);
    return buildMonthCell(date, false);
  }).join("");

  // Trailing cells to complete the grid row
  const totalCells = leadingBlanks + lastOfMonth.getDate();
  const trailingCount = (7 - (totalCells % 7)) % 7;
  const trailingCells = Array.from({ length: trailingCount }, (_, index) => {
    const date = new Date(year, month + 1, index + 1);
    return buildMonthCell(date, true);
  }).join("");

  const legend = `
    <div class="legend">
      <div class="legend-item"><span class="meal-dot morning"></span> Morning</div>
      <div class="legend-item"><span class="meal-dot lunch"></span> Lunch</div>
      <div class="legend-item"><span class="meal-dot snack"></span> Snack</div>
      <div class="legend-item"><span class="meal-dot late-snack"></span> Late Snack</div>
      <div class="legend-item"><span class="menu-badge m1">Menu 1</span></div>
      <div class="legend-item"><span class="menu-badge m2">Menu 2</span></div>
      <div class="legend-item"><span class="menu-badge m3">Menu 3</span></div>
      <div class="legend-item"><span class="menu-badge m4">Menu 4</span></div>
    </div>`;

  contentEl.innerHTML = `
    <div class="month-grid">
      ${headers}${prevCells}${currentCells}${trailingCells}
    </div>
    ${legend}`;

  // Attach click → drill into day view
  contentEl.querySelectorAll(".month-cell[data-date]").forEach((cell) => {
    cell.addEventListener("click", () => {
      currentDate = new Date(cell.dataset.date);
      currentView = "day";
      syncActiveViewButton("day");
      render();
    });
  });
}

/**
 * Builds the HTML string for a single month-grid cell.
 * @param {Date}    date           - The date this cell represents.
 * @param {boolean} isOutsideMonth - Whether this date falls outside the displayed month.
 * @returns {string} HTML string.
 */
function buildMonthCell(date, isOutsideMonth) {
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const today = isToday(date);
  const data = getMealsForDate(date);

  const classes = [
    "month-cell",
    isOutsideMonth && "outside",
    today && "today",
    isWeekend && "weekend",
  ]
    .filter(Boolean)
    .join(" ");

  const badge =
    data && !isOutsideMonth
      ? ` <span class="menu-badge m${data.menuNum}">M${data.menuNum}</span>`
      : "";

  const preview =
    data?.meals && !isOutsideMonth
      ? `<div class="meal-preview">
          <div class="meal-line"><span class="meal-dot morning"></span> ${truncate(data.meals.morning, 22)}</div>
          <div class="meal-line"><span class="meal-dot lunch"></span> ${truncate(extractMainDish(data.meals.lunch), 22)}</div>
          <div class="meal-line"><span class="meal-dot snack"></span> ${truncate(data.meals.snack, 22)}</div>
          <div class="meal-line"><span class="meal-dot late-snack"></span> ${truncate(data.meals.lateSnack, 22)}</div>
        </div>`
      : "";

  return `
    <div class="${classes}" data-date="${date.toISOString()}">
      <div class="date-num">${date.getDate()}${badge}</div>
      ${preview}
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// Rendering — Week View
// ═══════════════════════════════════════════════════════════════

/**
 * Renders the 5-day (Mon–Fri) week view with meal cards.
 */
function renderWeek() {
  const weekStart = getWeekStart(currentDate);
  const monday = new Date(weekStart);
  monday.setDate(monday.getDate() + 1);

  const friday = new Date(monday);
  friday.setDate(friday.getDate() + 4);

  const menuNum = getMenuForDate(monday);
  labelEl.textContent = `${formatShort(monday)} – ${formatShort(friday)}`;

  const weekCards = Array.from({ length: 5 }, (_, offset) => {
    const date = new Date(monday);
    date.setDate(date.getDate() + offset);
    return buildWeekCard(date);
  }).join("");

  contentEl.innerHTML = `
    <div class="week-menu-label">
      <span class="menu-badge m${menuNum}">Menu ${menuNum}</span>
    </div>
    <div class="week-grid">${weekCards}</div>`;

  // Attach click → drill into day view
  contentEl.querySelectorAll(".week-card[data-date]").forEach((card) => {
    card.addEventListener("click", () => {
      currentDate = new Date(card.dataset.date);
      currentView = "day";
      syncActiveViewButton("day");
      render();
    });
  });
}

/**
 * Builds the HTML for a single week-view card.
 * @param {Date} date - The weekday date.
 * @returns {string} HTML string.
 */
function buildWeekCard(date) {
  const data = getMealsForDate(date);
  const today = isToday(date);
  const meals = data?.meals;

  const mealSections = meals
    ? [
        buildMealSection("Morning", "morning", meals.morning),
        buildMealSection("Lunch", "lunch", meals.lunch),
        buildMealSection("Snack", "snack", meals.snack),
        buildMealSection("Late Snack", "late-snack", meals.lateSnack),
      ].join("")
    : "";

  return `
    <div class="week-card${today ? " today" : ""}" data-date="${date.toISOString()}">
      <div class="week-card-header">
        <span class="day-name">${DAY_LABELS[date.getDay()]}</span>
        <span class="day-date">${date.getDate()}</span>
      </div>
      <div class="week-card-body">${mealSections}</div>
    </div>`;
}

/**
 * Builds one meal section inside a week card.
 * @param {string} labelText - Display name for the meal (e.g. "Morning").
 * @param {string} cssClass  - CSS modifier class (e.g. "morning", "late-snack").
 * @param {string} mealText  - Description of the meal.
 * @returns {string} HTML string.
 */
function buildMealSection(labelText, cssClass, mealText) {
  return `
    <div class="meal-section">
      <div class="meal-label ${cssClass}">● ${labelText}</div>
      <div class="meal-text">${mealText || "—"}</div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// Rendering — Day View
// ═══════════════════════════════════════════════════════════════

/** @type {Array<{ key: string, label: string, emoji: string, cssClass: string }>} */
const MEAL_SLOTS = [
  { key: "morning",   label: "Morning",    emoji: "🌅", cssClass: "morning-card" },
  { key: "lunch",     label: "Lunch",      emoji: "🥗", cssClass: "lunch-card" },
  { key: "snack",     label: "Snack",      emoji: "🍎", cssClass: "snack-card" },
  { key: "lateSnack", label: "Late Snack", emoji: "🧁", cssClass: "late-snack-card" },
];

/**
 * Renders the single-day detail view with large meal cards.
 */
function renderDay() {
  const data = getMealsForDate(currentDate);
  const dayLabel = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  labelEl.textContent = dayLabel;

  const subtitle = data
    ? `<div class="sub"><span class="menu-badge m${data.menuNum}" style="font-size:0.75rem;padding:4px 12px;">Menu ${data.menuNum}</span></div>`
    : `<div class="sub">Weekend — No meals scheduled</div>`;

  const body = data?.meals
    ? MEAL_SLOTS.map(({ key, label, emoji, cssClass }) => `
        <div class="day-meal-card ${cssClass}">
          <h3>${emoji} ${label}</h3>
          <p>${data.meals[key] || "—"}</p>
        </div>`
      ).join("") +
      `<p class="meals-footer">All meals served with Milk/Water. All vegetables steamed soft.</p>`
    : `<div class="no-meals">No meals on weekends</div>`;

  contentEl.innerHTML = `
    <div class="day-view">
      <div class="day-view-header">
        <h2>${dayLabel}</h2>
        ${subtitle}
      </div>
      ${body}
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// Navigation
// ═══════════════════════════════════════════════════════════════

/**
 * Highlights the active view button and deactivates the others.
 * @param {string} view - The view name to activate ("month", "week", or "day").
 */
function syncActiveViewButton(view) {
  document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
}

/**
 * Advances or rewinds the calendar by one unit based on the current view.
 * @param {number} direction - +1 for forward, -1 for backward.
 */
function navigate(direction) {
  const shifts = {
    month: () => currentDate.setMonth(currentDate.getMonth() + direction),
    week: () => currentDate.setDate(currentDate.getDate() + 7 * direction),
    day: () => currentDate.setDate(currentDate.getDate() + direction),
  };
  shifts[currentView]();
  render();
}

// ── View Switcher ──
document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentView = btn.dataset.view;
    syncActiveViewButton(currentView);
    render();
  });
});

// ── Prev / Next ──
document.getElementById("prev").addEventListener("click", () => navigate(-1));
document.getElementById("next").addEventListener("click", () => navigate(1));

// ── Today ──
document.getElementById("todayBtn").addEventListener("click", () => {
  currentDate = new Date();
  render();
});

// ═══════════════════════════════════════════════════════════════
// Init
// ═══════════════════════════════════════════════════════════════

syncActiveViewButton(currentView);
render();
