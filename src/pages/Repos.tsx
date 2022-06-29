import logo from '../logo.svg'
import '../App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { List } from '../components/List/List'
import { Repository } from '../Types'
import { Divider } from '../hooks/Divider'
import { Filter } from '../components/Filter/Filter'
import { useEffect } from 'react'

// let url = 'https://api.github.com/users/diego3g/repos'
var UserSelected:HTMLInputElement | null = null;
let url = ''
var space = 2;
let search;

export function Repos()
{

    const { data, isFetching, refetch } = url == '' ? useQuery<Repository[]>([]) : useQuery<Repository[]>('repos', async () =>
    {
        try{
            const response = await axios.get(url)

            return response.data;
        }catch(e){
            console.log(e)
        } finally {
            console.log('we finish')
        }
    }// , {
        /* ============= Não recarregar no periodo de tempo mostrado aqui ============ */
        //staleTime: 1000 * 60
    //}
    )


    useEffect(() => { 
        // if(UserSelected?.value == null){
        //     alert('ta vazio')
        // }else{
            refetch()
        // }
    }, [url])

        // if(search != null){
        //     console.log('entrei no shearch')
        //     console.log('/'+search+'/')
    
        //         data?.map((find,index) => {
    
        //             if( find.description.match('/'+search+'/') ||
        //                 find.full_name.match('/'+search+'/')){}else{
        //                     console.log('remover a posição '+ index)
    
        //                     data.splice(index, 1)
        //                 }
        //         })
        // }
    

    var newArr = Divider(data? data : [], space);
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className='App-filter'>
                <Filter/>
            </div>

            <div className='App-list'>
                {isFetching && <div className='Load'>Carregando...</div>}

                { List(data? data : [], newArr)  }
            </div>
        </div>
    )
}

export function ConstructPag(){
    UserSelected = document.getElementById('UserSelect') as HTMLInputElement | null;
    var NameDescription = document.getElementById("NameDescription") as HTMLInputElement | null;
    var Pagination = document.getElementById("Pagination") as HTMLInputElement;

    console.log(UserSelected?.value)
    console.log(NameDescription?.value)
    console.log(Pagination?.value)

    url = 'https://api.github.com/users/'+ UserSelected?.value +'/repos';
    space = Pagination.value as unknown as number;

    if(NameDescription?.value != null){
       search =  NameDescription?.value;
    }else{
        search = null;
    }
}