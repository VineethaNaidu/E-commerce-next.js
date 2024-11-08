// src/utils/api.js

const API_BASE_URL = "https://fakestoreapi.com/carts";

export const fetchCart = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error; // Re-throw error for handling in the component
  }
};

export const addToCartAPI = async (cartData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error; // Re-throw error for handling in the component
  }
};

export const updateCartAPI = async (cartId, cartData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${cartId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error; // Re-throw error for handling in the component
  }
};

export const deleteCartAPI = async (cartId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${cartId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error deleting cart:", error);
    throw error; // Re-throw error for handling in the component
  }
};
