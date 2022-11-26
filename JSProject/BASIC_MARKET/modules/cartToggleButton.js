import { CART_COOKIE_KEY } from "../constants/cart.js";
import { appendChildList, makeDOMproperties } from "../utils/dom.js";

export const getCartInfo = () => 
    JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];


// 카드안에 해당물품이 이미 들어가있는지 확인하는 함수.
const isInCart = ({ id }) => {
    const cartInfo = getCartInfo();
    if (cartInfo.findIndex((info) => info.id === id) !== -1) {
        return true;
    }
    else return false;
};

const addCartInfo = (productInfo) => {
    const cartInfo = getCartInfo();
    if (cartInfo.findIndex((info) => info.id === productInfo.id) !== -1) {
        return;
    }
    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify([
        ...cartInfo,
        productInfo
    ]));
};

const removeCartInfo = ({ id }) => {
    const cartInfo = getCartInfo();
    const newCartInfo = cartInfo.filter((info) => info.id !== id);
    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(newCartInfo));
};

// cartToggle을 움직이게 해줘야한다.
export const getCartToggleButton = (productInfo, removeLoadCallback) => {
    let inCart = isInCart(productInfo); // bool 결과를 반환. 

    const $cartToggleBtn = makeDOMproperties("button", {
        type: "button",
        className: "cart-toggle-btn",
        onclick: () => {
            if(!inCart) {
                addCartInfo(productInfo);
                $cartImage.src = "public/assets/cart.png";
                const answer = confirm(`${productInfo.name}(이)가 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?`);
                if (answer) {
                    location.href = 'cart.html';
                }
            }
            else {
                const answer = confirm(`장바구니에 이미 ${productInfo.name}(이)가 있습니다. 장바구니에서 삭제할까요?`);
                if (!answer) return;
                removeCartInfo(productInfo);
                $cartImage.src = "public/assets/cartDisabled.png";
                removeLoadCallback?.();
            }
            inCart = !inCart;
        }
    });
    const $cartImage = makeDOMproperties("img", {
        src: inCart
            ? "public/assets/cart.png"
            : "public/assets/cartDisabled.png",
        className: "cart-image",
    });
    $cartToggleBtn.appendChild($cartImage);
    return $cartToggleBtn;
};
