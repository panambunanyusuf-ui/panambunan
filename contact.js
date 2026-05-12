// API Configuration
const API_URL = 'http://localhost:3000/api';

// Fetch Featured Products for Home Page
async function loadFeaturedProducts() {
    try {
        const response = await fetch(`${API_URL}/menu?limit=3`);
        const data = await response.json();
        
        if (data.success && data.data) {
            displayFeaturedProducts(data.data);
        }
    } catch (error) {
        console.error('Error loading featured products:', error);
        loadSampleFeaturedProducts();
    }
}

function displayFeaturedProducts(products) {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <div class="col-md-4 mb-4">
            <div class="menu-card">
                <div class="menu-card-img">
                    <img src="${product.image || 'https://via.placeholder.com/300x200'}" alt="${product.name}">
                </div>
                <div class="menu-card-body">
                    <div class="menu-card-category">${product.category || 'Kopi'}</div>
                    <h5 class="menu-card-title">${product.name}</h5>
                    <p class="menu-card-description">${product.description}</p>
                    <div class="menu-card-price">Rp ${formatPrice(product.price)}</div>
                    <button class="btn btn-add-cart" onclick="addToCart('${product._id || product.id}', '${product.name}', ${product.price})">
                        <i class="fas fa-shopping-cart me-2"></i>Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Sample Data if API not available
function loadSampleFeaturedProducts() {
    const sampleProducts = [
        {
            id: 1,
            name: 'Espresso Premium',
            category: 'Kopi',
            price: 35000,
            description: 'Kopi espresso murni dengan cita rasa kuat dan creamy',
            image: 'https://images.unsplash.com/photo-1442512595331-e89e6a5e2602?w=500'
        },
        {
            id: 2,
            name: 'Cappuccino Klasik',
            category: 'Kopi',
            price: 45000,
            description: 'Perpaduan sempurna espresso dan susu hangat berbusa',
            image: 'https://images.unsplash.com/photo-1578452413467-a28d1c4fe048?w=500'
        },
        {
            id: 3,
            name: 'Americano Dingin',
            category: 'Kopi',
            price: 40000,
            description: 'Espresso dengan air panas dan es batu yang menyegarkan',
            image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500'
        }
    ];
    displayFeaturedProducts(sampleProducts);
}

// Format Price
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(price);
}

// Cart Management
function addToCart(productId, productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId,
            productName,
            price,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success message
    showNotification('Produk ditambahkan ke keranjang!', 'success');
    updateCartUI();
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartQuantity(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-muted text-center py-5">Keranjang Anda kosong</p>';
        if (subtotalEl) subtotalEl.textContent = 'Rp 0';
        if (taxEl) taxEl.textContent = 'Rp 0';
        if (totalEl) totalEl.textContent = 'Rp 0';
        if (checkoutBtn) checkoutBtn.disabled = true;
        if (clearCartBtn) clearCartBtn.disabled = true;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.productName}</div>
                <div class="cart-item-price">Rp ${formatPrice(item.price)}</div>
            </div>
            <div class="d-flex align-items-center gap-2">
                <button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity('${item.productId}', ${item.quantity - 1})">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity('${item.productId}', ${item.quantity + 1})">+</button>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${item.productId}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="text-end fw-bold">
                Rp ${formatPrice(item.price * item.quantity)}
            </div>
        </div>
    `).join('');
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + tax;
    
    if (subtotalEl) subtotalEl.textContent = `Rp ${formatPrice(subtotal)}`;
    if (taxEl) taxEl.textContent = `Rp ${formatPrice(tax)}`;
    if (totalEl) totalEl.textContent = `Rp ${formatPrice(total)}`;
    if (checkoutBtn) checkoutBtn.disabled = false;
    if (clearCartBtn) clearCartBtn.disabled = false;
}

// Notification
function showNotification(message, type = 'success') {
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    const alert = document.createElement('div');
    alert.className = `alert ${alertClass} alert-dismissible fade show`;
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const body = document.querySelector('body');
    body.insertBefore(alert, body.firstChild);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    
    // Load featured products on home page
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        loadFeaturedProducts();
    }
    
    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
});

// Newsletter Subscription
async function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    try {
        const response = await fetch(`${API_URL}/contact/newsletter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        if (data.success) {
            showNotification('Terima kasih! Email Anda telah didaftarkan.', 'success');
            e.target.reset();
        }
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        showNotification('Gagal mendaftarkan email. Silakan coba lagi.', 'error');
    }
}