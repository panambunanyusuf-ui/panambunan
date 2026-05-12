let allProducts = [];
let currentFilter = 'all';

// Load Menu Items
async function loadMenuItems() {
    try {
        const response = await fetch(`${API_URL}/menu`);
        const data = await response.json();
        
        if (data.success && data.data) {
            allProducts = data.data;
            filterProducts('all');
        }
    } catch (error) {
        console.error('Error loading menu:', error);
        loadSampleMenuItems();
    }
}

function loadSampleMenuItems() {
    allProducts = [
        {
            id: 1,
            name: 'Espresso',
            category: 'coffee',
            price: 35000,
            description: 'Kopi espresso murni dengan cita rasa kuat',
            image: 'https://images.unsplash.com/photo-1442512595331-e89e6a5e2602?w=400'
        },
        {
            id: 2,
            name: 'Cappuccino',
            category: 'coffee',
            price: 45000,
            description: 'Espresso dengan susu dan busa yang sempurna',
            image: 'https://images.unsplash.com/photo-1578452413467-a28d1c4fe048?w=400'
        },
        {
            id: 3,
            name: 'Latte',
            category: 'coffee',
            price: 48000,
            description: 'Kopi latte dengan susu premium yang creamy',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400'
        },
        {
            id: 4,
            name: 'Americano',
            category: 'coffee',
            price: 40000,
            description: 'Espresso dengan air panas yang nikmat',
            image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400'
        },
        {
            id: 5,
            name: 'Green Tea',
            category: 'tea',
            price: 30000,
            description: 'Teh hijau segar dengan aroma yang menenangkan',
            image: 'https://images.unsplash.com/photo-1597318910003-96f43bff0b12?w=400'
        },
        {
            id: 6,
            name: 'Chamomile Tea',
            category: 'tea',
            price: 32000,
            description: 'Teh chamomile untuk relaksasi sempurna',
            image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400'
        },
        {
            id: 7,
            name: 'Croissant',
            category: 'pastry',
            price: 25000,
            description: 'Croissant renyah dengan mentega berkualitas',
            image: 'https://images.unsplash.com/photo-1585686817260-d2ff78b24c86?w=400'
        },
        {
            id: 8,
            name: 'Chocolate Cake',
            category: 'pastry',
            price: 35000,
            description: 'Kue coklat lezat yang sempurna untuk dinikmati',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400'
        }
    ];
    filterProducts('all');
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    
    let filtered = allProducts;
    if (category !== 'all') {
        filtered = allProducts.filter(product => product.category === category);
    }
    
    displayMenuItems(filtered);
}

function displayMenuItems(products) {
    const container = document.getElementById('menu-items');
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = '<p class="text-center col-12 py-5">Tidak ada produk dalam kategori ini.</p>';
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="menu-card">
                <div class="menu-card-img">
                    <img src="${product.image || 'https://via.placeholder.com/400x200'}" alt="${product.name}">
                </div>
                <div class="menu-card-body">
                    <div class="menu-card-category">${getCategoryLabel(product.category)}</div>
                    <h5 class="menu-card-title">${product.name}</h5>
                    <p class="menu-card-description">${product.description}</p>
                    <div class="menu-card-price">Rp ${formatPrice(product.price)}</div>
                    <button class="btn btn-add-cart" onclick="addToCart('${product.id}', '${product.name}', ${product.price})">
                        <i class="fas fa-shopping-cart me-2"></i>Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        coffee: 'Kopi',
        tea: 'Teh',
        pastry: 'Pastry'
    };
    return labels[category] || category;
}

// Filter Button Click Handler
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            filterProducts(e.target.dataset.filter);
        });
    });
});