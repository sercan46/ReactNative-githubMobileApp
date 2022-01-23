import React,{Component}from 'react';
import { View, Text ,StyleSheet, TextInput, Button} from 'react-native';
import {WEB_REQUEST_URLS} from '../helpers/web_request_url';
import axios from 'axios';
class HomeView extends  Component{
    constructor(){
        super();
        this.state={
            name:''
        }
    }
    onPressSearch() {
       console.log( WEB_REQUEST_URLS.SEARCH_NAME.replace('##name##',this.state.name));
       axios.get(WEB_REQUEST_URLS.SEARCH_NAME.replace('##name##',this.state.name).toString()).then((val)=>{
        this.props.navigation.navigate(
            'UserProfile',
            { user:val.data },
          );
        }) 
    }

    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.title}>Github Name</Text>
                <TextInput placeholder={'Search Name'} placeholderTextColor='black' onChangeText={(val)=>this.setState({name:val})} style = {styles.input}/>
                    <View style={styles.buttonBody}>
                        <Button onPress={()=>this.onPressSearch()} title={'Search'}  color={'crimson'}/>
                    </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    body:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
    title:{
        fontWeight:'600',
        fontSize:15,
        color:'black'
    },
    input: {
        borderWidth : 2.0,
        borderColor:'crimson',
        borderRadius:10,
        width:'50%',
        color:'black'
    },
    buttonBody: {
        borderColor: 'black',
        borderWidth: 3, 
        borderRadius: 10 ,
        width:'60%'      
     }
});
export default HomeView