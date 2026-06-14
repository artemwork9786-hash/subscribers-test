'use strict';

// ========================================
// DATA
// ========================================
const surnames = [
  'Иванов',
  'Петров',
  'Сидоров',
  'Смирнов',
  'Кузнецов',
  'Попов',
  'Васильев',
  'Зайцев',
  'Соколов',
  'Михайлов',
  'Фёдоров',
  'Морозов',
  'Волков',
  'Алексеев',
  'Лебедев',
  'Семёнов',
  'Егоров',
  'Павлов',
  'Козлов',
  'Степанов',
  'Николаев',
  'Орлов',
  'Андреев',
  'Макаров',
  'Никитин',
  'Захаров',
  'Тимофеев',
  'Григорьев',
  'Тарасов',
  'Белов',
  'Комаров',
  'Давыдов',
  'Баранов',
  'Гусев',
  'Кириллов',
  'Королёв',
  'Марков',
  'Матвеев',
  'Филиппов',
  'Чернов',
  'Шестаков',
  'Щербаков',
  'Назаров',
  'Кудрявцев',
  'Борисов',
  'Тихонов',
  'Горбунов',
  'Осипов',
  'Бычков',
  'Ларин',
  'Карпов',
  'Миронов',
  'Калинин',
  'Маслов',
  'Антонов',
  'Лавров',
  'Харитонов',
  'Абрамов',
  'Горшков',
  'Зуев',
  'Денисов',
  'Савельев',
  'Сафонов',
  'Медведев',
  'Беляев',
  'Виноградов',
  'Крылов',
  'Трофимов',
  'Меркушев',
  'Блинов',
  'Дорофеев',
  'Ершов',
  'Кондратьев',
  'Селезнёв',
  'Лопатин',
  'Панфилов',
  'Парфёнов',
  'Сурков',
  'Терентьев',
  'Уваров',
  'Фадеев',
  'Хохлов',
  'Цветков',
  'Чистяков',
  'Шаров',
  'Юдин',
  'Яковлев',
  'Архипов',
  'Бирюков',
  'Галкин',
  'Дементьев',
  'Жуков',
  'Зиновьев',
  'Исаев',
  'Кабанов',
  'Лыткин',
  'Майоров',
  'Нечаев',
  'Овчинников',
  'Прохоров',
];

const firstNames = [
  'Александр',
  'Алексей',
  'Анатолий',
  'Андрей',
  'Антон',
  'Аркадий',
  'Арсений',
  'Артём',
  'Борис',
  'Вадим',
  'Валентин',
  'Валерий',
  'Василий',
  'Виктор',
  'Виталий',
  'Владимир',
  'Владислав',
  'Вячеслав',
  'Геннадий',
  'Георгий',
  'Григорий',
  'Даниил',
  'Денис',
  'Дмитрий',
  'Евгений',
  'Егор',
  'Иван',
  'Игорь',
  'Илья',
  'Кирилл',
  'Константин',
  'Лев',
  'Леонид',
  'Максим',
  'Марат',
  'Марк',
  'Матвей',
  'Михаил',
  'Никита',
  'Николай',
  'Олег',
  'Павел',
  'Пётр',
  'Роман',
  'Руслан',
  'Сергей',
  'Станислав',
  'Степан',
  'Тимофей',
  'Юрий',
];

const patronymics = [
  'Александрович',
  'Алексеевич',
  'Анатольевич',
  'Андреевич',
  'Антонович',
  'Борисович',
  'Вадимович',
  'Валентинович',
  'Валерьевич',
  'Васильевич',
  'Викторович',
  'Витальевич',
  'Владимирович',
  'Владиславович',
  'Вячеславович',
  'Геннадьевич',
  'Георгиевич',
  'Григорьевич',
  'Данилович',
  'Денисович',
  'Дмитриевич',
  'Евгеньевич',
  'Егорович',
  'Иванович',
  'Игоревич',
  'Ильич',
  'Кириллович',
  'Константинович',
  'Леонидович',
  'Максимович',
  'Матвеевич',
  'Михайлович',
  'Никитич',
  'Николаевич',
  'Олегович',
  'Павлович',
  'Петрович',
  'Романович',
  'Сергеевич',
  'Станиславович',
  'Степанович',
  'Тимофеевич',
  'Юрьевич',
  'Яковлевич',
];

const groups = [
  'ok.ru/group/70000048728056',
  'ok.ru/group/70000048728057',
  'ok.ru/group/70000048728058',
  'ok.ru/group/70000048728059',
  'ok.ru/group/70000048728060',
  'ok.ru/group/70000048728061',
  'ok.ru/group/70000048728062',
  'ok.ru/group/70000048728063',
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const d = new Date(s.getTime() + Math.random() * (e.getTime() - s.getTime()));
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return day + '.' + month + '.' + year;
}

function generateUsers(count) {
  const users = [];
  const usedIds = new Set();
  for (let i = 0; i < count; i++) {
    let id;
    do {
      id = Math.floor(Math.random() * 9000) + 1000;
    } while (usedIds.has(id));
    usedIds.add(id);

    const surname = randomItem(surnames);
    const firstName = randomItem(firstNames);
    const patronymic = randomItem(patronymics);
    const name = surname + ' ' + firstName + ' ' + patronymic;
    const accountId = Math.floor(Math.random() * 900000000000) + 100000000000;
    const accountLink = 'https://ok.ru/profile/' + accountId;
    const communityLink = randomItem(groups);
    const hasDog = Math.random() > 0.5;
    const logCount = Math.floor(Math.random() * 10) + 1;
    const dateSub = randomDate('2023-01-01', '2026-05-01');
    const dateUnsub = Math.random() > 0.7 ? randomDate('2025-06-01', '2026-06-01') : '';

    users.push({
      id: id,
      name: name,
      account: accountLink,
      community: communityLink,
      dog: hasDog,
      log: logCount,
      dateSub: dateSub,
      dateUnsub: dateUnsub,
    });
  }
  return users;
}

let allUsers = [];
let filteredUsers = [];

// Pagination state
let currentPage = 1;
let itemsPerPage = window.perPage || 1000;

// Load users from JSON
fetch('data/users.json')
  .then((response) => response.json())
  .then((data) => {
    allUsers = data.users;
    filteredUsers = allUsers.slice();
    resizeSubsCount(filteredUsers.length);
    renderTable();
  })
  .catch((error) => {
    console.error('Error loading users.json:', error);
    allUsers = generateUsers(105);
    filteredUsers = allUsers.slice();
    renderTable();
  });
let sortColumn = null;
let sortDirection = 'asc';
let deletedIds = new Set();

// Active checkbox filters
const checkboxFilters = {
  all: false,
  dogs: false,
  unsubscribed: false,
  forcedDeleted: false,
  addedToCommunity: false,
  transfer: false,
  noDuplicates: false,
};

// Dog filter toggle state (for header buttons Да/Нет)
let dogFilterActive = false;
let noDogFilterActive = false;

// Active toggle filters in header (removed - now static labels)

// ========================================
// HELPERS
// ========================================
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function compareDates(date1, date2) {
  // Формат дат: DD.MM.YYYY
  const d1Parts = date1.split('.');
  const d2Parts = date2.split('.');
  if (d1Parts.length !== 3 || d2Parts.length !== 3) return 0;

  const d1 = new Date(Number(d1Parts[2]), Number(d1Parts[1]) - 1, Number(d1Parts[0]));
  const d2 = new Date(Number(d2Parts[2]), Number(d2Parts[1]) - 1, Number(d2Parts[0]));

  if (d1 < d2) return -1;
  if (d1 > d2) return 1;
  return 0;
}

function startsWithAnyWord(text, query) {
  if (!query) return false;
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  // Проверяем с начала строки
  if (lower.indexOf(q) === 0) return true;
  // Разбиваем на слова и проверяем каждое
  const words = lower.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(q) === 0) return true;
  }
  return false;
}

function highlightMatch(text, query) {
  if (!query || query.length === 0) return escapeHtml(text);
  const q = query.toLowerCase();
  let result = '';
  const parts = text.split(/(\s+)/);
  for (let i = 0; i < parts.length; i++) {
    const word = parts[i];
    const wordLower = word.toLowerCase();
    const idx = wordLower.indexOf(q);
    if (idx === 0) {
      result +=
        '<span class="search-highlight">' +
        escapeHtml(word.slice(0, q.length)) +
        '</span>' +
        escapeHtml(word.slice(q.length));
    } else {
      result += escapeHtml(word);
    }
  }
  return result;
}

// ========================================
// RESIZE SUBS COUNT
// ========================================
function resizeSubsCount(count) {
  const el = document.getElementById('subscribersCount');
  if (!el) return;
  el.style.display = 'inline-flex';
  el.style.width = 'auto';
}

