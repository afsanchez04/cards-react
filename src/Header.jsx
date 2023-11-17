import './header.css'

function Header (props){

    return (
        <>
            <h1 className="miCard" style={{color: props.color}}>Estamos aprendiendo {props.lenguaje}</h1>
        </>
    )

}

export default Header