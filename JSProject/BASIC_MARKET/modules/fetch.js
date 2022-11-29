export const fetchSectionData = async () => {
    try {
        const response = await fetch("public/mock/sectionListData.json");
        const data = await response.json();
        return data?.sectionInfoList || [];
    } catch (e) {
        console.log(e);
        return [];
    }
};
