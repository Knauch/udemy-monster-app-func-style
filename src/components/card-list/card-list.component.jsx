import { Component } from 'react';
import Card from '../card/card.component'
import './card-list.styles.css';

class CardList extends Component {

render() {
    const { monsters } = this.props;

    return (
        <div className="card-list">
            {monsters.map( (element) => {
                
                return (
                    <Card element ={element}/>
                )
                    
                })
            }
        </div>
    )
}

}

export default CardList;