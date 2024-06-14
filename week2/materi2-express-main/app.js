const express = require('express');
const path = require('path');
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

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
app.post('/formContact', loadContactsData, (req, res) => {
  const {name, email, mobile} = req.body;
  const contacts = res.locals.contacts;
  let newContact = {name, email, mobile};

  if(contacts){
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    newContact = {id: newId, ... newContact};
    contacts.push(newContact);

    const dataPath = path.join(__dirname, 'data', 'contacts.json');
    fs.writeFile(dataPath, JSON.stringify(contacts, null, 2), (err) => {
      if(err){
        console.error('Error writing to contacts.json:', err);
        return res.status(500).send('Internal Server Error')
      }

        // Redirect setelah data disimpan
        res.redirect('/contact');
    });
  } else {
    res.redirect('/formContact');
  }
});
// Rute  untuk akses update kontak
app.get('/update/:id', loadContactsData, (req, res) => {
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
      title: 'Update Contact',
      message: 'update contact on the page heres',
      contact: contact,
  };
  res.render('updateContact', { data, layout:"layouts/mainLayout"});
});

// Rute POST untuk memperbarui kontak
app.post('/update/:id', loadContactsData, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, email, mobile } = req.body;
  const contacts = res.locals.contacts;
  const contactIndex = contacts.findIndex(c => c.id === id);

  if (contactIndex === -1) {
    const data = {
      title: '404',
      message: 'Contact Not Found',
    };
    return res.status(404).render('404', { data });
  }

  // Update kontak
  contacts[contactIndex] = { id, name, email, mobile };

  const dataPath = path.join(__dirname, 'data', 'contacts.json');
  fs.writeFile(dataPath, JSON.stringify(contacts, null, 2), (err) => {
    if (err) {
      console.error('Error writing to contacts.json:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Redirect setelah data diperbarui
    res.redirect('/contact'); // Anda dapat mengubah rute ini sesuai kebutuhan Anda
  });
});

// Rute POST untuk menghapus kontak
app.delete('/delete/:id', loadContactsData, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const contacts = res.locals.contacts.filter(c => c.id !== id);

  const dataPath = path.join(__dirname, 'data', 'contacts.json');
  fs.writeFile(dataPath, JSON.stringify(contacts, null, 2), (err) => {
    if (err) {
      console.error('Error writing to contacts.json:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Redirect setelah data diperbarui
    res.redirect('/contact'); // Anda dapat mengubah rute ini sesuai kebutuhan Anda
  });
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