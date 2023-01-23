function receivesAFunction(spy){
return spy();

}
receivesAFunction(function (){return "passing a function"});


function returnsANamedFunction(nf){
    function namedf() {return "named function";}

    return namedf;

}
returnsANamedFunction(namef);

function returnsAnAnonymousFunction(af){

  
    return function(){console.log("");};

}
returnsAnAnonymousFunction();