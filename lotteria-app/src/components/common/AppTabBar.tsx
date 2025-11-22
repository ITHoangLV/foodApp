import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// Đảm bảo bạn đã cài đặt @expo/vector-icons
import { Ionicons } from '@expo/vector-icons';

// Dữ liệu các tab (bao gồm icon outline và icon active)
const tabs = [
    { name: 'Trang chủ', icon: 'home-outline', activeIcon: 'home', key: 'home' },
    { name: 'Đặt hàng', icon: 'fast-food-outline', activeIcon: 'fast-food', key: 'order' },
    { name: 'Lịch sử', icon: 'receipt-outline', activeIcon: 'receipt', key: 'history' },
    { name: 'Tài khoản', icon: 'person-outline', activeIcon: 'person', key: 'account' },
];

const AppTabBar: React.FC = () => {
    // Đặt 'order' là tab đang active (vì đây là OrderScreen)
    const activeTab = 'order';

    const renderTabItem = (tab: typeof tabs[0]) => {
        const isActive = tab.key === activeTab;
        const iconName = isActive ? tab.activeIcon : tab.icon;
        // Màu đỏ Lotteria cho tab active
        const color = isActive ? '#ff4c5f' : '#888';

        return (
            <TouchableOpacity key={tab.key} style={styles.tabItem}>
                {/* Icon */}
                <Ionicons name={iconName as any} size={24} color={color} />
                {/* Text */}
                <Text style={[styles.tabText, { color }]}>{tab.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.tabBar}>
            {tabs.map(renderTabItem)}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 65, // Chiều cao cố định
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
    },
    tabText: {
        fontSize: 10,
        marginTop: 2,
        fontWeight: '500',
    },
});

export default AppTabBar;