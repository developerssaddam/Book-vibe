// GetLsReadBooksData.
export const getLsReadBooksData = () => {
  const lsData = localStorage.getItem("readbooks");
  if (lsData) {
    return JSON.parse(lsData);
  } else {
    return [];
  }
};

// SetReadBooksDataToLs.
export const setReadBooksDataToLs = (id) => {
  const lsData = getLsReadBooksData();
  if (!lsData.includes(id)) {
    lsData.push(id);
  }
  localStorage.setItem("readbooks", JSON.stringify(lsData));
};

// GetLsWishListData.
export const getLsWishListData = () => {
  const lsData = localStorage.getItem("wishlist");
  if (lsData) {
    return JSON.parse(lsData);
  } else {
    return [];
  }
};

// SetWishListDataToLs.
export const setWishListDataToLs = (id) => {
  const lsData = getLsWishListData();
  if (!lsData.includes(id)) {
    lsData.push(id);
  }
  localStorage.setItem("wishlist", JSON.stringify(lsData));
};


