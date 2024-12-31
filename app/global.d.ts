export {};

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}
