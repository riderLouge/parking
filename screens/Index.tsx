import React, {useEffect} from "react";
import { View, Text, TextInput, Dimensions, StyleSheet, Alert, ScrollView, Image} from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';



var {width,height} = Dimensions.get('window')


const Index = ({route}) => {

    const name = route.params.Name;
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
    const greating = "Hello "+name+"."
  

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



    return(
        
        <View style={{backgroundColor:'white', flex:1}}>
            <ScrollView>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'black', marginTop:50, fontSize:25, margin:10}}>{greating}</Text>
                    <Text style={{color:'black', fontSize:25, margin:10}}>Check and select your parking spot.</Text>
                    <View style={{width:(width-100),
                          height:(width-100),
                          backgroundColor:'#5192f5',
                          marginTop:30,
                          borderRadius:10,
                          alignItems:'center',
                          justifyContent:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{marginRight:20, fontSize:35, marginLeft:25, color:'black'}}>1</Text>
                            <Text style={{marginRight:20, fontSize:35, color:'black'}}>2</Text>
                            <Text style={{marginRight:20, fontSize:35, color:'black'}}>3</Text>
                            <Text style={{marginRight:20, fontSize:35, color:'black'}}>4</Text>
                            <Text style={{marginRight:20, fontSize:35, color:'black'}}>5</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize:35, marginRight:10, color:'black'}}>A</Text>
                                <Text style={{fontSize:35, marginRight:10, color:'black'}}>B</Text>
                            </View>
                            <Image style={{marginRight:30}} source={require('../Asset/Sample.png')}></Image>
                        </View>
                        <Text style={{fontSize:20,
                                      marginTop:20,
                                      padding:10,
                                      color:'black'}}>The above represents the pattern how the parking lot is. Using the key words provided select your parking slot. Example slot No : ( A1 , B1 , etc)</Text>
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:50, borderRadius:10}}>
                        <View style={{alignItems:'center', marginTop:10, marginRight:35, height:40}}>
                            <Text style={{fontSize:20, marginLeft:30, color:'#1f1e1e'}}>Slots :</Text>
                        </View>
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>A1</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'red'}
                                        defaultValue={slot1}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot1) => setSlot1(newSlot1)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot1(""), save}}></Icon>
                            </View>
                        </View>
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>A2</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'red'}
                                        defaultValue={slot2}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot2) => setSlot2(newSlot2)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot2(""), save}}></Icon>
                            </View>
                        </View>             
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>A3</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'red'}
                                        defaultValue={slot3}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot3) => setSlot3(newSlot3)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot3(""), save}}></Icon>
                            </View>
                        </View>             
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>A4</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'red'}
                                        defaultValue={slot4}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot4) => setSlot4(newSlot4)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot4(""), save}}></Icon>
                            </View>
                        </View>             
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>A5</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'red'}
                                        defaultValue={slot5}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot5) => setSlot5(newSlot5)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot5(""), save}}></Icon>
                            </View>
                        </View>             
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>B1</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        defaultValue={slot6}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        placeholderTextColor={'red'}
                                        onChangeText={(newSlot6) => setSlot6(newSlot6)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot6(""), save}}></Icon>
                            </View>
                        </View>         
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>B2</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'red'}
                                        defaultValue={slot7}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot7) => setSlot7(newSlot7)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:13, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot7(""), save}}></Icon>
                            </View>
                        </View>             
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>B3</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        defaultValue={slot8}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'red'}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot8) => setSlot8(newSlot8)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot8(""), save}}></Icon>
                            </View>
                        </View>               
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>B4</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        placeholderTextColor={'red'}
                                        defaultValue={slot9}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        onChangeText={(newSlot9) => setSlot9(newSlot9)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot9(""), save}}></Icon>
                            </View>
                        </View>               
                    </View>
                    <View style={{width:(width-40), backgroundColor:'#5192f5', marginTop:20, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
                            <Text style={styles.text}>B5</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textInput2}
                                        placeholder="Enter Vehicle Number"
                                        defaultValue={slot10}
                                        onPressIn={()=>{
                                            SetCount(1)}}
                                        placeholderTextColor={'red'}
                                        onChangeText={(newSlot10) => setSlot10(newSlot10)}>
                                </TextInput> 
                                <Icon name="exit" size={width/15} 
                                      style={{marginTop:20, marginLeft:5}} 
                                      color='#1f1e1e' 
                                      onPress={() => {setSlot10(""), save}}></Icon>
                            </View>
                        </View>            
                    </View>
                    <Button 
                        mode='contained' title='Update Slot Info'
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
        color: "green",
        width:(width/2),
        backgroundColor:'white',
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
        marginTop:22,
        color:'#1f1e1e'
    }

});