// ========================================
// RENDER TABLE
// ========================================
function renderTable() {
  const tbody = document.getElementById('tableBody');
  if (!tbody) return;

  const searchId = document.querySelector('[data-search="id"]');
  const searchName = document.querySelector('[data-search="name"]');
  const queryId = searchId ? searchId.value.trim() : '';
  const queryName = searchName ? searchName.value.trim() : '';

  // Get date filters
  const dateFromEl = document.getElementById('dateFrom');
  const dateToEl = document.getElementById('dateTo');
  const dateFrom = dateFromEl ? dateFromEl.getAttribute('data-date') : '';
  const dateTo = dateToEl ? dateToEl.getAttribute('data-date') : '';

  // Get perPage value
  const perPage = window.perPage || itemsPerPage;

  // Filter by search and dates
  filteredUsers = allUsers.filter(function (u) {
    const isDeleted = deletedIds.has(u.id);

    // Если активен фильтр "Принудительно удалённые" — показываем ТОЛЬКО их
    if (checkboxFilters.forcedDeleted) {
      if (!isDeleted) return false;
      // Для удалённых применяем ТОЛЬКО поиск и даты, игнорируем всё остальное
      const matchesId = !queryId || startsWithAnyWord(String(u.id), queryId);
      const matchesName = !queryName || startsWithAnyWord(u.name, queryName);
      // Суммарная фильтрация — ИЛИ между колонками
      const matchesSearch = matchesId || matchesName;
      const matchesDateFrom = !dateFrom || compareDates(u.dateSub, dateFrom) >= 0;
      const matchesDateTo = !dateTo || compareDates(u.dateSub, dateTo) <= 0;
      return matchesSearch && matchesDateFrom && matchesDateTo;
    } else {
      // Обычный режим — скрываем удалённых
      if (isDeleted) return false;
    }

    const matchesId = !queryId || startsWithAnyWord(String(u.id), queryId);
    const matchesName = !queryName || startsWithAnyWord(u.name, queryName);
    // Суммарная фильтрация — ИЛИ между колонками
    const matchesSearch = matchesId || matchesName;

    // Filter by dates (dateSub)
    const matchesDateFrom = !dateFrom || compareDates(u.dateSub, dateFrom) >= 0;
    const matchesDateTo = !dateTo || compareDates(u.dateSub, dateTo) <= 0;

    // Filter by dog toggle (Да / Нет) - header buttons
    if (dogFilterActive && !noDogFilterActive) {
      // Показываем только с собачкой
      if (!u.dog) return false;
    } else if (!dogFilterActive && noDogFilterActive) {
      // Показываем только без собачки
      if (u.dog) return false;
    }

    // Filter by other checkbox filters (только если не "Все")
    if (!checkboxFilters.all) {
      // Собачки
      if (checkboxFilters.dogs && !u.dog) return false;

      // Отписавшиеся (dateUnsub не пустой)
      if (checkboxFilters.unsubscribed && !u.dateUnsub) return false;

      // Добавлены в сообщество (есть community и не отписался)
      if (checkboxFilters.addedToCommunity && (!u.community || u.dateUnsub)) return false;

      // Переносить (log > 5)
      if (checkboxFilters.transfer && u.log <= 5) return false;
    }

    return matchesSearch && matchesDateFrom && matchesDateTo;
  });

  // Filter by noDuplicates (after all other filters, except forcedDeleted)
  if (checkboxFilters.noDuplicates && !checkboxFilters.all && !checkboxFilters.forcedDeleted) {
    const seenNames = new Set();
    filteredUsers = filteredUsers.filter(function (u) {
      if (seenNames.has(u.name)) return false;
      seenNames.add(u.name);
      return true;
    });
  }

  // Debug log
  console.log('renderTable:', {
    totalUsers: allUsers.length,
    filteredUsers: filteredUsers.length,
    deletedIds: Array.from(deletedIds),
    checkboxFilters: checkboxFilters,
    dogFilterActive: dogFilterActive,
    noDogFilterActive: noDogFilterActive,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
  });

  // Sort
  if (sortColumn) {
    filteredUsers.sort(function (a, b) {
      let valA, valB;
      if (sortColumn === 'id') {
        valA = a.id;
        valB = b.id;
      } else if (sortColumn === 'name') {
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
      } else if (sortColumn === 'account') {
        valA = a.account;
        valB = b.account;
      } else if (sortColumn === 'community') {
        valA = a.community;
        valB = b.community;
      } else if (sortColumn === 'dog') {
        valA = a.dog ? 1 : 0;
        valB = b.dog ? 1 : 0;
      } else if (sortColumn === 'log') {
        valA = a.log;
        valB = b.log;
      } else if (sortColumn === 'dateSub') {
        valA = a.dateSub;
        valB = b.dateSub;
      } else if (sortColumn === 'dateUnsub') {
        valA = a.dateUnsub || '';
        valB = b.dateUnsub || '';
      }
      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(start, end);

  let html = '';
  paginatedUsers.forEach(function (u, index) {
    const rowNum = start + index + 1;
    const dogLabel = u.dog ? 'Да' : 'Нет';
    const isDeleted = deletedIds.has(u.id);
    // Не добавляем класс table__row--deleted когда показываем удалённых через фильтр
    // Иначе CSS скроет их (display: none)
    const showDeletedFilter = checkboxFilters.forcedDeleted;
    const rowClass =
      isDeleted && !showDeletedFilter ? 'table__row table__row--deleted' : 'table__row';
    html += '<tr class="' + rowClass + '" data-id="' + u.id + '">';
    html +=
      '  <td class="table__cell table__cell--number"><span class="row-number">' +
      rowNum +
      '</span> <span class="row-id">' +
      highlightMatch(String(u.id), queryId) +
      '</span></td>';
    html +=
      '  <td class="table__cell table__cell--name">' + highlightMatch(u.name, queryName) + '</td>';
    html +=
      '  <td class="table__cell"><a href="' +
      escapeHtml(u.account) +
      '" class="table__cell--link" target="_blank">' +
      escapeHtml(u.account) +
      '</a></td>';
    html +=
      '  <td class="table__cell"><a href="' +
      escapeHtml(u.community) +
      '" class="table__cell--link" target="_blank">' +
      escapeHtml(u.community) +
      '</a></td>';
    html += '  <td class="table__cell table__cell--center" colspan="2">' + dogLabel + '</td>';
    html +=
      '  <td class="table__cell table__cell--number"><a href="javascript:void(0);" class="table__cell--link log-link" data-id="' +
      u.id +
      '">' +
      u.log +
      '</a></td>';
    html += '  <td class="table__cell">' + u.dateSub + '</td>';
    html += '  <td class="table__cell table__cell--center">' + (u.dateUnsub || '—') + '</td>';
    html +=
      '  <td class="table__cell table__cell--center"><button class="delete-btn" title="Удалить"><span class="vi-delete has-static-icon"></span></button></td>';
    html += '</tr>';
  });

  tbody.innerHTML = html;

  // Update subscribers count
  const countEl = document.getElementById('subscribersCount');
  if (countEl) {
    countEl.textContent = filteredUsers.length;
    resizeSubsCount(filteredUsers.length);
  }

  // Update date filter active state
  if (dateFromEl) {
    if (dateFromEl.getAttribute('data-date')) {
      dateFromEl.classList.add('filter-item__date--active');
    } else {
      dateFromEl.classList.remove('filter-item__date--active');
    }
  }
  if (dateToEl) {
    if (dateToEl.getAttribute('data-date')) {
      dateToEl.classList.add('filter-item__date--active');
    } else {
      dateToEl.classList.remove('filter-item__date--active');
    }
  }

  // Re-render static icons for new rows
  renderStaticIcons(tbody);

  // Re-attach events
  attachTableEvents();

  // Render pagination
  renderPagination(totalPages);
}

// ========================================
// RENDER PAGINATION
// ========================================
function renderPagination(totalPages) {
  const paginationEl = document.querySelector('.pagination');
  if (!paginationEl) return;

  // Clear existing items
  const items = paginationEl.querySelectorAll('.pagination__item');
  items.forEach(function (item) {
    item.remove();
  });

  if (totalPages === 0) {
    const firstBtn = createPaginationButton(true, 'First');
    const prevBtn = createPaginationButton(true, getPrevIcon());
    paginationEl.appendChild(prevBtn);
    paginationEl.appendChild(firstBtn);
    return;
  }

  // Helper to create page button
  function createPaginationButton(isDisabled, content, isPage = false, pageNum = 0) {
    const span = document.createElement('span');
    span.className = 'pagination__item';
    if (isDisabled) {
      span.classList.add('pagination__item--disabled');
    }
    if (isPage && pageNum === currentPage) {
      span.classList.add('pagination__item--active');
    }
    if (isPage) {
      span.dataset.page = pageNum;
    }
    if (typeof content === 'string') {
      span.textContent = content;
    } else {
      span.appendChild(content);
    }
    return span;
  }

  // Get prev/next icons
  function getPrevIcon() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '30');
    svg.setAttribute('height', '30');
    svg.setAttribute('viewBox', '0 0 30 30');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      'M6.04504 15.0003L13.8038 22.7591L15.5713 20.9916L9.58004 15.0003L15.5713 9.00908L13.8038 7.24158L6.04504 15.0003ZM13.1075 15.0003L20.8663 22.7591L22.6338 20.9916L16.6425 15.0003L22.6338 9.00908L20.8663 7.24158L13.1075 15.0003Z',
    );
    path.setAttribute('fill', '#D7D7D7');
    svg.appendChild(path);
    return svg;
  }

  function getNextIcon() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '30');
    svg.setAttribute('height', '30');
    svg.setAttribute('viewBox', '0 0 30 30');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      'M23.955 15.0003L16.1962 22.7591L14.4287 20.9916L20.42 15.0003L14.4287 9.00908L16.1962 7.24158L23.955 15.0003ZM16.8925 15.0003L9.1337 22.7591L7.3662 20.9916L13.3575 15.0003L7.3662 9.00908L9.1337 7.24158L16.8925 15.0003Z',
    );
    path.setAttribute('fill', '#62560E');
    svg.appendChild(path);
    return svg;
  }

  // Helper for ellipsis
  function createEllipsis() {
    const span = document.createElement('span');
    span.className = 'pagination__item';
    span.textContent = '...';
    return span;
  }

  // First page button
  const isFirstPage = currentPage === 1;
  const firstBtn = createPaginationButton(isFirstPage, 'First');
  paginationEl.appendChild(firstBtn);

  // Prev button
  const prevBtn = createPaginationButton(isFirstPage, getPrevIcon());
  paginationEl.appendChild(prevBtn);

  // Smart pagination logic - show limited pages
  if (totalPages <= 7) {
    // Show all pages if 7 or less
    for (let i = 1; i <= totalPages; i++) {
      paginationEl.appendChild(createPaginationButton(false, String(i), true, i));
    }
  } else {
    // Show: 1 ... [current-1] current [current+1] ... last
    // Always show first page
    paginationEl.appendChild(createPaginationButton(false, '1', true, 1));

    if (currentPage <= 4) {
      // Near start: 1 2 3 4 5 ... last
      for (let i = 2; i <= 5; i++) {
        paginationEl.appendChild(createPaginationButton(false, String(i), true, i));
      }
      paginationEl.appendChild(createEllipsis());
      paginationEl.appendChild(createPaginationButton(false, String(totalPages), true, totalPages));
    } else if (currentPage >= totalPages - 3) {
      // Near end: 1 ... last-4 last-3 last-2 last-1 last
      paginationEl.appendChild(createEllipsis());
      for (let i = totalPages - 4; i <= totalPages; i++) {
        paginationEl.appendChild(createPaginationButton(false, String(i), true, i));
      }
    } else {
      // In middle: 1 ... current-1 current current+1 ... last
      paginationEl.appendChild(createEllipsis());
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        paginationEl.appendChild(createPaginationButton(false, String(i), true, i));
      }
      paginationEl.appendChild(createEllipsis());
      paginationEl.appendChild(createPaginationButton(false, String(totalPages), true, totalPages));
    }
  }

  // Next button
  const isLastPage = currentPage === totalPages;
  const nextBtn = createPaginationButton(isLastPage, getNextIcon());
  nextBtn.classList.add('pagination__item--link');
  paginationEl.appendChild(nextBtn);

  // Last page button
  const lastBtn = createPaginationButton(isLastPage, 'Last');
  paginationEl.appendChild(lastBtn);

  // Create tooltip element
  var pagTooltip = document.getElementById('paginationTooltip');
  if (!pagTooltip) {
    pagTooltip = document.createElement('div');
    pagTooltip.id = 'paginationTooltip';
    pagTooltip.className = 'pagination-tooltip';
    document.body.appendChild(pagTooltip);
  }

  function getTooltipText(item) {
    var text = item.textContent.trim();
    if (text === 'First') return 'Первая страница';
    if (text === 'Last') return 'Последняя страница';
    if (text === '...') return '';
    // Check if it's prev icon
    var path = item.querySelector('path');
    if (path && path.getAttribute('d').startsWith('M6.045')) return 'Предыдущая страница';
    if (path && path.getAttribute('d').startsWith('M23.955')) return 'Следующая страница';
    var num = parseInt(text);
    if (!isNaN(num)) return 'Страница ' + num;
    return '';
  }

  // Attach click events + tooltip
  paginationEl.querySelectorAll('.pagination__item').forEach(function (item) {
    // Tooltip on hover
    item.addEventListener('mouseenter', function (e) {
      var tipText = getTooltipText(this);
      if (!tipText) {
        pagTooltip.classList.remove('is-visible');
        return;
      }
      pagTooltip.textContent = tipText;
      var rect = this.getBoundingClientRect();
      var top = rect.bottom + 4;
      var left = rect.left + rect.width / 2 - pagTooltip.offsetWidth / 2;
      if (left < 4) left = 4;
      pagTooltip.style.top = top + 'px';
      pagTooltip.style.left = left + 'px';
      pagTooltip.classList.add('is-visible');
    });

    item.addEventListener('mouseleave', function () {
      pagTooltip.classList.remove('is-visible');
    });

    if (item.classList.contains('pagination__item--disabled')) {
      return;
    }

    item.addEventListener('click', function () {
      pagTooltip.classList.remove('is-visible');
      var pageNum = parseInt(this.dataset.page);
      if (pageNum && !isNaN(pageNum)) {
        currentPage = pageNum;
        renderTable();
      } else if (this.textContent === 'First') {
        if (currentPage > 1) {
          currentPage = 1;
          renderTable();
        }
      } else if (this.textContent === 'Last') {
        if (currentPage < totalPages) {
          currentPage = totalPages;
          renderTable();
        }
      } else if (this.innerHTML.includes('svg')) {
        // Check if it's prev or next icon
        var path = this.querySelector('path');
        if (path && path.getAttribute('d').startsWith('M6.045')) {
          // Prev
          if (currentPage > 1) {
            currentPage--;
            renderTable();
          }
        } else if (path && path.getAttribute('d').startsWith('M23.955')) {
          // Next
          if (currentPage < totalPages) {
            currentPage++;
            renderTable();
          }
        }
      }
    });
  });
}

