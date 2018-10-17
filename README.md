Login History
=============

Login History adds a new table which stores information about individual user logins, including a timestamp, IP address, user agent information, and whether or not the login was via a reset password link.

Based on this data there are a few pieces of functionality provided by this module:

* A global report of all user logins at `admin/reports/login-history`.
* Per-user login reports on each account at `user/%/login-history`.
* A block that can show the user information about their last login and link to their per-user login report if they have access to it.

Installation
------------

Install this module using the official Backdrop CMS instructions at https://backdropcms.org/guide/modules.

Support
-------

Submit your issue at https://github.com/backdrop-contrib/login_history/issues.

License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.

Maintainers
-----------

Seeking maintainers.

Ported to Backdrop by:

* herbdool <https://github.com/herbdool>

Credits
-------

This module is based on the Login History module for Drupal--starting at version 7.x-1.1--originally written and maintained by:

* Cottser <https://www.drupal.org/u/cottser>
* greggles <https://www.drupal.org/u/greggles>