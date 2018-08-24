import React, { Component } from 'react';
import { ScrollView, } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class based components contain life cycle methods
class AlbumList extends Component {
    // Default initializing 
    state= { albums: [] }; 
    // This re-renders when the state changes
    // State is only used in class-based components


    //When the component renders to the screen
    componentWillMount() {
        //https request
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // use the response and update the state with setState()
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        // Map is an array helper
       return this.state.albums.map(album => 
       <AlbumDetail key={album.title} data={album} />
    );
    }

    // Class based components must return a render method with some JSX
    render() {
        console.log(this.state);
        
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
    

export default AlbumList;
