import { Observable } from 'rxjs/Observable';
/**
 * @private
 * You can listen to these events where appropriate
 */
export declare const GoogleMapsEvent: {
    MAP_CLICK: string;
    MAP_LONG_CLICK: string;
    MY_LOCATION_CHANGE: string;
    MY_LOCATION_BUTTON_CLICK: string;
    INDOOR_BUILDING_FOCUSED: string;
    INDOOR_LEVEL_ACTIVATED: string;
    CAMERA_CHANGE: string;
    CAMERA_IDLE: string;
    MAP_READY: string;
    MAP_LOADED: string;
    MAP_WILL_MOVE: string;
    MAP_CLOSE: string;
    MARKER_CLICK: string;
    OVERLAY_CLICK: string;
    INFO_CLICK: string;
    MARKER_DRAG: string;
    MARKER_DRAG_START: string;
    MARKER_DRAG_END: string;
};
/**
 * @private
 */
export declare const GoogleMapsAnimation: {
    BOUNCE: string;
    DROP: string;
};
/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```
 * import { GoogleMap, GoogleMapsEvent } from 'ionic-native';
 *
 * ...
 *
 * // somewhere in your component
 * let map = new GoogleMap('elementID');
 *
 * map.on(GoogleMapsEvent.MAP_READY).subscribe(() => console.log('Map is ready!'));
 * ```
 */
export declare class GoogleMap {
    _objectInstance: any;
    /**
     * Checks if a map object has been created.
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the plugin is available.
     */
    static isAvailable(): Promise<boolean>;
    constructor(elementId: string, options?: any);
    on(event: any): Observable<any>;
    one(event: any): Promise<any>;
    setDebuggable(isDebuggable: boolean): void;
    setClickable(isClickable: boolean): void;
    /**
     * Get the position of the camera
     */
    getCameraPosition(): Promise<CameraPosition>;
    /**
     * Get the location of the user
     */
    getMyLocation(): Promise<MyLocation>;
    /**
     * Get the visible region
     */
    getVisibleRegion(): Promise<VisibleRegion>;
    showDialog(): void;
    closeDialog(): void;
    getLicenseInfo(): Promise<string>;
    setCenter(latLng: GoogleMapsLatLng): void;
    setZoom(zoomLevel: number): void;
    setMapTypeId(typeId: string): void;
    setTilt(tiltLevel: number): void;
    animateCamera(animateCameraOptions: AnimateCameraOptions): void;
    moveCamera(cameraPosition: CameraPosition): void;
    setMyLocationEnabled(enabled: boolean): void;
    setIndoorEnabled(enabled: boolean): void;
    setTrafficEnabled(enabled: boolean): void;
    setCompassEnabled(enabled: boolean): void;
    setAllGesturesEnabled(enabled: boolean): void;
    addMarker(options: GoogleMapsMarkerOptions): Promise<GoogleMapsMarker>;
    addCircle(options: GoogleMapsCircleOptions): Promise<GoogleMapsCircle>;
    addPolygon(options: GoogleMapsPolygonOptions): Promise<GoogleMapsPolygon>;
    addPolyline(options: GoogleMapsPolylineOptions): Promise<GoogleMapsPolyline>;
    addTileOverlay(options: GoogleMapsTileOverlayOptions): Promise<GoogleMapsTileOverlay>;
    addGroundOverlay(options: GoogleMapsGroundOverlayOptions): Promise<GoogleMapsGroundOverlay>;
    addKmlOverlay(options: GoogleMapsKmlOverlayOptions): Promise<GoogleMapsKmlOverlay>;
    setDiv(domNode: HTMLElement): void;
    setVisible(visible: boolean): void;
    setOptions(options: any): void;
    setBackgroundColor(backgroundColor: string): void;
    setPadding(top?: number, right?: number, bottom?: number, left?: number): void;
    clear(): void;
    refreshLayout(): void;
    fromLatLngToPoint(latLng: GoogleMapsLatLng, point: any): Promise<any>;
    fromPointToLatLng(point: any, latLng: GoogleMapsLatLng): Promise<GoogleMapsLatLng>;
    toDataURL(): Promise<any>;
    remove(): void;
    panBy(): void;
}
/**
 * @private
 */
