import React from 'react';
import {DataGrid} from "@material-ui/data-grid";

function MapPostsID({posts}){

    const columns = [
        { field: 'id', headerName: 'PostID', width: 170 },
        { field: 'title', headerName: 'Title', width: 400 },
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

export default MapPostsID;
