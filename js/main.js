var ourRequest = new XMLHttpRequest()
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json')

ourRequest.onload = function (){
	if(ourRequest.status >= 200 && ourRequest.status < 400){
		var data = JSON.parse(ourRequest.responseText)
		createHTML(data)
	}else{
		console.log('server returned an error!!')
	}
}

ourRequest.onerror = function (){
	console.log('error!!')
}

ourRequest.send()

Handlebars.registerHelper('calculateAge', function(birthYear){
	var age = new Date().getFullYear() - birthYear
	
	if(age > 0){
		return age + ' years old.'
	}else{
		return 'less than a year old'
	}
})

function createHTML(data){
	var rawTemplate = document.getElementById('tomjor').innerHTML
	var combine = Handlebars.compile(rawTemplate)
	var ourGeneratedHTML = combine(data)

	var petsContainer = document.getElementById('pets')
	petsContainer.innerHTML = ourGeneratedHTML
}

