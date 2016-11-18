class App extends React.Component {

  constructor(props) {
    super(props);

    this.options = {
      key: window.YOUTUBE_API_KEY,
      query: 'hello',
      max: 8
    };

    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    this.onSearchType = this.onSearchType.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.updateCurrentDetails = this.updateCurrentDetails.bind(this);

    this.callback = (data) => { 
      this.setState({
        allVids: data,
        currentVid: data[0]
      });
    };

    this.searchCallback = (data) => { 
      this.setState({
        allVids: data,
      });
    };

    this.detailCB = (data) => {
      this.setState({
        currentDetails: data,
      });
    };
    
    this.state = {
      allVids: exampleVideoData,
      currentVid: exampleVideoData[0],
      currentDetails: {},
      autoplay: 0
    };

  }

  onToggle() {
    this.setState({
      autoplay: !this.state.autoplay
    });
  }

  onVideoListEntryClick(video) {
    this.setState({
      currentVid: video
    });
    this.updateCurrentDetails();
  }

  onSearchType(event) {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: event.target.value,
      max: 8
    }, this.searchCallback.bind(this));
  }

  updateCurrentDetails() {
    this.props.getVideoDetails(this.state.currentVid.id.videoId, this.detailCB.bind(this));
    // return this.state.currentDetails.viewCount;
  }

  render() {
    return (
      <div>
        <Nav searchYouTube={this.props.searchYouTube} state={this.state} onSearchType={this.onSearchType}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVid} state={this.state} updateCurrentDetails={this.updateCurrentDetails}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.allVids} state={this.state} updateCurrentDetails={this.updateCurrentDetails} onVideoListEntryClick={this.onVideoListEntryClick} onToggle={this.onToggle}/>
        </div>
      </div>
      );
  }

  componentDidMount() {
    this.props.searchYouTube(this.options, this.callback.bind(this));
    // this.props.getVideoDetails(this.state.currentVid.id.videoId, this.detailCB.bind(this));
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
