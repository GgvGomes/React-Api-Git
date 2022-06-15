import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

type Repository = {
    full_name: string,
    description: string
}

function App()
{
    const [repositories, Setrepositories] = useState<Repository[]>([])

    /*.then(response => response.json())*/
    useEffect(() =>
    {
        axios.get('https://api.github.com/users/diego3g/repos')
            .then(response =>
            {
                Setrepositories(response.data)
            })
    }, [])

    var min = repositories.length / 2;
    var max = repositories.length;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className="App-list">
                <ul>
                    {repositories.slice(0, min).map(repo =>
                    {
                        return (
                            <li key={repo.full_name}>
                                <strong>{repo.full_name}</strong>
                                <p>{repo.description}</p>
                            </li>
                            )
                    })
                    }
                </ul>
                <ul>
                    {repositories.slice(min, max).map(repo =>
                    {
                        return (
                            <li key={repo.full_name}>
                                <strong>{repo.full_name}</strong>
                                <p>{repo.description}</p>
                            </li>
                            )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default App
