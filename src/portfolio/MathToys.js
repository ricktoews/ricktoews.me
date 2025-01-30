import { showPortfolioSite } from './helpers';
import "../assets/css/App.scss";

const MathToys = () => {
    return <>
        <div data-portfolio="math-toys" onClick={showPortfolioSite} className="portfolio-link"><img className="screenshot" src="/images/screenshot-math-toys.png" /></div>

        <p>I've always had an interest in some areas of math. My math-toys.app site showcases a few of these. Featured are Pythagorean triples, Decimal expansions, and a 12-digit calendar.</p>

        <p>Perhaps the most familiar example of <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup> is the (3, 4, 5) triple: 9 + 16 = 25. A characteristic of this one is that <i>c</i>-<i>b</i> = 1. There is such a triple for each odd number as the <i>a</i> value: if you square the odd number, add 1, and divide by 2, you get <i>c</i>. If you square the odd number, subtract one, and divide by 2, you get <i>b</i>. Take 5, for instance: (5<sup>2</sup> + 1) / 2 = 13, and (5<sup>2</sup> - 1) / 2 = 12. So (5, 12, 13) is a Pythagorean triple: 25 + 144 = 169.</p>

        <p>The 12-digit calendar is something I was shown when I was 10. Each year can be represented by 12 digits--one for each month. If you look at a standard calendar, you'll notice that most months have a certain number of blanks (between 1 and 6) in the first week before the first day of the month. That number is the digit for the month.</p>

        <p>If you add the month's number to the date, that will tell you the day of the week the date falls on. The 12-digit calendar for 2025 is 366240251361. The digit for January is 3. January 1, 2025 fell on a Wednesday, because 3 + 1 = 4, and Day 4 in the week is Wednesday.</p>
    </>
};

export default MathToys;
