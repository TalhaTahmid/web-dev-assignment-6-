var API_BASE = "https://openapi.programming-hero.com/api";

// DOM Elements
var categoryList = document.getElementById("category-list");
var productList = document.getElementById("product-list");
var cartItemsContainer = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");
var modal = document.getElementById("tree-modal");
var closeModalBtn = document.getElementById("close-modal");
var bottomCloseBtn = document.getElementById("bottom-close");

// Modal fields
var modalImage = document.getElementById("modal-image");
var modalName = document.getElementById("modal-name");
var modalDescription = document.getElementById("modal-description");
var modalCategory = document.getElementById("modal-category");
var modalPrice = document.getElementById("modal-price");
var modalAddBtn = document.getElementById("modal-add-to-cart");

// Cart
var cart = [];
var total = 0;
var currentPlant = null;

/*  normalizers */
function getId(o) {
  return (o && (o.id || o.plant_id || o.plantId || o.plantID)) || null;
}
function getName(o) {
  return (o && (o.name || o.plant_name || o.plantName || o.title)) || "Unnamed";
}
function getCat(o) {
  return (o && (o.category || o.category_name)) || "Tree";
}
function getPrice(o) {
  return Number((o && o.price) || 0) || 0;
}
function getImg(o) {
  return (o && (o.image || o.img || o.thumbnail || o.photo)) || "";
}
function getDesc(o) {
  return (o && (o.description || o.desc || o.details)) || "";
}

function pickPlantPayload(data) {
  return (data && (data.plant || data.plants)) || {};
}

