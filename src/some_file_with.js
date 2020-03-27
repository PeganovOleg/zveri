const progress = document.querySelector('.progress-bar')
const progress2 = document.querySelector('.progress-bar2')
const progress3 = document.querySelector('.progress-bar3')

let cats =0;
let dogs =0;
let popugi =0;
let _spisok="";


const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')
const ES = new EventSource(url, header)
const ES2 = new EventSource(url, header)
const ES3 = new EventSource(url, header)
const ES4 = new EventSource(url, header)


ES4.onmessage = ({ data }) => {
_spisok=data;
var person = JSON.parse(_spisok);
cats=person.cats;
dogs=person.dogs;
popugi=person.parrots

} 

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}


ES.onmessage = message => {
    progress.style.cssText = `width: ${message.data}%;`
    progress.textContent = `${message.data}%`
    console.log(message.data)

}

ES.onmessage = ({ data }) => {
	var coty=cats/100
    progress.style.cssText = `width: ${coty}%`
    progress.textContent = "КОТЫ:"+`${cats}`
    
} 



ES2.onerror = error => {
    ES2.readyState ? progress2.textContent = "Some error" : null;
}


ES2.onmessage = message => {
    progress2.style.cssText = `width: ${message.data}%;`
    progress2.textContent = `${message.data}%`
}

ES2.onmessage = ({ data }) => {
	var dogy=dogs/100
    progress2.style.cssText = `width: ${dogy}%`
    progress2.textContent = "СОБАКИ:"+`${dogs}`
} 



ES3.onerror = error => {
    ES3.readyState ? progress3.textContent = "Some error" : null;
}


ES3.onmessage = message => {
    progress3.style.cssText = `width: ${message.data}%;`
    progress3.textContent = `${message.data}%`
}

ES3.onmessage = ({ data }) => {
	var popug=popugi/100
    progress3.style.cssText = `width: ${popug}%`
    progress3.textContent = "ПОПУГАИ:"+`${popugi}`
} 


async function submit() 
{
        let response = await fetch('https://sf-pyw.mosyag.in/sse/vote/cats', {method: 'POST'});

      // сервер ответит подтверждением 
      let result = await response.json();
    alert(result.message);
    }

   async function submit2() 
{
        let response = await fetch('https://sf-pyw.mosyag.in/sse/vote/dogs', {method: 'POST'});



      // сервер ответит подтверждением 
     let result = await response.json();
    alert(result.message);
    } 

    async function submit3() {
     let response = await fetch('https://sf-pyw.mosyag.in/sse/vote/parrots', {method: 'POST'});
      // сервер ответит подтверждением 
      let result = await response.json();
    alert(result.message);
    }