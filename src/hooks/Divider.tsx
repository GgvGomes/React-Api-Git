import { Dividers } from "../Types";

export function Divider<T = unknown>(data: Array<T>, space: number)
{    
    // var min = data ? data.length / space : 0;
    // var max = data ? data.length : 0;

    var dataLimit = data.length - 1;
    var Interval = parseInt((data ? data.length / space : 0).toFixed(0));

    let newArr:Dividers[] = []; // copying the old datas array
    var from = 0;
    var to = 0;

    data.forEach((_,index) =>   
    {
        var check = (from + Interval) - 1;

        if(index == check){
            to = from == 0 ? to + Interval - 1 : to + Interval;

            if(newArr.length == (space - 1)){
                to = to + (dataLimit - to)
            }

            newArr.push({ from: from , to: to});

            from = index + 1;
        }else if(index == dataLimit && (newArr.length + 1) == space){
            to = dataLimit;

            newArr.push({ from: from , to: to});
        }
    })
        
    return newArr;
}