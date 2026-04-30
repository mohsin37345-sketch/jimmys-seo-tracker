// State
let state = loadState();

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem('royals_seo_state'));
    if (s) return s;
  } catch(e) {}
  return { tasks: {}, monthly: {}, dirs: {}, blogs: {}, sc: {}, gbp: {}, partners: [], theme: 'light' };
}

function saveState() { localStorage.setItem('royals_seo_state', JSON.stringify(state)); }

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => toast('Copied!')).catch(() => toast('Copy failed'));
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('themeBtn').textContent = state.theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  saveState();
}

function toggleSection(id) {
  const body = document.getElementById(id + '-body');
  const header = document.getElementById(id + '-header');
  body.classList.toggle('hidden');
  header.classList.toggle('collapsed');
}

function getTaskKey(t, i) { return 'd' + t.day + '_' + i; }

function updateDashboard() {
  const total = TASKS.length;
  const mTotal = MONTHLY_TASKS.length;
  let done = 0, mDone = 0;
  TASKS.forEach((t, i) => { if ((state.tasks[getTaskKey(t, i)] || {}).status === 'Completed') done++; });
  MONTHLY_TASKS.forEach((t, i) => { if ((state.monthly['m' + i] || {}).status === 'Completed') mDone++; });

  const allTotal = total + mTotal;
  const allDone = done + mDone;
  const pct = allTotal ? Math.round((allDone / allTotal) * 100) : 0;

  document.getElementById('totalTasks').textContent = allTotal;
  document.getElementById('completedTasks').textContent = allDone;
  document.getElementById('remainingTasks').textContent = allTotal - allDone;
  document.getElementById('overallPct').textContent = pct + '%';

  const today = new Date();
  const startStr = localStorage.getItem('royals_start');
  let currentWeek = 1;
  if (startStr) {
    const diff = Math.floor((today - new Date(startStr)) / 86400000);
    currentWeek = Math.min(4, Math.max(1, Math.ceil((diff + 1) / 7)));
  }
  document.getElementById('currentWeek').textContent = 'Week ' + currentWeek;
  document.getElementById('monthlyRemaining').textContent = mTotal - mDone;

  // Progress bars
  document.getElementById('overallFill').style.width = pct + '%';
  document.getElementById('overallPctLabel').textContent = pct + '%';

  for (let w = 1; w <= 4; w++) {
    const wTasks = TASKS.filter(t => t.week === w);
    const wDone = wTasks.filter((t, i) => {
      const idx = TASKS.indexOf(t);
      return (state.tasks[getTaskKey(t, idx)] || {}).status === 'Completed';
    }).length;
    const wp = wTasks.length ? Math.round((wDone / wTasks.length) * 100) : 0;
    document.getElementById('w' + w + 'Fill').style.width = wp + '%';
    document.getElementById('w' + w + 'Pct').textContent = wp + '%';
  }

  const mp = mTotal ? Math.round((mDone / mTotal) * 100) : 0;
  document.getElementById('monthlyFill').style.width = mp + '%';
  document.getElementById('monthlyPctLabel').textContent = mp + '%';
  document.getElementById('stickyFill').style.width = pct + '%';
  document.getElementById('stickyPct').textContent = pct + '% Complete';
}

