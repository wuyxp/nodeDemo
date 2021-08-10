var str = "leetcode"


const getSrot = str => {
   return Object.values(str.split('').reduce((re,i,ind) => {
       (
           re['sort'][i]===undefined ? ( re['tmp'][i]===undefined ? (re['sort'][i] = ind) : null ) : (re['tmp'][i]=ind && delete re['sort'][i])
       ); 
       console.log(re);
       return re
    }, {tmp:{},sort:{}}).sort)[0]
}


// const getSrot = str => {
//     return str.split('').reduce((re,i,ind) => {

//         if(re['sortObj'][i]===undefined || re['tmp'][i]!==undefined){
//             re['sortObj'][i] = ind;
//             re['sort'].push(ind);
//             re['sortKey'][ind] = re['sort'].length-1;
//         }else{
//             re['tmp'][i] = ind;
//             delete re['sortObj'][i];
//             re['sort'][re['sortKey'][ind]] = null;
//         }
//         return re
//     }, {tmp:{},sortObj:{},sort:[],sortKey:[]})
// }
console.log(getSrot(str))