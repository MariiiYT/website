function Password()
{
    var word = 'banana'
    var password = document.getElementById("password").value;

    var accessGrantedLink = document.getElementById("link").hidden = true;
    for(var i = 0; i < word.length;i++){
        if(password == word)
        {
            showGame();
        }

        if(password != word)
        {
            console.log("you suck");
        }
    }
}

function showGame()
{
    console.log("boom.");
    var accessGrantedLink = document.getElementById("link").hidden = false;
}
