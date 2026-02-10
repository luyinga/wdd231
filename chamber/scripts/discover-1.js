import {places} from "../data/discover.mjs"
console.log(places)


/*GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS  */
const showHere = document.querySelector("#allplaces")

//----------------------LOOP THROUGH THE ARRAY OF THE JSON ITEMS
function displayItems(places) {
    places.forEach (x => {
        // build the card element    
        const theCard = document.createElement('div')
        //build the photo element
        const thePhoto = document.createElement('img')
        thePhoto.src = `images/${x.photo_link}`
        thePhoto.alt = `x.name`
        theCard.appendChild(thePhoto)
        //build the tittle element
        const theTitle = document.createElement('h2')
        theTitle.innerText = x.name
        theCard.appendChild(theTitle)
        //build the address element
        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        theCard.appendChild(theaddress)
        //build the description element
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        theCard.appendChild(thedesc)

        showHere.appendChild(theCard)
        
})//END OF THE LOOP 
}//end of the function

//START DISPLAYING THE ITEMS