function renderTasks() {
  const container = document.getElementById('taskList');
  const search = document.getElementById('searchInput').value.toLowerCase();
  const weekF = document.getElementById('weekFilter').value;
  const catF = document.getElementById('catFilter').value;
  const statusF = document.getElementById('statusFilter').value;
  const prioF = document.getElementById('prioFilter').value;

  let html = '';
  const allTasks = [
    ...TASKS.map((t, i) => ({...t, key: getTaskKey(t, i), store: 'tasks', weekLabel: 'Week ' + t.week})),
    ...MONTHLY_TASKS.map((t, i) => ({...t, day: 'M', week: 'Monthly', key: 'm' + i, store: 'monthly', weekLabel: 'Monthly'}))
  ];

  allTasks.forEach(t => {
    const s = state[t.store][t.key] || {};
    const status = s.status || 'Not Started';
    const notes = s.notes || '';
    const dateCompleted = s.dateCompleted || '';

    if (search && !t.title.toLowerCase().includes(search) && !t.details.toLowerCase().includes(search)) return;
    if (weekF && weekF !== 'All') {
      if (weekF === 'Monthly' && t.week !== 'Monthly') return;
      if (weekF !== 'Monthly' && t.weekLabel !== weekF) return;
    }
    if (catF && catF !== 'All' && t.cat !== catF) return;
    if (statusF && statusF !== 'All' && status !== statusF) return;
    if (prioF && prioF !== 'All' && t.priority !== prioF) return;

    const isComplete = status === 'Completed';
    const isProgress = status === 'In Progress';

    html += `<div class="task-card ${isComplete ? 'completed' : ''} ${isProgress ? 'in-progress' : ''}">
      <div class="task-top">
        <input type="checkbox" ${isComplete ? 'checked' : ''} onchange="toggleTask('${t.store}','${t.key}',this.checked)">
        <span class="task-title">${t.title}</span>
        <button class="btn btn-copy btn-sm" onclick="copyText('${t.title}: ${t.details.replace(/'/g, "\\'")}')">📋</button>
      </div>
      <div class="task-meta">
        <span class="badge badge-week">Day ${t.day}</span>
        <span class="badge badge-week">${t.weekLabel}</span>
        <span class="badge badge-cat">${t.cat}</span>
        <span class="badge badge-priority-${t.priority.toLowerCase()}">${t.priority}</span>
      </div>
      <div class="task-details">${t.details}</div>
      ${t.link ? `<div class="task-link"><a href="${t.link}" target="_blank">🔗 ${t.link}</a></div>` : ''}
      <div class="task-controls">
        <select onchange="setTaskStatus('${t.store}','${t.key}',this.value)">
          <option${status === 'Not Started' ? ' selected' : ''}>Not Started</option>
          <option${status === 'In Progress' ? ' selected' : ''}>In Progress</option>
          <option${status === 'Completed' ? ' selected' : ''}>Completed</option>
        </select>
        <input type="text" placeholder="Notes..." value="${notes.replace(/"/g, '&quot;')}" onchange="setTaskNote('${t.store}','${t.key}',this.value)">
        <input type="date" value="${dateCompleted}" onchange="setTaskDate('${t.store}','${t.key}',this.value)" title="Date completed">
      </div>
    </div>`;
  });

  container.innerHTML = html || '<p style="padding:1rem;color:var(--text-secondary)">No tasks match your filters.</p>';
}

function toggleTask(store, key, checked) {
  if (!state[store][key]) state[store][key] = {};
  state[store][key].status = checked ? 'Completed' : 'Not Started';
  if (checked) state[store][key].dateCompleted = new Date().toISOString().split('T')[0];
  saveState(); renderTasks(); updateDashboard();
}

function setTaskStatus(store, key, val) {
  if (!state[store][key]) state[store][key] = {};
  state[store][key].status = val;
  if (val === 'Completed' && !state[store][key].dateCompleted) state[store][key].dateCompleted = new Date().toISOString().split('T')[0];
  saveState(); renderTasks(); updateDashboard();
}

function setTaskNote(store, key, val) {
  if (!state[store][key]) state[store][key] = {};
  state[store][key].notes = val;
  saveState();
}

function setTaskDate(store, key, val) {
  if (!state[store][key]) state[store][key] = {};
  state[store][key].dateCompleted = val;
  saveState();
}

function renderDirectories() {
  const c = document.getElementById('dirGrid');
  c.innerHTML = DIRECTORIES.map((d, i) => {
    const s = state.dirs['dir' + i] || {};
    return `<div class="dir-card">
      <h3>${d.name}</h3>
      <div class="dir-btns">
        <a href="${d.url}" target="_blank" class="btn btn-primary btn-sm">Open</a>
        <button class="btn btn-copy btn-sm" onclick="copyText('${d.url}')">Copy URL</button>
      </div>
      <label><input type="checkbox" ${s.submitted ? 'checked' : ''} onchange="setDir(${i},'submitted',this.checked)"> Submitted</label>
      <select onchange="setDir(${i},'status',this.value)">
        <option${(s.status || 'Not Started') === 'Not Started' ? ' selected' : ''}>Not Started</option>
        <option${s.status === 'Submitted' ? ' selected' : ''}>Submitted</option>
        <option${s.status === 'Verified' ? ' selected' : ''}>Verified</option>
        <option${s.status === 'Needs Fix' ? ' selected' : ''}>Needs Fix</option>
      </select>
      <input type="text" placeholder="Login email..." value="${(s.email || '').replace(/"/g, '&quot;')}" onchange="setDir(${i},'email',this.value)">
      <input type="text" placeholder="Profile URL..." value="${(s.profileUrl || '').replace(/"/g, '&quot;')}" onchange="setDir(${i},'profileUrl',this.value)">
    </div>`;
  }).join('');
}

