# ☕ Brew Haven - Coffeeshop Landing Page

Website landing page modern untuk coffeeshop dengan 3 halaman, backend API, dan UI/UX yang menarik.

## 🎯 Fitur Utama

### Frontend
- ✅ **3 Halaman** - Home, Menu, Contact
- ✅ **Responsive Design** - Mobile-friendly dengan Bootstrap 5
- ✅ **Smooth Animations** - Transisi dan animasi yang menarik
- ✅ **Shopping Cart** - Tambah produk ke keranjang
- ✅ **Modern UI/UX** - Design yang clean dan profesional

### Backend
- ✅ **Node.js + Express** - Framework backend yang powerful
- ✅ **RESTful API** - CRUD untuk Menu, Orders, Contact
- ✅ **JSON Storage** - Data disimpan dalam format JSON (ready for MongoDB upgrade)
- ✅ **CORS Enabled** - Support untuk cross-origin requests

## 📁 Struktur Project

```
coffeeshop-website/
├── frontend/
│   ├── index.html          # Home Page
│   ├── menu.html           # Menu Page
│   ├── contact.html        # Contact Page
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── animations.css  # Animation effects
│   └── js/
│       ├── main.js         # Main functionality
│       ├── menu.js         # Menu page logic
│       └── contact.js      # Contact form handling
├── backend/
│   ├── server.js           # Entry point
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   └── middleware/         # Custom middleware
├── data/
│   ├── menu.json           # Menu data
│   ├── orders.json         # Orders data
│   └── contacts.json       # Contact messages
├── package.json
├── .env.example
└── README.md
```

## 🚀 Cara Menggunakan

### 1. Setup Awal

```bash
# Clone repository
git clone <repository-url>
cd coffeeshop-website

# Install dependencies
npm install

# Copy .env.example ke .env
cp .env.example .env
```

### 2. Jalankan Server

```bash
# Development mode (dengan auto-reload)
npm run dev

# Production mode
npm start
```

Server akan berjalan di `http://localhost:3000`

### 3. Buka di Browser

- **Home**: http://localhost:3000/frontend/index.html
- **Menu**: http://localhost:3000/frontend/menu.html
- **Contact**: http://localhost:3000/frontend/contact.html

## 📡 API Endpoints

### Menu API
- `GET /api/menu` - Dapatkan semua menu
- `GET /api/menu/:id` - Dapatkan menu by ID
- `POST /api/menu` - Buat menu baru (admin)
- `PUT /api/menu/:id` - Update menu (admin)
- `DELETE /api/menu/:id` - Hapus menu (admin)

### Orders API
- `GET /api/orders` - Dapatkan semua orders
- `GET /api/orders/:id` - Dapatkan order by ID
- `POST /api/orders` - Buat order baru
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Hapus order

### Contact API
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Dapatkan semua contact messages
- `POST /api/contact/newsletter` - Subscribe newsletter

## 🎨 Fitur UI/UX

- **Smooth Animations**: Fade in, slide, zoom, dan hover effects
- **Responsive Navigation**: Mobile-friendly navbar dengan hamburger menu
- **Interactive Forms**: Contact form dengan validation
- **Shopping Cart**: Local storage untuk keranjang belanja
- **Product Filtering**: Filter menu by category
- **Price Formatting**: Format harga dengan separator
- **Toast Notifications**: Alert messages untuk user feedback

## 🔧 Teknologi Yang Digunakan

### Frontend
- HTML5
- Bootstrap 5
- CSS3 (Custom + Animations)
- Vanilla JavaScript
- FontAwesome Icons

### Backend
- Node.js
- Express.js
- CORS
- Body Parser
- Dotenv

### Data Storage
- JSON Files (Development)
- MongoDB (Ready for upgrade)

## 📝 Contoh Request API

### Membuat Order
```javascript
fetch('http://localhost:3000/api/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        items: [
            { productId: 1, quantity: 2, price: 35000 }
        ],
        totalAmount: 70000,
        notes: 'No sugar'
    })
})
```

### Submit Contact Form
```javascript
fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone: '+6281234567890',
        subject: 'Booking Event',
        message: 'Saya ingin booking tempat untuk event'
    })
})
```

## 🚀 Upgrade Path

1. **Database**: Integrate dengan MongoDB
2. **Authentication**: Tambah sistem login & register
3. **Payment Gateway**: Integrasi Midtrans/Stripe
4. **Admin Panel**: Dashboard untuk manage menu & orders
5. **Email Service**: Kirim email notifications
6. **File Upload**: Upload gambar untuk produk

## 📧 Kontak & Support

Untuk pertanyaan atau issues, silakan buat issue di repository ini.

## 📄 License

MIT License - Bebas digunakan untuk keperluan apapun

---

**Made with ❤️ for Coffeeshop Lovers**