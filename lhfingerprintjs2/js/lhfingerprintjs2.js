(function ($, Backdrop, window, document, undefined) {
    'use strict';

    Backdrop.behaviors.lhFingerprintjs2DeviceId = {
        attach: function (context, settings) {
            new Fingerprint2().get(function (result, components) {
                $('input[name="lhfingerprintjs"]').val(JSON.stringify(components));
            });
        }
    };
})(jQuery, Backdrop, this, this.document);
