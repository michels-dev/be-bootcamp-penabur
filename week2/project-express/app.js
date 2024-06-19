const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const pool = require('./database/db'); // import the pool

const app = express();
const port = 3000;

// use layouts from views, layouts file mainLayout.ejs
app.use(expressLayouts);
app.use(methodOverride('_method'));
app.set('layout', 'layouts/mainLayout');
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'resources')));
// app.use(session({
//   secret: '123',
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(flash());

// middleware untuk load data
const loadContactsData = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM contacts');
    res.locals.contacts = result.rows;
    next();
  } catch(err) {
    console.error('Error fatching contacts from database:', err);
    return res.status(500).render('400', { data: {title: '500', message: 'Internal Server Error'}});
  }
};


// Route handlers
// Rute untuk akses index
app.get('/', (req, res) => {
  const data = {
      title: 'Main Page',
      message: 'Welcome to Main Page',
  };
  res.render('index', { data  });
});

// Rute untuk akses about
app.get('/about', (req, res) => {
  const data = {
      title: 'About Page',
      message: 'This is Page About',
  };
  res.render('about', { data });
});

// Rute untuk akses tambah data kontak
app.get('/formContact', (req, res) => {
  const data = {
      title: 'Form Contact',
      message: 'Add a new contact on the page here',
  };
  res.render('formContact', { data });
});

// Rute POST untuk menambahkan kontak
app.post('/formContact', async (req, res) => {
  const {name, email, mobile} = req.body;
  try {
    await pool.query('INSERT INTO contacts (name, email, mobile) VALUES ($1, $2, $3)', [name, email, mobile]);
    res.redirect('/contact');
  } catch (err) {
    console.error('Error inserting contact into database:', err);
    return res.status(500).send('Internal Server Error');
  }
});

// Rute  untuk akses update kontak
app.get('/update/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);
    const contact = result.rows[0];

    if (!contact) {
      const data = {
          title: '404',
          message: 'ERROR BANG',

      };
      return res.status(404).render('404', { data });
  }

  const data = {
      title: 'Update Contact',
      message: 'update contact on the page heres',
      contact: contact,
  };
  res.render('updateContact', { data, layout:"layouts/mainLayout"});
  } catch (err) {
    console.error('Error fetching contact from database:', err);
    return res.status(500).render('400', { data: { title: '500', message: 'Internal Server Error' } });
  }
});

// Rute POST untuk memperbarui kontak
app.post('/update/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, email, mobile } = req.body;

  try {
    const result = await pool.query('UPDATE contacts SET name = $1, email = $2, mobile = $3 WHERE id = $4', [name, email, mobile, id]);
    if (result.rowCount === 0) {
      const data = {
        title: '404',
        message: 'Contact Not Found',
      };
      return res.status(404).render('404', { data });
    }

    // Redirect setelah data diperbarui
    res.redirect('/contact')
  } catch (err) {
    console.error('Error updating contact in database:', err);
    return res.status(500).send('Internal Server Error');
  }
});

// Rute POST untuk menghapus kontak
app.get('/delete/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const result = await pool.query('DELETE FROM contacts WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      const data = {
        title: '404',
        message: 'Kontak tidak ditemukan',
      };
      return res.status(404).render('404', { data });
    }

    res.redirect('/contact'); // Ubah ke halaman yang sesuai setelah penghapusan
  } catch (err) {
    console.error('Error deleting contact from database:', err);
    return res.status(500).render('500', { data: { title: '500', message: 'Internal Server Error' } });
  }
});


// Rute untuk akses contact
app.get('/contact', loadContactsData, (req, res) => {
  const data = {
      title: 'Contact Page',
      message: 'This is Page Contact',
      contact: res.locals.contacts,
  };
  res.render('contact', { data });
});

// Rute untuk akses contact detail
app.get('/contact/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);
    const contact = result.rows[0];

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
  } catch (err) {
    console.error('Error fetching contact from database:', err);
    return res.status(500).render('400', { data: { title: '500', message: 'Internal Server Error' } });
  }
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