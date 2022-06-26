import logo from '../logo.svg'
import '../App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { List } from './List'
import { Dividers, Repository } from '../types'
import { Divider } from '../hooks/Divider'

export function Repos()
{
    var space = 4;
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
    
    var newArr = Divider(data? data : [], space);
    console.log(newArr)
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className='App-list'>
                {isFetching && <div className='Load'>Carregando...</div>}

                { List(data? data : [], newArr)  }
            </div>

        </div>
    )
}