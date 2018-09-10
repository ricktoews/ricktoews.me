import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class CurrentlyReading extends Component {
  render() {
    return (
      <div className="currently-reading">
        <img src="/media/images/iceland-selfie.jpg" style={{float:"left", width:"50px", marginRight:"10px"}} alt="Currently Reading" />
        <Typography variant="title">Currently Reading</Typography>
        <Typography variant="body1">
The mountain’s head shone in a great vacancy of light. It held within its ugly contour either everything or nothing at all. It awakened the imagination by its peculiar emptiness. And from it came the voice again.
        </Typography>
        <Typography variant="body1">
‘Do you dare? Do you dare?’
        </Typography>
        <Typography variant="body1">
And a host of voices joined. Voices from the sun-blotched glades. From the marshes and the gravel beds. From the birds of the green river reaches. From where the squirrels are and the foxes move and the woodpeckers thicken the drowsy stillness of the day with their far arcadian tapping: from where the rotten hollow of some tree, mellow with richness, glows as though lit from within by the sweet and secret cache of the wild bees.

Peake, Mervyn. Gormenghast (p. 439). The Overlook Press. Kindle Edition. 
        </Typography>
      </div>
    );
  }
}

export default CurrentlyReading;
