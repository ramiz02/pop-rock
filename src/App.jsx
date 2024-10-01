import React, { useState } from "react";
import './App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  // Image URLs for the slideshow
  const slides = [
    "https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w__",
    "https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w__",
    "https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w__"
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Product Data (dynamic if you have an API)
  const products = [...Array(10)].map((_, i) => ({
    id: i + 1,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
    image: "https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w__" // Replace with actual product images
  }));

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo-cont">
            <img src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1727751133/Group_hvfpee.png" alt="logo" className="logo-image"/>
            <h4>Pop Rock Crystal</h4>
          </div>
          <div className="list-cart-cont">
            <ul className="list-cont">
              <li className="list-item">Home</li>
              <li className="list-item">Shop</li>
              <li className="list-item">About Us</li>
              <li className="list-item">Help</li>
            </ul>
            <img src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1727752689/Group_109_onsifx.png" className="cart-image" alt="cart-logo"/>
          </div>
        </nav>
        <div className="head-cont-details">
          <div className="header-content">
            <h1>Welcome to Pop Rock Crystal Shop!</h1>
            <p>
              Here you will find unique phone accessories, crystals, jewelry and more.
              Free shipping inside the U.S. and our phone grips come with a limited
              warranty. Enjoy!
            </p>
            <div className="button-group">
              <button className="shop-now">SHOP NOW</button>
              <button className="about-us">About Us</button>
            </div>
            
          </div>
          

          {/* Featured Product Slider */}
          <div className="featured-product">
            <div className="slideshow-container">
              <img src={slides[currentSlide]} alt="Crystal Agate Phone Grip" style={{ width: "50%" }} />
              <div className="text">
                CRYSTAL AGATE PHONE GRIP <span className="price">- 18.99$</span>
              </div>
              <a className="prev" onClick={prevSlide}>&#10094;</a>
              <a className="next" onClick={nextSlide}>&#10095;</a>
            </div>

            {/* Slider Dots */}
            <div style={{ textAlign: "center" }}>
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </header>
      <img src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1727753417/Group_103_leip4c.png" alt="scroll-logo" className="scroll-image"/>

      {/* Product Section */}
      <section className="products">
        <h2 className="all-product-head">All Products</h2>
        <hr className="border"/>
        <div class="filter-sort-container">
          <div class="filter-section">
            <label for="filter">Filter:</label>
            <select id="filter" name="filter">
              <option value="all-products">CRYSTAL AGATE PHONE GRIP</option>
              <option value="electronics">CRYSTAL AGATE PHONE GRIP</option>
            </select>
          </div>

          <div class="sort-section">
            <label for="sort">Sort:</label>
            <select id="sort" name="sort">
              <option value="best-selling">Best Selling</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="new-arrivals">New Arrivals</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <p className="product-name">{product.name}</p>
              <p className="price">{product.price}</p>
              <button className="buy-now">BUY NOW</button>
            </div>
          ))}
        </div>
        <button className="view-button">View All</button>
      </section>

      {/* Best Price Section */}
      <section className="best-price">
        <div className="end-description">
          <h1 className="best-price-head">BEST PRICE</h1>
          <h1 className="end-product-name">Agate Phone Grip</h1>
          <div className="price-details">
            <span className="old-price">44.50$</span>
            <span className="new-price">19.50$</span>
          </div>
          <p className="product-description">
            These Pop Rock Crystal grip tops can be swapped with other tops depending
            on your mood, outfit, nails, etc. Gently squeeze the sides to remove and swap with another color or design!
          </p>
          <button className="buy-now activate">BUY NOW</button>
        </div>
        <div className="last-image">
          <img src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w__" 
          alt="Pop-rock-crystal" 
          className="image"/>
        </div>
      </section>
    </div>
  );
};

export default App;
