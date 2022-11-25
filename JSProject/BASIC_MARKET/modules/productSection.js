//    <!-- <section class="product-list-section">
//      <div class="section-title">
//         <span class="section-title-highlight"></span>
//         <span>인기 상품</span>
//      </div>
//      <div class="product-list-con">
//         <div class="product-card">
//            <div class="product-image-con">
//               <img src="public/assets/파프리카.jpg" alt="파프리카 2입">
//               <button type="button" class="cart-toggle-btn">
//                  <img src="public/assets/cart.png" class="cart-image">
//               </button>
//            </div>
//            <div class="product-description">
//               <div class="product-name">파프리카 2입</div>
//               <div class="product-price-con">
//                  <div class="product-discount-percent">20%</div>
//                  <div class="product-price">2,000원</div>
//               </div>
//               <div class="product-original-price">2,500원</div>
//            </div>
//         </div>

import { appendChildList, makeDOMproperties } from "../utils/dom.js";
import { productList } from "./productList.js";

export const getProductSection = (sectionString, productInfo) => {
    const $section = makeDOMproperties("secion", {
        className: "product-list-section",
    });

    const $sectionTitle = makeDOMproperties("div", {
        className: "section-title",
    });
    const $sectionTitleHighLight = makeDOMproperties("span", {
        className: "section-title-highlight",
    });
    const $title = makeDOMproperties("span", {
        innerHTML: sectionString,
    });

    appendChildList($sectionTitle, [$sectionTitleHighLight, $title]);
    $section.appendChild($sectionTitle);
    console.log(productInfo);

    const $sectionList = productList(productInfo);
    $section.appendChild($sectionList);

    return $section;
};