// ========================================
// TABLE EVENTS
// ========================================
function attachTableEvents() {
  // Delete buttons
  document.querySelectorAll('#tableBody .delete-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const row = this.closest('tr');
      if (row) {
        const id = parseInt(row.getAttribute('data-id'));

        // Если фильтр "Принудительно удалённые" активен — восстанавливаем
        if (checkboxFilters.forcedDeleted && deletedIds.has(id)) {
          deletedIds.delete(id);
          row.classList.remove('table__row--deleted');
          setTimeout(function () {
            row.style.display = 'none';
            renderTable();
          }, 300);
        } else if (!deletedIds.has(id)) {
          // Обычное удаление
          deletedIds.add(id);
          row.classList.add('table__row--deleted');
          setTimeout(function () {
            row.style.display = 'none';
            renderTable();
          }, 300);
        }
      }
    });
  });

  // Log links - open history tab
  document.querySelectorAll('#tableBody .log-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('data-id');
      openHistoryTab(id);
    });
  });
}

// ========================================
// DOG FILTER TOGGLE
// ========================================
(function initDogFilterToggle() {
  const daFilter = document.querySelector('.dog-filter-da');
  const netFilter = document.querySelector('.dog-filter-net');

  if (!daFilter || !netFilter) return;

  daFilter.addEventListener('click', function (e) {
    e.stopPropagation();

    // Если уже активен — выключаем, иначе включаем
    if (dogFilterActive) {
      dogFilterActive = false;
      this.classList.remove('dog-filter-da--active');
    } else {
      dogFilterActive = true;
      noDogFilterActive = false;
      this.classList.add('dog-filter-da--active');
      netFilter.classList.remove('dog-filter-net--active');
    }

    currentPage = 1; // Сброс на первую страницу
    renderTable();
  });

  netFilter.addEventListener('click', function (e) {
    e.stopPropagation();

    // Если уже активен — выключаем, иначе включаем
    if (noDogFilterActive) {
      noDogFilterActive = false;
      this.classList.remove('dog-filter-net--active');
    } else {
      noDogFilterActive = true;
      dogFilterActive = false;
      this.classList.add('dog-filter-net--active');
      daFilter.classList.remove('dog-filter-da--active');
    }

    currentPage = 1; // Сброс на первую страницу
    renderTable();
  });
})();

