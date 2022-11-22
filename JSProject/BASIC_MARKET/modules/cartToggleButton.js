import { CART_COOKIE_KEY } from "../constants/cart.js";
import { appendChildList, makeDOMproperties } from "../utils/dom.js";

// 카드안에 해당물품이 이미 들어가있는지 확인하는 함수.
const isInCart = (productInfo) => {

};

// cartToggle을 움직이게 해줘야한다.
export const getCartToggleButton = (productInfo) => {
    let inCart = isInCart(productInfo);
    const $cartToggleBtn = makeDOMproperties("button", {
        type: "button",
        className: "cart-toggle-btn",
        onclick: () => {
            if(inCart) {
                localStorage.setItem(CART_COOKIE_KEY,productInfo);
                const answer = confirm('장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?');
            }
        }
    });
    const $cartImage = makeDOMproperties("img", {
        src: "public/assets/cart.png",
        className: "cart-image",
    });
    $cartToggleBtn.appendChild($cartImage);
    return $cartToggleBtn;
};
