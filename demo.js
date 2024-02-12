





let menu = document.getElementById("menu-btn");
let menu_itm = document.getElementById("menu-itm");




menu.addEventListener("click",()=>{

    if(menu_itm.style.display=='none'){

        menu_itm.style.display='block';
        
       

        
    }else{

        menu_itm.style.display='none';
        document.body.style.filter='none';
    }
});
