import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text, 
  Image, 
  View 
} from 'react-native';
import PostAction from '../items/postAction';
import PostInfo from '../items/postInfo';

export default class Post extends React.Component { 
    render() {
        return (
            <View style={styles.post}>
                <Image 
                    style={styles.portal}
                    source={{uri:'https://wallpaper-house.com/data/out/7/wallpaper2you_184632.jpg'}}/>
                <PostInfo />
                <PostAction />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    post:{
        width:'100%',
        position:'relative',
    },
    portal:{
        height:250,
        width:'100%',
        resizeMode:'cover',
    }
})

Post.propTypes = {
    portal: PropTypes.string.isRequired,
}

Post.defaultProps = {
    portal: 'http://santetotal.com/wp-content/uploads/2014/05/default-user.png'
};