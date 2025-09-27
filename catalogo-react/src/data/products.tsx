export type Review = {
  usuario: string;
  texto: string;
  fecha: string;
};

export type Product = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  reseñas: Review[];
};

export const products: Product[] = [
  {
    id: 1,
    nombre: "Scarborough fair",
    descripcion: "Set de 4 pistolas las Scarborough Fair, ideales para disparos y golpes.",
    precio: 300.0,
    imagen:
      "https://i.redd.it/ackb7fd9y2x91.jpg",
    reseñas: [
      {
        usuario: "Cereza",
        texto:
          "Hermosas y letales, 10/10 ideales para enfrentarse el pasado.",
        fecha: "2025-09-01",
      },
    ],
  },
  {
    id: 2,
    nombre: "L'Amour est blue",
    descripcion: "L'Amor est blue, y mi compañia para salvar a mi amiga",
    precio: 900.0,
    imagen:
      "https://pm1.aminoapps.com/6262/a82491f532b8a325075aaaad8410b7b9047b5068_hq.jpg",
    reseñas: [
      {
        usuario: "Jeanne",
        texto:
          "Ideales para enfrentarse tanto cielo como infierno.",
        fecha: "2025-01-02",
      },
    ],
  },
  {
    id: 3,
    nombre: "Colour My World",
    descripcion: "Te hace sentir cierta energia transformativa al momento de emplear estas armas.",
    precio: 700.0,
    imagen:
      "https://sirusgaming.com/wp-content/uploads/2022/10/Colour-My-World.jpg",
    reseñas: [
      {
        usuario: "Sigurd",
        texto:
          "0/10, me dispararon demasiado con ellas.",
        fecha: "2025-03-15",
      },
    ],
  },
  {
    id: 4,
    nombre: "Dead End Express",
    descripcion:
      "Increible para rebanar y montar, precaución muy pesada .",
    precio: 800.0,
    imagen:
      "https://commonsensegamer.com/wp-content/uploads/2022/11/Dead-end-Express-700x700.jpg",
    reseñas: [
      {
        usuario: "Luka",
        texto:
          " Me encanta y ni siquiera soy fan de los trenes.",
        fecha: "2025-10-15",
      },
    ],
  },
  {
    id: 5,
    nombre: "Ribbit Libido BZ55",
    descripcion:
      "Gran microfono, para cantar y que todo el mundo te escuche.",
    precio: 450.0,
    imagen:
      "https://i.pinimg.com/736x/95/98/02/9598024d1be96080f1b718d854e10215.jpg",
    reseñas: [
      {
        usuario: "Rosa",
        texto: " Esta Disponible?.",
        fecha: "2025-3-20",
      },
    ],
  },
    {
    id: 6,
    nombre: "Ignis Araneae Yoyo",
    descripcion:
      "set de 4 yoyos dos de ellos funcionan como patines, cuidado incluye cuchillas.",
    precio: 853.0,
    imagen:
      "https://sirusgaming.com/wp-content/uploads/2022/10/Ignis-Araneae-Yo-Yo.jpg",
    reseñas: [
      {
        usuario: "Stella",
        texto: " Muy afiladas.",
        fecha: "2025-5-27",
      },
    ],
  },
    {
    id: 7,
    nombre: "Tartarus",
    descripcion:
      "Dos puertas que sirven de tonfas y de escudo y practicamente indestructibles.",
    precio: 459.0,
    imagen:
      "https://staticg.sportskeeda.com/editor/2022/11/47724-16673196440905-1920.jpg",
    reseñas: [
      {
        usuario: "Morgana",
        texto: " Me recuerdan a mi hijo por alguna razon.",
        fecha: "2024-12-11",
      },
    ],
  },
     {
    id: 8,
    nombre: "Abracadabra",
    descripcion:
      "Ideales para hacer trucos de magia, el sombrero y el baston vienen juntos.",
    precio: 1000.0,
    imagen:
      "https://i.blogs.es/708352/bayonetta-3-abracadabra/450_1000.webp",
    reseñas: [
      {
        usuario: "Papillion de ombre",
        texto: " me vino con una capa de mismos colores, era un error?, de no ser asi, gracias.",
        fecha: "2023-12-31",
      },
    ],
  },
  


  
];
