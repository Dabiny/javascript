import { makeDOMproperties } from "../utils/dom.js";
import { productList } from "./productList.js";

const $priceMinFilterDOM = document.getElementById('price-min-filter');
const $priceMaxFilterDOM = document.getElementById('price-max-filter');
const $discountFilterDOM = document.getElementById('discount-filter');
const $searchButtonDOM = document.getElementsByClassName('product-filter-con')[0]?.lastElementChild;

const MAX_VALUE = Number.MAX_VALUE;

export const setSearchButtonEvent = (productListInfo) => {
    $searchButtonDOM.onclick = () => {
        const minValue = $priceMinFilterDOM.value || 0;
        const maxValue = $priceMaxFilterDOM.value || MAX_VALUE;
        const discountRate = $discountFilterDOM.value || 0;

        const newFilterProductList = productListInfo.filter(({price, discountPersent}) => (
            price >= minValue && price <= maxValue && discountPersent >= discountRate
        ));

        const $sectionDOM = document.getElementsByTagName('section')[0];

        const $originalProductListDOM = document.getElementsByClassName('product-section-con')[0];
        $sectionDOM.removeChild($originalProductListDOM);

        if (newFilterProductList.length > 0) {
            const $productListDOM = productList(newFilterProductList);
            $sectionDOM.appendChild($productListDOM);
        }
        else {
            const $productEmptyDOM = makeDOMproperties('div', {
                className: 'product-section-con empty',
                innerHTML: '검색결과가 없습니다.'
            });
            $sectionDOM.appendChild($productEmptyDOM);
        }
    };
}; 