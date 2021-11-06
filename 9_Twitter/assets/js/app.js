let localStorage;
let eleForm_formulario;
let eleTextArea_tweet;
let eleDiv_listaTweets;
let tweets;

window.onload
{
    localStorage=window.localStorage;
    eleForm_formulario=document.getElementById('formulario');
    eleTextArea_tweet=document.getElementById('tweet');
    eleDiv_listaTweets=document.getElementById('lista-tweets');

    getTweetsFromLocalStorage();
    eventos();
}

function eventos()
{
    eleForm_formulario.addEventListener('submit', addTweet);
    eleDiv_listaTweets.addEventListener('click', deleteTweet);
}

function deleteTweet(eventSource) 
{
    if(eventSource.target.className == 'borrar-tweet') 
    {
        eventSource.target.parentElement.remove();
        localStorage.setItem('tweets', JSON.stringify(tweets));
    } 
}

function addTweet()
{
    let txtNewTweet=eleTextArea_tweet.value;
    eleTextArea_tweet.value="";
    if(txtNewTweet == '')
        return false;

    let eleLi_newTweet=document.createElement('li');
    eleLi_newTweet.innerHTML=txtNewTweet;

    let eleAnchor_borrar=document.createElement('a');
    eleAnchor_borrar.classList='borrar-tweet';
    eleAnchor_borrar.innerText='X';
    
    eleLi_newTweet.appendChild(eleAnchor_borrar);
    eleDiv_listaTweets.appendChild(eleLi_newTweet);

    addTweetToLocalStorage(txtNewTweet);
}

function addTweetToLocalStorage(txtNewTweet)
{
    tweets[tweets.lenght]=txtNewTweet;
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromLocalStorage() 
{
    if(localStorage.getItem('tweets') == null) 
        tweets=[]; 
    else
        tweets=JSON.parse(localStorage.getItem('tweets') );
    return tweets;
}