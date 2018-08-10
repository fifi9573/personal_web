document.addEventListener('DOMContentLoaded', function loaded(event){
    console.log("The page has loaded!");
    
    var image2 = document.getElementById('yona');

    image2.addEventListener('click', function imageClick(e){
        console.log(image2.src)
        if (image2.src=== 'file:///C:/Users/GWC02/Documents/Fiona_Code/Folder/mirai.jpg'){
            image2.src='file:///C:/Users/GWC02/Documents/Fiona_Code/Folder/yona.png';
            image2.style.width= '400px';
            image2.style.height='300px';
        }else if (image2.src==='file:///C:/Users/GWC02/Documents/Fiona_Code/Folder/yona.png'){
            image2.src='file:///C:/Users/GWC02/Documents/Fiona_Code/Folder/mirai.jpg';
            image2.style.width= '400px';
            image2.style.height='300px';
        }   
    })
    
    var image=document.getElementById('bts');

    image.addEventListener('click', function imageClick(e){
        console.log(image.src)
        if (image.src=== 'file:///C:/Users/GWC02/Documents/Fiona_Code/Folder/blackpink.jpg'){
            image.src='file:///C:/Users/GWC02/Documents/Fiona_Code/Folder/bts.jpg';
            image.style.width= '400px';
            image.style.height='300px';
        }else if (image.src==='file:///C:/Users/GWC02/Documents/Fiona_Code/Folder/bts.jpg'){
            image.src='file:///C:/Users/GWC02/Documents/Fiona_Code/Folder/blackpink.jpg';
            image.style.width= '300px';
            image.style.height='300px';
        }   
    })
})