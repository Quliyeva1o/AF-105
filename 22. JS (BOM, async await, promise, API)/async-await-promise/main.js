const mes = document.querySelector("#result");
const eggs = [];

// const promise = new Promise((resolve, reject) => {
//   if (eggs.length > 0) {
//     return resolve({ data: eggs, message: "success" });
//   } else {
//     return reject({ data: null, message: "failed" });
//   }
// });

// console.log("promise: ", promise);
// promise.then((result)=>{
//     console.log('test then')
//     mes.textContent = result.message;
//     mes.style.color = 'green';

// }).catch((err)=>{
//     console.log('test catch')
//     mes.textContent = err.message;
//     mes.style.color = 'red';
// }).finally(()=>{
//     console.log('finally');
// })

function g() {
  return new Promise((resolve, reject) => {
    if (eggs.length > 0) {
      return resolve({ data: eggs, message: "success" });
    } else {
      return reject({ data: null, message: "failed" });
    }
  });
}

function gPromise(callback){
    callback().then((result) => {
        console.log(result)
    }).catch((err) => {
        console.error(err);
    });
}

// async await
async function gAsync(callback){
    try {
        const res =  await callback();
        // const data = await res;
    } catch (error) {
        console.log(error);
    }
}

// gPromise(g);
gAsync(g);
