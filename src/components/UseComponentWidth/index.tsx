import {useEffect, useRef, useState} from "react";

/*
* This custom hook uses a ref to calculate the width and height of a DOM element.
*
* Outputs:
*
* componentWidth: weight of a DOM element
* componentHeight : height of a DOM element
*/
interface UseComponentWidthResult {
    componentWidth: number;
    componentHeight: number;
    componentRef: React.RefObject<HTMLDivElement>;
}

const useComponentWidth = (): UseComponentWidthResult => {
    const [componentWidth, setComponentWidth] = useState(0);
    const [componentHeight, setComponentHeight] = useState(0);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (componentRef.current) {
                const width = componentRef.current.offsetWidth;
                const height = componentRef.current.offsetHeight;
                setComponentWidth(width);
                setComponentHeight(height);
            }
        };

        updateWidth();

        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return {componentWidth, componentHeight, componentRef};
}

export default useComponentWidth