// ========================================
// HISTORY TAB
// ========================================
function openHistoryTab(id) {
  const win = window.open('', '_blank');
  if (!win) return;

  const states = [
    'Добавлено в сообщество',
    'Собачка',
    'Обычный режим без собачки',
    'Выход из сообщества (отписался)',
  ];
  const dates = ['07.04.2026', '10.04.2026', '11.04.2026', '12.04.2026'];

  let rows = '';
  for (let i = 0; i < states.length; i++) {
    rows += '<tr class="history-table__row">';
    rows += '<td class="history-table__cell">' + states[i] + '</td>';
    rows += '<td class="history-table__cell">' + dates[i] + '</td>';
    rows +=
      '<td class="history-table__cell history-table__cell--center"><button class="delete-btn" title="Удалить"><span class="vi-delete has-static-icon"></span></button></td>';
    rows += '</tr>';
  }

  const html =
    '<!DOCTYPE html>' +
    '<html lang="ru">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>История изменения по подписчику id ' +
    id +
    '</title>' +
    '<link rel="stylesheet" href="css/style.css?v=395">' +
    '<link rel="stylesheet" href="css/subscribers.css">' +
    '</head>' +
    '<body>' +
    '<header class="topbar">' +
    '<nav class="main-nav" aria-label="Главное меню">' +
    '<a class="nav-link" href="#" data-tab="ads">' +
    '<svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M21.1862 0.117912C21.0799 0.174566 20.9501 0.287875 20.8911 0.372856C20.7259 0.599472 15.4854 9.59331 15.3791 9.83409C15.2375 10.1599 15.2611 10.7972 15.4145 11.1513C15.6152 11.6045 15.9457 11.8595 16.3942 11.902C17.0906 11.9586 16.9135 12.1852 20.2655 7.12886C21.9062 4.65024 23.2989 2.52571 23.3461 2.4124C23.5586 1.93084 23.3697 1.03854 22.9566 0.542818C22.5789 0.0612581 21.6347 -0.151195 21.1862 0.117912ZM21.6819 0.613635C21.8707 0.741107 21.8117 1.02438 21.4458 1.66174C21.0681 2.31326 20.9029 2.44073 20.7141 2.22828C20.5488 2.04415 20.5724 1.87419 20.8085 1.47761C21.3632 0.556981 21.4458 0.472 21.6819 0.613635Z" fill="currentColor" />' +
    '<path d="M1.51078 3.60226C0.908826 3.80055 0.4013 4.3246 0.129832 5.03278L0 5.3727V14.2957V23.2187L0.153438 23.6012C0.330482 24.0686 0.590147 24.4085 0.932432 24.6917C1.51078 25.1308 0.637359 25.1025 14.0809 25.0883L26.2615 25.0742L26.6392 24.8617C27.1231 24.5926 27.4418 24.196 27.6661 23.6295L27.8431 23.1763V14.2957V5.44352L27.6661 4.99029C27.4418 4.40959 27.1113 4.02717 26.6392 3.75806L26.2615 3.54561L25.0222 3.50312L23.7947 3.47479L23.2518 4.29628C22.9449 4.74951 22.7088 5.13192 22.7088 5.14609C22.7088 5.16025 23.4406 5.18858 24.3377 5.18858C25.7776 5.18858 25.9783 5.20274 26.1317 5.30189C26.4858 5.55683 26.4622 5.13192 26.4622 13.3184V20.7826H13.9275H1.39275V13.3043C1.39275 5.07527 1.38094 5.5285 1.73503 5.30189C1.87667 5.21691 2.8091 5.20274 9.44235 5.20274H16.9962L17.3857 4.53706C17.5982 4.16881 17.8224 3.78639 17.8814 3.68725L17.9759 3.50312H9.90266C2.98614 3.50312 1.78224 3.50312 1.51078 3.60226Z" fill="currentColor" />' +
    '<path d="M13.5025 12.1996C13.0658 12.3979 12.6763 12.8936 12.5582 13.3894C12.5346 13.531 12.4992 13.9134 12.4992 14.2533C12.4992 14.919 12.4402 15.2448 12.2632 15.4856C12.1451 15.6414 11.8383 15.8113 11.5668 15.8821C11.4015 15.9246 11.4015 15.9246 11.5078 16.0663C11.8146 16.4628 12.5464 16.647 13.4553 16.5337C14.3641 16.4203 14.9188 16.2079 15.2611 15.8396C16.1345 14.919 15.8158 12.9503 14.6828 12.2988C14.3641 12.1146 13.8093 12.0721 13.5025 12.1996Z" fill="currentColor" />' +
    '<path d="M11.6024 26.3346C11.5552 26.3913 11.5316 26.802 11.5316 27.7368V29.054H9.94996C8.67524 29.054 8.34476 29.0682 8.25034 29.1532C8.15591 29.2381 8.14411 29.3514 8.1205 30.4562C8.1087 31.4618 8.1205 31.6884 8.19132 31.8301L8.27394 32H13.9394C19.3451 32 19.6048 32 19.6874 31.8726C19.77 31.7592 19.7818 31.561 19.7818 30.5412C19.7818 29.4223 19.77 29.3231 19.6638 29.1956C19.5575 29.0682 19.4749 29.054 17.9878 29.054H16.418L16.4062 27.7651C16.3944 26.7878 16.3708 26.4479 16.3117 26.3629C16.2409 26.2638 16.0049 26.2496 13.9512 26.2496C12.2633 26.2496 11.6496 26.278 11.6024 26.3346Z" fill="currentColor" />' +
    '</svg>' +
    '<span class="nav-text">ОБЪЯВЛЕНИЯ</span>' +
    '</a>' +
    '<a class="nav-link" href="#" data-tab="letters">' +
    '<svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M34.615 0H1.0581C0.468588 0 0 0.453472 0 1.01275V21.1167C0 21.676 0.468588 22.1294 1.0581 22.1294H34.615C35.2045 22.1294 35.6731 21.676 35.6731 21.1167V1.01275C35.6731 0.453472 35.2045 0 34.615 0ZM33.2093 19.6807H2.46386V2.46386H33.2093V19.6807Z" fill="currentColor" />' +
    '<path d="M18.4563 14.7681H25.8328V15.9924H18.4563V14.7681Z" fill="currentColor" />' +
    '<path d="M18.4563 12.3042H29.521V13.5286H18.4563V12.3042Z" fill="currentColor" />' +
    '<path d="M18.4563 4.9126H29.521V7.37646H18.4563V4.9126Z" fill="currentColor" />' +
    '<path d="M18.4563 9.84033H29.521V11.0647H18.4563V9.84033Z" fill="currentColor" />' +
    '<path d="M9.84032 14.7681C12.5612 14.7681 14.7529 12.5612 14.7529 9.85546C14.7529 7.13463 12.546 4.92773 9.84032 4.92773C7.13461 4.92773 4.9126 7.11952 4.9126 9.84035C4.9126 12.5612 7.11949 14.7681 9.84032 14.7681ZM10.2031 10.2031H14.3902C14.2088 12.4403 12.4251 14.2239 10.2031 14.3902V10.2031Z" fill="currentColor" />' +
    '<path d="M15.8262 23.369L9.67407 31.9849H12.1379L17.2168 24.8805V32H19.6807V24.8805L24.7596 32H27.2234L21.0713 23.3841H15.8262V23.369Z" fill="currentColor" />' +
    '</svg>' +
    '<span class="nav-text">ОБЪЯВЛЕНИЯ СКОМПОНОВАННЫЕ</span>' +
    '</a>' +
    '<a class="nav-link" href="#" data-tab="import">' +
    '<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M32.9926 15.6575V14.4412L24.4928 16.8737L17.6706 14.9166V10.0096L27.4845 6.01136V4.01223L13.7422 8.01049L0 4.01223V6.01136L9.81389 10.0096V18.0061L5.88554 32H7.85671L13.7422 18.0061L19.6278 32H21.599L21.2215 30.6439L24.4928 22.969L28.1415 31.4967H29.3578L26.9253 22.969V18.104L32.9926 15.6575ZM22.0743 22.969L20.5505 28.2813L17.6706 18.0061V16.3425L22.0603 18.104L22.0743 22.969ZM22.6754 13.8401C22.6754 14.8467 23.4862 15.6715 24.4928 15.6715C25.4993 15.6715 26.3102 14.8467 26.3102 13.8401C26.3102 12.8336 25.4993 12.0087 24.4928 12.0087C23.4862 12.0087 22.6754 12.8336 22.6754 13.8401ZM13.7422 6.01136C15.3639 6.01136 16.692 4.66929 16.692 3.00568C16.692 1.34207 15.3779 0 13.7422 0C12.1206 0 10.7925 1.34207 10.7925 3.00568C10.8065 4.66929 12.1206 6.01136 13.7422 6.01136Z" fill="currentColor" />' +
    '</svg>' +
    '<span class="nav-text">ИМПОРТ ИЗ XML ФАЙЛА</span>' +
    '</a>' +
    '<a class="nav-link" href="#" data-tab="companies">' +
    '<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M29.8699 7.23826C28.4911 9.59586 26.7815 11.788 24.9892 13.8975C20.4394 19.4261 15.3244 24.0586 9.23048 28.0293C8.98231 28.1947 8.66521 28.4291 8.41704 28.5946C8.08615 28.76 7.85176 28.9944 7.52087 29.1598C10.1266 30.9522 13.215 32 16.6204 32C25.389 32 32.5446 24.8445 32.5446 15.9931C32.5446 12.7531 31.5657 9.74752 29.8699 7.23826ZM21.0874 25.4373C20.5222 25.4373 20.0258 24.9548 20.0258 24.3757C20.0258 23.8104 20.5084 23.3141 21.0874 23.3141C21.6527 23.3141 22.1491 23.7966 22.1491 24.3757C22.1491 24.941 21.6527 25.4373 21.0874 25.4373ZM30.3524 6.42482C31.0004 5.21155 32.062 3.33649 31.4967 1.62689C31.1659 0.813443 30.6006 0.413615 30.2008 0.248169C28.7393 -0.234382 26.7953 0.978888 26.4644 1.22706C26.0646 1.47523 25.9819 1.95778 26.2163 2.3576C26.4644 2.75743 26.947 2.84016 27.3606 2.60577C28.0086 2.20595 29.1529 1.62689 29.7182 1.87505C29.8009 1.87505 29.8836 1.95778 29.9664 2.20595C30.2973 3.18483 29.4838 4.64627 28.9048 5.6941C28.9048 5.6941 28.9048 5.77682 28.822 5.77682C29.2219 6.25937 29.5528 6.67299 29.8836 7.15554C30.0215 6.90737 30.187 6.74192 30.3524 6.42482ZM3.37094 29.4907C2.80566 29.6562 2.15767 29.5735 1.82678 29.2426C1.49588 28.9117 1.66133 28.4291 1.74405 28.0293C2.2266 26.885 2.8746 25.7544 3.37094 25.1064C4.18438 26.2508 5.08054 27.2159 6.04565 28.112C6.5282 27.8639 6.94181 27.5467 7.34164 27.2159C7.67253 27.0504 7.90691 26.816 8.2378 26.6506C14.249 22.7488 19.2813 18.2818 23.6794 12.8358C25.5545 10.561 27.333 8.20336 28.7945 5.76303C25.8716 2.27488 21.4873 0 16.5239 0C7.68632 0 0.530782 7.15554 0.530782 16.0069C0.530782 18.7643 1.2615 21.3701 2.47477 23.645C2.14388 24.1275 1.01333 25.6717 0.282613 27.464C-0.199937 28.6084 -0.0482787 29.6562 0.613505 30.3869C1.09606 30.9522 1.9095 31.2831 2.80566 31.2831C3.13656 31.2831 3.53638 31.2003 3.86727 31.1176C5.16327 30.7178 6.39033 29.9733 7.43815 29.2426C6.9556 28.9117 6.54198 28.5946 6.05943 28.181C5.24599 28.6773 4.34983 29.1736 3.37094 29.4907ZM14.0146 5.44593C15.4761 5.44593 16.6893 6.6592 16.6893 8.12064C16.6893 9.58208 15.4761 10.7953 14.0146 10.7953C12.5532 10.7953 11.3399 9.58208 11.3399 8.12064C11.3399 6.6592 12.5532 5.44593 14.0146 5.44593ZM8.89959 15.2762C9.71303 15.2762 10.4438 15.9242 10.4438 16.8203C10.4438 17.6338 9.79575 18.3645 8.89959 18.3645C8.08615 18.2818 7.35543 17.6338 7.35543 16.8203C7.35543 16.0069 8.08615 15.2762 8.89959 15.2762Z" fill="currentColor" />' +
    '</svg>' +
    '<span class="nav-text">СООБЩЕСТВА</span>' +
    '</a>' +
    '<a class="nav-link active" href="#" data-tab="resume">' +
    '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<g clip-path="url(#clip0_7_746)">' +
    '<path d="M15.45 23.0375C15.45 19.95 17.025 17.2375 19.4125 15.6375C20.025 14.925 20.4375 14.075 20.7125 13.1625C22.175 12.875 22.3 10.6125 22.3 10.6125C22.45 9.325 21.7 9.0125 21.2125 8.9375C21.15 3.5625 19.2875 0.6875 14.0375 0.6875C8.80002 0.6875 6.92502 3.5625 6.86252 8.9375C6.37502 9.0125 5.62502 9.325 5.77502 10.6125C5.77502 10.6125 5.90002 12.875 7.36252 13.1625C7.65002 14.0875 8.07502 14.9625 8.71252 15.6875C9.15002 16.175 9.66252 16.7 9.91252 17.325C10.2875 18.25 10.075 19.375 9.66252 20.2375C8.85002 21.9875 7.15002 22.1875 5.47502 22.6375C4.66252 22.8625 3.80002 23.0625 3.07502 23.5125C1.66252 24.375 1.36252 25.9875 1.26252 27.525C1.21252 28.4375 1.22502 27.7625 1.22502 28.6125C1.23752 29.025 1.38752 30.1375 2.60002 30.425C4.55002 30.85 8.46252 31.2875 14.025 31.2875C16.5875 31.2875 18.825 31.3 20.675 31.125C17.6 29.7625 15.45 26.65 15.45 23.0375Z" fill="currentColor" />' +
    '<path d="M30.7501 23.0375C30.7501 26.575 27.8876 29.4375 24.3501 29.4375C20.8126 29.4375 17.9501 26.575 17.9501 23.0375C17.9501 19.5 20.8126 16.6375 24.3501 16.6375C27.8876 16.6375 30.7501 19.5 30.7501 23.0375ZM28.1626 22.175H25.2126V19.225C25.2126 18.75 24.8251 18.3625 24.3501 18.3625C23.8751 18.3625 23.4876 18.75 23.4876 19.225V22.175H20.5376C20.0626 22.175 19.6751 22.5625 19.6751 23.0375C19.6751 23.5125 20.0626 23.9 20.5376 23.9H23.4876V26.85C23.4876 27.325 23.8751 27.7125 24.3501 27.7125C24.8251 27.7125 25.2126 27.325 25.2126 26.85V23.9H28.1626C28.6376 23.9 29.0251 23.5125 29.0251 23.0375C29.0251 22.5625 28.6376 22.175 28.1626 22.175Z" fill="currentColor" />' +
    '</g>' +
    '<defs>' +
    '<clipPath id="clip0_7_746">' +
    '<rect width="32" height="32" fill="white" />' +
    '</clipPath>' +
    '</defs>' +
    '</svg>' +
    '<span class="nav-text">ПОДПИСЧИКИ</span>' +
    '</a>' +
    '<a class="nav-link" href="#" data-tab="managers">' +
    '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M4.32605 0.0772048C3.18692 0.361988 2.25121 1.36551 2.04779 2.54532C1.72233 4.45744 3.52595 6.27462 5.43806 5.94915C7.06539 5.66437 8.21808 4.10485 7.94686 2.54532C7.66208 0.836625 5.96695 -0.316067 4.32605 0.0772048Z" fill="currentColor" />' +
    '<path d="M3.36319 8.07825C2.72582 8.25455 2.2105 8.79699 2.07489 9.43436C2.02064 9.65134 2.00708 11.6991 2.00708 15.8759V22.0055H6.0076H10.0081L10.0217 26.3044C10.0352 30.5218 10.0352 30.6032 10.1709 30.888C10.3607 31.2948 10.6591 31.6067 11.0523 31.7966C11.3642 31.9593 11.4727 31.9729 12.0016 31.9729C12.5305 31.9729 12.639 31.9593 12.9509 31.7966C13.3577 31.5932 13.6425 31.2948 13.8323 30.888C13.968 30.6032 13.968 30.5625 13.968 25.0025V19.4018L13.7917 19.0492C13.5882 18.6559 13.2899 18.3576 12.8831 18.1677C12.5983 18.0457 12.5034 18.0321 9.30294 18.0185L6.0076 18.005V17.015V15.9979H8.50284H10.9981V16.4997V17.0014H16.5039H22.0097V23.999V30.9965H21.0062H20.0026V31.4982V32H22.4979H24.9931V31.4982V30.9965H24.0032H22.9996V23.999V17.0014H27.5019H32.0042V16.4997V15.9979H27.0002H21.9961V11.9974V7.99689H21.4944H20.9926V11.4956V14.9944H17.9956H14.9986V15.4962V15.9979H13.6696C12.4627 15.9979 12.3677 15.9844 12.639 15.9166C13.534 15.6725 14.0764 14.8046 13.968 13.7603C13.9002 13.028 13.5204 12.472 12.8695 12.1601C12.5847 12.0381 12.4898 12.0245 9.28938 12.011L6.0076 11.9974L5.98048 10.7091C5.96692 9.25807 5.92623 9.08177 5.50584 8.59358C5.07189 8.10538 4.09549 7.86128 3.36319 8.07825Z" fill="currentColor" />' +
    '<path d="M0 21.9919V32H0.50176H1.00352V27.9995V23.9989H4.50228H8.00104V27.9995V32H8.5028H9.00456V27.4977V22.9954H5.00404H1.00352V17.4896V11.9974H0.50176H0V21.9919Z" fill="currentColor" />' +
    '</svg>' +
    '<span class="nav-text">ИНТЕРФЕЙС</span>' +
    '</a>' +
    '</nav>' +
    '</header>' +
    '<div class="history-block">' +
    '<h2 class="history-block__title">История изменения по подписчику id <span class="history-block__title-text">(id ' +
    id +
    ')</span></h2>' +
    '<table class="history-table">' +
    '<thead><tr class="history-table__header">' +
    '<th class="history-table__header-cell">Название состояния у подписчика</th>' +
    '<th class="history-table__header-cell" style="width:120px;">Дата отп.</th>' +
    '<th class="history-table__header-cell" style="width:60px;">Del</th>' +
    '</tr></thead>' +
    '<tbody>' +
    rows +
    '</tbody>' +
    '</table>' +
    '</div>' +
    '<script src="js/subscribers.js"><\/script>' +
    '</body></html>';

  win.document.write(html);
  win.document.close();

  // Init static icons and events in new window
  setTimeout(function () {
    if (win.renderStaticIcons) win.renderStaticIcons();
    if (win.attachHistoryEvents) win.attachHistoryEvents();
  }, 200);
}

