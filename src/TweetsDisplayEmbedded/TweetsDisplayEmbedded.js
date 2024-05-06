import React from 'react'
import {TwitterTweetEmbed} from "react-twitter-embed";

const TweetsDisplayEmbedded = ( {tweets} ) => {
    console.log("displaying tweets", tweets.list);
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {
                tweets.list && tweets.list.map(tweet => (
                    <>
                        <TwitterTweetEmbed tweetId={tweet.id}/>
                    </>
                ))
            }
        </div>
    );
}

export default TweetsDisplayEmbedded