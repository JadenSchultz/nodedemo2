import MyCounter from './components/MyCounter';
import MyGitHub from './components/MyGitHub';

function App() {
    return (
        <div className = "React App">
            <h1>Hello React!</h1>

            <h2>Jaden Schultz - z52g614</h2>

            <hr />
            <MyCounter /><hr />

            <MyGitHub /><hr />

            <p>Running node server on port 5033</p>

        </div>
    )
}

export default App