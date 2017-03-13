const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=3d61a0c2a438a06200ff71589ef325af&format=json'

function getArtists(){
	return fetch(URL)
		.then(response => response.json())
		.then(data => data.topartists.artist)
		.then(artists => artists.map(artist => {
			return {
				name: artist.name,
				image: artist.image[3]['#text'],
				likes: artist.listeners
			}
		}))
	
}

export { getArtists }