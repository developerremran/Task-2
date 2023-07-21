import { useEffect, useState } from "react";


export const PostGet = () => {
    const [postData, setPostData] = useState()

    useEffect(() => {
        fetch('/public/Fake.json')
            .then(res => res.json())
            .then(data => {
                setPostData(data) 
            })
    }, [])

    return [postData, setPostData];

};