function setDir(i, prop, val) {
  const k = 'dir' + i;
  if (!state.dirs[k]) state.dirs[k] = {};
  state.dirs[k][prop] = val;
  saveState();
}

function renderGBPServices() {
  const c = document.getElementById('gbpServicesList');
  c.innerHTML = GBP_SERVICES.map((s, i) => `<div class="accordion-item">
    <div class="accordion-header" onclick="this.nextElementSibling.classList.toggle('open')">
      <span>${s.name}</span><span class="chevron">▼</span>
    </div>
    <div class="accordion-body">
      <p>${s.desc}</p>
      <button class="btn btn-copy btn-sm" style="margin-top:8px" onclick="copyText('${s.name}: ${s.desc.replace(/'/g, "\\'")}')">📋 Copy</button>
    </div>
  </div>`).join('');
}

function renderPartners() {
  const partners = state.partners || [];
  const typeFilter = document.getElementById('partnerTypeFilter').value;
  const filtered = typeFilter === 'All' ? partners : partners.filter(p => p.type === typeFilter);
  const tbody = document.getElementById('partnerBody');
  tbody.innerHTML = filtered.map((p, idx) => {
    const realIdx = partners.indexOf(p);
    return `<tr>
      <td><input type="text" value="${(p.name || '').replace(/"/g, '&quot;')}" onchange="updatePartner(${realIdx},'name',this.value)"></td>
      <td><input type="text" value="${(p.website || '').replace(/"/g, '&quot;')}" onchange="updatePartner(${realIdx},'website',this.value)"></td>
      <td><input type="text" value="${(p.email || '').replace(/"/g, '&quot;')}" onchange="updatePartner(${realIdx},'email',this.value)"></td>
      <td><input type="text" value="${(p.phone || '').replace(/"/g, '&quot;')}" onchange="updatePartner(${realIdx},'phone',this.value)"></td>
      <td><select onchange="updatePartner(${realIdx},'type',this.value)">
        ${PARTNER_TYPES.map(t => `<option${p.type === t ? ' selected' : ''}>${t}</option>`).join('')}
      </select></td>
      <td><input type="checkbox" ${p.contacted ? 'checked' : ''} onchange="updatePartner(${realIdx},'contacted',this.checked)"></td>
      <td><input type="checkbox" ${p.replied ? 'checked' : ''} onchange="updatePartner(${realIdx},'replied',this.checked)"></td>
      <td><input type="checkbox" ${p.backlink ? 'checked' : ''} onchange="updatePartner(${realIdx},'backlink',this.checked)"></td>
      <td><input type="text" value="${(p.notes || '').replace(/"/g, '&quot;')}" onchange="updatePartner(${realIdx},'notes',this.value)"></td>
      <td><button class="btn btn-danger btn-sm" onclick="removePartner(${realIdx})">✕</button></td>
    </tr>`;
  }).join('');
}

function addPartner() {
  if (!state.partners) state.partners = [];
  state.partners.push({name:'',website:'',email:'',phone:'',type:PARTNER_TYPES[0],contacted:false,replied:false,backlink:false,notes:''});
  saveState(); renderPartners();
}

function updatePartner(i, prop, val) {
  state.partners[i][prop] = val;
  saveState();
}

function removePartner(i) {
  state.partners.splice(i, 1);
  saveState(); renderPartners();
}

