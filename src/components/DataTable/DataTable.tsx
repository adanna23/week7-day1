import React,{ useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core';
import { DroneForm } from '../../components/DroneForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Name', headerName: 'Car name', width: 130 },
    { field: 'make', headerName: 'Make', width: 130 },
    {
      field: 'year',
      headerName: 'year',
      type: 'string',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      
    },
  ];
  
interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable =  () => {
  
  let { droneData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}})

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }

  console.log(gridData.data.id)

    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Cars In Inventory</h2>
          <DataGrid rows={droneData} columns={columns} pageSize={5} checkboxSelection onRowSelected = { setData } />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Cars model</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Car</DialogContentText>
              <DroneForm id={gridData.data.id!}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
      );
}