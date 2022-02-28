import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { counterIncrement, counterDecrement  } from "./src/actions/count";
import { useSelector, useDispatch } from "react-redux"

function App(){
  const count = useSelector(state => state.counter.count);
  let dispatch = useDispatch();
  
  return(
      <View style={styles.container}>
        <Button
        title= "-"
        onPress= {() => dispatch(counterDecrement())}
        />
        <Text style={{color:'black',padding:10}}>{count}</Text>
        <Button
        title= "+"
        onPress= {() => dispatch(counterIncrement())}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  }
});

export default App;