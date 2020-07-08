function getNum() {
    return Math.floor((Math.random() * 10) + 1)
}

class App extends React.Component {
    render() {

        return <div>
            <NumberPicker />
            <NumberPicker />
            <NumberPicker />
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))  