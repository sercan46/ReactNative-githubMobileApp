import React,{Component} from 'react';
import {View,FlatList,Text,StyleSheet,Button,Linking} from 'react-native';
import {WEB_REQUEST_URLS} from '../helpers/web_request_url';
import axios from 'axios';

class ReposViews extends Component{
    constructor(){
        super();
        this.state={
            repos:{}
        }
    }
    componentDidMount(){
        axios.get(WEB_REQUEST_URLS.REPOS.replace('##name##',this.props.route.params.user.login).toString()).then((val)=>{
            this.setState({repos:val.data});
            }) 
    }
    renderEntries({ item }) {
        return(
            <View style={styles.list}>
                    <Text style={{color:'white',fontWeight:'800'}}>{item.name}</Text>
                    <Text style={{color:'white',fontWeight:'800'}}>{item.visibility}</Text>
                    <Text style={{color:'white',fontWeight:'800'}}>{item.language}</Text>
                    <View
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            width: '100%',
                        }}
                    />
                    <Text style={{color:'crimson',fontWeight:'800'}} >{item.description}</Text>
                    <Button color={'blue'} onPress={()=>{ Linking.openURL(item.html_url) }}  title={'Open Detail'} ></Button>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.body}> 
                <FlatList
                    scrollEnabled={true}
                    data={this.state.repos}
                    renderItem={this.renderEntries.bind(this)} 
                    keyExtractor={item => item.node_id}
                /> 
           </View>
        )
    }
}
const styles=StyleSheet.create({
    body:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        padding:20
    },
    list:{
        backgroundColor:'black',
        margin:10,
        height:240,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    }
});
export default ReposViews;