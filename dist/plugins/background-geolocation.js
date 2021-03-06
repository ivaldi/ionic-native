"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name BackgroundGeolocation
 * @description
 * This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
 * more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation
 *
 * @usage
 *
 * ```typescript
 * import { BackgroundGeolocation } from 'ionic-native';
 *
 *
 * // When device is ready :
 * platform.ready().then(() => {
 *
 *     // BackgroundGeolocation is highly configurable. See platform specific configuration options
 *     let config = {
 *             desiredAccuracy: 10,
 *             stationaryRadius: 20,
 *             distanceFilter: 30,
 *             debug: true, //  enable this hear sounds for background-geolocation life-cycle.
 *             stopOnTerminate: false, // enable this to clear background location settings when the app terminates
 *     };
 *
 *     BackgroundGeolocation.configure(config)
 *        .then((location) => {
 *             console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);
 *
 *             // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
 *             // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
 *             // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
 *             BackgroundGeolocation.finish(); // FOR IOS ONLY
 *         })
 *        .catch((error) => {
 *             console.log('BackgroundGeolocation error');
 *         });
 *
 *     // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
 *     BackgroundGeolocation.start();
 * }
 *
 * // If you wish to turn OFF background-tracking, call the #stop method.
 * BackgroundGeolocation.stop();
 *
 * ```
 */
var BackgroundGeolocation = (function () {
    function BackgroundGeolocation() {
    }
    /**
     * Configure the plugin.
     * Success callback will be called with one argument - Location object, which tries to mimic w3c Coordinates interface.
     * See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
     * Callback to be executed every time a geolocation is recorded in the background.
     *
     * Fail callback to be executed every time a geolocation error occurs.
     *
     * Options a json object of type Config
     */
    BackgroundGeolocation.configure = function (options) { return; };
    /**
     * Turn ON the background-geolocation system.
     * The user will be tracked whenever they suspend the app.
     */
    BackgroundGeolocation.start = function () { return; };
    /**
     * Turn OFF background-tracking
     */
    BackgroundGeolocation.stop = function () { return; };
    /**
     * Inform the native plugin that you're finished, the background-task may be completed
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.finish = function () { };
    /**
     * Force the plugin to enter "moving" or "stationary" state
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.changePace = function (isMoving) { };
    /**
     * Setup configuration
     */
    BackgroundGeolocation.setConfig = function (options) { return; };
    /**
     * Returns current stationaryLocation if available. null if not
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.getStationaryLocation = function () { return; };
    /**
     * Add a stationary-region listener. Whenever the devices enters "stationary-mode",
     * your #success callback will be executed with #location param containing #radius of region
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.onStationary = function () { return; };
    /**
     * Check if location is enabled on the device
     * @returns {Promise<number>} Returns a promise with int argument that takes values 0, 1 (true).
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.isLocationEnabled = function () { return; };
    /**
     * Display device location settings
     */
    BackgroundGeolocation.showLocationSettings = function () { };
    /**
     * Method can be used to detect user changes in location services settings.
     * If user enable or disable location services then success callback will be executed.
     * In case or error (SettingNotFoundException) fail callback will be executed.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.watchLocationMode = function () { return; };
    /**
     * Stop watching for location mode changes.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.stopWatchingLocationMode = function () { };
    /**
     * Method will return all stored locations.
     * Locations are stored when:
     *  - config.stopOnTerminate is false and main activity was killed
     *    by the system
     *  or
     *  - option.debug is true
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.getLocations = function () { return; };
    /**
     * Delete stored location by given locationId.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.deleteLocation = function (locationId) { return; };
    /**
     * Delete all stored locations.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.deleteAllLocations = function () { return; };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BackgroundGeolocation, "configure", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "start", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "finish", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "changePace", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BackgroundGeolocation, "setConfig", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "getStationaryLocation", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "onStationary", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "isLocationEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "showLocationSettings", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "watchLocationMode", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "stopWatchingLocationMode", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "getLocations", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "deleteLocation", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "deleteAllLocations", null);
    BackgroundGeolocation = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-mauron85-background-geolocation',
            pluginRef: 'backgroundGeolocation',
            repo: 'https://github.com/mauron85/cordova-plugin-background-geolocation',
            platforms: ['iOS', 'Android', 'Windows Phone 8']
        })
    ], BackgroundGeolocation);
    return BackgroundGeolocation;
}());
exports.BackgroundGeolocation = BackgroundGeolocation;
//# sourceMappingURL=background-geolocation.js.map