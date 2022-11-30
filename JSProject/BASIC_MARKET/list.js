import { fetchSectionData } from "./modules/fetch.js";
import { getProductCard } from "./modules/productCard.js";
import { setFilterEvent, setSearchButtonEvent } from "./modules/productFilter.js";
import { productList } from "./modules/productList.js";

const $sectionDOM = document.getElementsByTagName('section')[0];

// const productListContainer = productList([
//     {
//         id: 1,
//         imgSrc: "public/assets/당근.jpg",
//         name: "당근 2개입",
//         discountPersent: 10,
//         price: 10000,
//         dicountPrice: 9000,
//     },
//     {
//         id: 2,
//         imgSrc: "public/assets/파프리카.jpg",
//         name: "파프리카 2입",
//         discountPersent: 20,
//         price: 2500,
//         dicountPrice: 2000,
//     },
//     {
//         id: 3,
//         imgSrc: "public/assets/키위.jpg",
//         name: "키위 1상자",
//         discountPersent: 10000,
//         price: 10,
//         dicountPrice: 9000,
//     },
//     {
//         id: 4,
//         imgSrc: "public/assets/삼겹살.jpg",
//         name: "삼겹살 500g",
//         discountPersent: 20,
//         price: 5000,
//         dicountPrice: 4500,
//     },
//     {
//         id: 5,
//         imgSrc: "public/assets/머핀.jpg",
//         name: "머핀 3개",
//         discountPersent: 20,
//         price: 5000,
//         dicountPrice: 4500,
//     },
// ]);

// $sectionDOM.appendChild(productListContainer);

const sectionInfoList = await fetchSectionData();

const productListJSON = sectionInfoList.reduce((prev, curr) => {
    return [...prev, ...curr.productList];
}, []);


// JSON에 있는 중복상품 없애주기 
// filter함수는 콜백함수에서 정의한 조건이 true인 항목만 리턴한다. 
const filterJSONArray = productListJSON.filter((info1, i) => {
    // findIndex는 콜백함수에 정의한 조건이 true인 항목의 index를 리턴한다. 
    return productListJSON.findIndex((info2, j) => {
        return info1.id === info2.id;
    }) === i; 
})

const $productListDOM = productList(filterJSONArray);
$sectionDOM.appendChild($productListDOM);

setFilterEvent();
setSearchButtonEvent(filterJSONArray);