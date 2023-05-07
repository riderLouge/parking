import React, {useEffect} from "react";
import { View, Text, TextInput, Dimensions, StyleSheet, Alert, ScrollView} from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';



var {width,height} = Dimensions.get('window')


const Index = () => {

    const [slot1, setSlot1] = React.useState("");
    const [slot2, setSlot2] = React.useState("");
    const [slot3, setSlot3] = React.useState("");
    const [slot4, setSlot4] = React.useState("");
    const [slot5, setSlot5] = React.useState("");
    const [slot6, setSlot6] = React.useState("");
    const [slot7, setSlot7] = React.useState("");
    const [slot8, setSlot8] = React.useState("");
    const [slot9, setSlot9] = React.useState("");
    const [slot10, setSlot10] = React.useState("");
    const [count,SetCount]=React.useState(0);
    const Navigation = useNavigation();
    const db = firebase.firestore();
  

    db.collection('parking').get().then((snapshot) => {
    snapshot.forEach(doc=>{
        if(doc.id === "slot"){
            renderData(doc);
        }               
     })
    })

    function renderData(doc:any){
        if(count==0){
            setSlot1(doc.data().Slot1)
            setSlot2(doc.data().Slot2)
            setSlot3(doc.data().Slot3)
            setSlot4(doc.data().Slot4)
            setSlot5(doc.data().Slot5)
            setSlot6(doc.data().Slot6)
            setSlot7(doc.data().Slot7)
            setSlot8(doc.data().Slot8)
            setSlot9(doc.data().Slot9)
            setSlot10(doc.data().Slot10)
        
        }
    }

  
    function save(data:any){
           firestore().collection('parking')
            .doc("slot")
            .set({
                Slot1: slot1, 
                Slot2: slot2, 
                Slot3: slot3, 
                Slot4: slot4, 
                Slot5: slot5, 
                Slot6: slot6, 
                Slot7: slot7, 
                Slot8: slot8, 
                Slot9: slot9,
                Slot10: slot10, 

                    })
            .then(() => {
                console.log('Post Added!');
                Alert.alert(
                  'Post published!',
                  'Your post has been published Successfully!',
                );
            })
            .catch((error) => {
                console.log('Something went wrong with added post to firestore.', error);
            });
    }


    function press10 (){
        setSlot10("");
        save;
    }

    return(
        
        <View style={{backgroundColor:'black', flex:1}}>
            <ScrollView>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'white', marginTop:50, fontSize:25}}>PARKING</Text>
                    <View style={{width:(width-100), height:(width-100), backgroundColor:'grey', marginTop:30}}>

                    </View>
                    <View style={{width:(width-40), backgroundColor:'#1f1e1e', marginTop:50, borderRadius:10}}>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <Text style={{fontSize:20, marginLeft:30}}>Slot</Text>
                            <Text style={{fontSize:20, marginLeft:'35%'}}>Vehicle</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>1</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'silver'}
                                        defaultValue={slot1}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot1) => setSlot1(newSlot1)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot1(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>2</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'silver'}
                                        defaultValue={slot2}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot2) => setSlot2(newSlot2)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot2(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>3</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'silver'}
                                        defaultValue={slot3}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot3) => setSlot3(newSlot3)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot3(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>4</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'silver'}
                                        defaultValue={slot4}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot4) => setSlot4(newSlot4)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot4(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>5</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'silver'}
                                        defaultValue={slot5}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot5) => setSlot5(newSlot5)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot5(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>6</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        defaultValue={slot6}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        placeholderTextColor={'silver'}
                                        onChangeText={(newSlot6) => setSlot6(newSlot6)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot6(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>7</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'silver'}
                                        defaultValue={slot7}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot7) => setSlot7(newSlot7)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot7(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>8</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        defaultValue={slot8}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'silver'}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot8) => setSlot8(newSlot8)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot8(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>9</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'silver'}
                                        defaultValue={slot9}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot9) => setSlot9(newSlot9)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={() => {setSlot9(""), save}}></Icon>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                            <Text style={styles.text}>10</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        defaultValue={slot10}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        placeholderTextColor={'silver'}
                                        onChangeText={(newSlot10) => setSlot10(newSlot10)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='white' 
                                      onPress={press10}></Icon>
                            </View>
                        </View>
                       
                        <Button 
                            mode='contained' title='Confirm Slot'
                            type="solid"
                            buttonStyle={{width:(width-70),
                                            height:(width/9),
                                            backgroundColor:'black',
                                            borderRadius:10,
                                            marginTop:25,
                                            marginLeft:15,
                                            marginBottom:20}}
                            onPress={save}>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}



export default Index;

const styles = StyleSheet.create({
    textInput: {
        color: "black",
        width:(width-80),
        backgroundColor:'silver',
        borderRadius:10,
        marginTop:100,
        fontSize:20,
    },
    textInput2: {
        color: "white",
        width:(width/2),
        backgroundColor:'#1f1e1e',
        borderRadius:10,
        marginTop:10,
        fontSize:16,
        borderWidth:1,
        borderColor:'grey',
    },
    textInput3: {
        color: "black",
        width:(width-80),
        backgroundColor:'silver',
        borderRadius:10,
        marginTop:10,
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
    text: {
        fontSize:20,
        marginTop:22
    }

});