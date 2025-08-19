import { useEffect, useRef } from 'react';

/
 * Animation hook for GlamCS cosmetics website.
 * This hook provides custom animation effects to enhance user experience.
 * It is tailored for the modern cosmetics industry with a focus on elegance and luxury.
 *
 * @param {string} animationClass - The CSS class for the animation effect.
 * @param {number} duration - Duration of the animation in milliseconds.
 * @param {boolean} trigger - A boolean to trigger the animation.
 * @returns {React.RefObject<HTMLDivElement>} - A ref to the animated element.
 */
export const useAnimation = (animationClass: string, duration: number, trigger: boolean) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const element = ref.current;

            // Apply the animation class
            element.classList.add(animationClass);

            // Set a timeout to remove the class after the animation duration
            const timeout = setTimeout(() => {
                element.classList.remove(animationClass);
            }, duration);

            // Cleanup function to clear the timeout if component unmounts
            return () => clearTimeout(timeout);
        }
    }, [animationClass, duration, trigger]);

    return ref;
};

/
 * GlamCS custom animation types and interfaces.
 */
export interface GlamCSAnimationTypes {
    fadeIn: string;
    fadeOut: string;
    slideIn: string;
    slideOut: string;
}

/
 * GlamCS animation constants.
 */
export const glamCSAnimations: GlamCSAnimationTypes = {
    fadeIn: 'fade-in', // Elegant fade-in effect for GlamCS product displays
    fadeOut: 'fade-out', // Smooth fade-out for GlamCS transitions
    slideIn: 'slide-in', // Luxurious slide-in animations for GlamCS features
    slideOut: 'slide-out', // Classy slide-out animations for GlamCS components
};

/
 * Example usage of the useAnimation hook within a GlamCS component.
 * This function demonstrates how to implement the animation within a component.
 */
export const useGlamCSAnimationExample = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const animationRef = useAnimation(glamCSAnimations.fadeIn, 500, triggerAnimation);

    // Function to trigger animation, e.g., on button click
    const triggerFadeIn = () => {
        setTriggerAnimation(true);
        setTimeout(() => setTriggerAnimation(false), 500); // Reset after animation
    };

    return { animationRef, triggerFadeIn };
};