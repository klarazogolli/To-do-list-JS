
var items = localStorage.getItem("Items").split(",");

function addItemstoList() {
    for (let i = 0; i < items.length; i++) {
        //     const node = document.createElement("li");
        //     const textnode = document.createTextNode(items[i]);
        //     node.appendChild(textnode);
        //     document.getElementById("item-list").appendChild(node);
        // console.log('items[i]');
        const HTML = `<li class="collection-item" id="item-` + i + `">
                <strong>`+ items[i] + `</strong>
                <div class="buttons">
                    <a href="#" class="check-btn">
                        <i class="fa fa-check-circle-o" style="color: #a4f5c8;;"></i>
                    </a>
                    <a href="#" class="edit-btn">
                        <i class="fa fa-pencil-square-o" style="color:#96c9fb;"></i>
                    </a>
                    <a href="#" id="delete" class="delete-btn">
                        <i class="fa fa-minus-circle" style="color: #ff2c07;"></i>
                    </a>
                </div>
            </li>`
        document.getElementById("item-list").innerHTML += HTML;
    }

}

addItemstoList();
document.getElementById("clear-item").addEventListener("click", function () {
    items = [];
    document.getElementById("item-list").innerHTML = '';
})

document.getElementById("add-item").addEventListener("click", function (e) {
    const input = document.getElementById("user-input").value;
    console.log(input);
    e.preventDefault();
    items.push(input);
    const HTML = `<li class="collection-item" id="item-` + items.length + `">
                <strong>`+ input + `</strong>
                <div class="buttons">
                <a href="#" class="check-btn">
                <i class="fa fa-check-circle-o" style="color: #a4f5c8;;"></i>
            </a>
            <a href="#" class="edit-btn">
                <i class="fa fa-pencil-square-o" style="color:#96c9fb;"></i>
            </a>
            <a href="#" id="delete"class="delete-btn">
                <i class="fa fa-minus-circle" style="color: #ff2c07;"></i>
            </a>
                </div>
            </li>`
    document.getElementById("item-list").innerHTML += HTML;
    localStorage.setItem("Items", items);

})
const del = document.getElementsByClassName("delete-btn");
for(let i = 0;i<del.length;i++){
    del[i].addEventListener("click",function(){
        const elementToDel = this.closest("li").getElementsByTagName("strong")[0].innerHTML;
    for(let j = 0;j<items.length;j++){
        if(items[j] === elementToDel){
            items.splice(j,1);
            localStorage.setItem("Items", items);
        }

    }   
    this.closest("li").remove();
    })
}
const check = document.getElementsByClassName("check-btn");
for(let i = 0;i<check.length;i++){
    check[i].addEventListener("click",function(){
        if( this.closest("li").getElementsByTagName("strong")[0].style.textDecoration === "line-through"){
            this.closest("li").getElementsByTagName("strong")[0].style.textDecoration = "none";
        }else{
            this.closest("li").getElementsByTagName("strong")[0].style.textDecoration = "line-through"; 
        }
    })
}
const edit = document.getElementsByClassName("edit-btn");
for(let i = 0;i<edit.length;i++){
    edit[i].addEventListener("click",function(){
        const elementToDel = this.closest("li").getElementsByTagName("strong")[0].innerHTML;
        for(let j = 0;j<items.length;j++){
            if(items[j] === elementToDel){
                items.splice(j,1);
            }
    
        }   
        this.closest("li").remove();
        document.getElementById("user-input").value = elementToDel;
        localStorage.setItem("Items", items);
    })
}

