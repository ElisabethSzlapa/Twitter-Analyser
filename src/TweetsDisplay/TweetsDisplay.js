import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TweetCard = ({ tweet }) => {
    const { fullText, likeCount, replyCount, retweetCount, tweetBy } = tweet;

    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title>{tweetBy.fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">@{tweetBy.userName}</Card.Subtitle>
                <Card.Text>{fullText}</Card.Text>
                <Card.Text>Likes: {likeCount}</Card.Text>
                <Card.Text>Replies: {replyCount}</Card.Text>
                <Card.Text>Retweets: {retweetCount}</Card.Text>
                <Button variant="primary">View Tweet</Button>
            </Card.Body>
        </Card>
    );
};

const TweetsDisplay = ({ tweets }) => {
    if (!tweets.list) return(
        <div>
            Enter a user to see tweets...
        </div>
    );
    console.log(tweets);
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {tweets.list.map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
};

export default TweetsDisplay;
