import { useState, useEffect } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

export type Repository = {
    full_name: string,
    description: string
}

export function Repos()
{
    const { data, isFetching } = useQuery<Repository[]>('repos', async () =>
    {
        const response = await axios.get('https://api.github.com/users/diego3g/repos')

        return response.data;
    }, {
        /* ============= Não recarregar no periódo de tempo mostrado aqui ============ */
        staleTime: 1000 * 60
	})

    var min = data ? data.length / 2 : 0;
    var max = data ? data.length : 0;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className="App-list">

                {isFetching && <div className='Load'>Carregando...</div>}

                <ul>
                    {data?.slice(0, min).map(repo =>
                    {
                        return (
                            <li key={repo.full_name}>
                                <Link to={`repos/${repo.full_name}`}>
                                    <strong>{repo.full_name}</strong>
                                </Link> 
                                <p>{repo.description}</p>
                            </li>
                        )
                    })}
                </ul>

                <ul>
                    {data?.slice(min, max).map(repo =>
                    {
                        return (
                            <li key={repo.full_name}>
                                <Link to={`repos/${repo.full_name}`}>
                                    <strong>{repo.full_name}</strong>
                                </Link> 
                                <p>{repo.description}</p>
                            </li>
                        )
                    })}
                </ul>

            </div>

        </div>
    )
}