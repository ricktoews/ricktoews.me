import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class HomeContentItem extends Component {
  render() {
    const { data } = this.props;

    const blurbImage = data.image > '' ? <img src={data.image} style={{float:"left", width:"50px", marginRight:"10px"}} alt={data.title} /> : '';
console.log('blurbImage', blurbImage);
    return (
      <div>
        {blurbImage}
        <Typography variant="title">{data.title}</Typography>
        {
          data.blurb.map((b, key) => {
            return (
              <Typography key={key} variant="body1">
                {b}
              </Typography>
            )
          })
        }
      </div>
    );
  }
}

export default HomeContentItem;
