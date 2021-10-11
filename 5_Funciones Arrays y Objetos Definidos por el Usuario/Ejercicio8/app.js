function mostrarArray(unarray)
{
    let result=[];
    for(let i=0;i<unarray.length;i++)
    {
        if(typeof unarray[i] == 'string')
            result[i]='"'+unarray[i]+'"';
        else
            result[i]=unarray[i];
    }
    return result.join(', ');
}