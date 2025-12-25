 // small demo JS: search alert and Enter key handling
    (function(){
      const searchInput = document.querySelector('.search input');
      const searchBtn = document.querySelector('.search button');
      searchBtn.addEventListener('click', ()=>{ alert('Search is a demo — implement search with JS or a backend.'); });
      searchInput.addEventListener('keydown', (e)=>{ if(e.key === 'Enter'){ searchBtn.click(); } });
    })();