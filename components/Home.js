import React from 'react';
import { StyleSheet,Picker,Button, KeyboardAvoidingView,TextInput,Text, View,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      deviceId:'',
      devicePassword:'',
      email:'',
      city:'',
      gate:'',
      
    }
    this.pickerData=[
    {'city':'Pune','gates':['Front','back']},
    {'city':'Satara','gates':['middle','top','Gate 2']},
    {'city':'Mumbai','gates':['Main','Center','Gate 92']},
    {'city':'Sangli','gates':['Gate 2','Gate 3','Bhint']},
    {'city':'Parbhani','gates':['Side']}
    ]
  
    
    this.returnFuction=this.returnFuction.bind(this)
  }

  returnFuction2(){
    var list=[]
    for(var i=0;i<this.pickerData.length;i++){
      list.push(<Picker.Item key={i} label={this.pickerData[i].city} value={this.pickerData[i].city} />)
    }
    return list
  }

  onclickFn =() => {
    if(this.state.city == 'None' || this.state.gate == 'None'){
      alert('Select the city and gate')
    }
    else{
      alert(this.state.deviceId+'  '+this.state.city+'with '+this.state.gate)
    }
  }


  returnFuction(arg_city){
    var list=[]
    var pl=[]
    var j=0
    for(var i=0;i<this.pickerData.length;i++){
        if(this.pickerData[i].city == this.state.city){
          this.pickerData[i].gates.map(data=>{
            list.push(<Picker.Item key={j} label={data} value={data} />)
            j++
          })
          j=0
        }
    }    
    return list
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Text style={styles.tittleText}>Device Config</Text> 

            <TextInput style={styles.inputText} underlineColorAndroid='transparent' placeholderTextColor='white' selectionColor='white'
              returnKeyType="next" placeholder="Device ID"
                value={this.state.deviceId} 
                onChangeText={(deviceId)=>this.setState({deviceId})} /><TextInput
        />
        <Picker
              style={styles.picker}          
              selectedValue={this.state.city}
              onValueChange={(itemValue, itemIndex) => this.setState({city: itemValue})}>
              <Picker.Item label="Select Venue" value="None"/>
              {this.returnFuction2()}
          </Picker>


          <Picker
              style={styles.picker}            
              selectedValue={this.state.gate}
              onValueChange={(itemValue, itemIndex) => this.setState({gate: itemValue})}>
              <Picker.Item label="Select Gate" value="None" /> 
              {this.returnFuction(this.state.city)}
          </Picker>
          <TextInput style={styles.inputText}
            placeholder="device Password"
            value={this.state.devicePassword}
            maxLength={10}
            keyboardType='numeric'
             underlineColorAndroid='transparent' 
           placeholderTextColor='white' selectionColor='white'
           returnKeyType="go"
            onChangeText={(devicePassword)=>this.setState({devicePassword})}
        />
        <TouchableOpacity style={styles.button} onPress={this.onclickFn}>
             <Text style={styles.buttontext}>Submit
             </Text>
            </TouchableOpacity>
          
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#455a64'
    },      
    inputText:{
        width:250,
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        height:50,
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'white',
        marginVertical:10
    },
    button:{
        width:150,
        backgroundColor:'#1c313a',
        height:50,
        marginVertical:15,
        paddingVertical:13,
        borderRadius:15
    
      },
      buttontext:{
          fontSize:16,
         fontWeight:'500',
         color:'#ffffff',
         textAlign:'center'
    
      },
      picker:{
        marginVertical:10,
          width:270,
          height:35,
          color:'white',
          paddingHorizontal:16,      }
          ,
        tittleText:{
            color:'rgba(255,255,255,0.7)',
            fontSize:28,
            paddingVertical:15,
            justifyContent:'center',
          },
  });
  