import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// Sử dụng Ionicons cho các icon trên header
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppHeader: React.FC = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <View style={styles.header}>
                {/* Phần Logo/Tiêu đề */}
                <Text style={styles.headerText}>LOTTERIA</Text>

                {/* Phần Icons (Chuông & Giỏ hàng) */}
                <View style={styles.headerIcons}>


                    {/* Icon Giỏ hàng (Túi mua sắm) */}
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Ionicons name="bag-handle-outline" size={24} color="#fff" />
                        {/* Có thể thêm badge (số lượng sản phẩm) ở đây sau */}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#ff4c5f', // Đảm bảo màu đỏ lấp đầy vùng an toàn
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#ff4c5f', // Màu đỏ Lotteria
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 15,
    },
    iconWrapper: {
        // Dùng để căn chỉnh nếu cần
    }
});

export default AppHeader;