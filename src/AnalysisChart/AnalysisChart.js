import React from 'react';
import {Card} from "react-bootstrap";

const AnalysisChart = ( {analysedTweets} ) => {
    if (analysedTweets.length === 0) return;
    console.log(analysedTweets);
    // For now, let's say that the relevant information of a tweet as pertaining to its category is:
    // username
    // image (tbd)
    return(
      <div>
          {analysedTweets.map(tweet => {
              return(
              <Card style={{ width: '18rem', margin: '10px' }}>
                  <Card.Body>
                      <Card.Text>{tweet.category.message.content}</Card.Text>
                  </Card.Body>
              </Card>
              );
          })}
      </div>
    );
}

export default AnalysisChart;