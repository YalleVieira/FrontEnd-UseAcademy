const defaultUrl = "https://bootcampuseacademy.herokuapp.com/categories/";

function getCategory(url) {
  return axios({
    method: "GET",
    url,
    data: {
      limit: 20,
    },
  }).then((response) => {
    createCategory(response.data);
  }).catch(e => {
    this.errors = e.response.data.errors
  })
}

getCategory(defaultUrl);

function createCategory(data) {
  const div = document.getElementById("categoria");
  div.innerHTML = "";

  for (let item of data) {
    const d = document.createElement("div");
    
    d.setAttribute("class", "item");

    d.append(createTag("p", `${item.name.toUpperCase()}`));
    d.append(createTagEdit());
    d.append(createTagDelete());
    div.append(d);
  }
}

function createTag(type, text) {
  const tag = document.createElement(type);
  const value = document.createTextNode(text);
  tag.append(value);
  return tag;
}

function createTagEdit() {
  const edit = document.createElement("a");
  const icon = document.createElement("img");

  icon.setAttribute("class", "icon-edit");
  icon.setAttribute("src", "/icones_Desafio_fullstack/ic_edit_orange0.png");

  edit.setAttribute("class", "edit");
  edit.setAttribute("href", "/html/p1-editar_categoria.html");
  edit.append(icon);
  return edit;
}

function createTagDelete() {
  const remove = document.createElement("a");
  const icon = document.createElement("img");

  icon.setAttribute("class", "icon-remove");
  icon.setAttribute("src", "/icones_Desafio_fullstack/delete_orange.png");

  remove.setAttribute("class", "remove");
  remove.setAttribute("href", "javascript:removeCategory()");
  remove.append(icon);
  return remove;
}

function remove() {
    axios.delete(`${url}/12`)
    .then(_response => {})
    .catch(error => console.log(error))
}

function removeCategory(node) {
    var node = document.getElementById("categoria");
    if (node.parentNode) {
    node.parentNode.removeChild(node);
}
}