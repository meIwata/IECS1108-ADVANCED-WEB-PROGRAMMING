document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/quotes');
  const data = await response.json();

  const table = document.createElement('table');
  table.border = '1';
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  // 根據 movie_quotes 資料庫欄位設置標題
  ['id', 'provider', 'movie_name', 'quote'].forEach(col => {
    const th = document.createElement('th');
    th.textContent = col;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  data.forEach(row => {
    const tr = document.createElement('tr');
    ['id', 'provider', 'movie_name', 'quote'].forEach(col => {
      const td = document.createElement('td');
      td.textContent = row[col];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  document.body.appendChild(table);

  // 新增訊息顯示區域
  let msgP = document.createElement('p');
  msgP.id = 'serverMsg';
  document.body.appendChild(msgP);

  // 表單送出處理
  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const provider = document.getElementById('provider').value;
      const movie_name = document.getElementById('movie_name').value;
      const quote = document.getElementById('quote').value;
      const params = new URLSearchParams({ provider, movie_name, quote });
      try {
        const res = await fetch('/api/insert', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString()
        });
        const msg = await res.text();
        msgP.textContent = msg;
        // 重新載入資料表
        await reloadTable();
        form.reset();
      } catch (err) {
        msgP.textContent = '送出失敗';
      }
    });
  }

  // 封裝重新載入資料表的函式
  async function reloadTable() {
    const response = await fetch('/api/quotes');
    const data = await response.json();
    // 移除舊的 table
    if (table.parentNode) table.parentNode.removeChild(table);
    // 重新建立 table
    const newTable = document.createElement('table');
    newTable.border = '1';
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['id', 'provider', 'movie_name', 'quote'].forEach(col => {
      const th = document.createElement('th');
      th.textContent = col;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    newTable.appendChild(thead);
    const tbody = document.createElement('tbody');
    data.forEach(row => {
      const tr = document.createElement('tr');
      ['id', 'provider', 'movie_name', 'quote'].forEach(col => {
        const td = document.createElement('td');
        td.textContent = row[col];
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    newTable.appendChild(tbody);
    document.body.insertBefore(newTable, msgP);
  }
});
