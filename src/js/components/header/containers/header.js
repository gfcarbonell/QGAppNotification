import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Image, 
  View 
} from 'react-native';


export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.header}>
            <Text style={styles.headeTitle}>
                Quality Global 
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#689f38',
    },
    headeTitle:{
        fontSize:20,
    },
    headerImage:{
        width:50,
        height:50
    }
});