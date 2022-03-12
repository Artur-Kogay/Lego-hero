import React, {useEffect} from 'react';
import {Redirect, useLocation, useParams} from "react-router-dom";
import {$api} from "../../services/api";


const activate = async () => {
    const x = new URLSearchParams(window.location.search)
    try {
        let obj = {}
        for (const [key, value] of x.entries()) {
            obj[key] = value
        }
        await $api.post('/accounts/auth/users/activation/', obj)
    } catch (e) {
        console.log(e.response)
    }

}

const Activate = () => {

    useEffect(() => {
        activate()
    }, [])
    return (
        <>
            <Redirect to={{ pathname: `/welcome` }}/>
        </>
    );
};

export default Activate;
