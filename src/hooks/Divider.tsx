import { Dividers } from "../types";

export function Divider<T = unknown>(data: Array<T>, space: number)
{    
    // var min = data ? data.length / space : 0;
    // var max = data ? data.length : 0;

    var Interval = parseInt((data ? data.length / space : 0).toFixed(0));
        
    let newArr:Dividers[] = []; // copying the old datas array

    var from = 0;
    var to = 0;
    console.log(data.length)
    console.log(Interval)
    // Precisa arrumar caso a divisao n der o lenght certin
    data.forEach((_,index) => 
    {
        var check = (from + Interval) - 1;

        if(index == check){
            console.log('cheguei na posição' + index)
            to += Interval;

            newArr.push({ from: from , to: to});

            let VerifLength = to + 1;
            if(VerifLength = data.length){
                to += 1;
            }

            from = index;
        }
    })
    
    return newArr;
}