// Define a function to fetch data from DynamoDB and update the UI
function fetchDataAndRenderUI() {
  // Use AWS SDK to fetch data from DynamoDB
  dynamodb.scan(params, (err, data) => {
      if (err) {
          console.error('Error fetching data from DynamoDB:', err);
      } else {
          console.log('Data fetched from DynamoDB:', data);
          // Process the data and update the UI
          renderUI(data.Items); // Call a function to render the UI with the fetched data
      }
  });
}

// Function to render the UI with fetched data
function renderUI(items) {
  const container = document.querySelector('.view-box .row');
  
  // Iterate over the fetched items and create HTML elements for each item
  items.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col-md-6';

      const card = document.createElement('div');
      card.className = 'book-card';

      const img = document.createElement('img');
      img.src = 'Images/book.jpg';
      img.alt = 'Book Image';
      img.className = 'book-img';

      const details = document.createElement('div');
      details.className = 'book-details';

      const title = document.createElement('h5');
      title.className = 'book-title';
      title.textContent = `Book Title: ${item.Title.S}`;

      const author = document.createElement('p');
      author.textContent = `Author: ${item.Authors.S}`;

      const publisher = document.createElement('p');
      publisher.textContent = `Publisher: ${item.Publisher.S}`;

      const year = document.createElement('p');
      year.textContent = `Year: ${item.Year.N}`;

      const editBtn = document.createElement('a');
      editBtn.href = 'edit_book.html';
      editBtn.className = 'btn btn-primary btn-sm edit-btn';
      editBtn.textContent = 'Edit';

      const deleteBtn = document.createElement('a');
      deleteBtn.href = 'delete_book.html';
      deleteBtn.className = 'btn btn-danger btn-sm delete-btn';
      deleteBtn.textContent = 'Delete';

      // Append elements to their respective parent elements
      details.appendChild(title);
      details.appendChild(author);
      details.appendChild(publisher);
      details.appendChild(year);
      details.appendChild(editBtn);
      details.appendChild(deleteBtn);

      card.appendChild(img);
      card.appendChild(details);

      col.appendChild(card);

      container.appendChild(col);
  });
}

// Call the function to fetch data and render the UI
fetchDataAndRenderUI();
