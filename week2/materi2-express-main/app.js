const express = require('express');
const path = require('path');
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// use layouts from views, layouts file mainLayout.ejs
app.use(expressLayouts);
app.set('layout', 'layouts/mainLayout');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'resources')));

// middleware untuk load data
const loadContactsData = (req, res, next) => {
  const dataPath = path.join(__dirname, 'data', 'contacts.json');
  fs.readFile(dataPath, 'utf8', (err, jsonData) => {
    if (err) {
      return res.status(500).render('400', {data: {title: '500', message: 'Internal Server Error'}});
    }
    res.locals.contacts = JSON.parse(jsonData);
    next();
  });
};


// Route handlers
app.get('/', (req, res) => {
  const data = {
      title: 'Main Page',
      message: 'Welcome to Main Page',
  };
  res.render('index', { data  });
});

app.get('/about', (req, res) => {
  const data = {
      title: 'About Page',
      message: 'This is Page About',
  };
  res.render('about', { data });
});

app.get('/contact', loadContactsData, (req, res) => {
  const data = {
      title: 'Contact Page',
      message: 'This is Page Contact',
      contact: res.locals.contacts,
  };
  res.render('contact', { data });
});

app.get('/contact/:id', loadContactsData, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const contact = res.locals.contacts.find(c => c.id === id);

  if (!contact) {
      const data = {
          title: '404',
          message: 'ERROR BANG',

      };
      return res.status(404).render('404', { data });
  }

  const data = {
      title: 'Contact Details Page',
      message: 'This is Page About Contact Details',
      contact: contact,
  };
  res.render('contactDetails', { data, layout:"layouts/mainLayout"});
});

// 404 handler
app.use((req, res) => {
  const data = {
      title: '404 Page',
      message: 'Page Not Found',
  };
  res.status(404).render('404', { data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});