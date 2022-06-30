import '../../global.css'
import './style.css'
import { Link } from 'react-router-dom'
import { Dividers, Repository } from '../../Types'

export function List(repository: Array<Repository>, newArr: Array<Dividers>) {

    return (
        <>
            {newArr.map(div => {
                return (
                    <ul key={div.from + '-' + div.to}>

                        {repository.slice(div.from, (div.to + 1)).map(repo => {
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