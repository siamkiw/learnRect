class Hello extends React.Component {
    render() {
        const { to, from, bangs, img } = this.props
        const exclamation = '!'.repeat(bangs)
        return (
            <div>
                <h1>Hello from another file</h1>
                <h1>HI from {to} form {from}{exclamation}</h1>
                <img src={img} />
            </div>
        )
    }
}