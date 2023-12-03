
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";

const useAOSInit = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    
};

export default useAOSInit;
