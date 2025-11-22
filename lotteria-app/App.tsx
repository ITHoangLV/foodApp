import OrderScreen from './screens/OrderScreen'; // Nhập component màn hình đặt hàng

export default function App() {
  return (
    <OrderScreen /> // Render màn hình đặt hàng là component chính của ứng dụng
  );
}

// Lưu ý: Nếu bạn có sử dụng Stylesheet.create trong App.tsx ban đầu,
// bạn có thể loại bỏ nó vì logic styles đã được chuyển sang OrderScreen.tsx.
// Nếu bạn giữ lại, nó cũng sẽ không ảnh hưởng đến màn hình OrderScreen.
// Tuy nhiên, để code sạch sẽ, bạn nên xóa các import/style không dùng.

// Ví dụ: Bạn có thể loại bỏ các dòng sau nếu không dùng:
// import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

/* const styles = StyleSheet.create({
  container: {
    // ...
  },
});
*/