// Attach events for history page
function attachHistoryEvents() {
  document.querySelectorAll('.delete-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const row = this.closest('tr');
      if (row) {
        row.classList.add('history-table__row--deleted');
        setTimeout(function () {
          row.style.display = 'none';
        }, 300);
      }
    });
  });
}

// ========================================
// CUSTOM SELECT (строго по макету)
// ========================================
(function initSelect() {
  const trigger = document.getElementById('selectTrigger');
  const dropdown = document.getElementById('selectDropdown');
  const value = document.getElementById('selectValue');
  const arrow = document.getElementById('selectArrow');
  const clear = document.getElementById('selectClear');
  const options = document.querySelectorAll('.custom-select__option');

  if (!trigger) return;

  let isOpen = false;

  // --- Helpers ---
  function isDefaultOption(text) {
    return text.trim() === 'Все';
  }

  function updateClear() {
    const currentText = value.textContent.trim();
    if (isDefaultOption(currentText)) {
      // "Все" → крестик скрыт
      clear.classList.remove('custom-select__clear--visible');
    } else {
      // Любое другое значение → крестик виден
      // (стрелка остаётся видимой всегда — по макету)
      clear.classList.add('custom-select__clear--visible');
    }
  }

  function syncSelectedOption() {
    const currentText = value.textContent.trim();
    options.forEach(function (o) {
      o.classList.remove('custom-select__option--selected');
      // Выделять только если текст совпадает и это не "Все"
      if (currentText !== 'Все' && o.textContent.trim() === currentText) {
        o.classList.add('custom-select__option--selected');
      }
    });
  }

  function openSelect() {
    isOpen = true;
    syncSelectedOption();
    dropdown.classList.add('custom-select__dropdown--open');
    trigger.classList.add('custom-select__trigger--active');
    arrow.classList.add('custom-select__arrow--up');
  }

  function closeSelect() {
    isOpen = false;
    dropdown.classList.remove('custom-select__dropdown--open');
    trigger.classList.remove('custom-select__trigger--active');
    arrow.classList.remove('custom-select__arrow--up');
  }

  // --- Init state ---
  updateClear();
  syncSelectedOption();

  // --- Trigger click ---
  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    if (isOpen) {
      closeSelect();
    } else {
      openSelect();
    }
  });

  // --- Option click ---
  options.forEach(function (opt) {
    opt.addEventListener('click', function (e) {
      e.stopPropagation();
      const text = this.textContent.trim();
      value.textContent = text;
      value.classList.add('custom-select__value--selected');
      updateClear(); // только крестик меняется, стрелка остаётся
      closeSelect();
      currentPage = 1; // Сброс на первую страницу
      renderTable();
    });
  });

  // --- Clear (крестик) click ---
  clear.addEventListener('click', function (e) {
    e.stopPropagation();
    value.textContent = 'Все';
    value.classList.remove('custom-select__value--selected');
    updateClear();

    // Снять выделение со всех опций (т.к. "Все" нет в списке)
    options.forEach(function (o) {
      o.classList.remove('custom-select__option--selected');
    });

    if (isOpen) closeSelect();
    currentPage = 1; // Сброс на первую страницу
    renderTable();
  });

  // --- Close on outside click ---
  document.addEventListener('click', function () {
    if (isOpen) closeSelect();
  });
})();

