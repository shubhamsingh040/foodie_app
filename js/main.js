
//Variable 'foodieApp' stores the value returned by the angular.module() function (first argument-> name of the app)
//(second parameter->array of 'extra powers' (angular.module() - it helps us add a list of modules that our app is dependent on)
var foodieApp = angular.module('foodieApp',['ngRoute']); // this code properly initialize our Angular app and also use the module called 'ngRoute'

//Added two routes for the login and the homePage using foodieApp.config()
foodieApp.config(function ($routeProvider) { //.config() func allows us to set-up our app & $routeProvider object defined in ngRoute allows us to set-up routes
	$routeProvider
	.when('/',{   //'/' means the root route
		templateUrl: 'pages/login.html',  // The place where we have the template/view saved
		controller: 'loginController' //The controller to use with that view
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', { //:id part in the URL is known as a route parameter(to create a URL for each restaurant)
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	.when('/grocerylist',{
		controller: 'listController',
		templateUrl: 'pages/list.html',
	})
	.when('/about', {
		templateUrl: 'pages/about.html'
	})
	.when('/order', {
		templateUrl: 'pages/order.html'
	})
})

//controller for login
foodieApp.controller('loginController',function($scope,$location) { //$location object helps us modify the URL of the webpage automatically
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})

//CREATED a mainController below
foodieApp.controller('mainController',function($scope) { //object variable-create a controller(1st arg-name of the controller,2nd arg-function we want controller to do)
	//Created an array of restaurant objects
	$scope.restaurants = [{ //scope is model part of mvc
	name: 'Dilli Darbar',
	id: '1',
	address: 'SHOP NO. 110, motor market, East canal Road near hotel sakoon dehradun 248011',
	location: 'Motor Market',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Modern Indian, Chinese',
	cost: '900',
	hours: '10 AM to 11 PM (Mon-Sun)',
	image: 'https://content1.jdmagicbox.com/comp/ambala/i4/9999px171.x171.160618164639.n2i4/catalogue/dilli-darbar-ambala-f595w.jpg'
},
{
	name: "Domino's Pizza",
	id: '2',
	address: '100,Ground Floor and First Floor,The Mall, Minerva Complex, Rajpur Road Dehradun 248011',
	location: 'Rai Market',
	category: 'Quick Bites',
	vote: '3.9',
	cuisines: 'Pizza, Fast Food',
	cost: '600',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://lh3.googleusercontent.com/-kJsaPy7QFEQ/Ul_1NZjesvI/AAAAAAAAC0c/jZGyhEZxtUsmwqsQUbjNstabcIvwYgNbACJkC/w408-h544-k-no/'
},
{
	name: "Haldiram's",
	id: '3',
	address: 'Dera Bassi - Chandiala Rd, Ambala, Punjab 140506',
	location: 'Chandiala Rd',
	category: 'Quick Bites, Sweet Shop',
	vote: '3.7',
	cuisines: 'North Indian, Mithai, Street Food, Fast Food',
	cost: '450',
	hours: '8 AM to 11 PM (Mon-Sun)',
	image: 'https://lh5.googleusercontent.com/-70NbtsilplU/WOG-DPd9GqI/AAAAAAAATjY/R6F1GopxL6cSbYPrwHd5NkfZb5VbPx0TwCLIB/w408-h306-k-no/'
},
{
	name: 'Pyramid Cafe Lounge',
	id: '4',
	address: 'Hotel Puran Palace, 167, Vijay Rattan Chowk, Ambala Cant, Ambala, Haryana 133001',
	location: 'Vijay Rattan Chowk',
	category: 'Casual Dining, Bar',
	vote: '3.8',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '10 AM to 12 AM (Mon-Sun)',
	image: 'https://lh4.googleusercontent.com/proxy/uY-meqcL2f0uPfD6Wv96Kjo4L2ja2IBZaNJvI59q8b_D80Z5JtjYdS4h5dCnzi2paq9llrtO8_JCl7fCw73rwnCmR_V_OqtmetTb6orXbbYZL8TsCm4tJO5j0kV61OGj4-8HmYuKblY4z5DhyCcMkSzfbEsPoQ=w408-h326-k-no'
},
{
	name: 'Hot Millions',
	id: '5',
	address: '197 KM Stone, National Highway 1, GT Road, Nanhera, Ambala Cantt, Haryana 133001',
	location: 'National Highway 1',
	category: 'Quick Bites',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '700',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://lh3.googleusercontent.com/proxy/BxEjlVn_vGNmg4tfFiaLPSgLuwM-P7u4KQPofGXFGd3FeT3ZnsSi9_GUeCb5bBwNSgtc17sAuTZ8YE8nv2fUC5ZzR5xIiMoPdICGQDs-tG1b5Z-aDmRA3dM70DRX-xuH79o99u2JJsruIWV6LeaVDWr__aiUn-U=w408-h304-k-no'
},
{
	name: 'KFC',
	id: '6',
	address: '133001, Sena Nagar, Dholkot, Ambala Cantt, Haryana 133001',
	location: 'Dholkot',
	category: 'Quick Bites',
	vote: '3.4',
	cuisines: 'Fast Food',
	cost: '500',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://lh4.googleusercontent.com/-tqy7RYlPTZk/WR_CuttVmUI/AAAAAAAAaCU/vujqhJBI8sMXgQTFbSHJzEJaJR5O5HdygCLIB/w415-h200-k-no/'
},
{
	name: 'Shri Ratnam',
	id: '7',
	address: 'Grand Trunk Road (NH-1), Dholkot, Ambala Cantt, Haryana 133001',
	location: 'Dholkot',
	category: 'Casual Dining',
	vote: '3.6',
	cuisines: 'South Indian, North Indian, Chinese',
	cost: '2200',
	hours: '4 AM to 12 AM (Mon-Sun)',
	image: 'http://images.mydala.com/uploads/event/2015-09-04/242119/242119_1.jpg'
},
{
	name: 'Clove 99',
	id: '8',
	address: '99, The Mall, Jagadhari Road, Ambala Cantt, Ram Nagar Colony, Ambala, Haryana 133001',
	location: 'The Mall, Jagadhari Road',
	category: 'Casual Dining',
	vote: '4.0',
	cuisines: 'Modern Indian, Chinese',
	cost: '900',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/32/67/ee/getlstd-property-photo.jpg'
},
{
	name: 'Cafe Royal',
	id: '9',
	address: 'Jaggi City Centre, Sena Nagar Crossing, Dhulkot, Ambala, Haryana 134003',
	location: 'Sena Nagar Crossing',
	category: 'Casual Dining, Bar',
	vote: '3.9',
	cuisines: 'Modern Indian, Continental, Chinese',
	cost: '1200',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://lh6.googleusercontent.com/-wXpJQx-PpuE/VqXo3DR282I/AAAAAAAAAAk/yx26Quk_NlIBOJmVULTFBWV0_3b29Y08gCJkC/w160-h160-k-no/'
}];
})

var grocerylist;
//Controller for the restaurant page--> restaurantController
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Dilli Darbar',
	address: 'SHOP NO. 110, motor market, East canal Road near hotel sakoon dehradun 248011',
	location: 'Motor market',
	category: 'Restaurant, Bar, Banquet Halls',
	vote: '4.0',
	cuisines: 'Modern Indian, Chinese',
	cost: '900',
	hours: '10 AM to 11 PM (Mon-Sun)',
	map:"https://www.bing.com/maps?q=dominos+dehradun+rajpur+road&FORM=HDRSC4",
	pic:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFRUXFhgYGBcXFxoaGxkbHxgYFxgdHRoYICggGBolHRcaITEhJSkrLjEuFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHyUvLS0tLTUtNS0tLTAtNTUtLy0tLy0tNzItNS0tLS8vLS0tLS8tLy0tLS0tLS0tKy0tK//AABEIAIgBcQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABAUGAQIDBwj/xABDEAACAQIEAwUFBQYFAwQDAAABAhEAAwQSITEFBkETIlFhcTKBkaGxI0JSwdEHFBVi4fAzcoKS8XOywhYkorM0Q1P/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwIEBQEG/8QAMhEAAgIBAwIDBgUEAwAAAAAAAAECAxEEITESQRMiUQVxgZGx8BQyYaHRQlLB4SMz8f/aAAwDAQACEQMRAD8At9FFFeONAK2y6TWtbA9K6gAVgmsnwrIEeZoAwo61kxWDRpXQCR4USPCjSsEVwDpm8K0ZprE1nf1rucnDWiiionQooooAKKKKACiiigAooooAKKKdw3Cbz7IQPFtPrrU4QlN4isnG0uRKirDh+Wvxv7lH5n9KkrHB7KfcBPi2v10q7X7NulzsLd0UU+1aZtFUt6An6U/Z4Heb7oX/ADEfQSat6qBoBFZq5D2VBfmk3+wt3vsVDFcINv2nG0mPWOtKWez1J1AGm+pmBt8/Spjma/BygTKD/uaq5gHloaVOsDz+lZWpcK9R4cF8/UsV7xyxy6wAEwsQSQJJ1mNTtFM95wGQ6HdYj4Ut2iPkJ1JgH3DXQf3rW74wo6gAhSu4B0Pmu8aR76sVxi4vL22JNeh1fHKpyxBXpO9aYi+rkToCNz4+FNW7du8NTm6938ida0OFYAlu7lBOUKCYG2tWFGS2zlEMIQOGVTKgjoZ8v+ay90gaa1scULiqVRlGvtCJ/rWyAzAFVrcdRar2gsi+HzlpbSn0aawLR61ulmKhHfdEpSTMivN+fMawxaBTqpgj3jQ+telrFU/nTgBuY63eQSMyi4PIEQ361c00op4l32Ct+Yz+0dLxtWXtLd7pMm2G7oyqBJXYaVXeXuPXTKtcZiPxan561ZufeKXrK2TYutbYs4leuixIOhqJ4fzDeZgMRasXv5jbAf8A3LSrFVJeZ4ZkaiUo2PAXebTbu2rb2wRckZgYgggDumZmR1FTmE4rbuDcqfBxHz2+dQnPvB0xGG7bDrlu2GUvbDZiFeBm8RBAOvTWm7Ni7cw1u41sqWhWmNWjWPIwTSrtPGKTT+/UI22YzyTtFQFi+9vQfDpUphcXmHeEem39KpZTeI7jYamEtnsN0VjMPEUUD+pGmDxYuLmUGNiCNj511avH+U+O4wX0to6d7MiszhU1khWZ9BqIAbrAq+8L5qRmNu/Fm6rFWV4WGBggxoDPSBVzUaV1rK3Q/wAHP5fl3LHWwHx+lLrjrc5S6gzEEjX06GmC1VcCpRceUZ2rQmiaJrmTgVis0CgAoBoNAFAARQDWzGtTQANWK2ataGAUUVq7gCSQB4kx9a4BtRUViOZMKmhvKx8El/8AtkVF8R52tW17iMzHYEhfpNTVcn2FyuguWWmsqpJgCT4CpLke3bxeEt4h0hmzArmMAqxXTy061a7NhUEKoUeQArQq9mTkk5NL9yDvXYqOH4Lef7uUeLafLf5VK4bltR7bk+Q0Hx3+lTtFX6/Z1MOVn3i3bJi+GwVu37CAefX4nWmKKKvRiorCWBTeQoooroBRRRQBW+YhN5RpqgBBIGktr8fpSGN4cGYOGgggE+I3B6ddKl+OD7QECTlAO20nT6+W9ReDxFxpDoIk6dYEdDodfCsa+uDskn3Zer/KmjliuGZpCECGLR5kwR5CfrWXzKrJ9p9nlJfSSdyFLdNtqafGhbmWA0wPaUGOpjcgaE7dd6SuYxfYLtJaS0Bt9tRskbGOtLcYR3XPA2PU9hq9iLxYhLewmS0ZtjIjx8TWvEcUigW27siZ1OgPVtRv4ml/32SU9kKdSQWLHfTUSBI8q0XiqsDvlBbMTKmMsk93zHoZoU9t2cccdjqlskrLrlIlTJiOsTqfPTrTD4orpbTNvq0LmPrHy8qT4JxBbrNmRzmVIBAyqJbKRHj4+VduI4tQ4B+6Sd9dxApNsXKHXF/f3uMi9+lr+BkXyVlkVVMxpEHXf3fSoC5zPZU5CwJ6+O8aRTuN4jdQAlZtkyOpIjbprvVA55w4sm1ftWwqOpWYEBhqB4g7zJO2hpHhylLoTaJdHlf8l2wfMmHYtvAaBr5x4T86sGGxYvQyBeskg/WvPOQuGC8DcujugBQJiTGpjw8PfXoOCsqo7vdXyPzgb0+vT3P+rb9xNijCWMlM/aVhCDhwBILvB9yz8KhE7S0jOqy0d3SYnSSOoG/uq5ftBWRhwI7r3NYiZC1G8JskkeVI1Eui2MTPsfVZlkbyOmS/cuuxYXFVLxY6spkAmrobtoWhZVwSD0jz1qo838K7JDdtSAT3gNh1+BqM5bclsx679NRV1eaOJrjb4M1K9PC2OU8F5w/BUOpzEnrAj5GuWN4abYzDb0qYwDQoE/Eyf76U3ctZ1M02GjpUcQWDPtojFPBTYrNTn8LFFL/DP0KXTI+dbDKjLcuOfte1MKCzKcp3zg5hnIBbXSTvW+A4obtxRdKKzCMxXN3tAkwCQNI8ZrS5hQYz+ZHuYrI96n4U5w3Do1xToDGWcgc+zAgRvGgO4OtaErIY3Rv1aa1tdMtvQYx/FzhnNthMARdQxmBgHKCdQJIgDpVq4XxUBSM122UglZHfUnRljumZB2132mq1jeG5hlcEjTcEFZiBr7j7xUlynw8WGP2IuW9ZFwQ40Gq3I0EzpoJmqVjqlDdbmg6rozy/NH4Z/g9N4Nh7mLw5bDuouIQPtVOW5pOuQhrbbgmCPLwqHGOcMTgXyY3AMgkhXS6rK8b5ZAke+n8DbcvGHdrdtu8yaL3pjUj2hHrsKv2C4RbuYcYXFKL6Os5bvegiJg/MHcUqn8PZPwnHdcv6fMydRXOLc+FnZdzyvD/tSwZMMl9PVVP0arFgOZMPeAysRO2ZSvl1rzfmrkVrV++thAFW44QteX2Q8AMLhBkDr5dabwNm4MMZCq6gCTBzwTGvTSdfIGuXUUY8j745G6Wh2SxPJ6bexaqwUzJAOikj4jTpTSroxEHLuJ1H615xgONNcvJ2l3IhgE6So667Ak9fOvQrF2xfDW7ZDZPvKynSZhlHSSYP8vvpdGl6k+rn3/6JWadwx1Lb7+8GbT5tqbt4InqK54bDLIliDtHUnffr6b07h7nmD4Edau16Glrf6lSzMeOBbD4ZXLDMe6xBgeFM28DbBIbMSNYnceIilsNiVXO203HB/wBJIrfgmOW8phu9bdlE9R4eY3HupEqIRawvX9TuHjI42GtqYybgEMZNIcRv2XQ2rtvODoVy6e4nY1ZX1Xao3E2GI9lSv82o+H6U22qUI/8AG8fAKpQf51+55HxDlJkZjhyCv3VcwR5SN6quIwdy25F5SrDx8PIjQj0r2fifCbxIeyoK6h7YOo0MFSYzCeh19aq+Lwi3O5iEPWFdSNfLqp9KzVddS/8AlWU+6LT9lUaiGaHh+nP+/wDBef2S3AeF2jsM13/7XqwWeP4R7nZLibDXNsguoWnwygzNU/A8vWP4XaS69393tPcuNbQ63ZZ8ts5dW7zCB1OWu+O5WwVnBkXMNYXEXJ7MW1UOLrD7NLTgBu7A738pYwJr0dU81xceMIzY0KHlnnK2+Re6xNUriPH7twrbsdrrd/dQwVQt54JvOjHvKLYtuucQMzz3stJYG4lk9qVdrWEuNh8OiA/a3yClwopOpLvcUkkgBBB9um9QKh43+/v74PQ6jcTzBhLb9m+JsI8xla6gafQma44vhrX8I1m5fuKX1e4uVWAz5mQFIAAWbc7x1nWq9wjlnhqWHxFzDYdbBUZDcRSRaE5XLMCc75i3QwUESKG2RhCGPM38C8g0VQRzIcBhVsWrD3rlpZKscosozn93tu5km6UKKLYBYke+pTG85dlee2+FvZLaM7XhlywlsXLkAkMwGZFkD2mj1OpHXRPsWW5iUVlRnUM8hFJALQMxyjcwBOldaoPDOMoly7fxC3HxSlEFpFLHPcXOLVuYllSPAKCWJBdwGV54ujD9s+DcntbiBLTi5CW1Bdy8BTDykAkFhAJo6kddEux1554h2RAi4SUB7h6hiyyJBgkRp+L31S7HE7t/MftQ0aAkoI22B0jT4VbuY7ha5buvZMdghdGOqZmbQlTEgmKjMTw0ErctMB1YeR/m6R7ulYOqc3bLJb07SWBXhV5nt3Lt1xKEqcg7wGWNDsCcsnQzTfbKwLXe4CDs3eYATI0kk6zsBFImy1qyyraeDLEsNIVMvjLaMdgdqicXae4FygbAgjfroQDp7tNYpbb22H7NvclOKYuWlFOYSY/mj5+zE+dRI+0jKxy7XB5SGbr3f6insFiFXPcvssxOVdGGmoaBlH96VxwPEUvmFtqiKGlo7qpDZidZYkmNdy1Qxl7BlJFg5WvFmvXMsI2UJ4ELmkCPKKY4jdDOCZ0U7b9cvzNJ8sXhdW6qoUVVUKkzpL6g+J3NdOw70ElT0PyHn76u1yXQktxCW7Z1W+txArjVR0Ook/XSPfUHzXbUYZkPeEqyg9GDDoPEbjb4Vr24RmWddtPnSHH+MLbTLAkjKBuTtJNQlv7y1TVKU0orkd5TdrakH7xBjw6e6rBYxJLFs2XLHpHh1rzLBczsm6A+GsU8vM2IuZctsBds2ViBJ3Joi5RWEi9P2XZJt7L4l15vuhzZ6DU/ID8hWOEWYG9Rz444hLeZQuUQNNfEyfX61J4FMtYmt1Cld1HnNRU6rnB9hziWuHvg7dlc/wCw1SeVm1g9Yj1/v6Va+OXcuGvf9NlHq3dHzNV/lSyd9NSBWnppOVe5o+zvySbL1w+2wOu+vhtUvhYyR5mkOGoQp0MjzmuuExCgsPOdfOtOHkx+pV1TymMdlRWe2FFM2M/J8wvZY5WZMpaY7wIOitp+H2pIP4o6VwDEOCDBEH01kHT41JcIxHaZpCBgIKkwSo7ynMBuu4Ou2ta4WyrZi5KqFkmATo6542+6SRNdaeTZrnlcls5Ax6tiQhQd85TagEMuVpAz6xAzQTqR41czhsPd+wz2rGLU9mV1RWYy8qqmG7uu287E15jwa5bS8uS6Fl57UyQu+RJMa7S2mw8TVl/apjrQay6qS2ql7cd3LmCyQSWPdBHlrPSlqKTwWLLG0pNtbcr9OM/MkRgcThWm4hKSct1dVIk5TvoD4HUaT0qewHGXN1dYW2JJJ0E7fWvLbHM2Ist2ZuteshiMl1nKHUrIXMGAImPXxq58oXlxAZfZMkgTmjbYn1jbpWfqaIwkrUt12+/RliMlZB9ePf7/APRWOPXLt/F4ptCue6ymdIz93136axTGE+3OViLaKo7xgs7xoJmY0J06VF4jCIMdiFZiftXUKTAJLGZM6jSu9nilm0uhEiennt69K7Y98pZfOMbbnKJy6N3t2Fsdwts8I0Fd59mTBIn+zptWOD8WfD3VuK0MD6gjqD4g13wt24xzqY1zEaxOxPqfGmOLcpns+3w4JTWdjl/zRsfOpwl2b3ReUmo77p9n3PS+Ccds41cyCLie0p3jaR4ithimXFdmQcjrKEsD3vvBeq90zB8DGk14zwriV2xdBUlLinT++oNekYTHLxGwwU9niU76AMQAw2I/lMkQZiYq3Gx8Pn6lC7RRh54fk4frH/WST7IhryzJN1yPKT8q58H4PkyhznYMzCNIJJ953+dNctYjOzLetEXAFLHvQzbMRpAE9BO9WJcOikFSR5HXeqm0m3nuZ85OD6Tk/FTbUZ5yzBMTHhPlSWOwl8L2mCueZtNqjD+T8LeW3pXbH2TDaZlIggbx6VHcqY0q9yyx9nUTMwDE69IIpfjSdvhz47P0+IyurNbshyuV2aOuB49cI10IkEEdRvW/GsZbu2puIHgSo2MxtPvrhj7lrtXKaqdTGxJ9r1nxpQXEOYZNCDp67wdx4yKyrdVOLdam2s79/kXI6eLxNRw+fQm+AcPXG8NtoWuWR2hYG00MrJdLLBYN95R41OcL5fs2G7QZ7l2I7W67XLkHcBnJyr5LA8qV5ba3h8FmPctp2jsSdgCzMSfiazh+YC2DuYjKvaWw2e2HzAMNQMw8VKn/AFV67S4dMGvRfQw9TOXizX6s1/8ARuEz5wtwN2rXQRduAqXzZ1WG7iMXYlVgGfIVl+TsIVZQrqDc7Vctx17NpzHsoP2QJmcsTPpXfG8dFq8bRtu5OQIEEszMl+4RqQAAthtSetLrzVZys4z3FjOoS3qLfYWrxY5m7wC3VM6HvBYJ3f0oT4s/VkpieGW3w7YcSltrbW+4YKqVKmD0MHeo7h3Ktm0yO73sQ6ew2IuG5kPQquiK38wUHzrtiOY7FtWZyVVS4JI0GS32jf8Ax+dc/wD1CtzDNfw6m7DBSoOaO8oY/ZZs4VWzQmYmIGtGEcU5JYTDinK2HxDOzhwzm2xKXGWGQqQywYVyEVSw72URIrPEOVsLe/xEJHZG1lzsFykkkkAwWkk5jrOu+tLWeaBpntyvZ3bjXbbBkC27iodDDAgNLAiVgjWJrOI5rtIzsxAtKAAxhSz9s9kgFiFCyhgkgaEzFGEd8SfqMNythSFBQ5lfP2mZu0doZTnuTmcFXYEExBjatLfKeGFh7EXCjuHJ7RgwIudqArAjs1DiQFgddyTUrw/GpftpdtmUdQynypijCDxJ+pCcSwtsQmQZcgERpEkx8daTW3bXZRtGg6eHpTvHG7w/y/mahLl7Xf4V57XWyha8DoboeZ1nYbEa7wd4+Hyql81cN7JVewrQPagyUA8J6bn4VOYq60d1gpPiJj1Fa4i+rqQ0R1HQiNaqLU9e0uRsU47o854m+fMytKETlAZCogeqmCJ+GhqatLbRVS0O5cUM7blmAgCegU6x51VuKQhuIr5lViF8wDvpTHAcWQhUk5ZlRO2moHhp08at7qLZNz6uS7YXiKYdWJETAUTrpOp8NxUfjeckFtpGa5Pd8MvQz1P6VVeL3mYLkzE94nroOtRdrhmIuAMlq4w2kCR8ahRRibtzjP8A4bek09M9NGUvX/JK3+PEgtuxnfxNQl6+znOzSST7tthsB+lduI8Kv2lkoYBgka+Q289JqY5NwlvOTibBZQsrmRyJ9BvPnVqTUI9XJdThTnpQvywqG8CxELqBuZ9NzXpL8Rudnnti7AJE5WUj/S0GPOIqCxnMVu2QuHTIg3Fu3kE+gA+dTfBeZFuN3kCAxJc6z4wP1rPsXiyy00ihqLZ2Yl05OKcaGJVYfNBJnXr/AMUzZJU67VyXlWzgLdvsizFvaYmZAGkeG5rveuyFEbVmayvw7XFs87q5QlbJw42I/m7ExhwPxXFHwBb/AMaS5ZcEx01+NHPLRateHaf+Jj86j+AYiD75ra08VGpYNX2dDNLPU8BfAB9I+dR/EsTlcHy/OksFj48KQx2M7S/AOgtGf96x9Ks3XPw8FTU0OMJv9CY/iYrNQeX1oqp48jB8SR4f2zKzW3ADk5GOmhnT3SJnzNOrcfLcEDtAwBMyWM65OmXQE/1rGLwhxDG4BqxmFXUCYliNCSfDeDRhcGVLWjJzTlmZVtQDAE6xtW6pJx3NzpcZ7D3LOM7N3Jti+h0ZRoNVdQQI132kTHoRO4m9/EEWxhotOrMyNcAVQAmYy3egwhHw6UpgcKEtkW4WQTPmRK6iS3Xes4LiYtoSAcwDQyNl7xUjQ6giZ1E+R10rWz3W3c0KYdUZZ5wyGsX7+Fv2cJcvWlsrdUtctrbuBVY5HZnKktCloDzEnSrtydet28QxBZbRLdmSDDgyFIJGoIWZGleY37BMudm9DM6+6rzw7mt8VbGHvn7RLYGFK2xmVwqoqZYgqw1M6SARBiGamKsrx3KumjKuTXZ/qQXN2EX+IXjbuFUdmdie8QSxzQBuJ1HrW3DuX+1mGjvSM8EkeBAIgQPrS/MAdsTmEKC0OAsBHkgiNgR5VYbeBS0hftg5MCII1jfUnb9KrWWuuuO++PQfpqOuTSRbOXMGjYR1yLntnoQSdNdRuAaX4bxEWLkkGOq9CI+utVTDcbujEWyrnQwJ1ERr3TpsDVy5jwS20FwbkDNOhOkTH4p8POq1lcmlYtmjSq6Yt1Teeor3NPBBcsfvCKy3QSTCxbZST7BOunh8qq/BuMPadbiGGU/8gjw6V6Jypx0LNq8AbbgmSNj6DefjMVX25TsXcTfvd+zhyAUUEBsx0PtgyOsfzeVNjZWq/M/5JuVtdrjjK/Zp/eMHpOER8RYtYi0YYqj5QTpsYj7w3FSmFyuCDM9ZBGsTpPSajsJdTC2LVpDn7NFUmIJAEA6aSfWtcVx9VAd0ZZ+9EEfqPKlScc5MKUZNvC27DeMtvbGbPKyAAR/x4VHYkg52UhWIAk7R4T0mPlWP49YxlhTauhhm7xWJX1B1HvrrZVAGzCViInWZiqOqljMV+/Ys6ZY8zIqxdmRsSfd5VwTE5iYI08TGvrtW3F8PkZCggNPWQCI6mNddqZ4ZY7I55kt7UHTqOnUSaz1XBcmw5wUOpd+EXPlmyL2CVbiyCzSJ3i4SNVOoMbbEaHqKlG4ZZIuAoIuiLi9GEZdRtMaSNdB4CuHLgAsLHi3xLEn51J17bSLFEF+i+h5DUvN03+rI7DcEsoVYKxZXzhnuXHbN2bWhLOxLAI7AAmBmmJ1qK4vwHBWcMVIe0kLbVka8zgslvC2wAhLuCFtrl1BKgnXWrNUZzDw9r9oW1MHtsO5Mkd1L9u40EahsqmPOKexUcNrPAngeG4PEZriqzGWR1Y3khjbVGmy5ARimUzlBIIPUGnr/AA+ytgpcLdkvfLXLtwsuU583as2dSpEg5tI0iq5xLlW62dQQ9s33uBWcFmzWbSqzPct3JdHVlWRIQrBGUCtsbyrcuPfkWyLtlrZe42dj9iqJsgOjjMQSy6ZgFJ05ljOiH9xONwK1l+z7r5Liq7M9z/EguXDP9rOUe0TsKLXLuHW2lvK0Jbt21OdwwFsyhzKQQ0ycw1MnWoZ+Xrxv2bgSzbW2LajIQCiBCtxB9nJEnQKyKRuJrTDct32CJeW0US3hLRGcsHFlrpuEgqNGDjumZ1mjL9DnRH+4t9m2FUKJgAASxY+9mJJPmTNDXVBCkgMZgTqYiYHWJHxqmXOWMQ1285FoC4l1TlaM03rbWi0IGJW2jCWZoLEKADT+F5a7PEJcW1ZyJeuG2IA7JHtWxKDLCntEc5RHtkz0oywcIr+oOab5W6oHVJ+BNVu/iDO9cv2hcS7DiVtyyhBhRmkAsftLvdTrJIG2nd12qMt8bS4JDDXx0NeY9qVy8VvL5HVPyjhxXQmuOO4iqIWOwBOpifKo/G4wKN9+u9QnEMXnBXed6o0UvqWRuGV6/fPgNdabwNyF+NaNgCxAA+VSNvhFxCylSY6gGPI++taUo9J2MCT5b4KccLoD5WtBY8w2aQf9oqwYrBvYtBSMoCgabT7I19TTv7PMDk7U5pkJ6T3tfWm+asQrEWx0iak0nUmXaNTYoqn+lblNW82ckdDHwFdu1dozMfSuy4eG1+9J9ZP1rS5dRTBI0pfSh7nkVsWPaRtcrN8JJHwBprC4bve8VyGMTMTIpjDYqTUsEHJlxxJNxEH4SfypTIBWMLd7iGfGtcdfAhh76z9VBStcvd9DE1GIyYnzJw438O6L7ejJ5sNY94ke+vPOH43I2sgjSDuD1nzr0yxiw+g3qr838uW7k4gP2b6ZtQFfprMAN59Y99WtLZ1eWT9xZ0GvjS+mXDOWF41EknepvgFvMrXj/wDsIy/5FkAx0kkn0Aqqcvcr271yWvi5bVVJVGXvMSe6crEhRGvjOlegDSBAAGgA2A6RT7XGPlJ+0dfCyPRX35DsxRW2ailZiYux5vhcKlm3JYwMogjeIG3nRxKwsyCJBBAOmo6CNRIqnXOZLjiCmgPQA1vieIXbuqK0kHbw3OgmQADPp5VqOuae56KNsJLy7/AsHa5R3WgLJgx1PskCBvtHhUHi8dECSDPTWNZnz1qGuX3B0Yx6R08PLWm0t5pJBgDc6E/Cp+HjeTIxt6sqKaZIvjUayVI72oAMk5unvkzXPhl3sr1ttM4KlTMyR5+PSPIVDYHGMjyAGJEagn3wKlMEpc5sjlp7oywAen0pli6VuV6s2Py8jnMfEFe7duIGDO7O2vdJLNJUeczr1XTQxTuKXsltZrqPnAPd8DGo8aROCe7cbODLEqf8x06dZM+pqt3Lvrppv/cUlVxtws8FydtmmeeM9i63GDMrSBdWAraLmAPdJPVgNJ6gCZqxPxN7gK3pMAKDoqkCdQuoDa+mnx8swLsXCyAD+Iwo61b8DZu5CWYXB0CmYGsHz6bUjU1SisdRY0eojY8qJOXoQpp55QSPy/vStWc9SfSs8BBYtccaAEID+LT5D86avupMnfQfAAb1mWLpeDf0003kiuO823dLNt4CoEbxzCJ1399K8p8JuY252l83nsLI0uMA7bQD0UayR5Aa1vzpw4DDq1pQM4zMdyWjXWdNYr0jK6Ye1atIGgIDrlCjrlAB8/DatKM4qtNcnlLsu6S7ZZHE4a1b7K3ZS0skSm/hJYGZ16134TxZbjZQwLjqANddxXPF8PIYlrZ1BLMBofEeZP5UguFbtGe3FuDKkEyoGkTG9UdTWrI78ljTyS27FwvlLoIuCVMbaQYgn1qJxuAuKAAWa1IIddxrHeA9r+/CmLGMa4IImASWgdNtvH0rtY4rKSQSo8fy6VkyU4SfXuvX+SxXKUfy/L+C38qZv3VJjN3/AE9oxVTucZxSXnfMFuocr2nJ7PQFgpjUKVlluASBLwVFy3auHLF8Ph0YCAS2n+o0pzVyfh8ePtTcRinZl7T5GZMwfI2hDKGAIBBgzESZ9ppP+iHuX0PO6nPjTz6se4Bxq3i8MmJt6KwbQkGCrFHErIaGUiQSDEjSvm/9o/Pl3F3E7O7cAhbnduMqoGUMltVQ5ZVSMzmWL5tQoCi4rzcOC3G4Rh79q5bFwBMVck/umdj2guKoy3WUnNoQJaDtFWnhv7F+FIyXIu3gAph7gKP1zHKBM7xMeVWBBM/slxuIvcKw1zElmuENDP7TIHYITOp7oGp3EHWZNvrW2gUBVAAAAAAgADQADoK2oAKKKKACiiudy+q7sB/fhXG0uQPGP21Bf4hZmf8A8ddv+pdqAwltgsrEbgmZPlH9KvP7RcAMTi7bDULZAGhic7kn6fCo21wlVGoL+Mgx7hECsPWTTm8FipPuVfD4Yu0HQeNTFjgWsdBud5/Kpuzg0Wcig+Mf1p1UldjJrPk3ktRaRC4bgoVp8tyR+W3pT2IwJcZZEmNjrptpsYinVsaeHzrK4YTr8tKIya+J1zOXBsR2C3BIkgBfL2j796XsLmd2Mktrr6D9Kb/cl6zXS3h1Xb61JWYSXoSjNJfqyB4haG2vxpEcNtkyQf8Ac361a7mFRt1BrAwVv8ArvinfGKocDa8Pmf1pm1ZtgdR03qwHAWvwLWP4da/APif1o8b3nfGI/D4lFGuYg+h9aZOLttpB98frXRuF2/Aj3/rWP4Yo2PxqDcW8lS6tWSyRVzDXc+dSqjwn+lc+P3i1lSAjMjTkf2HlShHqM2YaHUCpK/gLm6sPfB+u1R+K4cx/xDO/tL9Jp1MYRaaK706XAry9fU3luBFthLOXIkAsWaSSAFEAr5mrJ++Kfut8v1qpty8hPdZk0MQY1gxruBNZwmExFn/Evlx0Hn0kmT7qszhCe+SKpxs0Wz97Xwb5frRUD+9N4j4mil+AiXhRPMrPBWEgiDmMyNYnSunYth4dGII13j1g9K9dv8qdoNSHXX2SVbyg9DVe47yNaZAtu2VMyWJYt5CZ9flTvxTTzPj5m5LVaeupKEctIoQwtu8Abf8AWaxdwmQZAQSazj+X7+DuZhmyfiU/JvD4VL8Mxdu5lDGCoIAOnWT76ZOxKPXB9UfvkboratTtspe/6EbwrDrZPeET941dOGXLRKnwiSADrpPlG9TOE5eAwd3EXk0e2UtKRqSwgP6Aaj0mvOuF4HFLclUISToevnVW2Pix6pPpfO5eeso0i8PPlzjb17+/GdyzcdwaLiHa0TPaMZhYBzSSI0yzsIqs8X5aW/cuXVYWye8VPsydyOoE9NYqat3SSUYazqPDXUU9i0+yVSI1JJHXaPh+lRjqLK3lMfZo6rq4qSz6M8xuYU22KXVIIjTbT8x6VJYPjjW9AO74SdvfNWjFcIS5YMkliQJOpBmdNdNOsGZPuQscp2lILuzRrH5bVfeqqlHzmV+Buqm1X8y18H4fZOF7dnOZpIAPsk6AZN+m9I3FEwSD56x762RCtoMdWB1ddIkRl28BWn7upWcxM1mXTTaNzS19CeZZNmdb1p7LEA6hPA+HyMVZuU+IFsMgdg9wEhgN1AJVZ84E++qpiLQtqAYyNBDfeVgN/Mf0qMa9dsOHU+1B8QR1IM+lXoQ8qweTssTsln1f1PUwgIaXYzrlnwgGI13ioy8ABoDHz361x4Bj7960l0WWZWYgNp0OUgg7a9esetacX4gCGVrbz4FWHkd96VZ+qGV87MZ4LiQLhUwc5CgdMu/vaR8KexPDu815g2XQrbDGJjTTpEnb515txLi15WU217PI4OYkTAInT0EV6Nw7mEXUVese1pl1EjY6HUGKi4KKUpcffJ1zfV5S/cuNNhdt22M/eNUr9oXNeJfEDhPDVJxdxQbl3ZbFswSc3QwRLdJAEsRFx5WH/txv7T7iPvnpUqEE5oEkRMax61u0/wDXH3IyLPzv3lP5b/Zxg8NgnwjoL/bD/wBxccd6424M7oFOqwZG8zJNa4Pj8RwDEJgsWzXuH3Wy4XEESbRO1u5H99RpIX1V3A3IHrSt/GW9j3tZ2nUajepSnGPLIpNjlFRlziTdAB86UvYgn2m08zApEtVFcbklBkvdxaL19w1pS5xI/dHx/pUNdxyDrPp+tK3OIsdgB8zVK32hjv8AIYqiZu4ljux+lJ3MWg+98NaiLl1m3JNaVRnrJPj9xqrG8VilY+xP+alHVT91fgKKKrStnLlk1FIwqgbACs0UUs6FFFFABRRRQAUUUUAFFFFABRRRQAUGiigBW9gVbbuny/SkcRhmWZEjx6e+piimRsaArfYr4D51mp793T8K/AVmm+OcwdrblTIMU0mLBPeHvH5ik6KTCyUeAayO4jB2roIKqwO4IqvYnkPCsZUFPIaj4GpQGuy4lh1n1qxG+PdY9xDo9BLDcByDL2zso9lWEhd9gDT1rg/hcX3iK3XFDqPhXe1iE8Y9aHVpbHmSz8Wv8nLHObzJ5PN+N8Mu2MRcuMkqbjwRqCMxj0JFdr79okKdDB13G+nzq84qwGzbMDOmhquY7AJbOwAM9NdtqLa0t48G7pfaOYqMluiqm4URVCKTMyRr4RPh5UviLoyiB3pEnp1mB0Go+FTwt2zuvzNZfhdoiSDHkT+tQTw9zR/GVvfD+/iVtgTofGfTp6Vu2YCB4aVPfw1IjWPU0wvC7ZGon3muORL8dXHjJE8NftVa1cEEQVkfdO2h6jx6g0ngScNiLZdgbOcyCJGxB3+BX1p6yUsXCILBWMAliVneCToD1Xansfg7X+IqqVeCQwlSehM+ydInxFXY2dO3ZnjLG/Fk1xl/Uc5P51S45w1xUtBtLWQZVDfhPhPTz9as2LZWhXXNO2351TLWCRvYUBhupAn3HqKm8Hi7sZXtuRtmAII89dDSrLW+BsWmRHNvKyEdth1/6lsnQfzL0jxFRPCLFyw+ZezA6jeRINX+wkAhtQZ98iDUJa5fP3rg9wn61xanMcSJbp7F35Z4kThkygbtv45jOlPvi3P3j7tPpVYwDmzbFtToJ1I11M1u95juxNT/ABuIpLIt15eSZuYhRuw+OtLXOIqNgT8qi6KRLVTfBJQQ3c4g52gen9aWdydyT61rRSJTlLlkkkgoooqB0KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArDKDuAfWiigDicFb/wD5p/tFY/cbf4BRRXcs71P1AYG3+EfOthhU/CKKKMneuXqaHh1qZNtCT1Kg/Wuy2VAgKoHgAI+FFFGWRwbiiiiuAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==",
	bestDish: {
		name: 'Sweet Corn Soup',
		image: 'http://hebbarskitchen.hebbars.netdna-cdn.com/wp-content/uploads/2016/09/sweet-corn-soup-2.jpeg'
	},
	image: 'https://content1.jdmagicbox.com/comp/ambala/i4/9999px171.x171.160618164639.n2i4/catalogue/dilli-darbar-ambala-f595w.jpg'
},
{
	name: "Domino's Pizza",
	address: '100,Ground Floor and First Floor,The Mall, Minerva Complex, Rajpur Road Dehradun 248011',
	location: 'Rai Market',
	category: 'Quick Bites',
	vote: '3.9',
	cuisines: 'Pizza, Fast Food',
	cost: '600',
	hours: '11 AM to 11 PM (Mon-Sun)',
	pic: 'https://itison.imgix.net/system/201510/56419/1444382174/original.jpg?w=572&h=378',
	map: "https://www.bing.com/maps/directions?rtp=adr.~pos.30.325979232788086_78.04385375976562_Domino+s+Pizza+Menu+Rajpur+Road%2c+Dehradun%2c+Uttarakhand_Domino%27s+Pizza_1860+210+0000",
	bestDish: {
		name: 'Chocolate Lava Crunch Cakes',
		image: 'https://i.ytimg.com/vi/Q6maTO5bQT4/maxresdefault.jpg'
	},
	image: 'https://lh3.googleusercontent.com/-kJsaPy7QFEQ/Ul_1NZjesvI/AAAAAAAAC0c/jZGyhEZxtUsmwqsQUbjNstabcIvwYgNbACJkC/w408-h544-k-no/'
},
{
	name: "Haldiram's",
	address: 'Dera Bassi - Chandiala Rd, Ambala, Punjab 140506',
	location: 'Chandiala Rd',
	category: 'Quick Bites, Sweet Shop',
	vote: '3.7',
	cuisines: 'Indian, Fast food, Asian, Mithai, Street Food',
	cost: '450',
	hours: '8 AM to 11 PM (Mon-Sun)',
	pic: 'https://content2.jdmagicbox.com/comp/chandigarh/c4/0172px172.x172.140927134227.w7c4/catalogue/haldirams-derabassi-zirakpur-2vs2.jpg',
	map: "https://www.google.co.in/maps/place/Haldiram's+Restaurant/@30.5632875,76.8265906,17z/data=!3m1!4b1!4m5!3m4!1s0x390fbffc93e15c55:0xef9cf879e78ad3a9!8m2!3d30.5632829!4d76.8287793",
	bestDish: {
		name: 'Kulchas',
		image: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wugg0mkvomrb9qsdtjqc'
	},
	image: 'https://lh5.googleusercontent.com/-70NbtsilplU/WOG-DPd9GqI/AAAAAAAATjY/R6F1GopxL6cSbYPrwHd5NkfZb5VbPx0TwCLIB/w408-h306-k-no/'
},
{
	name: 'Pyramid Cafe Lounge',
	address: 'Hotel Puran Palace, 167, Vijay Rattan Chowk, Ambala Cant, Ambala, Haryana 133001',
	location: 'Vijay Rattan Chowk',
	category: 'Casual Dining, Bar',
	vote: '3.8',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '10 AM to 12 AM (Mon-Sun)',
	pic:'http://www.pyramidcafe.in/images/image2.jpg',
	map: "https://www.google.co.in/maps/place/Pyramid+Cafe+Lounge/@30.3395409,76.8363605,17z/data=!3m1!4b1!4m5!3m4!1s0x390fb61796f01cc3:0x43d663f8aad44c97!8m2!3d30.3395363!4d76.8385492",
	bestDish: {
		name: 'Linguini',
		image: 'https://s-media-cache-ak0.pinimg.com/originals/c2/c5/b5/c2c5b527c77a33f53a1a48a2530c2a90.jpg'
	},
	image: 'https://lh4.googleusercontent.com/proxy/uY-meqcL2f0uPfD6Wv96Kjo4L2ja2IBZaNJvI59q8b_D80Z5JtjYdS4h5dCnzi2paq9llrtO8_JCl7fCw73rwnCmR_V_OqtmetTb6orXbbYZL8TsCm4tJO5j0kV61OGj4-8HmYuKblY4z5DhyCcMkSzfbEsPoQ=w408-h326-k-no'
},
{
	name: 'Hot Millions',
	address: '197 KM Stone, National Highway 1, GT Road, Nanhera, Ambala Cantt, Haryana 133001',
	location: 'National Highway 1',
	category: 'Quick Bites',
	vote: '4.2',
	cuisines: 'North Indian, South Indian, Chinese, Fast Food',
	cost: '700',
	hours: '11 AM to 11 PM (Mon-Sun)',
	pic:'https://content2.jdmagicbox.com/comp/ambala/b8/9999px171.x171.091211105802.x1b8/catalogue/hot-millions-restaurant-ambala-cantt-ambala-62c6b.jpg',
	map:"https://www.google.co.in/maps/place/Hot+Millions/@30.3396149,76.8035295,13z/data=!4m8!1m2!2m1!1shot+million,+Ambala,+Haryana!3m4!1s0x390fb6358c45af9f:0xb78afba4f052fb86!8m2!3d30.3070058!4d76.8427445",
	bestDish: {
		name: 'Chicken Chowmein',
		image: 'https://imgcld.yatra.com/ytimages/image/upload/w_452,h_285,c_fill,g_auto,q_auto,f_jpg/v1469086602/General_chicken_chowmein_best_places_to_eat.jpg'
	},
	image: 'https://lh3.googleusercontent.com/proxy/BxEjlVn_vGNmg4tfFiaLPSgLuwM-P7u4KQPofGXFGd3FeT3ZnsSi9_GUeCb5bBwNSgtc17sAuTZ8YE8nv2fUC5ZzR5xIiMoPdICGQDs-tG1b5Z-aDmRA3dM70DRX-xuH79o99u2JJsruIWV6LeaVDWr__aiUn-U=w408-h304-k-no'
},
{
	name: 'KFC',
	address: '133001, Sena Nagar, Dholkot, Ambala Cantt, Haryana 133001',
	location: 'Dholkot',
	category: 'Quick Bites',
	vote: '3.4',
	cuisines: 'Fast Food',
	cost: '500',
	hours: '11 AM to 11 PM (Mon-Sun)',
	pic:'http://www.jaggicitycenter.com/jaggi-admin/category_gallery/images/gallery/81125442editgalleryjaggicitycenter1.jpg',
	map: "https://www.google.co.in/maps/place/KFC/@30.3678352,76.7976928,17z/data=!3m1!4b1!4m5!3m4!1s0x390fc84909b942f9:0xd505b94668f9a45b!8m2!3d30.3678306!4d76.7998815",
	image: 'https://lh4.googleusercontent.com/-tqy7RYlPTZk/WR_CuttVmUI/AAAAAAAAaCU/vujqhJBI8sMXgQTFbSHJzEJaJR5O5HdygCLIB/w415-h200-k-no/',
	bestDish: {
		name: 'Cheesy Crunch',
		image: 'https://sg.everydayonsales.com/wp-content/uploads/2015/09/KFC-New-Cheesy-Crunch-Burger.png'
	}
},
{
	name: 'Shri Ratnam',
	address: 'Grand Trunk Road (NH-1), Dholkot, Ambala Cantt, Haryana 133001',
	location: 'Dholkot',
	category: 'Casual Dining',
	vote: '3.6',
	cuisines: 'South Indian, North Indian, Chinese',
	cost: '2200',
	hours: '4 AM to 12 AM (Mon-Sun)',
	pic:'http://images.mydala.com/uploads/event/2015-09-04/242119/242119_1.jpg',
	map:"https://www.google.co.in/maps/place/Shri+Ratnam+Filling+Station/@30.3713937,76.763505,13z/data=!4m8!1m2!2m1!1sSHRI+RATNHAM,+Ambala+Cantt,+Haryana!3m4!1s0x390fc848a3db8f71:0x78dabb04c21153be!8m2!3d30.3707387!4d76.7984107",
	bestDish: {
		name: 'Masala Dosa',
		image: 'https://b.zmtcdn.com/data/pictures/chains/0/9670/31bd3e7f9305e1a1c85b88c58fc52a22_featured_v2.jpg'
	},
	image: 'http://images.mydala.com/uploads/event/2015-09-04/242119/242119_1.jpg'
},
{
	name: 'Clove 99',
	address: '99, The Mall, Jagadhari Road, Ambala Cantt, Ram Nagar Colony, Ambala, Haryana 133001',
	location: 'The Mall, Jagadhari Road',
	category: 'Casual Dining',
	vote: '4.0',
	cuisines: 'Modern Indian, Chinese',
	cost: '900',
	hours: '11 AM to 11 PM (Mon-Sun)',
	pic: 'https://lh3.googleusercontent.com/-Se1UqjPe2uQ/WKTHBacAG3I/AAAAAAAAEvw/m-JI-gTKhCkkuO-Ecx0Q021EKvtJ95BiwCLIB/w600-k/',
	map:"https://www.google.co.in/maps/place/CLOVE+99/@30.3494671,76.8302414,17z/data=!3m1!4b1!4m5!3m4!1s0x390fb625d22aaa47:0xb22ad6f62b220f7!8m2!3d30.3494625!4d76.8324301",
	bestDish: {
		name: 'Brownie',
		image: 'http://www.thesassycook.com/wp-content/uploads/2015/03/best-brownies-recipe-ever.jpg'
	},
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/32/67/ee/getlstd-property-photo.jpg'
},
{
	name: 'Cafe Royal',
	address: 'Jaggi City Centre, Sena Nagar Crossing, Dhulkot, Ambala, Haryana 134003',
	location: 'Sena Nagar Crossing',
	category: 'Casual Dining, Bar',
	vote: '3.9',
	cuisines: 'Modern Indian, Continental, Chinese',
	cost: '1200',
	hours: '11 AM to 11 PM (Mon-Sun)',
	pic:'https://media-cdn.tripadvisor.com/media/photo-s/0f/b5/8d/29/cafe-royal-is-now-open.jpg',
	map: "https://www.google.co.in/maps/place/Cafe+Royal/@30.3679758,76.7977183,17z/data=!3m1!4b1!4m5!3m4!1s0x390fb62259e759c9:0xa7b90c62ed65900b!8m2!3d30.3679712!4d76.799907",
	bestDish: {
		name: 'Pizza, Paneer Butter Masala',
		image: 'https://imgcld.yatra.com/ytimages/image/upload/w_452,h_285,c_fill,g_auto,q_auto,f_jpg/v1465968149/General_pizza_best_places_to_eat3.jpg'
	},
	image: 'https://lh6.googleusercontent.com/-wXpJQx-PpuE/VqXo3DR282I/AAAAAAAAAAk/yx26Quk_NlIBOJmVULTFBWV0_3b29Y08gCJkC/w160-h160-k-no/'
}]

