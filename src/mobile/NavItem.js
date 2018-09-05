import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CardIcon, { getCard } from '../CardIcon';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.card = getCard(props.id);
  }

  handleClick = () => {
    const { history } = this.props;
    history.push(this.card.link);
  }

  render() {
    const { id } = this.props;

    return (
      <ListItem button onClick={this.handleClick}>
        <ListItemIcon>
          <CardIcon id={ id } />
        </ListItemIcon>
        <ListItemText primary={ this.card.title } />
      </ListItem>
    )
  }
}

export default withRouter(NavItem);