// ========================================
// PER PAGE SELECT HANDLER
// ========================================
(function initPerPageSelect() {
  const perPageValue = document.getElementById('perPageValue');
  const perPageArrow = document.getElementById('perPageArrow');
  const perPageDropdown = document.getElementById('perPageDropdown');
  const perPageSelect = document.getElementById('perPageSelect');
  const perPageOptions = document.querySelectorAll('.per-page-select__option');

  if (!perPageValue) return;

  let isOpen = false;

  function openPerPage() {
    isOpen = true;
    perPageArrow.classList.add('custom-select__arrow--up');
    perPageDropdown.classList.add('custom-select__dropdown--open');
  }

  function closePerPage() {
    isOpen = false;
    perPageArrow.classList.remove('custom-select__arrow--up');
    perPageDropdown.classList.remove('custom-select__dropdown--open');
  }

  // Click on entire select container
  if (perPageSelect) {
    perPageSelect.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen) {
        closePerPage();
      } else {
        openPerPage();
      }
    });
  }

  perPageOptions.forEach(function (opt) {
    opt.addEventListener('click', function (e) {
      e.stopPropagation();
      const newValue = parseInt(this.dataset.value);
      if (!isNaN(newValue)) {
        itemsPerPage = newValue;
        window.perPage = newValue;
        perPageValue.textContent = this.textContent.trim();
        currentPage = 1; // Сброс на первую страницу
        closePerPage();
        renderTable();
      }
    });
  });

  document.addEventListener('click', function () {
    if (isOpen) closePerPage();
  });
})();
// ========================================
// CHECKBOXES
// ========================================
(function initCheckboxFilters() {
  const checkboxItems = document.querySelectorAll('.checkbox-item');

  checkboxItems.forEach(function (item, index) {
    const input = item.querySelector('.checkbox-item__input');
    const label = item.querySelector('.checkbox-item__label');

    // Определяем тип фильтра по индексу или тексту
    const filterType = getFilterType(label);

    item.addEventListener('click', function (e) {
      e.preventDefault();

      // Для чекбокса "Все" - сбрасываем все остальные
      if (filterType === 'all') {
        const isActive = input.classList.contains('checkbox-item__input--checked');

        if (!isActive) {
          // Включаем "Все", выключаем остальные
          checkboxFilters.all = true;
          checkboxFilters.dogs = false;
          checkboxFilters.unsubscribed = false;
          checkboxFilters.forcedDeleted = false;
          checkboxFilters.addedToCommunity = false;
          checkboxFilters.transfer = false;
          checkboxFilters.noDuplicates = false;

          // Обновляем визуально
          checkboxItems.forEach(function (cb, i) {
            const inp = cb.querySelector('.checkbox-item__input');
            const lbl = cb.querySelector('.checkbox-item__label');
            if (i === 0) {
              inp.classList.add('checkbox-item__input--checked');
              lbl.classList.add('checkbox-item__label--active');
            } else {
              inp.classList.remove('checkbox-item__input--checked');
              lbl.classList.remove('checkbox-item__label--active');
            }
          });
        }
        // Если уже активен "Все" — ничего не делаем (нельзя выключить)
      } else {
        // Если включаем "Принудительно удалённые" — выключаем другие фильтры (кроме "Все")
        if (
          filterType === 'forcedDeleted' &&
          !input.classList.contains('checkbox-item__input--checked')
        ) {
          checkboxFilters.dogs = false;
          checkboxFilters.unsubscribed = false;
          checkboxFilters.addedToCommunity = false;
          checkboxFilters.transfer = false;
          checkboxFilters.noDuplicates = false;

          // Выключаем визуально все кроме "Принудительно удалённые"
          checkboxItems.forEach(function (cb, i) {
            const inp = cb.querySelector('.checkbox-item__input');
            const lbl = cb.querySelector('.checkbox-item__label');
            const type = getFilterType(lbl);
            if (type === 'forcedDeleted') {
              inp.classList.add('checkbox-item__input--checked');
              lbl.classList.add('checkbox-item__label--active');
            } else if (i !== 0) {
              // Не "Все"
              inp.classList.remove('checkbox-item__input--checked');
              lbl.classList.remove('checkbox-item__label--active');
            }
          });
        } else {
          // Переключаем текущий фильтр
          input.classList.toggle('checkbox-item__input--checked');
          label.classList.toggle('checkbox-item__label--active');
        }

        const isActive = input.classList.contains('checkbox-item__input--checked');
        checkboxFilters[filterType] = isActive;

        // Если включили любой фильтр кроме "Все" — выключаем "Все"
        if (isActive && filterType !== 'all') {
          checkboxFilters.all = false;
          const allInput = checkboxItems[0].querySelector('.checkbox-item__input');
          const allLabel = checkboxItems[0].querySelector('.checkbox-item__label');
          allInput.classList.remove('checkbox-item__input--checked');
          allLabel.classList.remove('checkbox-item__label--active');
        }

        // Сброс на первую страницу при любом изменении фильтров
        currentPage = 1;
        renderTable();
      }
    });
  });

  function getFilterType(label) {
    const text = label.textContent.trim().toLowerCase();
    if (text === 'все') return 'all';
    if (text === 'собачки') return 'dogs';
    if (text === 'отписавшиеся') return 'unsubscribed';
    if (text === 'принудительно удалённые') return 'forcedDeleted';
    if (text === 'добавлены в сообщество') return 'addedToCommunity';
    if (text === 'переносить') return 'transfer';
    if (text === 'показать без повторов') return 'noDuplicates';
    return 'all';
  }
})();

// ========================================
// SEARCH INPUT HANDLERS
// ========================================
(function initSearchHandlers() {
  const searchInputs = document.querySelectorAll('.table__search-input');

  searchInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      currentPage = 1; // Сброс на первую страницу при поиске
      renderTable();
    });

    // Обработчик для кнопки очистки поиска
    const clearBtn = input
      .closest('.table__search-input-wrapper')
      .querySelector('.table__search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        input.value = '';
        currentPage = 1;
        renderTable();
      });
    }
  });
})();

// ========================================
// DATE FILTER HANDLERS
// ========================================
(function initDateFilters() {
  const dateFromEl = document.getElementById('dateFrom');
  const dateToEl = document.getElementById('dateTo');

  if (dateFromEl) {
    dateFromEl.addEventListener('click', function () {
      currentPage = 1;
    });
  }

  if (dateToEl) {
    dateToEl.addEventListener('click', function () {
      currentPage = 1;
    });
  }
})();

