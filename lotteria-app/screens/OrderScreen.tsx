import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Import Component và Data đã tách
import AppHeader from '../components/AppHeader';
import AppTabBar from '../components/AppTabBar';
import { mockProducts, mockCategories, Product } from '../data/mockData';

// Màu sắc nền cho các ô danh mục (sử dụng index để gán màu)
const categoryColors = [
    '#f5e0e0', // Hồng nhạt
    '#fff3cd', // Vàng nhạt
    '#d1e7dd', // Xanh lá nhạt
    '#d2f2ff', // Xanh dương nhạt
];

// --- Component đơn lẻ: Thẻ sản phẩm (ProductCard) ---
// Tạm thời để ở đây, sau này nên tách ra file riêng
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <View style={styles.productCard}>
        {/* Phần 'COMBO' hoặc 'TASTE FUN' có thể được thêm vào đây sau */}
        <Image source={product.image} style={styles.productImage} resizeMode="contain" />
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>{product.price.toLocaleString('vi-VN')} đ</Text>
            <Text style={styles.oldPrice}>{product.oldPrice.toLocaleString('vi-VN')} đ</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
    </View>
);

// --- Component Chính: Màn hình Đặt hàng ---
export default function OrderScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />

            {/* 1. Header Bar */}
            <AppHeader />

            {/* 2. Category Bar (Thanh Danh mục cuộn ngang với nền màu vuông) */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryBarContainer}
                style={styles.categoryBar}
            >
                {mockCategories.map((cat, index) => (
                    <TouchableOpacity key={cat.id} style={styles.categoryItem}>
                        {/* Wrapper để tạo nền màu vuông */}
                        <View style={[
                            styles.categoryImageWrapper,
                            { backgroundColor: categoryColors[index % categoryColors.length] } // Gán màu nền
                        ]}>
                            <Image
                                source={cat.image}
                                style={styles.categoryImage}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.categoryText}>{cat.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* 3. Product List (Danh sách Sản phẩm) */}
            <FlatList
                data={mockProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductCard product={item} />}
                numColumns={2}
                contentContainerStyle={styles.productList}
                columnWrapperStyle={styles.row}
            />

            {/* 4. Bottom Tab Bar */}
            <AppTabBar />
        </SafeAreaView>
    );
}

// --- Stylesheets ---
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // --- Category Bar Styles ---
    categoryBar: {
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    categoryBarContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    categoryItem: {
        width: 90,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    categoryImageWrapper: {
        width: 70,
        height: 70,
        borderRadius: 8, // Góc bo tròn nhẹ
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    categoryText: {
        fontSize: 12,
        textAlign: 'center',
    },

    // --- Product List Styles ---
    productList: {
        paddingHorizontal: 5,
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
    },
    productCard: {
        flex: 0.5,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 5,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        position: 'relative',
        height: 280,
        minWidth: '48%',
    },
    productImage: {
        width: '100%',
        height: 120,
        marginBottom: 5,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    priceContainer: {
        marginTop: 5,
    },
    currentPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff4c5f', // Màu giá mới
    },
    oldPrice: {
        fontSize: 12,
        color: '#aaa',
        textDecorationLine: 'line-through',
        marginTop: 2,
    },
    addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#ff4c5f',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 20,
    },
    // Lưu ý: Không còn style bottomPlaceholder ở đây nữa.
});