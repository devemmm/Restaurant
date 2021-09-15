import {useState, useEffect} from 'react';
import yelp from '../api/yelp'

export default ()=>{
    const [result, setResult] = useState([])
    const [errorMesage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm)=>{
        try {
            const result = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResult(result.data.businesses)
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('Something went wrong')
        }
        
    };

    useEffect(()=>{
        searchApi('pasta')
    }, []);

    return [searchApi, result, errorMesage];
}
