const url = 'https://realtor.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
	}
};
console.log("affa")
async function f(){
    console.log('ffaf')
try  {
    console.log('ffafaddaad')
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
console.log('fwwfaf')
}
f()
console.log("affawwww")