function renderBlogs() {
  const c = document.getElementById('blogList');
  c.innerHTML = BLOG_ITEMS.map((b, i) => {
    const s = state.blogs['blog' + i] || {};
    return `<div class="blog-item">
      <h3>${b.title} <button class="btn btn-copy btn-sm" onclick="copyText('${b.title}')">📋</button></h3>
      <div class="blog-controls">
        <select onchange="setBlog(${i},'status',this.value)">
          ${['Idea','Writing','Published','Shared','Indexed'].map(st => `<option${(s.status || 'Idea') === st ? ' selected' : ''}>${st}</option>`).join('')}
        </select>
        <input type="text" placeholder="Target keyword" value="${b.keyword}" readonly>
        <input type="text" placeholder="URL..." value="${(s.url || '').replace(/"/g, '&quot;')}" onchange="setBlog(${i},'url',this.value)">
        <input type="date" value="${s.publishDate || ''}" onchange="setBlog(${i},'publishDate',this.value)" title="Publish date">
        <input type="text" placeholder="Notes..." value="${(s.notes || '').replace(/"/g, '&quot;')}" onchange="setBlog(${i},'notes',this.value)">
      </div>
    </div>`;
  }).join('');
}

function setBlog(i, prop, val) {
  const k = 'blog' + i;
  if (!state.blogs[k]) state.blogs[k] = {};
  state.blogs[k][prop] = val;
  saveState();
}

function renderChecklist(items, stateKey, containerId) {
  const c = document.getElementById(containerId);
  c.innerHTML = items.map((item, i) => {
    const done = (state[stateKey] || {})[i];
    return `<div class="checklist-item${done ? ' done' : ''}">
      <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleChecklist('${stateKey}',${i},this.checked)">
      <span>${item}</span>
    </div>`;
  }).join('');
}

function toggleChecklist(stateKey, i, val) {
  if (!state[stateKey]) state[stateKey] = {};
  state[stateKey][i] = val;
  saveState();
  if (stateKey === 'sc') renderChecklist(SC_CHECKLIST, 'sc', 'scList');
  else renderChecklist(GBP_CHECKLIST, 'gbp', 'gbpList');
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(state, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'royals-seo-progress.json';
  a.click();
  toast('Progress exported!');
}

function importProgress() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        state = JSON.parse(ev.target.result);
        saveState();
        renderAll();
        toast('Progress imported!');
      } catch(err) { toast('Invalid file!'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

function resetProgress() {
  if (confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
    state = { tasks: {}, monthly: {}, dirs: {}, blogs: {}, sc: {}, gbp: {}, partners: [], theme: state.theme };
    saveState();
    renderAll();
    toast('Progress reset!');
  }
}

function copyAllBusinessDetails() {
  const text = `Business Name: ${BUSINESS.name}\nWebsite: ${BUSINESS.website}\nPhone: ${BUSINESS.phone}\nCategory: ${BUSINESS.category}\nLocation: ${BUSINESS.location}\nServices: ${BUSINESS.services}\n\nDescription:\n${BUSINESS.description}`;
  copyText(text);
}

function copyAllGBPServices() {
  const text = GBP_SERVICES.map(s => `${s.name}: ${s.desc}`).join('\n\n');
  copyText(text);
}

function copyFullPlan() {
  let text = '28-DAY SEO PLAN - The Royals Removals\n\n';
  for (let w = 1; w <= 4; w++) {
    text += `=== WEEK ${w} ===\n`;
    const wt = TASKS.filter(t => t.week === w);
    let day = 0;
    wt.forEach(t => {
      if (t.day !== day) { day = t.day; text += `\nDay ${day}:\n`; }
      text += `- ${t.title}: ${t.details}\n`;
    });
    text += '\n';
  }
  text += '=== MONTHLY TASKS ===\n';
  MONTHLY_TASKS.forEach(t => { text += `- ${t.title}: ${t.details}\n`; });
  copyText(text);
}

function renderAll() {
  document.documentElement.setAttribute('data-theme', state.theme || 'light');
  document.getElementById('themeBtn').textContent = state.theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  if (!localStorage.getItem('royals_start')) localStorage.setItem('royals_start', new Date().toISOString());
  renderTasks();
  renderDirectories();
  renderGBPServices();
  renderPartners();
  renderBlogs();
  renderChecklist(SC_CHECKLIST, 'sc', 'scList');
  renderChecklist(GBP_CHECKLIST, 'gbp', 'gbpList');
  updateDashboard();
}

// Init
document.addEventListener('DOMContentLoaded', renderAll);
