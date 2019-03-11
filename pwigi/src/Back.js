const sqlite3 = require('sqlite3').verbose();

const express = require('express');
const app = express();
const cors = require('cors');

const dbFile = 'pwigy.db';
const db = new sqlite3.Database(dbFile);
app.use(cors());

db.serialize( () => {
    if( !fs.existsSync(dbFile) ) {
        console.log("Pwigy");
        db.run('CREATE TABLE IF NOT EXISTS type (type_id INTEGER PRIMARY KEY AUTOINCREMENT, type_name TEXT');

        db.run('INSERT INTO type (type_name) VALUES (?)', 'Articles');
        db.run('INSERT INTO type (type_name) VALUES (?)', 'Products');
 
        db.run('CREATE TABLE IF NOT EXISTS articles_category (articles_category_id INTEGER PRIMARY KEY AUTOINCREMENT, articles_category_name TEXT)');

        db.run('INSERT INTO articles_category (articles_category_name) VALUES (?)', 'News');
        db.run('INSERT INTO articles_category (articles_category_name) VALUES (?)', 'Art & Lifestyle');
        db.run('INSERT INTO articles_category (articles_category_name) VALUES (?)', 'Fashion');

        db.run('CREATE TABLE IF NOT EXISTS articles (articles_id INTEGER PRIMARY KEY AUTOINCREMENT, articles_tittle, articles_name TEXT, articles_presentation TEXT, articles_photo1 TEXT, articles_paragraph1 TEXT, articles_category_id INTEGER, type_id INTEGER, FOREIGN KEY(articles_category_id) REFERENCES articles_category(articles_category_id), FOREIGN KEY (type_id) REFERENCES type(type_id))');

        db.run('INSERT INTO articles (articles_tittle, articles_name, articles_presentation, articles_photo1, articles_paragrah1, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?, ?, ?)', 'Gender Equality', 'Why Gender Equality Is One Of The Great Human Rights Causes Of Our Time', 'If there is one thing that is constant, it is “change”. And change is exactly the one thing that is constant when it comes to fashion. Since the beginning of human civilization, there has been a constant effort being put to make one look better. The different styles in fashion have always gone through innumerable changes. With the increase in the amount of innovations, the change in trend and fashion styles have also been rapid. So keeping that in mind, here is the list of a few fashion styles that we accepted with all our hearts:', "woman at the top.jpg", 'We have had some victories. For the first time, UK companies have been required to publish their gender pay gap data.', 1, 1);
        db.run('INSERT INTO articles (articles_tittle, articles_name, articles_presentation, articles_photo1, articles_paragrah1, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?, ?, ?)', 'vegan leaather', 'Your Closet', 'Most vegan leather is made of polyurethane, a polymer that can be made to order for any designer’s whim. It can sparkle, have a nice glossy sheen, or be saturated in all kinds of shades that put leather to shame. Speaking of designers, Stella McCartney is among those who feature only vegan leather in their collections. And no wonder: Vegan leather is versatile. From moto jackets in every cut and color to the perfect little black dress—and even intimate items that are sure to tickle one’s fancy—there’s a vegan leather version. That’s just for starters. You can also find vegan leather shoes, boots, handbags, billfolds, and seat covers for your car. And if you have deep pockets, Tesla recently became the latest luxury automaker to offer vegan leather seating, joining BMW, Mercedes-Benz, Lexus, and Ferrari.', "cow.jpg", 'Messenger Bags', 1, 2);
        db.run('INSERT INTO articles (articles_tittle, articles_name, articles_presentation, articles_photo1, articles_paragrah1, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?, ?, ?)', 'Style', '10 Types of Fashion Styles, Which One is You?', 'If there is one thing that is constant, it is “change”. And change is exactly the one thing that is constant when it comes to fashion. Since the beginning of human civilization, there has been a constant effort being put to make one look better. The different styles in fashion have always gone through innumerable changes. With the increase in the amount of innovations, the change in trend and fashion styles have also been rapid. So keeping that in mind, here is the list of a few fashion styles that we accepted with all our hearts:', "dress.jpg", 'What is vintage style? One of the most adorable fashion styles, it definitely is a blast from the past. From flapper dresses to pinup clothing and from retro swimwear to indie clothing, the vintage look is a culmination of fashion from the 20’s to the 70’s. It is the one trend that overcame the test of time. Look these celebrities who are feature for their vintage style.', 1, 3);
        
        db.run('CREATE TABLE IF NOT EXISTS products_category (products_category_id INTEGER PRIMARY KEY AUTOINCREMENT, products_category_name TEXT)');

        db.run('INSERT INTO articles (products_category_name) VALUES (?)', 'Suits');
        db.run('INSERT INTO articles (products_category_name) VALUES (?)', 'Coats');
        db.run('INSERT INTO articles (products_category_name) VALUES (?)', 'Dresses');
        db.run('INSERT INTO articles (products_category_name) VALUES (?)', 'Purses');
        db.run('INSERT INTO articles (products_category_name) VALUES (?)', 'Shoes');
        db.run('INSERT INTO articles (products_category_name) VALUES (?)', 'Maternitybikini');

        db.run('CREATE TABLE IF NOT EXISTS products (products_id INTEGER PRIMARY KEY AUTOINCREMENT, products_name TEXT, products_image TEXT, products_price NUMBER, products_description TEXT, products_category_id INTEGER, type_id INTEGER FOREIGN KEY (products_category_id) REFERENCES products_category(products_category_id), FOREIGN KEY (type_id) REFERENCES type(type_id)');

        db.run('INSERT INTO products (products_name, products_image, products_price, products_description, products_category_id) VALUES (?, ?, ?, ?, ?)', 'Suit', "Suits.jpg", 250, "Best color to wear with your skin tone", 1);
        db.run('INSERT INTO products (products_name, products_image, products_price, products_description, products_category_id) VALUES (?, ?, ?, ?, ?)', 'Suit', "suits2.jpg", 100, "White and black suits are about to take over your wardrobe", 1);
        db.run('INSERT INTO products (products_name, products_image, products_price, products_description, products_category_id) VALUES (?, ?, ?, ?, ?)', 'Coat', "burberry.jpg", 1750, "Burberry London The Kensington Mid Cotton-Gabardine Trench Coat", 2);
        db.run('INSERT INTO products (products_name, products_image, products_price, products_description, products_category_id) VALUES (?, ?, ?, ?, ?)', 'Dress', "dresssummer.jpg", 95, "Rust red slip dress", 3);
        db.run('INSERT INTO products (products_name, products_image, products_price, products_description, products_category_id) VALUES (?, ?, ?, ?, ?)', 'Shoes', "miumiu.jpg", 300, "Back to schoo life ", 5);
        db.run('INSERT INTO products (products_name, products_image, products_price, products_description, products_category_id) VALUES (?, ?, ?, ?, ?)', 'Purse', "prada.jpg", 1400, "Panelled 'city' calfskin and Saffiano leather tote in black. Twin rolled carry handles featuring detachable keyring at top", 4);
        db.run('INSERT INTO products (products_name, products_image, products_price, products_description, products_category_id) VALUES (?, ?, ?, ?, ?)', 'Maternity', "maternitybikin.jpg", 250, "Shop. Rent. Consign. Gently used designer maternity brands you love at up to 90% off retail! MotherhoodCloset.com Maternity ", 6);
    }
});

