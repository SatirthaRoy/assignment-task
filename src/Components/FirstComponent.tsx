import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

interface post {
  id: number;
  userId: number;
  title: string;
  body: string;
}


const FirstComponent = () => {
  const [posts, setPosts] = useState<post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setPosts(data);
      console.log(data);
    });
  },[])

  const columns: GridColDef<(typeof posts)[number]>[] = [
    { field: 'id', headerName: 'ID',type: 'number', width: 90 },
    {
      field: 'userId',
      headerName: 'User ID',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      type: 'string',
      width: 500,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      type: 'string',
      width: 600,
      editable: true,
    }
  ];
  return (
    <div className="mt-20">
      <h1 className="text-6xl text-center font-semibold">First component</h1>
      <DataGrid
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default FirstComponent