import img1 from "./imgs/logo-sushi.jpg";

function Card(){
    return(
        <div>
            <img src={img1} alt="profile image" style={{height:"200px", width:"200px"}}/>
            <h2>SUSHI MO TO</h2>
            <p>Sushi mo to is a japanese restaurant offering delicous japanese food</p>
        </div>
    );
}

export default Card;