let localStorage;
let people;
let eleInputText_name;
let eleInputText_job;
let eleInputText_age;
let eleButton_addPerson;
let eleTbody_people;

window.onload
{
    localStorage=window.localStorage;
    eleInputText_name=document.getElementById("name");
    eleInputText_job=document.getElementById("job");
    eleInputText_age=document.getElementById("age");
    eleButton_add=document.getElementById("btn-add");
    eleTbody_people=document.getElementById('grid').getElementsByTagName("tbody")[0];

    getPeopleFromLocalStorage();
    eventos();
}

function eventos() 
{
    eleButton_add.addEventListener('click', newPerson);
    eleTbody_people.addEventListener('click', deletePerson);
}

function newPerson()
{
    let name=eleInputText_name.value;
    let job=eleInputText_job.value;
    let age=eleInputText_age.value;

    addPerson(name, job, age);
}

function addPerson(name, job, age)
{
    if(name == "")
        return false;

    if(personExists(name))
    {
        let personFound=false;
        for(let i=0; i < people.length && personFound == false; i++)
        {
            let person=people[i];
            let name2=person["name"];
            if(name == name2)
            {
                personFound=true;
                people[i]["job"]=job;
                people[i]["age"]=age;
                localStorage.setItem('people', JSON.stringify(people));
            }
        }
    }
    else
    {
        let newPerson=
        {
            "name"  : name, 
            "job"   : job, 
            "age"   : age
        };
        addPersonToLocalStorage(newPerson);
    }
    getPeopleFromLocalStorage();
}

function addPersonToLocalStorage(newPerson)
{
    people[people.length]=newPerson;
    localStorage.setItem('people', JSON.stringify(people));
    getPeopleFromLocalStorage();
}

function deletePerson(eventSource)
{
    let personFound=false;
    if(eventSource.target.className == "delete-person")
    {
        let name=eventSource.target.parentElement.parentElement.getElementsByTagName("td")[0].innerText;
        for(let i=0; i < people.length && personFound == false; i++)
        {
            let person=people[i];
            let name2=person["name"];
            if(name == name2)
            {
                personFound=true;
                people.splice(i, 1);
                localStorage.setItem('people', JSON.stringify(people));
                getPeopleFromLocalStorage();
            }
        }
    }
}

function personExists(name)
{
    for(let i=0; i < people.length; i++)
    {
        let person=people[i];
        let name2=person["name"];
        if(name == name2)
            return true;
    }
    return false;
}

function getPeopleFromLocalStorage() 
{
    if(localStorage.getItem('people') == null) 
        people=[]; 
    else
        people=JSON.parse(localStorage.getItem('people'));

    refresh();
}

function refresh()
{
    let html=``;
    for(let i=0; i < people.length; i++)
    {
        let person=people[i];
        let name=person["name"];
        let job=person["job"];
        let age=person["age"];

        html+=`
        <tr>
            <td>`+name+`</td>
            <td>`+job+`</td>
            <td>`+age+`</td>
            <td><input class="delete-person" type="button" value="Remove"></td>
        </tr>`;
    }
    eleTbody_people.innerHTML=html;

    eleInputText_name.value="";
    eleInputText_job.value="";
    eleInputText_age.value="";
}