import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import FibRatios from '../helpers/fib-ratios';

const styles = theme => ({
	textField: {
		width:50,
	},
});

class FibonacciRatios extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = event => {
		var seedA = this.refs['seed-a'].value ? parseInt(this.refs['seed-a'].value, 10) : 0;
		var seedB = this.refs['seed-b'].value ? parseInt(this.refs['seed-b'].value, 10) : 0;
		if (seedA && seedB) {
			FibRatios(seedA, seedB);
		}
	}

	fib(n) {
    	var a = 0, b = 1; 
		for (let i = 1; i <= n; i++) { [a, b] = [b, a+b]; } 
		return [a, b];
	}


	render() {
		const fibRows = [...Array(30).keys()];

		return (
          <div>
            <article className="arithmophile">
              <header>
                <div className="title">Fibonacci Ratios</div>
                <div className="date"></div>
              </header>

              <div className="content">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan="5">Sum of</td>
                      <td colSpan="1">Ratio</td>
                    </tr>
                    <tr>
                      <td>a</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>1a</td>
                    </tr>
                    <tr>
                      <td>b</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>1b</td>
                    </tr>
                    <tr>
                      <td>1a</td>
                      <td>+</td>
                      <td>1b</td>
                      <td>=</td>
                      <td>1a+1b</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1b</td>
                      <td>+</td>
                      <td>1a+1b</td>
                      <td>=</td>
                      <td>1a+2b</td>
                      <td>1a+2b / 1a+1b</td>
                    </tr>
                    { fibRows.map(n => {
                        let [a3, b3] = this.fib(n+2);
                        let [a2, b2] = this.fib(n+1);
                        let [a1, b1] = this.fib(n);
                        return (<tr key={n}>
                      <td>{a2}a+{b2}b</td>
                      <td>+</td>
                      <td>{a3}a+{b3}b</td>
                      <td>=</td>
                      <td>{a2+a3}a+{b2+b3}b</td>
                      <td>{a2+a3}a+{b2+b3}b / {a1+a2}a+{b1+b2}b</td>
                        </tr>)}
                    )}
                  </tbody>
                </table>
                <br clear="both"/>
                <div style={{"float": "left"}}>
                  <label>Seed value a</label> 
                  <input type="text" id="seed-a" placeholder="a" size="5" ref="seed-a"
                  />
                </div>
                <div style={{"float": "left"}}>
                  <label>Seed value b</label> 
                  <input type="text" id="seed-b" placeholder="b" size="5" ref="seed-b"
                  />
                </div>
                <div style={{"float": "left"}}>
                  <input type="button"
                    value="Calculate"
                    onClick={this.handleClick}
                  />
                </div>
                <br clear="both"/>
                <table>
                  <tbody>
                    { fibRows.map(n => {
                        let [a, b] = this.fib(n+1);
                        return (<tr key={n}>
                          <td>{a}, {b}: <span className="seq"></span></td>
                          <td>Ratio: <span className="ratio"></span></td>
                        </tr>)}
                    )}
                  </tbody>
                </table>
                <p>The cool thing about this is that no matter which integers you choose as your seed values, the ratio between one item and the previous approaches phi (~1.618).</p>
              </div>
            </article>

          </div>
		);
	}
}

export default withRouter(withStyles(styles)(FibonacciRatios));

