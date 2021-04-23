var graph = require('@microsoft/microsoft-graph-client');

function getAuthenticatedClient(accessToken: string) {
  // Initialize Graph client
  const client = graph.Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: (done: any) => {
      done(null, accessToken);
    }
  });
  return client;
}

export async function getUserDetails(accessToken: string) {
  const client = getAuthenticatedClient(accessToken);
  const user = await client
    .api('/me')
    .select('displayName,mailboxSettings,userPrincipalName')
    .get();    
  return user;
}

export async function postPush(accessToken: string, selectedRows: any) {  
  const client = getAuthenticatedClient(accessToken);  
  const result:any[] = [];
  for(let i = 0; i < selectedRows.length; i++) {
    let fila:any[] = [];
    let row = selectedRows[i];
    fila.push(row['Column0']);
    fila.push(row['Column1']);
    fila.push(row['Column2']);
    fila.push(row['Column3']);
    fila.push(row['Column4']);
    fila.push(row['Column5']);
    fila.push(row['Column6']);
    fila.push(row['Column7']);
    fila.push(row['Column8']);
    fila.push(row['Column9']);
    result.push(fila);
  }
  const objeto = {"values": result };  
  const saveToGraph = await client
  
  //https://graph.microsoft.com/v1.0/me/drives/5d9243b3565eb6d5/items/5D9243B3565EB6D5!2382 /* with the remote id ok, with the item id permision revoked */ /workbook/tables/add
  .api('me/drives/5d9243b3565eb6d5/items/5D9243B3565EB6D5!2382/workbook/tables/1/rows/add')
  .post(objeto);
}