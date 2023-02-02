import {Link} from 'react-router-dom';

function Header() {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
         <a class="navbar-brand" href="#">Phantom Troupe</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item">
               <Link to ="/" className="nav-link active" >Home</Link>
             </li>
             <li class="nav-item">
                <Link to ="/members" className="nav-link active" >Members</Link>
             </li>
             <li class="nav-item">
                <Link to ="/about" className="nav-link active" >About</Link>
             </li>
             
            
           </ul>
          
           
         </div>
       </div>
     </nav>
    )
}

export default Header;