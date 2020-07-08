class Friends extends React.Component {
    render() {
        const { name, hobbies } = this.props
        const li = hobbies.map(hob => <li key={hob.toString()}>{hob}</li>)
        return (
            <div>
                <h1>Friends'name is {name}</h1>
                <h1>And his hobbies are</h1>
                <ul>
                    {li}
                </ul>
            </div>
        )
    }
}