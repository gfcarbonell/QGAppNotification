import React from 'react';
import Post from '../components/post/containers/post';
import {
    ListView
} from 'react-native';


export default class Home extends React.Component {
    state = {
        dataSource: [],
    }
    componentWillMount(){
        let post = {
            title:'Curso de Python',
            likes:500,
            comments:1200,
            shared:100,
        }
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(Array(500).fill(post)),
        });
    }
    render() {
        return (  
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(post) => <Post post={post} />}/>          
        );
    }
}

