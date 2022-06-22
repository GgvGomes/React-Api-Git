import '../App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

type Repository = {
    full_name: string,
    description: string
}

export function List(data: Array<Repository>, min: number, max: number) {
    
    

    return(
        <ul>
            {data?.slice(0, min).map(repo => {
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
    )
}