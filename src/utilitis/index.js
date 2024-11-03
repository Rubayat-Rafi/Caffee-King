import toast from "react-hot-toast";

// get coffee from local storage
const getFavorite = () => {
    const allFavorites = localStorage.getItem('favorite');
    if(allFavorites){
        const allFavoriteItems = JSON.parse(allFavorites);
        return allFavoriteItems;
    }else{
        return [];
    }

}

// add a coffee to local storage
const addFavorite = (coffee) => {
    const favorite = getFavorite();

    const isExist = favorite.find(item => item.id === coffee.id);
    if(isExist){
        return toast.error('Coffee already exist.');
    }
    favorite.push(coffee);
    localStorage.setItem('favorite', JSON.stringify(favorite));
    return toast.success('Successfully added!');
}

//remove a coffee from local storage
const removeFavorite = id => {
    // get all previously saved coffee data
    const favorites = getFavorite()
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorite', JSON.stringify(remaining))
    toast.success('Successfully Removed!')
  }



export {addFavorite, getFavorite, removeFavorite}