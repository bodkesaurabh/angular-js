app.config(function($routeProvider)
{
    $routeProvider
    .when("/",
    { templateUrl : "main.html"})
    .when("/red",
    { templateUrl : "red.html"})
    .when("/green",
    { templateUrl : "green.html"})
    .when("/blue",
    { templateUrl : "blue.html"})
    .when("/paris",
    {
        templateUrl : "paris.html",
        controller : "parisCtrl"
    })
    .when("/tomato",
    {
        template : `<h1> tomato </h1>
        <p>Tomatoes contain 95% water </p>`

     })
     .otherwise
     {
         template : "<h3> sorry! no selection </h3>"
     }
   
});