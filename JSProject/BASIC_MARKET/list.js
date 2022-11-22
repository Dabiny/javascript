import { getProductCard } from "./modules/productCard.js";
import { productList } from "./modules/productList.js";

const $sectionDOM = document.getElementsByTagName('section')[0];

const productListContainer = productList([
    {
        id: 1,
        imgSrc: "public/assets/당근.jpg",
        name: "당근 2개입",
        discountPersent: 10,
        price: 10000,
        dicountPrice: 9000,
    },
    {
        id: 2,
        imgSrc: "public/assets/파프리카.jpg",
        name: "파프리카 2입",
        discountPersent: 20,
        price: 2500,
        dicountPrice: 2000,
    },
    {
        id: 3,
        imgSrc: "public/assets/키위.jpg",
        name: "키위 1상자",
        discountPersent: 10000,
        price: 10,
        dicountPrice: 9000,
    },
    {
        id: 4,
        imgSrc: "public/assets/삼겹살.jpg",
        name: "삼겹살 500g",
        discountPersent: 20,
        price: 5000,
        dicountPrice: 4500,
    },
    {
        id: 5,
        imgSrc: "public/assets/머핀.jpg",
        name: "머핀 3개",
        discountPersent: 20,
        price: 5000,
        dicountPrice: 4500,
    },
]);

$sectionDOM.appendChild(productListContainer);

