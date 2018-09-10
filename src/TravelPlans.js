import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class TravelPlans extends Component {
  render() {
    return (
      <div className="travel-plans">
        <img src="/media/images/iceland-selfie.jpg" style={{float:"left", width:"50px", marginRight:"10px"}} alt="Currently Reading" />
        <Typography variant="title">Travel Plans</Typography>
        <Typography variant="body1">
          A few years ago, I began a project of visiting at least one new country per year, and probably the capital city. This year, I'll be adding two notches: Austria and The Czech Republic. The only specific experience I have lined up is attending a performance of the Mozart Requiem at Karskirche (completed 1737) in Vienna. I've long dreamed of hearing such music in a centuries-old cathedral in Europe, so this will be an occasion to check an item off the bucket list.
        </Typography>
        <Typography variant="body1">
        </Typography>
        <Typography variant="body1">
        </Typography>
      </div>
    );
  }
}

export default TravelPlans;

