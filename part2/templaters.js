function categories(data){
    console.log(data)
    let temp = Handlebars.compile(`{{#each list}}
            <a class="category_item" href="categories.html?categoryId={{id}}">
                    <h1 class="small_header">{{title}}</h1>
                    <img class="category_image" src='https://wiki-ads.onrender.com/{{img_url}}'></img>
                    <ul class="category_list" id="category_list_{{id}}">
                    </ul>
            </a>
        {{/each}}`);
    return temp({ list: data });
}
function subcategories(data){
    console.log(data)
    let temp = Handlebars.compile(`{{#each list}}
            <a class="basic_paragraph" href="subcategories.html?subcategoryId={{id}}">{{title}}</a><br>
        {{/each}}`);
    return temp({ list: data });
}
function adsCategory(data){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    let temp=Handlebars.compile(`{{#each list}}
            <article class="ad-container" id = "ad{{id}}">
                
                <h1 class="small_header" id = "title{{id}}">{{title}}</h1>
            
                <div class="product_image" "><img id = "image{{id}}"
                    sizes="(max-width: 600px) 480px" src="https://wiki-ads.onrender.com/{{images.[0]}}" ></div>
                <div class ="ad_info"><p class="basic_paragraph" id = "desc{{id}}">{{description}}</p></div>
                <h3 class="small_header" id = "cost{{id}}">{{cost}}€</h3>
                <button class="add_to_fav" onclick="add_to_favourites({{id}})"><img class="heart-icon" src="../assets/heart.svg" alt="Heart Icon"> </button>
                </a>
            </article>
        {{/each}}`)
    return temp({ list: data });
}
function build_img(data){
    let temp=Handlebars.compile(`{{#each list}}
        <div class="product_image">
            <img src="https://wiki-ads.onrender.com/{{this}}"sizes="(max-width: 600px) 480px">
        </div>
    {{/each}}`)
    return temp({ list: data });
}
function adsSubCategory(data){
    let temp=Handlebars.compile(`{{#each list}}
        <article class="ad-container">
        <a class="ad_link" href="">
            <h1 class="small_header">{{title}}</h1>
            <div class="product_image_box" id="product_image_{{id}}"></div>
            <div class ="ad_info"><p class="basic_paragraph">{{description}}</p></div>
            <h3 class="small_header">{{cost}}€</h3>
            <details class="ad_specs">
                    <summary class="small_header"></summary>
                    <table>
                        <tbody id="product_specs_{{id}}">
                        </tbody>
                    </table>
        </a>
        </article>
    {{/each}}`)
    return temp({ list: data });
}
function build_specs(data){
    console.log(data)
    let temp=Handlebars.compile(`{{#each list}}
        <tr>
            
            <td>{{this}}</td>
        </tr>
    {{/each}}`)
    return temp({ list: data });
}
