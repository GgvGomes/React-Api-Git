import { useEffect, useState } from 'react'

export type Dividers = {
    from: number,
    to: number,
}

export function Divider(data: number, space: number)
{
    // var a = "cheguei no divider";
    // return a;
    const [ Intervals , setItervals ] = useState<Dividers[]>([]);

    useEffect(() => {
        var Interval = data / space;
        setItervals([])

        for(var i = 0; i < data; i = i + Interval){
            console.log(i)
            console.log(i + Interval)
            // array = {...array,
            //     from: i,
            //     to: i + Interval
            // }

            let newArr = [...Intervals]; // copying the old datas array
            newArr.push({ from: i, to: (i + Interval)}); // replace e.target.value with whatever you want to change it to

            setItervals(newArr)
        }

    }) 
    
    return Intervals;
}