class App extends React.Component {
    render() {
        const randomText = () => {
            const texts = ['X', 'Y', 'Z']
            return texts[Math.floor(Math.random() * texts.length)]
        }
        return (
            <div>
                <Machine
                    s1={randomText()}
                    s2={randomText()}
                    s3={randomText()}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))