class App extends React.Component {
    render() {

        return (
            <div>
                <Friends
                    name="Siam"
                    hobbies={['Play a computer game.', 'Go to fitness', 'codeing']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))