import { useEffect, useState } from 'react'

export type Dividers = {
    from: number,
    to: number,
}

export function Divider(data: number, space: number)
{
    // const [ Intervals , setItervals ] = useState<Dividers[] | []>([]);
    const [ Intervals , setItervals ] = useState<Dividers[]>([]);

    useEffect(() => {
        var Interval = data / space;

        for(var i = 0; i < data; i + Interval){
            // array = {...array,
            //     from: i,
            //     to: i + Interval
            // }

            let newArr = [...Intervals]; // copying the old datas array
            newArr.push({ from: i, to: (i + Interval)}); // replace e.target.value with whatever you want to change it to

            setItervals(newArr)
        }

    },[])

    return Intervals;
}