async function getData(major) {
    let response = await fetch('cit5students.json');

    if (response.ok) {
        let data = await response.json();
            console.log(data);
        majorData = data.filter(student => student.major === major);
        console.log(majorData);

        let template = document.getElementById('text-template').innerHTML;
        let compiled = Handlebars.compile(template);
        let generatedHTML = compiled({rows: majorData});
        document.getElementById('display').innerHTML = generatedHTML;
    
    } 
    else {
        document.querySelector('#display').innerHTML = "Error: " + response.status;
    }

}