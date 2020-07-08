class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props
        const msg = s1 === s2 && s2 === s3 ? "You Win!!" : "You Lose!!"
        return (
            <div>
                <h1>Slot Machine</h1>
                <h1>{s1} {s2} {s3}</h1>
                <h1>{msg}</h1>
            </div>
        )
    }
}