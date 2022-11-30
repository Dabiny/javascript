import { makeDOMproperties } from "../utils/dom.js";
import { productList } from "./productList.js";

const $priceMinFilterDOM = document.getElementById("price-min-filter");
const $priceMaxFilterDOM = document.getElementById("price-max-filter");
const $discountFilterDOM = document.getElementById("discount-filter");
const $searchButtonDOM =
    document.getElementsByClassName("product-filter-con")[0]?.lastElementChild;

const MAX_VALUE = Number.MAX_VALUE;

const parsePriceNumber = (originalPrice) => {
    const str = String(originalPrice).replace("원", "").replace(",", "");
    const formattedNumber = Number(str);
    return isNaN(formattedNumber) ? 0 : formattedNumber;
};
const parsePriceRate = (originalRate) => {
    const str = String(originalRate).replace("%", "");
    const formattedNumber = Number(str);
    return isNaN(formattedNumber) ? 0 : formattedNumber;
};

export const setSearchButtonEvent = (productListInfo) => {
    // 검색버튼 onclick시 '3,000원'이라고 적혀있던 인풋value값을 다시 숫자로 바꿔넣어야한다. 
    $searchButtonDOM.onclick = () => {
        const minValue = parsePriceNumber($priceMinFilterDOM.value) || 0;
        const maxValue = parsePriceNumber($priceMaxFilterDOM) || MAX_VALUE;
        const discountRate = parsePriceRate($discountFilterDOM.value) || 0;

        const newFilterProductList = productListInfo.filter(
            ({ price, discountPersent }) =>
                price >= minValue &&
                price <= maxValue &&
                discountPersent >= discountRate
        );

        const $sectionDOM = document.getElementsByTagName("section")[0];

        const $originalProductListDOM = document.getElementsByClassName(
            "product-section-con"
        )[0];
        $sectionDOM.removeChild($originalProductListDOM);

        if (newFilterProductList.length > 0) {
            const $productListDOM = productList(newFilterProductList);
            $sectionDOM.appendChild($productListDOM);
        } else {
            const $productEmptyDOM = makeDOMproperties("div", {
                className: "product-section-con empty",
                innerHTML: "검색결과가 없습니다.",
            });
            $sectionDOM.appendChild($productEmptyDOM);
        }
    };
};

// 가독성좋게 3000 -> 3,000원으로 바꿔주는 함수
const formatToPrice = (event) => {
    const value = event.target.value;
    if (isNaN(Number(value))) {
        alert("숫자를 입력해 주세요");
        return;
    }
    event.target.value = `${Number(value).toLocaleString()}원`;
};

// 사용자가 인풋포커스시 숫자(3000)로 표기되고, 인풋포커스아웃(블러)가 되면 가독성을 높이기위해 3,000원으로 바꿔주는 역할
// 이벤트 등록함수.
export const setFilterEvent = () => {
    $priceMinFilterDOM.onfocus = (event) => {
        event.target.value = parsePriceNumber(event.target.value);
    };
    $priceMinFilterDOM.onblur = formatToPrice;

    $priceMaxFilterDOM.onfocus = (event) => {
        event.target.value = parsePriceNumber(event.target.value);
    };
    $priceMaxFilterDOM.onblur = formatToPrice;

    $discountFilterDOM.onfocus = (event) => {
        event.target.value = parsePriceNumber(event.target.value);
    };
    $discountFilterDOM.onblur = (event) => {
        const value = event.target.value;
        const result = Number(value);

        if (isNaN(result)) {
            alert("숫자를 입력해주세요");
            return;
        }
        if (result > 100 || result < 0) {
            alert("퍼센트는 0이상 100이하로 작성해주세요");
            return;
        }
        event.target.value = `${result}%`;
    };
};
