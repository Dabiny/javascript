        // <!-- <section class="product-list-section">
        //  <div class="section-title">
        //     <span class="section-title-highlight"></span>
        //     <span>인기 상품</span>
        //  </div>
        //  <div class="product-list-con">
        //     <div class="product-card">

import { makeDOMproperties } from "../utils/dom.js";
import { getProductCard } from './productCard.js';

export const productList = (productInfoList) => {
    const $productListSection = makeDOMproperties("section", {
        className: "product-section-con",
    });
    productInfoList.forEach((info) => {
        $productListSection.appendChild(
          getProductCard({ // 상품카드를 여기서 만들어주기. 
            ...info, // info를 뿌려준다. 
          })
        );
    })
    return $productListSection;
};
