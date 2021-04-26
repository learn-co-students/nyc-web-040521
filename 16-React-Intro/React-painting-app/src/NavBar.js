const NavBar = (props) => {
    return(
    <div className={`ui inverted ${props.color} menu`}>
     <a className='item'>
     <h2 className="ui header">
      <i className="paint brush icon"></i>
       <div className="content">
         Painting App
      </div>
      </h2>
    </a>
    </div> 
    )
}

export default NavBar