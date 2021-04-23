import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { titles, addRow } from './Table';
import { config } from '../Graph/Config';
import { postPush  } from '../Graph/GraphService';

function Frame (props:any) {
     
    const [registros, setRegistros] = useState<Object[]>([]);
    const [selectedRegistros, setSelectedRegistros] = useState([]);
    const [pushBtn, setPushBtn] = useState<boolean>(true);

    const loadTable = async () => {    
        setRegistros([])               
        var valores = await addRow();
        registros.push(valores)
        setRegistros(registros);
        console.log(registros)        
    }

    function onRegistroChange(state:any) {
        setSelectedRegistros(state.selectedRows);            
        if (state.selectedRows.length >0) {
            setPushBtn(false);
        }
        else {
            setPushBtn(true);
        }
    }

    const onPush = async () => {
        if (props.user)
        {
            try {var accessToken = await props.getAccessToken(config.scopes);
            await postPush(accessToken, selectedRegistros); 
            alert("saved");
            }
            catch (err) {
            props.setError('ERROR', JSON.stringify(err));
            }
        }
    }

    return (
        <div className="App-body">
            <button 
                className="btn-primary"
                type="button"
                onClick={loadTable}>
                Add
            </button>      
            <button type="button" 
                className="btn-danger" 
                onClick={onPush} 
                disabled={pushBtn}>
                    Push
            </button>  
            <DataTable                
                selectableRows={true}
                onSelectedRowsChange={onRegistroChange}
                columns= {titles}                
                data={registros}  
                responsive={true} 
                overflowY={true}                         
            />
        </div>
    );
}
export default Frame;