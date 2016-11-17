var searchYouTube = (options, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true',
      part: 'snippet'
    },
    success: function (data) {
      // console.log('Youtube: success', data.items);
      callback(data.items);
    },
    error: function (data) {
      console.error('Youtube: error', data);
    }
  });
};

window.searchYouTube = searchYouTube;
