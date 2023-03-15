import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>lol</Text>
       <Image style={{width: 300, height: 300,}} source={require('./assets/infamous.png')} />
       <Image style={{width: 300, height: 300,}} source={require('./assets/undertale_p6z2.jpg')} />
       <Image style={{width: 300, height: 300,}} source={require('./assets/undertale_p6z2.jpg')} />
       <Image style={{width: 300, height: 300,}} source={require('./assets/undertale_p6z2.jpg')} />
       <Image style={{width: 300, height: 300,}} source={require('./assets/undertale_p6z2.jpg')} />


    </ScrollView>
    
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// <Image style={{width: 300, height: 300,}} source={require('./assets/infamous.png')} />
// <Image style={{width: 300, height: 300,}} source={require('./assets/undertale_p6z2.jpg')} />

// style={styles.container}