import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCM2fUIRAmZHNmGpFlvAP2V1h6rq1VTq_U';


class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            videos:[],
            selectedvideo:null
        };
        //  YTSearch ({key: API_KEY, term:'surfboard'}, (videos) => {
        // //console.log(data); 
        // //this.setState({videos:data});
        // // this.setState({ videos });
        // // this.setState({selectedvideo:videos[0]});
        // this.setState(
        //     {
        //         videos:videos,
        //         selectedvideo:videos[0]
        //     }
        // );
       //console.log('insideapp');

        // }); 
        this.videoSearch('surfboards');
    
    }

    videoSearch (term) {
        YTSearch ({key: API_KEY, term:term}, (videos) => {
        this.setState(
            {
                videos:videos,
                selectedvideo:videos[0]
            }
        );
    });
    };

    render(){
        console.log(this.state.selectedvideo);
        return (    
        <div>
        <SearchBar searchHandler={term => this.videoSearch(term)} />
        <VideoDetail video ={this.state.selectedvideo} />
        <VideoList 
        onVideoSelect={selectedvideo => this.setState({selectedvideo})} 
        videos={this.state.videos} />
        </div>
    );
    }
}

ReactDom.render(<App /> , document.querySelector('.container'));