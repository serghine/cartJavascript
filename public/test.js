const addPanier=document.getElementsByClassName('addPanier');


let items=[];

for (let i = 0; i < addPanier.length; i++) {
    addPanier[i].addEventListener('click',function(e){
         const prix=e.target.parentElement.children[2].children[0].textContent;
         const description=e.target.parentElement.children[1].textContent;
         const name=e.target.parentElement.children[0].textContent;
   
        if(typeof(Storage) != "undefined"){
          let item={
              id:i+1,
              name:e.target.parentElement.children[0].textContent,
              description:e.target.parentElement.children[1].textContent,
              prix:e.target.parentElement.children[2].children[0].textContent,
              qte:1
          }
        if(JSON.parse(localStorage.getItem('items'))==null){
            items.push(item)
            localStorage.setItem('items',JSON.stringify(items))
            window.location.reload()
            
        }else{
            const localitems = JSON.parse(localStorage.getItem('items'))
            localitems.map(data => {
                if (item.id==data.id) {
                    item.qte = data.qte +1
                    window.location.reload();
                } else {
                  items.push(data)  
                }
            });
            items.push(item);
            localStorage.setItem('items',JSON.stringify(items))
            window.location.reload();
        }
    
        }else{
            console.log("le storage ne marche pas sur le browser")
        }

    })
    let qte=0; 

 const counta=document.querySelector('.counta');
 if (JSON.parse(localStorage.getItem('items'))==null) {
    qte=0
     }else{
        JSON.parse(localStorage.getItem('items')).map(data=>{
        qte= qte + data.qte
    })
     }

counta.innerHTML=qte




}


//remplir le panier
const box=document.querySelector('.box');
const td0=document.querySelector(".td0");
const td1=document.querySelector(".td1");
const td2=document.querySelector(".td2");
const td3=document.querySelector(".td3");
const td22=document.querySelector(".td22");
const ali=document.querySelector('.ali');


if (JSON.parse(localStorage.getItem('items'))==null) {
    box.innerHTML="<h1 style='color:red'>vous avez pas de produit dans votre panier</h1>"
} else {
    JSON.parse(localStorage.getItem('items')).map(data=>{
       ali.innerHTML +=`<tr><th>${data.id}</th><th>${data.name}</th><th>${data.description}</th><th style:'color:red'>${data.prix}</th><th><a href='#' onclick=plus(this);> + </a>  ${data.qte}  <a href='#' onclick=moin(this);>-</a></th><th><a href='#' onclick=supprimer(this);>Delete</a></th></tr>`
    })
}


//function delete du panier
function moin(e){
    // let items=[];
    JSON.parse(localStorage.getItem('items')).map(data=>{
        console.log("voila la data",data);
       console.log(data.qte)
       data.qte -=1
       items.push(data)
       localStorage.setItem('items',JSON.stringify(items))
       if(data.qte==0){
           
            localStorage.removeItem('data')
       localStorage.setItem('items',JSON.stringify(items))

            window.location.reload();
       }
      window.location.reload();
    })
}

//function add in your cart
function plus(e){
    // console.log(this)
    JSON.parse(localStorage.getItem('items')).map(data=>{
        console.log("voila la data",data);
       console.log(data.qte)
       data.qte +=1
       items.push(data)
       localStorage.setItem('items',JSON.stringify(items))
      window.location.reload();
    })
    
    
    }
  