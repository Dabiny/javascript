import { fetchSectionData } from "./modules/fetch.js";
import { getProductCard } from "./modules/productCard.js";
import { productList } from "./modules/productList.js";
import { getProductSection } from "./modules/productSection.js";

// const populerSection = getProductSection("인기 상품", [
//     {
//         id: 4,
//         imgSrc: "public/assets/삼겹살.jpg",
//         name: "삼겹살 500g",
//         discountPersent: 20,
//         price: 5000,
//         dicountPrice: 4500,
//     }
// ]);

// document.body.appendChild(populerSection);

try {
    const productInfoList = await fetchSectionData();

    productInfoList.forEach((sectionInfo) => {
        const { sectionTitle, productList } = sectionInfo;
        const $productSectionDOM = getProductSection(sectionTitle, productList);
        document.body.appendChild($productSectionDOM);
    });
} catch (e) {
    console.error(e);
}
