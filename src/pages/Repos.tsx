import 'animate.css';
import logo from '../logo.svg'
import { useQuery } from 'react-query'
import axios from 'axios'
import { List } from '../components/List'
import { Dividers, Repository, Users } from '../Types'
import { useEffect, useState } from 'react'
import { Divider } from '../hooks/Divider'
import { UseModalContext } from '../components/Modal/modal.context';
// import { Modal } from '../components/Modal';

let url = ''

export function Repos() {
    const [repository, setRepository] = useState<Repository[]>([]);
    const [temporaryRepository, setTemporaryRepository] = useState<Repository[]>([]);

    const [userSelected, setUserSelected] = useState<string>('');
    const [nameDescription, setNameDescription] = useState<string>('');
    const [pagination, setPagination] = useState<any>(2);
    const [newArr, setNewArr] = useState<Dividers[]>([]);

    const urlUsers = 'https://api.github.com/users';

    const { data, isFetching } = useQuery<Users[]>('users', async () => {
        try {
            const response = await axios.get(urlUsers)

            return response.data;
        } catch (e) {
            console.log(e)
        } finally {
            console.log('we finish')
        }
    }, {
        /* ============= Não recarregar no periodo de tempo mostrado aqui ============ */
        staleTime: 1000 * 60
    })

    function handleConstructPagination() {
        url = 'https://api.github.com/users/' + userSelected + '/repos'

        async function featchData() {
            const response = await fetch('https://api.github.com/users/' + userSelected + '/repos');
            const data = await response.json();

            if (nameDescription != '') {
                setTemporaryRepository(data)
            } else {
                setRepository(data)
            }
        }

        featchData();
    }

    // console.log(UseModalContext())
    // const openModal = UseModalContext;
    // const handleModalOpen = () => openModal({message: 'teste 123'})
    const handleModalOpen = () => alert('aaaaa')

    useEffect(() => {
        setNewArr(Divider(repository, pagination))
    }, [repository])

    useEffect(() => {
        if (nameDescription != '') {
            var NewRepo: Repository[] = [];

            console.log('procurando')
            temporaryRepository.forEach((repo) => {
                // if( (repo.full_name).match('/'+ nameDescription +'/') || (repo.description).match('/'+ nameDescription +'/') ){
                if (repo.description) {
                    if ((repo.full_name).indexOf(nameDescription) != -1 || (repo.description).indexOf(nameDescription) != -1) {
                        NewRepo.push(repo)
                    }
                } else {
                    if ((repo.full_name).indexOf(nameDescription) != -1) {
                        NewRepo.push(repo)
                    }
                }

            })

            setRepository(NewRepo);
        }
    }, [temporaryRepository])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className='App-filter'>
                <div className='AnimationLeft'>
                    <label>Selecione um usuário:</label>
                    <select
                        id="UserSelect"
                        onChange={e => setUserSelected(e.target.value)}
                    >
                        <option value="">Selecione um usuário</option>

                        {data?.map(user => {
                            return (
                                <option key={user.id} value={user.login}>
                                    {user.login}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className='AnimationLeft'>
                    <label>Nome ou descrição de um repositório:</label>
                    <input
                        id="NameDescription"
                        type='text'
                        placeholder="Insira o nome ou descrição de um repositório"
                        onChange={e => setNameDescription(e.target.value)}
                    ></input>
                </div>

                <div className='AnimationRight'>
                    <label>Ajustes da páginação:</label>
                    <select id="Pagination" defaultValue={2} onChange={e => setPagination(e.target.value)}>
                        <option value={1}>1 coluna</option>
                        <option value={2}>2 colunas</option>
                        <option value={3}>3 colunas</option>
                        <option value={4}>4 colunas</option>
                    </select>
                </div>

                <button className='AnimationRight' onClick={userSelected ? handleConstructPagination : handleModalOpen}><i className="fa fa-search" aria-hidden="true"></i>  Filtrar </button>
            </div>

            <div className='App-list'>
                {/* {isFetching && <div className='Load'>Carregando...</div>} */}

                {repository && List(repository, newArr)}

            </div>
        </div>
    )
}