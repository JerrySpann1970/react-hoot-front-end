import { useState, useEffect } from 'react';
import * as hootService from '../../services/hootService';
import { useParams } from 'react-router';

const HootDetails = () => {
    const [hoot, setHoot] = useState(null);
    const { hootId } = useParams();

    useEffect(() => {
        const fetchHoot = async () => {
            const hootData = await hootService.show(hootId);
            setHoot(hootData);
        };
        fetchHoot();
    }, [hootId]);

    console.log('hoot state:', hoot);
    
    return <main>Hoot Details</main>;
};

export default HootDetails;