export function Filter(){
    return(
        <>
        <div>
            <label>Selecione um usuário:</label>
            <select>
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
        </div>

        <div>
            <label>Selecione o número de colunas para a página se ajustar:</label>
            <select>
                <option value="1">1 coluna</option>
                <option value="2" selected>2 colunas</option>
                <option value="3">3 colunas</option>
                <option value="4">4 colunas</option>
            </select>
        </div>

        <button>Filtrar <i className="fa fa-search" aria-hidden="true"></i></button>
        </>
    )
}