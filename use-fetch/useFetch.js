import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {

    const [state, setstate] = useState({data:null,isLoading:true,error:null});

    const isMounted = useRef(true);

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {
        
        setstate({
            data:null,
            isLoading:true,
            error:null
        });
        

        fetch(url)
            .then(resp  => resp.json())
            .then(data => 
                {
                    if(isMounted.current){
                        setstate({
                            data:data,
                            isLoading:false,
                            error:null
                        })
                    }else{
                        console.log('no se llamo el set state');
                    }
                }
            ).catch(err => {
                setstate({
                    data:null,
                    isLoading:false,
                    error:err
                })
            })

    }, [url]);

    return state;
}
