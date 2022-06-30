import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from './components/Modal/modal.context';
import { Repo } from './pages/Repo'; 
import { Repos } from './pages/Repos'; 
// import 'antd/dist/antd.css'
import './global.css'

export function App()
{
    return (
        <ModalProvider>
            <Routes>
                <Route path='/' element={ <Repos /> } />
                <Route path='/repos/*' element={ <Repo /> } />
            </Routes>
        </ModalProvider>
        )
}


/* ================== Mais basico ================== */
/*useEffect(() =>
    {
        axios.get('https://api.github.com/users/diego3g/repos')
            .then(response =>
            {
                Setrepositories(response.data)
            })
    }, [])*/


/* =============== Quase loading dahora ================ */
 /*   < div className = "App" >
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>

{
    !error ?
    <div className="App-list">

        {isFetching && <div className='Load'>Carregando...</div>}

        <ul>

            {data ?
                data.slice(0, min).map(repo =>
                {
                    return (
                        <li key={repo.full_name}>
                            <strong>{repo.full_name}</strong>
                            <p>{repo.description}</p>
                        </li>
                    )
                }) : data
            }
        </ul>

        <ul>
            {data ?
                data.slice(min, max).map(repo =>
                {
                    return (
                        <li key={repo.full_name}>
                            <strong>{repo.full_name}</strong>
                            <p>{repo.description}</p>
                        </li>
                    )
                }) : data
            }
        </ul>

    </div>
    : <div></div>
}

        </div >*/