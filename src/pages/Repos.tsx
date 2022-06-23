// import { useState, useEffect } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Divider } from '../hooks/Divider'
import { List } from './List'

export type Repository = {
    full_name: string,
    description: string
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

    // var min = data ? data.length / 2 : 0;
    // var max = data ? data.length : 0;


    // Ta com loop
    // const dividers = Divider(data? data.length : 0, 2)
    
    // console.log(dividers)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className="App-list">

                {isFetching && <div className='Load'>Carregando...</div>}

                {/* <List List={data} divider={Divider(data? data.length : 1, 2)} ></List>     */}
                {/* { List(data? data : [], Divider(data? data.length : 1, 2))  } */}
                {/* { List(data? data : [], <Divider data ={data? data.length : 1} space={2} />)  } */}
                

            </div>

        </div>
    )
}