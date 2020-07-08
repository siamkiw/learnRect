class App extends React.Component {
    static defaultProps = {
        form = 'Anonymous'
    }
    render() {
        return (
            <div>
                <Hello
                    to="Siam"
                    from="Apple"
                    bangs={6}
                    img="https://images.unsplash.com/photo-1593435050642-aa402b8ffd63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                />
                <Hello
                    to="Siam"
                    bangs={6}
                    img="https://images.unsplash.com/photo-1593435050642-aa402b8ffd63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))