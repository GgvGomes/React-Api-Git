import axios, { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"

type Repository = {
    full_name: string,
    description: string
}

const api = axios.create({
    baseURL: 'https://api.github.com/'
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig)
{
    const [data, SetData] = useState<T | null>(null)
    const [isFetching, SetIsFetching] = useState(true)
    const [error, SetError] = useState<Error | null>(null)

    useEffect(() =>
    {
        api.get(url, options)
            .then(response =>
            {
                SetData(response.data)
            })
            .catch(err =>
            {
                SetError(err)
            })
            .finally(() =>
            {
                SetIsFetching(false)
            })
    }, [])

    return { data, isFetching, error }
}