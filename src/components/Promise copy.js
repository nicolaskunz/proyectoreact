

const task = new Promise ( (resolve, reject) => {

setTimeout(() => {
    const data = [
        {id: 'string', name: 'string', descripction: 'string', stock: 5},
        {id: 'string', name: 'string', descripction: 'string', stock: 5},
        {id: 'string', name: 'string', descripction: 'string', stock: 5},
    ]
    resolve (data);
}, 3000);
});

task.then((result) => {
    console.log(result);
});

const products = [
    {id: 'string', name: 'string'},
    {id: 'string', name: 'string'},
    {id: 'string', name: 'string'},
];



// De otro chico:
 
task = new Promise ((resolve, reject) => {
    let productos = [{ id: 'A250', name: 'Led Phillips', description: '42 Pulgadas, Full HD', stock: 25},
                    { id: 'B347', name: 'Lavarropas Drean', description: 'Automatico, Carga Frotal, 8KG', stock: 5}];
    setTimeout(() => resolve(productos), 3000);
  });
  
  task.then (result => {
    console.log(result);
  }, error => {
    console.log('error');
  }).catch(exception => {
    console.log('exception');
  })
  