import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    /*
      let abcVals = this.getABC();
      this.setState(abcVals[0]);
    */
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHover = this.handleHover.bind(this);
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
    console.log('handleHover', a, b, c, areaInfo);
  }

  handleChange = event => {
    this.setState({ corner: event.target.value });
    var abcVals = this.getABC(event.target.value);
    this.setState({ abcs: abcVals });
  }

  handleClick(event) {
    var el = event.target;
    el.style.left = (parseInt(el.style.left, 10) + 10) + 'px';
  }

  chooseTriple(triple) {
    console.log('chooseTriple', this);
    this.setState(triple);
    //var t = setTimeout(() => { this.wrap(0, triple.a, triple.b, triple.c); }, 1000);
  }

  getABC(corner) {
    var abcVals = [];
    for (let i = 3; i <= 100; i++) {
      let bSquared = Math.pow(corner, 2) + 2 * corner * i;
      let sqrt = Math.floor(Math.pow(bSquared, .5));
      if (Math.pow(sqrt, 2) === bSquared) {
        abcVals.push({ a: i, b: sqrt, c: Math.pow(i*i + sqrt*sqrt, .5)});
      }
    }
    console.log('getABC', corner, abcVals);
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

  wrap(i, a, b, c) {
//console.log('Wrap:', a, b, c);
    var numSquares = b*b-1;
    if (b && i <= numSquares) {
      var style = this.calcWrapCoords(numSquares - i, a, b, 12, 200, c-a);
      var el = document.getElementById('sq' + i);
      el.style.top = style.top;
      el.style.left = style.left;
      i++;
      //var t = setTimeout(() => { this.wrap(i, a, b, c); }, 100);
    }
    
  }

  calcWrapCoords(i, a, b, sqW, leftOffset, thickness) {
    let growVertically = a * thickness + thickness*thickness;
    var top, left;

    if (i < growVertically) {
      top = sqW * (thickness*-1 + parseInt(i/thickness, 10)); // This is correct.
      left = leftOffset + -1 * (i%thickness+1) * sqW; // This is correct.
    } else {
      top = -1 * (i%thickness+1) * sqW; // This appears to be correct.
      left = leftOffset + parseInt((i - growVertically) / thickness, 10) * sqW; // This is correct.
    }

    let style={ top: top + 'px', left: left + 'px' };
    return style;
  }

  render() {
    const { classes } = this.props;

    const { a, b, c, abcs } = this.state;
    const bThick = c - a;

    return (
      <div>
      <article>
        <p className="general-content">Input side of corner square. For Pythagorean Triple primitives, the corner must be 2 or an odd square.</p>
        <input id="corner" 
          type="number" 
          onChange={this.handleChange}
          className={classes.textField}
        />
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
{/*
        <div id="a-square" style={{ left: "200px", marginTop: "10px", position: "relative" }}>
          { a && [...Array(a*a)].map((e, i) => {
            if (a > 2) {
              let style = this.calcACoords(i, a);
              return <div key={i} style={style} className="standalone a-square"></div>
            } else { return <span /> }
          })}
        </div>

        <div id="b-squared" style={{ marginTop: "10px", position: "relative" }}>
          { b && [...Array(b*b)].map((e, i) => {
            if (b > 2) {
              let style = this.calcBCoords(i, a, b);
              return <div key={i} style={style} className="standalone b-square-ghost"></div>
            } else { return <span /> }
          })}
        </div>

        <div id="b-squared" style={{ marginTop: "10px", position: "relative" }}>
          { b && [...Array(b*b)].map((e, i) => {
            if (b > 2) {
              let style = this.calcBCoords(i, a, b);
              return <div id={'sq' + i} key={i} style={style} className="standalone b-square"></div>
            } else { return <span /> }
          })}
        </div>
*/}
        <br style={{clear:"both"}}/>
      </article>
      </div>
			
    );
  }
}

export default withStyles(styles)(CornerInput);
