import React from 'react';

import Menu from '../Nav/Menu';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export default function Settings() {
    const delete = () => 
    axiosWithAuth()
        .delete(`/`)
    return (
        <div>
            <Menu />
            <button onClick={}>Delete Account</button>
        </div>
    )
}