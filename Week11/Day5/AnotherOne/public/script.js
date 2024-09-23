const products = async () => {
  try {
    const res = await fetch("http://localhost:5001/api/products/");
    const data = await res.json();
    console.log(data);
    render(data);
  } catch (error) {
    console.log(error);
  }
};
products();

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};

//http://localhost:5001/api/search?name=ip
const searchProducts = (e) => {
  e.preventDefault();

  const val = e.target.aaa.value;

  fetch("http://localhost:5001/api/search?name=" + val)
    .then((res) => res.json())
    .then((data) => {
      render(data);
    })
    .catch((e) => {
      console.log();
    });
};
