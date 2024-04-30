import React from 'react';
import { Card } from 'react-bootstrap';
import {map} from "react-bootstrap/ElementChildren";

const TweetCard = ({ tweet }) => {
    const { fullText, likeCount, replyCount, retweetCount, tweetBy, id, media } = tweet;

    const twitterUrl = `https://twitter.com/${tweetBy.userName}/status/${id}`;
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title>{tweetBy.fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">@{tweetBy.userName}</Card.Subtitle>
                <Card.Text>{fullText}</Card.Text>
                <Card.Text>Likes: {likeCount}</Card.Text>
                {media && media.map(entry => (
                    <Card.Img
                        key={entry.id}
                        src={entry.url}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                ))}
                <Card.Text>Replies: {replyCount}</Card.Text>
                <Card.Text>Retweets: {retweetCount}</Card.Text>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                    View Tweet
                </a> </Card.Body>
        </Card>
    );
};

const TweetsDisplay = ({tweets}) => {
    if (!tweets.list) return(
        <div>
            Enter a user to see tweets...
        </div>
    );
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {tweets.list.map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
};

export default TweetsDisplay;
