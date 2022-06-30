
const url = "https://bootcampuseacademy.herokuapp.com/categories/"
const newCategory = {
    name: "categoria 1"
}
const testeCategory = {
    name: "categoria atualizada"
}

function getCategory(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getCategory()

//cadastra novas categorias
function addNewCategory() {
    axios.post(url, newCategory)
    .then(response => {
        getCategory;
    })
    .catch(error => console.log(error))
}

//addNewCategory()
function updateCategory(){
    axios.put("https://bootcampuseacademy.herokuapp.com/categories/571fc51e-e509-4223-8ac6-f7085f35ebef", testeCategory)
    .then(response => {
        alert('Categoria atualizada')
    })
    .catch(error => console.log(error))
}

//updateCategory()

function deleteCategory(){
    axios.delete("https://bootcampuseacademy.herokuapp.com/categories/b14f7d07-a670-45f7-afe5-e74703079c45")
    .then(response => {})
    .catch(error => console.log(error))
}

//deleteCategory()

function getCategoryId(){
    axios.get("https://bootcampuseacademy.herokuapp.com/categories/b54bc665-9eb7-462a-b8b5-eb20158578f2")
    .then(response =>{
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error));
}

//getCategoryId()