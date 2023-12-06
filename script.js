const accesskey="ZP4pFmU6pNOPmrDCNl05oFj9cbkIVt4cLydB_XjGpNs";
const form1=document.querySelector("form");
const input =document.getElementById("Search-bar");
const searchresults= document.querySelector(".search-results");
const showmore=document.getElementById("show-more");


let  inputData =" ";
let page=1;

 async function searchImages(){

    inputData= input.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    const response= await fetch(url);
    const data = await response.json();
    const results= data.results;



    if (page===1)
    {
        searchresults.innerHTML=" ";

    }
    results.map((results)=>{
const imageWrapper =document.createElement('div');
imageWrapper.classList.add("search-result");
 const image =document.createElement('img');
 image.src= results.urls.small;
 image.alt=results.alt_description;
 const ImageLink=document.createElement('a');
 ImageLink.href=results.links.html;
 ImageLink.target="_blank"
 ImageLink.textContent=results.alt_description
 imageWrapper.appendChild(image);
 imageWrapper.appendChild(ImageLink);
 searchresults.appendChild(imageWrapper);
    }

    )
    page++
    if (page>1)
    {
        showmore.style.display="block"
    }
}
form1.addEventListener("submit",(event)=>{

    event.preventDefault()
    page=1;
    searchImages();
    
})
showmore.addEventListener("click",()=>{
    searchImages()
 } )

   