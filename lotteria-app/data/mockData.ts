// Định nghĩa kiểu dữ liệu (Interfaces)
export interface Product {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    image: any; // Dùng 'any' tạm thời cho resource hình ảnh tĩnh
}

export interface Category {
    id: string;
    name: string;
    key: 'bestseller' | 'promotion' | 'fried_chicken' | 'other';
    image: any;
}

// Dữ liệu giả cho Danh mục
// ... (các interfaces)

// Dữ liệu giả cho Danh mục
export const mockCategories: Category[] = [
    // SỬA ĐƯỜNG DẪN TỪ '../../assets/' thành '../assets/'
    { id: '1', name: 'Bestseller', key: 'bestseller', image: require('../assets/placeholder-category-1.png') },
    { id: '2', name: 'Khuyến mãi', key: 'promotion', image: require('../assets/placeholder-category-2.png') },
    { id: '3', name: 'Gà Rán', key: 'fried_chicken', image: require('../assets/placeholder-category-3.png') },
    { id: '4', name: 'Gà Rán Phần', key: 'other', image: require('../assets/placeholder-category-4.png') },
    { id: '5', name: 'Combo', key: 'other', image: require('../assets/placeholder-category-5.png') },
];

// Dữ liệu giả cho Sản phẩm
export const mockProducts: Product[] = [
    // SỬA ĐƯỜNG DẪN TỪ '../../assets/' thành '../assets/'
    { id: 'a', name: 'Loy Set', price: 145000, oldPrice: 177000, image: require('../assets/placeholder-product-loy.png') },
    { id: 'b', name: 'Lody Set', price: 145000, oldPrice: 169000, image: require('../assets/placeholder-product-lody.png') },
    { id: 'c', name: 'Lony Set', price: 195000, oldPrice: 237000, image: require('../assets/placeholder-product-lony.png') },
    { id: 'd', name: 'Loking Set', price: 280000, oldPrice: 337000, image: require('../assets/placeholder-product-loking.png') },
];