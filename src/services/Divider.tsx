import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

export type Dividers = {
    from: number,
    to: number
}

export function Divider(data: number, space: number)
{
    const { from , setFrom} = useQuery([0])
    const { to , setTo} = useQuery([0 + (data/space)])    

    return data;
}