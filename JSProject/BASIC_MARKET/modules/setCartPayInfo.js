import { getCartInfo } from "./cartToggleButton.js";

const DELIVERY_PRICE = 3000;

const $originalPriceDOM = document.getElementById('original-price');
const $discountPriceDOM = document.getElementById('discount-price');
const $deliveryPriceDOM = document.getElementById('delivery-price');
const $totalPriceDOM = document.getElementById('total-price');

export const setCartPayInfo = () => {
    const cartInfo = getCartInfo();
    // cartInfo에서 상품들의 가격 price, discountPrice, discountPersent를 추출해와서 변수에 더해주기

    let deliveryPrice = 0;
    let totalPrice = 0;

    const { originalPrice, discountPrice } = cartInfo.reduce(
        (prev, curr) => {
            return {
                originalPrice: prev.originalPrice + curr.price,
                discountPrice:
                    prev.discountPrice + (curr.price - curr.dicountPrice),
            };
        },
        {
            originalPrice: 0,
            discountPrice: 0,
        }
    );

    const payPrice = originalPrice - discountPrice;
    if (payPrice >= DELIVERY_PRICE) deliveryPrice = 0;
    else deliveryPrice = DELIVERY_PRICE;

    totalPrice = payPrice + deliveryPrice; // 총가격;

    $originalPriceDOM.innerHTML = `${originalPrice.toLocaleString()}원`;
    $discountPriceDOM.innerHTML = `-${discountPrice.toLocaleString()}원`;
    $deliveryPriceDOM.innerHTML = deliveryPrice !== 0 ? `+${deliveryPrice.toLocaleString()}원` : `무료`;
    $totalPriceDOM.innerHTML = `${totalPrice.toLocaleString()}원`;
};
