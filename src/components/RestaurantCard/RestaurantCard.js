import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {

    const { restoData } = props;
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = restoData?.data;

    return (
        <div className="resto-card">
            <img className='food-img' src={CDN_URL + restoData.data.cloudinaryImageId} alt="This is a food image" />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;