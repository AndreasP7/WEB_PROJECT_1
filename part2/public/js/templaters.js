//templaters were made according to the first part of the exercise, modified for dynamic input of html code
function categories(data){//generates a category with one pic
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
function subcategories(data){//generates the list of subcategories of a category
    let temp = Handlebars.compile(`{{#each list}}
            <a class="basic_paragraph" href="subcategories.html?subcategoryId={{id}}">{{title}}</a><br>
        {{/each}}`);
    return temp({ list: data });
}
function adsCategory(data){//generates an ad that will be displayed in the category page with one pic                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    let temp=Handlebars.compile(`{{#each list}}
            <article class="ad-container" id = "ad{{id}}sub{{subcategory_id}}" >
                
                <h1 class="small_header" id = "title{{id}}">{{title}}</h1>
            
                <div class="product_image" "><img id = "image{{id}}"
                    sizes="(max-width: 600px) 480px" src="https://wiki-ads.onrender.com/{{images.[0]}}" ></div>
                <div class ="ad_info"><p class="basic_paragraph" id = "desc{{id}}">{{description}}</p></div>
                <h3 class="small_header" id = "cost{{id}}">{{cost}}€</h3>
                <div class="add_to_fav" id="add_to_fav{{id}}" >
                    <svg class = "heart_icon" id="heart_icon{{id}}" onclick="toggleFavourite({{id}})" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"/>
                    </svg> 
                </button>
                </a>
            </article>
        {{/each}}`)
    return temp({ list: data });
}
function build_img(data){//helping function for the generation of all pictures in a subcategory add
    let temp=Handlebars.compile(`{{#each list}}
        <div class="product_image">
            <img src="https://wiki-ads.onrender.com/{{this}}"sizes="(max-width: 600px) 480px">
        </div>
    {{/each}}`)
    return temp({ list: data });
}
function adsSubCategory(data){//generates an ad that will be displayed in the subcategory page (picture is generated after) 
    let temp=Handlebars.compile(`{{#each list}}
        <article class="ad-container">
            <h1 class="small_header">{{title}}</h1>
            <div class="product_image_box" id="product_image_{{id}}"></div>
            <div class ="ad_info"><p class="basic_paragraph">{{description}}</p></div>
            <h3 class="small_header ad_price">{{cost}}€</h3>
            <details class="ad_specs">
                    <summary class="small_header"></summary>
                    <table>
                        <tbody id="product_specs_{{id}}">
                        </tbody>
                    </table>
        </article>
    {{/each}}`)
    return temp({ list: data });    
}

function build_specs(data){//generates the specs table for subcategories page
    let temp=Handlebars.compile(`{{#each list}}
        <tr>
            
            <td>{{this}}</td>
        </tr>
    {{/each}}`)
    return temp({ list: data });
}
function adFavs(data){//generates an ad for the my favourites page
    let temp=Handlebars.compile(`{{#each list}}
            <article class="ad-container" id = "ad{{ad_code}}">
                
                <h1 class="small_header" id = "title{{ad_code}}">{{ad_title}}</h1>
            
                <div class="product_image" "><img id = "image{{ad_code}}"
                    sizes="(max-width: 600px) 480px" src="{{ad_image}}" ></div>
                <div class ="ad_info"><p class="basic_paragraph" id = "desc{{ad_code}}">{{ad_desc}}</p></div>
                <h3 class="small_header" id = "cost{{ad_code}}">{{ad_cost}}</h3>
                </a>
            </article>
        {{/each}}`)
    return temp({ list: data });
  }
  function subsRadio(data){//generates the radio buttons for choosing subcategories in category ad page
    let temp=Handlebars.compile(`{{#each list}}
            <input type="radio" id="sub{{id}}" name="subcat" value="{{id}}" onclick="subs(event)" />
            <label for="sub{{id}}">{{title}}</label><br>
        {{/each}}
        <input type="radio" id="all" name="subcat" value="all" onclick="subs(event)"/>
        <label for="all">Όλα</label><br>`)
    return temp({ list: data });
  }