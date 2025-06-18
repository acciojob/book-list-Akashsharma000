//your JS code here. If required.
(function(){
      const titleInput = document.getElementById('title');
      const authorInput = document.getElementById('author');
      const isbnInput = document.getElementById('isbn');
      const submitBtn = document.getElementById('submit');
      const bookList = document.getElementById('book-list');
      // Utility: create an element with attrs and children
      function createElement(tag, attrs = {}, children = []) {
        const el = document.createElement(tag);
        for (const [k,v] of Object.entries(attrs)) {
          if(k === 'class') el.className = v;
          else if(k === 'text') el.textContent = v;
          else if(k.startsWith('aria')) el.setAttribute(k, v);
          else el.setAttribute(k, v);
        }
        for(const child of children) {
          if(typeof child === 'string')
            el.textContent = child;
          else
            el.appendChild(child);
        }
        return el;
      }

	function clearInputs() {
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
        titleInput.focus();
      }
      // Validate inputs (simple non-empty check)
      function validateInputs() {
        return titleInput.value.trim() !== '' &&
               authorInput.value.trim() !== '' &&
               isbnInput.value.trim() !== '';
      }
      // Add a book row to the table
      function addBookToTable(title, author, isbn) {
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        tdTitle.textContent = title;
        tr.appendChild(tdTitle);
        const tdAuthor = document.createElement('td');
        tdAuthor.textContent = author;
        tr.appendChild(tdAuthor);
        const tdIsbn = document.createElement('td');
        tdIsbn.textContent = isbn;
        tr.appendChild(tdIsbn);
		  const tdClear = document.createElement('td');
        const btnClear = document.createElement('button');
        btnClear.className = 'delete';
        btnClear.type = 'button';
        btnClear.setAttribute('aria-label', `Remove book titled ${title}`);
        btnClear.innerHTML = '<span class="material-icons" aria-hidden="true">clear</span>';
        btnClear.addEventListener('click', () => {
          tr.remove();
        });
        tdClear.appendChild(btnClear);
        tr.appendChild(tdClear);
        bookList.appendChild(tr);
      }
      // Submit button handling
      submitBtn.addEventListener('click', () => {
        if (!validateInputs()) {
          alert('Please fill out all fields before adding a book.');
          return;
        }
        addBookToTable(titleInput.value.trim(), authorInput.value.trim(), isbnInput.value.trim());
        clearInputs();
      });

	const style = document.createElement('style');
      style.textContent = `.visually-hidden { border: 0 !important; clip: rect(1px, 1px, 1px, 1px) !important; clip-path: inset(50%) !important; height: 1px !important; margin: -1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important; white-space: nowrap !important; }`;
      document.head.appendChild(style);
    })();