// ========================================
// SORTING
// ========================================
document.querySelectorAll('.table__header-cell--sortable').forEach(function (cell) {
  cell.addEventListener('click', function () {
    const col = this.getAttribute('data-sort');
    if (!col) return;

    document.querySelectorAll('.table__header-cell--sortable').forEach(function (c) {
      c.classList.remove('table__header-cell--sorted-asc', 'table__header-cell--sorted-desc');
    });

    if (sortColumn === col) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn = col;
      sortDirection = 'asc';
    }

    if (sortDirection === 'asc') {
      this.classList.add('table__header-cell--sorted-asc');
    } else {
      this.classList.add('table__header-cell--sorted-desc');
    }

    currentPage = 1; // Сброс на первую страницу при сортировке
    renderTable();
  });
});

// ========================================
// STATIC ICON RENDERER
// ========================================
const svgNS = 'http://www.w3.org/2000/svg';

function createStaticIconSvg(icon) {
  const svg = document.createElementNS(svgNS, 'svg');
  const width = icon.width || 44;
  const height = icon.height || 44;
  svg.classList.add('static-icon-svg', icon.className || 'static-icon-default');
  svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.color = 'inherit';
  svg.style.width = '100%';
  svg.style.height = '100%';

  if (icon.imageHref) {
    const image = document.createElementNS(svgNS, 'image');
    image.setAttribute('href', icon.imageHref);
    image.setAttribute('x', icon.imageX !== undefined ? icon.imageX : 0);
    image.setAttribute('y', icon.imageY !== undefined ? icon.imageY : 0);
    image.setAttribute('width', icon.imageWidth || width);
    image.setAttribute('height', icon.imageHeight || height);
    image.setAttribute('preserveAspectRatio', icon.preserveAspectRatio || 'xMidYMid meet');
    svg.append(image);
    return svg;
  }

  if (icon.pathD) {
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', icon.pathD);
    path.setAttribute('fill', icon.fill || 'none');
    path.setAttribute('stroke', icon.stroke || 'currentColor');
    path.setAttribute('stroke-width', icon.strokeWidth || 1.6);
    path.setAttribute('stroke-linecap', icon.strokeLinecap || 'round');
    path.setAttribute('stroke-linejoin', icon.strokeLinejoin || 'round');
    svg.append(path);
    return svg;
  }

  const label = document.createElementNS(svgNS, 'text');
  label.setAttribute('x', icon.x !== undefined ? icon.x : width / 2);
  label.setAttribute('y', icon.y !== undefined ? icon.y : Math.round(icon.size * 0.82));
  label.setAttribute('text-anchor', icon.anchor || 'middle');
  label.setAttribute('fill', icon.color || 'currentColor');
  label.setAttribute('font-family', icon.family || 'vsevn-icons');
  label.setAttribute('font-size', icon.size || 24);
  label.setAttribute('font-weight', icon.weight || 400);
  label.setAttribute('font-synthesis', 'none');
  label.setAttribute('stroke', 'none');
  label.setAttribute('paint-order', 'fill');
  label.textContent = String.fromCharCode(icon.code);
  svg.append(label);
  return svg;
}

const staticIconConfigs = {
  delete: [
    {
      className: 'static-icon-default',
      code: 0xf002,
      family: 'vsevn-delete-states',
      width: 24,
      height: 24,
      size: 24,
      x: 12,
      y: 21,
    },
    {
      className: 'static-icon-hover',
      code: 0xf001,
      family: 'vsevn-delete-states',
      width: 24,
      height: 24,
      size: 24,
      x: 12,
      y: 21,
    },
    {
      className: 'static-icon-active',
      code: 0xf000,
      family: 'vsevn-delete-active',
      width: 24,
      height: 24,
      size: 24,
      x: 12,
      y: 21,
    },
  ],
  xlsx: [
    {
      className: 'static-icon-default',
      imageHref: 'icons/download/xlsx.svg',
      width: 20,
      height: 20,
      imageWidth: 20,
      imageHeight: 20,
    },
    {
      className: 'static-icon-hover',
      imageHref: 'icons/download-hover/xlsx.svg',
      width: 20,
      height: 20,
      imageWidth: 20,
      imageHeight: 20,
    },
  ],
};

function renderStaticIcon(element, type) {
  const config = staticIconConfigs[type];
  if (!element || !config) return;
  if (element.dataset.staticIcon === type && element.querySelector('.static-icon-svg')) return;

  element.classList.add('has-static-icon');
  element.dataset.staticIcon = type;
  element.style.fontSize = '0px';
  element.style.lineHeight = '0px';
  element.textContent = '';

  config.forEach(function (icon) {
    element.append(createStaticIconSvg(icon));
  });
}

function renderStaticIcons(root) {
  const scope = root || document;
  scope.querySelectorAll('.vi-delete').forEach(function (icon) {
    renderStaticIcon(icon, 'delete');
  });
  scope.querySelectorAll('.vi-xlsx').forEach(function (icon) {
    renderStaticIcon(icon, 'xlsx');
  });
}

// Expose for history tab
window.renderStaticIcons = renderStaticIcons;
window.attachHistoryEvents = attachHistoryEvents;

// ========================================
// DELETE DOGS BUTTON
// ========================================
(function () {
  const btn = document.getElementById('deleteDogsBtn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;

    const rows = tbody.querySelectorAll('.table__row');
    const rowsToDelete = [];

    rows.forEach(function (row) {
      const dogCell = row.querySelector('td[colspan="2"]');
      if (dogCell && dogCell.textContent.trim() === 'Да') {
        rowsToDelete.push(row);
      }
    });

    rowsToDelete.forEach(function (row) {
      row.classList.add('table__row--deleted');
      setTimeout(function () {
        row.style.display = 'none';
        const id = parseInt(row.getAttribute('data-id'));
        if (id) {
          deletedIds.add(id);
          // Удалить из allUsers
          const userIndex = allUsers.findIndex(function (u) {
            return u.id === id;
          });
          if (userIndex !== -1) {
            allUsers.splice(userIndex, 1);
          }
        }
      }, 300);
    });

    setTimeout(function () {
      // Сбросить фильтр "Да" если он активен
      if (dogFilterActive) {
        dogFilterActive = false;
        const daFilter = document.querySelector('.dog-filter-da');
        if (daFilter) daFilter.classList.remove('dog-filter-da--active');
      }
      renderTable();
    }, 350);
  });
})();

// ========================================
// IMPORT BUTTON
// ========================================
(function () {
  const btn = document.getElementById('importBtn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx';
    input.style.display = 'none';
    document.body.appendChild(input);

    input.addEventListener('change', function () {
      if (this.files && this.files[0]) {
        const fileName = this.files[0].name;
        alert('Файл выбран: ' + fileName);
      }
      document.body.removeChild(input);
    });

    input.click();
  });
})();

// ========================================
// DELETE BUTTONS (history block on main page)
// ========================================
document.querySelectorAll('.history-block .delete-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const row = this.closest('tr');
    if (row) {
      row.style.opacity = '0.3';
      setTimeout(function () {
        row.style.display = 'none';
      }, 300);
    }
  });
});

