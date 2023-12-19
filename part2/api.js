const temp_url = "https://wiki-ads.onrender.com";
async function fApi(temp_url){
    try {
        const res=await fetch(temp_url);
        let data=await res.json();
        return data;
    }
    catch{
        throw console.error(`Error while loading url: ${temp_url}`);
    }
}
async function fCategories() {
	return await fApi(`${temp_url}/categories`).then(data => data)
}
async function fSubCategories(id) {
	return await fApi(`${temp_url}/categories/${id}/subcategories`).then(data => data)
}
async function fAllSubCategories(){
    return await fApi(`${temp_url}/subcategories`)
}
async function fCategoryAds(id) {
	return await fApi(`${temp_url}/ads?category=${id}`).then(data => data)
}
async function fsubCategoryAds(id) {
	return await fApi(`${temp_url}/ads?subcategory=${id}`).then(data => data)
}
