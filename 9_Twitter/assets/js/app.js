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
    refresh();
    eventos();
}

function eventos()
{
    eleForm_formulario.addEventListener('submit', newTweet);
    eleDiv_listaTweets.addEventListener('click', deleteTweet);
}

function newTweet()
{
    let txtNewTweet=eleTextArea_tweet.value;
    eleTextArea_tweet.value="";
    if(txtNewTweet == '')
        return false;

    addTweet(txtNewTweet, true);
}

function refresh()
{
    let maxLength=tweets.length;
    for(let i=0; i < maxLength; i++)
    {
        let txtNewTweet=tweets[i];
        addTweet(txtNewTweet, false);
    }
}

function addTweet(txtNewTweet, check_addToLocalStorage)
{
    let eleLi_newTweet=document.createElement('li');
    eleLi_newTweet.innerHTML=txtNewTweet;

    let eleAnchor_borrar=document.createElement('a');
    eleAnchor_borrar.classList='borrar-tweet';
    eleAnchor_borrar.innerText='X';
    
    eleLi_newTweet.appendChild(eleAnchor_borrar);
    eleDiv_listaTweets.appendChild(eleLi_newTweet);

    if(check_addToLocalStorage)
        addTweetToLocalStorage(txtNewTweet);
}

function addTweetToLocalStorage(txtNewTweet)
{
    tweets[tweets.length]=txtNewTweet;
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function deleteTweet(eventSource) 
{
    if(eventSource.target.className == 'borrar-tweet') 
    {
        eventSource.target.parentElement.remove();
        let txtEventSource=eventSource.target.parentElement.innerText;
        txtEventSource=txtEventSource.substring(0, txtEventSource.length-1);
        for(let i=0; i < tweets.length; i++)
        {
            let tweet=tweets[i];
            if(txtEventSource == tweet)
            {
                tweets.splice(i, 1);
                localStorage.setItem('tweets', JSON.stringify(tweets));
            }
        }
    } 
}

function getTweetsFromLocalStorage() 
{
    if(localStorage.getItem('tweets') == null) 
        tweets=[]; 
    else
        tweets=JSON.parse(localStorage.getItem('tweets'));
    return tweets;
}