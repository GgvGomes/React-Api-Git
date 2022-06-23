import '../App.css'
import { Link } from 'react-router-dom'

export type Repository = {
    full_name: string,
    description: string
}

export type Dividers = {
    from: number,
    to: number,
}

export function List(List: Array<Repository>, divider: Array<Dividers> ) {    

    return(
        <div>
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
        </div>
    )
    
    // return(
    //         <ul>
    //             {data?.slice(div.from, div.to).map(repo => {
    //                 return (
    //                     <li key={repo.full_name}>
    //                         <Link to={`repos/${repo.full_name}`}>
    //                             <strong>{repo.full_name}</strong>
    //                         </Link>
    //                         <p>{repo.description}</p>
    //                     </li>
    //                 )
    //             })}
    //         </ul> 
    // )
}