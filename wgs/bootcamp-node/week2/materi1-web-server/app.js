const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk load data
const loadContactsData = (req, res, next) => {
    const dataFilePath = path.join(__dirname, 'data', 'contacts.json');
    fs.readFile(dataFilePath, 'utf8', (err, jsonData) => {
        if (err) {
            return res.status(500).render('404', { data: { title: '500', message: 'Internal Server Error' } });
        }
        res.locals.contacts = JSON.parse(jsonData);
        next();
    });
};

// Route handlers
app.get('/', (req, res) => {
    const data = {
        title: 'Index',
        message: 'MAIN PAGE',
    };
    res.render('index', { data });
});

app.get('/about', (req, res) => {
    const data = {
        title: 'About',
        message: 'PAGE ABAOUT',
    };
    res.render('about', { data });
});

app.get('/contact', loadContactsData, (req, res) => {
    const data = {
        title: 'Contact',
        message: 'PAGE CONTACT',
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
            message: 'NOT FOUND',
        };
        return res.status(404).render('404', { data });
    }

    const data = {
        title: 'Contact Details',
        message: 'Contact Details',
        contact: contact,
    };
    res.render('contact-details', { data });
});

// 404 handler
app.use((req, res) => {
    const data = {
        title: '404',
        message: 'Page Not Found',
    };
    res.status(404).render('404', { data });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});