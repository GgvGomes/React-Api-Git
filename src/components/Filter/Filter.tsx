import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Users } from "../../Types";
import { ConstructPag } from "../../pages/Repos";

export function Filter(){

    const urlUsers = 'https://api.github.com/users';

    // const { data, isFetching } = useQuery<Users[]>('users' , async () =>
    // {
    //     try{
    //         const response = await axios.get(urlUsers)

    //         return response.data;
    //     }catch(e){
    //         console.log(e)
    //     } finally {
    //         console.log('we finish')
    //     }
    // }, {
    //     /* ============= Não recarregar no periodo de tempo mostrado aqui ============ */
    //     staleTime: 1000 * 60
	// })

    const [data, setData] = useState<Users[]>([]);

    useEffect(() => {
        axios.get(urlUsers)
            .then(response =>
            {
                setData(response.data)
            })
    })

    return(
        <>
            <div>
                <label>Selecione um usuário:</label>
                <select id="UserSelect">
                    <option value="">Selecione um usuário</option>
                    
                    {data?.map(user => {
                        return(
                            <option value={user.login}>{user.login}</option>
                        )})}
                </select>
            </div>

            <div>
                <label>Nome ou descrição de um repositório:</label>
                <input id="NameDescription" type='text' placeholder="Insira o nome ou descrição de um repositório"></input>
            </div>

            <div>
                <label>Ajustes da páginação:</label>
                <select id="Pagination" defaultValue='2'>
                    <option value="1">1 coluna</option>
                    <option value="2">2 colunas</option>
                    <option value="3">3 colunas</option>
                    <option value="4">4 colunas</option>
                </select>
            </div>

            <button onClick={ConstructPag}><i className="fa fa-search" aria-hidden="true"></i>  Filtrar </button>
    
        </>
    )
}
