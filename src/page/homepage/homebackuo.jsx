import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">7</div>
        <nav className="navigation">
          <ul>
            <li><a href="#">All Product</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Displays</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <div className="user-actions">
          <div className="search-icon">Q</div>
          <a href="#" className="login-link">Login</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Power meets speed.</h1>
          <p className="subtitle">The ultimate gaming laptop of 2025.</p>
          <p>Dominate every game with ultra-fast performance. Experience immersive visuals and exceptional build quality for gamers, creators, and power users.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="https://www.pngkey.com/png/full/195-1958410_laptop-asus-rog-zephyrus-s-gx531gs.png" alt="Gaming Laptop" />
        </div>
      </section>

      <section className="new-products">
        <h2 className="section-title">New Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="/images/product1.png" alt="Product 1" /> 
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          {/* ... more product cards ... */}
          <div className="product-card">
            <div className="product-image">
              <img src="/images/product2.png" alt="Product 2" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/product3.png" alt="Product 3" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/product4.png" alt="Product 4" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/product5.png" alt="Product 5" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="new-arrival-products">
        <h2 className="section-title">New Arrival Products</h2>
        <div className="product-grid">
          {/* Sample Product Card - Repeat for each new arrival product */}
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival1.png" alt="Arrival 1" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          {/* ... more product cards ... */}
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival2.png" alt="Arrival 2" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival3.png" alt="Arrival 3" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival4.png" alt="Arrival 4" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival5.png" alt="Arrival 5" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival6.png" alt="Arrival 6" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival7.png" alt="Arrival 7" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival8.png" alt="Arrival 8" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival9.png" alt="Arrival 9" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/arrival10.png" alt="Arrival 10" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-highlights">
        <h2 className="section-title"></h2> {/* Intentionally left blank as there's no title in the design */}
        <div className="brand-grid">
          <div className="brand-card">
            <div className="brand-logo">Lenovo</div>
            <div className="brand-content">
              <p className="brand-description">Explore the latest innovations from Lenovo. Discover powerful laptops and cutting-edge technology designed for performance and reliability.</p>
              <button className="shop-now-button">Shop Now</button>
            </div>
            <div className="brand-image">
              <img src="/images/lenovo-laptop.png" alt="Lenovo Laptop" /> {/* Replace with your image path */}
            </div>
          </div>

          <div className="brand-card">
            <div className="brand-logo">ISTAR</div>
            <div className="brand-content">
              <p className="brand-description">Experience the ultimate in gaming with ISTAR products. From high-performance components to immersive peripherals, ISTAR delivers top-tier quality for gamers.</p>
              <button className="shop-now-button">Shop Now</button>
            </div>
            <div className="brand-image">
              <img src="/images/istar-monitor.png" alt="ISTAR Monitor" /> {/* Replace with your image path */}
            </div>
          </div>
        </div>
      </section>

      <section className="best-selling-products">
        <h2 className="section-title">Best Selling</h2>
        <div className="product-grid">
          {/* Sample Product Card - Repeat for each best-selling product */}
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling1.png" alt="Best Selling 1" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          {/* ... more product cards ... */}
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling2.png" alt="Best Selling 2" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling3.png" alt="Best Selling 3" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling4.png" alt="Best Selling 4" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling5.png" alt="Best Selling 5" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling6.png" alt="Best Selling 6" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling7.png" alt="Best Selling 7" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling8.png" alt="Best Selling 8" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling9.png" alt="Best Selling 9" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/images/best-selling10.png" alt="Best Selling 10" /> {/* Replace with your image path */}
            </div>
            <div className="product-details">
              <h3 className="product-name">ZX DISPLAY - M8 Pro 16</h3>
              <p className="product-price">$499.00</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo">7</div>
          <p>© 2025. All rights reserved.</p>
        </div>
        <div className="footer-middle">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          {/* Add social media icons or links here */}
        </div>
      </footer>
    </div>
  )
}

