import './card.style.css'

const card = (props) => {
    const {monster} = props
    const {id,name,email} = monster
    return(
        <div className = 'card-container'>
            <img 
            alt = 'monster'
            src={`https://robohash.org/${id}?set=set2&size=180x180`} />

            <h2> {name} </h2>
            <p> {email} </p>

        </div>
    )
}
 
export default card