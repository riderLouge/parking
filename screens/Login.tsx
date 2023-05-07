import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Dimensions, TextInput, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';


var {width,height} = Dimensions.get('window')


const Login = () => {

    const Navigation = useNavigation()
    const [name,setName] = React.useState('');

    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize:25, marginTop:50, color:'black'}}>PARKING SLOT SYSTEM</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Name"
                    placeholderTextColor={'#666666'}
                    onChangeText={(newName) => setName(newName)}>
                </TextInput> 
                <Button 
                    mode='contained' title='Enter'
                    type="solid"
                    buttonStyle={{width:(width-80),
                                    height:(width/9),
                                    backgroundColor:'#5192f5',
                                    borderRadius:10,
                                    marginTop:25,
                                    shadowOffset: {width: 9, height: 9},  
                                    shadowColor: 'black',  
                                    shadowOpacity: 1,  
                                    shadowRadius: 3, }}
                    onPress={() => Navigation.push("Index", {Name: name })}>
                </Button>
                <View style={styles.note}>
                    <Text style={{color:'black', 
                                  fontSize:20,
                                  fontWeight:'900',
                                  margin:15,
                                  }}>NOTE</Text>
                    <Text style={{fontSize:20,
                                  color:'black',
                                  margin:15}}>As soon as you hit 'ENTER' you will be able to see the map of parking space. Check for available spot for your convenience before booking.</Text>
                </View>
            </View> 
        </View>
       
    )

}

const styles = StyleSheet.create({
    textInput: {
        color: "black",
        width:(width-80),
        backgroundColor:'silver',
        borderRadius:10,
        marginTop:150,
        fontSize:20,
    },
    dropdownBtnStyle: {
        width:(width-80),
        backgroundColor:'silver',
        borderRadius:10,
        marginTop:20,
    },
    dropdownRowStyle: {
        backgroundColor:'silver'
    },
    note: {
        backgroundColor:'#5192f5',
        width:(width-80),
        height:(width/2),
        marginTop:150,
        borderRadius:10,
        alignItems:'center'
    }

});

export default Login;