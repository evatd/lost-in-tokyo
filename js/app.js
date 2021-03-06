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

const Overlay = ({ title, description, showInfo, link }) => (
    /* our overlay which includes title and description;
        absolute positioning, viewport 100, flexbox, center items, background colour, font sizes */
    <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns 
        bg-aqua overlay"
/* we can write styles directly on elements, 
thus top the current styles accessed via classNames.
We do this because we want to show the overlay on toggle, 
i.e. if the overlay with title/description is shown (showInfo: true) or now
so, we first check if our showInfo is true
if it is, we change the transform to none (overlay covers the image), 
otherwise -100% (sliding the overlay up - bare image)
 */
style = {{
    transform: showInfo ? 'none' : 'translateY(-100%)'
}}
    >
    <div>
        {/* if the attraction has a link the display the title as link, otherwise just title */}
        {link ? <a href={link} target="_blank">
            <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
        </a> :
            <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}
            </h1>}
        <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}
        </p>
    </div>
    </div >
);

/* class component controls the toggle effect - 
we click on the image and title/description are shown, with an aqua bg */
class Attraction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false
        }
        /* bind our custom method */
        this.toggleInfo = this.toggleInfo.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
    }

    toggleInfo() {
        /* set up as function because we need access to previous state and props
        we want the overlay to jump back too, 
        toggle between the info being true and false
        so we add prevState and props, so we have access to both and can toggle */
        this.setState((prevState, props) => ({

            /* here we invert our showInfo boolean by using 
            the prev state (here we access the state) and the ! mark (here we overwrite the state) */
            showInfo: !prevState.showInfo

        }));
        console.log("you have toggled!");
    }

    closeInfo() {
        /* here setState is not a function like above, don't need prevState and props
        we just force setting the state to false
        so when the mouse leave the attaction image
        the overlay with info/description jumps back up */
        this.setState({
            showInfo: false
        });
    }

    render() {
        const { title, description, className, image, link } = this.props;
        const { showInfo } = this.state;
        return (
            <div
                className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer 
          attraction ${className}`}
                /* onMouseEnter/Leave combo allows you to toggle */
                onMouseEnter={this.toggleInfo}
                /* test: onMouseLeave runs when the mouse leaves the attraction image area*/
                /* onMouseLeave={()=> console.log("we have left")} */
                onMouseLeave={this.closeInfo}
            >
                {/*check for the state: {showInfo ? 'show info': 'hide info'}*/}                {/* content under relative will be hidden initially */}
                <div className="relative">
                    {/* pass in props (title, description) and state()
                just look at the content of oVerlay to see what to pass in
                i.e. is it props or state */}
                    <Overlay {...this.props} {...this.state} />
                    <img src={`../images/${image}`} className="db" />
                </div>
            </div >
        );
    }
}

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
