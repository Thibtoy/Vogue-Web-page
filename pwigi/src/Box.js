import React from 'react';

export default class Box extends React.Component {
	constructor() {
		super();
		this.state = {
			Tittle: [],
			image: [], 
			presentation: [],
		}
	}

	componentWillMount() {
		fetch('http://localhost:3000/')
		.then(responses => {
			console.log(responses);
			return results.json();
		}).then(data => {
			let pictures = data.results.map((pic) => {
				return (
					<h2 key={pic.results}>{pic.articles_name}</h2>
					)
			})
			this.setState( {Tittle: pictures});
			console.log("tittle", this.state.Tittle)
		})
	}

    render () {
        return (
            <div className="Box">
            	{this.state.Tittle}
            </div>
        )
    }
}

//<img src="blablabla.png"></img>
