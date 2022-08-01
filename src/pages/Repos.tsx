import logo from '../logo.svg'

import { useQuery } from 'react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { List } from '../components/List'
import { Dividers, Repository, Users } from '../Types'
import { Divider } from '../hooks/Divider'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

let url = ''

export function Repos() {
    const [repository, setRepository] = useState<Repository[]>([]);
    const [temporaryRepository, setTemporaryRepository] = useState<Repository[]>([]);

    const [userSelected, setUserSelected] = useState<string>('');
    const [nameDescription, setNameDescription] = useState<string>('');
    const [pagination, setPagination] = useState<any>(2);
    const [newArr, setNewArr] = useState<Dividers[]>([]);

    
    // var temporaryRepository = nameDescription.length > 0 ?
    // repository.filter(repo =>  handleFilter(repo)) : [];
    // const handleFilter = (repo : {full_name: string, description: string}) => {
    //     if(repo.full_name.includes(nameDescription) || repo.description.includes(nameDescription))
    //         return repo;
    // }

    const [modalShow, setModalShow] = useState(false);
    var DivModal = document.getElementById("Modal-User") as HTMLElement | null;

    const handleOpen = () => {
        setRepository([]);
        setModalShow(true);

        DivModal = document.getElementById("Modal-User");
        if(DivModal != null){
            DivModal.classList.remove('hidden')
        }
    }

    const handleClose = () =>  {
        DivModal = document.getElementById("Modal-User");
        if(DivModal != null){       
            DivModal.classList.add('hidden');
            DivModal.addEventListener('animationstart',ModalHide)
        }
    }

    const ModalHide = () => setTimeout(() => {setModalShow(false)}, 700);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '10px',
        minHeight: '10vh',
        boxShadow: 24,
        p: 4,
    };

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

    useEffect(() => {
        setNewArr(Divider(repository, pagination))
    }, [repository ])

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

                <button className='AnimationRight' onClick={userSelected ? handleConstructPagination : handleOpen}><i className="fa fa-search" aria-hidden="true"></i>  Filtrar </button>
            </div>

            <div className='App-list'>
                {repository && List(repository, newArr)}

                <Modal
                    id='Modal-User'
                    open={modalShow}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box sx={style}>
                        <div className='Body-title'>
                            <h2 id="modal-title">Atenção</h2>
                        </div>

                        <div className='Body-modal'>
                            <p id="modal-description">Informe um usuário para efetuar a busca.</p>
                        </div>

                        <div className='Modal-Fotter'>
                            <button onClick={handleClose}>Fechar</button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}