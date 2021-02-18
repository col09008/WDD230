/*finding any element w/ data-src attribute*/
const imagesToLoad = document.querySelectorAll("img[data-src]")


const imgOptions = {
    threshold: 0, 
    rootMargin: "0px 0px 50px 0px"
};
/*image given has data-src, will give src */
function preloadImage(img){
    const src = img.getAttribute("data-src")
    if(!src) {
        return;
    }

    img.src= src;
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        } else {
           preloadImage(entry.target);
           imgObserver.unobserve(entry.target) 
        }
    }
        )

}, imgOptions);
/*Apply to each observer*/
images.forEach(image => {
    imgObserver.observe(image); 
});