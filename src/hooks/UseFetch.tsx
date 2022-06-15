import axios from "axios"
import { useEffect, useState } from "react"

type Repository = {
    full_name: string,
    description: string
}

export function usefetch<T = unknown>(url: string)
{
    const [data, SetData] = useState<T | null>(null)

    useEffect(() =>
    {
        axios.get(url)
            .then(response =>
            {
                SetData(response.data)
            })
    }, [])

    return { data }
}