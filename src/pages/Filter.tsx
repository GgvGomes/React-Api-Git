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
            <label>Nome ou descrição de um repositório:</label>
            <input type='text' placeholder="Insira o nome ou descrição de um repositório"></input>
        </div>

        <div>
            {/* <label>Ajuste da disposição da página:</label> */}
            <label>Ajustes da páginação:</label>
            <select>
                <option value="1">1 coluna</option>
                <option value="2" selected>2 colunas</option>
                <option value="3">3 colunas</option>
                <option value="4">4 colunas</option>
            </select>
        </div>

        <button><i className="fa fa-search" aria-hidden="true"></i>  Filtrar </button>
        </>
    )
}