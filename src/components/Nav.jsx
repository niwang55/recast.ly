var Nav = (props) => (
  <nav className="navbar">
    <img class='logo' src='https://www.seeklogo.net/wp-content/uploads/2011/02/youtube-logo-vector-400x400.png'></img>
    <div className="col-md-6 col-md-offset-3">
      <Search searchYouTube={props.searchYouTube} state={props.state} onSearchType={props.onSearchType}/>
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
