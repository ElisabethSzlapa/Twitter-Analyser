import React from 'react';

const AnalysisChart = ( {tweets} ) => {
    if (!tweets.list) return;
    // For now, let's say that the relevant information of a tweet as pertaining to its category is:
    // username
    // image
    // tweet contents
    const mappedTweets = tweets.list.map(tweet => ({
        fullName: tweet.tweetBy.fullName,
        tweetImage: tweet.media, // an array of objects with 'url' and 'type' (e.g. type = photo, url = https://pbs.twimg.com/media/...)
        fullText: tweet.fullText
    }));
    return(
      <div>

      </div>
    );
}

export default AnalysisChart;