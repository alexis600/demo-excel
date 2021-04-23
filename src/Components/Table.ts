export const titles = [  
    {
        name: 'Column 0',
        selector: 'Column0',
        width: '10%'
    },      
    {
        name: 'Column 1',
        selector: 'Column1',
        width: '10%'
    },
    {
        name: 'Column 2',
        selector: 'Column2',
        width: '10%'
    },
    {
        name: 'Column 3',
        selector: 'Column3',
        width: '10%'
    },
    {
        name: 'Column 4',
        selector: 'Column4',
        width: '10%'
    },
    {
        name: 'Column 5',
        selector: 'Column5',
        width: '10%'
    },
    {
        name: 'Column 6',
        selector: 'Column6',
        width: '10%'
    },
    {
        name: 'Column 7',
        selector: 'Column7',
        width: '10%'
    },
    {
        name: 'Column 8',
        selector: 'Column8',
        width: '10%'
    },
    {
        name: 'Column 9',
        selector: 'Column9',
        width: '10%'
    }                                    
]

export const addRow = async () => {
    var values: any[] = []
    var fila = {
        "Column0": `${Math.random()*100}`,
        "Column1": `${Math.random()*100}`,
        "Column2": `${Math.random()*100}`,
        "Column3": `${Math.random()*100}`,
        "Column4": `${Math.random()*100}`,
        "Column5": `${Math.random()*100}`,
        "Column6": `${Math.random()*100}`,
        "Column7": `${Math.random()*100}`,
        "Column8": `${Math.random()*100}`,
        "Column9": `${Math.random()*100}`
    }
    values.push(fila);
    return fila
}
