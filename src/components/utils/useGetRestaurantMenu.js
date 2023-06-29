import { useEffect, useState } from "react";
import { MENU_API_URL } from '../utils/constants'

const useGetRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantMenu();
    }, [])

    const fetchRestaurantMenu = async () => {
        const result = await fetch(MENU_API_URL + resId);
        const finalJson = await result.json();
        setResInfo(finalJson.data);

    }

    return resInfo;
}

export default useGetRestaurantMenu;