export interface AnimateCameraOptions {
    target?: GoogleMapsLatLng;
    tilt?: number;
    zoom?: number;
    bearing?: number;
    duration?: number;
}
/**
 * @private
 */
export interface CameraPosition {
    target?: GoogleMapsLatLng;
    zoom?: number;
    tilt?: number;
    bearing?: number;
}
/**
 * @private
 */
export interface MyLocation {
    latLng?: GoogleMapsLatLng;
    speed?: number;
    time?: string;
    bearing?: number;
}
/**
 * @private
 */
export interface VisibleRegion {
    northeast?: any;
    southwest?: any;
}
/**
 * @private
 */
export interface GoogleMapsMarkerOptions {
    icon?: any;
    title?: string;
    snippet?: string;
    position?: GoogleMapsLatLng;
    infoWindowAnchor?: number[];
    draggable?: boolean;
    flat?: boolean;
    rotation?: number;
    visible?: boolean;
    styles?: any;
    animation?: string;
    zIndex?: number;
}
/**
 * @private
 */
export interface GoogleMapsMarkerIcon {
    url?: string;
    size?: {
        width?: number;
        height?: number;
    };
}
/**
 * @private
 */
export declare class GoogleMapsMarker {
    private _objectInstance;
    constructor(_objectInstance: any);
    addEventListener(event: any): Observable<any>;
    isVisible(): boolean;
    setVisible(visible: boolean): void;
    getHashCode(): string;
    remove(): void;
    setOpacity(alpha: number): void;
    getOpacity(): number;
    setZIndex(): void;
    setIconAnchor(x: number, y: number): void;
    setInfoWindowAnchor(x: number, y: number): void;
    setDraggable(draggable: boolean): void;
    isDraggable(): boolean;
    setFlat(flat: boolean): void;
    setIcon(icon: GoogleMapsMarkerIcon): void;
    setTitle(title: string): void;
    getTitle(): string;
    setSnippet(snippet: string): void;
    getSnippet(): string;
    setRotation(rotation: number): void;
    getRotation(): number;
    showInfoWindow(): number;
    hideInfoWindow(): number;
    setPosition(latLng: GoogleMapsLatLng): void;
    getPosition(): Promise<GoogleMapsLatLng>;
    getMap(): GoogleMap;
    setAnimation(animation: string): void;
}
/**
 * @private
 */
export interface GoogleMapsCircleOptions {
    center?: GoogleMapsLatLng;
    radius?: number;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
    visible?: boolean;
    zIndex?: number;
}
/**
 * @private
 */
export declare class GoogleMapsCircle {
    private _objectInstance;
    constructor(_objectInstance: any);
    addEventListener(event: any): Observable<any>;
    getCenter(): GoogleMapsLatLng;
    getRadius(): number;
    getStrokeColor(): string;
    getVisible(): boolean;
    getZIndex(): number;
    remove(): void;
    setCenter(latLng: GoogleMapsLatLng): void;
    setFillColor(fillColor: string): void;
    setStrokeColor(strokeColor: string): void;
    setStrokeWidth(strokeWidth: number): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
    setRadius(radius: number): void;
    getMap(): GoogleMap;
}
/**
 * @private
 */
export interface GoogleMapsPolylineOptions {
    points?: Array<GoogleMapsLatLng>;
    visible?: boolean;
    googledesic?: boolean;
    color?: string;
    width?: number;
    zIndex?: number;
}
/**
 * @private
 */
export declare class GoogleMapsPolyline {
    private _objectInstance;
    constructor(_objectInstance: any);
    addEventListener(event: any): Observable<any>;
    getPoints(): Array<GoogleMapsLatLng>;
    getCOlor(): string;
    getWidth(): number;
    getGeodesic(): boolean;
    getZIndex(): number;
    remove(): void;
    setPoints(points: Array<GoogleMapsLatLng>): void;
    setColor(color: string): void;
    setWidth(width: number): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
    setGeoDesic(geoDesic: boolean): void;
    getMap(): GoogleMap;
}
/**
 * @private
 */
