var getVideoDetails = (id, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + window.YOUTUBE_API_KEY + '&part=snippet,contentDetails,statistics,status',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log('YoutubeVideo: success', data);
      callback(data.items[0].statistics);
    },
    error: function (data) {
      console.error('YoutubeVideo: error', data);
    }
  });
};

window.getVideoDetails = getVideoDetails;