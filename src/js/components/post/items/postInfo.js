import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text, 
  Image, 
  View 
} from 'react-native';
import TimeAgo from 'react-native-timeago';


export default class PostInfo extends React.Component {
  render() {
    let title = (this.props.title)?this.props.title : this.propTypes.title;
    let username = (this.props.username)?this.props.username : this.propTypes.username;
    let publicationDate = (this.props.publicationDate)?this.props.publicationDate : this.propTypes.publicationDate;
    let avatar = (this.props.avatar)? this.props.avatar : this.propTypes.avatar;
    let timestamp = "2018-06-1T01:00:00.000Z";
    return (
        <View style={styles.info}>
            <View style={styles.dataInfo}>
                <View style={styles.userInfo}>
                    <Image style={styles.avatar} source={{uri:avatar}} />
                    <Text style={styles.username}>@{username}</Text>
                </View>   
                <View>
                    <Text style={styles.publicationDate}>{publicationDate}</Text>
                </View>    
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    info:{
        width:'100%',
        padding:5
    },
    dataInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center'
    },
    avatar:{
        width:35,
        height:35,
        borderRadius:50,
        borderWidth: 1,
        borderColor:'black',
    },
    username:{
        color:'#9e9e9e',
        fontWeight:'bold',
        fontStyle:'italic',
        marginLeft:5
    },
    publicationDate:{
        color:'#9e9e9e',
        fontWeight:'bold',
        fontStyle:'italic',
        fontSize:12,
    },
    titlePost:{
        color:'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:20,
        //textShadowColor: 'black',
        //textShadowOffset: {width: -2, height: 1},
        //textShadowRadius: 10
    }
});


PostInfo.propTypes = {
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

PostInfo.defaultProps = {
    title: 'Title',
    username: 'username',
    publicationDate: 'hace 25 min.',
    avatar: 'http://santetotal.com/wp-content/uploads/2014/05/default-user.png'
};