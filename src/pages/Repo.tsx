import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { Repository } from "../Types";

export function Repo()
{
    const params = useParams();
    const currentRepository = params['*'] as string;

    const queryClient = useQueryClient();

    async function handleChangeRepositoryDescription()
    {
        /* Pega a lista que eu tenho antes */
        const previousRepos = queryClient.getQueryData<Repository[]>('repos')

        if (previousRepos)
        {
            const nextRepos = previousRepos.map(repo =>
            {
                if (repo.full_name == currentRepository)
                {
                    return { ...repo, description: 'Testando' }
                } else
                {
                    return repo
                }
            })

            queryClient.setQueriesData('repos', nextRepos)
        }

        /* Invalida cache */
        /*await queryClient.invalidateQueries(['repos'])*/
    }

    return (
        <div>
            <h1> {currentRepository}</h1>
            <button onClick={handleChangeRepositoryDescription}>Change description</button>
        </div>
        )
}