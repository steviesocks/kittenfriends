import React from 'react';
import Card from './Card';

const CardList = ({ kittens }) => {
	const cardsArray = kittens.map((user,i) => {
		return <Card key={i} id={kittens[i].id} name={kittens[i].name} email={kittens[i].email}/>
	});
	return (
		<div>
			{cardsArray}
		</div>	
	);
}
export default CardList;