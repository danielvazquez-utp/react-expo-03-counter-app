import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const [counter, setCounter] = useState(20);

  return (
    <View style={styles.container}>
      <Text style={ styles.textCounter }>{ counter }</Text>
      {/* <Pressable 
        onPress={()=>setCounter(counter+1)} 
        onLongPress={()=>setCounter(0)}
        style={ styles.btnCounter } 
      >
        <Text style={{ color:'white', fontSize:20 }}>+1</Text>
      </Pressable> */}

      <FAB 
        label='+1' 
        onPress={()=>setCounter(counter+1)} 
        onLongPress={()=>setCounter(0)}
        position='right'
      />

    <FAB 
        label='Reinciar' 
        onPress={()=>setCounter(0)} 
        position='left'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCounter : {
    fontWeight: 100,
    fontSize: 150
  },
  
});
