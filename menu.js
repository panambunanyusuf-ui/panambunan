* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    --light-color: #F5F5F5;
    --dark-color: #2C3E50;
    --success-color: #27AE60;
    --warning-color: #F39C12;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark-color);
}

/* Navbar Styling */
.navbar {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: var(--dark-color) !important;
}

.navbar-brand {
    font-size: 1.5rem;
    color: var(--secondary-color) !important;
    transition: transform 0.3s ease;
}

.navbar-brand:hover {
    transform: scale(1.05);
}

.nav-link {
    transition: color 0.3s ease;
    margin-left: 1rem;
}

.nav-link:hover {
    color: var(--secondary-color) !important;
}

/* Hero Section */
.hero-section {
    min-height: 100vh;
    margin-top: 60px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.hero-section .container {
    position: relative;
    z-index: 1;
}

.hero-section h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-section .lead {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.btn {
    padding: 0.75rem 2rem;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
}

.btn-primary:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(210, 105, 30, 0.3);
}

/* Page Header */
.page-header {
    margin-top: 60px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)) !important;
}

/* Feature Cards */
.feature-card {
    background: white;
    border: 1px solid #e0e0e0;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-card i {
    transition: transform 0.3s ease;
}

.feature-card:hover i {
    transform: scale(1.1) rotate(5deg);
}

/* Menu Items */
.menu-card {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.menu-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.menu-card-img {
    height: 200px;
    object-fit: cover;
    overflow: hidden;
}

.menu-card-img img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
}

.menu-card:hover .menu-card-img img {
    transform: scale(1.1);
}

.menu-card-body {
    padding: 1.5rem;
}

.menu-card-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.menu-card-category {
    color: var(--secondary-color);
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

.menu-card-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--success-color);
    margin: 1rem 0;
}

.menu-card-description {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.btn-add-cart {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    color: white;
    width: 100%;
    transition: all 0.3s ease;
}

.btn-add-cart:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

/* Cart Section */
.cart-list {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
    transition: all 0.3s ease;
}

.cart-item:hover {
    background-color: var(--light-color);
}

.cart-item-info {
    flex: 1;
}

.cart-item-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.cart-item-price {
    color: var(--secondary-color);
    font-weight: 600;
}

/* Contact Form */
.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.form-control {
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 0.75rem;
    transition: all 0.3s ease;
}

.form-control:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 0.2rem rgba(210, 105, 30, 0.25);
}

.contact-item {
    transition: all 0.3s ease;
}

.contact-item i {
    color: var(--secondary-color);
}

/* Footer */
footer {
    background-color: var(--dark-color) !important;
    margin-top: 5rem;
}

footer a {
    transition: color 0.3s ease;
}

footer a:hover {
    color: var(--secondary-color) !important;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 2.5rem;
    }

    .hero-section .lead {
        font-size: 1rem;
    }

    .nav-link {
        margin-left: 0;
    }

    .d-flex.gap-3 {
        flex-direction: column;
    }

    .btn {
        width: 100%;
        margin-bottom: 0.5rem;
    }
}

/* Loading State */
.loading {
    opacity: 0.6;
    pointer-events: none;
}

/* Success Message */
.alert {
    border-radius: 5px;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}