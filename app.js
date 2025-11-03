// app.js — minimal client-side logic and auth placeholders
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();


const authSection = document.getElementById('auth');
const feedSection = document.getElementById('feed');


// placeholders for OAuth
document.getElementById('btn-google').addEventListener('click', ()=>{
// TODO: integrate Google OAuth or Firebase Auth
alert('Google sign-in placeholder — add your OAuth flow here');
});


document.getElementById('btn-microsoft').addEventListener('click', ()=>{
alert('Microsoft sign-in placeholder — add your OAuth flow here');
});


document.getElementById('btn-apple').addEventListener('click', ()=>{
alert('Apple sign-in placeholder — add your OAuth flow here');
});


// demo: show feed after simple email login
document.getElementById('email-login').addEventListener('submit', e =>{
e.preventDefault();
authSection.classList.add('hidden');
feedSection.classList.remove('hidden');
loadDemoPosts();
});


function loadDemoPosts(){
const posts = document.getElementById('posts');
posts.innerHTML = '';
for(let i=1;i<=6;i++){
const p = document.createElement('div'); p.className='post card';
p.innerHTML = `\n <img src="https://picsum.photos/seed/${i}/600/400" alt="post-${i}"/>\n <div class="meta">User ${i} • 5m ago</div>\n `;
posts.appendChild(p);
}
}


// register service worker
if('serviceWorker' in navigator){
navigator.serviceWorker.register('/sw.js').catch(()=>console.warn('SW register failed'));
}
