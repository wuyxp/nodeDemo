let arr = [
  'host/create/vm',
  'host/create/x86',
  'host/delete/ok',
  'disk/create/vm/xx'
];
/*
let result = [{
  id:'host',
  children:[{
    id: 'create',
    children:[{
      id: 'vm',
      children:[]
    },{
      id: 'x86',
      children:[]
    }]
  }]
},{
  id:'',
  clildren:[]
}];
*/
let result = [];
function generatorArr(arr){
  for (let i=0;i<arr.length;i++){
    let dep = arr[i].split('/');
    // [host,create,vm]
    let nodes = result;
    while(dep.length){
      let item = dep.shift();
      let nodesItem = nodes.find(node => node.id === item);
      if(nodesItem){
        nodes = nodesItem.children;
      }else{
        nodes.push({
          id:item,
          children:[]
        });
        nodes = nodes[nodes.length-1].children;
      }
    }
  }
}
generatorArr(arr);
console.log(JSON.stringify(result, null, 2));
