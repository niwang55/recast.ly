class App extends React.Component {

  constructor(props) {
    super(props);

    this.options = {
      key: window.YOUTUBE_API_KEY,
      query: 'Pokemon Sun Moon',
      max: 10
    };

    // this.videoData = [];

    this.callback = (data) => { 
      // console.log('App.js', this.videoData, data);
      // for (var i = 0; i < data.length; i++) {
      //   this.videoData.push(data[i]);
      // }
      this.setState({
        allVids: data,
        currentVid: data[0]
      });
      // console.log('App.js2', this.videoData, data);
    };
    
    this.state = {
      allVids: emptyVideoData,
      currentVid: emptyVideoData[0]
    };

  }

  onVideoListEntryClick(video) {
    this.setState({
      currentVid: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVid} state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.allVids} state={this.state} onVideoListEntryClick={this.onVideoListEntryClick.bind(this)}/>
        </div>
      </div>
      );
  }

  componentDidMount() {
    console.log('mount');
    this.props.searchYouTube(this.options, this.callback.bind(this));
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
