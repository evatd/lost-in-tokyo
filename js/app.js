const Title = props => <h1 className="tc">{props.title}</h1>

const Banner = props => (
    <h1 className="tc f1 yellow pa3">
        Hello {props.firstName} {props.surname}
    </h1>
);

const App = () => (
    <div>
        <Title title="Welcome to the site" />
        <Banner firstName="Eva" surname="Tkautz" />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
