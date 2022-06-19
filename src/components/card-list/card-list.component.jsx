import Card from '../card/card.component'
import './card-list.styles.css';

const CardList = ({monsters}) => (
        <div className="card-list">
            {monsters.map( (element) => {
                
                return (
                    <Card element ={element}/>
                )
                    
                })
            }
        </div>
    );




export default CardList;