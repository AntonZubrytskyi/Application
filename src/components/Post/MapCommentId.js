import React from 'react';
import {DataGrid} from "@material-ui/data-grid";



function MapCommentsID({posts}){

    const columns = [
        { field: 'id', headerName: 'CommentID', width: 170 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 400 },
        { field: 'body', headerName: 'Body', width: 500 },

    ];



    return(
        <div>
            <div style={{ height: '75vh', width: '100%' }}>
                <DataGrid rows={posts} columns={columns} pageSize={10} />
            </div>

        </div>
    )

}

export default MapCommentsID;
