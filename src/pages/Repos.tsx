import { useState, useEffect } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Divider } from '../services/Divider'

export type Repository = {
    full_name: string,
    description: string
}

export type References = {
    from: number,
    to: number
}

export function Repos()
{
    const url = 'https://api.github.com/users/diego3g/repos'

    const { data, isFetching } = useQuery<Repository[]>('repos', async () =>
    {
        try{
            const response = await axios.get(url)

            return response.data;
        }catch(e){
            console.log(e)
        } finally {
            console.log('we finish')
        }
    }, {
        /* ============= Não recarregar no periodo de tempo mostrado aqui ============ */
        staleTime: 1000 * 60
	})

    // const { references, setReferences } = useQuery<References[]>([]);

    // setReferences(<Divider data={data? data.length : 0} space={2}/>)

    var min = data ? data.length / 2 : 0;
    var max = data ? data.length : 0;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className="App-list">

                {isFetching && <div className='Load'>Carregando...</div>}

                

                {/* <ul>
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
                </ul> */}

            </div>

        </div>
    )
}