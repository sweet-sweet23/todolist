import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import TodoList from './components/TodoList'; // Remove curly braces for default import

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        {/* Conditionally render the image source based on the platform */}
        <Image source={Platform.OS === 'web' ? require('./assets/juliet.jpg') : { uri: 'assets/juliet.jpg' }} style={styles.drawerImage} />
        <Text style={styles.mahName}>Juliet B. Pinalas</Text>
        <Text style={styles.mahName}>20211207</Text>
        <Text style={styles.mahName}>IT73-IT35B</Text>
        <Text style={styles.mahName}>Bachelor of Science in Information Technology</Text>
        {/* Other content */}
      </View>
      <DrawerItemList {...props} />
    </View>
    <View style={styles.drawerFooter}>
      {/* Other content */}
    </View>
  </DrawerContentScrollView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TodoList" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="TodoList" component={TodoList} options={{ title: "" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#F5DEB3', // Light brown background color
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  mahName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Dark brown text color
    marginBottom: 10,
  },
  drawerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  drawerFooter: {
    alignItems: 'center',
    marginBottom: 20,
  },
  // Other styles
});

export default App;
