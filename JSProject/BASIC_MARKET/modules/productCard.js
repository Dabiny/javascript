// //  <!-- <div class="product-list-con">
// //            <div class="product-card">
// //               <div class="product-image-con">
// //                  <img src="public/assets/파프리카.jpg" alt="파프리카 2입">
// //                  <button type="button" class="cart-toggle-btn">
// //                     <img src="public/assets/cart.png" class="cart-image">
// //                  </button>
// //               </div>

// // 위의 아이템 카드를 만들기 위해 DOM 만들기
// import { makeDOMproperties, appendChildList } from "../utils/dom.js"; // import시 url에 .js확장자가 붙어있는지 확인 아니면 오류남.
// const $sectionDOM = document.getElementsByTagName("section")[0]; // 0번째 자식요소자리.
// // const $sectionTitle = document.createElement("div");
// // $sectionTitle.classList.add("section-title");
// // 이런식으로 하나하나 추가해가면서 돔생성을 할 수도있지만, 전체 카드구성을 하면 코드도 길어지고 겹치는 부분이 많다.
// // 리팩토링 해주자.

// // 상품카드 생성
// const $productCard = makeDOMproperties("div", {
//     className: "product-card",
// });

// // -- 상품카드 안 구성하기 ---
// const $productImageCon = makeDOMproperties("div", {
//     className: "product-image-con",
// });

// const $productImage = makeDOMproperties("img", {
//     src: "public/assets/파프리카.jpg",
//     alt: "파프리카 2입",
// });
// const $cartToggleBtn = makeDOMproperties("button", {
//     type: "button",
//     className: "cart-toggle-btn",
// });
// const $cartImage = makeDOMproperties("img", {
//     src: "public/assets/cart.png",
//     className: "cart-image",
// });

// // appendCHild를 그냥 사용할 때는 계속해서 appendCHild를 반복하여 써줘야한다.
// // 이것도 3번이상 반복하는 일이므로 appendCHild를 해주는 유틸함수를 만들어 리팩토링하자.
// // $productImageCon.appendChild($productImage);

// appendChildList($productImageCon, [$productImage, $cartToggleBtn]); // 두번째인자는 여러요소를 append해줄거라 배열로 받아온다.
// appendChildList($cartToggleBtn, [$cartImage]);
// appendChildList($productCard, [$productImageCon]);
// // --- 상품카드 안 구성하기 끝 ---

// // 상품 설명 HTML구성
// //               <div class="product-description">
// //                  <div class="product-name">파프리카 2입</div>
// //                  <div class="product-price-con">
// //                     <div class="product-discount-percent">20%</div>
// //                     <div class="product-price">2,000원</div>
// //                  </div>
// //                  <div class="product-original-price">2,500원</div>
// //               </div>
// //            </div>

// const $productDescription = makeDOMproperties("div", {
//     className: "product-description",
// });

// // --- 상품카드 밑 설명 구성하기 ---
// const $productName = makeDOMproperties("div", {
//     className: "productName",
//     innerHTML: "파프리카 2입",
// });

// const $productPriceCon = makeDOMproperties("div", {
//     className: "product-price-con",
// });
// const $productDiscountPercent = makeDOMproperties("div", {
//     className: "product-discount-percent",
//     innerHTML: `20%`,
// });
// const $productPrice = makeDOMproperties("div", {
//     className: "product-price",
//     innerHTML: "2000원",
// });

// const $productOriginalPrice = makeDOMproperties("div", {
//     className: "product-original-price",
//     innerHTML: "2500원",
// });

// appendChildList($productPriceCon, [$productDiscountPercent, $productPrice]);
// appendChildList($productDescription, [
//     $productName,
//     $productPriceCon,
//     $productOriginalPrice,
// ]);
// // --------------------------

// appendChildList($sectionDOM, [$productCard, $productDescription]);

// 상품카드를 동적으로 만들려면 함수가하나 필요하다.
import { makeDOMproperties, appendChildList } from "../utils/dom.js";
import { getCartToggleButton } from "./cartToggleButton.js";
export const getProductCard = (productInfo, removeLoadCallback) => {
    const { imgSrc, name, discountPersent, dicountPrice, price } = productInfo;

    const $productCardSection = makeDOMproperties('div', {
        className: 'product-Card-Section'
    });

    const $productCard = makeDOMproperties("div", {
        className: "product-card",
    });
    $productCardSection.appendChild($productCard);

    const $productImageCon = makeDOMproperties("div", {
        className: "product-image-con",
    });

    const $productImage = makeDOMproperties("img", {
        src: imgSrc,
        alt: name,
    });

    // 카트 이미지 넣기, 카트이미지는 클릭시 기능을 구현해야 한다. 
    const $cartToggle = getCartToggleButton(productInfo, removeLoadCallback);
    appendChildList($productImageCon, [$productImage, $cartToggle]);

    const $productNameDescription = makeDOMproperties("div", {
        className: "product-description",
    });
    const $productName = makeDOMproperties("div", {
        className: "product-name",
        innerHTML: name,
    });

    const $productPriceCon = makeDOMproperties("div", {
        className: "product-price-con",
    });
    const $productDiscountPercent = makeDOMproperties("div", {
        className: "product-discount-percent",
        innerHTML: `${discountPersent}%`,
    });
    const $productDiscountPrice = makeDOMproperties("div", {
        className: "product-discount-price",
        innerHTML: `${dicountPrice}원`,
    });
    const $productOriginalPrice = makeDOMproperties("div", {
        className: "product-original-price",
        innerHTML: `${price}원`,
    });

    appendChildList($productPriceCon, [
        $productDiscountPercent,
        $productDiscountPrice,
    ]);
    appendChildList($productNameDescription, [
        $productName,
        $productPriceCon,
        $productOriginalPrice,
    ]);

    appendChildList($productCard, [$productImageCon, $productNameDescription]);
    return $productCard;
};
