class NumberPicker extends React.Component {
    render() {
        const num = getNum()
        let msg = num >= 5 ? 'You Win.' : 'You lose.'
        return <div>
            <h1>Your number is {getNum()}</h1>
            <h1>{msg}</h1>
        </div>
    }
}
