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
            From museums and galleries, to Robot Restaurants and kitten
            cafes, Tokyo is the gift that keeps on giving. Dattebayo!{' '}
        </div>
    </div>;

const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            <Intro />
        </div>
        <div className="flex flex-wrap container"></div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