$scope.gl = 0;
			$scope.toggle_gl=function(){
			$scope.gl = 1-$scope.gl;
			}

	$scope.restaurant = restaurants[$routeParams.id - 1]; //storing the value of the restaurant in the ith position in $scope.restaurant
  $scope.ingredients = [];
	$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}' //string concatenation used here
		$http({
					//POST request to Clarifai
	        'method': 'POST',  //type of METHOD is post(as it sends data in secure manner )
					'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs', //API endpoint provided by clairifai
					'headers': { //headers which help us give extra information to the server
							'Authorization': 'Key bf8d613539574129ac92dab586a67dc3', //here we write your API-KEY value in this format: 'Key MY-API-KEY'
							'Content-Type': 'application/json' //this tells the browser in which format are we sending the data
						},
					'data': data
				}).then(function (response) {
								var ingredients = response.data.outputs[0].data.concepts; //storing the ingredient array we got from the server in ingredients variable.
								for (var i =0;i < ingredients.length;i++) { // looping through the ingredient Array
										$scope.ingredients.push(ingredients[i].name);//building your HTML code inside the ingredient variable string
								}
								grocerylist = $scope.ingredients; //ingredients will go grocerylist
								}, function (xhr) { //if not successfully completed this function runs
									console.log(xhr);
								})
			}
	})

	// Controller for todolist page
 foodieApp.controller("listController", function($scope) {
	 		$scope.grocery = []; // array to show all list
			$scope.grocerylist = grocerylist;
 			$scope.gl=1;
 			//An array of object created to keep track of which item has been bought and which not
 			for (var i = 0; i < grocerylist.length; i++) {
 				var item = {
 					id: i,
 					name: grocerylist[i],
 					buy: false //since it is not bought yet
 				};
 				$scope.grocery.push(item);//add items in grocery array one by one.
 			}
 			$scope.see = function() {
 				console.log($scope);
 				$scope.grocery[19].buy = "none";
 			}
 			$scope.toggle = function(num) {
 				// we need to change value dependin
 				$scope.grocery[num].buy = !$scope.grocery[num].buy;
 				$scope.$parent.grocery[num].buy = !$scope.$parent.grocery[num].buy
 			}
 			$scope.all_list =function(){
 				$scope.gl=1;
 			}
 			$scope.bought_item =function(){
 				$scope.gl=2;
 			}
 			$scope.not_bought =function(){
 				$scope.gl=3;
 			}
 			$scope.filter = function() {
 $scope.bought=[]; //array to show item bought
 $scope.notbought=[]; //array to show items not bought
 				for (var i = 0; i < $scope.grocery.length; i++) {
 					if ($scope.grocery[i].buy) { //if item is bought it will be added/pushed in bought array
 						$scope.bought.push($scope.grocery[i]);
 					} else { //else item is not bought it will be added/pushed in notbought array
 						$scope.notbought.push($scope.grocery[i]);
 					}
 				}
 			}
 })
