import { useState } from 'react'
import '../styles/ProductCard.css'

function ProductCard({ product, addToCart }) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [showDescription, setShowDescription] = useState(false)

    return (
        <div className="product-card">
            <div className="product-image-container">
                {!imageLoaded && <div className="image-loader"></div>}
                <img
                    src={product.image}
                    alt={product.name}
                    className={`product-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                    onClick={() => setShowDescription(!showDescription)}
                    loading='lazy'
                />
                {showDescription && (
                    <div className="product-description-popup">
                        <p>{product.description}</p>
                    </div>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₦{product.price.toFixed(2)}</p>
                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard