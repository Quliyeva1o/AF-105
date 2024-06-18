const editBtn = document.querySelector("#edit");
const deleteBtn = document.querySelector("#delete");
const postBtn = document.querySelector("#post");

//GET ALL, GET BY ID, GET BY QUERY
//POST - create
//DELETE - delete
//PUT, PATCH - edit
//CRUD

//get all
fetch("https://northwind.vercel.app/api/categories", {
  method: "GET",
})
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  });

//get by ID
const id = 5;

fetch(`https://northwind.vercel.app/api/categories/${id}`, {
  method: "GET",
})
  .then((resp) => resp.json())
  .then((category) => {
    console.log(category);
  });

//delete by ID
deleteBtn.addEventListener("click", () => {
  fetch(`https://northwind.vercel.app/api/categories/${id}`, {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then((result) => {
      console.log("delete: ", result);
    });
});

//post
postBtn.addEventListener("click", () => {
  fetch("https://northwind.vercel.app/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //payload
    body: JSON.stringify({
      description: "code academy test 2",
      name: "POST test 2",
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("POST RESPONSE: ", data);
    });
});

//edit - PUT, PATCH by ID
editBtn.addEventListener('click',()=>{
    const updatedCategory = {name: 'updated NAME PATCH'}
    fetch(`https://northwind.vercel.app/api/categories/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCategory)
    })
    .then((resp)=>resp.json())
    .then((result)=>{
        console.log(result);
    })
})
