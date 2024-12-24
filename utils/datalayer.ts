export interface DataLayerEvent {
  event: string;
  category?: string;
  action?: string;
  [key: string]: string | number | boolean | undefined;
}

export const pushToDataLayer = (event: DataLayerEvent) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(event);
  }
};
