import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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

const TravelIcon = (props) => {
	const { place } = props;

	const placePath = '/media/images/copenhagen/';
	const image = {
		copenhagen: 'mermaid.jpg',
	};

	return (
		<img src={ placePath + image[place] } style={{ marginRight: "10px", float: "left", width: "50px", height: "50px" }}/>
	);
}


const _imageCard = (props) => {
	const { classes } = props;

	return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/media/images/copenhagen/mermaid.jpg"
          title="Hans Christian Andersen's The Little Mermaid"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            The Little Mermaid
          </Typography>
          <Typography component="p">
            Naturally, I had to see this while visiting Copenhagen. It was mildly challenging to find an opportune moment when it wasn't surrounded by hordes of tourists. (Yeah, I was also a tourist. Whatever.)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
	);
}
const ImageCard = withStyles(styles)(_imageCard);

const thumbs = {
	copenhagen: [
		'aquarium-shark.jpg',
		'kronborg-moat-2.jpg',
		'rosenborg-castle.jpg',
		'rosenborg.jpg',
		'st-albans-2.jpg',
		'canal.jpg',
		'kronborg-moat.jpg',
		'rosenborg-crown.jpg',
		'roskilde-town.jpg',
		'st-albans.jpg',
		'christiansborg-interior.jpg',
		'kronborg-passage.jpg',
		'rosenborg-grounds-pool.jpg',
		'roskilde.jpg',
		'tivoli-at-night.jpg',
		'christiansborg.jpg',
		'kronborg-selfie.jpg',
		'rosenborg-grounds.jpg',
		'round-tower-interior.jpg',
		'tivoli-roller-coaster.jpg',
		'kronborg-dark-selfie.jpg',
		'mermaid.jpg',
		'rosenborg-park.jpg',
		'round-tower-outside.jpg',
		'kronborg-lantern-selfie.jpg',
		'nyhavn.jpg',
		'rosenborg-silver-lions.jpg',
		'round-tower-view.jpg',
	],
};

class Thumbnails extends React.Component {


	componentDidMount() {
		// The code in componentDidMount is meant to pre-load images. Technique came from https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
		// Jury's still out on whether this is actually working.
		const { place } = this.props;
		const placePath = '/media/images/' + place + '/';
		thumbs[place].forEach(filename => {
			const img = new Image();
			img.src = placePath + filename;
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
						<li key={src}><img src={src} className="place-image"/></li>
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
			  <h1>Travel Adventures</h1>
		      <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}><TravelIcon place="copenhagen"/>2017 - Copenhagen</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
					From my 2017 trip to Copenhagen. I stayed in an airbnb just across the street from Tivoli Gardens and so was able to walk to a number of places. I also used public transportation.
                  </Typography>
		          <ImageCard place="copenhagen"/>
		          <Thumbnails place="copenhagen"/>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>2016 - Paris</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
		    </div>
		);
	}
}

export default withStyles(styles)(Travel);
