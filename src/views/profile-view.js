import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';
import Moment from 'moment';


class ProfileView extends Component{
    constructor(){
        super();
        this.state={
            userData:{},
            followers:{}
        }
    }
    componentDidMount(){
        this.props.navigation.addListener('focus', () => {
            this.setState({userData:this.props.route.params.user});
        });
    }
      
    render(){
        return(
            <View style={styles.body}>
                <View style={{flex:7,justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:this.state.userData.avatar_url}} style={styles.image}></Image>
                    <Text style={{alignSelf:'center',color:'black',fontWeight:'800',fontSize:15,padding:10}}> {this.state.userData.login} / {this.state.userData.name}</Text>
                    <Text style={{alignSelf:'center',color:'black',}}> {this.state.userData.location}</Text>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:10}}>
                        <View style={{display:'flex',flexDirection:'column'}}>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}>Public Repos</Text>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}> {this.state.userData.public_repos}</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'column'}}>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}>Followers</Text>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}> {this.state.userData.followers}</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'column'}}>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}>Following</Text>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}> {this.state.userData.following}</Text>
                        </View>         
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            width: 300,
                        }}
                    />
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:10}}>
                    <View style={{display:'flex',flexDirection:'column'}}>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}>Created At</Text>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}> {Moment(this.state.userData.created_at).format('DD-MM-YYYY')}</Text>
                        </View>    
                        <View style={{display:'flex',flexDirection:'column'}}>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}>Updated At</Text>
                            <Text style={{alignSelf:'center',color:'black',padding:5}}> {Moment(this.state.userData.updated_at).format('DD-MM-YYYY')}</Text>
                        </View>          
                    </View>
                </View>
                <View style={{flex:3}}>
                    <Text style={{color:'black'}}>{this.state.userData.bio}</Text>
                </View>
                <View style={{flex:3,justifyContent:'space-between',paddingLeft:30,paddingRight:30}}>
                    <Button color={'crimson'} onPress={()=>{ this.props.navigation.navigate('Followers',{ user:this.props.route.params.user}) }}  title={'Followers'} ></Button>
                    <Button color={'green'} onPress={()=>{ this.props.navigation.navigate('Following',{ user:this.props.route.params.user}) }}  title={'Following'} ></Button>
                    <Button color={'blue'} onPress={()=>{ this.props.navigation.navigate('Repos',{ user:this.props.route.params.user}) }}  title={'Repos'} ></Button>
                </View>              
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
    image: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        
      }
});
export default ProfileView;