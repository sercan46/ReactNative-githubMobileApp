import React,{Component} from 'react';
import {View,FlatList,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {WEB_REQUEST_URLS} from '../helpers/web_request_url';
import axios from 'axios';

class FollowingViews extends Component{
    constructor(){
        super();
        this.state={
            followers:{}
        }
    }
    componentDidMount(){
        axios.get(WEB_REQUEST_URLS.FOLLOWING.replace('##name##',this.props.route.params.user.login).toString()).then((val)=>{
            this.setState({followers:val.data});
            }) 
    }
    followerDetail(userName){
        axios.get(WEB_REQUEST_URLS.SEARCH_NAME.replace('##name##',userName).toString()).then((val)=>{
            this.props.navigation.navigate(
                'UserProfile',
                { user:val.data },
              );
            }) 
    }
    renderEntries({ item }) {
        return(
            <TouchableOpacity onPress={()=>{this.followerDetail(item.login)}}>
                <View style={styles.list}>
                    <Image source={{uri:item.avatar_url}} style={styles.image}></Image>
                    <Text style={{paddingLeft:20,color:'white',fontWeight:'800'}}>{item.login}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={styles.body}> 
                <FlatList
                    scrollEnabled={true}
                    data={this.state.followers}
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
        justifyContent:'space-around',
        alignItems:'stretch',
        width:'100%',
        height:'100%',
        padding:20
    },
    list:{
        backgroundColor:'crimson',
        margin:10,
        height:80,
        borderRadius:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
     
    },
    image: {
        width: 100,
        height: 80,
        resizeMode: 'stretch',
        
      }
});
export default FollowingViews;