// import { useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>I Love Lyly</Text>
//       <Text style={styles.text}>Hello PNV23-React Native</Text>
//       <Button onPress={increaseCount} title="Click"></Button>
//       <Text style={styles.count}>Count: {count}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#FF0000", // Red color
//     fontSize: 50,
//     fontStyle: "italic",
//   },
//   count: {
//     fontSize: 30,
//   },
// });
import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { key: 1, item: "item 1" },
    { key: 2, item: "item 2" },
    { key: 3, item: "item 3" },
    { key: 4, item: "item 4" },
    { key: 5, item: "item 5" },
    { key: 6, item: "item 6" },
    { key: 7, item: "item 7" },
    { key: 8, item: "item 8" },
    { key: 9, item: "item 9" },
    { key: 10, item: "item 10" },
    { key: 11, item: "item 11" },
    { key: 12, item: "item 12" },
    { key: 13, item: "item 13" },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, { key: 14, item: "item 14" }]);
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
      style={styles.container}
    >
      {items.map((item) => {
        return (
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}>{item.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#FF0000", // Red color
    fontSize: 50,
    fontStyle: "italic",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
});