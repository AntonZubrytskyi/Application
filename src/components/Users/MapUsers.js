import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


function MapUsers({users}){

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'username', headerName: 'Username', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'website', headerName: 'Website', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 200 }
    ];




    return(

        <div style={{ height: '78vh', width: '100%' }}>
            <DataGrid rows={users} columns={columns} pageSize={10} />
        </div>

    )

}

export default MapUsers;
