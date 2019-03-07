import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './arithmo.css';

const styles = theme => ({
	textField: {
		width:50,
	},
});

class CornerInput extends Component {
	constructor(props) {
		super(props);
		let cornerParam = props.match ? props.match.params.corner : '1';
		let corner = parseInt(cornerParam, 10);
		this.state = {
			corner: corner
		};
		let abcVals = this.getABC();
		this.setState(abcVals[0]);
		this.handleClick = this.handleClick.bind(this);
	}

	handleHover(cls) {
		var areaInfo;
		const { a, b, c } = this.state;
		
		if (cls === 'b-corner-area') {
			areaInfo = `B corner: ${c - a} squared: ${Math.pow(c - a, 2)}`;
		} else if (cls === 'b-area') {
			areaInfo = `B sides: 2 x ${c - a} x ${a}: ${2*(c-a)*a}`;
		} else {
			areaInfo = `A squared: ${Math.pow(a, 2)}`;
		}
	}

	handleChange = event => {
		this.setState({ corner: event.target.value });
		var abcVals = this.getABC();
		this.setState({ abcs: abcVals });
	}

	handleClick(event) {
      console.log('handleClick', event.target);
      var el = event.target;
      el.style.left = (parseInt(el.style.left, 10) + 10) + 'px';
	}

	chooseTriple(triple) {
		console.log('chooseTriple', this);
		this.setState(triple);
	}

	getABC() {
		var corner = this.state.corner;
		var abcVals = [];
		for (let i = 3; i <= 100; i++) {
			let bSquared = Math.pow(corner, 2) + 2 * corner * i;
			let sqrt = Math.floor(Math.pow(bSquared, .5));
			if (Math.pow(sqrt, 2) === bSquared) {
				abcVals.push({ a: i, b: sqrt, c: Math.pow(i*i + sqrt*sqrt, .5)});
			}
		}
		return abcVals;
	}

    calcACoords(i, a) {
      let topPos = Math.floor(i / a);
      let leftPos = i % a;
      let top = topPos * 12;
      let left = leftPos * 12;
      let style={ top: top + 'px', left: left + 'px' };
      return style;
    }

    calcBCoords(i, a, b) {
      let topPos = Math.floor(i / b);
      let leftPos = i % b;
      let top = (12*(a-b)) + topPos * 12;
      let left = leftPos * 12;
      let style={ top: top + 'px', left: left + 'px' };
      return style;
    }

    calcWrapCoords(i, a, b, sqW, leftOffset, thickness) {
      let topPos = Math.floor(i / b);
      let leftPos = i % b;

      let top = i <= a ? (a - i - 1) * sqW : -1 * sqW;
      let left = i <= a ? (leftOffset - sqW) : leftOffset + (i - a - 1) * sqW;

console.log('b*b', b*b, 'a', a, 'i', i, 'top', top,  'left', left, 'thickness', thickness);
      let style={ top: top + 'px', left: left + 'px' };
      return style;
    }

	render() {
		const { classes } = this.props;

		const { a, b, c, abcs } = this.state;
		console.log('render', a, b, c, abcs);
		const bThick = c - a;

        var bTop = 0;

		return (
			<div>
			<article>
				<Typography variant="body1" gutterBottom>Input side of corner square. For Pythagorean Triple primitives, the corner must be 2 or an odd square.</Typography>
				<TextField id="corner" 
                 type="number" 
                 onChange={this.handleChange}
				 className={classes.textField}
                 InputLabelProps={{ shrink: true, }} margin="normal" />
				<Button onClick={this.handleClick}><CheckCircle /></Button>
				<br style={{clear:"both"}}/>

				{ abcs && abcs.map((abc, i) => {
					return <Button variant="outlined" size="small" key={i} onClick={this.chooseTriple.bind(this, abc)}>{abc.a}, {abc.b}, {abc.c}</Button>
				}) }

				<div className="a-b-c">
				{ [...Array(c)].map((e, i) => {
					return (<div className="row" key={i}>
						{ [...Array(c)].map((e2, i2) => {
							let area = '';
							if (i < bThick && i2 < bThick) { area = 'b-corner-area'; }
							else if (i < bThick || i2 < bThick) { area = 'b-area'; }
							else { area = 'a-area'; }
							return (<div onMouseOver={this.handleHover.bind(this, area)} className={'square ' + area} key={i2}></div> )
						} ) }
					</div>)
				})}
				</div>

				<br style={{clear:"both"}}/>

                <div id="a-square" style={{ left: "200px", marginTop: "10px", position: "relative" }}>
                  { a && [...Array(a*a)].map((e, i) => {
                    if (a > 2) {
                      let style = this.calcACoords(i, a);
                      return <div key={i} style={style} className="standalone a-square"></div>
                    } else { return <span /> }
                  })}
                </div>

                <div style={{ marginTop: "10px", position: "relative" }}>
                  { b && [...Array(b*b)].map((e, i) => {
                    if (b > 2) {
                      let style = this.calcBCoords(i, a, b);
                      return <div key={i} onClick={(e) => this.handleClick(e)} style={style} className="standalone b-square"></div>
                    } else { return <span /> }
                  })}
                </div>

                <div style={{ marginTop: "10px", position: "relative" }}>
                  { b && [...Array(b*b)].map((e, i) => {
                    if (b > 2) {
                      let style = this.calcWrapCoords(i, a, b, 12, 200, c-a);
                      return <div key={i} onClick={(e) => this.handleClick(e)} style={style} className="standalone b-square"></div>
                    } else { return <span /> }
                  })}
                </div>

				<br style={{clear:"both"}}/>
			</article>
			</div>
			
		);
	}
}

export default withStyles(styles)(CornerInput);
