(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define("ngx-icon-picker", ["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-icon-picker"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ngx-icon-picker"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var icon_picker_service_1 = __webpack_require__(2);
var icon_1 = __webpack_require__(3);
var IconPickerComponent = (function () {
    function IconPickerComponent(el, cdr, service) {
        this.el = el;
        this.cdr = cdr;
        this.service = service;
        this.iconType = icon_1.IconType;
        this.dialogArrowSize = 10;
        this.icons = [];
        this.search = '';
    }
    IconPickerComponent.prototype.setDialog = function (instance, elementRef, icon, ipPosition, ipHeight, ipMaxHeight, ipWidth, ipPlaceHolder, ipFallbackIcon, ipIconPack) {
        this.directiveInstance = instance;
        this.setInitialIcon(icon);
        this.directiveElementRef = elementRef;
        this.ipPosition = ipPosition;
        this.ipHeight = parseInt(ipHeight);
        this.ipMaxHeight = parseInt(ipMaxHeight);
        this.ipWidth = parseInt(ipWidth);
        if (!this.ipWidth) {
            this.ipWidth = elementRef.nativeElement.offsetWidth;
        }
        this.ipPlaceHolder = ipPlaceHolder;
        this.ipFallbackIcon = ipFallbackIcon;
        this.ipIconPack = ipIconPack;
    };
    IconPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.icons = this.service.getIcons(this.ipIconPack);
        this.listenerMouseDown = function (event) { return _this.onMouseDown(event); };
        this.listenerResize = function () { return _this.onResize(); };
        this.openDialog(this.initialIcon);
    };
    IconPickerComponent.prototype.setInitialIcon = function (icon) {
        this.initialIcon = icon;
        this.selectedIcon = this.icons.find(function (el) { return el ? "fa fa-" + el.id === icon || "glyphicon glyphicon-" + el.id === icon || "" + el.id === icon : false; });
        if (this.selectedIcon && icon !== this.ipFallbackIcon) {
            this.search = this.selectedIcon.id;
        }
        else {
            this.search = '';
        }
    };
    IconPickerComponent.prototype.openDialog = function (icon) {
        this.setInitialIcon(icon);
        this.openIconPicker();
    };
    IconPickerComponent.prototype.setSearch = function (val) {
        this.search = val;
    };
    IconPickerComponent.prototype.selectIcon = function (icon) {
        if (icon.type === icon_1.IconType.FONT_AWESEOME) {
            this.directiveInstance.iconSelected("fa fa-" + icon.id);
        }
        else if (icon.type === icon_1.IconType.BOOTSTRAP) {
            this.directiveInstance.iconSelected("glyphicon glyphicon-" + icon.id);
        }
        else if (icon.type === icon_1.IconType.FONT_AWESEOME5) {
            this.directiveInstance.iconSelected("" + icon.id);
        }
        this.closeIconPicker();
    };
    IconPickerComponent.prototype.onMouseDown = function (event) {
        if (!this.isDescendant(this.el.nativeElement, event.target) && event.target != this.directiveElementRef.nativeElement) {
            this.closeIconPicker();
        }
    };
    IconPickerComponent.prototype.openIconPicker = function () {
        var _this = this;
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(function () {
                _this.setDialogPosition();
                _this.hidden = false;
                _this.cdr.detectChanges();
            }, 0);
            document.addEventListener('mousedown', this.listenerMouseDown);
            window.addEventListener('resize', this.listenerResize);
        }
    };
    IconPickerComponent.prototype.closeIconPicker = function () {
        if (this.show) {
            this.show = false;
            document.removeEventListener('mousedown', this.listenerMouseDown);
            window.removeEventListener('resize', this.listenerResize);
            this.cdr.detectChanges();
        }
    };
    IconPickerComponent.prototype.onResize = function () {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
    };
    IconPickerComponent.prototype.setDialogPosition = function () {
        var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
        var node = this.directiveElementRef.nativeElement, position = 'static', transform = '';
        var parentNode = null, transformNode = null, style = null;
        while (node !== null && node.tagName !== 'HTML') {
            style = window.getComputedStyle(node);
            position = style.getPropertyValue('position');
            transform = style.getPropertyValue('transform');
            if (position !== 'static' && parentNode === null) {
                parentNode = node;
            }
            if (transform && transform !== 'none' && transformNode === null) {
                transformNode = node;
            }
            if (position === 'fixed') {
                parentNode = transformNode;
                break;
            }
            node = node.parentNode;
        }
        var boxDirective = this.createBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
        if (position !== 'fixed' || parentNode) {
            if (parentNode === null) {
                parentNode = node;
            }
            var boxParent = this.createBox(parentNode, true);
            this.top = boxDirective.top - boxParent.top;
            this.left = boxDirective.left - boxParent.left;
        }
        else {
            this.top = boxDirective.top;
            this.left = boxDirective.left;
        }
        if (position === 'fixed') {
            this.position = 'fixed';
        }
        if (this.ipPosition === 'left') {
            this.left -= this.ipWidth + this.dialogArrowSize - 2;
        }
        else if (this.ipPosition === 'top') {
            this.top -= dialogHeight + this.dialogArrowSize;
            this.arrowTop = dialogHeight - 1;
        }
        else if (this.ipPosition === 'bottom') {
            this.top += boxDirective.height + this.dialogArrowSize;
        }
        else {
            this.left += boxDirective.width + this.dialogArrowSize - 2;
        }
    };
    IconPickerComponent.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    IconPickerComponent.prototype.createBox = function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    return IconPickerComponent;
}());
__decorate([
    core_1.ViewChild('dialogPopup'),
    __metadata("design:type", Object)
], IconPickerComponent.prototype, "dialogElement", void 0);
IconPickerComponent = __decorate([
    core_1.Component({
        selector: 'icon-picker',
        template: __webpack_require__(7),
        styles: [__webpack_require__(6)]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.ChangeDetectorRef,
        icon_picker_service_1.IconPickerService])
], IconPickerComponent);
exports.IconPickerComponent = IconPickerComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var icon_1 = __webpack_require__(3);
var IconPickerService = (function () {
    function IconPickerService() {
    }
    IconPickerService.prototype.getIcons = function (ipIconPack) {
        var icons = [];
        if (ipIconPack === 'fa' || ipIconPack === 'all') {
            var faIcons = this.getFaIcons().map(function (icon) {
                icon.type = icon_1.IconType.FONT_AWESEOME;
                return icon;
            });
            icons = icons.concat(faIcons);
        }
        if (ipIconPack === 'bs' || ipIconPack === 'all') {
            var bsIcons = this.getBsIcons().map(function (icon) {
                icon.type = icon_1.IconType.BOOTSTRAP;
                return icon;
            });
            icons = icons.concat(bsIcons);
        }
        if (ipIconPack === 'fa5' || ipIconPack === 'all') {
            var fa5Icons = this.getFa5Icons().map(function (icon) {
                icon.type = icon_1.IconType.FONT_AWESEOME5;
                return icon;
            });
            icons = icons.concat(fa5Icons);
        }
        return icons;
    };
    IconPickerService.prototype.getFaIcons = function () {
        return [
            {
                'name': 'Glass',
                'id': 'glass',
                'filter': [
                    'martini',
                    'drink',
                    'bar',
                    'alcohol',
                    'liquor'
                ]
            },
            {
                'name': 'Music',
                'id': 'music',
                'filter': [
                    'note',
                    'sound'
                ]
            },
            {
                'name': 'Search',
                'id': 'search',
                'filter': [
                    'magnify',
                    'zoom',
                    'enlarge',
                    'bigger'
                ]
            },
            {
                'name': 'Envelope Outlined',
                'id': 'envelope-o',
                'filter': [
                    'email',
                    'e-mail',
                    'letter',
                    'support',
                    'mail',
                    'message',
                    'notification'
                ]
            },
            {
                'name': 'Heart',
                'id': 'heart',
                'filter': [
                    'love',
                    'like',
                    'favorite'
                ]
            },
            {
                'name': 'Star',
                'id': 'star',
                'filter': [
                    'award',
                    'achievement',
                    'night',
                    'rating',
                    'score',
                    'favorite'
                ]
            },
            {
                'name': 'Star Outlined',
                'id': 'star-o',
                'filter': [
                    'award',
                    'achievement',
                    'night',
                    'rating',
                    'score',
                    'favorite'
                ]
            },
            {
                'name': 'User',
                'id': 'user',
                'filter': [
                    'person',
                    'man',
                    'head',
                    'profile'
                ]
            },
            {
                'name': 'Film',
                'id': 'film',
                'filter': [
                    'movie'
                ]
            },
            {
                'name': 'th-large',
                'id': 'th-large',
                'filter': [
                    'blocks',
                    'squares',
                    'boxes',
                    'grid'
                ]
            },
            {
                'name': 'th',
                'id': 'th',
                'filter': [
                    'blocks',
                    'squares',
                    'boxes',
                    'grid'
                ]
            },
            {
                'name': 'th-list',
                'id': 'th-list',
                'filter': [
                    'ul',
                    'ol',
                    'checklist',
                    'finished',
                    'completed',
                    'done',
                    'todo'
                ]
            },
            {
                'name': 'Check',
                'id': 'check',
                'filter': [
                    'checkmark',
                    'done',
                    'todo',
                    'agree',
                    'accept',
                    'confirm',
                    'tick',
                    'ok'
                ]
            },
            {
                'name': 'Times',
                'id': 'times',
                'aliases': [
                    'remove',
                    'close'
                ],
                'filter': [
                    'close',
                    'exit',
                    'x',
                    'cross'
                ]
            },
            {
                'name': 'Search Plus',
                'id': 'search-plus',
                'filter': [
                    'magnify',
                    'zoom',
                    'enlarge',
                    'bigger'
                ]
            },
            {
                'name': 'Search Minus',
                'id': 'search-minus',
                'filter': [
                    'magnify',
                    'minify',
                    'zoom',
                    'smaller'
                ]
            },
            {
                'name': 'Power Off',
                'id': 'power-off',
                'filter': [
                    'on'
                ]
            },
            {
                'name': 'signal',
                'id': 'signal',
                'filter': [
                    'graph',
                    'bars'
                ]
            },
            {
                'name': 'cog',
                'id': 'cog',
                'filter': [
                    'settings'
                ],
                'aliases': [
                    'gear'
                ]
            },
            {
                'name': 'Trash Outlined',
                'id': 'trash-o',
                'filter': [
                    'garbage',
                    'delete',
                    'remove',
                    'trash',
                    'hide'
                ]
            },
            {
                'name': 'home',
                'id': 'home',
                'filter': [
                    'main',
                    'house'
                ]
            },
            {
                'name': 'File Outlined',
                'id': 'file-o',
                'filter': [
                    'new',
                    'page',
                    'pdf',
                    'document'
                ]
            },
            {
                'name': 'Clock Outlined',
                'id': 'clock-o',
                'filter': [
                    'watch',
                    'timer',
                    'late',
                    'timestamp'
                ]
            },
            {
                'name': 'road',
                'id': 'road',
                'filter': [
                    'street'
                ]
            },
            {
                'name': 'Download',
                'id': 'download',
                'filter': [
                    'import'
                ]
            },
            {
                'name': 'Arrow Circle Outlined Down',
                'id': 'arrow-circle-o-down',
                'filter': [
                    'download'
                ]
            },
            {
                'name': 'Arrow Circle Outlined Up',
                'id': 'arrow-circle-o-up'
            },
            {
                'name': 'inbox',
                'id': 'inbox'
            },
            {
                'name': 'Play Circle Outlined',
                'id': 'play-circle-o'
            },
            {
                'name': 'Repeat',
                'id': 'repeat',
                'filter': [
                    'redo',
                    'forward'
                ],
                'aliases': [
                    'rotate-right'
                ]
            },
            {
                'name': 'refresh',
                'id': 'refresh',
                'filter': [
                    'reload',
                    'sync'
                ]
            },
            {
                'name': 'list-alt',
                'id': 'list-alt',
                'filter': [
                    'ul',
                    'ol',
                    'checklist',
                    'finished',
                    'completed',
                    'done',
                    'todo'
                ]
            },
            {
                'name': 'lock',
                'id': 'lock',
                'filter': [
                    'protect',
                    'admin',
                    'security'
                ]
            },
            {
                'name': 'flag',
                'id': 'flag',
                'filter': [
                    'report',
                    'notification',
                    'notify'
                ]
            },
            {
                'name': 'headphones',
                'id': 'headphones',
                'filter': [
                    'sound',
                    'listen',
                    'music',
                    'audio'
                ]
            },
            {
                'name': 'volume-off',
                'id': 'volume-off',
                'filter': [
                    'audio',
                    'mute',
                    'sound',
                    'music'
                ]
            },
            {
                'name': 'volume-down',
                'id': 'volume-down',
                'filter': [
                    'audio',
                    'lower',
                    'quieter',
                    'sound',
                    'music'
                ]
            },
            {
                'name': 'volume-up',
                'id': 'volume-up',
                'filter': [
                    'audio',
                    'higher',
                    'louder',
                    'sound',
                    'music'
                ]
            },
            {
                'name': 'qrcode',
                'id': 'qrcode',
                'filter': [
                    'scan'
                ]
            },
            {
                'name': 'barcode',
                'id': 'barcode',
                'filter': [
                    'scan'
                ]
            },
            {
                'name': 'tag',
                'id': 'tag',
                'filter': [
                    'label'
                ]
            },
            {
                'name': 'tags',
                'id': 'tags',
                'filter': [
                    'labels'
                ]
            },
            {
                'name': 'book',
                'id': 'book',
                'filter': [
                    'read',
                    'documentation'
                ]
            },
            {
                'name': 'bookmark',
                'id': 'bookmark',
                'filter': [
                    'save'
                ]
            },
            {
                'name': 'print',
                'id': 'print'
            },
            {
                'name': 'camera',
                'id': 'camera',
                'filter': [
                    'photo',
                    'picture',
                    'record'
                ]
            },
            {
                'name': 'font',
                'id': 'font',
                'filter': [
                    'text'
                ]
            },
            {
                'name': 'bold',
                'id': 'bold'
            },
            {
                'name': 'italic',
                'id': 'italic',
                'filter': [
                    'italics'
                ]
            },
            {
                'name': 'text-height',
                'id': 'text-height'
            },
            {
                'name': 'text-width',
                'id': 'text-width'
            },
            {
                'name': 'align-left',
                'id': 'align-left',
                'filter': [
                    'text'
                ]
            },
            {
                'name': 'align-center',
                'id': 'align-center',
                'filter': [
                    'middle',
                    'text'
                ]
            },
            {
                'name': 'align-right',
                'id': 'align-right',
                'filter': [
                    'text'
                ]
            },
            {
                'name': 'align-justify',
                'id': 'align-justify',
                'filter': [
                    'text'
                ]
            },
            {
                'name': 'list',
                'id': 'list',
                'filter': [
                    'ul',
                    'ol',
                    'checklist',
                    'finished',
                    'completed',
                    'done',
                    'todo'
                ]
            },
            {
                'name': 'Outdent',
                'id': 'outdent',
                'aliases': [
                    'dedent'
                ]
            },
            {
                'name': 'Indent',
                'id': 'indent'
            },
            {
                'name': 'Video Camera',
                'id': 'video-camera',
                'filter': [
                    'film',
                    'movie',
                    'record'
                ]
            },
            {
                'name': 'Picture Outlined',
                'id': 'picture-o',
                'aliases': [
                    'photo',
                    'image'
                ]
            },
            {
                'name': 'pencil',
                'id': 'pencil',
                'filter': [
                    'write',
                    'edit',
                    'update'
                ]
            },
            {
                'name': 'map-marker',
                'id': 'map-marker',
                'filter': [
                    'map',
                    'pin',
                    'location',
                    'coordinates',
                    'localize',
                    'address',
                    'travel',
                    'where',
                    'place'
                ]
            },
            {
                'name': 'adjust',
                'id': 'adjust',
                'filter': [
                    'contrast'
                ]
            },
            {
                'name': 'tint',
                'id': 'tint',
                'filter': [
                    'raindrop',
                    'waterdrop',
                    'drop',
                    'droplet'
                ]
            },
            {
                'name': 'Pencil Square Outlined',
                'id': 'pencil-square-o',
                'filter': [
                    'write',
                    'edit',
                    'update'
                ],
                'aliases': [
                    'edit'
                ]
            },
            {
                'name': 'Share Square Outlined',
                'id': 'share-square-o',
                'filter': [
                    'social',
                    'send',
                    'arrow'
                ]
            },
            {
                'name': 'Check Square Outlined',
                'id': 'check-square-o',
                'filter': [
                    'todo',
                    'done',
                    'agree',
                    'accept',
                    'confirm',
                    'ok'
                ]
            },
            {
                'name': 'Arrows',
                'id': 'arrows',
                'filter': [
                    'move',
                    'reorder',
                    'resize'
                ]
            },
            {
                'name': 'step-backward',
                'id': 'step-backward',
                'filter': [
                    'rewind',
                    'previous',
                    'beginning',
                    'start',
                    'first'
                ]
            },
            {
                'name': 'fast-backward',
                'id': 'fast-backward',
                'filter': [
                    'rewind',
                    'previous',
                    'beginning',
                    'start',
                    'first'
                ]
            },
            {
                'name': 'backward',
                'id': 'backward',
                'filter': [
                    'rewind',
                    'previous'
                ]
            },
            {
                'name': 'play',
                'id': 'play',
                'filter': [
                    'start',
                    'playing',
                    'music',
                    'sound'
                ]
            },
            {
                'name': 'pause',
                'id': 'pause',
                'filter': [
                    'wait'
                ]
            },
            {
                'name': 'stop',
                'id': 'stop',
                'filter': [
                    'block',
                    'box',
                    'square'
                ]
            },
            {
                'name': 'forward',
                'id': 'forward',
                'filter': [
                    'forward',
                    'next'
                ]
            },
            {
                'name': 'fast-forward',
                'id': 'fast-forward',
                'filter': [
                    'next',
                    'end',
                    'last'
                ]
            },
            {
                'name': 'step-forward',
                'id': 'step-forward',
                'filter': [
                    'next',
                    'end',
                    'last'
                ]
            },
            {
                'name': 'eject',
                'id': 'eject'
            },
            {
                'name': 'chevron-left',
                'id': 'chevron-left',
                'filter': [
                    'bracket',
                    'previous',
                    'back'
                ]
            },
            {
                'name': 'chevron-right',
                'id': 'chevron-right',
                'filter': [
                    'bracket',
                    'next',
                    'forward'
                ]
            },
            {
                'name': 'Plus Circle',
                'id': 'plus-circle',
                'filter': [
                    'add',
                    'new',
                    'create',
                    'expand'
                ]
            },
            {
                'name': 'Minus Circle',
                'id': 'minus-circle',
                'filter': [
                    'delete',
                    'remove',
                    'trash',
                    'hide'
                ]
            },
            {
                'name': 'Times Circle',
                'id': 'times-circle',
                'filter': [
                    'close',
                    'exit',
                    'x'
                ]
            },
            {
                'name': 'Check Circle',
                'id': 'check-circle',
                'filter': [
                    'todo',
                    'done',
                    'agree',
                    'accept',
                    'confirm',
                    'ok'
                ]
            },
            {
                'name': 'Question Circle',
                'id': 'question-circle',
                'filter': [
                    'help',
                    'information',
                    'unknown',
                    'support'
                ]
            },
            {
                'name': 'Info Circle',
                'id': 'info-circle',
                'filter': [
                    'help',
                    'information',
                    'more',
                    'details'
                ]
            },
            {
                'name': 'Crosshairs',
                'id': 'crosshairs',
                'filter': [
                    'picker'
                ]
            },
            {
                'name': 'Times Circle Outlined',
                'id': 'times-circle-o',
                'filter': [
                    'close',
                    'exit',
                    'x'
                ]
            },
            {
                'name': 'Check Circle Outlined',
                'id': 'check-circle-o',
                'filter': [
                    'todo',
                    'done',
                    'agree',
                    'accept',
                    'confirm',
                    'ok'
                ]
            },
            {
                'name': 'ban',
                'id': 'ban',
                'filter': [
                    'delete',
                    'remove',
                    'trash',
                    'hide',
                    'block',
                    'stop',
                    'abort',
                    'cancel'
                ]
            },
            {
                'name': 'arrow-left',
                'id': 'arrow-left',
                'filter': [
                    'previous',
                    'back'
                ]
            },
            {
                'name': 'arrow-right',
                'id': 'arrow-right',
                'filter': [
                    'next',
                    'forward'
                ]
            },
            {
                'name': 'arrow-up',
                'id': 'arrow-up'
            },
            {
                'name': 'arrow-down',
                'id': 'arrow-down',
                'filter': [
                    'download'
                ]
            },
            {
                'name': 'Share',
                'id': 'share',
                'aliases': [
                    'mail-forward'
                ]
            },
            {
                'name': 'Expand',
                'id': 'expand',
                'filter': [
                    'enlarge',
                    'bigger',
                    'resize'
                ]
            },
            {
                'name': 'Compress',
                'id': 'compress',
                'filter': [
                    'collapse',
                    'combine',
                    'contract',
                    'merge',
                    'smaller'
                ]
            },
            {
                'name': 'plus',
                'id': 'plus',
                'filter': [
                    'add',
                    'new',
                    'create',
                    'expand'
                ]
            },
            {
                'name': 'minus',
                'id': 'minus',
                'filter': [
                    'hide',
                    'minify',
                    'delete',
                    'remove',
                    'trash',
                    'hide',
                    'collapse'
                ]
            },
            {
                'name': 'asterisk',
                'id': 'asterisk',
                'filter': [
                    'details'
                ]
            },
            {
                'name': 'Exclamation Circle',
                'id': 'exclamation-circle',
                'filter': [
                    'warning',
                    'error',
                    'problem',
                    'notification',
                    'alert'
                ]
            },
            {
                'name': 'gift',
                'id': 'gift',
                'filter': [
                    'present'
                ]
            },
            {
                'name': 'leaf',
                'id': 'leaf',
                'filter': [
                    'eco',
                    'nature',
                    'plant'
                ]
            },
            {
                'name': 'fire',
                'id': 'fire',
                'filter': [
                    'flame',
                    'hot',
                    'popular'
                ]
            },
            {
                'name': 'Eye',
                'id': 'eye',
                'filter': [
                    'show',
                    'visible',
                    'views'
                ]
            },
            {
                'name': 'Eye Slash',
                'id': 'eye-slash',
                'filter': [
                    'toggle',
                    'show',
                    'hide',
                    'visible',
                    'visiblity',
                    'views'
                ]
            },
            {
                'name': 'Exclamation Triangle',
                'id': 'exclamation-triangle',
                'filter': [
                    'warning',
                    'error',
                    'problem',
                    'notification',
                    'alert'
                ],
                'aliases': [
                    'warning'
                ]
            },
            {
                'name': 'plane',
                'id': 'plane',
                'filter': [
                    'travel',
                    'trip',
                    'location',
                    'destination',
                    'airplane',
                    'fly',
                    'mode'
                ]
            },
            {
                'name': 'calendar',
                'id': 'calendar',
                'filter': [
                    'date',
                    'time',
                    'when',
                    'event'
                ]
            },
            {
                'name': 'random',
                'id': 'random',
                'filter': [
                    'sort',
                    'shuffle'
                ]
            },
            {
                'name': 'comment',
                'id': 'comment',
                'filter': [
                    'speech',
                    'notification',
                    'note',
                    'chat',
                    'bubble',
                    'feedback',
                    'message',
                    'texting',
                    'sms',
                    'conversation'
                ]
            },
            {
                'name': 'magnet',
                'id': 'magnet'
            },
            {
                'name': 'chevron-up',
                'id': 'chevron-up'
            },
            {
                'name': 'chevron-down',
                'id': 'chevron-down'
            },
            {
                'name': 'retweet',
                'id': 'retweet',
                'filter': [
                    'refresh',
                    'reload',
                    'share'
                ]
            },
            {
                'name': 'shopping-cart',
                'id': 'shopping-cart',
                'filter': [
                    'checkout',
                    'buy',
                    'purchase',
                    'payment'
                ]
            },
            {
                'name': 'Folder',
                'id': 'folder'
            },
            {
                'name': 'Folder Open',
                'id': 'folder-open'
            },
            {
                'name': 'Arrows Vertical',
                'id': 'arrows-v',
                'filter': [
                    'resize'
                ]
            },
            {
                'name': 'Arrows Horizontal',
                'id': 'arrows-h',
                'filter': [
                    'resize'
                ]
            },
            {
                'name': 'Bar Chart',
                'id': 'bar-chart',
                'aliases': [
                    'bar-chart-o'
                ],
                'filter': [
                    'graph',
                    'analytics'
                ]
            },
            {
                'name': 'Twitter Square',
                'id': 'twitter-square',
                'filter': [
                    'tweet',
                    'social network'
                ]
            },
            {
                'name': 'Facebook Square',
                'id': 'facebook-square',
                'filter': [
                    'social network'
                ]
            },
            {
                'name': 'camera-retro',
                'id': 'camera-retro',
                'filter': [
                    'photo',
                    'picture',
                    'record'
                ]
            },
            {
                'name': 'key',
                'id': 'key',
                'filter': [
                    'unlock',
                    'password'
                ]
            },
            {
                'name': 'cogs',
                'id': 'cogs',
                'aliases': [
                    'gears'
                ],
                'filter': [
                    'settings'
                ]
            },
            {
                'name': 'comments',
                'id': 'comments',
                'filter': [
                    'speech',
                    'notification',
                    'note',
                    'chat',
                    'bubble',
                    'feedback',
                    'message',
                    'texting',
                    'sms',
                    'conversation'
                ]
            },
            {
                'name': 'Thumbs Up Outlined',
                'id': 'thumbs-o-up',
                'filter': [
                    'like',
                    'approve',
                    'favorite',
                    'agree',
                    'hand'
                ]
            },
            {
                'name': 'Thumbs Down Outlined',
                'id': 'thumbs-o-down',
                'filter': [
                    'dislike',
                    'disapprove',
                    'disagree',
                    'hand'
                ]
            },
            {
                'name': 'star-half',
                'id': 'star-half',
                'filter': [
                    'award',
                    'achievement',
                    'rating',
                    'score'
                ]
            },
            {
                'name': 'Heart Outlined',
                'id': 'heart-o',
                'filter': [
                    'love',
                    'like',
                    'favorite'
                ]
            },
            {
                'name': 'Sign Out',
                'id': 'sign-out',
                'filter': [
                    'log out',
                    'logout',
                    'leave',
                    'exit',
                    'arrow'
                ]
            },
            {
                'name': 'LinkedIn Square',
                'id': 'linkedin-square'
            },
            {
                'name': 'Thumb Tack',
                'id': 'thumb-tack',
                'filter': [
                    'marker',
                    'pin',
                    'location',
                    'coordinates'
                ]
            },
            {
                'name': 'External Link',
                'id': 'external-link',
                'filter': [
                    'open',
                    'new'
                ]
            },
            {
                'name': 'Sign In',
                'id': 'sign-in',
                'filter': [
                    'enter',
                    'join',
                    'log in',
                    'login',
                    'sign up',
                    'sign in',
                    'signin',
                    'signup',
                    'arrow'
                ]
            },
            {
                'name': 'trophy',
                'id': 'trophy',
                'filter': [
                    'award',
                    'achievement',
                    'cup',
                    'winner',
                    'game'
                ]
            },
            {
                'name': 'GitHub Square',
                'id': 'github-square',
                'filter': [
                    'octocat'
                ]
            },
            {
                'name': 'Upload',
                'id': 'upload',
                'filter': [
                    'import'
                ]
            },
            {
                'name': 'Lemon Outlined',
                'id': 'lemon-o',
                'filter': [
                    'food'
                ]
            },
            {
                'name': 'Phone',
                'id': 'phone',
                'filter': [
                    'call',
                    'voice',
                    'number',
                    'support',
                    'earphone',
                    'telephone'
                ]
            },
            {
                'name': 'Square Outlined',
                'id': 'square-o',
                'filter': [
                    'block',
                    'square',
                    'box'
                ]
            },
            {
                'name': 'Bookmark Outlined',
                'id': 'bookmark-o',
                'filter': [
                    'save'
                ]
            },
            {
                'name': 'Phone Square',
                'id': 'phone-square',
                'filter': [
                    'call',
                    'voice',
                    'number',
                    'support',
                    'telephone'
                ]
            },
            {
                'name': 'Twitter',
                'id': 'twitter',
                'filter': [
                    'tweet',
                    'social network'
                ]
            },
            {
                'name': 'Facebook',
                'id': 'facebook',
                'aliases': [
                    'facebook-f'
                ],
                'filter': [
                    'social network'
                ]
            },
            {
                'name': 'GitHub',
                'id': 'github',
                'filter': [
                    'octocat'
                ]
            },
            {
                'name': 'unlock',
                'id': 'unlock',
                'filter': [
                    'protect',
                    'admin',
                    'password',
                    'lock'
                ]
            },
            {
                'name': 'credit-card',
                'id': 'credit-card',
                'filter': [
                    'money',
                    'buy',
                    'debit',
                    'checkout',
                    'purchase',
                    'payment'
                ]
            },
            {
                'name': 'rss',
                'id': 'rss',
                'filter': [
                    'blog'
                ],
                'aliases': [
                    'feed'
                ]
            },
            {
                'name': 'HDD',
                'id': 'hdd-o',
                'filter': [
                    'harddrive',
                    'hard drive',
                    'storage',
                    'save'
                ]
            },
            {
                'name': 'bullhorn',
                'id': 'bullhorn',
                'filter': [
                    'announcement',
                    'share',
                    'broadcast',
                    'louder',
                    'megaphone'
                ]
            },
            {
                'name': 'bell',
                'id': 'bell',
                'filter': [
                    'alert',
                    'reminder',
                    'notification'
                ]
            },
            {
                'name': 'certificate',
                'id': 'certificate',
                'filter': [
                    'badge',
                    'star'
                ]
            },
            {
                'name': 'Hand Outlined Right',
                'id': 'hand-o-right',
                'filter': [
                    'point',
                    'right',
                    'next',
                    'forward',
                    'finger'
                ]
            },
            {
                'name': 'Hand Outlined Left',
                'id': 'hand-o-left',
                'filter': [
                    'point',
                    'left',
                    'previous',
                    'back',
                    'finger'
                ]
            },
            {
                'name': 'Hand Outlined Up',
                'id': 'hand-o-up',
                'filter': [
                    'point',
                    'finger'
                ]
            },
            {
                'name': 'Hand Outlined Down',
                'id': 'hand-o-down',
                'filter': [
                    'point',
                    'finger'
                ]
            },
            {
                'name': 'Arrow Circle Left',
                'id': 'arrow-circle-left',
                'filter': [
                    'previous',
                    'back'
                ]
            },
            {
                'name': 'Arrow Circle Right',
                'id': 'arrow-circle-right',
                'filter': [
                    'next',
                    'forward'
                ]
            },
            {
                'name': 'Arrow Circle Up',
                'id': 'arrow-circle-up'
            },
            {
                'name': 'Arrow Circle Down',
                'id': 'arrow-circle-down',
                'filter': [
                    'download'
                ]
            },
            {
                'name': 'Globe',
                'id': 'globe',
                'filter': [
                    'world',
                    'planet',
                    'map',
                    'place',
                    'travel',
                    'earth',
                    'global',
                    'translate',
                    'all',
                    'language',
                    'localize',
                    'location',
                    'coordinates',
                    'country'
                ]
            },
            {
                'name': 'Wrench',
                'id': 'wrench',
                'filter': [
                    'settings',
                    'fix',
                    'update',
                    'spanner'
                ]
            },
            {
                'name': 'Tasks',
                'id': 'tasks',
                'filter': [
                    'progress',
                    'loading',
                    'downloading',
                    'downloads',
                    'settings'
                ]
            },
            {
                'name': 'Filter',
                'id': 'filter',
                'filter': [
                    'funnel',
                    'options'
                ]
            },
            {
                'name': 'Briefcase',
                'id': 'briefcase',
                'filter': [
                    'work',
                    'business',
                    'office',
                    'luggage',
                    'bag'
                ]
            },
            {
                'name': 'Arrows Alt',
                'id': 'arrows-alt',
                'filter': [
                    'expand',
                    'enlarge',
                    'fullscreen',
                    'bigger',
                    'move',
                    'reorder',
                    'resize',
                    'arrow'
                ]
            },
            {
                'name': 'Users',
                'id': 'users',
                'filter': [
                    'people',
                    'profiles',
                    'persons'
                ],
                'aliases': [
                    'group'
                ]
            },
            {
                'name': 'Link',
                'id': 'link',
                'filter': [
                    'chain'
                ],
                'aliases': [
                    'chain'
                ]
            },
            {
                'name': 'Cloud',
                'id': 'cloud',
                'filter': [
                    'save'
                ]
            },
            {
                'name': 'Flask',
                'id': 'flask',
                'filter': [
                    'science',
                    'beaker',
                    'experimental',
                    'labs'
                ]
            },
            {
                'name': 'Scissors',
                'id': 'scissors',
                'aliases': [
                    'cut'
                ]
            },
            {
                'name': 'Files Outlined',
                'id': 'files-o',
                'filter': [
                    'duplicate',
                    'clone',
                    'copy'
                ],
                'aliases': [
                    'copy'
                ]
            },
            {
                'name': 'Paperclip',
                'id': 'paperclip',
                'filter': [
                    'attachment'
                ]
            },
            {
                'name': 'Floppy Outlined',
                'id': 'floppy-o',
                'aliases': [
                    'save'
                ]
            },
            {
                'name': 'Square',
                'id': 'square',
                'filter': [
                    'block',
                    'box'
                ]
            },
            {
                'name': 'Bars',
                'id': 'bars',
                'aliases': [
                    'navicon',
                    'reorder'
                ],
                'filter': [
                    'menu',
                    'drag',
                    'reorder',
                    'settings',
                    'list',
                    'ul',
                    'ol',
                    'checklist',
                    'todo',
                    'list',
                    'hamburger'
                ]
            },
            {
                'name': 'list-ul',
                'id': 'list-ul',
                'filter': [
                    'ul',
                    'ol',
                    'checklist',
                    'todo',
                    'list'
                ]
            },
            {
                'name': 'list-ol',
                'id': 'list-ol',
                'filter': [
                    'ul',
                    'ol',
                    'checklist',
                    'list',
                    'todo',
                    'list',
                    'numbers'
                ]
            },
            {
                'name': 'Strikethrough',
                'id': 'strikethrough'
            },
            {
                'name': 'Underline',
                'id': 'underline'
            },
            {
                'name': 'table',
                'id': 'table',
                'filter': [
                    'data',
                    'excel',
                    'spreadsheet'
                ]
            },
            {
                'name': 'magic',
                'id': 'magic',
                'filter': [
                    'wizard',
                    'automatic',
                    'autocomplete'
                ]
            },
            {
                'name': 'truck',
                'id': 'truck',
                'filter': [
                    'shipping'
                ]
            },
            {
                'name': 'Pinterest',
                'id': 'pinterest'
            },
            {
                'name': 'Pinterest Square',
                'id': 'pinterest-square'
            },
            {
                'name': 'Google Plus Square',
                'id': 'google-plus-square',
                'filter': [
                    'social network'
                ]
            },
            {
                'name': 'Google Plus',
                'id': 'google-plus',
                'filter': [
                    'social network'
                ]
            },
            {
                'name': 'Money',
                'id': 'money',
                'filter': [
                    'cash',
                    'money',
                    'buy',
                    'checkout',
                    'purchase',
                    'payment'
                ]
            },
            {
                'name': 'Caret Down',
                'id': 'caret-down',
                'filter': [
                    'more',
                    'dropdown',
                    'menu',
                    'triangle down',
                    'arrow'
                ]
            },
            {
                'name': 'Caret Up',
                'id': 'caret-up',
                'filter': [
                    'triangle up',
                    'arrow'
                ]
            },
            {
                'name': 'Caret Left',
                'id': 'caret-left',
                'filter': [
                    'previous',
                    'back',
                    'triangle left',
                    'arrow'
                ]
            },
            {
                'name': 'Caret Right',
                'id': 'caret-right',
                'filter': [
                    'next',
                    'forward',
                    'triangle right',
                    'arrow'
                ]
            },
            {
                'name': 'Columns',
                'id': 'columns',
                'filter': [
                    'split',
                    'panes'
                ]
            },
            {
                'name': 'Sort',
                'id': 'sort',
                'filter': [
                    'order'
                ],
                'aliases': [
                    'unsorted'
                ]
            },
            {
                'name': 'Sort Descending',
                'id': 'sort-desc',
                'filter': [
                    'dropdown',
                    'more',
                    'menu',
                    'arrow'
                ],
                'aliases': [
                    'sort-down'
                ]
            },
            {
                'name': 'Sort Ascending',
                'id': 'sort-asc',
                'aliases': [
                    'sort-up'
                ],
                'filter': [
                    'arrow'
                ]
            },
            {
                'name': 'Envelope',
                'id': 'envelope',
                'filter': [
                    'email',
                    'e-mail',
                    'letter',
                    'support',
                    'mail',
                    'message',
                    'notification'
                ]
            },
            {
                'name': 'LinkedIn',
                'id': 'linkedin'
            },
            {
                'name': 'Undo',
                'id': 'undo',
                'filter': [
                    'back'
                ],
                'aliases': [
                    'rotate-left'
                ]
            },
            {
                'name': 'Gavel',
                'id': 'gavel',
                'filter': [
                    'judge',
                    'lawyer',
                    'opinion'
                ],
                'aliases': [
                    'legal'
                ]
            },
            {
                'name': 'Tachometer',
                'id': 'tachometer',
                'filter': [
                    'speedometer',
                    'fast'
                ],
                'aliases': [
                    'dashboard'
                ]
            },
            {
                'name': 'comment-o',
                'id': 'comment-o',
                'filter': [
                    'speech',
                    'notification',
                    'note',
                    'chat',
                    'bubble',
                    'feedback',
                    'message',
                    'texting',
                    'sms',
                    'conversation'
                ]
            },
            {
                'name': 'comments-o',
                'id': 'comments-o',
                'filter': [
                    'speech',
                    'notification',
                    'note',
                    'chat',
                    'bubble',
                    'feedback',
                    'message',
                    'texting',
                    'sms',
                    'conversation'
                ]
            },
            {
                'name': 'Lightning Bolt',
                'id': 'bolt',
                'filter': [
                    'lightning',
                    'weather'
                ],
                'aliases': [
                    'flash'
                ]
            },
            {
                'name': 'Sitemap',
                'id': 'sitemap',
                'filter': [
                    'directory',
                    'hierarchy',
                    'organization'
                ]
            },
            {
                'name': 'Umbrella',
                'id': 'umbrella'
            },
            {
                'name': 'Clipboard',
                'id': 'clipboard',
                'filter': [
                    'copy'
                ],
                'aliases': [
                    'paste'
                ]
            },
            {
                'name': 'Lightbulb Outlined',
                'id': 'lightbulb-o',
                'filter': [
                    'idea',
                    'inspiration'
                ]
            },
            {
                'name': 'Exchange',
                'id': 'exchange',
                'filter': [
                    'transfer',
                    'arrows',
                    'arrow'
                ]
            },
            {
                'name': 'Cloud Download',
                'id': 'cloud-download',
                'filter': [
                    'import'
                ]
            },
            {
                'name': 'Cloud Upload',
                'id': 'cloud-upload',
                'filter': [
                    'import'
                ]
            },
            {
                'name': 'user-md',
                'id': 'user-md',
                'filter': [
                    'doctor',
                    'profile',
                    'medical',
                    'nurse'
                ]
            },
            {
                'name': 'Stethoscope',
                'id': 'stethoscope'
            },
            {
                'name': 'Suitcase',
                'id': 'suitcase',
                'filter': [
                    'trip',
                    'luggage',
                    'travel',
                    'move',
                    'baggage'
                ]
            },
            {
                'name': 'Bell Outlined',
                'id': 'bell-o',
                'filter': [
                    'alert',
                    'reminder',
                    'notification'
                ]
            },
            {
                'name': 'Coffee',
                'id': 'coffee',
                'filter': [
                    'morning',
                    'mug',
                    'breakfast',
                    'tea',
                    'drink',
                    'cafe'
                ]
            },
            {
                'name': 'Cutlery',
                'id': 'cutlery',
                'filter': [
                    'food',
                    'restaurant',
                    'spoon',
                    'knife',
                    'dinner',
                    'eat'
                ]
            },
            {
                'name': 'File Text Outlined',
                'id': 'file-text-o',
                'filter': [
                    'new',
                    'page',
                    'pdf',
                    'document'
                ]
            },
            {
                'name': 'Building Outlined',
                'id': 'building-o',
                'filter': [
                    'work',
                    'business',
                    'apartment',
                    'office',
                    'company'
                ]
            },
            {
                'name': 'hospital Outlined',
                'id': 'hospital-o',
                'filter': [
                    'building'
                ]
            },
            {
                'name': 'ambulance',
                'id': 'ambulance',
                'filter': [
                    'vehicle',
                    'support',
                    'help'
                ]
            },
            {
                'name': 'medkit',
                'id': 'medkit',
                'filter': [
                    'first aid',
                    'firstaid',
                    'help',
                    'support',
                    'health'
                ]
            },
            {
                'name': 'fighter-jet',
                'id': 'fighter-jet',
                'filter': [
                    'fly',
                    'plane',
                    'airplane',
                    'quick',
                    'fast',
                    'travel'
                ]
            },
            {
                'name': 'beer',
                'id': 'beer',
                'filter': [
                    'alcohol',
                    'stein',
                    'drink',
                    'mug',
                    'bar',
                    'liquor'
                ]
            },
            {
                'name': 'H Square',
                'id': 'h-square',
                'filter': [
                    'hospital',
                    'hotel'
                ]
            },
            {
                'name': 'Plus Square',
                'id': 'plus-square',
                'filter': [
                    'add',
                    'new',
                    'create',
                    'expand'
                ]
            },
            {
                'name': 'Angle Double Left',
                'id': 'angle-double-left',
                'filter': [
                    'laquo',
                    'quote',
                    'previous',
                    'back',
                    'arrows'
                ]
            },
            {
                'name': 'Angle Double Right',
                'id': 'angle-double-right',
                'filter': [
                    'raquo',
                    'quote',
                    'next',
                    'forward',
                    'arrows'
                ]
            },
            {
                'name': 'Angle Double Up',
                'id': 'angle-double-up',
                'filter': [
                    'arrows'
                ]
            },
            {
                'name': 'Angle Double Down',
                'id': 'angle-double-down',
                'filter': [
                    'arrows'
                ]
            },
            {
                'name': 'angle-left',
                'id': 'angle-left',
                'filter': [
                    'previous',
                    'back',
                    'arrow'
                ]
            },
            {
                'name': 'angle-right',
                'id': 'angle-right',
                'filter': [
                    'next',
                    'forward',
                    'arrow'
                ]
            },
            {
                'name': 'angle-up',
                'id': 'angle-up',
                'filter': [
                    'arrow'
                ]
            },
            {
                'name': 'angle-down',
                'id': 'angle-down',
                'filter': [
                    'arrow'
                ]
            },
            {
                'name': 'Desktop',
                'id': 'desktop',
                'filter': [
                    'monitor',
                    'screen',
                    'desktop',
                    'computer',
                    'demo',
                    'device'
                ]
            },
            {
                'name': 'Laptop',
                'id': 'laptop',
                'filter': [
                    'demo',
                    'computer',
                    'device'
                ]
            },
            {
                'name': 'tablet',
                'id': 'tablet',
                'filter': [
                    'ipad',
                    'device'
                ]
            },
            {
                'name': 'Mobile Phone',
                'id': 'mobile',
                'filter': [
                    'cell phone',
                    'cellphone',
                    'text',
                    'call',
                    'iphone',
                    'number',
                    'telephone'
                ],
                'aliases': [
                    'mobile-phone'
                ]
            },
            {
                'name': 'Circle Outlined',
                'id': 'circle-o'
            },
            {
                'name': 'quote-left',
                'id': 'quote-left'
            },
            {
                'name': 'quote-right',
                'id': 'quote-right'
            },
            {
                'name': 'Spinner',
                'id': 'spinner',
                'filter': [
                    'loading',
                    'progress'
                ]
            },
            {
                'name': 'Circle',
                'id': 'circle',
                'filter': [
                    'dot',
                    'notification'
                ]
            },
            {
                'name': 'Reply',
                'id': 'reply',
                'aliases': [
                    'mail-reply'
                ]
            },
            {
                'name': 'GitHub Alt',
                'id': 'github-alt',
                'filter': [
                    'octocat'
                ]
            },
            {
                'name': 'Folder Outlined',
                'id': 'folder-o'
            },
            {
                'name': 'Folder Open Outlined',
                'id': 'folder-open-o'
            },
            {
                'name': 'Smile Outlined',
                'id': 'smile-o',
                'filter': [
                    'face',
                    'emoticon',
                    'happy',
                    'approve',
                    'satisfied',
                    'rating'
                ]
            },
            {
                'name': 'Frown Outlined',
                'id': 'frown-o',
                'filter': [
                    'face',
                    'emoticon',
                    'sad',
                    'disapprove',
                    'rating'
                ]
            },
            {
                'name': 'Meh Outlined',
                'id': 'meh-o',
                'filter': [
                    'face',
                    'emoticon',
                    'rating',
                    'neutral'
                ]
            },
            {
                'name': 'Gamepad',
                'id': 'gamepad',
                'filter': [
                    'controller'
                ]
            },
            {
                'name': 'Keyboard Outlined',
                'id': 'keyboard-o',
                'filter': [
                    'type',
                    'input'
                ]
            },
            {
                'name': 'Flag Outlined',
                'id': 'flag-o',
                'filter': [
                    'report',
                    'notification'
                ]
            },
            {
                'name': 'flag-checkered',
                'id': 'flag-checkered',
                'filter': [
                    'report',
                    'notification',
                    'notify'
                ]
            },
            {
                'name': 'Terminal',
                'id': 'terminal',
                'filter': [
                    'command',
                    'prompt',
                    'code'
                ]
            },
            {
                'name': 'Code',
                'id': 'code',
                'filter': [
                    'html',
                    'brackets'
                ]
            },
            {
                'name': 'reply-all',
                'id': 'reply-all',
                'aliases': [
                    'mail-reply-all'
                ]
            },
            {
                'name': 'Star Half Outlined',
                'id': 'star-half-o',
                'filter': [
                    'award',
                    'achievement',
                    'rating',
                    'score'
                ],
                'aliases': [
                    'star-half-empty',
                    'star-half-full'
                ]
            },
            {
                'name': 'location-arrow',
                'id': 'location-arrow',
                'filter': [
                    'map',
                    'coordinates',
                    'location',
                    'address',
                    'place',
                    'where'
                ]
            },
            {
                'name': 'crop',
                'id': 'crop'
            },
            {
                'name': 'code-fork',
                'id': 'code-fork',
                'filter': [
                    'git',
                    'fork',
                    'vcs',
                    'svn',
                    'github',
                    'rebase',
                    'version',
                    'merge'
                ]
            },
            {
                'name': 'Chain Broken',
                'id': 'chain-broken',
                'filter': [
                    'remove'
                ],
                'aliases': [
                    'unlink'
                ]
            },
            {
                'name': 'Question',
                'id': 'question',
                'filter': [
                    'help',
                    'information',
                    'unknown',
                    'support'
                ]
            },
            {
                'name': 'Info',
                'id': 'info',
                'filter': [
                    'help',
                    'information',
                    'more',
                    'details'
                ]
            },
            {
                'name': 'exclamation',
                'id': 'exclamation',
                'filter': [
                    'warning',
                    'error',
                    'problem',
                    'notification',
                    'notify',
                    'alert'
                ]
            },
            {
                'name': 'superscript',
                'id': 'superscript',
                'filter': [
                    'exponential'
                ]
            },
            {
                'name': 'subscript',
                'id': 'subscript'
            },
            {
                'name': 'eraser',
                'id': 'eraser',
                'filter': [
                    'remove',
                    'delete'
                ]
            },
            {
                'name': 'Puzzle Piece',
                'id': 'puzzle-piece',
                'filter': [
                    'addon',
                    'add-on',
                    'section'
                ]
            },
            {
                'name': 'microphone',
                'id': 'microphone',
                'filter': [
                    'record',
                    'voice',
                    'sound'
                ]
            },
            {
                'name': 'Microphone Slash',
                'id': 'microphone-slash',
                'filter': [
                    'record',
                    'voice',
                    'sound',
                    'mute'
                ]
            },
            {
                'name': 'shield',
                'id': 'shield',
                'filter': [
                    'award',
                    'achievement',
                    'security',
                    'winner'
                ]
            },
            {
                'name': 'calendar-o',
                'id': 'calendar-o',
                'filter': [
                    'date',
                    'time',
                    'when',
                    'event'
                ]
            },
            {
                'name': 'fire-extinguisher',
                'id': 'fire-extinguisher'
            },
            {
                'name': 'rocket',
                'id': 'rocket',
                'filter': [
                    'app'
                ]
            },
            {
                'name': 'MaxCDN',
                'id': 'maxcdn'
            },
            {
                'name': 'Chevron Circle Left',
                'id': 'chevron-circle-left',
                'filter': [
                    'previous',
                    'back',
                    'arrow'
                ]
            },
            {
                'name': 'Chevron Circle Right',
                'id': 'chevron-circle-right',
                'filter': [
                    'next',
                    'forward',
                    'arrow'
                ]
            },
            {
                'name': 'Chevron Circle Up',
                'id': 'chevron-circle-up',
                'filter': [
                    'arrow'
                ]
            },
            {
                'name': 'Chevron Circle Down',
                'id': 'chevron-circle-down',
                'filter': [
                    'more',
                    'dropdown',
                    'menu',
                    'arrow'
                ]
            },
            {
                'name': 'HTML 5 Logo',
                'id': 'html5'
            },
            {
                'name': 'CSS 3 Logo',
                'id': 'css3',
                'filter': [
                    'code'
                ]
            },
            {
                'name': 'Anchor',
                'id': 'anchor',
                'filter': [
                    'link'
                ]
            },
            {
                'name': 'Unlock Alt',
                'id': 'unlock-alt',
                'filter': [
                    'protect',
                    'admin',
                    'password',
                    'lock'
                ]
            },
            {
                'name': 'Bullseye',
                'id': 'bullseye',
                'filter': [
                    'target'
                ]
            },
            {
                'name': 'Ellipsis Horizontal',
                'id': 'ellipsis-h',
                'filter': [
                    'dots'
                ]
            },
            {
                'name': 'Ellipsis Vertical',
                'id': 'ellipsis-v',
                'filter': [
                    'dots'
                ]
            },
            {
                'name': 'RSS Square',
                'id': 'rss-square',
                'filter': [
                    'feed',
                    'blog'
                ]
            },
            {
                'name': 'Play Circle',
                'id': 'play-circle',
                'filter': [
                    'start',
                    'playing'
                ]
            },
            {
                'name': 'Ticket',
                'id': 'ticket',
                'filter': [
                    'movie',
                    'pass',
                    'support'
                ]
            },
            {
                'name': 'Minus Square',
                'id': 'minus-square',
                'filter': [
                    'hide',
                    'minify',
                    'delete',
                    'remove',
                    'trash',
                    'hide',
                    'collapse'
                ]
            },
            {
                'name': 'Minus Square Outlined',
                'id': 'minus-square-o',
                'filter': [
                    'hide',
                    'minify',
                    'delete',
                    'remove',
                    'trash',
                    'hide',
                    'collapse'
                ]
            },
            {
                'name': 'Level Up',
                'id': 'level-up',
                'filter': [
                    'arrow'
                ]
            },
            {
                'name': 'Level Down',
                'id': 'level-down',
                'filter': [
                    'arrow'
                ]
            },
            {
                'name': 'Check Square',
                'id': 'check-square',
                'filter': [
                    'checkmark',
                    'done',
                    'todo',
                    'agree',
                    'accept',
                    'confirm',
                    'ok'
                ]
            },
            {
                'name': 'Pencil Square',
                'id': 'pencil-square',
                'filter': [
                    'write',
                    'edit',
                    'update'
                ]
            },
            {
                'name': 'External Link Square',
                'id': 'external-link-square',
                'filter': [
                    'open',
                    'new'
                ]
            },
            {
                'name': 'Share Square',
                'id': 'share-square',
                'filter': [
                    'social',
                    'send'
                ]
            },
            {
                'name': 'Compass',
                'id': 'compass',
                'filter': [
                    'safari',
                    'directory',
                    'menu',
                    'location'
                ]
            },
            {
                'name': 'Caret Square Outlined Down',
                'id': 'caret-square-o-down',
                'aliases': [
                    'toggle-down'
                ],
                'filter': [
                    'more',
                    'dropdown',
                    'menu'
                ]
            },
            {
                'name': 'Caret Square Outlined Up',
                'id': 'caret-square-o-up',
                'aliases': [
                    'toggle-up'
                ]
            },
            {
                'name': 'Caret Square Outlined Right',
                'id': 'caret-square-o-right',
                'filter': [
                    'next',
                    'forward'
                ],
                'aliases': [
                    'toggle-right'
                ]
            },
            {
                'name': 'Euro (EUR)',
                'id': 'eur',
                'aliases': [
                    'euro'
                ]
            },
            {
                'name': 'GBP',
                'id': 'gbp'
            },
            {
                'name': 'US Dollar',
                'id': 'usd',
                'aliases': [
                    'dollar'
                ]
            },
            {
                'name': 'Indian Rupee (INR)',
                'id': 'inr',
                'aliases': [
                    'rupee'
                ]
            },
            {
                'name': 'Japanese Yen (JPY)',
                'id': 'jpy',
                'aliases': [
                    'cny',
                    'rmb',
                    'yen'
                ]
            },
            {
                'name': 'Russian Ruble (RUB)',
                'id': 'rub',
                'aliases': [
                    'ruble',
                    'rouble'
                ]
            },
            {
                'name': 'Korean Won (KRW)',
                'id': 'krw',
                'aliases': [
                    'won'
                ]
            },
            {
                'name': 'Bitcoin (BTC)',
                'id': 'btc',
                'aliases': [
                    'bitcoin'
                ]
            },
            {
                'name': 'File',
                'id': 'file',
                'filter': [
                    'new',
                    'page',
                    'pdf',
                    'document'
                ]
            },
            {
                'name': 'File Text',
                'id': 'file-text',
                'filter': [
                    'new',
                    'page',
                    'pdf',
                    'document'
                ]
            },
            {
                'name': 'Sort Alpha Ascending',
                'id': 'sort-alpha-asc'
            },
            {
                'name': 'Sort Alpha Descending',
                'id': 'sort-alpha-desc'
            },
            {
                'name': 'Sort Amount Ascending',
                'id': 'sort-amount-asc'
            },
            {
                'name': 'Sort Amount Descending',
                'id': 'sort-amount-desc'
            },
            {
                'name': 'Sort Numeric Ascending',
                'id': 'sort-numeric-asc',
                'filter': [
                    'numbers'
                ]
            },
            {
                'name': 'Sort Numeric Descending',
                'id': 'sort-numeric-desc',
                'filter': [
                    'numbers'
                ]
            },
            {
                'name': 'thumbs-up',
                'id': 'thumbs-up',
                'filter': [
                    'like',
                    'favorite',
                    'approve',
                    'agree',
                    'hand'
                ]
            },
            {
                'name': 'thumbs-down',
                'id': 'thumbs-down',
                'filter': [
                    'dislike',
                    'disapprove',
                    'disagree',
                    'hand'
                ]
            },
            {
                'name': 'YouTube Square',
                'id': 'youtube-square',
                'filter': [
                    'video',
                    'film'
                ]
            },
            {
                'name': 'YouTube',
                'id': 'youtube',
                'filter': [
                    'video',
                    'film'
                ]
            },
            {
                'name': 'Xing',
                'id': 'xing'
            },
            {
                'name': 'Xing Square',
                'id': 'xing-square'
            },
            {
                'name': 'YouTube Play',
                'id': 'youtube-play',
                'filter': [
                    'start',
                    'playing'
                ]
            },
            {
                'name': 'Dropbox',
                'id': 'dropbox'
            },
            {
                'name': 'Stack Overflow',
                'id': 'stack-overflow'
            },
            {
                'name': 'Instagram',
                'id': 'instagram'
            },
            {
                'name': 'Flickr',
                'id': 'flickr'
            },
            {
                'name': 'App.net',
                'id': 'adn'
            },
            {
                'name': 'Bitbucket',
                'id': 'bitbucket',
                'filter': [
                    'git'
                ]
            },
            {
                'name': 'Bitbucket Square',
                'id': 'bitbucket-square',
                'filter': [
                    'git'
                ]
            },
            {
                'name': 'Tumblr',
                'id': 'tumblr'
            },
            {
                'name': 'Tumblr Square',
                'id': 'tumblr-square'
            },
            {
                'name': 'Long Arrow Down',
                'id': 'long-arrow-down'
            },
            {
                'name': 'Long Arrow Up',
                'id': 'long-arrow-up'
            },
            {
                'name': 'Long Arrow Left',
                'id': 'long-arrow-left',
                'filter': [
                    'previous',
                    'back'
                ]
            },
            {
                'name': 'Long Arrow Right',
                'id': 'long-arrow-right'
            },
            {
                'name': 'Apple',
                'id': 'apple',
                'filter': [
                    'osx',
                    'food'
                ]
            },
            {
                'name': 'Windows',
                'id': 'windows',
                'filter': [
                    'microsoft'
                ]
            },
            {
                'name': 'Android',
                'id': 'android',
                'filter': [
                    'robot'
                ]
            },
            {
                'name': 'Linux',
                'id': 'linux',
                'filter': [
                    'tux'
                ]
            },
            {
                'name': 'Dribbble',
                'id': 'dribbble'
            },
            {
                'name': 'Skype',
                'id': 'skype'
            },
            {
                'name': 'Foursquare',
                'id': 'foursquare'
            },
            {
                'name': 'Trello',
                'id': 'trello'
            },
            {
                'name': 'Female',
                'id': 'female',
                'filter': [
                    'woman',
                    'user',
                    'person',
                    'profile'
                ]
            },
            {
                'name': 'Male',
                'id': 'male',
                'filter': [
                    'man',
                    'user',
                    'person',
                    'profile'
                ]
            },
            {
                'name': 'Gratipay (Gittip)',
                'id': 'gratipay',
                'aliases': [
                    'gittip'
                ],
                'filter': [
                    'heart',
                    'like',
                    'favorite',
                    'love'
                ]
            },
            {
                'name': 'Sun Outlined',
                'id': 'sun-o',
                'filter': [
                    'weather',
                    'contrast',
                    'lighter',
                    'brighten',
                    'day'
                ]
            },
            {
                'name': 'Moon Outlined',
                'id': 'moon-o',
                'filter': [
                    'night',
                    'darker',
                    'contrast'
                ]
            },
            {
                'name': 'Archive',
                'id': 'archive',
                'filter': [
                    'box',
                    'storage'
                ]
            },
            {
                'name': 'Bug',
                'id': 'bug',
                'filter': [
                    'report',
                    'insect'
                ]
            },
            {
                'name': 'VK',
                'id': 'vk'
            },
            {
                'name': 'Weibo',
                'id': 'weibo'
            },
            {
                'name': 'Renren',
                'id': 'renren'
            },
            {
                'name': 'Pagelines',
                'id': 'pagelines',
                'filter': [
                    'leaf',
                    'leaves',
                    'tree',
                    'plant',
                    'eco',
                    'nature'
                ]
            },
            {
                'name': 'Stack Exchange',
                'id': 'stack-exchange'
            },
            {
                'name': 'Arrow Circle Outlined Right',
                'id': 'arrow-circle-o-right',
                'filter': [
                    'next',
                    'forward'
                ]
            },
            {
                'name': 'Arrow Circle Outlined Left',
                'id': 'arrow-circle-o-left',
                'filter': [
                    'previous',
                    'back'
                ]
            },
            {
                'name': 'Caret Square Outlined Left',
                'id': 'caret-square-o-left',
                'filter': [
                    'previous',
                    'back'
                ],
                'aliases': [
                    'toggle-left'
                ]
            },
            {
                'name': 'Dot Circle Outlined',
                'id': 'dot-circle-o',
                'filter': [
                    'target',
                    'bullseye',
                    'notification'
                ]
            },
            {
                'name': 'Wheelchair',
                'id': 'wheelchair',
                'filter': [
                    'handicap',
                    'person'
                ]
            },
            {
                'name': 'Vimeo Square',
                'id': 'vimeo-square'
            },
            {
                'name': 'Turkish Lira (TRY)',
                'id': 'try',
                'aliases': [
                    'turkish-lira'
                ]
            },
            {
                'name': 'Plus Square Outlined',
                'id': 'plus-square-o',
                'filter': [
                    'add',
                    'new',
                    'create',
                    'expand'
                ]
            },
            {
                'name': 'Space Shuttle',
                'id': 'space-shuttle',
                'filter': null
            },
            {
                'name': 'Slack Logo',
                'id': 'slack',
                'filter': [
                    'hashtag',
                    'anchor',
                    'hash'
                ]
            },
            {
                'name': 'Envelope Square',
                'id': 'envelope-square',
                'filter': [
                    'email',
                    'e-mail',
                    'letter',
                    'support',
                    'mail',
                    'message',
                    'notification'
                ]
            },
            {
                'name': 'WordPress Logo',
                'id': 'wordpress'
            },
            {
                'name': 'OpenID',
                'id': 'openid'
            },
            {
                'name': 'University',
                'id': 'university',
                'aliases': [
                    'institution',
                    'bank'
                ]
            },
            {
                'name': 'Graduation Cap',
                'id': 'graduation-cap',
                'aliases': [
                    'mortar-board'
                ],
                'filter': [
                    'learning',
                    'school',
                    'student'
                ]
            },
            {
                'name': 'Yahoo Logo',
                'id': 'yahoo'
            },
            {
                'name': 'Google Logo',
                'id': 'google'
            },
            {
                'name': 'reddit Logo',
                'id': 'reddit'
            },
            {
                'name': 'reddit Square',
                'id': 'reddit-square'
            },
            {
                'name': 'StumbleUpon Circle',
                'id': 'stumbleupon-circle'
            },
            {
                'name': 'StumbleUpon Logo',
                'id': 'stumbleupon'
            },
            {
                'name': 'Delicious Logo',
                'id': 'delicious'
            },
            {
                'name': 'Digg Logo',
                'id': 'digg'
            },
            {
                'name': 'Pied Piper PP Logo (Old)',
                'id': 'pied-piper-pp'
            },
            {
                'name': 'Pied Piper Alternate Logo',
                'id': 'pied-piper-alt'
            },
            {
                'name': 'Drupal Logo',
                'id': 'drupal'
            },
            {
                'name': 'Joomla Logo',
                'id': 'joomla'
            },
            {
                'name': 'Language',
                'id': 'language'
            },
            {
                'name': 'Fax',
                'id': 'fax'
            },
            {
                'name': 'Building',
                'id': 'building',
                'filter': [
                    'work',
                    'business',
                    'apartment',
                    'office',
                    'company'
                ]
            },
            {
                'name': 'Child',
                'id': 'child'
            },
            {
                'name': 'Paw',
                'id': 'paw',
                'filter': [
                    'pet'
                ]
            },
            {
                'name': 'spoon',
                'id': 'spoon'
            },
            {
                'name': 'Cube',
                'id': 'cube'
            },
            {
                'name': 'Cubes',
                'id': 'cubes'
            },
            {
                'name': 'Behance',
                'id': 'behance'
            },
            {
                'name': 'Behance Square',
                'id': 'behance-square'
            },
            {
                'name': 'Steam',
                'id': 'steam'
            },
            {
                'name': 'Steam Square',
                'id': 'steam-square'
            },
            {
                'name': 'Recycle',
                'id': 'recycle'
            },
            {
                'name': 'Car',
                'id': 'car',
                'aliases': [
                    'automobile'
                ],
                'filter': [
                    'vehicle'
                ]
            },
            {
                'name': 'Taxi',
                'id': 'taxi',
                'aliases': [
                    'cab'
                ],
                'filter': [
                    'vehicle'
                ]
            },
            {
                'name': 'Tree',
                'id': 'tree'
            },
            {
                'name': 'Spotify',
                'id': 'spotify'
            },
            {
                'name': 'deviantART',
                'id': 'deviantart'
            },
            {
                'name': 'SoundCloud',
                'id': 'soundcloud'
            },
            {
                'name': 'Database',
                'id': 'database'
            },
            {
                'name': 'PDF File Outlined',
                'id': 'file-pdf-o'
            },
            {
                'name': 'Word File Outlined',
                'id': 'file-word-o'
            },
            {
                'name': 'Excel File Outlined',
                'id': 'file-excel-o'
            },
            {
                'name': 'Powerpoint File Outlined',
                'id': 'file-powerpoint-o'
            },
            {
                'name': 'Image File Outlined',
                'id': 'file-image-o',
                'aliases': [
                    'file-photo-o',
                    'file-picture-o'
                ]
            },
            {
                'name': 'Archive File Outlined',
                'id': 'file-archive-o',
                'aliases': [
                    'file-zip-o'
                ]
            },
            {
                'name': 'Audio File Outlined',
                'id': 'file-audio-o',
                'aliases': [
                    'file-sound-o'
                ]
            },
            {
                'name': 'Video File Outlined',
                'id': 'file-video-o',
                'aliases': [
                    'file-movie-o'
                ]
            },
            {
                'name': 'Code File Outlined',
                'id': 'file-code-o'
            },
            {
                'name': 'Vine',
                'id': 'vine'
            },
            {
                'name': 'Codepen',
                'id': 'codepen'
            },
            {
                'name': 'jsFiddle',
                'id': 'jsfiddle'
            },
            {
                'name': 'Life Ring',
                'id': 'life-ring',
                'aliases': [
                    'life-buoy',
                    'life-saver',
                    'support'
                ]
            },
            {
                'name': 'Circle Outlined Notched',
                'id': 'circle-o-notch'
            },
            {
                'name': 'Rebel Alliance',
                'id': 'rebel',
                'aliases': [
                    'ra',
                    'resistance'
                ]
            },
            {
                'name': 'Galactic Empire',
                'id': 'empire',
                'aliases': [
                    'ge'
                ]
            },
            {
                'name': 'Git Square',
                'id': 'git-square'
            },
            {
                'name': 'Git',
                'id': 'git'
            },
            {
                'name': 'Hacker News',
                'id': 'hacker-news',
                'aliases': [
                    'y-combinator-square',
                    'yc-square'
                ]
            },
            {
                'name': 'Tencent Weibo',
                'id': 'tencent-weibo'
            },
            {
                'name': 'QQ',
                'id': 'qq'
            },
            {
                'name': 'Weixin (WeChat)',
                'id': 'weixin',
                'aliases': [
                    'wechat'
                ]
            },
            {
                'name': 'Paper Plane',
                'id': 'paper-plane',
                'aliases': [
                    'send'
                ]
            },
            {
                'name': 'Paper Plane Outlined',
                'id': 'paper-plane-o',
                'aliases': [
                    'send-o'
                ]
            },
            {
                'name': 'History',
                'id': 'history'
            },
            {
                'name': 'Circle Outlined Thin',
                'id': 'circle-thin'
            },
            {
                'name': 'header',
                'id': 'header',
                'filter': [
                    'heading'
                ]
            },
            {
                'name': 'paragraph',
                'id': 'paragraph'
            },
            {
                'name': 'Sliders',
                'id': 'sliders',
                'filter': [
                    'settings'
                ]
            },
            {
                'name': 'Share Alt',
                'id': 'share-alt'
            },
            {
                'name': 'Share Alt Square',
                'id': 'share-alt-square'
            },
            {
                'name': 'Bomb',
                'id': 'bomb'
            },
            {
                'name': 'Futbol Outlined',
                'id': 'futbol-o',
                'aliases': [
                    'soccer-ball-o'
                ]
            },
            {
                'name': 'TTY',
                'id': 'tty'
            },
            {
                'name': 'Binoculars',
                'id': 'binoculars'
            },
            {
                'name': 'Plug',
                'id': 'plug',
                'filter': [
                    'power',
                    'connect'
                ]
            },
            {
                'name': 'Slideshare',
                'id': 'slideshare'
            },
            {
                'name': 'Twitch',
                'id': 'twitch'
            },
            {
                'name': 'Yelp',
                'id': 'yelp'
            },
            {
                'name': 'Newspaper Outlined',
                'id': 'newspaper-o',
                'filter': [
                    'press'
                ]
            },
            {
                'name': 'WiFi',
                'id': 'wifi'
            },
            {
                'name': 'Calculator',
                'id': 'calculator'
            },
            {
                'name': 'Paypal',
                'id': 'paypal'
            },
            {
                'name': 'Google Wallet',
                'id': 'google-wallet'
            },
            {
                'name': 'Visa Credit Card',
                'id': 'cc-visa'
            },
            {
                'name': 'MasterCard Credit Card',
                'id': 'cc-mastercard'
            },
            {
                'name': 'Discover Credit Card',
                'id': 'cc-discover'
            },
            {
                'name': 'American Express Credit Card',
                'id': 'cc-amex',
                'filter': [
                    'amex'
                ]
            },
            {
                'name': 'Paypal Credit Card',
                'id': 'cc-paypal'
            },
            {
                'name': 'Stripe Credit Card',
                'id': 'cc-stripe'
            },
            {
                'name': 'Bell Slash',
                'id': 'bell-slash'
            },
            {
                'name': 'Bell Slash Outlined',
                'id': 'bell-slash-o'
            },
            {
                'name': 'Trash',
                'id': 'trash',
                'filter': [
                    'garbage',
                    'delete',
                    'remove',
                    'hide'
                ]
            },
            {
                'name': 'Copyright',
                'id': 'copyright'
            },
            {
                'name': 'At',
                'id': 'at',
                'filter': [
                    'email',
                    'e-mail'
                ]
            },
            {
                'name': 'Eyedropper',
                'id': 'eyedropper'
            },
            {
                'name': 'Paint Brush',
                'id': 'paint-brush'
            },
            {
                'name': 'Birthday Cake',
                'id': 'birthday-cake'
            },
            {
                'name': 'Area Chart',
                'id': 'area-chart',
                'filter': [
                    'graph',
                    'analytics'
                ]
            },
            {
                'name': 'Pie Chart',
                'id': 'pie-chart',
                'filter': [
                    'graph',
                    'analytics'
                ]
            },
            {
                'name': 'Line Chart',
                'id': 'line-chart',
                'filter': [
                    'graph',
                    'analytics'
                ]
            },
            {
                'name': 'last.fm',
                'id': 'lastfm'
            },
            {
                'name': 'last.fm Square',
                'id': 'lastfm-square'
            },
            {
                'name': 'Toggle Off',
                'id': 'toggle-off'
            },
            {
                'name': 'Toggle On',
                'id': 'toggle-on'
            },
            {
                'name': 'Bicycle',
                'id': 'bicycle',
                'filter': [
                    'vehicle',
                    'bike'
                ]
            },
            {
                'name': 'Bus',
                'id': 'bus',
                'filter': [
                    'vehicle'
                ]
            },
            {
                'name': 'ioxhost',
                'id': 'ioxhost'
            },
            {
                'name': 'AngelList',
                'id': 'angellist'
            },
            {
                'name': 'Closed Captions',
                'id': 'cc'
            },
            {
                'name': 'Shekel (ILS)',
                'id': 'ils',
                'aliases': [
                    'shekel',
                    'sheqel'
                ]
            },
            {
                'name': 'meanpath',
                'id': 'meanpath'
            },
            {
                'name': 'BuySellAds',
                'id': 'buysellads'
            },
            {
                'name': 'Connect Develop',
                'id': 'connectdevelop'
            },
            {
                'name': 'DashCube',
                'id': 'dashcube'
            },
            {
                'name': 'Forumbee',
                'id': 'forumbee'
            },
            {
                'name': 'Leanpub',
                'id': 'leanpub'
            },
            {
                'name': 'Sellsy',
                'id': 'sellsy'
            },
            {
                'name': 'Shirts in Bulk',
                'id': 'shirtsinbulk'
            },
            {
                'name': 'SimplyBuilt',
                'id': 'simplybuilt'
            },
            {
                'name': 'skyatlas',
                'id': 'skyatlas'
            },
            {
                'name': 'Add to Shopping Cart',
                'id': 'cart-plus',
                'filter': [
                    'add',
                    'shopping'
                ]
            },
            {
                'name': 'Shopping Cart Arrow Down',
                'id': 'cart-arrow-down',
                'filter': [
                    'shopping'
                ]
            },
            {
                'name': 'Diamond',
                'id': 'diamond',
                'filter': [
                    'gem',
                    'gemstone'
                ]
            },
            {
                'name': 'Ship',
                'id': 'ship',
                'filter': [
                    'boat',
                    'sea'
                ]
            },
            {
                'name': 'User Secret',
                'id': 'user-secret',
                'filter': [
                    'whisper',
                    'spy',
                    'incognito',
                    'privacy'
                ]
            },
            {
                'name': 'Motorcycle',
                'id': 'motorcycle',
                'filter': [
                    'vehicle',
                    'bike'
                ]
            },
            {
                'name': 'Street View',
                'id': 'street-view',
                'filter': [
                    'map'
                ]
            },
            {
                'name': 'Heartbeat',
                'id': 'heartbeat',
                'filter': [
                    'ekg'
                ]
            },
            {
                'name': 'Venus',
                'id': 'venus',
                'filter': [
                    'female'
                ]
            },
            {
                'name': 'Mars',
                'id': 'mars',
                'filter': [
                    'male'
                ]
            },
            {
                'name': 'Mercury',
                'id': 'mercury',
                'filter': [
                    'transgender'
                ]
            },
            {
                'name': 'Transgender',
                'id': 'transgender',
                'aliases': [
                    'intersex'
                ]
            },
            {
                'name': 'Transgender Alt',
                'id': 'transgender-alt'
            },
            {
                'name': 'Venus Double',
                'id': 'venus-double'
            },
            {
                'name': 'Mars Double',
                'id': 'mars-double'
            },
            {
                'name': 'Venus Mars',
                'id': 'venus-mars'
            },
            {
                'name': 'Mars Stroke',
                'id': 'mars-stroke'
            },
            {
                'name': 'Mars Stroke Vertical',
                'id': 'mars-stroke-v'
            },
            {
                'name': 'Mars Stroke Horizontal',
                'id': 'mars-stroke-h'
            },
            {
                'name': 'Neuter',
                'id': 'neuter'
            },
            {
                'name': 'Genderless',
                'id': 'genderless'
            },
            {
                'name': 'Facebook Official',
                'id': 'facebook-official'
            },
            {
                'name': 'Pinterest P',
                'id': 'pinterest-p'
            },
            {
                'name': 'What\'s App',
                'id': 'whatsapp'
            },
            {
                'name': 'Server',
                'id': 'server'
            },
            {
                'name': 'Add User',
                'id': 'user-plus',
                'filter': [
                    'sign up',
                    'signup'
                ]
            },
            {
                'name': 'Remove User',
                'id': 'user-times'
            },
            {
                'name': 'Bed',
                'id': 'bed',
                'filter': [
                    'travel'
                ],
                'aliases': [
                    'hotel'
                ]
            },
            {
                'name': 'Viacoin',
                'id': 'viacoin'
            },
            {
                'name': 'Train',
                'id': 'train'
            },
            {
                'name': 'Subway',
                'id': 'subway'
            },
            {
                'name': 'Medium',
                'id': 'medium'
            },
            {
                'name': 'Y Combinator',
                'id': 'y-combinator',
                'aliases': [
                    'yc'
                ]
            },
            {
                'name': 'Optin Monster',
                'id': 'optin-monster'
            },
            {
                'name': 'OpenCart',
                'id': 'opencart'
            },
            {
                'name': 'ExpeditedSSL',
                'id': 'expeditedssl'
            },
            {
                'name': 'Battery Full',
                'id': 'battery-full',
                'aliases': [
                    'battery-4',
                    'battery'
                ],
                'filter': [
                    'power'
                ]
            },
            {
                'name': 'Battery 3/4 Full',
                'id': 'battery-three-quarters',
                'aliases': [
                    'battery-3'
                ],
                'filter': [
                    'power'
                ]
            },
            {
                'name': 'Battery 1/2 Full',
                'id': 'battery-half',
                'aliases': [
                    'battery-2'
                ],
                'filter': [
                    'power'
                ]
            },
            {
                'name': 'Battery 1/4 Full',
                'id': 'battery-quarter',
                'aliases': [
                    'battery-1'
                ],
                'filter': [
                    'power'
                ]
            },
            {
                'name': 'Battery Empty',
                'id': 'battery-empty',
                'aliases': [
                    'battery-0'
                ],
                'filter': [
                    'power'
                ]
            },
            {
                'name': 'Mouse Pointer',
                'id': 'mouse-pointer'
            },
            {
                'name': 'I Beam Cursor',
                'id': 'i-cursor'
            },
            {
                'name': 'Object Group',
                'id': 'object-group'
            },
            {
                'name': 'Object Ungroup',
                'id': 'object-ungroup'
            },
            {
                'name': 'Sticky Note',
                'id': 'sticky-note'
            },
            {
                'name': 'Sticky Note Outlined',
                'id': 'sticky-note-o'
            },
            {
                'name': 'JCB Credit Card',
                'id': 'cc-jcb'
            },
            {
                'name': 'Diner\'s Club Credit Card',
                'id': 'cc-diners-club'
            },
            {
                'name': 'Clone',
                'id': 'clone',
                'filter': [
                    'copy'
                ]
            },
            {
                'name': 'Balance Scale',
                'id': 'balance-scale'
            },
            {
                'name': 'Hourglass Outlined',
                'id': 'hourglass-o'
            },
            {
                'name': 'Hourglass Start',
                'id': 'hourglass-start',
                'aliases': [
                    'hourglass-1'
                ]
            },
            {
                'name': 'Hourglass Half',
                'id': 'hourglass-half',
                'aliases': [
                    'hourglass-2'
                ]
            },
            {
                'name': 'Hourglass End',
                'id': 'hourglass-end',
                'aliases': [
                    'hourglass-3'
                ]
            },
            {
                'name': 'Hourglass',
                'id': 'hourglass'
            },
            {
                'name': 'Rock (Hand)',
                'id': 'hand-rock-o',
                'aliases': [
                    'hand-grab-o'
                ]
            },
            {
                'name': 'Paper (Hand)',
                'id': 'hand-paper-o',
                'aliases': [
                    'hand-stop-o'
                ],
                'filter': [
                    'stop'
                ]
            },
            {
                'name': 'Scissors (Hand)',
                'id': 'hand-scissors-o'
            },
            {
                'name': 'Lizard (Hand)',
                'id': 'hand-lizard-o'
            },
            {
                'name': 'Spock (Hand)',
                'id': 'hand-spock-o'
            },
            {
                'name': 'Hand Pointer',
                'id': 'hand-pointer-o'
            },
            {
                'name': 'Hand Peace',
                'id': 'hand-peace-o'
            },
            {
                'name': 'Trademark',
                'id': 'trademark'
            },
            {
                'name': 'Registered Trademark',
                'id': 'registered'
            },
            {
                'name': 'Creative Commons',
                'id': 'creative-commons'
            },
            {
                'name': 'GG Currency',
                'id': 'gg'
            },
            {
                'name': 'GG Currency Circle',
                'id': 'gg-circle'
            },
            {
                'name': 'TripAdvisor',
                'id': 'tripadvisor'
            },
            {
                'name': 'Odnoklassniki',
                'id': 'odnoklassniki'
            },
            {
                'name': 'Odnoklassniki Square',
                'id': 'odnoklassniki-square'
            },
            {
                'name': 'Get Pocket',
                'id': 'get-pocket'
            },
            {
                'name': 'Wikipedia W',
                'id': 'wikipedia-w'
            },
            {
                'name': 'Safari',
                'id': 'safari',
                'filter': [
                    'browser'
                ]
            },
            {
                'name': 'Chrome',
                'id': 'chrome',
                'filter': [
                    'browser'
                ]
            },
            {
                'name': 'Firefox',
                'id': 'firefox',
                'filter': [
                    'browser'
                ]
            },
            {
                'name': 'Opera',
                'id': 'opera'
            },
            {
                'name': 'Internet-explorer',
                'id': 'internet-explorer',
                'filter': [
                    'browser',
                    'ie'
                ]
            },
            {
                'name': 'Television',
                'id': 'television',
                'aliases': [
                    'tv'
                ],
                'filter': [
                    'display',
                    'computer',
                    'monitor'
                ]
            },
            {
                'name': 'Contao',
                'id': 'contao'
            },
            {
                'name': '500px',
                'id': '500px'
            },
            {
                'name': 'Amazon',
                'id': 'amazon'
            },
            {
                'name': 'Calendar Plus Outlined',
                'id': 'calendar-plus-o'
            },
            {
                'name': 'Calendar Minus Outlined',
                'id': 'calendar-minus-o'
            },
            {
                'name': 'Calendar Times Outlined',
                'id': 'calendar-times-o'
            },
            {
                'name': 'Calendar Check Outlined',
                'id': 'calendar-check-o',
                'filter': [
                    'ok'
                ]
            },
            {
                'name': 'Industry',
                'id': 'industry',
                'filter': [
                    'factory'
                ]
            },
            {
                'name': 'Map Pin',
                'id': 'map-pin'
            },
            {
                'name': 'Map Signs',
                'id': 'map-signs'
            },
            {
                'name': 'Map Outlined',
                'id': 'map-o'
            },
            {
                'name': 'Map',
                'id': 'map'
            },
            {
                'name': 'Commenting',
                'id': 'commenting',
                'filter': [
                    'speech',
                    'notification',
                    'note',
                    'chat',
                    'bubble',
                    'feedback',
                    'message',
                    'texting',
                    'sms',
                    'conversation'
                ]
            },
            {
                'name': 'Commenting Outlined',
                'id': 'commenting-o',
                'filter': [
                    'speech',
                    'notification',
                    'note',
                    'chat',
                    'bubble',
                    'feedback',
                    'message',
                    'texting',
                    'sms',
                    'conversation'
                ]
            },
            {
                'name': 'Houzz',
                'id': 'houzz'
            },
            {
                'name': 'Vimeo',
                'id': 'vimeo'
            },
            {
                'name': 'Font Awesome Black Tie',
                'id': 'black-tie'
            },
            {
                'name': 'Fonticons',
                'id': 'fonticons'
            },
            {
                'name': 'reddit Alien',
                'id': 'reddit-alien'
            },
            {
                'name': 'Edge Browser',
                'id': 'edge',
                'filter': [
                    'browser',
                    'ie'
                ]
            },
            {
                'name': 'Credit Card',
                'id': 'credit-card-alt',
                'filter': [
                    'money',
                    'buy',
                    'debit',
                    'checkout',
                    'purchase',
                    'payment',
                    'credit card'
                ]
            },
            {
                'name': 'Codie Pie',
                'id': 'codiepie'
            },
            {
                'name': 'MODX',
                'id': 'modx'
            },
            {
                'name': 'Fort Awesome',
                'id': 'fort-awesome'
            },
            {
                'name': 'USB',
                'id': 'usb'
            },
            {
                'name': 'Product Hunt',
                'id': 'product-hunt'
            },
            {
                'name': 'Mixcloud',
                'id': 'mixcloud'
            },
            {
                'name': 'Scribd',
                'id': 'scribd'
            },
            {
                'name': 'Pause Circle',
                'id': 'pause-circle'
            },
            {
                'name': 'Pause Circle Outlined',
                'id': 'pause-circle-o'
            },
            {
                'name': 'Stop Circle',
                'id': 'stop-circle'
            },
            {
                'name': 'Stop Circle Outlined',
                'id': 'stop-circle-o'
            },
            {
                'name': 'Shopping Bag',
                'id': 'shopping-bag'
            },
            {
                'name': 'Shopping Basket',
                'id': 'shopping-basket'
            },
            {
                'name': 'Hashtag',
                'id': 'hashtag'
            },
            {
                'name': 'Bluetooth',
                'id': 'bluetooth'
            },
            {
                'name': 'Bluetooth',
                'id': 'bluetooth-b'
            },
            {
                'name': 'Percent',
                'id': 'percent'
            },
            {
                'name': 'GitLab',
                'id': 'gitlab'
            },
            {
                'name': 'WPBeginner',
                'id': 'wpbeginner'
            },
            {
                'name': 'WPForms',
                'id': 'wpforms'
            },
            {
                'name': 'Envira Gallery',
                'id': 'envira',
                'filter': [
                    'leaf'
                ]
            },
            {
                'name': 'Universal Access',
                'id': 'universal-access'
            },
            {
                'name': 'Wheelchair Alt',
                'id': 'wheelchair-alt',
                'filter': [
                    'handicap',
                    'person'
                ]
            },
            {
                'name': 'Question Circle Outlined',
                'id': 'question-circle-o'
            },
            {
                'name': 'Blind',
                'id': 'blind'
            },
            {
                'name': 'Audio Description',
                'id': 'audio-description'
            },
            {
                'name': 'Volume Control Phone',
                'id': 'volume-control-phone',
                'filter': [
                    'telephone'
                ]
            },
            {
                'name': 'Braille',
                'id': 'braille'
            },
            {
                'name': 'Assistive Listening Systems',
                'id': 'assistive-listening-systems'
            },
            {
                'name': 'American Sign Language Interpreting',
                'id': 'american-sign-language-interpreting',
                'aliases': [
                    'asl-interpreting'
                ]
            },
            {
                'name': 'Deaf',
                'id': 'deaf',
                'aliases': [
                    'deafness',
                    'hard-of-hearing'
                ]
            },
            {
                'name': 'Glide',
                'id': 'glide'
            },
            {
                'name': 'Glide G',
                'id': 'glide-g'
            },
            {
                'name': 'Sign Language',
                'id': 'sign-language',
                'aliases': [
                    'signing'
                ]
            },
            {
                'name': 'Low Vision',
                'id': 'low-vision'
            },
            {
                'name': 'Viadeo',
                'id': 'viadeo'
            },
            {
                'name': 'Viadeo Square',
                'id': 'viadeo-square'
            },
            {
                'name': 'Snapchat',
                'id': 'snapchat'
            },
            {
                'name': 'Snapchat Ghost',
                'id': 'snapchat-ghost'
            },
            {
                'name': 'Snapchat Square',
                'id': 'snapchat-square'
            },
            {
                'name': 'Pied Piper Logo',
                'id': 'pied-piper'
            },
            {
                'name': 'First Order',
                'id': 'first-order'
            },
            {
                'name': 'Yoast',
                'id': 'yoast'
            },
            {
                'name': 'ThemeIsle',
                'id': 'themeisle'
            },
            {
                'name': 'Google Plus Official',
                'id': 'google-plus-official',
                'aliases': [
                    'google-plus-circle'
                ]
            },
            {
                'name': 'Font Awesome',
                'id': 'font-awesome',
                'aliases': [
                    'fa'
                ]
            },
            {
                'name': 'Handshake Outlined',
                'id': 'handshake-o'
            },
            {
                'name': 'Envelope Open',
                'id': 'envelope-open',
                'filter': [
                    'email',
                    'e-mail',
                    'letter',
                    'support',
                    'mail',
                    'message',
                    'notification'
                ]
            },
            {
                'name': 'Envelope Open Outlined',
                'id': 'envelope-open-o',
                'filter': [
                    'email',
                    'e-mail',
                    'letter',
                    'support',
                    'mail',
                    'message',
                    'notification'
                ]
            },
            {
                'name': 'Linode',
                'id': 'linode'
            },
            {
                'name': 'Address Book',
                'id': 'address-book'
            },
            {
                'name': 'Address Book Outlined',
                'id': 'address-book-o'
            },
            {
                'name': 'Address Card',
                'id': 'address-card',
                'aliases': [
                    'vcard'
                ]
            },
            {
                'name': 'Address Card Outlined',
                'id': 'address-card-o',
                'aliases': [
                    'vcard-o'
                ]
            },
            {
                'name': 'User Circle',
                'id': 'user-circle'
            },
            {
                'name': 'User Circle Outlined',
                'id': 'user-circle-o'
            },
            {
                'name': 'User Outlined',
                'id': 'user-o'
            },
            {
                'name': 'Identification Badge',
                'id': 'id-badge'
            },
            {
                'name': 'Identification Card',
                'id': 'id-card',
                'aliases': [
                    'drivers-license'
                ]
            },
            {
                'name': 'Identification Card Outlined',
                'id': 'id-card-o',
                'aliases': [
                    'drivers-license-o'
                ]
            },
            {
                'name': 'Quora',
                'id': 'quora'
            },
            {
                'name': 'Free Code Camp',
                'id': 'free-code-camp'
            },
            {
                'name': 'Telegram',
                'id': 'telegram'
            },
            {
                'name': 'Thermometer Full',
                'id': 'thermometer-full',
                'aliases': [
                    'thermometer-4',
                    'thermometer'
                ]
            },
            {
                'name': 'Thermometer 3/4 Full',
                'id': 'thermometer-three-quarters',
                'aliases': [
                    'thermometer-3'
                ]
            },
            {
                'name': 'Thermometer 1/2 Full',
                'id': 'thermometer-half',
                'aliases': [
                    'thermometer-2'
                ]
            },
            {
                'name': 'Thermometer 1/4 Full',
                'id': 'thermometer-quarter',
                'aliases': [
                    'thermometer-1'
                ]
            },
            {
                'name': 'Thermometer Empty',
                'id': 'thermometer-empty',
                'aliases': [
                    'thermometer-0'
                ]
            },
            {
                'name': 'Shower',
                'id': 'shower'
            },
            {
                'name': 'Bath',
                'id': 'bath',
                'aliases': [
                    'bathtub',
                    's15'
                ]
            },
            {
                'name': 'Podcast',
                'id': 'podcast'
            },
            {
                'name': 'Window Maximize',
                'id': 'window-maximize'
            },
            {
                'name': 'Window Minimize',
                'id': 'window-minimize'
            },
            {
                'name': 'Window Restore',
                'id': 'window-restore'
            },
            {
                'name': 'Window Close',
                'id': 'window-close',
                'aliases': [
                    'times-rectangle'
                ]
            },
            {
                'name': 'Window Close Outline',
                'id': 'window-close-o',
                'aliases': [
                    'times-rectangle-o'
                ]
            },
            {
                'name': 'Bandcamp',
                'id': 'bandcamp'
            },
            {
                'name': 'Grav',
                'id': 'grav'
            },
            {
                'name': 'Etsy',
                'id': 'etsy'
            },
            {
                'name': 'IMDB',
                'id': 'imdb'
            },
            {
                'name': 'Ravelry',
                'id': 'ravelry'
            },
            {
                'name': 'Eercast',
                'id': 'eercast'
            },
            {
                'name': 'Microchip',
                'id': 'microchip'
            },
            {
                'name': 'Snowflake Outlined',
                'id': 'snowflake-o'
            },
            {
                'name': 'Superpowers',
                'id': 'superpowers'
            },
            {
                'name': 'WPExplorer',
                'id': 'wpexplorer'
            },
            {
                'name': 'Meetup',
                'id': 'meetup'
            }
        ];
    };
    IconPickerService.prototype.getBsIcons = function () {
        return [
            {
                'id': 'asterisk',
                'name': 'Asterisk'
            },
            {
                'id': 'plus',
                'name': 'Plus'
            },
            {
                'id': 'euro',
                'name': 'Euro'
            },
            {
                'id': 'minus',
                'name': 'Minus'
            },
            {
                'id': 'cloud',
                'name': 'Cloud'
            },
            {
                'id': 'envelope',
                'name': 'Envelope'
            },
            {
                'id': 'pencil',
                'name': 'Pencil'
            },
            {
                'id': 'glass',
                'name': 'Glass'
            },
            {
                'id': 'music',
                'name': 'Music'
            },
            {
                'id': 'search',
                'name': 'Search'
            },
            {
                'id': 'heart',
                'name': 'Heart'
            },
            {
                'id': 'star',
                'name': 'Star'
            },
            {
                'id': 'star-empty',
                'name': 'Star-empty'
            },
            {
                'id': 'user',
                'name': 'User'
            },
            {
                'id': 'film',
                'name': 'Film'
            },
            {
                'id': 'th-large',
                'name': 'Th-large'
            },
            {
                'id': 'th',
                'name': 'Th'
            },
            {
                'id': 'th-list',
                'name': 'Th-list'
            },
            {
                'id': 'ok',
                'name': 'Ok'
            },
            {
                'id': 'remove',
                'name': 'Remove'
            },
            {
                'id': 'zoom-in',
                'name': 'Zoom-in'
            },
            {
                'id': 'zoom-out',
                'name': 'Zoom-out'
            },
            {
                'id': 'off',
                'name': 'Off'
            },
            {
                'id': 'signal',
                'name': 'Signal'
            },
            {
                'id': 'cog',
                'name': 'Cog'
            },
            {
                'id': 'trash',
                'name': 'Trash'
            },
            {
                'id': 'home',
                'name': 'Home'
            },
            {
                'id': 'file',
                'name': 'File'
            },
            {
                'id': 'time',
                'name': 'Time'
            },
            {
                'id': 'road',
                'name': 'Road'
            },
            {
                'id': 'download-alt',
                'name': 'Download-alt'
            },
            {
                'id': 'download',
                'name': 'Download'
            },
            {
                'id': 'upload',
                'name': 'Upload'
            },
            {
                'id': 'inbox',
                'name': 'Inbox'
            },
            {
                'id': 'play-circle',
                'name': 'Play-circle'
            },
            {
                'id': 'repeat',
                'name': 'Repeat'
            },
            {
                'id': 'refresh',
                'name': 'Refresh'
            },
            {
                'id': 'list-alt',
                'name': 'List-alt'
            },
            {
                'id': 'lock',
                'name': 'Lock'
            },
            {
                'id': 'flag',
                'name': 'Flag'
            },
            {
                'id': 'headphones',
                'name': 'Headphones'
            },
            {
                'id': 'volume-off',
                'name': 'Volume-off'
            },
            {
                'id': 'volume-down',
                'name': 'Volume-down'
            },
            {
                'id': 'volume-up',
                'name': 'Volume-up'
            },
            {
                'id': 'qrcode',
                'name': 'Qrcode'
            },
            {
                'id': 'barcode',
                'name': 'Barcode'
            },
            {
                'id': 'tag',
                'name': 'Tag'
            },
            {
                'id': 'tags',
                'name': 'Tags'
            },
            {
                'id': 'book',
                'name': 'Book'
            },
            {
                'id': 'bookmark',
                'name': 'Bookmark'
            },
            {
                'id': 'print',
                'name': 'Print'
            },
            {
                'id': 'camera',
                'name': 'Camera'
            },
            {
                'id': 'font',
                'name': 'Font'
            },
            {
                'id': 'bold',
                'name': 'Bold'
            },
            {
                'id': 'italic',
                'name': 'Italic'
            },
            {
                'id': 'text-height',
                'name': 'Text-height'
            },
            {
                'id': 'text-width',
                'name': 'Text-width'
            },
            {
                'id': 'align-left',
                'name': 'Align-left'
            },
            {
                'id': 'align-center',
                'name': 'Align-center'
            },
            {
                'id': 'align-right',
                'name': 'Align-right'
            },
            {
                'id': 'align-justify',
                'name': 'Align-justify'
            },
            {
                'id': 'list',
                'name': 'List'
            },
            {
                'id': 'indent-left',
                'name': 'Indent-left'
            },
            {
                'id': 'indent-right',
                'name': 'Indent-right'
            },
            {
                'id': 'facetime-video',
                'name': 'Facetime-video'
            },
            {
                'id': 'picture',
                'name': 'Picture'
            },
            {
                'id': 'map-marker',
                'name': 'Map-marker'
            },
            {
                'id': 'adjust',
                'name': 'Adjust'
            },
            {
                'id': 'tint',
                'name': 'Tint'
            },
            {
                'id': 'edit',
                'name': 'Edit'
            },
            {
                'id': 'share',
                'name': 'Share'
            },
            {
                'id': 'check',
                'name': 'Check'
            },
            {
                'id': 'move',
                'name': 'Move'
            },
            {
                'id': 'step-backward',
                'name': 'Step-backward'
            },
            {
                'id': 'fast-backward',
                'name': 'Fast-backward'
            },
            {
                'id': 'backward',
                'name': 'Backward'
            },
            {
                'id': 'play',
                'name': 'Play'
            },
            {
                'id': 'pause',
                'name': 'Pause'
            },
            {
                'id': 'stop',
                'name': 'Stop'
            },
            {
                'id': 'forward',
                'name': 'Forward'
            },
            {
                'id': 'fast-forward',
                'name': 'Fast-forward'
            },
            {
                'id': 'step-forward',
                'name': 'Step-forward'
            },
            {
                'id': 'eject',
                'name': 'Eject'
            },
            {
                'id': 'chevron-left',
                'name': 'Chevron-left'
            },
            {
                'id': 'chevron-right',
                'name': 'Chevron-right'
            },
            {
                'id': 'plus-sign',
                'name': 'Plus-sign'
            },
            {
                'id': 'minus-sign',
                'name': 'Minus-sign'
            },
            {
                'id': 'remove-sign',
                'name': 'Remove-sign'
            },
            {
                'id': 'ok-sign',
                'name': 'Ok-sign'
            },
            {
                'id': 'question-sign',
                'name': 'Question-sign'
            },
            {
                'id': 'info-sign',
                'name': 'Info-sign'
            },
            {
                'id': 'screenshot',
                'name': 'Screenshot'
            },
            {
                'id': 'remove-circle',
                'name': 'Remove-circle'
            },
            {
                'id': 'ok-circle',
                'name': 'Ok-circle'
            },
            {
                'id': 'ban-circle',
                'name': 'Ban-circle'
            },
            {
                'id': 'arrow-left',
                'name': 'Arrow-left'
            },
            {
                'id': 'arrow-right',
                'name': 'Arrow-right'
            },
            {
                'id': 'arrow-up',
                'name': 'Arrow-up'
            },
            {
                'id': 'arrow-down',
                'name': 'Arrow-down'
            },
            {
                'id': 'share-alt',
                'name': 'Share-alt'
            },
            {
                'id': 'resize-full',
                'name': 'Resize-full'
            },
            {
                'id': 'resize-small',
                'name': 'Resize-small'
            },
            {
                'id': 'exclamation-sign',
                'name': 'Exclamation-sign'
            },
            {
                'id': 'gift',
                'name': 'Gift'
            },
            {
                'id': 'leaf',
                'name': 'Leaf'
            },
            {
                'id': 'fire',
                'name': 'Fire'
            },
            {
                'id': 'eye-open',
                'name': 'Eye-open'
            },
            {
                'id': 'eye-close',
                'name': 'Eye-close'
            },
            {
                'id': 'warning-sign',
                'name': 'Warning-sign'
            },
            {
                'id': 'plane',
                'name': 'Plane'
            },
            {
                'id': 'calendar',
                'name': 'Calendar'
            },
            {
                'id': 'random',
                'name': 'Random'
            },
            {
                'id': 'comment',
                'name': 'Comment'
            },
            {
                'id': 'magnet',
                'name': 'Magnet'
            },
            {
                'id': 'chevron-up',
                'name': 'Chevron-up'
            },
            {
                'id': 'chevron-down',
                'name': 'Chevron-down'
            },
            {
                'id': 'retweet',
                'name': 'Retweet'
            },
            {
                'id': 'shopping-cart',
                'name': 'Shopping-cart'
            },
            {
                'id': 'folder-close',
                'name': 'Folder-close'
            },
            {
                'id': 'folder-open',
                'name': 'Folder-open'
            },
            {
                'id': 'resize-vertical',
                'name': 'Resize-vertical'
            },
            {
                'id': 'resize-horizontal',
                'name': 'Resize-horizontal'
            },
            {
                'id': 'hdd',
                'name': 'Hdd'
            },
            {
                'id': 'bullhorn',
                'name': 'Bullhorn'
            },
            {
                'id': 'bell',
                'name': 'Bell'
            },
            {
                'id': 'certificate',
                'name': 'Certificate'
            },
            {
                'id': 'thumbs-up',
                'name': 'Thumbs-up'
            },
            {
                'id': 'thumbs-down',
                'name': 'Thumbs-down'
            },
            {
                'id': 'hand-right',
                'name': 'Hand-right'
            },
            {
                'id': 'hand-left',
                'name': 'Hand-left'
            },
            {
                'id': 'hand-up',
                'name': 'Hand-up'
            },
            {
                'id': 'hand-down',
                'name': 'Hand-down'
            },
            {
                'id': 'circle-arrow-right',
                'name': 'Circle-arrow-right'
            },
            {
                'id': 'circle-arrow-left',
                'name': 'Circle-arrow-left'
            },
            {
                'id': 'circle-arrow-up',
                'name': 'Circle-arrow-up'
            },
            {
                'id': 'circle-arrow-down',
                'name': 'Circle-arrow-down'
            },
            {
                'id': 'globe',
                'name': 'Globe'
            },
            {
                'id': 'wrench',
                'name': 'Wrench'
            },
            {
                'id': 'tasks',
                'name': 'Tasks'
            },
            {
                'id': 'filter',
                'name': 'Filter'
            },
            {
                'id': 'briefcase',
                'name': 'Briefcase'
            },
            {
                'id': 'fullscreen',
                'name': 'Fullscreen'
            },
            {
                'id': 'dashboard',
                'name': 'Dashboard'
            },
            {
                'id': 'paperclip',
                'name': 'Paperclip'
            },
            {
                'id': 'heart-empty',
                'name': 'Heart-empty'
            },
            {
                'id': 'link',
                'name': 'Link'
            },
            {
                'id': 'phone',
                'name': 'Phone'
            },
            {
                'id': 'pushpin',
                'name': 'Pushpin'
            },
            {
                'id': 'usd',
                'name': 'Usd'
            },
            {
                'id': 'gbp',
                'name': 'Gbp'
            },
            {
                'id': 'sort',
                'name': 'Sort'
            },
            {
                'id': 'sort-by-alphabet',
                'name': 'Sort-by-alphabet'
            },
            {
                'id': 'sort-by-alphabet-alt',
                'name': 'Sort-by-alphabet-alt'
            },
            {
                'id': 'sort-by-order',
                'name': 'Sort-by-order'
            },
            {
                'id': 'sort-by-order-alt',
                'name': 'Sort-by-order-alt'
            },
            {
                'id': 'sort-by-attributes',
                'name': 'Sort-by-attributes'
            },
            {
                'id': 'sort-by-attributes-alt',
                'name': 'Sort-by-attributes-alt'
            },
            {
                'id': 'unchecked',
                'name': 'Unchecked'
            },
            {
                'id': 'expand',
                'name': 'Expand'
            },
            {
                'id': 'collapse-down',
                'name': 'Collapse-down'
            },
            {
                'id': 'collapse-up',
                'name': 'Collapse-up'
            },
            {
                'id': 'log-in',
                'name': 'Log-in'
            },
            {
                'id': 'flash',
                'name': 'Flash'
            },
            {
                'id': 'log-out',
                'name': 'Log-out'
            },
            {
                'id': 'new-window',
                'name': 'New-window'
            },
            {
                'id': 'record',
                'name': 'Record'
            },
            {
                'id': 'save',
                'name': 'Save'
            },
            {
                'id': 'open',
                'name': 'Open'
            },
            {
                'id': 'saved',
                'name': 'Saved'
            },
            {
                'id': 'import',
                'name': 'Import'
            },
            {
                'id': 'export',
                'name': 'Export'
            },
            {
                'id': 'send',
                'name': 'Send'
            },
            {
                'id': 'floppy-disk',
                'name': 'Floppy-disk'
            },
            {
                'id': 'floppy-saved',
                'name': 'Floppy-saved'
            },
            {
                'id': 'floppy-remove',
                'name': 'Floppy-remove'
            },
            {
                'id': 'floppy-save',
                'name': 'Floppy-save'
            },
            {
                'id': 'floppy-open',
                'name': 'Floppy-open'
            },
            {
                'id': 'credit-card',
                'name': 'Credit-card'
            },
            {
                'id': 'transfer',
                'name': 'Transfer'
            },
            {
                'id': 'cutlery',
                'name': 'Cutlery'
            },
            {
                'id': 'header',
                'name': 'Header'
            },
            {
                'id': 'compressed',
                'name': 'Compressed'
            },
            {
                'id': 'earphone',
                'name': 'Earphone'
            },
            {
                'id': 'phone-alt',
                'name': 'Phone-alt'
            },
            {
                'id': 'tower',
                'name': 'Tower'
            },
            {
                'id': 'stats',
                'name': 'Stats'
            },
            {
                'id': 'sd-video',
                'name': 'Sd-video'
            },
            {
                'id': 'hd-video',
                'name': 'Hd-video'
            },
            {
                'id': 'subtitles',
                'name': 'Subtitles'
            },
            {
                'id': 'sound-stereo',
                'name': 'Sound-stereo'
            },
            {
                'id': 'sound-dolby',
                'name': 'Sound-dolby'
            },
            {
                'id': 'sound-5-1',
                'name': 'Sound-5-1'
            },
            {
                'id': 'sound-6-1',
                'name': 'Sound-6-1'
            },
            {
                'id': 'sound-7-1',
                'name': 'Sound-7-1'
            },
            {
                'id': 'copyright-mark',
                'name': 'Copyright-mark'
            },
            {
                'id': 'registration-mark',
                'name': 'Registration-mark'
            },
            {
                'id': 'cloud-download',
                'name': 'Cloud-download'
            },
            {
                'id': 'cloud-upload',
                'name': 'Cloud-upload'
            },
            {
                'id': 'tree-conifer',
                'name': 'Tree-conifer'
            },
            {
                'id': 'tree-deciduous',
                'name': 'Tree-deciduous'
            }
        ];
    };
    IconPickerService.prototype.getFa5Icons = function () {
        return [
            {
                "id": "fab fa-accessible-icon",
                "name": "Accessible-icon",
                "filter": [
                    "accessibility",
                    "accessible",
                    "icon"
                ]
            },
            {
                "id": "fas fa-american-sign-language-interpreting",
                "name": "American-sign-language-interpreting",
                "filter": [
                    "accessibility",
                    "american",
                    "sign",
                    "language",
                    "interpreting"
                ]
            },
            {
                "id": "fas fa-assistive-listening-systems",
                "name": "Assistive-listening-systems",
                "filter": [
                    "accessibility",
                    "assistive",
                    "listening",
                    "systems"
                ]
            },
            {
                "id": "fas fa-audio-description",
                "name": "Audio-description",
                "filter": [
                    "accessibility",
                    "audio",
                    "description"
                ]
            },
            {
                "id": "fas fa-blind",
                "name": "Blind",
                "filter": [
                    "accessibility",
                    "blind"
                ]
            },
            {
                "id": "fas fa-braille",
                "name": "Braille",
                "filter": [
                    "accessibility",
                    "braille"
                ]
            },
            {
                "id": "fas fa-closed-captioning",
                "name": "Closed-captioning",
                "filter": [
                    "accessibility",
                    "closed",
                    "captioning"
                ]
            },
            {
                "id": "far fa-closed-captioning",
                "name": "Closed-captioning",
                "filter": [
                    "accessibility",
                    "closed",
                    "captioning"
                ]
            },
            {
                "id": "fas fa-deaf",
                "name": "Deaf",
                "filter": [
                    "accessibility",
                    "deaf"
                ]
            },
            {
                "id": "fas fa-low-vision",
                "name": "Low-vision",
                "filter": [
                    "accessibility",
                    "low",
                    "vision"
                ]
            },
            {
                "id": "fas fa-phone-volume",
                "name": "Phone-volume",
                "filter": [
                    "accessibility",
                    "phone",
                    "volume"
                ]
            },
            {
                "id": "fas fa-question-circle",
                "name": "Question-circle",
                "filter": [
                    "accessibility",
                    "question",
                    "circle"
                ]
            },
            {
                "id": "far fa-question-circle",
                "name": "Question-circle",
                "filter": [
                    "accessibility",
                    "question",
                    "circle"
                ]
            },
            {
                "id": "fas fa-sign-language",
                "name": "Sign-language",
                "filter": [
                    "accessibility",
                    "sign",
                    "language"
                ]
            },
            {
                "id": "fas fa-tty",
                "name": "Tty",
                "filter": [
                    "accessibility",
                    "tty"
                ]
            },
            {
                "id": "fas fa-universal-access",
                "name": "Universal-access",
                "filter": [
                    "accessibility",
                    "universal",
                    "access"
                ]
            },
            {
                "id": "fas fa-wheelchair",
                "name": "Wheelchair",
                "filter": [
                    "accessibility",
                    "wheelchair"
                ]
            },
            {
                "id": "fas fa-angle-double-down",
                "name": "Angle-double-down",
                "filter": [
                    "arrows",
                    "angle",
                    "double",
                    "down"
                ]
            },
            {
                "id": "fas fa-angle-double-left",
                "name": "Angle-double-left",
                "filter": [
                    "arrows",
                    "angle",
                    "double",
                    "left"
                ]
            },
            {
                "id": "fas fa-angle-double-right",
                "name": "Angle-double-right",
                "filter": [
                    "arrows",
                    "angle",
                    "double",
                    "right"
                ]
            },
            {
                "id": "fas fa-angle-double-up",
                "name": "Angle-double-up",
                "filter": [
                    "arrows",
                    "angle",
                    "double",
                    "up"
                ]
            },
            {
                "id": "fas fa-angle-down",
                "name": "Angle-down",
                "filter": [
                    "arrows",
                    "angle",
                    "down"
                ]
            },
            {
                "id": "fas fa-angle-left",
                "name": "Angle-left",
                "filter": [
                    "arrows",
                    "angle",
                    "left"
                ]
            },
            {
                "id": "fas fa-angle-right",
                "name": "Angle-right",
                "filter": [
                    "arrows",
                    "angle",
                    "right"
                ]
            },
            {
                "id": "fas fa-angle-up",
                "name": "Angle-up",
                "filter": [
                    "arrows",
                    "angle",
                    "up"
                ]
            },
            {
                "id": "fas fa-arrow-alt-circle-down",
                "name": "Arrow-alt-circle-down",
                "filter": [
                    "arrows",
                    "arrow",
                    "alt",
                    "circle",
                    "down"
                ]
            },
            {
                "id": "far fa-arrow-alt-circle-down",
                "name": "Arrow-alt-circle-down",
                "filter": [
                    "arrows",
                    "arrow",
                    "alt",
                    "circle",
                    "down"
                ]
            },
            {
                "id": "fas fa-arrow-alt-circle-left",
                "name": "Arrow-alt-circle-left",
                "filter": [
                    "arrows",
                    "arrow",
                    "alt",
                    "circle",
                    "left"
                ]
            },
            {
                "id": "far fa-arrow-alt-circle-left",
                "name": "Arrow-alt-circle-left",
                "filter": [
                    "arrows",
                    "arrow",
                    "alt",
                    "circle",
                    "left"
                ]
            },
            {
                "id": "fas fa-arrow-alt-circle-right",
                "name": "Arrow-alt-circle-right",
                "filter": [
                    "arrows",
                    "arrow",
                    "alt",
                    "circle",
                    "right"
                ]
            },
            {
                "id": "far fa-arrow-alt-circle-right",
                "name": "Arrow-alt-circle-right",
                "filter": [
                    "arrows",
                    "arrow",
                    "alt",
                    "circle",
                    "right"
                ]
            },
            {
                "id": "fas fa-arrow-alt-circle-up",
                "name": "Arrow-alt-circle-up",
                "filter": [
                    "arrows",
                    "arrow",
                    "alt",
                    "circle",
                    "up"
                ]
            },
            {
                "id": "far fa-arrow-alt-circle-up",
                "name": "Arrow-alt-circle-up",
                "filter": [
                    "arrows",
                    "arrow",
                    "alt",
                    "circle",
                    "up"
                ]
            },
            {
                "id": "fas fa-arrow-circle-down",
                "name": "Arrow-circle-down",
                "filter": [
                    "arrows",
                    "arrow",
                    "circle",
                    "down"
                ]
            },
            {
                "id": "fas fa-arrow-circle-left",
                "name": "Arrow-circle-left",
                "filter": [
                    "arrows",
                    "arrow",
                    "circle",
                    "left"
                ]
            },
            {
                "id": "fas fa-arrow-circle-right",
                "name": "Arrow-circle-right",
                "filter": [
                    "arrows",
                    "arrow",
                    "circle",
                    "right"
                ]
            },
            {
                "id": "fas fa-arrow-circle-up",
                "name": "Arrow-circle-up",
                "filter": [
                    "arrows",
                    "arrow",
                    "circle",
                    "up"
                ]
            },
            {
                "id": "fas fa-arrow-down",
                "name": "Arrow-down",
                "filter": [
                    "arrows",
                    "arrow",
                    "down"
                ]
            },
            {
                "id": "fas fa-arrow-left",
                "name": "Arrow-left",
                "filter": [
                    "arrows",
                    "arrow",
                    "left"
                ]
            },
            {
                "id": "fas fa-arrow-right",
                "name": "Arrow-right",
                "filter": [
                    "arrows",
                    "arrow",
                    "right"
                ]
            },
            {
                "id": "fas fa-arrow-up",
                "name": "Arrow-up",
                "filter": [
                    "arrows",
                    "arrow",
                    "up"
                ]
            },
            {
                "id": "fas fa-arrows-alt",
                "name": "Arrows-alt",
                "filter": [
                    "arrows",
                    "arrows",
                    "alt"
                ]
            },
            {
                "id": "fas fa-arrows-alt-h",
                "name": "Arrows-alt-h",
                "filter": [
                    "arrows",
                    "arrows",
                    "alt",
                    "h"
                ]
            },
            {
                "id": "fas fa-arrows-alt-v",
                "name": "Arrows-alt-v",
                "filter": [
                    "arrows",
                    "arrows",
                    "alt",
                    "v"
                ]
            },
            {
                "id": "fas fa-caret-down",
                "name": "Caret-down",
                "filter": [
                    "arrows",
                    "caret",
                    "down"
                ]
            },
            {
                "id": "fas fa-caret-left",
                "name": "Caret-left",
                "filter": [
                    "arrows",
                    "caret",
                    "left"
                ]
            },
            {
                "id": "fas fa-caret-right",
                "name": "Caret-right",
                "filter": [
                    "arrows",
                    "caret",
                    "right"
                ]
            },
            {
                "id": "fas fa-caret-square-down",
                "name": "Caret-square-down",
                "filter": [
                    "arrows",
                    "caret",
                    "square",
                    "down"
                ]
            },
            {
                "id": "far fa-caret-square-down",
                "name": "Caret-square-down",
                "filter": [
                    "arrows",
                    "caret",
                    "square",
                    "down"
                ]
            },
            {
                "id": "fas fa-caret-square-left",
                "name": "Caret-square-left",
                "filter": [
                    "arrows",
                    "caret",
                    "square",
                    "left"
                ]
            },
            {
                "id": "far fa-caret-square-left",
                "name": "Caret-square-left",
                "filter": [
                    "arrows",
                    "caret",
                    "square",
                    "left"
                ]
            },
            {
                "id": "fas fa-caret-square-right",
                "name": "Caret-square-right",
                "filter": [
                    "arrows",
                    "caret",
                    "square",
                    "right"
                ]
            },
            {
                "id": "far fa-caret-square-right",
                "name": "Caret-square-right",
                "filter": [
                    "arrows",
                    "caret",
                    "square",
                    "right"
                ]
            },
            {
                "id": "fas fa-caret-square-up",
                "name": "Caret-square-up",
                "filter": [
                    "arrows",
                    "caret",
                    "square",
                    "up"
                ]
            },
            {
                "id": "far fa-caret-square-up",
                "name": "Caret-square-up",
                "filter": [
                    "arrows",
                    "caret",
                    "square",
                    "up"
                ]
            },
            {
                "id": "fas fa-caret-up",
                "name": "Caret-up",
                "filter": [
                    "arrows",
                    "caret",
                    "up"
                ]
            },
            {
                "id": "fas fa-cart-arrow-down",
                "name": "Cart-arrow-down",
                "filter": [
                    "arrows",
                    "cart",
                    "arrow",
                    "down"
                ]
            },
            {
                "id": "fas fa-chart-line",
                "name": "Chart-line",
                "filter": [
                    "arrows",
                    "chart",
                    "line"
                ]
            },
            {
                "id": "fas fa-chevron-circle-down",
                "name": "Chevron-circle-down",
                "filter": [
                    "arrows",
                    "chevron",
                    "circle",
                    "down"
                ]
            },
            {
                "id": "fas fa-chevron-circle-left",
                "name": "Chevron-circle-left",
                "filter": [
                    "arrows",
                    "chevron",
                    "circle",
                    "left"
                ]
            },
            {
                "id": "fas fa-chevron-circle-right",
                "name": "Chevron-circle-right",
                "filter": [
                    "arrows",
                    "chevron",
                    "circle",
                    "right"
                ]
            },
            {
                "id": "fas fa-chevron-circle-up",
                "name": "Chevron-circle-up",
                "filter": [
                    "arrows",
                    "chevron",
                    "circle",
                    "up"
                ]
            },
            {
                "id": "fas fa-chevron-down",
                "name": "Chevron-down",
                "filter": [
                    "arrows",
                    "chevron",
                    "down"
                ]
            },
            {
                "id": "fas fa-chevron-left",
                "name": "Chevron-left",
                "filter": [
                    "arrows",
                    "chevron",
                    "left"
                ]
            },
            {
                "id": "fas fa-chevron-right",
                "name": "Chevron-right",
                "filter": [
                    "arrows",
                    "chevron",
                    "right"
                ]
            },
            {
                "id": "fas fa-chevron-up",
                "name": "Chevron-up",
                "filter": [
                    "arrows",
                    "chevron",
                    "up"
                ]
            },
            {
                "id": "fas fa-cloud-download-alt",
                "name": "Cloud-download-alt",
                "filter": [
                    "arrows",
                    "cloud",
                    "download",
                    "alt"
                ]
            },
            {
                "id": "fas fa-cloud-upload-alt",
                "name": "Cloud-upload-alt",
                "filter": [
                    "arrows",
                    "cloud",
                    "upload",
                    "alt"
                ]
            },
            {
                "id": "fas fa-download",
                "name": "Download",
                "filter": [
                    "arrows",
                    "download"
                ]
            },
            {
                "id": "fas fa-exchange-alt",
                "name": "Exchange-alt",
                "filter": [
                    "arrows",
                    "exchange",
                    "alt"
                ]
            },
            {
                "id": "fas fa-expand-arrows-alt",
                "name": "Expand-arrows-alt",
                "filter": [
                    "arrows",
                    "expand",
                    "arrows",
                    "alt"
                ]
            },
            {
                "id": "fas fa-external-link-alt",
                "name": "External-link-alt",
                "filter": [
                    "arrows",
                    "external",
                    "link",
                    "alt"
                ]
            },
            {
                "id": "fas fa-external-link-square-alt",
                "name": "External-link-square-alt",
                "filter": [
                    "arrows",
                    "external",
                    "link",
                    "square",
                    "alt"
                ]
            },
            {
                "id": "fas fa-hand-point-down",
                "name": "Hand-point-down",
                "filter": [
                    "arrows",
                    "hand",
                    "point",
                    "down"
                ]
            },
            {
                "id": "far fa-hand-point-down",
                "name": "Hand-point-down",
                "filter": [
                    "arrows",
                    "hand",
                    "point",
                    "down"
                ]
            },
            {
                "id": "fas fa-hand-point-left",
                "name": "Hand-point-left",
                "filter": [
                    "arrows",
                    "hand",
                    "point",
                    "left"
                ]
            },
            {
                "id": "far fa-hand-point-left",
                "name": "Hand-point-left",
                "filter": [
                    "arrows",
                    "hand",
                    "point",
                    "left"
                ]
            },
            {
                "id": "fas fa-hand-point-right",
                "name": "Hand-point-right",
                "filter": [
                    "arrows",
                    "hand",
                    "point",
                    "right"
                ]
            },
            {
                "id": "far fa-hand-point-right",
                "name": "Hand-point-right",
                "filter": [
                    "arrows",
                    "hand",
                    "point",
                    "right"
                ]
            },
            {
                "id": "fas fa-hand-point-up",
                "name": "Hand-point-up",
                "filter": [
                    "arrows",
                    "hand",
                    "point",
                    "up"
                ]
            },
            {
                "id": "far fa-hand-point-up",
                "name": "Hand-point-up",
                "filter": [
                    "arrows",
                    "hand",
                    "point",
                    "up"
                ]
            },
            {
                "id": "fas fa-hand-pointer",
                "name": "Hand-pointer",
                "filter": [
                    "arrows",
                    "hand",
                    "pointer"
                ]
            },
            {
                "id": "far fa-hand-pointer",
                "name": "Hand-pointer",
                "filter": [
                    "arrows",
                    "hand",
                    "pointer"
                ]
            },
            {
                "id": "fas fa-history",
                "name": "History",
                "filter": [
                    "arrows",
                    "history"
                ]
            },
            {
                "id": "fas fa-level-down-alt",
                "name": "Level-down-alt",
                "filter": [
                    "arrows",
                    "level",
                    "down",
                    "alt"
                ]
            },
            {
                "id": "fas fa-level-up-alt",
                "name": "Level-up-alt",
                "filter": [
                    "arrows",
                    "level",
                    "up",
                    "alt"
                ]
            },
            {
                "id": "fas fa-location-arrow",
                "name": "Location-arrow",
                "filter": [
                    "arrows",
                    "location",
                    "arrow"
                ]
            },
            {
                "id": "fas fa-long-arrow-alt-down",
                "name": "Long-arrow-alt-down",
                "filter": [
                    "arrows",
                    "long",
                    "arrow",
                    "alt",
                    "down"
                ]
            },
            {
                "id": "fas fa-long-arrow-alt-left",
                "name": "Long-arrow-alt-left",
                "filter": [
                    "arrows",
                    "long",
                    "arrow",
                    "alt",
                    "left"
                ]
            },
            {
                "id": "fas fa-long-arrow-alt-right",
                "name": "Long-arrow-alt-right",
                "filter": [
                    "arrows",
                    "long",
                    "arrow",
                    "alt",
                    "right"
                ]
            },
            {
                "id": "fas fa-long-arrow-alt-up",
                "name": "Long-arrow-alt-up",
                "filter": [
                    "arrows",
                    "long",
                    "arrow",
                    "alt",
                    "up"
                ]
            },
            {
                "id": "fas fa-mouse-pointer",
                "name": "Mouse-pointer",
                "filter": [
                    "arrows",
                    "mouse",
                    "pointer"
                ]
            },
            {
                "id": "fas fa-play",
                "name": "Play",
                "filter": [
                    "arrows",
                    "play"
                ]
            },
            {
                "id": "fas fa-random",
                "name": "Random",
                "filter": [
                    "arrows",
                    "random"
                ]
            },
            {
                "id": "fas fa-recycle",
                "name": "Recycle",
                "filter": [
                    "arrows",
                    "recycle"
                ]
            },
            {
                "id": "fas fa-redo",
                "name": "Redo",
                "filter": [
                    "arrows",
                    "redo"
                ]
            },
            {
                "id": "fas fa-redo-alt",
                "name": "Redo-alt",
                "filter": [
                    "arrows",
                    "redo",
                    "alt"
                ]
            },
            {
                "id": "fas fa-reply",
                "name": "Reply",
                "filter": [
                    "arrows",
                    "reply"
                ]
            },
            {
                "id": "fas fa-reply-all",
                "name": "Reply-all",
                "filter": [
                    "arrows",
                    "reply",
                    "all"
                ]
            },
            {
                "id": "fas fa-retweet",
                "name": "Retweet",
                "filter": [
                    "arrows",
                    "retweet"
                ]
            },
            {
                "id": "fas fa-share",
                "name": "Share",
                "filter": [
                    "arrows",
                    "share"
                ]
            },
            {
                "id": "fas fa-share-square",
                "name": "Share-square",
                "filter": [
                    "arrows",
                    "share",
                    "square"
                ]
            },
            {
                "id": "far fa-share-square",
                "name": "Share-square",
                "filter": [
                    "arrows",
                    "share",
                    "square"
                ]
            },
            {
                "id": "fas fa-sign-in-alt",
                "name": "Sign-in-alt",
                "filter": [
                    "arrows",
                    "sign",
                    "in",
                    "alt"
                ]
            },
            {
                "id": "fas fa-sign-out-alt",
                "name": "Sign-out-alt",
                "filter": [
                    "arrows",
                    "sign",
                    "out",
                    "alt"
                ]
            },
            {
                "id": "fas fa-sort",
                "name": "Sort",
                "filter": [
                    "arrows",
                    "sort"
                ]
            },
            {
                "id": "fas fa-sort-alpha-down",
                "name": "Sort-alpha-down",
                "filter": [
                    "arrows",
                    "sort",
                    "alpha",
                    "down"
                ]
            },
            {
                "id": "fas fa-sort-alpha-up",
                "name": "Sort-alpha-up",
                "filter": [
                    "arrows",
                    "sort",
                    "alpha",
                    "up"
                ]
            },
            {
                "id": "fas fa-sort-amount-down",
                "name": "Sort-amount-down",
                "filter": [
                    "arrows",
                    "sort",
                    "amount",
                    "down"
                ]
            },
            {
                "id": "fas fa-sort-amount-up",
                "name": "Sort-amount-up",
                "filter": [
                    "arrows",
                    "sort",
                    "amount",
                    "up"
                ]
            },
            {
                "id": "fas fa-sort-down",
                "name": "Sort-down",
                "filter": [
                    "arrows",
                    "sort",
                    "down"
                ]
            },
            {
                "id": "fas fa-sort-numeric-down",
                "name": "Sort-numeric-down",
                "filter": [
                    "arrows",
                    "sort",
                    "numeric",
                    "down"
                ]
            },
            {
                "id": "fas fa-sort-numeric-up",
                "name": "Sort-numeric-up",
                "filter": [
                    "arrows",
                    "sort",
                    "numeric",
                    "up"
                ]
            },
            {
                "id": "fas fa-sort-up",
                "name": "Sort-up",
                "filter": [
                    "arrows",
                    "sort",
                    "up"
                ]
            },
            {
                "id": "fas fa-sync",
                "name": "Sync",
                "filter": [
                    "arrows",
                    "sync"
                ]
            },
            {
                "id": "fas fa-sync-alt",
                "name": "Sync-alt",
                "filter": [
                    "arrows",
                    "sync",
                    "alt"
                ]
            },
            {
                "id": "fas fa-text-height",
                "name": "Text-height",
                "filter": [
                    "arrows",
                    "text",
                    "height"
                ]
            },
            {
                "id": "fas fa-text-width",
                "name": "Text-width",
                "filter": [
                    "arrows",
                    "text",
                    "width"
                ]
            },
            {
                "id": "fas fa-undo",
                "name": "Undo",
                "filter": [
                    "arrows",
                    "undo"
                ]
            },
            {
                "id": "fas fa-undo-alt",
                "name": "Undo-alt",
                "filter": [
                    "arrows",
                    "undo",
                    "alt"
                ]
            },
            {
                "id": "fas fa-upload",
                "name": "Upload",
                "filter": [
                    "arrows",
                    "upload"
                ]
            },
            {
                "id": "fas fa-audio-description",
                "name": "Audio-description",
                "filter": [
                    "audio & video",
                    "audio",
                    "description"
                ]
            },
            {
                "id": "fas fa-backward",
                "name": "Backward",
                "filter": [
                    "audio & video",
                    "backward"
                ]
            },
            {
                "id": "fas fa-circle",
                "name": "Circle",
                "filter": [
                    "audio & video",
                    "circle"
                ]
            },
            {
                "id": "far fa-circle",
                "name": "Circle",
                "filter": [
                    "audio & video",
                    "circle"
                ]
            },
            {
                "id": "fas fa-closed-captioning",
                "name": "Closed-captioning",
                "filter": [
                    "audio & video",
                    "closed",
                    "captioning"
                ]
            },
            {
                "id": "far fa-closed-captioning",
                "name": "Closed-captioning",
                "filter": [
                    "audio & video",
                    "closed",
                    "captioning"
                ]
            },
            {
                "id": "fas fa-compress",
                "name": "Compress",
                "filter": [
                    "audio & video",
                    "compress"
                ]
            },
            {
                "id": "fas fa-eject",
                "name": "Eject",
                "filter": [
                    "audio & video",
                    "eject"
                ]
            },
            {
                "id": "fas fa-expand",
                "name": "Expand",
                "filter": [
                    "audio & video",
                    "expand"
                ]
            },
            {
                "id": "fas fa-expand-arrows-alt",
                "name": "Expand-arrows-alt",
                "filter": [
                    "audio & video",
                    "expand",
                    "arrows",
                    "alt"
                ]
            },
            {
                "id": "fas fa-fast-backward",
                "name": "Fast-backward",
                "filter": [
                    "audio & video",
                    "fast",
                    "backward"
                ]
            },
            {
                "id": "fas fa-fast-forward",
                "name": "Fast-forward",
                "filter": [
                    "audio & video",
                    "fast",
                    "forward"
                ]
            },
            {
                "id": "fas fa-file-audio",
                "name": "File-audio",
                "filter": [
                    "audio & video",
                    "file",
                    "audio"
                ]
            },
            {
                "id": "far fa-file-audio",
                "name": "File-audio",
                "filter": [
                    "audio & video",
                    "file",
                    "audio"
                ]
            },
            {
                "id": "fas fa-file-video",
                "name": "File-video",
                "filter": [
                    "audio & video",
                    "file",
                    "video"
                ]
            },
            {
                "id": "far fa-file-video",
                "name": "File-video",
                "filter": [
                    "audio & video",
                    "file",
                    "video"
                ]
            },
            {
                "id": "fas fa-film",
                "name": "Film",
                "filter": [
                    "audio & video",
                    "film"
                ]
            },
            {
                "id": "fas fa-forward",
                "name": "Forward",
                "filter": [
                    "audio & video",
                    "forward"
                ]
            },
            {
                "id": "fas fa-headphones",
                "name": "Headphones",
                "filter": [
                    "audio & video",
                    "headphones"
                ]
            },
            {
                "id": "fas fa-microphone",
                "name": "Microphone",
                "filter": [
                    "audio & video",
                    "microphone"
                ]
            },
            {
                "id": "fas fa-microphone-slash",
                "name": "Microphone-slash",
                "filter": [
                    "audio & video",
                    "microphone",
                    "slash"
                ]
            },
            {
                "id": "fas fa-music",
                "name": "Music",
                "filter": [
                    "audio & video",
                    "music"
                ]
            },
            {
                "id": "fas fa-pause",
                "name": "Pause",
                "filter": [
                    "audio & video",
                    "pause"
                ]
            },
            {
                "id": "fas fa-pause-circle",
                "name": "Pause-circle",
                "filter": [
                    "audio & video",
                    "pause",
                    "circle"
                ]
            },
            {
                "id": "far fa-pause-circle",
                "name": "Pause-circle",
                "filter": [
                    "audio & video",
                    "pause",
                    "circle"
                ]
            },
            {
                "id": "fas fa-phone-volume",
                "name": "Phone-volume",
                "filter": [
                    "audio & video",
                    "phone",
                    "volume"
                ]
            },
            {
                "id": "fas fa-play",
                "name": "Play",
                "filter": [
                    "audio & video",
                    "play"
                ]
            },
            {
                "id": "fas fa-play-circle",
                "name": "Play-circle",
                "filter": [
                    "audio & video",
                    "play",
                    "circle"
                ]
            },
            {
                "id": "far fa-play-circle",
                "name": "Play-circle",
                "filter": [
                    "audio & video",
                    "play",
                    "circle"
                ]
            },
            {
                "id": "fas fa-podcast",
                "name": "Podcast",
                "filter": [
                    "audio & video",
                    "podcast"
                ]
            },
            {
                "id": "fas fa-random",
                "name": "Random",
                "filter": [
                    "audio & video",
                    "random"
                ]
            },
            {
                "id": "fas fa-redo",
                "name": "Redo",
                "filter": [
                    "audio & video",
                    "redo"
                ]
            },
            {
                "id": "fas fa-redo-alt",
                "name": "Redo-alt",
                "filter": [
                    "audio & video",
                    "redo",
                    "alt"
                ]
            },
            {
                "id": "fas fa-rss",
                "name": "Rss",
                "filter": [
                    "audio & video",
                    "rss"
                ]
            },
            {
                "id": "fas fa-rss-square",
                "name": "Rss-square",
                "filter": [
                    "audio & video",
                    "rss",
                    "square"
                ]
            },
            {
                "id": "fas fa-step-backward",
                "name": "Step-backward",
                "filter": [
                    "audio & video",
                    "step",
                    "backward"
                ]
            },
            {
                "id": "fas fa-step-forward",
                "name": "Step-forward",
                "filter": [
                    "audio & video",
                    "step",
                    "forward"
                ]
            },
            {
                "id": "fas fa-stop",
                "name": "Stop",
                "filter": [
                    "audio & video",
                    "stop"
                ]
            },
            {
                "id": "fas fa-stop-circle",
                "name": "Stop-circle",
                "filter": [
                    "audio & video",
                    "stop",
                    "circle"
                ]
            },
            {
                "id": "far fa-stop-circle",
                "name": "Stop-circle",
                "filter": [
                    "audio & video",
                    "stop",
                    "circle"
                ]
            },
            {
                "id": "fas fa-sync",
                "name": "Sync",
                "filter": [
                    "audio & video",
                    "sync"
                ]
            },
            {
                "id": "fas fa-sync-alt",
                "name": "Sync-alt",
                "filter": [
                    "audio & video",
                    "sync",
                    "alt"
                ]
            },
            {
                "id": "fas fa-undo",
                "name": "Undo",
                "filter": [
                    "audio & video",
                    "undo"
                ]
            },
            {
                "id": "fas fa-undo-alt",
                "name": "Undo-alt",
                "filter": [
                    "audio & video",
                    "undo",
                    "alt"
                ]
            },
            {
                "id": "fas fa-video",
                "name": "Video",
                "filter": [
                    "audio & video",
                    "video"
                ]
            },
            {
                "id": "fas fa-volume-down",
                "name": "Volume-down",
                "filter": [
                    "audio & video",
                    "volume",
                    "down"
                ]
            },
            {
                "id": "fas fa-volume-off",
                "name": "Volume-off",
                "filter": [
                    "audio & video",
                    "volume",
                    "off"
                ]
            },
            {
                "id": "fas fa-volume-up",
                "name": "Volume-up",
                "filter": [
                    "audio & video",
                    "volume",
                    "up"
                ]
            },
            {
                "id": "fab fa-youtube",
                "name": "Youtube",
                "filter": [
                    "audio & video",
                    "youtube"
                ]
            },
            {
                "id": "fas fa-address-book",
                "name": "Address-book",
                "filter": [
                    "business",
                    "address",
                    "book"
                ]
            },
            {
                "id": "far fa-address-book",
                "name": "Address-book",
                "filter": [
                    "business",
                    "address",
                    "book"
                ]
            },
            {
                "id": "fas fa-address-card",
                "name": "Address-card",
                "filter": [
                    "business",
                    "address",
                    "card"
                ]
            },
            {
                "id": "far fa-address-card",
                "name": "Address-card",
                "filter": [
                    "business",
                    "address",
                    "card"
                ]
            },
            {
                "id": "fas fa-archive",
                "name": "Archive",
                "filter": [
                    "business",
                    "archive"
                ]
            },
            {
                "id": "fas fa-balance-scale",
                "name": "Balance-scale",
                "filter": [
                    "business",
                    "balance",
                    "scale"
                ]
            },
            {
                "id": "fas fa-birthday-cake",
                "name": "Birthday-cake",
                "filter": [
                    "business",
                    "birthday",
                    "cake"
                ]
            },
            {
                "id": "fas fa-book",
                "name": "Book",
                "filter": [
                    "business",
                    "book"
                ]
            },
            {
                "id": "fas fa-briefcase",
                "name": "Briefcase",
                "filter": [
                    "business",
                    "briefcase"
                ]
            },
            {
                "id": "fas fa-building",
                "name": "Building",
                "filter": [
                    "business",
                    "building"
                ]
            },
            {
                "id": "far fa-building",
                "name": "Building",
                "filter": [
                    "business",
                    "building"
                ]
            },
            {
                "id": "fas fa-bullhorn",
                "name": "Bullhorn",
                "filter": [
                    "business",
                    "bullhorn"
                ]
            },
            {
                "id": "fas fa-bullseye",
                "name": "Bullseye",
                "filter": [
                    "business",
                    "bullseye"
                ]
            },
            {
                "id": "fas fa-calculator",
                "name": "Calculator",
                "filter": [
                    "business",
                    "calculator"
                ]
            },
            {
                "id": "fas fa-calendar",
                "name": "Calendar",
                "filter": [
                    "business",
                    "calendar"
                ]
            },
            {
                "id": "far fa-calendar",
                "name": "Calendar",
                "filter": [
                    "business",
                    "calendar"
                ]
            },
            {
                "id": "fas fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "business",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "far fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "business",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "fas fa-certificate",
                "name": "Certificate",
                "filter": [
                    "business",
                    "certificate"
                ]
            },
            {
                "id": "fas fa-chart-area",
                "name": "Chart-area",
                "filter": [
                    "business",
                    "chart",
                    "area"
                ]
            },
            {
                "id": "fas fa-chart-bar",
                "name": "Chart-bar",
                "filter": [
                    "business",
                    "chart",
                    "bar"
                ]
            },
            {
                "id": "far fa-chart-bar",
                "name": "Chart-bar",
                "filter": [
                    "business",
                    "chart",
                    "bar"
                ]
            },
            {
                "id": "fas fa-chart-line",
                "name": "Chart-line",
                "filter": [
                    "business",
                    "chart",
                    "line"
                ]
            },
            {
                "id": "fas fa-chart-pie",
                "name": "Chart-pie",
                "filter": [
                    "business",
                    "chart",
                    "pie"
                ]
            },
            {
                "id": "fas fa-clipboard",
                "name": "Clipboard",
                "filter": [
                    "business",
                    "clipboard"
                ]
            },
            {
                "id": "far fa-clipboard",
                "name": "Clipboard",
                "filter": [
                    "business",
                    "clipboard"
                ]
            },
            {
                "id": "fas fa-coffee",
                "name": "Coffee",
                "filter": [
                    "business",
                    "coffee"
                ]
            },
            {
                "id": "fas fa-columns",
                "name": "Columns",
                "filter": [
                    "business",
                    "columns"
                ]
            },
            {
                "id": "fas fa-compass",
                "name": "Compass",
                "filter": [
                    "business",
                    "compass"
                ]
            },
            {
                "id": "far fa-compass",
                "name": "Compass",
                "filter": [
                    "business",
                    "compass"
                ]
            },
            {
                "id": "fas fa-copy",
                "name": "Copy",
                "filter": [
                    "business",
                    "copy"
                ]
            },
            {
                "id": "far fa-copy",
                "name": "Copy",
                "filter": [
                    "business",
                    "copy"
                ]
            },
            {
                "id": "fas fa-copyright",
                "name": "Copyright",
                "filter": [
                    "business",
                    "copyright"
                ]
            },
            {
                "id": "far fa-copyright",
                "name": "Copyright",
                "filter": [
                    "business",
                    "copyright"
                ]
            },
            {
                "id": "fas fa-cut",
                "name": "Cut",
                "filter": [
                    "business",
                    "cut"
                ]
            },
            {
                "id": "fas fa-edit",
                "name": "Edit",
                "filter": [
                    "business",
                    "edit"
                ]
            },
            {
                "id": "far fa-edit",
                "name": "Edit",
                "filter": [
                    "business",
                    "edit"
                ]
            },
            {
                "id": "fas fa-envelope",
                "name": "Envelope",
                "filter": [
                    "business",
                    "envelope"
                ]
            },
            {
                "id": "far fa-envelope",
                "name": "Envelope",
                "filter": [
                    "business",
                    "envelope"
                ]
            },
            {
                "id": "fas fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "business",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "far fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "business",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "fas fa-envelope-square",
                "name": "Envelope-square",
                "filter": [
                    "business",
                    "envelope",
                    "square"
                ]
            },
            {
                "id": "fas fa-eraser",
                "name": "Eraser",
                "filter": [
                    "business",
                    "eraser"
                ]
            },
            {
                "id": "fas fa-fax",
                "name": "Fax",
                "filter": [
                    "business",
                    "fax"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "business",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "business",
                    "file"
                ]
            },
            {
                "id": "fas fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "business",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "far fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "business",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "fas fa-folder",
                "name": "Folder",
                "filter": [
                    "business",
                    "folder"
                ]
            },
            {
                "id": "far fa-folder",
                "name": "Folder",
                "filter": [
                    "business",
                    "folder"
                ]
            },
            {
                "id": "fas fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "business",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "far fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "business",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "fas fa-globe",
                "name": "Globe",
                "filter": [
                    "business",
                    "globe"
                ]
            },
            {
                "id": "fas fa-industry",
                "name": "Industry",
                "filter": [
                    "business",
                    "industry"
                ]
            },
            {
                "id": "fas fa-paperclip",
                "name": "Paperclip",
                "filter": [
                    "business",
                    "paperclip"
                ]
            },
            {
                "id": "fas fa-paste",
                "name": "Paste",
                "filter": [
                    "business",
                    "paste"
                ]
            },
            {
                "id": "fas fa-pen-square",
                "name": "Pen-square",
                "filter": [
                    "business",
                    "pen",
                    "square"
                ]
            },
            {
                "id": "fas fa-pencil-alt",
                "name": "Pencil-alt",
                "filter": [
                    "business",
                    "pencil",
                    "alt"
                ]
            },
            {
                "id": "fas fa-percent",
                "name": "Percent",
                "filter": [
                    "business",
                    "percent"
                ]
            },
            {
                "id": "fas fa-phone",
                "name": "Phone",
                "filter": [
                    "business",
                    "phone"
                ]
            },
            {
                "id": "fas fa-phone-square",
                "name": "Phone-square",
                "filter": [
                    "business",
                    "phone",
                    "square"
                ]
            },
            {
                "id": "fas fa-phone-volume",
                "name": "Phone-volume",
                "filter": [
                    "business",
                    "phone",
                    "volume"
                ]
            },
            {
                "id": "fas fa-registered",
                "name": "Registered",
                "filter": [
                    "business",
                    "registered"
                ]
            },
            {
                "id": "far fa-registered",
                "name": "Registered",
                "filter": [
                    "business",
                    "registered"
                ]
            },
            {
                "id": "fas fa-save",
                "name": "Save",
                "filter": [
                    "business",
                    "save"
                ]
            },
            {
                "id": "far fa-save",
                "name": "Save",
                "filter": [
                    "business",
                    "save"
                ]
            },
            {
                "id": "fas fa-sitemap",
                "name": "Sitemap",
                "filter": [
                    "business",
                    "sitemap"
                ]
            },
            {
                "id": "fas fa-sticky-note",
                "name": "Sticky-note",
                "filter": [
                    "business",
                    "sticky",
                    "note"
                ]
            },
            {
                "id": "far fa-sticky-note",
                "name": "Sticky-note",
                "filter": [
                    "business",
                    "sticky",
                    "note"
                ]
            },
            {
                "id": "fas fa-suitcase",
                "name": "Suitcase",
                "filter": [
                    "business",
                    "suitcase"
                ]
            },
            {
                "id": "fas fa-table",
                "name": "Table",
                "filter": [
                    "business",
                    "table"
                ]
            },
            {
                "id": "fas fa-tag",
                "name": "Tag",
                "filter": [
                    "business",
                    "tag"
                ]
            },
            {
                "id": "fas fa-tags",
                "name": "Tags",
                "filter": [
                    "business",
                    "tags"
                ]
            },
            {
                "id": "fas fa-tasks",
                "name": "Tasks",
                "filter": [
                    "business",
                    "tasks"
                ]
            },
            {
                "id": "fas fa-thumbtack",
                "name": "Thumbtack",
                "filter": [
                    "business",
                    "thumbtack"
                ]
            },
            {
                "id": "fas fa-trademark",
                "name": "Trademark",
                "filter": [
                    "business",
                    "trademark"
                ]
            },
            {
                "id": "fas fa-chess",
                "name": "Chess",
                "filter": [
                    "chess",
                    "chess"
                ]
            },
            {
                "id": "fas fa-chess-bishop",
                "name": "Chess-bishop",
                "filter": [
                    "chess",
                    "chess",
                    "bishop"
                ]
            },
            {
                "id": "fas fa-chess-board",
                "name": "Chess-board",
                "filter": [
                    "chess",
                    "chess",
                    "board"
                ]
            },
            {
                "id": "fas fa-chess-king",
                "name": "Chess-king",
                "filter": [
                    "chess",
                    "chess",
                    "king"
                ]
            },
            {
                "id": "fas fa-chess-knight",
                "name": "Chess-knight",
                "filter": [
                    "chess",
                    "chess",
                    "knight"
                ]
            },
            {
                "id": "fas fa-chess-pawn",
                "name": "Chess-pawn",
                "filter": [
                    "chess",
                    "chess",
                    "pawn"
                ]
            },
            {
                "id": "fas fa-chess-queen",
                "name": "Chess-queen",
                "filter": [
                    "chess",
                    "chess",
                    "queen"
                ]
            },
            {
                "id": "fas fa-chess-rook",
                "name": "Chess-rook",
                "filter": [
                    "chess",
                    "chess",
                    "rook"
                ]
            },
            {
                "id": "fas fa-square-full",
                "name": "Square-full",
                "filter": [
                    "chess",
                    "square",
                    "full"
                ]
            },
            {
                "id": "fas fa-archive",
                "name": "Archive",
                "filter": [
                    "code",
                    "archive"
                ]
            },
            {
                "id": "fas fa-barcode",
                "name": "Barcode",
                "filter": [
                    "code",
                    "barcode"
                ]
            },
            {
                "id": "fas fa-bath",
                "name": "Bath",
                "filter": [
                    "code",
                    "bath"
                ]
            },
            {
                "id": "fas fa-bug",
                "name": "Bug",
                "filter": [
                    "code",
                    "bug"
                ]
            },
            {
                "id": "fas fa-code",
                "name": "Code",
                "filter": [
                    "code",
                    "code"
                ]
            },
            {
                "id": "fas fa-code-branch",
                "name": "Code-branch",
                "filter": [
                    "code",
                    "code",
                    "branch"
                ]
            },
            {
                "id": "fas fa-coffee",
                "name": "Coffee",
                "filter": [
                    "code",
                    "coffee"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "code",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "code",
                    "file"
                ]
            },
            {
                "id": "fas fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "code",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "far fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "code",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "fas fa-file-code",
                "name": "File-code",
                "filter": [
                    "code",
                    "file",
                    "code"
                ]
            },
            {
                "id": "far fa-file-code",
                "name": "File-code",
                "filter": [
                    "code",
                    "file",
                    "code"
                ]
            },
            {
                "id": "fas fa-filter",
                "name": "Filter",
                "filter": [
                    "code",
                    "filter"
                ]
            },
            {
                "id": "fas fa-fire-extinguisher",
                "name": "Fire-extinguisher",
                "filter": [
                    "code",
                    "fire",
                    "extinguisher"
                ]
            },
            {
                "id": "fas fa-folder",
                "name": "Folder",
                "filter": [
                    "code",
                    "folder"
                ]
            },
            {
                "id": "far fa-folder",
                "name": "Folder",
                "filter": [
                    "code",
                    "folder"
                ]
            },
            {
                "id": "fas fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "code",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "far fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "code",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "fas fa-keyboard",
                "name": "Keyboard",
                "filter": [
                    "code",
                    "keyboard"
                ]
            },
            {
                "id": "far fa-keyboard",
                "name": "Keyboard",
                "filter": [
                    "code",
                    "keyboard"
                ]
            },
            {
                "id": "fas fa-microchip",
                "name": "Microchip",
                "filter": [
                    "code",
                    "microchip"
                ]
            },
            {
                "id": "fas fa-qrcode",
                "name": "Qrcode",
                "filter": [
                    "code",
                    "qrcode"
                ]
            },
            {
                "id": "fas fa-shield-alt",
                "name": "Shield-alt",
                "filter": [
                    "code",
                    "shield",
                    "alt"
                ]
            },
            {
                "id": "fas fa-sitemap",
                "name": "Sitemap",
                "filter": [
                    "code",
                    "sitemap"
                ]
            },
            {
                "id": "fas fa-terminal",
                "name": "Terminal",
                "filter": [
                    "code",
                    "terminal"
                ]
            },
            {
                "id": "fas fa-user-secret",
                "name": "User-secret",
                "filter": [
                    "code",
                    "user",
                    "secret"
                ]
            },
            {
                "id": "fas fa-window-close",
                "name": "Window-close",
                "filter": [
                    "code",
                    "window",
                    "close"
                ]
            },
            {
                "id": "far fa-window-close",
                "name": "Window-close",
                "filter": [
                    "code",
                    "window",
                    "close"
                ]
            },
            {
                "id": "fas fa-window-maximize",
                "name": "Window-maximize",
                "filter": [
                    "code",
                    "window",
                    "maximize"
                ]
            },
            {
                "id": "far fa-window-maximize",
                "name": "Window-maximize",
                "filter": [
                    "code",
                    "window",
                    "maximize"
                ]
            },
            {
                "id": "fas fa-window-minimize",
                "name": "Window-minimize",
                "filter": [
                    "code",
                    "window",
                    "minimize"
                ]
            },
            {
                "id": "far fa-window-minimize",
                "name": "Window-minimize",
                "filter": [
                    "code",
                    "window",
                    "minimize"
                ]
            },
            {
                "id": "fas fa-window-restore",
                "name": "Window-restore",
                "filter": [
                    "code",
                    "window",
                    "restore"
                ]
            },
            {
                "id": "far fa-window-restore",
                "name": "Window-restore",
                "filter": [
                    "code",
                    "window",
                    "restore"
                ]
            },
            {
                "id": "fas fa-address-book",
                "name": "Address-book",
                "filter": [
                    "communication",
                    "address",
                    "book"
                ]
            },
            {
                "id": "far fa-address-book",
                "name": "Address-book",
                "filter": [
                    "communication",
                    "address",
                    "book"
                ]
            },
            {
                "id": "fas fa-address-card",
                "name": "Address-card",
                "filter": [
                    "communication",
                    "address",
                    "card"
                ]
            },
            {
                "id": "far fa-address-card",
                "name": "Address-card",
                "filter": [
                    "communication",
                    "address",
                    "card"
                ]
            },
            {
                "id": "fas fa-american-sign-language-interpreting",
                "name": "American-sign-language-interpreting",
                "filter": [
                    "communication",
                    "american",
                    "sign",
                    "language",
                    "interpreting"
                ]
            },
            {
                "id": "fas fa-assistive-listening-systems",
                "name": "Assistive-listening-systems",
                "filter": [
                    "communication",
                    "assistive",
                    "listening",
                    "systems"
                ]
            },
            {
                "id": "fas fa-at",
                "name": "At",
                "filter": [
                    "communication",
                    "at"
                ]
            },
            {
                "id": "fas fa-bell",
                "name": "Bell",
                "filter": [
                    "communication",
                    "bell"
                ]
            },
            {
                "id": "far fa-bell",
                "name": "Bell",
                "filter": [
                    "communication",
                    "bell"
                ]
            },
            {
                "id": "fas fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "communication",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "far fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "communication",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "fab fa-bluetooth",
                "name": "Bluetooth",
                "filter": [
                    "communication",
                    "bluetooth"
                ]
            },
            {
                "id": "fab fa-bluetooth-b",
                "name": "Bluetooth-b",
                "filter": [
                    "communication",
                    "bluetooth",
                    "b"
                ]
            },
            {
                "id": "fas fa-bullhorn",
                "name": "Bullhorn",
                "filter": [
                    "communication",
                    "bullhorn"
                ]
            },
            {
                "id": "fas fa-comment",
                "name": "Comment",
                "filter": [
                    "communication",
                    "comment"
                ]
            },
            {
                "id": "far fa-comment",
                "name": "Comment",
                "filter": [
                    "communication",
                    "comment"
                ]
            },
            {
                "id": "fas fa-comment-alt",
                "name": "Comment-alt",
                "filter": [
                    "communication",
                    "comment",
                    "alt"
                ]
            },
            {
                "id": "far fa-comment-alt",
                "name": "Comment-alt",
                "filter": [
                    "communication",
                    "comment",
                    "alt"
                ]
            },
            {
                "id": "fas fa-comments",
                "name": "Comments",
                "filter": [
                    "communication",
                    "comments"
                ]
            },
            {
                "id": "far fa-comments",
                "name": "Comments",
                "filter": [
                    "communication",
                    "comments"
                ]
            },
            {
                "id": "fas fa-envelope",
                "name": "Envelope",
                "filter": [
                    "communication",
                    "envelope"
                ]
            },
            {
                "id": "far fa-envelope",
                "name": "Envelope",
                "filter": [
                    "communication",
                    "envelope"
                ]
            },
            {
                "id": "fas fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "communication",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "far fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "communication",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "fas fa-envelope-square",
                "name": "Envelope-square",
                "filter": [
                    "communication",
                    "envelope",
                    "square"
                ]
            },
            {
                "id": "fas fa-fax",
                "name": "Fax",
                "filter": [
                    "communication",
                    "fax"
                ]
            },
            {
                "id": "fas fa-inbox",
                "name": "Inbox",
                "filter": [
                    "communication",
                    "inbox"
                ]
            },
            {
                "id": "fas fa-language",
                "name": "Language",
                "filter": [
                    "communication",
                    "language"
                ]
            },
            {
                "id": "fas fa-microphone",
                "name": "Microphone",
                "filter": [
                    "communication",
                    "microphone"
                ]
            },
            {
                "id": "fas fa-microphone-slash",
                "name": "Microphone-slash",
                "filter": [
                    "communication",
                    "microphone",
                    "slash"
                ]
            },
            {
                "id": "fas fa-mobile",
                "name": "Mobile",
                "filter": [
                    "communication",
                    "mobile"
                ]
            },
            {
                "id": "fas fa-mobile-alt",
                "name": "Mobile-alt",
                "filter": [
                    "communication",
                    "mobile",
                    "alt"
                ]
            },
            {
                "id": "fas fa-paper-plane",
                "name": "Paper-plane",
                "filter": [
                    "communication",
                    "paper",
                    "plane"
                ]
            },
            {
                "id": "far fa-paper-plane",
                "name": "Paper-plane",
                "filter": [
                    "communication",
                    "paper",
                    "plane"
                ]
            },
            {
                "id": "fas fa-phone",
                "name": "Phone",
                "filter": [
                    "communication",
                    "phone"
                ]
            },
            {
                "id": "fas fa-phone-square",
                "name": "Phone-square",
                "filter": [
                    "communication",
                    "phone",
                    "square"
                ]
            },
            {
                "id": "fas fa-phone-volume",
                "name": "Phone-volume",
                "filter": [
                    "communication",
                    "phone",
                    "volume"
                ]
            },
            {
                "id": "fas fa-rss",
                "name": "Rss",
                "filter": [
                    "communication",
                    "rss"
                ]
            },
            {
                "id": "fas fa-rss-square",
                "name": "Rss-square",
                "filter": [
                    "communication",
                    "rss",
                    "square"
                ]
            },
            {
                "id": "fas fa-tty",
                "name": "Tty",
                "filter": [
                    "communication",
                    "tty"
                ]
            },
            {
                "id": "fas fa-wifi",
                "name": "Wifi",
                "filter": [
                    "communication",
                    "wifi"
                ]
            },
            {
                "id": "fas fa-desktop",
                "name": "Desktop",
                "filter": [
                    "computers",
                    "desktop"
                ]
            },
            {
                "id": "fas fa-download",
                "name": "Download",
                "filter": [
                    "computers",
                    "download"
                ]
            },
            {
                "id": "fas fa-hdd",
                "name": "Hdd",
                "filter": [
                    "computers",
                    "hdd"
                ]
            },
            {
                "id": "far fa-hdd",
                "name": "Hdd",
                "filter": [
                    "computers",
                    "hdd"
                ]
            },
            {
                "id": "fas fa-headphones",
                "name": "Headphones",
                "filter": [
                    "computers",
                    "headphones"
                ]
            },
            {
                "id": "fas fa-keyboard",
                "name": "Keyboard",
                "filter": [
                    "computers",
                    "keyboard"
                ]
            },
            {
                "id": "far fa-keyboard",
                "name": "Keyboard",
                "filter": [
                    "computers",
                    "keyboard"
                ]
            },
            {
                "id": "fas fa-laptop",
                "name": "Laptop",
                "filter": [
                    "computers",
                    "laptop"
                ]
            },
            {
                "id": "fas fa-microchip",
                "name": "Microchip",
                "filter": [
                    "computers",
                    "microchip"
                ]
            },
            {
                "id": "fas fa-mobile",
                "name": "Mobile",
                "filter": [
                    "computers",
                    "mobile"
                ]
            },
            {
                "id": "fas fa-mobile-alt",
                "name": "Mobile-alt",
                "filter": [
                    "computers",
                    "mobile",
                    "alt"
                ]
            },
            {
                "id": "fas fa-plug",
                "name": "Plug",
                "filter": [
                    "computers",
                    "plug"
                ]
            },
            {
                "id": "fas fa-power-off",
                "name": "Power-off",
                "filter": [
                    "computers",
                    "power",
                    "off"
                ]
            },
            {
                "id": "fas fa-print",
                "name": "Print",
                "filter": [
                    "computers",
                    "print"
                ]
            },
            {
                "id": "fas fa-save",
                "name": "Save",
                "filter": [
                    "computers",
                    "save"
                ]
            },
            {
                "id": "far fa-save",
                "name": "Save",
                "filter": [
                    "computers",
                    "save"
                ]
            },
            {
                "id": "fas fa-server",
                "name": "Server",
                "filter": [
                    "computers",
                    "server"
                ]
            },
            {
                "id": "fas fa-tablet",
                "name": "Tablet",
                "filter": [
                    "computers",
                    "tablet"
                ]
            },
            {
                "id": "fas fa-tablet-alt",
                "name": "Tablet-alt",
                "filter": [
                    "computers",
                    "tablet",
                    "alt"
                ]
            },
            {
                "id": "fas fa-tv",
                "name": "Tv",
                "filter": [
                    "computers",
                    "tv"
                ]
            },
            {
                "id": "fas fa-upload",
                "name": "Upload",
                "filter": [
                    "computers",
                    "upload"
                ]
            },
            {
                "id": "fab fa-bitcoin",
                "name": "Bitcoin",
                "filter": [
                    "currency",
                    "bitcoin"
                ]
            },
            {
                "id": "fab fa-btc",
                "name": "Btc",
                "filter": [
                    "currency",
                    "btc"
                ]
            },
            {
                "id": "fas fa-dollar-sign",
                "name": "Dollar-sign",
                "filter": [
                    "currency",
                    "dollar",
                    "sign"
                ]
            },
            {
                "id": "fas fa-euro-sign",
                "name": "Euro-sign",
                "filter": [
                    "currency",
                    "euro",
                    "sign"
                ]
            },
            {
                "id": "fab fa-gg",
                "name": "Gg",
                "filter": [
                    "currency",
                    "gg"
                ]
            },
            {
                "id": "fab fa-gg-circle",
                "name": "Gg-circle",
                "filter": [
                    "currency",
                    "gg",
                    "circle"
                ]
            },
            {
                "id": "fas fa-lira-sign",
                "name": "Lira-sign",
                "filter": [
                    "currency",
                    "lira",
                    "sign"
                ]
            },
            {
                "id": "fas fa-money-bill-alt",
                "name": "Money-bill-alt",
                "filter": [
                    "currency",
                    "money",
                    "bill",
                    "alt"
                ]
            },
            {
                "id": "far fa-money-bill-alt",
                "name": "Money-bill-alt",
                "filter": [
                    "currency",
                    "money",
                    "bill",
                    "alt"
                ]
            },
            {
                "id": "fas fa-pound-sign",
                "name": "Pound-sign",
                "filter": [
                    "currency",
                    "pound",
                    "sign"
                ]
            },
            {
                "id": "fas fa-ruble-sign",
                "name": "Ruble-sign",
                "filter": [
                    "currency",
                    "ruble",
                    "sign"
                ]
            },
            {
                "id": "fas fa-rupee-sign",
                "name": "Rupee-sign",
                "filter": [
                    "currency",
                    "rupee",
                    "sign"
                ]
            },
            {
                "id": "fas fa-shekel-sign",
                "name": "Shekel-sign",
                "filter": [
                    "currency",
                    "shekel",
                    "sign"
                ]
            },
            {
                "id": "fas fa-won-sign",
                "name": "Won-sign",
                "filter": [
                    "currency",
                    "won",
                    "sign"
                ]
            },
            {
                "id": "fas fa-yen-sign",
                "name": "Yen-sign",
                "filter": [
                    "currency",
                    "yen",
                    "sign"
                ]
            },
            {
                "id": "fas fa-bell",
                "name": "Bell",
                "filter": [
                    "date & time",
                    "bell"
                ]
            },
            {
                "id": "far fa-bell",
                "name": "Bell",
                "filter": [
                    "date & time",
                    "bell"
                ]
            },
            {
                "id": "fas fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "date & time",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "far fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "date & time",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "fas fa-calendar",
                "name": "Calendar",
                "filter": [
                    "date & time",
                    "calendar"
                ]
            },
            {
                "id": "far fa-calendar",
                "name": "Calendar",
                "filter": [
                    "date & time",
                    "calendar"
                ]
            },
            {
                "id": "fas fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "date & time",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "far fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "date & time",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "fas fa-calendar-check",
                "name": "Calendar-check",
                "filter": [
                    "date & time",
                    "calendar",
                    "check"
                ]
            },
            {
                "id": "far fa-calendar-check",
                "name": "Calendar-check",
                "filter": [
                    "date & time",
                    "calendar",
                    "check"
                ]
            },
            {
                "id": "fas fa-calendar-minus",
                "name": "Calendar-minus",
                "filter": [
                    "date & time",
                    "calendar",
                    "minus"
                ]
            },
            {
                "id": "far fa-calendar-minus",
                "name": "Calendar-minus",
                "filter": [
                    "date & time",
                    "calendar",
                    "minus"
                ]
            },
            {
                "id": "fas fa-calendar-plus",
                "name": "Calendar-plus",
                "filter": [
                    "date & time",
                    "calendar",
                    "plus"
                ]
            },
            {
                "id": "far fa-calendar-plus",
                "name": "Calendar-plus",
                "filter": [
                    "date & time",
                    "calendar",
                    "plus"
                ]
            },
            {
                "id": "fas fa-calendar-times",
                "name": "Calendar-times",
                "filter": [
                    "date & time",
                    "calendar",
                    "times"
                ]
            },
            {
                "id": "far fa-calendar-times",
                "name": "Calendar-times",
                "filter": [
                    "date & time",
                    "calendar",
                    "times"
                ]
            },
            {
                "id": "fas fa-clock",
                "name": "Clock",
                "filter": [
                    "date & time",
                    "clock"
                ]
            },
            {
                "id": "far fa-clock",
                "name": "Clock",
                "filter": [
                    "date & time",
                    "clock"
                ]
            },
            {
                "id": "fas fa-hourglass",
                "name": "Hourglass",
                "filter": [
                    "date & time",
                    "hourglass"
                ]
            },
            {
                "id": "far fa-hourglass",
                "name": "Hourglass",
                "filter": [
                    "date & time",
                    "hourglass"
                ]
            },
            {
                "id": "fas fa-hourglass-end",
                "name": "Hourglass-end",
                "filter": [
                    "date & time",
                    "hourglass",
                    "end"
                ]
            },
            {
                "id": "fas fa-hourglass-half",
                "name": "Hourglass-half",
                "filter": [
                    "date & time",
                    "hourglass",
                    "half"
                ]
            },
            {
                "id": "fas fa-hourglass-start",
                "name": "Hourglass-start",
                "filter": [
                    "date & time",
                    "hourglass",
                    "start"
                ]
            },
            {
                "id": "fas fa-stopwatch",
                "name": "Stopwatch",
                "filter": [
                    "date & time",
                    "stopwatch"
                ]
            },
            {
                "id": "fas fa-adjust",
                "name": "Adjust",
                "filter": [
                    "design",
                    "adjust"
                ]
            },
            {
                "id": "fas fa-clone",
                "name": "Clone",
                "filter": [
                    "design",
                    "clone"
                ]
            },
            {
                "id": "far fa-clone",
                "name": "Clone",
                "filter": [
                    "design",
                    "clone"
                ]
            },
            {
                "id": "fas fa-copy",
                "name": "Copy",
                "filter": [
                    "design",
                    "copy"
                ]
            },
            {
                "id": "far fa-copy",
                "name": "Copy",
                "filter": [
                    "design",
                    "copy"
                ]
            },
            {
                "id": "fas fa-crop",
                "name": "Crop",
                "filter": [
                    "design",
                    "crop"
                ]
            },
            {
                "id": "fas fa-crosshairs",
                "name": "Crosshairs",
                "filter": [
                    "design",
                    "crosshairs"
                ]
            },
            {
                "id": "fas fa-cut",
                "name": "Cut",
                "filter": [
                    "design",
                    "cut"
                ]
            },
            {
                "id": "fas fa-edit",
                "name": "Edit",
                "filter": [
                    "design",
                    "edit"
                ]
            },
            {
                "id": "far fa-edit",
                "name": "Edit",
                "filter": [
                    "design",
                    "edit"
                ]
            },
            {
                "id": "fas fa-eraser",
                "name": "Eraser",
                "filter": [
                    "design",
                    "eraser"
                ]
            },
            {
                "id": "fas fa-eye",
                "name": "Eye",
                "filter": [
                    "design",
                    "eye"
                ]
            },
            {
                "id": "fas fa-eye-dropper",
                "name": "Eye-dropper",
                "filter": [
                    "design",
                    "eye",
                    "dropper"
                ]
            },
            {
                "id": "fas fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "design",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "far fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "design",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "fas fa-object-group",
                "name": "Object-group",
                "filter": [
                    "design",
                    "object",
                    "group"
                ]
            },
            {
                "id": "far fa-object-group",
                "name": "Object-group",
                "filter": [
                    "design",
                    "object",
                    "group"
                ]
            },
            {
                "id": "fas fa-object-ungroup",
                "name": "Object-ungroup",
                "filter": [
                    "design",
                    "object",
                    "ungroup"
                ]
            },
            {
                "id": "far fa-object-ungroup",
                "name": "Object-ungroup",
                "filter": [
                    "design",
                    "object",
                    "ungroup"
                ]
            },
            {
                "id": "fas fa-paint-brush",
                "name": "Paint-brush",
                "filter": [
                    "design",
                    "paint",
                    "brush"
                ]
            },
            {
                "id": "fas fa-paste",
                "name": "Paste",
                "filter": [
                    "design",
                    "paste"
                ]
            },
            {
                "id": "fas fa-pencil-alt",
                "name": "Pencil-alt",
                "filter": [
                    "design",
                    "pencil",
                    "alt"
                ]
            },
            {
                "id": "fas fa-save",
                "name": "Save",
                "filter": [
                    "design",
                    "save"
                ]
            },
            {
                "id": "far fa-save",
                "name": "Save",
                "filter": [
                    "design",
                    "save"
                ]
            },
            {
                "id": "fas fa-tint",
                "name": "Tint",
                "filter": [
                    "design",
                    "tint"
                ]
            },
            {
                "id": "fas fa-align-center",
                "name": "Align-center",
                "filter": [
                    "editors",
                    "align",
                    "center"
                ]
            },
            {
                "id": "fas fa-align-justify",
                "name": "Align-justify",
                "filter": [
                    "editors",
                    "align",
                    "justify"
                ]
            },
            {
                "id": "fas fa-align-left",
                "name": "Align-left",
                "filter": [
                    "editors",
                    "align",
                    "left"
                ]
            },
            {
                "id": "fas fa-align-right",
                "name": "Align-right",
                "filter": [
                    "editors",
                    "align",
                    "right"
                ]
            },
            {
                "id": "fas fa-bold",
                "name": "Bold",
                "filter": [
                    "editors",
                    "bold"
                ]
            },
            {
                "id": "fas fa-clipboard",
                "name": "Clipboard",
                "filter": [
                    "editors",
                    "clipboard"
                ]
            },
            {
                "id": "far fa-clipboard",
                "name": "Clipboard",
                "filter": [
                    "editors",
                    "clipboard"
                ]
            },
            {
                "id": "fas fa-clone",
                "name": "Clone",
                "filter": [
                    "editors",
                    "clone"
                ]
            },
            {
                "id": "far fa-clone",
                "name": "Clone",
                "filter": [
                    "editors",
                    "clone"
                ]
            },
            {
                "id": "fas fa-columns",
                "name": "Columns",
                "filter": [
                    "editors",
                    "columns"
                ]
            },
            {
                "id": "fas fa-copy",
                "name": "Copy",
                "filter": [
                    "editors",
                    "copy"
                ]
            },
            {
                "id": "far fa-copy",
                "name": "Copy",
                "filter": [
                    "editors",
                    "copy"
                ]
            },
            {
                "id": "fas fa-cut",
                "name": "Cut",
                "filter": [
                    "editors",
                    "cut"
                ]
            },
            {
                "id": "fas fa-edit",
                "name": "Edit",
                "filter": [
                    "editors",
                    "edit"
                ]
            },
            {
                "id": "far fa-edit",
                "name": "Edit",
                "filter": [
                    "editors",
                    "edit"
                ]
            },
            {
                "id": "fas fa-eraser",
                "name": "Eraser",
                "filter": [
                    "editors",
                    "eraser"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "editors",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "editors",
                    "file"
                ]
            },
            {
                "id": "fas fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "editors",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "far fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "editors",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "fas fa-font",
                "name": "Font",
                "filter": [
                    "editors",
                    "font"
                ]
            },
            {
                "id": "fas fa-heading",
                "name": "Heading",
                "filter": [
                    "editors",
                    "heading"
                ]
            },
            {
                "id": "fas fa-i-cursor",
                "name": "I-cursor",
                "filter": [
                    "editors",
                    "i",
                    "cursor"
                ]
            },
            {
                "id": "fas fa-indent",
                "name": "Indent",
                "filter": [
                    "editors",
                    "indent"
                ]
            },
            {
                "id": "fas fa-italic",
                "name": "Italic",
                "filter": [
                    "editors",
                    "italic"
                ]
            },
            {
                "id": "fas fa-link",
                "name": "Link",
                "filter": [
                    "editors",
                    "link"
                ]
            },
            {
                "id": "fas fa-list",
                "name": "List",
                "filter": [
                    "editors",
                    "list"
                ]
            },
            {
                "id": "fas fa-list-alt",
                "name": "List-alt",
                "filter": [
                    "editors",
                    "list",
                    "alt"
                ]
            },
            {
                "id": "far fa-list-alt",
                "name": "List-alt",
                "filter": [
                    "editors",
                    "list",
                    "alt"
                ]
            },
            {
                "id": "fas fa-list-ol",
                "name": "List-ol",
                "filter": [
                    "editors",
                    "list",
                    "ol"
                ]
            },
            {
                "id": "fas fa-list-ul",
                "name": "List-ul",
                "filter": [
                    "editors",
                    "list",
                    "ul"
                ]
            },
            {
                "id": "fas fa-outdent",
                "name": "Outdent",
                "filter": [
                    "editors",
                    "outdent"
                ]
            },
            {
                "id": "fas fa-paper-plane",
                "name": "Paper-plane",
                "filter": [
                    "editors",
                    "paper",
                    "plane"
                ]
            },
            {
                "id": "far fa-paper-plane",
                "name": "Paper-plane",
                "filter": [
                    "editors",
                    "paper",
                    "plane"
                ]
            },
            {
                "id": "fas fa-paperclip",
                "name": "Paperclip",
                "filter": [
                    "editors",
                    "paperclip"
                ]
            },
            {
                "id": "fas fa-paragraph",
                "name": "Paragraph",
                "filter": [
                    "editors",
                    "paragraph"
                ]
            },
            {
                "id": "fas fa-paste",
                "name": "Paste",
                "filter": [
                    "editors",
                    "paste"
                ]
            },
            {
                "id": "fas fa-pencil-alt",
                "name": "Pencil-alt",
                "filter": [
                    "editors",
                    "pencil",
                    "alt"
                ]
            },
            {
                "id": "fas fa-print",
                "name": "Print",
                "filter": [
                    "editors",
                    "print"
                ]
            },
            {
                "id": "fas fa-quote-left",
                "name": "Quote-left",
                "filter": [
                    "editors",
                    "quote",
                    "left"
                ]
            },
            {
                "id": "fas fa-quote-right",
                "name": "Quote-right",
                "filter": [
                    "editors",
                    "quote",
                    "right"
                ]
            },
            {
                "id": "fas fa-redo",
                "name": "Redo",
                "filter": [
                    "editors",
                    "redo"
                ]
            },
            {
                "id": "fas fa-redo-alt",
                "name": "Redo-alt",
                "filter": [
                    "editors",
                    "redo",
                    "alt"
                ]
            },
            {
                "id": "fas fa-reply",
                "name": "Reply",
                "filter": [
                    "editors",
                    "reply"
                ]
            },
            {
                "id": "fas fa-reply-all",
                "name": "Reply-all",
                "filter": [
                    "editors",
                    "reply",
                    "all"
                ]
            },
            {
                "id": "fas fa-share",
                "name": "Share",
                "filter": [
                    "editors",
                    "share"
                ]
            },
            {
                "id": "fas fa-strikethrough",
                "name": "Strikethrough",
                "filter": [
                    "editors",
                    "strikethrough"
                ]
            },
            {
                "id": "fas fa-subscript",
                "name": "Subscript",
                "filter": [
                    "editors",
                    "subscript"
                ]
            },
            {
                "id": "fas fa-superscript",
                "name": "Superscript",
                "filter": [
                    "editors",
                    "superscript"
                ]
            },
            {
                "id": "fas fa-sync",
                "name": "Sync",
                "filter": [
                    "editors",
                    "sync"
                ]
            },
            {
                "id": "fas fa-sync-alt",
                "name": "Sync-alt",
                "filter": [
                    "editors",
                    "sync",
                    "alt"
                ]
            },
            {
                "id": "fas fa-table",
                "name": "Table",
                "filter": [
                    "editors",
                    "table"
                ]
            },
            {
                "id": "fas fa-tasks",
                "name": "Tasks",
                "filter": [
                    "editors",
                    "tasks"
                ]
            },
            {
                "id": "fas fa-text-height",
                "name": "Text-height",
                "filter": [
                    "editors",
                    "text",
                    "height"
                ]
            },
            {
                "id": "fas fa-text-width",
                "name": "Text-width",
                "filter": [
                    "editors",
                    "text",
                    "width"
                ]
            },
            {
                "id": "fas fa-th",
                "name": "Th",
                "filter": [
                    "editors",
                    "th"
                ]
            },
            {
                "id": "fas fa-th-large",
                "name": "Th-large",
                "filter": [
                    "editors",
                    "th",
                    "large"
                ]
            },
            {
                "id": "fas fa-th-list",
                "name": "Th-list",
                "filter": [
                    "editors",
                    "th",
                    "list"
                ]
            },
            {
                "id": "fas fa-trash",
                "name": "Trash",
                "filter": [
                    "editors",
                    "trash"
                ]
            },
            {
                "id": "fas fa-trash-alt",
                "name": "Trash-alt",
                "filter": [
                    "editors",
                    "trash",
                    "alt"
                ]
            },
            {
                "id": "far fa-trash-alt",
                "name": "Trash-alt",
                "filter": [
                    "editors",
                    "trash",
                    "alt"
                ]
            },
            {
                "id": "fas fa-underline",
                "name": "Underline",
                "filter": [
                    "editors",
                    "underline"
                ]
            },
            {
                "id": "fas fa-undo",
                "name": "Undo",
                "filter": [
                    "editors",
                    "undo"
                ]
            },
            {
                "id": "fas fa-undo-alt",
                "name": "Undo-alt",
                "filter": [
                    "editors",
                    "undo",
                    "alt"
                ]
            },
            {
                "id": "fas fa-unlink",
                "name": "Unlink",
                "filter": [
                    "editors",
                    "unlink"
                ]
            },
            {
                "id": "fas fa-archive",
                "name": "Archive",
                "filter": [
                    "files",
                    "archive"
                ]
            },
            {
                "id": "fas fa-clone",
                "name": "Clone",
                "filter": [
                    "files",
                    "clone"
                ]
            },
            {
                "id": "far fa-clone",
                "name": "Clone",
                "filter": [
                    "files",
                    "clone"
                ]
            },
            {
                "id": "fas fa-copy",
                "name": "Copy",
                "filter": [
                    "files",
                    "copy"
                ]
            },
            {
                "id": "far fa-copy",
                "name": "Copy",
                "filter": [
                    "files",
                    "copy"
                ]
            },
            {
                "id": "fas fa-cut",
                "name": "Cut",
                "filter": [
                    "files",
                    "cut"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "files",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "files",
                    "file"
                ]
            },
            {
                "id": "fas fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "files",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "far fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "files",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "fas fa-file-archive",
                "name": "File-archive",
                "filter": [
                    "files",
                    "file",
                    "archive"
                ]
            },
            {
                "id": "far fa-file-archive",
                "name": "File-archive",
                "filter": [
                    "files",
                    "file",
                    "archive"
                ]
            },
            {
                "id": "fas fa-file-audio",
                "name": "File-audio",
                "filter": [
                    "files",
                    "file",
                    "audio"
                ]
            },
            {
                "id": "far fa-file-audio",
                "name": "File-audio",
                "filter": [
                    "files",
                    "file",
                    "audio"
                ]
            },
            {
                "id": "fas fa-file-code",
                "name": "File-code",
                "filter": [
                    "files",
                    "file",
                    "code"
                ]
            },
            {
                "id": "far fa-file-code",
                "name": "File-code",
                "filter": [
                    "files",
                    "file",
                    "code"
                ]
            },
            {
                "id": "fas fa-file-excel",
                "name": "File-excel",
                "filter": [
                    "files",
                    "file",
                    "excel"
                ]
            },
            {
                "id": "far fa-file-excel",
                "name": "File-excel",
                "filter": [
                    "files",
                    "file",
                    "excel"
                ]
            },
            {
                "id": "fas fa-file-image",
                "name": "File-image",
                "filter": [
                    "files",
                    "file",
                    "image"
                ]
            },
            {
                "id": "far fa-file-image",
                "name": "File-image",
                "filter": [
                    "files",
                    "file",
                    "image"
                ]
            },
            {
                "id": "fas fa-file-pdf",
                "name": "File-pdf",
                "filter": [
                    "files",
                    "file",
                    "pdf"
                ]
            },
            {
                "id": "far fa-file-pdf",
                "name": "File-pdf",
                "filter": [
                    "files",
                    "file",
                    "pdf"
                ]
            },
            {
                "id": "fas fa-file-powerpoint",
                "name": "File-powerpoint",
                "filter": [
                    "files",
                    "file",
                    "powerpoint"
                ]
            },
            {
                "id": "far fa-file-powerpoint",
                "name": "File-powerpoint",
                "filter": [
                    "files",
                    "file",
                    "powerpoint"
                ]
            },
            {
                "id": "fas fa-file-video",
                "name": "File-video",
                "filter": [
                    "files",
                    "file",
                    "video"
                ]
            },
            {
                "id": "far fa-file-video",
                "name": "File-video",
                "filter": [
                    "files",
                    "file",
                    "video"
                ]
            },
            {
                "id": "fas fa-file-word",
                "name": "File-word",
                "filter": [
                    "files",
                    "file",
                    "word"
                ]
            },
            {
                "id": "far fa-file-word",
                "name": "File-word",
                "filter": [
                    "files",
                    "file",
                    "word"
                ]
            },
            {
                "id": "fas fa-folder",
                "name": "Folder",
                "filter": [
                    "files",
                    "folder"
                ]
            },
            {
                "id": "far fa-folder",
                "name": "Folder",
                "filter": [
                    "files",
                    "folder"
                ]
            },
            {
                "id": "fas fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "files",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "far fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "files",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "fas fa-paste",
                "name": "Paste",
                "filter": [
                    "files",
                    "paste"
                ]
            },
            {
                "id": "fas fa-save",
                "name": "Save",
                "filter": [
                    "files",
                    "save"
                ]
            },
            {
                "id": "far fa-save",
                "name": "Save",
                "filter": [
                    "files",
                    "save"
                ]
            },
            {
                "id": "fas fa-sticky-note",
                "name": "Sticky-note",
                "filter": [
                    "files",
                    "sticky",
                    "note"
                ]
            },
            {
                "id": "far fa-sticky-note",
                "name": "Sticky-note",
                "filter": [
                    "files",
                    "sticky",
                    "note"
                ]
            },
            {
                "id": "fas fa-genderless",
                "name": "Genderless",
                "filter": [
                    "genders",
                    "genderless"
                ]
            },
            {
                "id": "fas fa-mars",
                "name": "Mars",
                "filter": [
                    "genders",
                    "mars"
                ]
            },
            {
                "id": "fas fa-mars-double",
                "name": "Mars-double",
                "filter": [
                    "genders",
                    "mars",
                    "double"
                ]
            },
            {
                "id": "fas fa-mars-stroke",
                "name": "Mars-stroke",
                "filter": [
                    "genders",
                    "mars",
                    "stroke"
                ]
            },
            {
                "id": "fas fa-mars-stroke-h",
                "name": "Mars-stroke-h",
                "filter": [
                    "genders",
                    "mars",
                    "stroke",
                    "h"
                ]
            },
            {
                "id": "fas fa-mars-stroke-v",
                "name": "Mars-stroke-v",
                "filter": [
                    "genders",
                    "mars",
                    "stroke",
                    "v"
                ]
            },
            {
                "id": "fas fa-mercury",
                "name": "Mercury",
                "filter": [
                    "genders",
                    "mercury"
                ]
            },
            {
                "id": "fas fa-neuter",
                "name": "Neuter",
                "filter": [
                    "genders",
                    "neuter"
                ]
            },
            {
                "id": "fas fa-transgender",
                "name": "Transgender",
                "filter": [
                    "genders",
                    "transgender"
                ]
            },
            {
                "id": "fas fa-transgender-alt",
                "name": "Transgender-alt",
                "filter": [
                    "genders",
                    "transgender",
                    "alt"
                ]
            },
            {
                "id": "fas fa-venus",
                "name": "Venus",
                "filter": [
                    "genders",
                    "venus"
                ]
            },
            {
                "id": "fas fa-venus-double",
                "name": "Venus-double",
                "filter": [
                    "genders",
                    "venus",
                    "double"
                ]
            },
            {
                "id": "fas fa-venus-mars",
                "name": "Venus-mars",
                "filter": [
                    "genders",
                    "venus",
                    "mars"
                ]
            },
            {
                "id": "fas fa-hand-lizard",
                "name": "Hand-lizard",
                "filter": [
                    "hands",
                    "hand",
                    "lizard"
                ]
            },
            {
                "id": "far fa-hand-lizard",
                "name": "Hand-lizard",
                "filter": [
                    "hands",
                    "hand",
                    "lizard"
                ]
            },
            {
                "id": "fas fa-hand-paper",
                "name": "Hand-paper",
                "filter": [
                    "hands",
                    "hand",
                    "paper"
                ]
            },
            {
                "id": "far fa-hand-paper",
                "name": "Hand-paper",
                "filter": [
                    "hands",
                    "hand",
                    "paper"
                ]
            },
            {
                "id": "fas fa-hand-peace",
                "name": "Hand-peace",
                "filter": [
                    "hands",
                    "hand",
                    "peace"
                ]
            },
            {
                "id": "far fa-hand-peace",
                "name": "Hand-peace",
                "filter": [
                    "hands",
                    "hand",
                    "peace"
                ]
            },
            {
                "id": "fas fa-hand-point-down",
                "name": "Hand-point-down",
                "filter": [
                    "hands",
                    "hand",
                    "point",
                    "down"
                ]
            },
            {
                "id": "far fa-hand-point-down",
                "name": "Hand-point-down",
                "filter": [
                    "hands",
                    "hand",
                    "point",
                    "down"
                ]
            },
            {
                "id": "fas fa-hand-point-left",
                "name": "Hand-point-left",
                "filter": [
                    "hands",
                    "hand",
                    "point",
                    "left"
                ]
            },
            {
                "id": "far fa-hand-point-left",
                "name": "Hand-point-left",
                "filter": [
                    "hands",
                    "hand",
                    "point",
                    "left"
                ]
            },
            {
                "id": "fas fa-hand-point-right",
                "name": "Hand-point-right",
                "filter": [
                    "hands",
                    "hand",
                    "point",
                    "right"
                ]
            },
            {
                "id": "far fa-hand-point-right",
                "name": "Hand-point-right",
                "filter": [
                    "hands",
                    "hand",
                    "point",
                    "right"
                ]
            },
            {
                "id": "fas fa-hand-point-up",
                "name": "Hand-point-up",
                "filter": [
                    "hands",
                    "hand",
                    "point",
                    "up"
                ]
            },
            {
                "id": "far fa-hand-point-up",
                "name": "Hand-point-up",
                "filter": [
                    "hands",
                    "hand",
                    "point",
                    "up"
                ]
            },
            {
                "id": "fas fa-hand-pointer",
                "name": "Hand-pointer",
                "filter": [
                    "hands",
                    "hand",
                    "pointer"
                ]
            },
            {
                "id": "far fa-hand-pointer",
                "name": "Hand-pointer",
                "filter": [
                    "hands",
                    "hand",
                    "pointer"
                ]
            },
            {
                "id": "fas fa-hand-rock",
                "name": "Hand-rock",
                "filter": [
                    "hands",
                    "hand",
                    "rock"
                ]
            },
            {
                "id": "far fa-hand-rock",
                "name": "Hand-rock",
                "filter": [
                    "hands",
                    "hand",
                    "rock"
                ]
            },
            {
                "id": "fas fa-hand-scissors",
                "name": "Hand-scissors",
                "filter": [
                    "hands",
                    "hand",
                    "scissors"
                ]
            },
            {
                "id": "far fa-hand-scissors",
                "name": "Hand-scissors",
                "filter": [
                    "hands",
                    "hand",
                    "scissors"
                ]
            },
            {
                "id": "fas fa-hand-spock",
                "name": "Hand-spock",
                "filter": [
                    "hands",
                    "hand",
                    "spock"
                ]
            },
            {
                "id": "far fa-hand-spock",
                "name": "Hand-spock",
                "filter": [
                    "hands",
                    "hand",
                    "spock"
                ]
            },
            {
                "id": "fas fa-handshake",
                "name": "Handshake",
                "filter": [
                    "hands",
                    "handshake"
                ]
            },
            {
                "id": "far fa-handshake",
                "name": "Handshake",
                "filter": [
                    "hands",
                    "handshake"
                ]
            },
            {
                "id": "fas fa-thumbs-down",
                "name": "Thumbs-down",
                "filter": [
                    "hands",
                    "thumbs",
                    "down"
                ]
            },
            {
                "id": "far fa-thumbs-down",
                "name": "Thumbs-down",
                "filter": [
                    "hands",
                    "thumbs",
                    "down"
                ]
            },
            {
                "id": "fas fa-thumbs-up",
                "name": "Thumbs-up",
                "filter": [
                    "hands",
                    "thumbs",
                    "up"
                ]
            },
            {
                "id": "far fa-thumbs-up",
                "name": "Thumbs-up",
                "filter": [
                    "hands",
                    "thumbs",
                    "up"
                ]
            },
            {
                "id": "fab fa-accessible-icon",
                "name": "Accessible-icon",
                "filter": [
                    "health",
                    "accessible",
                    "icon"
                ]
            },
            {
                "id": "fas fa-ambulance",
                "name": "Ambulance",
                "filter": [
                    "health",
                    "ambulance"
                ]
            },
            {
                "id": "fas fa-h-square",
                "name": "H-square",
                "filter": [
                    "health",
                    "h",
                    "square"
                ]
            },
            {
                "id": "fas fa-heart",
                "name": "Heart",
                "filter": [
                    "health",
                    "heart"
                ]
            },
            {
                "id": "far fa-heart",
                "name": "Heart",
                "filter": [
                    "health",
                    "heart"
                ]
            },
            {
                "id": "fas fa-heartbeat",
                "name": "Heartbeat",
                "filter": [
                    "health",
                    "heartbeat"
                ]
            },
            {
                "id": "fas fa-hospital",
                "name": "Hospital",
                "filter": [
                    "health",
                    "hospital"
                ]
            },
            {
                "id": "far fa-hospital",
                "name": "Hospital",
                "filter": [
                    "health",
                    "hospital"
                ]
            },
            {
                "id": "fas fa-medkit",
                "name": "Medkit",
                "filter": [
                    "health",
                    "medkit"
                ]
            },
            {
                "id": "fas fa-plus-square",
                "name": "Plus-square",
                "filter": [
                    "health",
                    "plus",
                    "square"
                ]
            },
            {
                "id": "far fa-plus-square",
                "name": "Plus-square",
                "filter": [
                    "health",
                    "plus",
                    "square"
                ]
            },
            {
                "id": "fas fa-stethoscope",
                "name": "Stethoscope",
                "filter": [
                    "health",
                    "stethoscope"
                ]
            },
            {
                "id": "fas fa-user-md",
                "name": "User-md",
                "filter": [
                    "health",
                    "user",
                    "md"
                ]
            },
            {
                "id": "fas fa-wheelchair",
                "name": "Wheelchair",
                "filter": [
                    "health",
                    "wheelchair"
                ]
            },
            {
                "id": "fas fa-adjust",
                "name": "Adjust",
                "filter": [
                    "images",
                    "adjust"
                ]
            },
            {
                "id": "fas fa-bolt",
                "name": "Bolt",
                "filter": [
                    "images",
                    "bolt"
                ]
            },
            {
                "id": "fas fa-camera",
                "name": "Camera",
                "filter": [
                    "images",
                    "camera"
                ]
            },
            {
                "id": "fas fa-camera-retro",
                "name": "Camera-retro",
                "filter": [
                    "images",
                    "camera",
                    "retro"
                ]
            },
            {
                "id": "fas fa-clone",
                "name": "Clone",
                "filter": [
                    "images",
                    "clone"
                ]
            },
            {
                "id": "far fa-clone",
                "name": "Clone",
                "filter": [
                    "images",
                    "clone"
                ]
            },
            {
                "id": "fas fa-compress",
                "name": "Compress",
                "filter": [
                    "images",
                    "compress"
                ]
            },
            {
                "id": "fas fa-expand",
                "name": "Expand",
                "filter": [
                    "images",
                    "expand"
                ]
            },
            {
                "id": "fas fa-eye",
                "name": "Eye",
                "filter": [
                    "images",
                    "eye"
                ]
            },
            {
                "id": "fas fa-eye-dropper",
                "name": "Eye-dropper",
                "filter": [
                    "images",
                    "eye",
                    "dropper"
                ]
            },
            {
                "id": "fas fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "images",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "far fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "images",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "fas fa-file-image",
                "name": "File-image",
                "filter": [
                    "images",
                    "file",
                    "image"
                ]
            },
            {
                "id": "far fa-file-image",
                "name": "File-image",
                "filter": [
                    "images",
                    "file",
                    "image"
                ]
            },
            {
                "id": "fas fa-film",
                "name": "Film",
                "filter": [
                    "images",
                    "film"
                ]
            },
            {
                "id": "fas fa-id-badge",
                "name": "Id-badge",
                "filter": [
                    "images",
                    "id",
                    "badge"
                ]
            },
            {
                "id": "far fa-id-badge",
                "name": "Id-badge",
                "filter": [
                    "images",
                    "id",
                    "badge"
                ]
            },
            {
                "id": "fas fa-id-card",
                "name": "Id-card",
                "filter": [
                    "images",
                    "id",
                    "card"
                ]
            },
            {
                "id": "far fa-id-card",
                "name": "Id-card",
                "filter": [
                    "images",
                    "id",
                    "card"
                ]
            },
            {
                "id": "fas fa-image",
                "name": "Image",
                "filter": [
                    "images",
                    "image"
                ]
            },
            {
                "id": "far fa-image",
                "name": "Image",
                "filter": [
                    "images",
                    "image"
                ]
            },
            {
                "id": "fas fa-images",
                "name": "Images",
                "filter": [
                    "images",
                    "images"
                ]
            },
            {
                "id": "far fa-images",
                "name": "Images",
                "filter": [
                    "images",
                    "images"
                ]
            },
            {
                "id": "fas fa-sliders-h",
                "name": "Sliders-h",
                "filter": [
                    "images",
                    "sliders",
                    "h"
                ]
            },
            {
                "id": "fas fa-tint",
                "name": "Tint",
                "filter": [
                    "images",
                    "tint"
                ]
            },
            {
                "id": "fas fa-ban",
                "name": "Ban",
                "filter": [
                    "interfaces",
                    "ban"
                ]
            },
            {
                "id": "fas fa-barcode",
                "name": "Barcode",
                "filter": [
                    "interfaces",
                    "barcode"
                ]
            },
            {
                "id": "fas fa-bars",
                "name": "Bars",
                "filter": [
                    "interfaces",
                    "bars"
                ]
            },
            {
                "id": "fas fa-beer",
                "name": "Beer",
                "filter": [
                    "interfaces",
                    "beer"
                ]
            },
            {
                "id": "fas fa-bell",
                "name": "Bell",
                "filter": [
                    "interfaces",
                    "bell"
                ]
            },
            {
                "id": "far fa-bell",
                "name": "Bell",
                "filter": [
                    "interfaces",
                    "bell"
                ]
            },
            {
                "id": "fas fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "interfaces",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "far fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "interfaces",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "fas fa-bug",
                "name": "Bug",
                "filter": [
                    "interfaces",
                    "bug"
                ]
            },
            {
                "id": "fas fa-bullhorn",
                "name": "Bullhorn",
                "filter": [
                    "interfaces",
                    "bullhorn"
                ]
            },
            {
                "id": "fas fa-bullseye",
                "name": "Bullseye",
                "filter": [
                    "interfaces",
                    "bullseye"
                ]
            },
            {
                "id": "fas fa-calculator",
                "name": "Calculator",
                "filter": [
                    "interfaces",
                    "calculator"
                ]
            },
            {
                "id": "fas fa-calendar",
                "name": "Calendar",
                "filter": [
                    "interfaces",
                    "calendar"
                ]
            },
            {
                "id": "far fa-calendar",
                "name": "Calendar",
                "filter": [
                    "interfaces",
                    "calendar"
                ]
            },
            {
                "id": "fas fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "interfaces",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "far fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "interfaces",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "fas fa-calendar-check",
                "name": "Calendar-check",
                "filter": [
                    "interfaces",
                    "calendar",
                    "check"
                ]
            },
            {
                "id": "far fa-calendar-check",
                "name": "Calendar-check",
                "filter": [
                    "interfaces",
                    "calendar",
                    "check"
                ]
            },
            {
                "id": "fas fa-calendar-minus",
                "name": "Calendar-minus",
                "filter": [
                    "interfaces",
                    "calendar",
                    "minus"
                ]
            },
            {
                "id": "far fa-calendar-minus",
                "name": "Calendar-minus",
                "filter": [
                    "interfaces",
                    "calendar",
                    "minus"
                ]
            },
            {
                "id": "fas fa-calendar-plus",
                "name": "Calendar-plus",
                "filter": [
                    "interfaces",
                    "calendar",
                    "plus"
                ]
            },
            {
                "id": "far fa-calendar-plus",
                "name": "Calendar-plus",
                "filter": [
                    "interfaces",
                    "calendar",
                    "plus"
                ]
            },
            {
                "id": "fas fa-calendar-times",
                "name": "Calendar-times",
                "filter": [
                    "interfaces",
                    "calendar",
                    "times"
                ]
            },
            {
                "id": "far fa-calendar-times",
                "name": "Calendar-times",
                "filter": [
                    "interfaces",
                    "calendar",
                    "times"
                ]
            },
            {
                "id": "fas fa-certificate",
                "name": "Certificate",
                "filter": [
                    "interfaces",
                    "certificate"
                ]
            },
            {
                "id": "fas fa-check",
                "name": "Check",
                "filter": [
                    "interfaces",
                    "check"
                ]
            },
            {
                "id": "fas fa-check-circle",
                "name": "Check-circle",
                "filter": [
                    "interfaces",
                    "check",
                    "circle"
                ]
            },
            {
                "id": "far fa-check-circle",
                "name": "Check-circle",
                "filter": [
                    "interfaces",
                    "check",
                    "circle"
                ]
            },
            {
                "id": "fas fa-check-square",
                "name": "Check-square",
                "filter": [
                    "interfaces",
                    "check",
                    "square"
                ]
            },
            {
                "id": "far fa-check-square",
                "name": "Check-square",
                "filter": [
                    "interfaces",
                    "check",
                    "square"
                ]
            },
            {
                "id": "fas fa-circle",
                "name": "Circle",
                "filter": [
                    "interfaces",
                    "circle"
                ]
            },
            {
                "id": "far fa-circle",
                "name": "Circle",
                "filter": [
                    "interfaces",
                    "circle"
                ]
            },
            {
                "id": "fas fa-clipboard",
                "name": "Clipboard",
                "filter": [
                    "interfaces",
                    "clipboard"
                ]
            },
            {
                "id": "far fa-clipboard",
                "name": "Clipboard",
                "filter": [
                    "interfaces",
                    "clipboard"
                ]
            },
            {
                "id": "fas fa-clone",
                "name": "Clone",
                "filter": [
                    "interfaces",
                    "clone"
                ]
            },
            {
                "id": "far fa-clone",
                "name": "Clone",
                "filter": [
                    "interfaces",
                    "clone"
                ]
            },
            {
                "id": "fas fa-cloud",
                "name": "Cloud",
                "filter": [
                    "interfaces",
                    "cloud"
                ]
            },
            {
                "id": "fas fa-cloud-download-alt",
                "name": "Cloud-download-alt",
                "filter": [
                    "interfaces",
                    "cloud",
                    "download",
                    "alt"
                ]
            },
            {
                "id": "fas fa-cloud-upload-alt",
                "name": "Cloud-upload-alt",
                "filter": [
                    "interfaces",
                    "cloud",
                    "upload",
                    "alt"
                ]
            },
            {
                "id": "fas fa-coffee",
                "name": "Coffee",
                "filter": [
                    "interfaces",
                    "coffee"
                ]
            },
            {
                "id": "fas fa-cog",
                "name": "Cog",
                "filter": [
                    "interfaces",
                    "cog"
                ]
            },
            {
                "id": "fas fa-cogs",
                "name": "Cogs",
                "filter": [
                    "interfaces",
                    "cogs"
                ]
            },
            {
                "id": "fas fa-copy",
                "name": "Copy",
                "filter": [
                    "interfaces",
                    "copy"
                ]
            },
            {
                "id": "far fa-copy",
                "name": "Copy",
                "filter": [
                    "interfaces",
                    "copy"
                ]
            },
            {
                "id": "fas fa-cut",
                "name": "Cut",
                "filter": [
                    "interfaces",
                    "cut"
                ]
            },
            {
                "id": "fas fa-database",
                "name": "Database",
                "filter": [
                    "interfaces",
                    "database"
                ]
            },
            {
                "id": "fas fa-dot-circle",
                "name": "Dot-circle",
                "filter": [
                    "interfaces",
                    "dot",
                    "circle"
                ]
            },
            {
                "id": "far fa-dot-circle",
                "name": "Dot-circle",
                "filter": [
                    "interfaces",
                    "dot",
                    "circle"
                ]
            },
            {
                "id": "fas fa-download",
                "name": "Download",
                "filter": [
                    "interfaces",
                    "download"
                ]
            },
            {
                "id": "fas fa-edit",
                "name": "Edit",
                "filter": [
                    "interfaces",
                    "edit"
                ]
            },
            {
                "id": "far fa-edit",
                "name": "Edit",
                "filter": [
                    "interfaces",
                    "edit"
                ]
            },
            {
                "id": "fas fa-ellipsis-h",
                "name": "Ellipsis-h",
                "filter": [
                    "interfaces",
                    "ellipsis",
                    "h"
                ]
            },
            {
                "id": "fas fa-ellipsis-v",
                "name": "Ellipsis-v",
                "filter": [
                    "interfaces",
                    "ellipsis",
                    "v"
                ]
            },
            {
                "id": "fas fa-envelope",
                "name": "Envelope",
                "filter": [
                    "interfaces",
                    "envelope"
                ]
            },
            {
                "id": "far fa-envelope",
                "name": "Envelope",
                "filter": [
                    "interfaces",
                    "envelope"
                ]
            },
            {
                "id": "fas fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "interfaces",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "far fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "interfaces",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "fas fa-eraser",
                "name": "Eraser",
                "filter": [
                    "interfaces",
                    "eraser"
                ]
            },
            {
                "id": "fas fa-exclamation",
                "name": "Exclamation",
                "filter": [
                    "interfaces",
                    "exclamation"
                ]
            },
            {
                "id": "fas fa-exclamation-circle",
                "name": "Exclamation-circle",
                "filter": [
                    "interfaces",
                    "exclamation",
                    "circle"
                ]
            },
            {
                "id": "fas fa-exclamation-triangle",
                "name": "Exclamation-triangle",
                "filter": [
                    "interfaces",
                    "exclamation",
                    "triangle"
                ]
            },
            {
                "id": "fas fa-external-link-alt",
                "name": "External-link-alt",
                "filter": [
                    "interfaces",
                    "external",
                    "link",
                    "alt"
                ]
            },
            {
                "id": "fas fa-external-link-square-alt",
                "name": "External-link-square-alt",
                "filter": [
                    "interfaces",
                    "external",
                    "link",
                    "square",
                    "alt"
                ]
            },
            {
                "id": "fas fa-eye",
                "name": "Eye",
                "filter": [
                    "interfaces",
                    "eye"
                ]
            },
            {
                "id": "fas fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "interfaces",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "far fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "interfaces",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "interfaces",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "interfaces",
                    "file"
                ]
            },
            {
                "id": "fas fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "interfaces",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "far fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "interfaces",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "fas fa-filter",
                "name": "Filter",
                "filter": [
                    "interfaces",
                    "filter"
                ]
            },
            {
                "id": "fas fa-flag",
                "name": "Flag",
                "filter": [
                    "interfaces",
                    "flag"
                ]
            },
            {
                "id": "far fa-flag",
                "name": "Flag",
                "filter": [
                    "interfaces",
                    "flag"
                ]
            },
            {
                "id": "fas fa-flag-checkered",
                "name": "Flag-checkered",
                "filter": [
                    "interfaces",
                    "flag",
                    "checkered"
                ]
            },
            {
                "id": "fas fa-folder",
                "name": "Folder",
                "filter": [
                    "interfaces",
                    "folder"
                ]
            },
            {
                "id": "far fa-folder",
                "name": "Folder",
                "filter": [
                    "interfaces",
                    "folder"
                ]
            },
            {
                "id": "fas fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "interfaces",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "far fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "interfaces",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "fas fa-frown",
                "name": "Frown",
                "filter": [
                    "interfaces",
                    "frown"
                ]
            },
            {
                "id": "far fa-frown",
                "name": "Frown",
                "filter": [
                    "interfaces",
                    "frown"
                ]
            },
            {
                "id": "fas fa-hashtag",
                "name": "Hashtag",
                "filter": [
                    "interfaces",
                    "hashtag"
                ]
            },
            {
                "id": "fas fa-heart",
                "name": "Heart",
                "filter": [
                    "interfaces",
                    "heart"
                ]
            },
            {
                "id": "far fa-heart",
                "name": "Heart",
                "filter": [
                    "interfaces",
                    "heart"
                ]
            },
            {
                "id": "fas fa-history",
                "name": "History",
                "filter": [
                    "interfaces",
                    "history"
                ]
            },
            {
                "id": "fas fa-home",
                "name": "Home",
                "filter": [
                    "interfaces",
                    "home"
                ]
            },
            {
                "id": "fas fa-i-cursor",
                "name": "I-cursor",
                "filter": [
                    "interfaces",
                    "i",
                    "cursor"
                ]
            },
            {
                "id": "fas fa-info",
                "name": "Info",
                "filter": [
                    "interfaces",
                    "info"
                ]
            },
            {
                "id": "fas fa-info-circle",
                "name": "Info-circle",
                "filter": [
                    "interfaces",
                    "info",
                    "circle"
                ]
            },
            {
                "id": "fas fa-language",
                "name": "Language",
                "filter": [
                    "interfaces",
                    "language"
                ]
            },
            {
                "id": "fas fa-magic",
                "name": "Magic",
                "filter": [
                    "interfaces",
                    "magic"
                ]
            },
            {
                "id": "fas fa-meh",
                "name": "Meh",
                "filter": [
                    "interfaces",
                    "meh"
                ]
            },
            {
                "id": "far fa-meh",
                "name": "Meh",
                "filter": [
                    "interfaces",
                    "meh"
                ]
            },
            {
                "id": "fas fa-microphone",
                "name": "Microphone",
                "filter": [
                    "interfaces",
                    "microphone"
                ]
            },
            {
                "id": "fas fa-microphone-slash",
                "name": "Microphone-slash",
                "filter": [
                    "interfaces",
                    "microphone",
                    "slash"
                ]
            },
            {
                "id": "fas fa-minus",
                "name": "Minus",
                "filter": [
                    "interfaces",
                    "minus"
                ]
            },
            {
                "id": "fas fa-minus-circle",
                "name": "Minus-circle",
                "filter": [
                    "interfaces",
                    "minus",
                    "circle"
                ]
            },
            {
                "id": "fas fa-minus-square",
                "name": "Minus-square",
                "filter": [
                    "interfaces",
                    "minus",
                    "square"
                ]
            },
            {
                "id": "far fa-minus-square",
                "name": "Minus-square",
                "filter": [
                    "interfaces",
                    "minus",
                    "square"
                ]
            },
            {
                "id": "fas fa-paste",
                "name": "Paste",
                "filter": [
                    "interfaces",
                    "paste"
                ]
            },
            {
                "id": "fas fa-pencil-alt",
                "name": "Pencil-alt",
                "filter": [
                    "interfaces",
                    "pencil",
                    "alt"
                ]
            },
            {
                "id": "fas fa-plus",
                "name": "Plus",
                "filter": [
                    "interfaces",
                    "plus"
                ]
            },
            {
                "id": "fas fa-plus-circle",
                "name": "Plus-circle",
                "filter": [
                    "interfaces",
                    "plus",
                    "circle"
                ]
            },
            {
                "id": "fas fa-plus-square",
                "name": "Plus-square",
                "filter": [
                    "interfaces",
                    "plus",
                    "square"
                ]
            },
            {
                "id": "far fa-plus-square",
                "name": "Plus-square",
                "filter": [
                    "interfaces",
                    "plus",
                    "square"
                ]
            },
            {
                "id": "fas fa-qrcode",
                "name": "Qrcode",
                "filter": [
                    "interfaces",
                    "qrcode"
                ]
            },
            {
                "id": "fas fa-question",
                "name": "Question",
                "filter": [
                    "interfaces",
                    "question"
                ]
            },
            {
                "id": "fas fa-question-circle",
                "name": "Question-circle",
                "filter": [
                    "interfaces",
                    "question",
                    "circle"
                ]
            },
            {
                "id": "far fa-question-circle",
                "name": "Question-circle",
                "filter": [
                    "interfaces",
                    "question",
                    "circle"
                ]
            },
            {
                "id": "fas fa-ambulance",
                "name": "Ambulance",
                "filter": [
                    "maps",
                    "ambulance"
                ]
            },
            {
                "id": "fas fa-anchor",
                "name": "Anchor",
                "filter": [
                    "maps",
                    "anchor"
                ]
            },
            {
                "id": "fas fa-balance-scale",
                "name": "Balance-scale",
                "filter": [
                    "maps",
                    "balance",
                    "scale"
                ]
            },
            {
                "id": "fas fa-bath",
                "name": "Bath",
                "filter": [
                    "maps",
                    "bath"
                ]
            },
            {
                "id": "fas fa-bed",
                "name": "Bed",
                "filter": [
                    "maps",
                    "bed"
                ]
            },
            {
                "id": "fas fa-beer",
                "name": "Beer",
                "filter": [
                    "maps",
                    "beer"
                ]
            },
            {
                "id": "fas fa-bell",
                "name": "Bell",
                "filter": [
                    "maps",
                    "bell"
                ]
            },
            {
                "id": "far fa-bell",
                "name": "Bell",
                "filter": [
                    "maps",
                    "bell"
                ]
            },
            {
                "id": "fas fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "maps",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "far fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "maps",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "fas fa-bicycle",
                "name": "Bicycle",
                "filter": [
                    "maps",
                    "bicycle"
                ]
            },
            {
                "id": "fas fa-binoculars",
                "name": "Binoculars",
                "filter": [
                    "maps",
                    "binoculars"
                ]
            },
            {
                "id": "fas fa-birthday-cake",
                "name": "Birthday-cake",
                "filter": [
                    "maps",
                    "birthday",
                    "cake"
                ]
            },
            {
                "id": "fas fa-blind",
                "name": "Blind",
                "filter": [
                    "maps",
                    "blind"
                ]
            },
            {
                "id": "fas fa-bomb",
                "name": "Bomb",
                "filter": [
                    "maps",
                    "bomb"
                ]
            },
            {
                "id": "fas fa-book",
                "name": "Book",
                "filter": [
                    "maps",
                    "book"
                ]
            },
            {
                "id": "fas fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "maps",
                    "bookmark"
                ]
            },
            {
                "id": "far fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "maps",
                    "bookmark"
                ]
            },
            {
                "id": "fas fa-briefcase",
                "name": "Briefcase",
                "filter": [
                    "maps",
                    "briefcase"
                ]
            },
            {
                "id": "fas fa-building",
                "name": "Building",
                "filter": [
                    "maps",
                    "building"
                ]
            },
            {
                "id": "far fa-building",
                "name": "Building",
                "filter": [
                    "maps",
                    "building"
                ]
            },
            {
                "id": "fas fa-car",
                "name": "Car",
                "filter": [
                    "maps",
                    "car"
                ]
            },
            {
                "id": "fas fa-coffee",
                "name": "Coffee",
                "filter": [
                    "maps",
                    "coffee"
                ]
            },
            {
                "id": "fas fa-crosshairs",
                "name": "Crosshairs",
                "filter": [
                    "maps",
                    "crosshairs"
                ]
            },
            {
                "id": "fas fa-dollar-sign",
                "name": "Dollar-sign",
                "filter": [
                    "maps",
                    "dollar",
                    "sign"
                ]
            },
            {
                "id": "fas fa-eye",
                "name": "Eye",
                "filter": [
                    "maps",
                    "eye"
                ]
            },
            {
                "id": "fas fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "maps",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "far fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "maps",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "fas fa-fighter-jet",
                "name": "Fighter-jet",
                "filter": [
                    "maps",
                    "fighter",
                    "jet"
                ]
            },
            {
                "id": "fas fa-fire",
                "name": "Fire",
                "filter": [
                    "maps",
                    "fire"
                ]
            },
            {
                "id": "fas fa-fire-extinguisher",
                "name": "Fire-extinguisher",
                "filter": [
                    "maps",
                    "fire",
                    "extinguisher"
                ]
            },
            {
                "id": "fas fa-flag",
                "name": "Flag",
                "filter": [
                    "maps",
                    "flag"
                ]
            },
            {
                "id": "far fa-flag",
                "name": "Flag",
                "filter": [
                    "maps",
                    "flag"
                ]
            },
            {
                "id": "fas fa-flag-checkered",
                "name": "Flag-checkered",
                "filter": [
                    "maps",
                    "flag",
                    "checkered"
                ]
            },
            {
                "id": "fas fa-flask",
                "name": "Flask",
                "filter": [
                    "maps",
                    "flask"
                ]
            },
            {
                "id": "fas fa-gamepad",
                "name": "Gamepad",
                "filter": [
                    "maps",
                    "gamepad"
                ]
            },
            {
                "id": "fas fa-gavel",
                "name": "Gavel",
                "filter": [
                    "maps",
                    "gavel"
                ]
            },
            {
                "id": "fas fa-gift",
                "name": "Gift",
                "filter": [
                    "maps",
                    "gift"
                ]
            },
            {
                "id": "fas fa-glass-martini",
                "name": "Glass-martini",
                "filter": [
                    "maps",
                    "glass",
                    "martini"
                ]
            },
            {
                "id": "fas fa-globe",
                "name": "Globe",
                "filter": [
                    "maps",
                    "globe"
                ]
            },
            {
                "id": "fas fa-graduation-cap",
                "name": "Graduation-cap",
                "filter": [
                    "maps",
                    "graduation",
                    "cap"
                ]
            },
            {
                "id": "fas fa-h-square",
                "name": "H-square",
                "filter": [
                    "maps",
                    "h",
                    "square"
                ]
            },
            {
                "id": "fas fa-heart",
                "name": "Heart",
                "filter": [
                    "maps",
                    "heart"
                ]
            },
            {
                "id": "far fa-heart",
                "name": "Heart",
                "filter": [
                    "maps",
                    "heart"
                ]
            },
            {
                "id": "fas fa-heartbeat",
                "name": "Heartbeat",
                "filter": [
                    "maps",
                    "heartbeat"
                ]
            },
            {
                "id": "fas fa-home",
                "name": "Home",
                "filter": [
                    "maps",
                    "home"
                ]
            },
            {
                "id": "fas fa-hospital",
                "name": "Hospital",
                "filter": [
                    "maps",
                    "hospital"
                ]
            },
            {
                "id": "far fa-hospital",
                "name": "Hospital",
                "filter": [
                    "maps",
                    "hospital"
                ]
            },
            {
                "id": "fas fa-image",
                "name": "Image",
                "filter": [
                    "maps",
                    "image"
                ]
            },
            {
                "id": "far fa-image",
                "name": "Image",
                "filter": [
                    "maps",
                    "image"
                ]
            },
            {
                "id": "fas fa-images",
                "name": "Images",
                "filter": [
                    "maps",
                    "images"
                ]
            },
            {
                "id": "far fa-images",
                "name": "Images",
                "filter": [
                    "maps",
                    "images"
                ]
            },
            {
                "id": "fas fa-industry",
                "name": "Industry",
                "filter": [
                    "maps",
                    "industry"
                ]
            },
            {
                "id": "fas fa-info",
                "name": "Info",
                "filter": [
                    "maps",
                    "info"
                ]
            },
            {
                "id": "fas fa-info-circle",
                "name": "Info-circle",
                "filter": [
                    "maps",
                    "info",
                    "circle"
                ]
            },
            {
                "id": "fas fa-key",
                "name": "Key",
                "filter": [
                    "maps",
                    "key"
                ]
            },
            {
                "id": "fas fa-leaf",
                "name": "Leaf",
                "filter": [
                    "maps",
                    "leaf"
                ]
            },
            {
                "id": "fas fa-lemon",
                "name": "Lemon",
                "filter": [
                    "maps",
                    "lemon"
                ]
            },
            {
                "id": "far fa-lemon",
                "name": "Lemon",
                "filter": [
                    "maps",
                    "lemon"
                ]
            },
            {
                "id": "fas fa-life-ring",
                "name": "Life-ring",
                "filter": [
                    "maps",
                    "life",
                    "ring"
                ]
            },
            {
                "id": "far fa-life-ring",
                "name": "Life-ring",
                "filter": [
                    "maps",
                    "life",
                    "ring"
                ]
            },
            {
                "id": "fas fa-lightbulb",
                "name": "Lightbulb",
                "filter": [
                    "maps",
                    "lightbulb"
                ]
            },
            {
                "id": "far fa-lightbulb",
                "name": "Lightbulb",
                "filter": [
                    "maps",
                    "lightbulb"
                ]
            },
            {
                "id": "fas fa-location-arrow",
                "name": "Location-arrow",
                "filter": [
                    "maps",
                    "location",
                    "arrow"
                ]
            },
            {
                "id": "fas fa-low-vision",
                "name": "Low-vision",
                "filter": [
                    "maps",
                    "low",
                    "vision"
                ]
            },
            {
                "id": "fas fa-magnet",
                "name": "Magnet",
                "filter": [
                    "maps",
                    "magnet"
                ]
            },
            {
                "id": "fas fa-male",
                "name": "Male",
                "filter": [
                    "maps",
                    "male"
                ]
            },
            {
                "id": "fas fa-map",
                "name": "Map",
                "filter": [
                    "maps",
                    "map"
                ]
            },
            {
                "id": "far fa-map",
                "name": "Map",
                "filter": [
                    "maps",
                    "map"
                ]
            },
            {
                "id": "fas fa-map-marker",
                "name": "Map-marker",
                "filter": [
                    "maps",
                    "map",
                    "marker"
                ]
            },
            {
                "id": "fas fa-map-marker-alt",
                "name": "Map-marker-alt",
                "filter": [
                    "maps",
                    "map",
                    "marker",
                    "alt"
                ]
            },
            {
                "id": "fas fa-map-pin",
                "name": "Map-pin",
                "filter": [
                    "maps",
                    "map",
                    "pin"
                ]
            },
            {
                "id": "fas fa-map-signs",
                "name": "Map-signs",
                "filter": [
                    "maps",
                    "map",
                    "signs"
                ]
            },
            {
                "id": "fas fa-medkit",
                "name": "Medkit",
                "filter": [
                    "maps",
                    "medkit"
                ]
            },
            {
                "id": "fas fa-money-bill-alt",
                "name": "Money-bill-alt",
                "filter": [
                    "maps",
                    "money",
                    "bill",
                    "alt"
                ]
            },
            {
                "id": "far fa-money-bill-alt",
                "name": "Money-bill-alt",
                "filter": [
                    "maps",
                    "money",
                    "bill",
                    "alt"
                ]
            },
            {
                "id": "fas fa-motorcycle",
                "name": "Motorcycle",
                "filter": [
                    "maps",
                    "motorcycle"
                ]
            },
            {
                "id": "fas fa-music",
                "name": "Music",
                "filter": [
                    "maps",
                    "music"
                ]
            },
            {
                "id": "fas fa-newspaper",
                "name": "Newspaper",
                "filter": [
                    "maps",
                    "newspaper"
                ]
            },
            {
                "id": "far fa-newspaper",
                "name": "Newspaper",
                "filter": [
                    "maps",
                    "newspaper"
                ]
            },
            {
                "id": "fas fa-paw",
                "name": "Paw",
                "filter": [
                    "maps",
                    "paw"
                ]
            },
            {
                "id": "fas fa-phone",
                "name": "Phone",
                "filter": [
                    "maps",
                    "phone"
                ]
            },
            {
                "id": "fas fa-phone-square",
                "name": "Phone-square",
                "filter": [
                    "maps",
                    "phone",
                    "square"
                ]
            },
            {
                "id": "fas fa-phone-volume",
                "name": "Phone-volume",
                "filter": [
                    "maps",
                    "phone",
                    "volume"
                ]
            },
            {
                "id": "fas fa-plane",
                "name": "Plane",
                "filter": [
                    "maps",
                    "plane"
                ]
            },
            {
                "id": "fas fa-plug",
                "name": "Plug",
                "filter": [
                    "maps",
                    "plug"
                ]
            },
            {
                "id": "fas fa-plus",
                "name": "Plus",
                "filter": [
                    "maps",
                    "plus"
                ]
            },
            {
                "id": "fas fa-plus-square",
                "name": "Plus-square",
                "filter": [
                    "maps",
                    "plus",
                    "square"
                ]
            },
            {
                "id": "far fa-plus-square",
                "name": "Plus-square",
                "filter": [
                    "maps",
                    "plus",
                    "square"
                ]
            },
            {
                "id": "fas fa-print",
                "name": "Print",
                "filter": [
                    "maps",
                    "print"
                ]
            },
            {
                "id": "fas fa-recycle",
                "name": "Recycle",
                "filter": [
                    "maps",
                    "recycle"
                ]
            },
            {
                "id": "fas fa-road",
                "name": "Road",
                "filter": [
                    "maps",
                    "road"
                ]
            },
            {
                "id": "fas fa-rocket",
                "name": "Rocket",
                "filter": [
                    "maps",
                    "rocket"
                ]
            },
            {
                "id": "fas fa-search",
                "name": "Search",
                "filter": [
                    "maps",
                    "search"
                ]
            },
            {
                "id": "fas fa-search-minus",
                "name": "Search-minus",
                "filter": [
                    "maps",
                    "search",
                    "minus"
                ]
            },
            {
                "id": "fas fa-search-plus",
                "name": "Search-plus",
                "filter": [
                    "maps",
                    "search",
                    "plus"
                ]
            },
            {
                "id": "fas fa-ship",
                "name": "Ship",
                "filter": [
                    "maps",
                    "ship"
                ]
            },
            {
                "id": "fas fa-shopping-bag",
                "name": "Shopping-bag",
                "filter": [
                    "maps",
                    "shopping",
                    "bag"
                ]
            },
            {
                "id": "fas fa-shopping-basket",
                "name": "Shopping-basket",
                "filter": [
                    "maps",
                    "shopping",
                    "basket"
                ]
            },
            {
                "id": "fas fa-shopping-cart",
                "name": "Shopping-cart",
                "filter": [
                    "maps",
                    "shopping",
                    "cart"
                ]
            },
            {
                "id": "fas fa-shower",
                "name": "Shower",
                "filter": [
                    "maps",
                    "shower"
                ]
            },
            {
                "id": "fas fa-street-view",
                "name": "Street-view",
                "filter": [
                    "maps",
                    "street",
                    "view"
                ]
            },
            {
                "id": "fas fa-subway",
                "name": "Subway",
                "filter": [
                    "maps",
                    "subway"
                ]
            },
            {
                "id": "fas fa-suitcase",
                "name": "Suitcase",
                "filter": [
                    "maps",
                    "suitcase"
                ]
            },
            {
                "id": "fas fa-tag",
                "name": "Tag",
                "filter": [
                    "maps",
                    "tag"
                ]
            },
            {
                "id": "fas fa-tags",
                "name": "Tags",
                "filter": [
                    "maps",
                    "tags"
                ]
            },
            {
                "id": "fas fa-taxi",
                "name": "Taxi",
                "filter": [
                    "maps",
                    "taxi"
                ]
            },
            {
                "id": "fas fa-thumbtack",
                "name": "Thumbtack",
                "filter": [
                    "maps",
                    "thumbtack"
                ]
            },
            {
                "id": "fas fa-ambulance",
                "name": "Ambulance",
                "filter": [
                    "objects",
                    "ambulance"
                ]
            },
            {
                "id": "fas fa-anchor",
                "name": "Anchor",
                "filter": [
                    "objects",
                    "anchor"
                ]
            },
            {
                "id": "fas fa-archive",
                "name": "Archive",
                "filter": [
                    "objects",
                    "archive"
                ]
            },
            {
                "id": "fas fa-balance-scale",
                "name": "Balance-scale",
                "filter": [
                    "objects",
                    "balance",
                    "scale"
                ]
            },
            {
                "id": "fas fa-bath",
                "name": "Bath",
                "filter": [
                    "objects",
                    "bath"
                ]
            },
            {
                "id": "fas fa-bed",
                "name": "Bed",
                "filter": [
                    "objects",
                    "bed"
                ]
            },
            {
                "id": "fas fa-beer",
                "name": "Beer",
                "filter": [
                    "objects",
                    "beer"
                ]
            },
            {
                "id": "fas fa-bell",
                "name": "Bell",
                "filter": [
                    "objects",
                    "bell"
                ]
            },
            {
                "id": "far fa-bell",
                "name": "Bell",
                "filter": [
                    "objects",
                    "bell"
                ]
            },
            {
                "id": "fas fa-bicycle",
                "name": "Bicycle",
                "filter": [
                    "objects",
                    "bicycle"
                ]
            },
            {
                "id": "fas fa-binoculars",
                "name": "Binoculars",
                "filter": [
                    "objects",
                    "binoculars"
                ]
            },
            {
                "id": "fas fa-birthday-cake",
                "name": "Birthday-cake",
                "filter": [
                    "objects",
                    "birthday",
                    "cake"
                ]
            },
            {
                "id": "fas fa-bomb",
                "name": "Bomb",
                "filter": [
                    "objects",
                    "bomb"
                ]
            },
            {
                "id": "fas fa-book",
                "name": "Book",
                "filter": [
                    "objects",
                    "book"
                ]
            },
            {
                "id": "fas fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "objects",
                    "bookmark"
                ]
            },
            {
                "id": "far fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "objects",
                    "bookmark"
                ]
            },
            {
                "id": "fas fa-briefcase",
                "name": "Briefcase",
                "filter": [
                    "objects",
                    "briefcase"
                ]
            },
            {
                "id": "fas fa-bug",
                "name": "Bug",
                "filter": [
                    "objects",
                    "bug"
                ]
            },
            {
                "id": "fas fa-building",
                "name": "Building",
                "filter": [
                    "objects",
                    "building"
                ]
            },
            {
                "id": "far fa-building",
                "name": "Building",
                "filter": [
                    "objects",
                    "building"
                ]
            },
            {
                "id": "fas fa-bullhorn",
                "name": "Bullhorn",
                "filter": [
                    "objects",
                    "bullhorn"
                ]
            },
            {
                "id": "fas fa-bullseye",
                "name": "Bullseye",
                "filter": [
                    "objects",
                    "bullseye"
                ]
            },
            {
                "id": "fas fa-bus",
                "name": "Bus",
                "filter": [
                    "objects",
                    "bus"
                ]
            },
            {
                "id": "fas fa-calculator",
                "name": "Calculator",
                "filter": [
                    "objects",
                    "calculator"
                ]
            },
            {
                "id": "fas fa-calendar",
                "name": "Calendar",
                "filter": [
                    "objects",
                    "calendar"
                ]
            },
            {
                "id": "far fa-calendar",
                "name": "Calendar",
                "filter": [
                    "objects",
                    "calendar"
                ]
            },
            {
                "id": "fas fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "objects",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "far fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "objects",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "fas fa-camera",
                "name": "Camera",
                "filter": [
                    "objects",
                    "camera"
                ]
            },
            {
                "id": "fas fa-camera-retro",
                "name": "Camera-retro",
                "filter": [
                    "objects",
                    "camera",
                    "retro"
                ]
            },
            {
                "id": "fas fa-car",
                "name": "Car",
                "filter": [
                    "objects",
                    "car"
                ]
            },
            {
                "id": "fas fa-clipboard",
                "name": "Clipboard",
                "filter": [
                    "objects",
                    "clipboard"
                ]
            },
            {
                "id": "far fa-clipboard",
                "name": "Clipboard",
                "filter": [
                    "objects",
                    "clipboard"
                ]
            },
            {
                "id": "fas fa-cloud",
                "name": "Cloud",
                "filter": [
                    "objects",
                    "cloud"
                ]
            },
            {
                "id": "fas fa-coffee",
                "name": "Coffee",
                "filter": [
                    "objects",
                    "coffee"
                ]
            },
            {
                "id": "fas fa-cog",
                "name": "Cog",
                "filter": [
                    "objects",
                    "cog"
                ]
            },
            {
                "id": "fas fa-cogs",
                "name": "Cogs",
                "filter": [
                    "objects",
                    "cogs"
                ]
            },
            {
                "id": "fas fa-compass",
                "name": "Compass",
                "filter": [
                    "objects",
                    "compass"
                ]
            },
            {
                "id": "far fa-compass",
                "name": "Compass",
                "filter": [
                    "objects",
                    "compass"
                ]
            },
            {
                "id": "fas fa-copy",
                "name": "Copy",
                "filter": [
                    "objects",
                    "copy"
                ]
            },
            {
                "id": "far fa-copy",
                "name": "Copy",
                "filter": [
                    "objects",
                    "copy"
                ]
            },
            {
                "id": "fas fa-cube",
                "name": "Cube",
                "filter": [
                    "objects",
                    "cube"
                ]
            },
            {
                "id": "fas fa-cubes",
                "name": "Cubes",
                "filter": [
                    "objects",
                    "cubes"
                ]
            },
            {
                "id": "fas fa-cut",
                "name": "Cut",
                "filter": [
                    "objects",
                    "cut"
                ]
            },
            {
                "id": "fas fa-envelope",
                "name": "Envelope",
                "filter": [
                    "objects",
                    "envelope"
                ]
            },
            {
                "id": "far fa-envelope",
                "name": "Envelope",
                "filter": [
                    "objects",
                    "envelope"
                ]
            },
            {
                "id": "fas fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "objects",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "far fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "objects",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "fas fa-eraser",
                "name": "Eraser",
                "filter": [
                    "objects",
                    "eraser"
                ]
            },
            {
                "id": "fas fa-eye",
                "name": "Eye",
                "filter": [
                    "objects",
                    "eye"
                ]
            },
            {
                "id": "fas fa-eye-dropper",
                "name": "Eye-dropper",
                "filter": [
                    "objects",
                    "eye",
                    "dropper"
                ]
            },
            {
                "id": "fas fa-fax",
                "name": "Fax",
                "filter": [
                    "objects",
                    "fax"
                ]
            },
            {
                "id": "fas fa-fighter-jet",
                "name": "Fighter-jet",
                "filter": [
                    "objects",
                    "fighter",
                    "jet"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "objects",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "objects",
                    "file"
                ]
            },
            {
                "id": "fas fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "objects",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "far fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "objects",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "fas fa-film",
                "name": "Film",
                "filter": [
                    "objects",
                    "film"
                ]
            },
            {
                "id": "fas fa-fire",
                "name": "Fire",
                "filter": [
                    "objects",
                    "fire"
                ]
            },
            {
                "id": "fas fa-fire-extinguisher",
                "name": "Fire-extinguisher",
                "filter": [
                    "objects",
                    "fire",
                    "extinguisher"
                ]
            },
            {
                "id": "fas fa-flag",
                "name": "Flag",
                "filter": [
                    "objects",
                    "flag"
                ]
            },
            {
                "id": "far fa-flag",
                "name": "Flag",
                "filter": [
                    "objects",
                    "flag"
                ]
            },
            {
                "id": "fas fa-flag-checkered",
                "name": "Flag-checkered",
                "filter": [
                    "objects",
                    "flag",
                    "checkered"
                ]
            },
            {
                "id": "fas fa-flask",
                "name": "Flask",
                "filter": [
                    "objects",
                    "flask"
                ]
            },
            {
                "id": "fas fa-futbol",
                "name": "Futbol",
                "filter": [
                    "objects",
                    "futbol"
                ]
            },
            {
                "id": "far fa-futbol",
                "name": "Futbol",
                "filter": [
                    "objects",
                    "futbol"
                ]
            },
            {
                "id": "fas fa-gamepad",
                "name": "Gamepad",
                "filter": [
                    "objects",
                    "gamepad"
                ]
            },
            {
                "id": "fas fa-gavel",
                "name": "Gavel",
                "filter": [
                    "objects",
                    "gavel"
                ]
            },
            {
                "id": "fas fa-gem",
                "name": "Gem",
                "filter": [
                    "objects",
                    "gem"
                ]
            },
            {
                "id": "far fa-gem",
                "name": "Gem",
                "filter": [
                    "objects",
                    "gem"
                ]
            },
            {
                "id": "fas fa-gift",
                "name": "Gift",
                "filter": [
                    "objects",
                    "gift"
                ]
            },
            {
                "id": "fas fa-glass-martini",
                "name": "Glass-martini",
                "filter": [
                    "objects",
                    "glass",
                    "martini"
                ]
            },
            {
                "id": "fas fa-globe",
                "name": "Globe",
                "filter": [
                    "objects",
                    "globe"
                ]
            },
            {
                "id": "fas fa-graduation-cap",
                "name": "Graduation-cap",
                "filter": [
                    "objects",
                    "graduation",
                    "cap"
                ]
            },
            {
                "id": "fas fa-hdd",
                "name": "Hdd",
                "filter": [
                    "objects",
                    "hdd"
                ]
            },
            {
                "id": "far fa-hdd",
                "name": "Hdd",
                "filter": [
                    "objects",
                    "hdd"
                ]
            },
            {
                "id": "fas fa-headphones",
                "name": "Headphones",
                "filter": [
                    "objects",
                    "headphones"
                ]
            },
            {
                "id": "fas fa-heart",
                "name": "Heart",
                "filter": [
                    "objects",
                    "heart"
                ]
            },
            {
                "id": "far fa-heart",
                "name": "Heart",
                "filter": [
                    "objects",
                    "heart"
                ]
            },
            {
                "id": "fas fa-home",
                "name": "Home",
                "filter": [
                    "objects",
                    "home"
                ]
            },
            {
                "id": "fas fa-hospital",
                "name": "Hospital",
                "filter": [
                    "objects",
                    "hospital"
                ]
            },
            {
                "id": "far fa-hospital",
                "name": "Hospital",
                "filter": [
                    "objects",
                    "hospital"
                ]
            },
            {
                "id": "fas fa-hourglass",
                "name": "Hourglass",
                "filter": [
                    "objects",
                    "hourglass"
                ]
            },
            {
                "id": "far fa-hourglass",
                "name": "Hourglass",
                "filter": [
                    "objects",
                    "hourglass"
                ]
            },
            {
                "id": "fas fa-image",
                "name": "Image",
                "filter": [
                    "objects",
                    "image"
                ]
            },
            {
                "id": "far fa-image",
                "name": "Image",
                "filter": [
                    "objects",
                    "image"
                ]
            },
            {
                "id": "fas fa-images",
                "name": "Images",
                "filter": [
                    "objects",
                    "images"
                ]
            },
            {
                "id": "far fa-images",
                "name": "Images",
                "filter": [
                    "objects",
                    "images"
                ]
            },
            {
                "id": "fas fa-industry",
                "name": "Industry",
                "filter": [
                    "objects",
                    "industry"
                ]
            },
            {
                "id": "fas fa-key",
                "name": "Key",
                "filter": [
                    "objects",
                    "key"
                ]
            },
            {
                "id": "fas fa-keyboard",
                "name": "Keyboard",
                "filter": [
                    "objects",
                    "keyboard"
                ]
            },
            {
                "id": "far fa-keyboard",
                "name": "Keyboard",
                "filter": [
                    "objects",
                    "keyboard"
                ]
            },
            {
                "id": "fas fa-laptop",
                "name": "Laptop",
                "filter": [
                    "objects",
                    "laptop"
                ]
            },
            {
                "id": "fas fa-leaf",
                "name": "Leaf",
                "filter": [
                    "objects",
                    "leaf"
                ]
            },
            {
                "id": "fas fa-lemon",
                "name": "Lemon",
                "filter": [
                    "objects",
                    "lemon"
                ]
            },
            {
                "id": "far fa-lemon",
                "name": "Lemon",
                "filter": [
                    "objects",
                    "lemon"
                ]
            },
            {
                "id": "fas fa-life-ring",
                "name": "Life-ring",
                "filter": [
                    "objects",
                    "life",
                    "ring"
                ]
            },
            {
                "id": "far fa-life-ring",
                "name": "Life-ring",
                "filter": [
                    "objects",
                    "life",
                    "ring"
                ]
            },
            {
                "id": "fas fa-lightbulb",
                "name": "Lightbulb",
                "filter": [
                    "objects",
                    "lightbulb"
                ]
            },
            {
                "id": "far fa-lightbulb",
                "name": "Lightbulb",
                "filter": [
                    "objects",
                    "lightbulb"
                ]
            },
            {
                "id": "fas fa-lock",
                "name": "Lock",
                "filter": [
                    "objects",
                    "lock"
                ]
            },
            {
                "id": "fas fa-lock-open",
                "name": "Lock-open",
                "filter": [
                    "objects",
                    "lock",
                    "open"
                ]
            },
            {
                "id": "fas fa-magic",
                "name": "Magic",
                "filter": [
                    "objects",
                    "magic"
                ]
            },
            {
                "id": "fas fa-magnet",
                "name": "Magnet",
                "filter": [
                    "objects",
                    "magnet"
                ]
            },
            {
                "id": "fas fa-map",
                "name": "Map",
                "filter": [
                    "objects",
                    "map"
                ]
            },
            {
                "id": "far fa-map",
                "name": "Map",
                "filter": [
                    "objects",
                    "map"
                ]
            },
            {
                "id": "fas fa-map-marker",
                "name": "Map-marker",
                "filter": [
                    "objects",
                    "map",
                    "marker"
                ]
            },
            {
                "id": "fas fa-map-marker-alt",
                "name": "Map-marker-alt",
                "filter": [
                    "objects",
                    "map",
                    "marker",
                    "alt"
                ]
            },
            {
                "id": "fab fa-amazon-pay",
                "name": "Amazon-pay",
                "filter": [
                    "payments & shopping",
                    "amazon",
                    "pay"
                ]
            },
            {
                "id": "fab fa-apple-pay",
                "name": "Apple-pay",
                "filter": [
                    "payments & shopping",
                    "apple",
                    "pay"
                ]
            },
            {
                "id": "fas fa-bell",
                "name": "Bell",
                "filter": [
                    "payments & shopping",
                    "bell"
                ]
            },
            {
                "id": "far fa-bell",
                "name": "Bell",
                "filter": [
                    "payments & shopping",
                    "bell"
                ]
            },
            {
                "id": "fas fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "payments & shopping",
                    "bookmark"
                ]
            },
            {
                "id": "far fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "payments & shopping",
                    "bookmark"
                ]
            },
            {
                "id": "fas fa-bullhorn",
                "name": "Bullhorn",
                "filter": [
                    "payments & shopping",
                    "bullhorn"
                ]
            },
            {
                "id": "fas fa-camera",
                "name": "Camera",
                "filter": [
                    "payments & shopping",
                    "camera"
                ]
            },
            {
                "id": "fas fa-camera-retro",
                "name": "Camera-retro",
                "filter": [
                    "payments & shopping",
                    "camera",
                    "retro"
                ]
            },
            {
                "id": "fas fa-cart-arrow-down",
                "name": "Cart-arrow-down",
                "filter": [
                    "payments & shopping",
                    "cart",
                    "arrow",
                    "down"
                ]
            },
            {
                "id": "fas fa-cart-plus",
                "name": "Cart-plus",
                "filter": [
                    "payments & shopping",
                    "cart",
                    "plus"
                ]
            },
            {
                "id": "fab fa-cc-amazon-pay",
                "name": "Cc-amazon-pay",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "amazon",
                    "pay"
                ]
            },
            {
                "id": "fab fa-cc-amex",
                "name": "Cc-amex",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "amex"
                ]
            },
            {
                "id": "fab fa-cc-apple-pay",
                "name": "Cc-apple-pay",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "apple",
                    "pay"
                ]
            },
            {
                "id": "fab fa-cc-diners-club",
                "name": "Cc-diners-club",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "diners",
                    "club"
                ]
            },
            {
                "id": "fab fa-cc-discover",
                "name": "Cc-discover",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "discover"
                ]
            },
            {
                "id": "fab fa-cc-jcb",
                "name": "Cc-jcb",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "jcb"
                ]
            },
            {
                "id": "fab fa-cc-mastercard",
                "name": "Cc-mastercard",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "mastercard"
                ]
            },
            {
                "id": "fab fa-cc-paypal",
                "name": "Cc-paypal",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "paypal"
                ]
            },
            {
                "id": "fab fa-cc-stripe",
                "name": "Cc-stripe",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "stripe"
                ]
            },
            {
                "id": "fab fa-cc-visa",
                "name": "Cc-visa",
                "filter": [
                    "payments & shopping",
                    "cc",
                    "visa"
                ]
            },
            {
                "id": "fas fa-certificate",
                "name": "Certificate",
                "filter": [
                    "payments & shopping",
                    "certificate"
                ]
            },
            {
                "id": "fas fa-credit-card",
                "name": "Credit-card",
                "filter": [
                    "payments & shopping",
                    "credit",
                    "card"
                ]
            },
            {
                "id": "far fa-credit-card",
                "name": "Credit-card",
                "filter": [
                    "payments & shopping",
                    "credit",
                    "card"
                ]
            },
            {
                "id": "fab fa-ethereum",
                "name": "Ethereum",
                "filter": [
                    "payments & shopping",
                    "ethereum"
                ]
            },
            {
                "id": "fas fa-gem",
                "name": "Gem",
                "filter": [
                    "payments & shopping",
                    "gem"
                ]
            },
            {
                "id": "far fa-gem",
                "name": "Gem",
                "filter": [
                    "payments & shopping",
                    "gem"
                ]
            },
            {
                "id": "fas fa-gift",
                "name": "Gift",
                "filter": [
                    "payments & shopping",
                    "gift"
                ]
            },
            {
                "id": "fab fa-google-wallet",
                "name": "Google-wallet",
                "filter": [
                    "payments & shopping",
                    "google",
                    "wallet"
                ]
            },
            {
                "id": "fas fa-handshake",
                "name": "Handshake",
                "filter": [
                    "payments & shopping",
                    "handshake"
                ]
            },
            {
                "id": "far fa-handshake",
                "name": "Handshake",
                "filter": [
                    "payments & shopping",
                    "handshake"
                ]
            },
            {
                "id": "fas fa-heart",
                "name": "Heart",
                "filter": [
                    "payments & shopping",
                    "heart"
                ]
            },
            {
                "id": "far fa-heart",
                "name": "Heart",
                "filter": [
                    "payments & shopping",
                    "heart"
                ]
            },
            {
                "id": "fas fa-key",
                "name": "Key",
                "filter": [
                    "payments & shopping",
                    "key"
                ]
            },
            {
                "id": "fab fa-paypal",
                "name": "Paypal",
                "filter": [
                    "payments & shopping",
                    "paypal"
                ]
            },
            {
                "id": "fas fa-shopping-bag",
                "name": "Shopping-bag",
                "filter": [
                    "payments & shopping",
                    "shopping",
                    "bag"
                ]
            },
            {
                "id": "fas fa-shopping-basket",
                "name": "Shopping-basket",
                "filter": [
                    "payments & shopping",
                    "shopping",
                    "basket"
                ]
            },
            {
                "id": "fas fa-shopping-cart",
                "name": "Shopping-cart",
                "filter": [
                    "payments & shopping",
                    "shopping",
                    "cart"
                ]
            },
            {
                "id": "fas fa-star",
                "name": "Star",
                "filter": [
                    "payments & shopping",
                    "star"
                ]
            },
            {
                "id": "far fa-star",
                "name": "Star",
                "filter": [
                    "payments & shopping",
                    "star"
                ]
            },
            {
                "id": "fab fa-stripe",
                "name": "Stripe",
                "filter": [
                    "payments & shopping",
                    "stripe"
                ]
            },
            {
                "id": "fab fa-stripe-s",
                "name": "Stripe-s",
                "filter": [
                    "payments & shopping",
                    "stripe",
                    "s"
                ]
            },
            {
                "id": "fas fa-tag",
                "name": "Tag",
                "filter": [
                    "payments & shopping",
                    "tag"
                ]
            },
            {
                "id": "fas fa-tags",
                "name": "Tags",
                "filter": [
                    "payments & shopping",
                    "tags"
                ]
            },
            {
                "id": "fas fa-thumbs-down",
                "name": "Thumbs-down",
                "filter": [
                    "payments & shopping",
                    "thumbs",
                    "down"
                ]
            },
            {
                "id": "far fa-thumbs-down",
                "name": "Thumbs-down",
                "filter": [
                    "payments & shopping",
                    "thumbs",
                    "down"
                ]
            },
            {
                "id": "fas fa-thumbs-up",
                "name": "Thumbs-up",
                "filter": [
                    "payments & shopping",
                    "thumbs",
                    "up"
                ]
            },
            {
                "id": "far fa-thumbs-up",
                "name": "Thumbs-up",
                "filter": [
                    "payments & shopping",
                    "thumbs",
                    "up"
                ]
            },
            {
                "id": "fas fa-trophy",
                "name": "Trophy",
                "filter": [
                    "payments & shopping",
                    "trophy"
                ]
            },
            {
                "id": "fas fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "shapes",
                    "bookmark"
                ]
            },
            {
                "id": "far fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "shapes",
                    "bookmark"
                ]
            },
            {
                "id": "fas fa-calendar",
                "name": "Calendar",
                "filter": [
                    "shapes",
                    "calendar"
                ]
            },
            {
                "id": "far fa-calendar",
                "name": "Calendar",
                "filter": [
                    "shapes",
                    "calendar"
                ]
            },
            {
                "id": "fas fa-certificate",
                "name": "Certificate",
                "filter": [
                    "shapes",
                    "certificate"
                ]
            },
            {
                "id": "fas fa-circle",
                "name": "Circle",
                "filter": [
                    "shapes",
                    "circle"
                ]
            },
            {
                "id": "far fa-circle",
                "name": "Circle",
                "filter": [
                    "shapes",
                    "circle"
                ]
            },
            {
                "id": "fas fa-cloud",
                "name": "Cloud",
                "filter": [
                    "shapes",
                    "cloud"
                ]
            },
            {
                "id": "fas fa-comment",
                "name": "Comment",
                "filter": [
                    "shapes",
                    "comment"
                ]
            },
            {
                "id": "far fa-comment",
                "name": "Comment",
                "filter": [
                    "shapes",
                    "comment"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "shapes",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "shapes",
                    "file"
                ]
            },
            {
                "id": "fas fa-folder",
                "name": "Folder",
                "filter": [
                    "shapes",
                    "folder"
                ]
            },
            {
                "id": "far fa-folder",
                "name": "Folder",
                "filter": [
                    "shapes",
                    "folder"
                ]
            },
            {
                "id": "fas fa-heart",
                "name": "Heart",
                "filter": [
                    "shapes",
                    "heart"
                ]
            },
            {
                "id": "far fa-heart",
                "name": "Heart",
                "filter": [
                    "shapes",
                    "heart"
                ]
            },
            {
                "id": "fas fa-map-marker",
                "name": "Map-marker",
                "filter": [
                    "shapes",
                    "map",
                    "marker"
                ]
            },
            {
                "id": "fas fa-play",
                "name": "Play",
                "filter": [
                    "shapes",
                    "play"
                ]
            },
            {
                "id": "fas fa-square",
                "name": "Square",
                "filter": [
                    "shapes",
                    "square"
                ]
            },
            {
                "id": "far fa-square",
                "name": "Square",
                "filter": [
                    "shapes",
                    "square"
                ]
            },
            {
                "id": "fas fa-star",
                "name": "Star",
                "filter": [
                    "shapes",
                    "star"
                ]
            },
            {
                "id": "far fa-star",
                "name": "Star",
                "filter": [
                    "shapes",
                    "star"
                ]
            },
            {
                "id": "fas fa-asterisk",
                "name": "Asterisk",
                "filter": [
                    "spinners",
                    "asterisk"
                ]
            },
            {
                "id": "fas fa-certificate",
                "name": "Certificate",
                "filter": [
                    "spinners",
                    "certificate"
                ]
            },
            {
                "id": "fas fa-circle-notch",
                "name": "Circle-notch",
                "filter": [
                    "spinners",
                    "circle",
                    "notch"
                ]
            },
            {
                "id": "fas fa-cog",
                "name": "Cog",
                "filter": [
                    "spinners",
                    "cog"
                ]
            },
            {
                "id": "fas fa-compass",
                "name": "Compass",
                "filter": [
                    "spinners",
                    "compass"
                ]
            },
            {
                "id": "far fa-compass",
                "name": "Compass",
                "filter": [
                    "spinners",
                    "compass"
                ]
            },
            {
                "id": "fas fa-crosshairs",
                "name": "Crosshairs",
                "filter": [
                    "spinners",
                    "crosshairs"
                ]
            },
            {
                "id": "fas fa-life-ring",
                "name": "Life-ring",
                "filter": [
                    "spinners",
                    "life",
                    "ring"
                ]
            },
            {
                "id": "far fa-life-ring",
                "name": "Life-ring",
                "filter": [
                    "spinners",
                    "life",
                    "ring"
                ]
            },
            {
                "id": "fas fa-snowflake",
                "name": "Snowflake",
                "filter": [
                    "spinners",
                    "snowflake"
                ]
            },
            {
                "id": "far fa-snowflake",
                "name": "Snowflake",
                "filter": [
                    "spinners",
                    "snowflake"
                ]
            },
            {
                "id": "fas fa-spinner",
                "name": "Spinner",
                "filter": [
                    "spinners",
                    "spinner"
                ]
            },
            {
                "id": "fas fa-sun",
                "name": "Sun",
                "filter": [
                    "spinners",
                    "sun"
                ]
            },
            {
                "id": "far fa-sun",
                "name": "Sun",
                "filter": [
                    "spinners",
                    "sun"
                ]
            },
            {
                "id": "fas fa-sync",
                "name": "Sync",
                "filter": [
                    "spinners",
                    "sync"
                ]
            },
            {
                "id": "fas fa-baseball-ball",
                "name": "Baseball-ball",
                "filter": [
                    "sports",
                    "baseball",
                    "ball"
                ]
            },
            {
                "id": "fas fa-basketball-ball",
                "name": "Basketball-ball",
                "filter": [
                    "sports",
                    "basketball",
                    "ball"
                ]
            },
            {
                "id": "fas fa-bowling-ball",
                "name": "Bowling-ball",
                "filter": [
                    "sports",
                    "bowling",
                    "ball"
                ]
            },
            {
                "id": "fas fa-football-ball",
                "name": "Football-ball",
                "filter": [
                    "sports",
                    "football",
                    "ball"
                ]
            },
            {
                "id": "fas fa-futbol",
                "name": "Futbol",
                "filter": [
                    "sports",
                    "futbol"
                ]
            },
            {
                "id": "far fa-futbol",
                "name": "Futbol",
                "filter": [
                    "sports",
                    "futbol"
                ]
            },
            {
                "id": "fas fa-golf-ball",
                "name": "Golf-ball",
                "filter": [
                    "sports",
                    "golf",
                    "ball"
                ]
            },
            {
                "id": "fas fa-hockey-puck",
                "name": "Hockey-puck",
                "filter": [
                    "sports",
                    "hockey",
                    "puck"
                ]
            },
            {
                "id": "fas fa-quidditch",
                "name": "Quidditch",
                "filter": [
                    "sports",
                    "quidditch"
                ]
            },
            {
                "id": "fas fa-table-tennis",
                "name": "Table-tennis",
                "filter": [
                    "sports",
                    "table",
                    "tennis"
                ]
            },
            {
                "id": "fas fa-volleyball-ball",
                "name": "Volleyball-ball",
                "filter": [
                    "sports",
                    "volleyball",
                    "ball"
                ]
            },
            {
                "id": "fas fa-ban",
                "name": "Ban",
                "filter": [
                    "status",
                    "ban"
                ]
            },
            {
                "id": "fas fa-battery-empty",
                "name": "Battery-empty",
                "filter": [
                    "status",
                    "battery",
                    "empty"
                ]
            },
            {
                "id": "fas fa-battery-full",
                "name": "Battery-full",
                "filter": [
                    "status",
                    "battery",
                    "full"
                ]
            },
            {
                "id": "fas fa-battery-half",
                "name": "Battery-half",
                "filter": [
                    "status",
                    "battery",
                    "half"
                ]
            },
            {
                "id": "fas fa-battery-quarter",
                "name": "Battery-quarter",
                "filter": [
                    "status",
                    "battery",
                    "quarter"
                ]
            },
            {
                "id": "fas fa-battery-three-quarters",
                "name": "Battery-three-quarters",
                "filter": [
                    "status",
                    "battery",
                    "three",
                    "quarters"
                ]
            },
            {
                "id": "fas fa-bell",
                "name": "Bell",
                "filter": [
                    "status",
                    "bell"
                ]
            },
            {
                "id": "far fa-bell",
                "name": "Bell",
                "filter": [
                    "status",
                    "bell"
                ]
            },
            {
                "id": "fas fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "status",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "far fa-bell-slash",
                "name": "Bell-slash",
                "filter": [
                    "status",
                    "bell",
                    "slash"
                ]
            },
            {
                "id": "fas fa-calendar",
                "name": "Calendar",
                "filter": [
                    "status",
                    "calendar"
                ]
            },
            {
                "id": "far fa-calendar",
                "name": "Calendar",
                "filter": [
                    "status",
                    "calendar"
                ]
            },
            {
                "id": "fas fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "status",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "far fa-calendar-alt",
                "name": "Calendar-alt",
                "filter": [
                    "status",
                    "calendar",
                    "alt"
                ]
            },
            {
                "id": "fas fa-calendar-check",
                "name": "Calendar-check",
                "filter": [
                    "status",
                    "calendar",
                    "check"
                ]
            },
            {
                "id": "far fa-calendar-check",
                "name": "Calendar-check",
                "filter": [
                    "status",
                    "calendar",
                    "check"
                ]
            },
            {
                "id": "fas fa-calendar-minus",
                "name": "Calendar-minus",
                "filter": [
                    "status",
                    "calendar",
                    "minus"
                ]
            },
            {
                "id": "far fa-calendar-minus",
                "name": "Calendar-minus",
                "filter": [
                    "status",
                    "calendar",
                    "minus"
                ]
            },
            {
                "id": "fas fa-calendar-plus",
                "name": "Calendar-plus",
                "filter": [
                    "status",
                    "calendar",
                    "plus"
                ]
            },
            {
                "id": "far fa-calendar-plus",
                "name": "Calendar-plus",
                "filter": [
                    "status",
                    "calendar",
                    "plus"
                ]
            },
            {
                "id": "fas fa-calendar-times",
                "name": "Calendar-times",
                "filter": [
                    "status",
                    "calendar",
                    "times"
                ]
            },
            {
                "id": "far fa-calendar-times",
                "name": "Calendar-times",
                "filter": [
                    "status",
                    "calendar",
                    "times"
                ]
            },
            {
                "id": "fas fa-cart-arrow-down",
                "name": "Cart-arrow-down",
                "filter": [
                    "status",
                    "cart",
                    "arrow",
                    "down"
                ]
            },
            {
                "id": "fas fa-cart-plus",
                "name": "Cart-plus",
                "filter": [
                    "status",
                    "cart",
                    "plus"
                ]
            },
            {
                "id": "fas fa-exclamation",
                "name": "Exclamation",
                "filter": [
                    "status",
                    "exclamation"
                ]
            },
            {
                "id": "fas fa-exclamation-circle",
                "name": "Exclamation-circle",
                "filter": [
                    "status",
                    "exclamation",
                    "circle"
                ]
            },
            {
                "id": "fas fa-exclamation-triangle",
                "name": "Exclamation-triangle",
                "filter": [
                    "status",
                    "exclamation",
                    "triangle"
                ]
            },
            {
                "id": "fas fa-eye",
                "name": "Eye",
                "filter": [
                    "status",
                    "eye"
                ]
            },
            {
                "id": "fas fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "status",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "far fa-eye-slash",
                "name": "Eye-slash",
                "filter": [
                    "status",
                    "eye",
                    "slash"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "status",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "status",
                    "file"
                ]
            },
            {
                "id": "fas fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "status",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "far fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "status",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "fas fa-folder",
                "name": "Folder",
                "filter": [
                    "status",
                    "folder"
                ]
            },
            {
                "id": "far fa-folder",
                "name": "Folder",
                "filter": [
                    "status",
                    "folder"
                ]
            },
            {
                "id": "fas fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "status",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "far fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "status",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "fas fa-info",
                "name": "Info",
                "filter": [
                    "status",
                    "info"
                ]
            },
            {
                "id": "fas fa-info-circle",
                "name": "Info-circle",
                "filter": [
                    "status",
                    "info",
                    "circle"
                ]
            },
            {
                "id": "fas fa-lock",
                "name": "Lock",
                "filter": [
                    "status",
                    "lock"
                ]
            },
            {
                "id": "fas fa-lock-open",
                "name": "Lock-open",
                "filter": [
                    "status",
                    "lock",
                    "open"
                ]
            },
            {
                "id": "fas fa-minus",
                "name": "Minus",
                "filter": [
                    "status",
                    "minus"
                ]
            },
            {
                "id": "fas fa-minus-circle",
                "name": "Minus-circle",
                "filter": [
                    "status",
                    "minus",
                    "circle"
                ]
            },
            {
                "id": "fas fa-minus-square",
                "name": "Minus-square",
                "filter": [
                    "status",
                    "minus",
                    "square"
                ]
            },
            {
                "id": "far fa-minus-square",
                "name": "Minus-square",
                "filter": [
                    "status",
                    "minus",
                    "square"
                ]
            },
            {
                "id": "fas fa-plus",
                "name": "Plus",
                "filter": [
                    "status",
                    "plus"
                ]
            },
            {
                "id": "fas fa-plus-circle",
                "name": "Plus-circle",
                "filter": [
                    "status",
                    "plus",
                    "circle"
                ]
            },
            {
                "id": "fas fa-plus-square",
                "name": "Plus-square",
                "filter": [
                    "status",
                    "plus",
                    "square"
                ]
            },
            {
                "id": "far fa-plus-square",
                "name": "Plus-square",
                "filter": [
                    "status",
                    "plus",
                    "square"
                ]
            },
            {
                "id": "fas fa-question",
                "name": "Question",
                "filter": [
                    "status",
                    "question"
                ]
            },
            {
                "id": "fas fa-question-circle",
                "name": "Question-circle",
                "filter": [
                    "status",
                    "question",
                    "circle"
                ]
            },
            {
                "id": "far fa-question-circle",
                "name": "Question-circle",
                "filter": [
                    "status",
                    "question",
                    "circle"
                ]
            },
            {
                "id": "fas fa-shield-alt",
                "name": "Shield-alt",
                "filter": [
                    "status",
                    "shield",
                    "alt"
                ]
            },
            {
                "id": "fas fa-shopping-cart",
                "name": "Shopping-cart",
                "filter": [
                    "status",
                    "shopping",
                    "cart"
                ]
            },
            {
                "id": "fas fa-sign-in-alt",
                "name": "Sign-in-alt",
                "filter": [
                    "status",
                    "sign",
                    "in",
                    "alt"
                ]
            },
            {
                "id": "fas fa-sign-out-alt",
                "name": "Sign-out-alt",
                "filter": [
                    "status",
                    "sign",
                    "out",
                    "alt"
                ]
            },
            {
                "id": "fas fa-thermometer-empty",
                "name": "Thermometer-empty",
                "filter": [
                    "status",
                    "thermometer",
                    "empty"
                ]
            },
            {
                "id": "fas fa-thermometer-full",
                "name": "Thermometer-full",
                "filter": [
                    "status",
                    "thermometer",
                    "full"
                ]
            },
            {
                "id": "fas fa-thermometer-half",
                "name": "Thermometer-half",
                "filter": [
                    "status",
                    "thermometer",
                    "half"
                ]
            },
            {
                "id": "fas fa-thermometer-quarter",
                "name": "Thermometer-quarter",
                "filter": [
                    "status",
                    "thermometer",
                    "quarter"
                ]
            },
            {
                "id": "fas fa-thermometer-three-quarters",
                "name": "Thermometer-three-quarters",
                "filter": [
                    "status",
                    "thermometer",
                    "three",
                    "quarters"
                ]
            },
            {
                "id": "fas fa-thumbs-down",
                "name": "Thumbs-down",
                "filter": [
                    "status",
                    "thumbs",
                    "down"
                ]
            },
            {
                "id": "far fa-thumbs-down",
                "name": "Thumbs-down",
                "filter": [
                    "status",
                    "thumbs",
                    "down"
                ]
            },
            {
                "id": "fas fa-thumbs-up",
                "name": "Thumbs-up",
                "filter": [
                    "status",
                    "thumbs",
                    "up"
                ]
            },
            {
                "id": "far fa-thumbs-up",
                "name": "Thumbs-up",
                "filter": [
                    "status",
                    "thumbs",
                    "up"
                ]
            },
            {
                "id": "fas fa-toggle-off",
                "name": "Toggle-off",
                "filter": [
                    "status",
                    "toggle",
                    "off"
                ]
            },
            {
                "id": "fas fa-toggle-on",
                "name": "Toggle-on",
                "filter": [
                    "status",
                    "toggle",
                    "on"
                ]
            },
            {
                "id": "fas fa-unlock",
                "name": "Unlock",
                "filter": [
                    "status",
                    "unlock"
                ]
            },
            {
                "id": "fas fa-unlock-alt",
                "name": "Unlock-alt",
                "filter": [
                    "status",
                    "unlock",
                    "alt"
                ]
            },
            {
                "id": "fab fa-accessible-icon",
                "name": "Accessible-icon",
                "filter": [
                    "users & people",
                    "accessible",
                    "icon"
                ]
            },
            {
                "id": "fas fa-address-book",
                "name": "Address-book",
                "filter": [
                    "users & people",
                    "address",
                    "book"
                ]
            },
            {
                "id": "far fa-address-book",
                "name": "Address-book",
                "filter": [
                    "users & people",
                    "address",
                    "book"
                ]
            },
            {
                "id": "fas fa-address-card",
                "name": "Address-card",
                "filter": [
                    "users & people",
                    "address",
                    "card"
                ]
            },
            {
                "id": "far fa-address-card",
                "name": "Address-card",
                "filter": [
                    "users & people",
                    "address",
                    "card"
                ]
            },
            {
                "id": "fas fa-bed",
                "name": "Bed",
                "filter": [
                    "users & people",
                    "bed"
                ]
            },
            {
                "id": "fas fa-blind",
                "name": "Blind",
                "filter": [
                    "users & people",
                    "blind"
                ]
            },
            {
                "id": "fas fa-child",
                "name": "Child",
                "filter": [
                    "users & people",
                    "child"
                ]
            },
            {
                "id": "fas fa-female",
                "name": "Female",
                "filter": [
                    "users & people",
                    "female"
                ]
            },
            {
                "id": "fas fa-frown",
                "name": "Frown",
                "filter": [
                    "users & people",
                    "frown"
                ]
            },
            {
                "id": "far fa-frown",
                "name": "Frown",
                "filter": [
                    "users & people",
                    "frown"
                ]
            },
            {
                "id": "fas fa-id-badge",
                "name": "Id-badge",
                "filter": [
                    "users & people",
                    "id",
                    "badge"
                ]
            },
            {
                "id": "far fa-id-badge",
                "name": "Id-badge",
                "filter": [
                    "users & people",
                    "id",
                    "badge"
                ]
            },
            {
                "id": "fas fa-id-card",
                "name": "Id-card",
                "filter": [
                    "users & people",
                    "id",
                    "card"
                ]
            },
            {
                "id": "far fa-id-card",
                "name": "Id-card",
                "filter": [
                    "users & people",
                    "id",
                    "card"
                ]
            },
            {
                "id": "fas fa-male",
                "name": "Male",
                "filter": [
                    "users & people",
                    "male"
                ]
            },
            {
                "id": "fas fa-meh",
                "name": "Meh",
                "filter": [
                    "users & people",
                    "meh"
                ]
            },
            {
                "id": "far fa-meh",
                "name": "Meh",
                "filter": [
                    "users & people",
                    "meh"
                ]
            },
            {
                "id": "fas fa-power-off",
                "name": "Power-off",
                "filter": [
                    "users & people",
                    "power",
                    "off"
                ]
            },
            {
                "id": "fas fa-smile",
                "name": "Smile",
                "filter": [
                    "users & people",
                    "smile"
                ]
            },
            {
                "id": "far fa-smile",
                "name": "Smile",
                "filter": [
                    "users & people",
                    "smile"
                ]
            },
            {
                "id": "fas fa-street-view",
                "name": "Street-view",
                "filter": [
                    "users & people",
                    "street",
                    "view"
                ]
            },
            {
                "id": "fas fa-user",
                "name": "User",
                "filter": [
                    "users & people",
                    "user"
                ]
            },
            {
                "id": "far fa-user",
                "name": "User",
                "filter": [
                    "users & people",
                    "user"
                ]
            },
            {
                "id": "fas fa-user-circle",
                "name": "User-circle",
                "filter": [
                    "users & people",
                    "user",
                    "circle"
                ]
            },
            {
                "id": "far fa-user-circle",
                "name": "User-circle",
                "filter": [
                    "users & people",
                    "user",
                    "circle"
                ]
            },
            {
                "id": "fas fa-user-md",
                "name": "User-md",
                "filter": [
                    "users & people",
                    "user",
                    "md"
                ]
            },
            {
                "id": "fas fa-user-plus",
                "name": "User-plus",
                "filter": [
                    "users & people",
                    "user",
                    "plus"
                ]
            },
            {
                "id": "fas fa-user-secret",
                "name": "User-secret",
                "filter": [
                    "users & people",
                    "user",
                    "secret"
                ]
            },
            {
                "id": "fas fa-user-times",
                "name": "User-times",
                "filter": [
                    "users & people",
                    "user",
                    "times"
                ]
            },
            {
                "id": "fas fa-users",
                "name": "Users",
                "filter": [
                    "users & people",
                    "users"
                ]
            },
            {
                "id": "fas fa-wheelchair",
                "name": "Wheelchair",
                "filter": [
                    "users & people",
                    "wheelchair"
                ]
            },
            {
                "id": "fab fa-accessible-icon",
                "name": "Accessible-icon",
                "filter": [
                    "vehicles",
                    "accessible",
                    "icon"
                ]
            },
            {
                "id": "fas fa-ambulance",
                "name": "Ambulance",
                "filter": [
                    "vehicles",
                    "ambulance"
                ]
            },
            {
                "id": "fas fa-bicycle",
                "name": "Bicycle",
                "filter": [
                    "vehicles",
                    "bicycle"
                ]
            },
            {
                "id": "fas fa-bus",
                "name": "Bus",
                "filter": [
                    "vehicles",
                    "bus"
                ]
            },
            {
                "id": "fas fa-car",
                "name": "Car",
                "filter": [
                    "vehicles",
                    "car"
                ]
            },
            {
                "id": "fas fa-fighter-jet",
                "name": "Fighter-jet",
                "filter": [
                    "vehicles",
                    "fighter",
                    "jet"
                ]
            },
            {
                "id": "fas fa-motorcycle",
                "name": "Motorcycle",
                "filter": [
                    "vehicles",
                    "motorcycle"
                ]
            },
            {
                "id": "fas fa-paper-plane",
                "name": "Paper-plane",
                "filter": [
                    "vehicles",
                    "paper",
                    "plane"
                ]
            },
            {
                "id": "far fa-paper-plane",
                "name": "Paper-plane",
                "filter": [
                    "vehicles",
                    "paper",
                    "plane"
                ]
            },
            {
                "id": "fas fa-plane",
                "name": "Plane",
                "filter": [
                    "vehicles",
                    "plane"
                ]
            },
            {
                "id": "fas fa-rocket",
                "name": "Rocket",
                "filter": [
                    "vehicles",
                    "rocket"
                ]
            },
            {
                "id": "fas fa-ship",
                "name": "Ship",
                "filter": [
                    "vehicles",
                    "ship"
                ]
            },
            {
                "id": "fas fa-shopping-cart",
                "name": "Shopping-cart",
                "filter": [
                    "vehicles",
                    "shopping",
                    "cart"
                ]
            },
            {
                "id": "fas fa-space-shuttle",
                "name": "Space-shuttle",
                "filter": [
                    "vehicles",
                    "space",
                    "shuttle"
                ]
            },
            {
                "id": "fas fa-subway",
                "name": "Subway",
                "filter": [
                    "vehicles",
                    "subway"
                ]
            },
            {
                "id": "fas fa-taxi",
                "name": "Taxi",
                "filter": [
                    "vehicles",
                    "taxi"
                ]
            },
            {
                "id": "fas fa-train",
                "name": "Train",
                "filter": [
                    "vehicles",
                    "train"
                ]
            },
            {
                "id": "fas fa-truck",
                "name": "Truck",
                "filter": [
                    "vehicles",
                    "truck"
                ]
            },
            {
                "id": "fas fa-wheelchair",
                "name": "Wheelchair",
                "filter": [
                    "vehicles",
                    "wheelchair"
                ]
            },
            {
                "id": "fas fa-archive",
                "name": "Archive",
                "filter": [
                    "writing",
                    "archive"
                ]
            },
            {
                "id": "fas fa-book",
                "name": "Book",
                "filter": [
                    "writing",
                    "book"
                ]
            },
            {
                "id": "fas fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "writing",
                    "bookmark"
                ]
            },
            {
                "id": "far fa-bookmark",
                "name": "Bookmark",
                "filter": [
                    "writing",
                    "bookmark"
                ]
            },
            {
                "id": "fas fa-edit",
                "name": "Edit",
                "filter": [
                    "writing",
                    "edit"
                ]
            },
            {
                "id": "far fa-edit",
                "name": "Edit",
                "filter": [
                    "writing",
                    "edit"
                ]
            },
            {
                "id": "fas fa-envelope",
                "name": "Envelope",
                "filter": [
                    "writing",
                    "envelope"
                ]
            },
            {
                "id": "far fa-envelope",
                "name": "Envelope",
                "filter": [
                    "writing",
                    "envelope"
                ]
            },
            {
                "id": "fas fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "writing",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "far fa-envelope-open",
                "name": "Envelope-open",
                "filter": [
                    "writing",
                    "envelope",
                    "open"
                ]
            },
            {
                "id": "fas fa-eraser",
                "name": "Eraser",
                "filter": [
                    "writing",
                    "eraser"
                ]
            },
            {
                "id": "fas fa-file",
                "name": "File",
                "filter": [
                    "writing",
                    "file"
                ]
            },
            {
                "id": "far fa-file",
                "name": "File",
                "filter": [
                    "writing",
                    "file"
                ]
            },
            {
                "id": "fas fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "writing",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "far fa-file-alt",
                "name": "File-alt",
                "filter": [
                    "writing",
                    "file",
                    "alt"
                ]
            },
            {
                "id": "fas fa-folder",
                "name": "Folder",
                "filter": [
                    "writing",
                    "folder"
                ]
            },
            {
                "id": "far fa-folder",
                "name": "Folder",
                "filter": [
                    "writing",
                    "folder"
                ]
            },
            {
                "id": "fas fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "writing",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "far fa-folder-open",
                "name": "Folder-open",
                "filter": [
                    "writing",
                    "folder",
                    "open"
                ]
            },
            {
                "id": "fas fa-keyboard",
                "name": "Keyboard",
                "filter": [
                    "writing",
                    "keyboard"
                ]
            },
            {
                "id": "far fa-keyboard",
                "name": "Keyboard",
                "filter": [
                    "writing",
                    "keyboard"
                ]
            },
            {
                "id": "fas fa-newspaper",
                "name": "Newspaper",
                "filter": [
                    "writing",
                    "newspaper"
                ]
            },
            {
                "id": "far fa-newspaper",
                "name": "Newspaper",
                "filter": [
                    "writing",
                    "newspaper"
                ]
            },
            {
                "id": "fas fa-paper-plane",
                "name": "Paper-plane",
                "filter": [
                    "writing",
                    "paper",
                    "plane"
                ]
            },
            {
                "id": "far fa-paper-plane",
                "name": "Paper-plane",
                "filter": [
                    "writing",
                    "paper",
                    "plane"
                ]
            },
            {
                "id": "fas fa-paperclip",
                "name": "Paperclip",
                "filter": [
                    "writing",
                    "paperclip"
                ]
            },
            {
                "id": "fas fa-paragraph",
                "name": "Paragraph",
                "filter": [
                    "writing",
                    "paragraph"
                ]
            },
            {
                "id": "fas fa-pen-square",
                "name": "Pen-square",
                "filter": [
                    "writing",
                    "pen",
                    "square"
                ]
            },
            {
                "id": "fas fa-pencil-alt",
                "name": "Pencil-alt",
                "filter": [
                    "writing",
                    "pencil",
                    "alt"
                ]
            },
            {
                "id": "fas fa-quote-left",
                "name": "Quote-left",
                "filter": [
                    "writing",
                    "quote",
                    "left"
                ]
            },
            {
                "id": "fas fa-quote-right",
                "name": "Quote-right",
                "filter": [
                    "writing",
                    "quote",
                    "right"
                ]
            },
            {
                "id": "fas fa-sticky-note",
                "name": "Sticky-note",
                "filter": [
                    "writing",
                    "sticky",
                    "note"
                ]
            },
            {
                "id": "far fa-sticky-note",
                "name": "Sticky-note",
                "filter": [
                    "writing",
                    "sticky",
                    "note"
                ]
            },
            {
                "id": "fas fa-thumbtack",
                "name": "Thumbtack",
                "filter": [
                    "writing",
                    "thumbtack"
                ]
            }
        ];
    };
    return IconPickerService;
}());
IconPickerService = __decorate([
    core_1.Injectable()
], IconPickerService);
exports.IconPickerService = IconPickerService;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Icon = (function () {
    function Icon() {
    }
    return Icon;
}());
exports.Icon = Icon;
var IconType;
(function (IconType) {
    IconType[IconType["FONT_AWESEOME"] = 0] = "FONT_AWESEOME";
    IconType[IconType["BOOTSTRAP"] = 1] = "BOOTSTRAP";
    IconType[IconType["FONT_AWESEOME5"] = 2] = "FONT_AWESEOME5";
})(IconType = exports.IconType || (exports.IconType = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var icon_picker_component_1 = __webpack_require__(1);
var IconPickerDirective = (function () {
    function IconPickerDirective(vcRef, el, cfr) {
        this.vcRef = vcRef;
        this.el = el;
        this.cfr = cfr;
        this.ipPlaceHolder = 'Search icon...';
        this.ipPosition = 'right';
        this.ipFallbackIcon = 'fa fa-user-plus';
        this.ipHeight = 'auto';
        this.ipMaxHeight = '200px';
        this.ipWidth = '230px';
        this.ipIconPack = 'all';
        this.iconPickerSelect = new core_1.EventEmitter(true);
        this.ignoreChanges = false;
        this.created = false;
    }
    IconPickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.iconPicker) {
            this.ignoreChanges = false;
        }
    };
    IconPickerDirective.prototype.ngOnInit = function () {
        this.iconPicker = this.iconPicker || this.ipFallbackIcon || 'fa fa-user-plus';
        this.iconPickerSelect.emit(this.iconPicker);
    };
    IconPickerDirective.prototype.onClick = function () {
        this.openDialog();
    };
    IconPickerDirective.prototype.openDialog = function () {
        if (!this.created) {
            this.created = true;
            var vcRef = this.vcRef;
            var compFactory = this.cfr.resolveComponentFactory(icon_picker_component_1.IconPickerComponent);
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
            var cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            cmpRef.instance.setDialog(this, this.el, this.iconPicker, this.ipPosition, this.ipHeight, this.ipMaxHeight, this.ipWidth, this.ipPlaceHolder, this.ipFallbackIcon, this.ipIconPack);
            this.dialog = cmpRef.instance;
            if (this.vcRef !== vcRef) {
                cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.iconPicker);
        }
    };
    IconPickerDirective.prototype.iconSelected = function (icon) {
        this.iconPickerSelect.emit(icon);
    };
    return IconPickerDirective;
}());
__decorate([
    core_1.Input('iconPicker'),
    __metadata("design:type", String)
], IconPickerDirective.prototype, "iconPicker", void 0);
__decorate([
    core_1.Input('ipPlaceHolder'),
    __metadata("design:type", Object)
], IconPickerDirective.prototype, "ipPlaceHolder", void 0);
__decorate([
    core_1.Input('ipPosition'),
    __metadata("design:type", Object)
], IconPickerDirective.prototype, "ipPosition", void 0);
__decorate([
    core_1.Input('ipFallbackIcon'),
    __metadata("design:type", Object)
], IconPickerDirective.prototype, "ipFallbackIcon", void 0);
__decorate([
    core_1.Input('ipHeight'),
    __metadata("design:type", Object)
], IconPickerDirective.prototype, "ipHeight", void 0);
__decorate([
    core_1.Input('ipMaxHeight'),
    __metadata("design:type", Object)
], IconPickerDirective.prototype, "ipMaxHeight", void 0);
__decorate([
    core_1.Input('ipWidth'),
    __metadata("design:type", Object)
], IconPickerDirective.prototype, "ipWidth", void 0);
__decorate([
    core_1.Input('ipIconPack'),
    __metadata("design:type", Object)
], IconPickerDirective.prototype, "ipIconPack", void 0);
__decorate([
    core_1.Output('iconPickerSelect'),
    __metadata("design:type", Object)
], IconPickerDirective.prototype, "iconPickerSelect", void 0);
IconPickerDirective = __decorate([
    core_1.Directive({
        selector: '[iconPicker]',
        host: {
            '(click)': 'onClick()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        core_1.ElementRef,
        core_1.ComponentFactoryResolver])
], IconPickerDirective);
exports.IconPickerDirective = IconPickerDirective;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(1));
__export(__webpack_require__(4));
__export(__webpack_require__(9));
__export(__webpack_require__(2));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ".icon-picker * {\n  box-sizing: border-box;\n  margin: 0;\n  font-size: 11px; }\n\n.icon-picker {\n  position: absolute;\n  z-index: 100000;\n  top: 250px;\n  left: 30px;\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n  cursor: default;\n  background-color: #fff;\n  user-select: none; }\n  .icon-picker i {\n    position: relative;\n    cursor: default; }\n  .icon-picker .arrow {\n    position: absolute;\n    z-index: 999999;\n    width: 0;\n    height: 0;\n    border-style: solid; }\n  .icon-picker .arrow-right {\n    top: 10px;\n    left: -20px;\n    border-width: 5px 10px;\n    border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\n  .icon-picker .arrow-left {\n    top: 10px;\n    left: 100%;\n    border-width: 5px 10px;\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777; }\n  .icon-picker .arrow-bottom {\n    top: -20px;\n    left: 10px;\n    border-width: 10px 5px;\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0); }\n  .icon-picker .arrow-top {\n    left: 10px;\n    border-width: 10px 5px;\n    border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\n  .icon-picker div.icon-search {\n    padding: 5px; }\n  .icon-picker div.icon-grid {\n    display: flex;\n    overflow-y: auto;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 5px; }\n    .icon-picker div.icon-grid div {\n      margin: 2px; }\n      .icon-picker div.icon-grid div button {\n        width: 33px;\n        padding: 6px 10px; }\n  .icon-picker div.cursor-sv {\n    position: relative;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    border: #ddd solid 1px;\n    cursor: default; }\n  .icon-picker div.cursor {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border: #222 solid 2px;\n    cursor: default; }\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=\"icon-picker\" #dialogPopup\r\n     [hidden]=\"!show\"\r\n     [style.visibility]=\"this.hidden ? 'hidden' : 'visible'\"\r\n     [style.height.px]=\"ipHeight\"\r\n     [style.width.px]=\"ipWidth\"\r\n     [style.top.px]=\"top\"\r\n     [style.left.px]=\"left\"\r\n     [style.position]=\"position\">\r\n\r\n  <div class=\"arrow arrow-{{ipPosition}}\" [style.top.px]=\"arrowTop\"></div>\r\n\r\n  <div class=\"icon-search\">\r\n    <input type=\"text\" class=\"form-control input-sm\" [text] [value]=\"search\" (newValue)=\"setSearch($event)\" [placeholder]=\"ipPlaceHolder\">\r\n  </div>\r\n  <div class=\"icon-grid\" [ngStyle]=\"{'max-height.px': ipMaxHeight}\">\r\n    <div *ngFor=\"let icon of icons | searchIcon:search\">\r\n      <button *ngIf=\"icon\" class=\"btn btn-default\" type=\"button\" title=\"{{ icon.name }}\"\r\n              [ngClass]=\"{active : icon === selectedIcon}\"\r\n              (click)=\"selectIcon(icon)\" >\r\n        <span *ngIf=\"icon.type === iconType.FONT_AWESEOME\" class=\"fa fa-{{icon.id}}\"></span>\r\n        <span *ngIf=\"icon.type === iconType.BOOTSTRAP\" class=\"glyphicon glyphicon-{{icon.id}}\"></span>\r\n        <span *ngIf=\"icon.type === iconType.FONT_AWESEOME5\" class=\"{{icon.id}}\"></span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(12);
var icon_picker_service_1 = __webpack_require__(2);
var icon_picker_component_1 = __webpack_require__(1);
var icon_picker_directive_1 = __webpack_require__(4);
var text_directive_1 = __webpack_require__(11);
var search_icon_pipe_1 = __webpack_require__(10);
var IconPickerModule = (function () {
    function IconPickerModule() {
    }
    return IconPickerModule;
}());
IconPickerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        providers: [
            icon_picker_service_1.IconPickerService
        ],
        declarations: [
            icon_picker_component_1.IconPickerComponent,
            icon_picker_directive_1.IconPickerDirective,
            text_directive_1.TextDirective,
            search_icon_pipe_1.SearchIconPipe
        ],
        exports: [
            icon_picker_directive_1.IconPickerDirective
        ],
        entryComponents: [
            icon_picker_component_1.IconPickerComponent
        ]
    })
], IconPickerModule);
exports.IconPickerModule = IconPickerModule;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var SearchIconPipe = (function () {
    function SearchIconPipe() {
    }
    SearchIconPipe.prototype.transform = function (value, search) {
        var _this = this;
        if (!search) {
            return value;
        }
        var searchValue = this.clean(search);
        return value.filter(function (icon) {
            var keep = false;
            if (icon.name) {
                keep = keep || _this.clean(icon.name).includes(searchValue);
            }
            if (icon.id) {
                keep = keep || _this.clean(icon.id).includes(searchValue);
            }
            if (icon.filter) {
                keep = keep || icon.filter.some(function (value) { return _this.clean(value).includes(searchValue); });
            }
            if (icon.aliases) {
                keep = keep || icon.aliases.some(function (value) { return _this.clean(value).includes(searchValue); });
            }
            return keep;
        });
    };
    SearchIconPipe.prototype.clean = function (value) {
        return value.trim().toLowerCase();
    };
    return SearchIconPipe;
}());
SearchIconPipe = __decorate([
    core_1.Pipe({
        name: 'searchIcon'
    })
], SearchIconPipe);
exports.SearchIconPipe = SearchIconPipe;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var TextDirective = (function () {
    function TextDirective() {
        this.newValue = new core_1.EventEmitter();
    }
    TextDirective.prototype.changeInput = function (value) {
        this.newValue.emit(value);
    };
    return TextDirective;
}());
__decorate([
    core_1.Output('newValue'),
    __metadata("design:type", Object)
], TextDirective.prototype, "newValue", void 0);
__decorate([
    core_1.Input('text'),
    __metadata("design:type", Object)
], TextDirective.prototype, "text", void 0);
TextDirective = __decorate([
    core_1.Directive({
        selector: '[text]',
        host: {
            '(input)': 'changeInput($event.target.value)'
        }
    })
], TextDirective);
exports.TextDirective = TextDirective;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ngx-icon-picker.umd.js.map