const views = ['home', 'about', 'work', 'skills', 'contact'];
const labels = {home: 'SE38 — ABAP Editor', about: 'SE38 — Developer Profile', work: 'SE38 — Project Showcase', skills: 'SE38 — Skills & Expertise', contact: 'SE38 — Contact & Connect'};
const messages = {home: 'Program ZPRASHANT_PORTFOLIO is ready', about: 'Profile structure displayed', work: 'Project showcase loaded', skills: 'Skill definitions loaded', contact: 'Connection channels available'};
function openView(name) { if (!views.includes(name)) return; views.forEach(view => document.getElementById(`view-${view}`).classList.toggle('active-view', view === name)); document.querySelectorAll('[data-command]').forEach(item => item.classList.toggle('active', item.dataset.command === name && (item.classList.contains('tab') || item.classList.contains('tree-item')))); document.getElementById('page-title').textContent = labels[name]; document.getElementById('status-message').textContent = messages[name]; window.location.hash = name === 'home' ? '' : name; window.scrollTo({top: 0, behavior: 'smooth'}); }
document.querySelectorAll('[data-command]').forEach(item => item.addEventListener('click', () => openView(item.dataset.command)));
document.getElementById('execute-command').addEventListener('click', () => { const command = document.getElementById('command-input').value.trim().toLowerCase().replace('/n', ''); const aliases = {se38: 'home', about: 'about', work: 'work', projects: 'work', skills: 'skills', contact: 'contact'}; openView(aliases[command] || 'home'); });
document.getElementById('command-input').addEventListener('keydown', event => { if (event.key === 'Enter') document.getElementById('execute-command').click(); });
document.getElementById('print-page').addEventListener('click', () => window.print());
document.getElementById('back-button').addEventListener('click', () => window.history.back());
document.getElementById('cancel-button').addEventListener('click', () => openView('home'));
function updateClock() { document.getElementById('clock').textContent = new Date().toLocaleTimeString('en-GB', {hour12: false}); } updateClock(); setInterval(updateClock, 1000);
const initialView = window.location.hash.slice(1); if (views.includes(initialView)) openView(initialView);
