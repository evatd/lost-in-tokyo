/* name the props you want in lieu of props - DRY code 
then delete props in "props.href"
= destructuring*/
const Highlight = ({ children, color }) => (
    /* if we didn't pass in color via props then all the highlights would be of the same colour*/
    <span className={`relative highlight highlight-${color}`}>
        {/* grabbing all the contnet from the component and accessing it via props.children */}
        <span className="relative z-2">{children}</span>
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

/* accepts props as an argument
change item.href to props.href 
update: when we specify the props we want - className, href in our argument
we can shorten the props.href to just href*/
const NavItem = ({ className, href, children, logo }) => (
    <li className={`mh2-ns f6 f4-l tc ${className}`}>
        <a className="white no-underline" href={href}>
            {/* we check for the logo props, if we have it (set to true in data)
        we render out the logo
        otherwise just show the title, which is outlined as children in data */}
            {logo ? <img src="../images/logo.svg" className="db center logo" /> :
                children}
        </a>
    </li>
);
/* map runs through each item in the array and performs a function on each one and returns
a list of things, i.e. grabbing a property off each object in our map array.
Here, App can access the Menu array because it's linked in index.html  */
const Nav = () => (
    <nav className="pt3 pt4-ns mb4 mb0-ns">
        {/* list removes bullet points, flexbox applief, wrap onto new lines when it's on mobile, don't wrap 
    onto new line when on the screen that is not small, justify space between them, 
    center the item vertically, padding on all sides of 0, margin on all sides of 0 */}
        <ul className="list flex flex-wrap flex-nowrap-ns justify-between">
            {menu.map(item => (
                /* pass in what NavItem uses - children, href, className 
                but pass it altogether via spread operator, DRY and easy to maintain as the data grows
                take the item variable and all the properties inside it 
                and lay them out onto our NavItem -
                instead of writing each one out.*/
                <NavItem {...item} />
            ))}
        </ul>
    </nav>
);

const Attraction = ({ title, description, image, className }) => (
    <div className={className}>
        <h1>{title}</h1>
        <p>{description}</p>
        {/* first have to navigate to images, file path is what they all share
        then fetch individual files
        So that we don't have to write the full path in data if we moved the images=DRY */}
        <img src={`../images/${image}`} />
    </div>
);

const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            <Nav />
            <Intro />
        </div>
        <div className="flex flex-wrap container">
            {/* name of the array in data.map => singular item 
        which we also note in the spread operator */}
            {attractions.map(attraction => (
                <Attraction {...attraction} />
            ))}
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
