const Highlight = props => (
    /* if we didn't pass in color via props then all the highlights would be of the same colour*/
    <span className={`relative highlight highlight-${props.color}`}>
        {/* grabbing all the contnet from the component and accessing it via props.children */}
        <span className="relative z-2">{props.children}</span>
    </span>
)

const Intro = () =>
    /* m-auto-ns: when the screen is not small=above mobile size, then set the margin to auto
    margin is working horizontally and veritically because we have a flexbox on the parent */
    <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
        {/* margin-bottom is 3 when the screen is small and 4 when it's not small (ns) */}
        <div className="mb3 mb4-ns">
            <Highlight color="aqua">Lost in Tokyo</Highlight> is a directory of fun places to see, play in
            and <Highlight color="yellow">explore</Highlight>, in <Highlight color="blue">Tokyo</Highlight>, Japan.{' '}
        </div>

        <div>
            From <Highlight color="blue">museums</Highlight> and <Highlight color="aqua">galleries</Highlight>, to <Highlight color="pink">Robot Restaurants</Highlight> and <Highlight color="pink">kitten
            cafes</Highlight>, Tokyo is the gift that keeps on giving. <Highlight color="yellow">Dattebayo!</Highlight>{' '}
        </div>
    </div>;

/* map runs through each item in the array and performs a function on each one and returns
a list of things, post-function */

const menu = ["About", "Tickets", "Logo", "Journal"];

const Nav = () => (
    <nav>
        <ul>{menu.map(item => <li>{item}</li>)}
        </ul>
    </nav>
);

const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            <Nav />
            <Intro />
        </div>
        <div className="flex flex-wrap container">
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
