import '../css/footer.css'
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to ="/" className="nav-link active" >Home</Link></li>
                            <li><Link to ="/members" className="nav-link active" >Members</Link></li>
                            <li><Link to ="/about" className="nav-link active" >About</Link></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Locations</h3>
                        <ul>
                            <li><a href="#">Meteor City</a></li>
                            <li><a href="#">Yorknew City</a></li>
                            <li><a href="#">Black Whale</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Phantom Troupe</h3>
                        <p>The Phantom Troupe (幻げん影えい旅りょ団だん, Gen'ei Ryodan), sometimes just called the Troupe (旅りょ団だん, Ryodan), is an infamous band of diabolical thieves with Class-A bounties. The group is also known as the "Spider" (蜘蛛クモ, Kumo) and its members the "Spiders", most of whom hail from Meteor City.</p>
                    </div>
                    
                </div>
                <p class="copyright">Phantom Troupe © 2023</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer;