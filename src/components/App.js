import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = 'AIzaSyDkTU0RDSVb5rw163PDUdFpAGFlNBNYQkk';

class App extends React.Component{

    state={ videos: [], selectedVideo: null }

    async componentDidMount() {
        await this.onSearchSubmit('cars');
    }

    onSearchSubmit=async (input)=>{
        try {
            const result = await youtube.get(`/search`,{
                params: {
                    q:input,
                    part:'snippet',
                    type:'video',
                    maxResults: 5,
                    key:KEY
                }
            })
            this.setState({
                videos: result.data.items,
                selectedVideo:  result.data.items[0]
            })
            console.log(result.data.items)
        }catch (e) {
            console.log(e)

        }
    }

    onVideoSelect=(video)=>{
       this.setState({ selectedVideo: video})
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="row">
                    <div className="col-9">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-3">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;