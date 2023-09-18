const data = [
  {
    brand: "Tommy Hilfiger",
    description: "white shoes",
    price: 6.99,
    img: "https://img01.ztat.net/article/spp-media-p1/8fc2af0805de3e3b8e2d510ffabd3e47/60403b3d99c04ed3ab82c8edb8dfef7e.jpg?imwidth=500&filter=packshot",
  },
  {
    brand: "Adidas",
    description: "blue shoes",
    price: 16.99,
    img: "https://img01.ztat.net/article/spp-media-p1/8fc2af0805de3e3b8e2d510ffabd3e47/60403b3d99c04ed3ab82c8edb8dfef7e.jpg?imwidth=500&filter=packshot",
  },
  {
    brand: "Bugatti",
    description: "Very expensive shoes",
    price: 106.99,
    img: "https://img01.ztat.net/article/spp-media-p1/8fc2af0805de3e3b8e2d510ffabd3e47/60403b3d99c04ed3ab82c8edb8dfef7e.jpg?imwidth=500&filter=packshot",
  },
];

function transform() {
  const elements = data.map((x) => {
    const clone = cloneTemplate();
    clone.getElementById("brand").innerText = x.brand;
    return clone;
  });
  document.body.append(...elements);
}

function cloneTemplate() {
  const template = document.getElementById("clothing-template");

  const clone = document.importNode(template.content, true);
  return clone;
}

window.addEventListener("load", transform);
