webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Model/Products.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleProducts = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 8, 20)
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 7, 12)
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 8, 26)
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 7, 17)
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        },
        "FirstOrderedOn": new Date(1996, 7, 22)
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 11, 1)
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        },
        "FirstOrderedOn": new Date(1997, 1, 21)
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        },
        "FirstOrderedOn": new Date(1996, 8, 5)
    }
];
exports.Products = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0000,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0000,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0000,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.3500,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0000,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0000,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0000,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0000,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 10,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0000,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 11,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0000,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 12,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0000,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 13,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0000,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 14,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.2500,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 15,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5000,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 16,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.4500,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 17,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 18,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5000,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 19,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2000,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 20,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0000,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 21,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0000,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 22,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0000,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 23,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0000,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 24,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 25,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0000,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 26,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.2300,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 27,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9000,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 28,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 29,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.7900,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 30,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.8900,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 31,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 32,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0000,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 33,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5000,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 34,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0000,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 35,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 36,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0000,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 37,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0000,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 38,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 39,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0000,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 40,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4000,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 41,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.6500,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 42,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 43,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 44,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.4500,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 45,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5000,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 46,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0000,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 47,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5000,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 48,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.7500,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 49,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0000,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 50,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.2500,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 51,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 52,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0000,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 53,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 54,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.4500,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 55,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0000,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 56,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0000,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 57,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5000,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 58,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.2500,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 59,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0000,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 60,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0000,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 61,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5000,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 62,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 63,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9000,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 64,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.2500,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 65,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.0500,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 66,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0000,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 67,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0000,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 68,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5000,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 69,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 70,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0000,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 71,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 72,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8000,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 73,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0000,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 74,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0000,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 75,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.7500,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 76,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0000,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 77,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0000,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<span>Angular App</span>\r\n\r\n<br />\r\n<br />\r\n\r\n<span>\r\n  Kendo Grid\r\n</span>\r\n\r\n<kendo-grid [data]=\"gridData\" [height]=\"410\">\r\n  <kendo-grid-column field=\"ProductID\" title=\"ID\" width=\"40\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"ProductName\" title=\"Name\" width=\"250\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"Category.CategoryName\" title=\"Category\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"UnitPrice\" title=\"Price\" width=\"80\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"UnitsInStock\" title=\"In stock\" width=\"80\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"Discontinued\" title=\"Discontinued\" width=\"120\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      <input type=\"checkbox\" [checked]=\"dataItem.Discontinued\" disabled />\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n</kendo-grid>\r\n\r\n<br />\r\n<br />\r\n<span>Kendo AutoComplete</span>\r\n\r\n<div class=\"example-wrapper\">\r\n  <p>Type the name of a European country:</p>\r\n  <kendo-autocomplete [data]=\"listItems\"\r\n                      [placeholder]=\"'e.g. Denmark'\"\r\n                      class=\"countries\">\r\n  </kendo-autocomplete>\r\n</div>\r\n\r\n<br />\r\n<br />\r\n<span>Kendo ComboBox</span>\r\n<div class=\"example-config\">\r\n  <input id=\"ac\" type=\"checkbox\" [(ngModel)]=\"allowCustom\">\r\n  <label for=\"ac\">Allow custom values</label>\r\n</div>\r\n<div class=\"example-wrapper\">\r\n  <p>Favorite sport:</p>\r\n  <kendo-combobox [data]=\"listItemsCombo\" [allowCustom]=\"allowCustom\">\r\n  </kendo-combobox>\r\n</div>\r\n<br />\r\n<br />\r\n<span>DropDownList</span>\r\n<div class=\"example-wrapper\">\r\n  <p>T-shirt size:</p>\r\n  <kendo-dropdownlist [data]=\"listItemsdrp\">\r\n  </kendo-dropdownlist>\r\n</div>\r\n<br />\r\n<br />\r\n\r\n<span>Kendo Switch</span>\r\n<kendo-switch [(ngModel)]=\"checked\"></kendo-switch>\r\n\r\n<br />\r\n<br />\r\n\r\n\r\n\r\n<span>Kendo charts</span>\r\n\r\n<kendo-chart [categoryAxis]=\"{ categories: categories }\">\r\n  <kendo-chart-title text=\"Gross domestic product growth /GDP annual %/\"></kendo-chart-title>\r\n  <kendo-chart-legend position=\"bottom\" orientation=\"horizontal\"></kendo-chart-legend>\r\n  <kendo-chart-tooltip format=\"{0}%\"></kendo-chart-tooltip>\r\n  <kendo-chart-series>\r\n    <kendo-chart-series-item *ngFor=\"let item of series\" type=\"line\" style=\"smooth\"\r\n                             [data]=\"item.data\" [name]=\"item.name\">\r\n    </kendo-chart-series-item>\r\n  </kendo-chart-series>\r\n</kendo-chart>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Products_1 = __webpack_require__("./src/app/Model/Products.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.gridData = Products_1.Products;
        this.series = [{
                name: "India",
                data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
            }, {
                name: "Russian Federation",
                data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
            }, {
                name: "Germany",
                data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
            }, {
                name: "World",
                data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
            }];
        this.categories = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
        this.listItems = [
            "Albania",
            "Andorra",
            "Armenia",
            "Austria",
            "Azerbaijan",
            "Belarus",
            "Belgium",
            "Bosnia & Herzegovina",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Georgia",
            "Germany",
            "Greece",
            "Hungary",
            "Iceland",
            "Ireland",
            "Italy",
            "Kosovo",
            "Latvia",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
            "Malta",
            "Moldova",
            "Monaco",
            "Montenegro",
            "Netherlands",
            "Norway",
            "Poland",
            "Portugal",
            "Romania",
            "Russia",
            "San Marino",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Switzerland",
            "Turkey",
            "Ukraine",
            "United Kingdom",
            "Vatican City"
        ];
        this.allowCustom = true;
        this.listItemsCombo = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
        this.listItemsdrp = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
        this.checked = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            styles: ["\n        .k-gauge {\n            display: block;\n        }\n    "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var kendo_angular_grid_1 = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/main.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var kendo_angular_charts_1 = __webpack_require__("./node_modules/@progress/kendo-angular-charts/dist/es/main.js");
var kendo_angular_dropdowns_1 = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/main.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var kendo_angular_inputs_1 = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/main.js");
__webpack_require__("./node_modules/hammerjs/hammer.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                kendo_angular_grid_1.GridModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_charts_1.ChartsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                kendo_angular_inputs_1.InputsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map