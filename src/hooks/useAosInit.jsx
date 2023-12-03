import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const useAOSInit = () => {
    useEffect(() => {
        const initializeAOS = () => {
            Aos.init();
            Aos.refresh();
        };

        // Check if the screen width is greater than a certain threshold (e.g., 768 pixels)
        const screenWidth = window.innerWidth || document.documentElement.clientWidth;

        console.log("Screen Width:", screenWidth);

        if (screenWidth > 768) {
            console.log("Initializing AOS");
            initializeAOS();

            // Handle screen size changes and refresh AOS
            const handleResize = () => {
                const newScreenWidth = window.innerWidth || document.documentElement.clientWidth;
                console.log("New Screen Width:", newScreenWidth);
                
                if (newScreenWidth > 768) {
                    console.log("Refreshing AOS");
                    Aos.refresh();
                }
            };

            window.addEventListener('resize', handleResize);

            // Cleanup event listener on component unmount
            return () => {
            
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);
};

export default useAOSInit;