export interface GoogleMapsPolygonOptions {
    points?: Array<GoogleMapsLatLng>;
    geodesic?: boolean;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
    visible?: boolean;
    zIndex?: number;
    addHole?: Array<GoogleMapsLatLng>;
}
/**
 * @private
 */
export declare class GoogleMapsPolygon {
    private _objectInstance;
    constructor(_objectInstance: any);
    addEventListener(event: any): Observable<any>;
    getPoints(): Array<GoogleMapsLatLng>;
    getStrokeColor(): string;
    getFillColor(): string;
    getStrokeWidth(): number;
    getGeodesic(): boolean;
    getVisible(): boolean;
    getZIndex(): boolean;
    remove(): void;
    setPoints(points: Array<GoogleMapsLatLng>): void;
    setStrokeColor(strokeColor: string): void;
    setFillColor(fillColor: string): void;
    setStrokeWidth(strokeWidth: number): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
    setGeodesic(geodesic: boolean): void;
}
/**
 * @private
 */
export interface GoogleMapsTileOverlayOptions {
    titleUrilFormat?: string;
    visible?: boolean;
    zIndex?: number;
    tileSize?: number;
    opacity?: number;
}
/**
 * @private
 */
export declare class GoogleMapsTileOverlay {
    private _objectInstance;
    constructor(_objectInstance: any);
    getVisible(): boolean;
    setVisible(visible: boolean): void;
    getFadeIn(): boolean;
    setFadeIn(fadeIn: boolean): void;
    getZIndex(): number;
    setZIndex(zIndex: number): void;
    getOpacity(): number;
    setOpacity(opacity: number): void;
    clearTileCache(): void;
    remove(): void;
}
/**
 * @private
 */
export interface GoogleMapsGroundOverlayOptions {
    url?: string;
    bounds?: Array<GoogleMapsLatLng>;
    visible?: boolean;
    opacity?: number;
    bearing?: number;
    zIndex?: number;
}
/**
 * @private
 */
export declare class GoogleMapsGroundOverlay {
    private _objectInstance;
    constructor(_objectInstance: any);
    setBearing(bearing: number): void;
    getBearing(): number;
    setOpacity(opacity: number): void;
    getOpacity(): number;
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    setImage(image: string): void;
    remove(): void;
}
/**
 * @private
 */
export interface GoogleMapsKmlOverlayOptions {
    url?: string;
    preserveViewport?: boolean;
    animation?: boolean;
}
/**
 * @private
 */
export declare class GoogleMapsKmlOverlay {
    private _objectInstance;
    constructor(_objectInstance: any);
    remove(): void;
    getOverlays(): Array<GoogleMapsPolyline | GoogleMapsPolygon | GoogleMapsMarker>;
}
/**
 * @private
 */
export declare class GoogleMapsLatLngBounds {
    southwestOrArrayOfLatLng: GoogleMapsLatLng | GoogleMapsLatLng[];
    northeast: GoogleMapsLatLng;
    private _objectInstance;
    constructor(southwestOrArrayOfLatLng: GoogleMapsLatLng | GoogleMapsLatLng[], northeast?: GoogleMapsLatLng);
    toString(): string;
    toUrlValue(precision?: number): string;
    extend(LatLng: GoogleMapsLatLng): void;
    contains(LatLng: GoogleMapsLatLng): boolean;
    getCenter(): GoogleMapsLatLng;
}
/**
 * @private
 */
export declare class GoogleMapsLatLng {
    lat: number;
    lng: number;
    private _objectInstance;
    constructor(lat: number, lng: number);
    equals(other: GoogleMapsLatLng): boolean;
    toString(): string;
    toUrlValue(precision?: number): string;
}
/**
 * @private
 */
export interface GeocoderRequest {
    address?: string;
    position?: {
        lat: number;
        lng: number;
    };
}
/**
 * @private
 */
export interface GeocoderResult {
    position?: {
        lat: number;
        lng: number;
    };
    subThoroughfare?: string;
    thoroughfare?: string;
    locality?: string;
    adminArea?: string;
    postalCode?: string;
    country?: string;
}
/**
 * @private
 */
export declare class Geocoder {
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @returns {Promise<GeocoderResult[]>}
     */
    static geocode(request: GeocoderRequest): Promise<GeocoderResult[]>;
}
