"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng1_1 = require('./ng1');
var DEVICE_READY_TIMEOUT = 2000;
var actionsheet_1 = require('./plugins/actionsheet');
exports.ActionSheet = actionsheet_1.ActionSheet;
var admob_1 = require('./plugins/admob');
exports.AdMob = admob_1.AdMob;
var android_fingerprint_auth_1 = require('./plugins/android-fingerprint-auth');
exports.AndroidFingerprintAuth = android_fingerprint_auth_1.AndroidFingerprintAuth;
var appavailability_1 = require('./plugins/appavailability');
exports.AppAvailability = appavailability_1.AppAvailability;
var apprate_1 = require('./plugins/apprate');
exports.AppRate = apprate_1.AppRate;
var appversion_1 = require('./plugins/appversion');
exports.AppVersion = appversion_1.AppVersion;
var badge_1 = require('./plugins/badge');
exports.Badge = badge_1.Badge;
var background_geolocation_1 = require('./plugins/background-geolocation');
var backgroundmode_1 = require('./plugins/backgroundmode');
var barcodescanner_1 = require('./plugins/barcodescanner');
exports.BarcodeScanner = barcodescanner_1.BarcodeScanner;
var base64togallery_1 = require('./plugins/base64togallery');
exports.Base64ToGallery = base64togallery_1.Base64ToGallery;
var batterystatus_1 = require('./plugins/batterystatus');
exports.BatteryStatus = batterystatus_1.BatteryStatus;
var brightness_1 = require('./plugins/brightness');
exports.Brightness = brightness_1.Brightness;
var ble_1 = require('./plugins/ble');
exports.BLE = ble_1.BLE;
var bluetoothserial_1 = require('./plugins/bluetoothserial');
exports.BluetoothSerial = bluetoothserial_1.BluetoothSerial;
var calendar_1 = require('./plugins/calendar');
var camera_1 = require('./plugins/camera');
var camera_preview_1 = require('./plugins/camera-preview');
exports.CameraPreview = camera_preview_1.CameraPreview;
var card_io_1 = require('./plugins/card-io');
var clipboard_1 = require('./plugins/clipboard');
exports.Clipboard = clipboard_1.Clipboard;
var contacts_1 = require('./plugins/contacts');
var crop_1 = require('./plugins/crop');
exports.Crop = crop_1.Crop;
var datepicker_1 = require('./plugins/datepicker');
var dbmeter_1 = require('./plugins/dbmeter');
exports.DBMeter = dbmeter_1.DBMeter;
var deeplinks_1 = require('./plugins/deeplinks');
exports.Deeplinks = deeplinks_1.Deeplinks;
var device_1 = require('./plugins/device');
var deviceaccounts_1 = require('./plugins/deviceaccounts');
exports.DeviceAccounts = deviceaccounts_1.DeviceAccounts;
var devicemotion_1 = require('./plugins/devicemotion');
var deviceorientation_1 = require('./plugins/deviceorientation');
var diagnostic_1 = require('./plugins/diagnostic');
exports.Diagnostic = diagnostic_1.Diagnostic;
var dialogs_1 = require('./plugins/dialogs');
exports.Dialogs = dialogs_1.Dialogs;
var emailcomposer_1 = require('./plugins/emailcomposer');
exports.EmailComposer = emailcomposer_1.EmailComposer;
var facebook_1 = require('./plugins/facebook');
var file_1 = require('./plugins/file');
exports.File = file_1.File;
var filetransfer_1 = require('./plugins/filetransfer');
exports.Transfer = filetransfer_1.Transfer;
var flashlight_1 = require('./plugins/flashlight');
exports.Flashlight = flashlight_1.Flashlight;
var geolocation_1 = require('./plugins/geolocation');
exports.Geolocation = geolocation_1.Geolocation;
var globalization_1 = require('./plugins/globalization');
exports.Globalization = globalization_1.Globalization;
var google_plus_1 = require('./plugins/google-plus');
exports.GooglePlus = google_plus_1.GooglePlus;
var googlemaps_1 = require('./plugins/googlemaps');
var googleanalytics_1 = require('./plugins/googleanalytics');
exports.GoogleAnalytics = googleanalytics_1.GoogleAnalytics;
var hotspot_1 = require('./plugins/hotspot');
exports.Hotspot = hotspot_1.Hotspot;
var httpd_1 = require('./plugins/httpd');
var ibeacon_1 = require('./plugins/ibeacon');
var imagepicker_1 = require('./plugins/imagepicker');
var imageresizer_1 = require('./plugins/imageresizer');
var inappbrowser_1 = require('./plugins/inappbrowser');
var insomnia_1 = require('./plugins/insomnia');
exports.Insomnia = insomnia_1.Insomnia;
var keyboard_1 = require('./plugins/keyboard');
exports.Keyboard = keyboard_1.Keyboard;
var launchnavigator_1 = require('./plugins/launchnavigator');
var localnotifications_1 = require('./plugins/localnotifications');
var media_capture_1 = require('./plugins/media-capture');
var nativestorage_1 = require('./plugins/nativestorage');
exports.NativeStorage = nativestorage_1.NativeStorage;
var media_1 = require('./plugins/media');
var network_1 = require('./plugins/network');
exports.Network = network_1.Network;
var onesignal_1 = require('./plugins/onesignal');
exports.OneSignal = onesignal_1.OneSignal;
var screen_orientation_1 = require('./plugins/screen-orientation');
exports.ScreenOrientation = screen_orientation_1.ScreenOrientation;
var pin_dialog_1 = require('./plugins/pin-dialog');
exports.PinDialog = pin_dialog_1.PinDialog;
var printer_1 = require('./plugins/printer');
var push_1 = require('./plugins/push');
var safari_view_controller_1 = require('./plugins/safari-view-controller');
var screenshot_1 = require('./plugins/screenshot');
exports.Screenshot = screenshot_1.Screenshot;
var securestorage_1 = require('./plugins/securestorage');
exports.SecureStorage = securestorage_1.SecureStorage;
var sim_1 = require('./plugins/sim');
exports.Sim = sim_1.Sim;
var sms_1 = require('./plugins/sms');
var socialsharing_1 = require('./plugins/socialsharing');
exports.SocialSharing = socialsharing_1.SocialSharing;
var spinnerdialog_1 = require('./plugins/spinnerdialog');
var splashscreen_1 = require('./plugins/splashscreen');
exports.Splashscreen = splashscreen_1.Splashscreen;
var sqlite_1 = require('./plugins/sqlite');
exports.SQLite = sqlite_1.SQLite;
var statusbar_1 = require('./plugins/statusbar');
exports.StatusBar = statusbar_1.StatusBar;
var _3dtouch_1 = require('./plugins/3dtouch');
var toast_1 = require('./plugins/toast');
var touchid_1 = require('./plugins/touchid');
exports.TouchID = touchid_1.TouchID;
var twitter_connect_1 = require('./plugins/twitter-connect');
var vibration_1 = require('./plugins/vibration');
exports.Vibration = vibration_1.Vibration;
var webintent_1 = require('./plugins/webintent');
exports.WebIntent = webintent_1.WebIntent;
__export(require('./plugins/3dtouch'));
__export(require('./plugins/background-geolocation'));
__export(require('./plugins/backgroundmode'));
__export(require('./plugins/batterystatus'));
__export(require('./plugins/calendar'));
__export(require('./plugins/camera'));
__export(require('./plugins/card-io'));
__export(require('./plugins/contacts'));
__export(require('./plugins/datepicker'));
__export(require('./plugins/device'));
__export(require('./plugins/devicemotion'));
__export(require('./plugins/deviceorientation'));
__export(require('./plugins/facebook'));
__export(require('./plugins/filetransfer'));
__export(require('./plugins/googlemaps'));
__export(require('./plugins/httpd'));
__export(require('./plugins/ibeacon'));
__export(require('./plugins/imagepicker'));
__export(require('./plugins/imageresizer'));
__export(require('./plugins/inappbrowser'));
__export(require('./plugins/launchnavigator'));
__export(require('./plugins/localnotifications'));
__export(require('./plugins/media'));
__export(require('./plugins/media-capture'));
__export(require('./plugins/printer'));
__export(require('./plugins/push'));
__export(require('./plugins/safari-view-controller'));
__export(require('./plugins/sms'));
__export(require('./plugins/spinnerdialog'));
__export(require('./plugins/toast'));
__export(require('./plugins/twitter-connect'));
__export(require('./plugins/plugin'));
// Window export to use outside of a module loading system
window['IonicNative'] = {
    ActionSheet: actionsheet_1.ActionSheet,
    AdMob: admob_1.AdMob,
    AndroidFingerprintAuth: android_fingerprint_auth_1.AndroidFingerprintAuth,
    AppAvailability: appavailability_1.AppAvailability,
    AppRate: apprate_1.AppRate,
    AppVersion: appversion_1.AppVersion,
    Badge: badge_1.Badge,
    BackgroundGeolocation: background_geolocation_1.BackgroundGeolocation,
    BackgroundMode: backgroundmode_1.BackgroundMode,
    BarcodeScanner: barcodescanner_1.BarcodeScanner,
    Base64ToGallery: base64togallery_1.Base64ToGallery,
    BatteryStatus: batterystatus_1.BatteryStatus,
    Brightness: brightness_1.Brightness,
    BLE: ble_1.BLE,
    BluetoothSerial: bluetoothserial_1.BluetoothSerial,
    Calendar: calendar_1.Calendar,
    Camera: camera_1.Camera,
    CameraPreview: camera_preview_1.CameraPreview,
    CardIO: card_io_1.CardIO,
    Clipboard: clipboard_1.Clipboard,
    Contacts: contacts_1.Contacts,
    Crop: crop_1.Crop,
    DatePicker: datepicker_1.DatePicker,
    DBMeter: dbmeter_1.DBMeter,
    Deeplinks: deeplinks_1.Deeplinks,
    Device: device_1.Device,
    DeviceAccounts: deviceaccounts_1.DeviceAccounts,
    DeviceMotion: devicemotion_1.DeviceMotion,
    DeviceOrientation: deviceorientation_1.DeviceOrientation,
    Dialogs: dialogs_1.Dialogs,
    Diagnostic: diagnostic_1.Diagnostic,
    EmailComposer: emailcomposer_1.EmailComposer,
    Facebook: facebook_1.Facebook,
    File: file_1.File,
    Flashlight: flashlight_1.Flashlight,
    Geolocation: geolocation_1.Geolocation,
    Globalization: globalization_1.Globalization,
    GooglePlus: google_plus_1.GooglePlus,
    GoogleMap: googlemaps_1.GoogleMap,
    GoogleAnalytics: googleanalytics_1.GoogleAnalytics,
    Hotspot: hotspot_1.Hotspot,
    Httpd: httpd_1.Httpd,
    IBeacon: ibeacon_1.IBeacon,
    ImagePicker: imagepicker_1.ImagePicker,
    ImageResizer: imageresizer_1.ImageResizer,
    InAppBrowser: inappbrowser_1.InAppBrowser,
    Keyboard: keyboard_1.Keyboard,
    LaunchNavigator: launchnavigator_1.LaunchNavigator,
    LocalNotifications: localnotifications_1.LocalNotifications,
    MediaCapture: media_capture_1.MediaCapture,
    MediaPlugin: media_1.MediaPlugin,
    NativeStorage: nativestorage_1.NativeStorage,
    Network: network_1.Network,
    Printer: printer_1.Printer,
    Push: push_1.Push,
    OneSignal: onesignal_1.OneSignal,
    ScreenOrientation: screen_orientation_1.ScreenOrientation,
    PinDialog: pin_dialog_1.PinDialog,
    SafariViewController: safari_view_controller_1.SafariViewController,
    Screenshot: screenshot_1.Screenshot,
    SecureStorage: securestorage_1.SecureStorage,
    Sim: sim_1.Sim,
    SMS: sms_1.SMS,
    SocialSharing: socialsharing_1.SocialSharing,
    SpinnerDialog: spinnerdialog_1.SpinnerDialog,
    Splashscreen: splashscreen_1.Splashscreen,
    SQLite: sqlite_1.SQLite,
    StatusBar: statusbar_1.StatusBar,
    ThreeDeeTouch: _3dtouch_1.ThreeDeeTouch,
    Toast: toast_1.Toast,
    TouchID: touchid_1.TouchID,
    Transfer: filetransfer_1.Transfer,
    TwitterConnect: twitter_connect_1.TwitterConnect,
    Vibration: vibration_1.Vibration,
    WebIntent: webintent_1.WebIntent
};
ng1_1.initAngular1(window['IonicNative']);
// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
var before = +new Date;
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
    }
}, DEVICE_READY_TIMEOUT);
//# sourceMappingURL=index.js.map