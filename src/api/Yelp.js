import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1T4MNEdl4iLL4GwXYxLkvOOKKqhO8WSfW-eEOCZGedDR1VlLbOe7L_Hk937ESZudN1GusZb1eZg0oc-4CCSGEieQKe31MixwLEL9nzl8LorQKPNUQN-2ukBqxOIeXnYx'
    }
});

