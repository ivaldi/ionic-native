"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @private
 */
var Contact = (function () {
    function Contact() {
        this._objectInstance = navigator.contacts.create();
    }
    Object.defineProperty(Contact.prototype, "id", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "displayName", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "name", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "nickname", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phoneNumbers", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "emails", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "addresses", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ims", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "organizations", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "birthday", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "note", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "photos", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "categories", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "urls", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Contact.prototype.clone = function () {
        var newContact = new Contact();
        for (var prop in this) {
            if (prop === 'id')
                return;
            newContact[prop] = this[prop];
        }
        return newContact;
    };
    Contact.prototype.remove = function () { return; };
    Contact.prototype.save = function () { return; };
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "id", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "displayName", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "name", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "nickname", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "phoneNumbers", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "emails", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "addresses", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "ims", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "organizations", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "birthday", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "note", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "photos", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "categories", null);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "urls", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], Contact.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], Contact.prototype, "save", null);
    return Contact;
}());
exports.Contact = Contact;
/**
 * @private
 */
var ContactName = (function () {
    function ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix) {
        this._objectInstance = new window.ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix);
    }
    Object.defineProperty(ContactName.prototype, "formatted", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactName.prototype, "familyName", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactName.prototype, "givenName", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactName.prototype, "middleName", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactName.prototype, "honorificPrefix", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactName.prototype, "honorificSuffix", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.InstanceProperty
    ], ContactName.prototype, "formatted", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactName.prototype, "familyName", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactName.prototype, "givenName", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactName.prototype, "middleName", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactName.prototype, "honorificPrefix", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactName.prototype, "honorificSuffix", null);
    return ContactName;
}());
exports.ContactName = ContactName;
/**
 * @private
 */
var ContactField = (function () {
    function ContactField(type, value, pref) {
        this._objectInstance = new window.ContactField(type, value, pref);
    }
    Object.defineProperty(ContactField.prototype, "type", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactField.prototype, "value", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactField.prototype, "pref", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.InstanceProperty
    ], ContactField.prototype, "type", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactField.prototype, "value", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactField.prototype, "pref", null);
    return ContactField;
}());
exports.ContactField = ContactField;
/**
 * @private
 */
var ContactAddress = (function () {
    function ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
        this._objectInstance = new window.ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country);
    }
    Object.defineProperty(ContactAddress.prototype, "pref", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactAddress.prototype, "type", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactAddress.prototype, "formatted", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactAddress.prototype, "streetAddress", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactAddress.prototype, "locality", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactAddress.prototype, "region", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactAddress.prototype, "postalCode", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactAddress.prototype, "country", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.InstanceProperty
    ], ContactAddress.prototype, "pref", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactAddress.prototype, "type", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactAddress.prototype, "formatted", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactAddress.prototype, "streetAddress", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactAddress.prototype, "locality", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactAddress.prototype, "region", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactAddress.prototype, "postalCode", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactAddress.prototype, "country", null);
    return ContactAddress;
}());
exports.ContactAddress = ContactAddress;
/**
 * @private
 */
var ContactOrganization = (function () {
    function ContactOrganization() {
        this._objectInstance = new window.ContactOrganization();
    }
    Object.defineProperty(ContactOrganization.prototype, "pref", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactOrganization.prototype, "type", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactOrganization.prototype, "name", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactOrganization.prototype, "department", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactOrganization.prototype, "title", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.InstanceProperty
    ], ContactOrganization.prototype, "pref", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactOrganization.prototype, "type", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactOrganization.prototype, "name", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactOrganization.prototype, "department", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactOrganization.prototype, "title", null);
    return ContactOrganization;
}());
exports.ContactOrganization = ContactOrganization;
/**
 * @private
 */
var ContactFindOptions = (function () {
    function ContactFindOptions() {
        this._objectInstance = new window.ContactFindOptions();
    }
    Object.defineProperty(ContactFindOptions.prototype, "filter", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactFindOptions.prototype, "multiple", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactFindOptions.prototype, "desiredFields", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactFindOptions.prototype, "hasPhoneNumber", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.InstanceProperty
    ], ContactFindOptions.prototype, "filter", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactFindOptions.prototype, "multiple", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactFindOptions.prototype, "desiredFields", null);
    __decorate([
        plugin_1.InstanceProperty
    ], ContactFindOptions.prototype, "hasPhoneNumber", null);
    return ContactFindOptions;
}());
exports.ContactFindOptions = ContactFindOptions;
/**
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * @usage
 *
 * ```typescript
 * import { Contact } from 'ionic-native';
 *
 *
 * let contact = new Contact();
 * contact.displayName = 'Mr. Ionitron';
 * contact.save().then(
 *   () => console.log('Contact saved!', contact),
 *   (error: any) => console.error('Error saving contact.', error)
 * );
 * ```
 *
 *
 */
var Contacts = (function () {
    function Contacts() {
    }
    Contacts.create = function () {
        return new Contact();
    };
    /**
     * Search for contacts in the Contacts list.
     * @param fields {string[]}  Contact fields to be used as a search qualifier.
     *  A zero-length contactFields parameter is invalid and results in ContactError.INVALID_ARGUMENT_ERROR.
     *  A contactFields value of "*" searches all contact fields.
     *
     * @param options {Object} the options to query with:
     *   filter: The search string used to find navigator.contacts. (string) (Default: "")
     *   multiple: Determines if the find operation returns multiple navigator.contacts. (Boolean) (Default: false)
     *   desiredFields: Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. (DOMString[]) [Optional]
     *   hasPhoneNumber(Android only): Filters the search to only return contacts with a phone number informed. (Boolean) (Default: false)
     *
     * @return Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    Contacts.find = function (fields, options) { return; };
    /**
     * Select a single Contact.
     * @return Returns a Promise that resolves with the selected Contact
     */
    Contacts.pickContact = function () { return; };
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Contacts, "find", null);
    __decorate([
        plugin_1.Cordova()
    ], Contacts, "pickContact", null);
    Contacts = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-contacts',
            pluginRef: 'navigator.contacts',
            repo: 'https://github.com/apache/cordova-plugin-contacts'
        })
    ], Contacts);
    return Contacts;
}());
exports.Contacts = Contacts;
//# sourceMappingURL=contacts.js.map