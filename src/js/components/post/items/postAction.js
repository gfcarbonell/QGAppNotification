import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class PostAction extends React.Component {
  render() {
    let likes = (this.props.likes!==undefined)?this.props.likes : this.propTypes.likes;
    let comments = (this.props.comments!==undefined)?this.props.comments : this.propTypes.comments;
    let shared = (this.props.shared!==undefined)?this.props.shared : this.propTypes.shared;
    return (
        <View style={styles.action}>
            <Icon style={styles.actionIcon} name='ios-paper' size={30} color='white'/>
            <Text style={styles.actionText}> Info </Text>
            <Icon style={styles.actionIcon} name='md-heart' size={30} color='white'/>
            <Text style={styles.actionText}> {likes} </Text>
            <Icon style={styles.actionIcon} name='ios-chatbubbles' size={30} color='white'/>
            <Text style={styles.actionText}> {comments} </Text>
            <Icon style={styles.actionIcon} name='md-send' size={30} color='white'/>
            <Text style={styles.actionText}> {shared} </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    action:{
        position:'absolute',
        top: 10,
        right:0,
        marginHorizontal: 5
    },
    actionIcon:{
        textAlign:'center',
        textShadowColor: 'black',
        textShadowOffset: {width: -2, height: 1},
        textShadowRadius: 10
    },
    actionText:{
        textAlign:'center',
        color:'white',
        marginBottom:5,
        textShadowColor: 'black',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});

PostAction.propTypes = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    shared: PropTypes.number.isRequired,
}

PostAction.defaultProps = {
    likes: 0,
    comments: 0,
    shared: 0,
};