import '../App.css'
import { Link } from 'react-router-dom'
import { Dividers, Repository } from '../types'

export function List(List: Array<Repository>, divider: Array<Dividers> ) {    

    return(
        <>
            {divider.map( div => {
                return(
                    <ul>
                        {List?.slice(div.from, div.to).map(repo => {
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
            })} 
        </>
    )
}