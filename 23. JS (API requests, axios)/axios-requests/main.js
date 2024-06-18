const API_URL = 'https://northwind.vercel.app/api';
//get all
// axios.get(API_URL+'/categories')
// .then((res)=>{
//     console.log(res.data);
// });

//get by id
// axios.get(API_URL+`/categories/${1}`)
// .then((res)=>{
//     console.log(res);
// });

//delete by id
// axios.delete(API_URL+`/categories/${2}`)
// .then((RES)=>{
//     console.log(RES);
// });

//POST
// axios.post(API_URL+'/categories',{name: 'code academy',description: 'lorem ipsum'}).then((res)=>{
//     console.log(res);
// }).catch((Err)=>{
//     console.log(Err);
// });

const id = 2;

//PUT
axios.put(API_URL+`/categories/18`,{name: 'code academy 2'}).then((res)=>{
    console.log(res);
}).catch((Err)=>{
    console.log(Err);
});

//PATCH
axios.patch(API_URL+`/categories/17`,{name: 'code academy PATCH'}).then((res)=>{
    console.log(res);
}).catch((Err)=>{
    console.log(Err);
});