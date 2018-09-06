import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Masthead from './Masthead';
import TravelIcon, { thumbs } from './TravelIcon';

import './travel.css';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Thumbnails extends React.Component {

  componentDidMount() {
    // The code in componentDidMount is meant to pre-load images. Technique came from https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
    // Jury's still out on whether this is actually working.
    var places = Object.keys(thumbs);
    places.forEach(place => {
      let placePath = '/media/images/' + place + '/';
      thumbs[place].forEach(filename => {
        const img = new Image();
        img.src = placePath + filename;
      });
    });
  }

  render() {
    const { place } = this.props;
    const placePath = '/media/images/' + place + '/';
    return (
      <div>
      <ul>
      {
        thumbs[place].map(img => {
          let src = placePath + img;
          return (
            <li key={src}><img src={src} className="place-image" alt="Travel Thumb" /></li>
          );
        })
      }
      </ul>
      </div>
    );
  }
}

class Travel extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Masthead id="travel" />
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><TravelIcon place="copenhagen"/>2017 - Copenhagen</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MediaQuery query="(min-width: 481px)">
          <Typography>
            From my 2017 trip to Copenhagen. I stayed in an airbnb just across the street from Tivoli Gardens and so was able to walk to a number of places. I also used public transportation.
          </Typography>
          </MediaQuery>
          <Thumbnails place="copenhagen"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><TravelIcon place="paris"/>2016 - Paris</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MediaQuery query="(min-width: 481px)">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          </MediaQuery>
          <Thumbnails place="paris"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><TravelIcon place="iceland"/>2015 - Reykjavik</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MediaQuery query="(min-width: 481px)">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          </MediaQuery>
          <Thumbnails place="iceland"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Travel);
