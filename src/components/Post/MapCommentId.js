import React from 'react';
import {DataGrid} from "@material-ui/data-grid";

function MapCommentsID({posts}){

    const columns = [
        { field: 'id', headerName: 'CommentID', width: 150 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'body', headerName: 'Body', width: 700 },
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
