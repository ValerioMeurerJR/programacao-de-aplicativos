export {};

declare global {
    interface Window {
        addToEnter: (event: KeyboardEvent) => void;
        addTarefa: () => void;
    }

}