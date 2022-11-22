export const makeDOMproperties = (domType, propertyMap) => {
    const dom = document.createElement(domType);
    
    Object.keys(propertyMap).forEach((property) => {
        dom[property] = propertyMap[property];
    }) // 오브젝트 객체의 키만 모아서 배열로 만들어주기. 

    return dom;
}

export const appendChildList = (target, childrenArray) => {
    if (!Array.isArray(childrenArray)) return;

    childrenArray.forEach((elem) => {
        target.appendChild(elem);
    })
};