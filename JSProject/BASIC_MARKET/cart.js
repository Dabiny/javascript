//   <!-- <div class="product-list-con">
//             <div class="product-card">
//                <div class="product-image-con">
//                   <img src="public/assets/바나나.jpg" alt="바나나 1kg (필리핀 산)">
//                   <button type="button" class="cart-toggle-btn">
//                      <img src="public/assets/cartDisabled.png" class="cart-image">
//                   </button>
//                </div>
//                <div class="product-description">
//                   <div class="product-name">바나나 1kg (필리핀 산)</div>
//                   <div class="product-price-con">
//                      <div class="product-discount-percent">10%</div>
//                      <div class="product-price">2,700원</div>
//                   </div>
//                   <div class="product-original-price">3,000원</div>
//                </div>
//             </div>
import { getCartInfo } from "./modules/cartToggleButton.js";
import { makeDOMproperties } from "./utils/dom.js";
import {productList} from './modules/productList.js';
import { CART_COOKIE_KEY } from "./constants/cart.js";
const $cartSectionDOM = document.getElementsByTagName('section')[0]; // 카트목록 붙일 곳
const $cartPayContainerDOM = document.getElementById("cart-pay-container");
const cartInfo = getCartInfo();
const roadPage = () => location.reload(); // 새로불러와주는 함수.

if (cartInfo.length < 1) {
    const $noticeDOM = makeDOMproperties('div', {
        innerHTML: '장바구니에 아무것도 없어요! 😿',
        className: 'product-list-empty'
    });
    $cartSectionDOM.insertBefore($noticeDOM, $cartPayContainerDOM);
}
else {
    const $cartDOM = productList(cartInfo, roadPage);
    $cartSectionDOM.insertBefore($cartDOM, $cartPayContainerDOM);
}

const $removeAllButton = document.getElementById('remove-all-button');
$removeAllButton.onclick = () => {
    localStorage.removeItem(CART_COOKIE_KEY);
    location.reload();
}