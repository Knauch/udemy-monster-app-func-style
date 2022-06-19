import './card.styles.css';


const Card = ({element}) =>  {

        const {name, email, id} = element;
        return (
            <div className='card-container' key={id}>
                <img 
                    src={`https://robohash.org/${id}?set=set1&size=180x180`}
                    alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            )

}

export default Card;