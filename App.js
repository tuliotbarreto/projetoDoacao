import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

const indexScreen = () => {

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>


        <View style={{top:"-300px"}}>
        <Text style={{color:"white", fontSize:"50px", bottom:"300px"}}>DOE AQUI!</Text>      
        </View> 

        <View> 
          <Input placeholder="Login" style={{}}/>
          <Input placeholder="Senha" style={{}}/>
        </View>


    </View>



  );
};

function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default indexScreen;