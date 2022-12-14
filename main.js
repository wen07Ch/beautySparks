var productsInCart = [];

document.addEventListener("DOMContentLoaded", () => {
  clickMenu('Home');

  let image = document.getElementById('image');                    
  let images = ['images\\image.jpg','images\\model6.jpg','images\\menpic3.jpg','images\\model4.jpg','images\\menpic2.jpg','images\\menpic.jpg'];                   
  setInterval(function(){
    let random = Math.floor(Math.random() * 6);
    image.src = images[random];
                    
  }, 1400);
});

function clickMenu(WhichPage) {
  var ClickedOn; 
  switch(WhichPage) {
    case "Home":
      ClickedOn = document.getElementById("liHome");
      document.getElementById("liMen").classList.remove("active");
      document.getElementById("liWomen").classList.remove("active");
      document.getElementById("liKids").classList.remove("active");

      document.getElementById("top").style.display="block";
      document.getElementById("men").style.display="none";
      document.getElementById("women").style.display="none";
      document.getElementById("kids").style.display="none";  
      document.getElementById("cart").style.display="none";    
      break;
    case "Men":
      ClickedOn = document.getElementById("liMen");
      document.getElementById("liHome").classList.remove("active");
      document.getElementById("liWomen").classList.remove("active");
      document.getElementById("liKids").classList.remove("active");

      document.getElementById("men").style.display="block";
      document.getElementById("top").style.display="none";
      document.getElementById("women").style.display="none";
      document.getElementById("kids").style.display="none";   
      document.getElementById("cart").style.display="none"; 
      break;
    case "Women":
      ClickedOn = document.getElementById("liWomen");
      document.getElementById("liHome").classList.remove("active");
      document.getElementById("liMen").classList.remove("active");
      document.getElementById("liKids").classList.remove("active");

      document.getElementById("women").style.display="block";
      document.getElementById("top").style.display="none";
      document.getElementById("men").style.display="none";
      document.getElementById("kids").style.display="none"; 
      document.getElementById("cart").style.display="none";
      break;
    case "Kids":
      ClickedOn = document.getElementById("liKids");
      document.getElementById("liHome").classList.remove("active");
      document.getElementById("liMen").classList.remove("active");
      document.getElementById("liWomen").classList.remove("active");

      document.getElementById("kids").style.display="block"; 
      document.getElementById("top").style.display="none";
      document.getElementById("men").style.display="none";
      document.getElementById("women").style.display="none";
      document.getElementById("cart").style.display="none";
      break;
    case "Cart":
      document.getElementById("cart").style.display="block"; 
      document.getElementById("kids").style.display="none"; 
      document.getElementById("top").style.display="none";
      document.getElementById("men").style.display="none";
      document.getElementById("women").style.display="none";
  }

  if (WhichPage != "Cart") {
    ClickedOn.classList.add("active");
  }
  
  if (WhichPage == "Cart") {
    displayCart();
  }

}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function addToCart(pProductID, pProductName, pQuantity, pPrice) {
  debugger;
  var QtyElement = document.getElementById(pQuantity);

  let adding = {
    ProductID: pProductID,
    ProductName: pProductName,
    Quantity: parseInt(QtyElement.value),
    Price: pPrice
  }
  productsInCart.push(adding);

  //Get total quantity
  var totalqty = 0;
  for( var i = 0; i < productsInCart.length; ++i ) {
    totalqty = totalqty + productsInCart[i].Quantity;
  }
  
  var CartElement = document.getElementById("lblCartCount");
  CartElement.textContent = totalqty;
}

function displayCart() {
  var TableCartElement = document.getElementById("tblCart");
  var html = '';
  var stotal = 0;
  var gtotal = 0;
  for( var i = 0; i < productsInCart.length; ++i ) {
    var item = productsInCart[i];
		var product = item.ProductName;
		var price = "RM" + " " + item.Price.toFixed(2);
		var qty = item.Quantity;
    stotal = item.Quantity * item.Price;
    gtotal = gtotal + (item.Quantity * item.Price);
		html += "<tr><td class='pname'>" + product + "</td>" + "<td class='pqty'><input type='text' value='" + qty + "' class='qty'/></td>";
		html += "<td class='pprice'>" + price + "</td><td class='psubtotal'>" + stotal.toFixed(2) + "</td></tr>";
  }

  TableCartElement.innerHTML = html;

  // Get SubTotal
  var SubTotalElement = document.getElementById("spnTotal");
  SubTotalElement.textContent = "RM " + gtotal.toFixed(2);
}