// ========================================
// DATE CALENDAR (Double)
// ========================================
(function initCalendar() {
  const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const MONTHS_SHORT = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];
  const WEEKDAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  let calendarEl = null;
  let activeField = null;
  let yearMenuEl = null;

  function createCalendar() {
    if (calendarEl) return calendarEl;
    calendarEl = document.createElement('div');
    calendarEl.className = 'double-calendar';
    calendarEl.innerHTML =
      '<div class="double-calendar__header">' +
      '<button class="double-calendar__nav-btn double-calendar__prev" type="button" title="На месяц назад">‹</button>' +
      '<div class="double-calendar__title-wrapper">' +
      '<div id="calendarTitle" class="double-calendar__title"></div>' +
      '<button id="calendarYearBtn" class="double-calendar__year-btn" type="button" title="Выбрать год"></button>' +
      '</div>' +
      '<button class="double-calendar__nav-btn double-calendar__next" type="button" title="На месяц вперёд">›</button>' +
      '</div>' +
      '<div id="calendarGrids" class="double-calendar__grids"></div>';
    document.body.appendChild(calendarEl);

    // Year menu
    yearMenuEl = document.createElement('div');
    yearMenuEl.className = 'double-calendar__year-menu';
    document.body.appendChild(yearMenuEl);

    // Nav buttons
    calendarEl.querySelector('.double-calendar__prev').addEventListener('click', function (e) {
      e.stopPropagation();
      viewDate.setMonth(viewDate.getMonth() - 1);
      renderCalendar();
    });

    calendarEl.querySelector('.double-calendar__next').addEventListener('click', function (e) {
      e.stopPropagation();
      viewDate.setMonth(viewDate.getMonth() + 1);
      renderCalendar();
    });

    // Year button
    calendarEl.querySelector('#calendarYearBtn').addEventListener('click', function (e) {
      e.stopPropagation();
      toggleYearMenu();
    });

    return calendarEl;
  }

  function toggleYearMenu() {
    if (!yearMenuEl) return;
    const isHidden = yearMenuEl.style.display === 'none' || !yearMenuEl.style.display;

    if (isHidden) {
      renderYearMenu();
      yearMenuEl.style.display = 'block';
      positionYearMenu();
    } else {
      yearMenuEl.style.display = 'none';
    }
  }

  function renderYearMenu() {
    if (!yearMenuEl) return;
    const currentYear = viewDate.getFullYear();
    let html = '';
    for (let y = currentYear - 10; y <= currentYear + 10; y++) {
      html +=
        '<div class="double-calendar__year-option' +
        (y === currentYear ? ' is-selected' : '') +
        '" data-year="' +
        y +
        '">' +
        y +
        '</div>';
    }
    yearMenuEl.innerHTML = html;

    yearMenuEl.querySelectorAll('.double-calendar__year-option').forEach(function (opt) {
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        const year = parseInt(this.getAttribute('data-year'));
        viewDate.setFullYear(year);
        renderCalendar();
        yearMenuEl.style.display = 'none';
      });
    });
  }

  function positionYearMenu() {
    if (!yearMenuEl || !calendarEl) return;
    const titleEl = calendarEl.querySelector('.double-calendar__title-wrapper');
    if (!titleEl) return;
    const rect = titleEl.getBoundingClientRect();
    yearMenuEl.style.top = rect.bottom + 4 + 'px';
    yearMenuEl.style.left = rect.left + 'px';
  }

  let viewDate = new Date();

  function renderCalendar() {
    const titleEl = document.getElementById('calendarTitle');
    const yearBtn = document.getElementById('calendarYearBtn');
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    titleEl.textContent =
      MONTHS_SHORT[month] +
      ' ' +
      year +
      ' — ' +
      MONTHS_SHORT[(month + 1) % 12] +
      ' ' +
      (month === 11 ? year + 1 : year);
    yearBtn.textContent = year + ' ▾';

    const container = document.getElementById('calendarGrids');
    container.innerHTML = '';

    for (let m = 0; m < 2; m++) {
      let gridMonth = month + m;
      let gridYear = year;
      if (gridMonth > 11) {
        gridMonth -= 12;
        gridYear++;
      }

      const gridHtml = document.createElement('div');
      gridHtml.style.cssText = 'min-width:210px;';

      const monthTitle = document.createElement('div');
      monthTitle.style.cssText =
        'text-align:center;font-size:13px;font-weight:600;color:#4E4A4A;margin-bottom:6px;';
      monthTitle.textContent = MONTHS[gridMonth] + ' ' + gridYear;
      gridHtml.appendChild(monthTitle);

      const weekdaysRow = document.createElement('div');
      weekdaysRow.style.cssText =
        'display:grid;grid-template-columns:repeat(7,30px);gap:2px;justify-content:center;';
      for (let w = 0; w < 7; w++) {
        const wd = document.createElement('div');
        wd.style.cssText =
          'width:30px;height:24px;display:flex;align-items:center;justify-content:center;font-size:11px;color:#999;font-weight:500;';
        wd.textContent = WEEKDAYS[w];
        weekdaysRow.appendChild(wd);
      }
      gridHtml.appendChild(weekdaysRow);

      const daysRow = document.createElement('div');
      daysRow.style.cssText =
        'display:grid;grid-template-columns:repeat(7,30px);gap:2px;justify-content:center;';

      const firstDay = new Date(gridYear, gridMonth, 1);
      const offset = (firstDay.getDay() + 6) % 7;
      const daysInMonth = new Date(gridYear, gridMonth + 1, 0).getDate();
      const today = new Date();
      const selectedVal = activeField ? activeField.getAttribute('data-date') : '';
      const selectedDate = selectedVal ? parseDateValue(selectedVal) : null;

      for (let i = 0; i < offset; i++) {
        const empty = document.createElement('div');
        empty.style.cssText = 'width:30px;height:24px;';
        daysRow.appendChild(empty);
      }

      for (let d = 1; d <= daysInMonth; d++) {
        const dateObj = new Date(gridYear, gridMonth, d);
        const isToday = dateObj.toDateString() === today.toDateString();
        const isSelected = selectedDate && dateObj.toDateString() === selectedDate.toDateString();
        const dayStr =
          String(d).padStart(2, '0') +
          '.' +
          String(gridMonth + 1).padStart(2, '0') +
          '.' +
          gridYear;

        const dayEl = document.createElement('div');
        dayEl.style.cssText =
          'width:30px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;border-radius:2px;cursor:pointer;transition:background 0.15s;';
        dayEl.setAttribute('data-date', dayStr);
        dayEl.textContent = d;

        if (isSelected) {
          dayEl.style.background = 'rgba(0,135,252,0.15)';
          dayEl.style.color = '#0087FC';
          dayEl.style.fontWeight = '600';
        } else if (isToday) {
          dayEl.style.border = '1px solid rgba(0,135,252,0.3)';
        } else {
          dayEl.style.color = '#4E4A4A';
        }

        dayEl.addEventListener('click', function () {
          const dateStr = this.getAttribute('data-date');
          if (activeField) {
            activeField.textContent = dateStr;
            activeField.setAttribute('data-date', dateStr);
            closeCalendar();
            renderTable();
          }
        });
        dayEl.addEventListener('mouseenter', function () {
          this.style.background = '#EBEBEB';
        });
        dayEl.addEventListener('mouseleave', function () {
          if (this.style.background === 'rgb(235, 235, 235)') {
            this.style.background = '';
          }
        });

        daysRow.appendChild(dayEl);
      }

      gridHtml.appendChild(daysRow);
      container.appendChild(gridHtml);
    }

    positionCalendar();
  }

  function parseDateValue(str) {
    const m = str.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (!m) return null;
    return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  }

  function positionCalendar() {
    if (!activeField || !calendarEl) return;
    const rect = activeField.getBoundingClientRect();
    const calWidth = calendarEl.offsetWidth || 470;
    let left = rect.left;
    if (left + calWidth > window.innerWidth - 10) left = window.innerWidth - calWidth - 10;
    let top = rect.bottom + 4;
    if (top + calendarEl.offsetHeight > window.innerHeight - 10) {
      top = rect.top - calendarEl.offsetHeight - 4;
    }
    calendarEl.style.left = Math.max(4, left) + 'px';
    calendarEl.style.top = Math.max(4, top) + 'px';
  }

  function openCalendar(field) {
    activeField = field;
    const cal = createCalendar();
    const val = field.getAttribute('data-date');
    const parsed = parseDateValue(val);
    if (parsed) viewDate = new Date(parsed.getFullYear(), parsed.getMonth(), 1);
    else viewDate = new Date();
    if (yearMenuEl) yearMenuEl.style.display = 'none';
    cal.style.display = 'block';
    renderCalendar();
  }

  function closeCalendar() {
    if (calendarEl) calendarEl.style.display = 'none';
    if (yearMenuEl) yearMenuEl.style.display = 'none';
    activeField = null;
  }

  // Attach to date fields
  const dateFields = document.querySelectorAll('#dateFrom, #dateTo');
  dateFields.forEach(function (field) {
    field.addEventListener('click', function (e) {
      e.stopPropagation();
      openCalendar(this);
    });
  });

  // Global handlers
  document.addEventListener('click', function (e) {
    if (!calendarEl || calendarEl.style.display === 'none') return;
    if (calendarEl.contains(e.target)) return;
    if (e.target.closest('#dateFrom, #dateTo')) return;
    if (yearMenuEl && yearMenuEl.contains(e.target)) return;
    closeCalendar();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCalendar();
  });

  window.addEventListener('resize', function () {
    if (calendarEl && calendarEl.style.display !== 'none') positionCalendar();
    if (yearMenuEl && yearMenuEl.style.display !== 'none') positionYearMenu();
  });
})();

// ========================================
// INIT
// ========================================
renderStaticIcons();
renderTable();

// ========================================
// PER PAGE SELECT
// ========================================
(function initPerPageSelect() {
  const select = document.getElementById('perPageSelect');
  const value = document.getElementById('perPageValue');
  const arrow = document.getElementById('perPageArrow');
  const dropdown = document.getElementById('perPageDropdown');
  const options = document.querySelectorAll('.per-page-select__option');

  if (!select || !value || !arrow || !dropdown) return;

  let isOpen = false;
  window.perPage = 1000; // Default value

  select.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpen = !isOpen;
    if (isOpen) {
      dropdown.classList.add('per-page-select__dropdown--open');
      select.classList.add('per-page-select--active');
    } else {
      closeSelect();
    }
  });

  options.forEach(function (opt) {
    opt.addEventListener('click', function (e) {
      e.stopPropagation();
      const newVal = this.getAttribute('data-value');
      window.perPage = parseInt(newVal, 10);
      value.textContent = newVal;

      // Update selected option
      options.forEach(function (o) {
        o.classList.remove('per-page-select__option--selected');
      });
      this.classList.add('per-page-select__option--selected');

      closeSelect();
      renderTable();
    });
  });

  function closeSelect() {
    isOpen = false;
    dropdown.classList.remove('per-page-select__dropdown--open');
    select.classList.remove('per-page-select--active');
  }

  document.addEventListener('click', function () {
    if (isOpen) closeSelect();
  });
})();
