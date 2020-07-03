import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class WriteScreen extends Component{
    constructor(){
        super()
        this.state={
            text:''
        }
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View>
                <TextInput style={{height:500, width:500, borderColor:'black', borderWidth:1}}
                onChangeText={(text)=>{
this.setState({
    text:text
})
                }}
                value={this.state.text}
                />
                <TouchableOpacity style={{backgroundColor:'black', padding:10, margin:10}}>
                    Submit button
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}