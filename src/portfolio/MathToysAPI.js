import { showPortfolioSite } from './helpers';
import "../assets/css/App.scss";

const MathToysAPI = () => {
    return <>
        <p>The <b>api.math-toys.app</b> API provides content for, well, math nerds. It returns Pythagorean triples, decimal expansions of the reciprocals of prime numbers, powers of phi expressed as fractions.</p>

        <h2>Routes</h2>
        <p>GET /phi/[powers]: Returns phi powers up to the one specified.</p>
        <p>GET /pythag/[c_minus_b]: Returns list of Pythagorean triples having the specified difference between c and b.</p>
        <p>GET /dc/[denom]: Returns decimal expansions for the proper fractions of the specified denominator.</p>
        <p>GET /recip/[denom]: Returns decimal expansion for the reciprocal of the specified denominator.</p>

        <p>AWS Lambda, coded in Python.</p>

        <h2>Hosting</h2>
        <div className="tech-stuff">
            <p>The api.math-toys.app API runs an AWS Lambda function. The math-toys.app domain itself is hosted on Netlify, where a CNAME record has been added to point the api.math-toys.app subdomain to the API Gateway domain name in AWS.</p>

            <p>The code is on GitHub for source control, and an Action is set up to test the code and, if it passes, deploy it to the Lambda function when a change to the master branch is detected.</p>
        </div>


        <p><b>Phi</b> for each power up to the one specified.</p>
        <div className="tech-stuff">
            <p>Example: <a data-portfolio="api-phi" onClick={showPortfolioSite}>https://api.math-toys.app/phi/7</a> provides the powers of phi up to the third power. Merely providing the real number calculation of phi to a given power would be uninteresting. Less common is to see powers of phi expressed in fraction form, always with a denominator of 2. This is unusual, because every third power could have the 2 canceled out. However, viewing them in this way allows us to observe that the Fibonacci numbers occur as the coefficient of the square root of 5.</p>
        </div>

        <p><b>Decimal expansions</b> for all fractions of a denominator.</p>
        <div className="tech-stuff">
            <p>Example of decimal expansions: <a data-portfolio="api-dc" onClick={showPortfolioSite}>https://api.math-toys.app/dc/7</a>. This goes beyond a simple decimal calculation by indicating how many digits there are in the expansion, how many of them repeat, and whether the repeating portion can be split into two complementary parts. In the example of the 7ths, you can see that all numerators use the same six digits: 142857, in the same order, and that when you split it into two groups of three digits each, the sum of the groups is 999.</p>
            <p>What makes this API call special is that the decimal expansion isn't merely a standard numeric calculation using floating point numbers: it' i's a string concatenation of digits constructed by a step-by-step process of long division. Therefore, it's not limited by the system's numerical precision. This means that, for instance, with 109 as the denominator, we see all 108 digits in the period.</p>
        </div>

        <p><b>Pythagorean triples</b> (a, b, c) triples, based on the difference of c minus b.</p>
        <div className="tech-stuff">
            <p>Example: <a data-portfolio="api-pythag" onClick={showPortfolioSite}>https://api.math-toys.app/pythag/1</a> returns Pythagorean triples (a, b, c) where c - b = 1. There is one such triple for every odd number greater than 1, and all such triples are primitive--there is no common factor for a, b, and c. Given a as an odd number greater than 1, b is (a<sup>2</sup> - 1)/2, and c is (a<sup>2</sup> + 1)/2. The first few Pythagorean triples of this patter are:<br />
                (3, 4, 5)<br />
                (5, 12, 13)<br />
                (7, 24, 25)<br />
                (9, 40, 41)<br />
            </p>
        </div>

        <p><b>Decimal expansion</b> for the reciprocal of a denominator.</p>
        <div className="tech-stuff">
            <p>Example of decimal expansions: <a data-portfolio="api-recip" onClick={showPortfolioSite}>https://api.math-toys.app/recip/109</a>. This does exactly the same thing as the /dc/[denom], but it only does it for the reciprocal. This allows you to inspect the decimal expansio for, say, 1/109 without also receiving the other 107 expansions.</p>
        </div>

    </>
};

export default MathToysAPI;
