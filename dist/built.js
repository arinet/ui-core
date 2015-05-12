/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(10);
	__webpack_require__(1);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	module.exports = __webpack_require__(17);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.buttons', [])
	
	.constant('buttonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})
	
	.controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])
	
	.directive('btnRadio', function () {
	  return {
	    require: ['btnRadio', 'ngModel'],
	    controller: 'ButtonsController',
	    link: function (scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      //model -> UI
	      ngModelCtrl.$render = function () {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
	      };
	
	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function () {
	        var isActive = element.hasClass(buttonsCtrl.activeClass);
	
	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function () {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });
	    }
	  };
	})
	
	.directive('btnCheckbox', function () {
	  return {
	    require: ['btnCheckbox', 'ngModel'],
	    controller: 'ButtonsController',
	    link: function (scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }
	
	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }
	
	      function getCheckboxValue(attributeValue, defaultValue) {
	        var val = scope.$eval(attributeValue);
	        return angular.isDefined(val) ? val : defaultValue;
	      }
	
	      //model -> UI
	      ngModelCtrl.$render = function () {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };
	
	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function () {
	        scope.$apply(function () {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module("ari.ui.core.ui-bootstrap-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("template/accordion/accordion-group.html","<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a href=\"javascript:void(0)\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{\'text-muted\': isDisabled}\">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class=\"panel-collapse collapse\" collapse=\"!isOpen\">\n	  <div class=\"panel-body\" ng-transclude></div>\n  </div>\n</div>\n");
	$templateCache.put("template/accordion/accordion.html","<div class=\"panel-group\" ng-transclude></div>");
	$templateCache.put("template/alert/alert.html","<div class=\"alert\" ng-class=\"[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]\" role=\"alert\">\n    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n");
	$templateCache.put("template/datepicker/datepicker.html","<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n</div>");
	$templateCache.put("template/datepicker/day.html","<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n  <thead>\n    <tr>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in rows track by $index\">\n      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\" ng-class=\"dt.customClass\">\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{\'btn-info\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\'text-muted\': dt.secondary, \'text-info\': dt.current}\">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");
	$templateCache.put("template/datepicker/month.html","<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n  <thead>\n    <tr>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in rows track by $index\">\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{\'btn-info\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\'text-info\': dt.current}\">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");
	$templateCache.put("template/datepicker/popup.html","<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}\" ng-keydown=\"keydown($event)\">\n	<li ng-transclude></li>\n	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n		<span class=\"btn-group pull-left\">\n			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select(\'today\')\">{{ getText(\'current\') }}</button>\n			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n");
	$templateCache.put("template/datepicker/year.html","<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n  <thead>\n    <tr>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in rows track by $index\">\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{\'btn-info\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\'text-info\': dt.current}\">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");
	$templateCache.put("template/timepicker/timepicker.html","<table>\n	<tbody>\n		<tr class=\"text-center\">\n			<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n			<td ng-show=\"showMeridian\"></td>\n		</tr>\n		<tr>\n			<td class=\"form-group\" ng-class=\"{\'has-error\': invalidHours}\">\n				<input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n			</td>\n			<td>:</td>\n			<td class=\"form-group\" ng-class=\"{\'has-error\': invalidMinutes}\">\n				<input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n			</td>\n			<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n		</tr>\n		<tr class=\"text-center\">\n			<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n			<td ng-show=\"showMeridian\"></td>\n		</tr>\n	</tbody>\n</table>\n");
	$templateCache.put("template/modal/backdrop.html","<div class=\"modal-backdrop\"\n     modal-animation-class=\"fade\"\n     ng-class=\"{in: animate}\"\n     ng-style=\"{\'z-index\': 1040 + (index && 1 || 0) + index*10}\"\n></div>\n");
	$templateCache.put("template/modal/window.html","<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n    modal-animation-class=\"fade\"\n	ng-class=\"{in: animate}\" ng-style=\"{\'z-index\': 1050 + index*10, display: \'block\'}\" ng-click=\"close($event)\">\n    <div class=\"modal-dialog\" ng-class=\"size ? \'modal-\' + size : \'\'\"><div class=\"modal-content\" modal-transclude></div></div>\n</div>\n");
	$templateCache.put("template/progressbar/bar.html","<div class=\"progress-bar\" ng-class=\"type && \'progress-bar-\' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + \'%\'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n");
	$templateCache.put("template/progressbar/progress.html","<div class=\"progress\" ng-transclude></div>");
	$templateCache.put("template/progressbar/progressbar.html","<div class=\"progress\">\n  <div class=\"progress-bar\" ng-class=\"type && \'progress-bar-\' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + \'%\'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n</div>\n");
	$templateCache.put("template/rating/rating.html","<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')\">\n        <span class=\"sr-only\">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>");
	$templateCache.put("template/tabs/tab.html","<li ng-class=\"{active: active, disabled: disabled}\">\n  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n</li>\n");
	$templateCache.put("template/tabs/tabset.html","<div>\n  <ul class=\"nav nav-{{type || \'tabs\'}}\" ng-class=\"{\'nav-stacked\': vertical, \'nav-justified\': justified}\" ng-transclude></ul>\n  <div class=\"tab-content\">\n    <div class=\"tab-pane\" \n         ng-repeat=\"tab in tabs\" \n         ng-class=\"{active: tab.active}\"\n         tab-content-transclude=\"tab\">\n    </div>\n  </div>\n</div>\n");}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module("ari.ui.core.ng-strap-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("popover/popover.tpl.html","<div class=\"popover\">\n  <div class=\"arrow\"></div>\n  <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n  <div class=\"popover-content\" ng-bind=\"content\"></div>\n</div>\n");
	$templateCache.put("tooltip/tooltip.tpl.html","<div class=\"tooltip in\" ng-show=\"title\">\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-inner\" ng-bind=\"title\"></div>\n</div>\n");}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])
	
	.constant('accordionConfig', {
	  closeOthers: true
	})
	
	.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {
	
	  // This array keeps track of the accordion groups
	  this.groups = [];
	
	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if ( closeOthers ) {
	      angular.forEach(this.groups, function (group) {
	        if ( group !== openGroup ) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };
	
	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);
	
	    groupScope.$on('$destroy', function (event) {
	      that.removeGroup(groupScope);
	    });
	  };
	
	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if ( index !== -1 ) {
	      this.groups.splice(index, 1);
	    }
	  };
	
	}])
	
	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('accordion', function () {
	  return {
	    restrict:'EA',
	    controller:'AccordionController',
	    transclude: true,
	    replace: false,
	    templateUrl: 'template/accordion/accordion.html'
	  };
	})
	
	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('accordionGroup', function() {
	  return {
	    require:'^accordion',         // We need this directive to be inside an accordion
	    restrict:'EA',
	    transclude:true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl:'template/accordion/accordion-group.html',
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);
	
	      scope.$watch('isOpen', function(value) {
	        if ( value ) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });
	
	      scope.toggleOpen = function() {
	        if ( !scope.isDisabled ) {
	          scope.isOpen = !scope.isOpen;
	        }
	      };
	    }
	  };
	})
	
	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	// <accordion-group>
	//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
	// </accordion-group>
	.directive('accordionHeading', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^accordionGroup',
	    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})
	
	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	// <div class="accordion-group">
	//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
	//   ...
	// </div>
	.directive('accordionTransclude', function() {
	  return {
	    require: '^accordionGroup',
	    link: function(scope, element, attr, controller) {
	      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
	        if ( heading ) {
	          element.html('');
	          element.append(heading);
	        }
	      });
	    }
	  };
	})
	
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.progressbar', [])
	
	.constant('progressConfig', {
	  animate: true,
	  max: 100
	})
	
	.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
	    var self = this,
	        animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
	
	    this.bars = [];
	    $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;
	
	    this.addBar = function(bar, element) {
	        if ( !animate ) {
	            element.css({'transition': 'none'});
	        }
	
	        this.bars.push(bar);
	
	        bar.$watch('value', function( value ) {
	            bar.percent = +(100 * value / $scope.max).toFixed(2);
	        });
	
	        bar.$on('$destroy', function() {
	            element = null;
	            self.removeBar(bar);
	        });
	    };
	
	    this.removeBar = function(bar) {
	        this.bars.splice(this.bars.indexOf(bar), 1);
	    };
	}])
	
	.directive('progress', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        controller: 'ProgressController',
	        require: 'progress',
	        scope: {},
	        templateUrl: 'template/progressbar/progress.html'
	    };
	})
	
	.directive('bar', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        require: '^progress',
	        scope: {
	            value: '=',
	            max: '=?',
	            type: '@'
	        },
	        templateUrl: 'template/progressbar/bar.html',
	        link: function(scope, element, attrs, progressCtrl) {
	            progressCtrl.addBar(scope, element);
	        }
	    };
	})
	
	.directive('progressbar', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        controller: 'ProgressController',
	        scope: {
	            value: '=',
	            max: '=?',
	            type: '@'
	        },
	        templateUrl: 'template/progressbar/progressbar.html',
	        link: function(scope, element, attrs, progressCtrl) {
	            progressCtrl.addBar(scope, angular.element(element.children()[0]));
	        }
	    };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.rating', [])
	
	.constant('ratingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null
	})
	
	.controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl  = { $setViewValue: angular.noop };
	
	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    ngModelCtrl.$formatters.push(function(value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }
	      return value;
	    });
	
	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	
	    var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) :
	                        new Array( angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max );
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };
	
	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff }, states[i]);
	    }
	    return states;
	  };
	
	  $scope.rate = function(value) {
	    if ( !$scope.readonly && value >= 0 && value <= $scope.range.length ) {
	      ngModelCtrl.$setViewValue(value);
	      ngModelCtrl.$render();
	    }
	  };
	
	  $scope.enter = function(value) {
	    if ( !$scope.readonly ) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };
	
	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };
	
	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate( $scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1) );
	    }
	  };
	
	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	  };
	}])
	
	.directive('rating', function() {
	  return {
	    restrict: 'EA',
	    require: ['rating', 'ngModel'],
	    scope: {
	      readonly: '=?',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'RatingController',
	    templateUrl: 'template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init( ngModelCtrl );
	    }
	  };
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {
	/**
	 * @ngdoc overview
	 * @name ui.bootstrap.tabs
	 *
	 * @description
	 * AngularJS version of the tabs directive.
	 */
	
	angular.module('ui.bootstrap.tabs', [])
	
	.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
	  var ctrl = this,
	      tabs = ctrl.tabs = $scope.tabs = [];
	
	  ctrl.select = function(selectedTab) {
	    angular.forEach(tabs, function(tab) {
	      if (tab.active && tab !== selectedTab) {
	        tab.active = false;
	        tab.onDeselect();
	      }
	    });
	    selectedTab.active = true;
	    selectedTab.onSelect();
	  };
	
	  ctrl.addTab = function addTab(tab) {
	    tabs.push(tab);
	    // we can't run the select function on the first tab
	    // since that would select it twice
	    if (tabs.length === 1 && tab.active !== false) {
	      tab.active = true;
	    } else if (tab.active) {
	      ctrl.select(tab);
	    }
	    else {
	      tab.active = false;
	    }
	  };
	
	  ctrl.removeTab = function removeTab(tab) {
	    var index = tabs.indexOf(tab);
	    //Select a new tab if the tab to be removed is selected and not destroyed
	    if (tab.active && tabs.length > 1 && !destroyed) {
	      //If this is the last tab, select the previous tab. else, the next tab.
	      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
	      ctrl.select(tabs[newActiveIndex]);
	    }
	    tabs.splice(index, 1);
	  };
	
	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });
	}])
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabset
	 * @restrict EA
	 *
	 * @description
	 * Tabset is the outer container for the tabs directive
	 *
	 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
	 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab heading="Tab 1"><b>First</b> Content!</tab>
	      <tab heading="Tab 2"><i>Second</i> Content!</tab>
	    </tabset>
	    <hr />
	    <tabset vertical="true">
	      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
	      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
	    </tabset>
	    <tabset justified="true">
	      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
	      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tabset', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@'
	    },
	    controller: 'TabsetController',
	    templateUrl: 'template/tabs/tabset.html',
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	})
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tab
	 * @restrict EA
	 *
	 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
	 * @param {string=} select An expression to evaluate when the tab is selected.
	 * @param {boolean=} active A binding, telling whether or not this tab is selected.
	 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
	 *
	 * @description
	 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <div ng-controller="TabsDemoCtrl">
	      <button class="btn btn-small" ng-click="items[0].active = true">
	        Select item 1, using active binding
	      </button>
	      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
	        Enable/disable item 2, using disabled binding
	      </button>
	      <br />
	      <tabset>
	        <tab heading="Tab 1">First Tab</tab>
	        <tab select="alertMe()">
	          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
	          Second Tab, with alert callback and html heading!
	        </tab>
	        <tab ng-repeat="item in items"
	          heading="{{item.title}}"
	          disabled="item.disabled"
	          active="item.active">
	          {{item.content}}
	        </tab>
	      </tabset>
	    </div>
	  </file>
	  <file name="script.js">
	    function TabsDemoCtrl($scope) {
	      $scope.items = [
	        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
	        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
	      ];
	
	      $scope.alertMe = function() {
	        setTimeout(function() {
	          alert("You've selected the alert tab!");
	        });
	      };
	    };
	  </file>
	</example>
	 */
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabHeading
	 * @restrict EA
	 *
	 * @description
	 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab>
	        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
	        And some content, too!
	      </tab>
	      <tab>
	        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
	        That's right.
	      </tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tab', ['$parse', '$log', function($parse, $log) {
	  return {
	    require: '^tabset',
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/tabs/tab.html',
	    transclude: true,
	    scope: {
	      active: '=?',
	      heading: '@',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    compile: function(elm, attrs, transclude) {
	      return function postLink(scope, elm, attrs, tabsetCtrl) {
	        scope.$watch('active', function(active) {
	          if (active) {
	            tabsetCtrl.select(scope);
	          }
	        });
	
	        scope.disabled = false;
	        if ( attrs.disable ) {
	          scope.$parent.$watch($parse(attrs.disable), function(value) {
	            scope.disabled = !! value;
	          });
	        }
	
	        // Deprecation support of "disabled" parameter
	        // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
	        // This code is duplicated from the lines above to make it easy to remove once
	        // the feature has been completely deprecated
	        if ( attrs.disabled ) {
	          $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
	          scope.$parent.$watch($parse(attrs.disabled), function(value) {
	            scope.disabled = !! value;
	          });
	        }
	
	        scope.select = function() {
	          if ( !scope.disabled ) {
	            scope.active = true;
	          }
	        };
	
	        tabsetCtrl.addTab(scope);
	        scope.$on('$destroy', function() {
	          tabsetCtrl.removeTab(scope);
	        });
	
	        //We need to transclude later, once the content container is ready.
	        //when this link happens, we're inside a tab heading.
	        scope.$transcludeFn = transclude;
	      };
	    }
	  };
	}])
	
	.directive('tabHeadingTransclude', [function() {
	  return {
	    restrict: 'A',
	    require: '^tab',
	    link: function(scope, elm, attrs, tabCtrl) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	}])
	
	.directive('tabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^tabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.tabContentTransclude);
	
	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };
	  function isTabHeading(node) {
	    return node.tagName &&  (
	      node.hasAttribute('tab-heading') ||
	      node.hasAttribute('data-tab-heading') ||
	      node.tagName.toLowerCase() === 'tab-heading' ||
	      node.tagName.toLowerCase() === 'data-tab-heading'
	    );
	  }
	})
	
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.transition', [])
	
	.value('$transitionSuppressDeprecated', false)
	/**
	 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
	 * @param  {DOMElement} element  The DOMElement that will be animated.
	 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
	 *   - As a string, it represents the css class to be added to the element.
	 *   - As an object, it represents a hash of style attributes to be applied to the element.
	 *   - As a function, it represents a function to be called that will cause the transition to occur.
	 * @return {Promise}  A promise that is resolved when the transition finishes.
	 */
	.factory('$transition', [
	        '$q', '$timeout', '$rootScope', '$log', '$transitionSuppressDeprecated',
	function($q ,  $timeout ,  $rootScope ,  $log ,  $transitionSuppressDeprecated) {
	
	  if (!$transitionSuppressDeprecated) {
	    $log.warn('$transition is now deprecated. Use $animate from ngAnimate instead.');
	  }
	
	  var $transition = function(element, trigger, options) {
	    options = options || {};
	    var deferred = $q.defer();
	    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
	
	    var transitionEndHandler = function(event) {
	      $rootScope.$apply(function() {
	        element.unbind(endEventName, transitionEndHandler);
	        deferred.resolve(element);
	      });
	    };
	
	    if (endEventName) {
	      element.bind(endEventName, transitionEndHandler);
	    }
	
	    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
	    $timeout(function() {
	      if ( angular.isString(trigger) ) {
	        element.addClass(trigger);
	      } else if ( angular.isFunction(trigger) ) {
	        trigger(element);
	      } else if ( angular.isObject(trigger) ) {
	        element.css(trigger);
	      }
	      //If browser does not support transitions, instantly resolve
	      if ( !endEventName ) {
	        deferred.resolve(element);
	      }
	    });
	
	    // Add our custom cancel function to the promise that is returned
	    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
	    // i.e. it will therefore never raise a transitionEnd event for that transition
	    deferred.promise.cancel = function() {
	      if ( endEventName ) {
	        element.unbind(endEventName, transitionEndHandler);
	      }
	      deferred.reject('Transition cancelled');
	    };
	
	    return deferred.promise;
	  };
	
	  // Work out the name of the transitionEnd event
	  var transElement = document.createElement('trans');
	  var transitionEndEventNames = {
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'oTransitionEnd',
	    'transition': 'transitionend'
	  };
	  var animationEndEventNames = {
	    'WebkitTransition': 'webkitAnimationEnd',
	    'MozTransition': 'animationend',
	    'OTransition': 'oAnimationEnd',
	    'transition': 'animationend'
	  };
	  function findEndEventName(endEventNames) {
	    for (var name in endEventNames){
	      if (transElement.style[name] !== undefined) {
	        return endEventNames[name];
	      }
	    }
	  }
	  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
	  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
	  return $transition;
	}]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.position', [])
	
	/**
	 * A set of utility methods that can be use to retrieve position of DOM elements.
	 * It is meant to be used where we need to absolute-position DOM elements in
	 * relation to other, existing elements (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$position', ['$document', '$window', function ($document, $window) {
	
	    function getStyle(el, cssprop) {
	      if (el.currentStyle) { //IE
	        return el.currentStyle[cssprop];
	      } else if ($window.getComputedStyle) {
	        return $window.getComputedStyle(el)[cssprop];
	      }
	      // finally try and get inline style
	      return el.style[cssprop];
	    }
	
	    /**
	     * Checks if a given element is statically positioned
	     * @param element - raw DOM element
	     */
	    function isStaticPositioned(element) {
	      return (getStyle(element, 'position') || 'static' ) === 'static';
	    }
	
	    /**
	     * returns the closest, non-statically positioned parentOffset of a given element
	     * @param element
	     */
	    var parentOffsetEl = function (element) {
	      var docDomEl = $document[0];
	      var offsetParent = element.offsetParent || docDomEl;
	      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
	        offsetParent = offsetParent.offsetParent;
	      }
	      return offsetParent || docDomEl;
	    };
	
	    return {
	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/
	       */
	      position: function (element) {
	        var elBCR = this.offset(element);
	        var offsetParentBCR = { top: 0, left: 0 };
	        var offsetParentEl = parentOffsetEl(element[0]);
	        if (offsetParentEl != $document[0]) {
	          offsetParentBCR = this.offset(angular.element(offsetParentEl));
	          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	        }
	
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: elBCR.top - offsetParentBCR.top,
	          left: elBCR.left - offsetParentBCR.left
	        };
	      },
	
	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/
	       */
	      offset: function (element) {
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
	          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
	        };
	      },
	
	      /**
	       * Provides coordinates for the targetEl in relation to hostEl
	       */
	      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {
	
	        var positionStrParts = positionStr.split('-');
	        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';
	
	        var hostElPos,
	          targetElWidth,
	          targetElHeight,
	          targetElPos;
	
	        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
	
	        targetElWidth = targetEl.prop('offsetWidth');
	        targetElHeight = targetEl.prop('offsetHeight');
	
	        var shiftWidth = {
	          center: function () {
	            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	          },
	          left: function () {
	            return hostElPos.left;
	          },
	          right: function () {
	            return hostElPos.left + hostElPos.width;
	          }
	        };
	
	        var shiftHeight = {
	          center: function () {
	            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	          },
	          top: function () {
	            return hostElPos.top;
	          },
	          bottom: function () {
	            return hostElPos.top + hostElPos.height;
	          }
	        };
	
	        switch (pos0) {
	          case 'right':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: shiftWidth[pos0]()
	            };
	            break;
	          case 'left':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: hostElPos.left - targetElWidth
	            };
	            break;
	          case 'bottom':
	            targetElPos = {
	              top: shiftHeight[pos0](),
	              left: shiftWidth[pos1]()
	            };
	            break;
	          default:
	            targetElPos = {
	              top: hostElPos.top - targetElHeight,
	              left: shiftWidth[pos1]()
	            };
	            break;
	        }
	
	        return targetElPos;
	      }
	    };
	  }]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.alert', [])
	
	.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
	  $scope.closeable = 'close' in $attrs;
	  this.close = $scope.close;
	}])
	
	.directive('alert', function () {
	  return {
	    restrict:'EA',
	    controller:'AlertController',
	    templateUrl:'template/alert/alert.html',
	    transclude:true,
	    replace:true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	})
	
	.directive('dismissOnTimeout', ['$timeout', function($timeout) {
	  return {
	    require: 'alert',
	    link: function(scope, element, attrs, alertCtrl) {
	      $timeout(function(){
	        alertCtrl.close();
	      }, parseInt(attrs.dismissOnTimeout, 10));
	    }
	  };
	}]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ari.ui.core', [
	'ui.bootstrap.accordion',
	'ui.bootstrap.alert',
	'ui.bootstrap.buttons',
	'ui.bootstrap.collapse',
	'ui.bootstrap.dateparser',
	'ui.bootstrap.datepicker',
	'ui.bootstrap.timepicker',
	'ui.bootstrap.dropdown',
	'ui.bootstrap.modal',
	'ui.bootstrap.progressbar',
	'ui.bootstrap.rating',
	'ui.bootstrap.tabs',
	'ui.bootstrap.transition',
	'ui.bootstrap.position',
	'mgcrea.ngStrap.helpers.dimensions',
	'mgcrea.ngStrap.popover',
	'mgcrea.ngStrap.tooltip',
	'ari.ui.core.ui-bootstrap-templates',
	'ari.ui.core.ng-strap-templates'
	]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.collapse', [])
	
	  .directive('collapse', ['$animate', function ($animate) {
	
	    return {
	      link: function (scope, element, attrs) {
	        function expand() {
	          element.removeClass('collapse').addClass('collapsing');
	          $animate.addClass(element, 'in', {
	            to: { height: element[0].scrollHeight + 'px' }
	          }).then(expandDone);
	        }
	
	        function expandDone() {
	          element.removeClass('collapsing');
	          element.css({height: 'auto'});
	        }
	
	        function collapse() {
	          element
	            // IMPORTANT: The height must be set before adding "collapsing" class.
	            // Otherwise, the browser attempts to animate from height 0 (in
	            // collapsing class) to the given height here.
	            .css({height: element[0].scrollHeight + 'px'})
	            // initially all panel collapse have the collapse class, this removal
	            // prevents the animation from jumping to collapsed state
	            .removeClass('collapse')
	            .addClass('collapsing');
	
	          $animate.removeClass(element, 'in', {
	            to: {height: '0'}
	          }).then(collapseDone);
	        }
	
	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing');
	          element.addClass('collapse');
	        }
	
	        scope.$watch(attrs.collapse, function (shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.dateparser', [])
	
	.service('dateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	
	  this.parsers = {};
	
	  var formatCodeToRegex = {
	    'yyyy': {
	      regex: '\\d{4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'yy': {
	      regex: '\\d{2}',
	      apply: function(value) { this.year = +value + 2000; }
	    },
	    'y': {
	      regex: '\\d{1,4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'MMMM': {
	      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
	    },
	    'MMM': {
	      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
	    },
	    'MM': {
	      regex: '0[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'M': {
	      regex: '[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'dd': {
	      regex: '[0-2][0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'd': {
	      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'EEEE': {
	      regex: $locale.DATETIME_FORMATS.DAY.join('|')
	    },
	    'EEE': {
	      regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
	    },
	    'HH': {
	      regex: '(?:0|1)[0-9]|2[0-3]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'H': {
	      regex: '1?[0-9]|2[0-3]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'mm': {
	      regex: '[0-5][0-9]',
	      apply: function(value) { this.minutes = +value; }
	    },
	    'm': {
	      regex: '[0-9]|[1-5][0-9]',
	      apply: function(value) { this.minutes = +value; }
	    },
	    'sss': {
	      regex: '[0-9][0-9][0-9]',
	      apply: function(value) { this.milliseconds = +value; }
	    },
	    'ss': {
	      regex: '[0-5][0-9]',
	      apply: function(value) { this.seconds = +value; }
	    },
	    's': {
	      regex: '[0-9]|[1-5][0-9]',
	      apply: function(value) { this.seconds = +value; }
	    }
	  };
	
	  function createParser(format) {
	    var map = [], regex = format.split('');
	
	    angular.forEach(formatCodeToRegex, function(data, code) {
	      var index = format.indexOf(code);
	
	      if (index > -1) {
	        format = format.split('');
	
	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + code.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');
	
	        map.push({ index: index, apply: data.apply });
	      }
	    });
	
	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }
	
	  this.parse = function(input, format, baseDate) {
	    if ( !angular.isString(input) || !format ) {
	      return input;
	    }
	
	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');
	
	    if ( !this.parsers[format] ) {
	      this.parsers[format] = createParser(format);
	    }
	
	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex);
	
	    if ( results && results.length ) {
	      var fields, dt;
	      if (baseDate) {
	        fields = {
	          year: baseDate.getFullYear(),
	          month: baseDate.getMonth(),
	          date: baseDate.getDate(),
	          hours: baseDate.getHours(),
	          minutes: baseDate.getMinutes(),
	          seconds: baseDate.getSeconds(),
	          milliseconds: baseDate.getMilliseconds()
	        };
	      } else {
	        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
	      }
	
	      for( var i = 1, n = results.length; i < n; i++ ) {
	        var mapper = map[i-1];
	        if ( mapper.apply ) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }
	
	      if ( isValid(fields.year, fields.month, fields.date) ) {
	        dt = new Date(fields.year, fields.month, fields.date, fields.hours, fields.minutes, fields.seconds,
	          fields.milliseconds || 0);
	      }
	
	      return dt;
	    }
	  };
	
	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if (date < 1) {
	      return false;
	    }
	
	    if ( month === 1 && date > 28) {
	        return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	    }
	
	    if ( month === 3 || month === 5 || month === 8 || month === 10) {
	        return date < 31;
	    }
	
	    return true;
	  }
	}]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])
	
	.constant('datepickerConfig', {
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  datepickerMode: 'day',
	  minMode: 'day',
	  maxMode: 'year',
	  showWeeks: true,
	  startingDay: 0,
	  yearRange: 20,
	  minDate: null,
	  maxDate: null,
	  shortcutPropagation: false
	})
	
	.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$timeout', '$log', 'dateFilter', 'datepickerConfig', function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;
	
	  // Modes chain
	  this.modes = ['day', 'month', 'year'];
	
	  // Configuration attributes
	  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
	                   'minMode', 'maxMode', 'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function( key, index ) {
	    self[key] = angular.isDefined($attrs[key]) ? (index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
	  });
	
	  // Watchable date attributes
	  angular.forEach(['minDate', 'maxDate'], function( key ) {
	    if ( $attrs[key] ) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = value ? new Date(value) : null;
	        self.refreshView();
	      });
	    } else {
	      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
	    }
	  });
	
	  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
	  $scope.maxMode = self.maxMode;
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
	
	  if(angular.isDefined($attrs.initDate)) {
	    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
	    $scope.$parent.$watch($attrs.initDate, function(initDate){
	      if(initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)){
	        self.activeDate = initDate;
	        self.refreshView();
	      }
	    });
	  } else {
	    this.activeDate =  new Date();
	  }
	
	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };
	
	  this.init = function( ngModelCtrl_ ) {
	    ngModelCtrl = ngModelCtrl_;
	
	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };
	
	  this.render = function() {
	    if ( ngModelCtrl.$viewValue ) {
	      var date = new Date( ngModelCtrl.$viewValue ),
	          isValid = !isNaN(date);
	
	      if ( isValid ) {
	        this.activeDate = date;
	      } else {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	      }
	      ngModelCtrl.$setValidity('date', isValid);
	    }
	    this.refreshView();
	  };
	
	  this.refreshView = function() {
	    if ( this.element ) {
	      this._refreshView();
	
	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      ngModelCtrl.$setValidity('date-disabled', !date || (this.element && !this.isDisabled(date)));
	    }
	  };
	
	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    return {
	      date: date,
	      label: dateFilter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      current: this.compare(date, new Date()) === 0,
	      customClass: this.customClass(date)
	    };
	  };
	
	  this.isDisabled = function( date ) {
	    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
	  };
	
	    this.customClass = function( date ) {
	      return $scope.customClass({date: date, mode: $scope.datepickerMode});
	    };
	
	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };
	
	  $scope.select = function( date ) {
	    if ( $scope.datepickerMode === self.minMode ) {
	      var dt = ngModelCtrl.$viewValue ? new Date( ngModelCtrl.$viewValue ) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
	      ngModelCtrl.$setViewValue( dt );
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) - 1 ];
	    }
	  };
	
	  $scope.move = function( direction ) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };
	
	  $scope.toggleMode = function( direction ) {
	    direction = direction || 1;
	
	    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
	      return;
	    }
	
	    $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) + direction ];
	  };
	
	  // Key event mapper
	  $scope.keys = { 13:'enter', 32:'space', 33:'pageup', 34:'pagedown', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down' };
	
	  var focusElement = function() {
	    $timeout(function() {
	      self.element[0].focus();
	    }, 0 , false);
	  };
	
	  // Listen for focus requests from popup directive
	  $scope.$on('datepicker.focus', focusElement);
	
	  $scope.keydown = function( evt ) {
	    var key = $scope.keys[evt.which];
	
	    if ( !key || evt.shiftKey || evt.altKey ) {
	      return;
	    }
	
	    evt.preventDefault();
	    if(!self.shortcutPropagation){
	        evt.stopPropagation();
	    }
	
	    if (key === 'enter' || key === 'space') {
	      if ( self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	      focusElement();
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	      focusElement();
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	}])
	
	.directive( 'datepicker', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/datepicker.html',
	    scope: {
	      datepickerMode: '=?',
	      dateDisabled: '&',
	      customClass: '&',
	      shortcutPropagation: '&?'
	    },
	    require: ['datepicker', '?^ngModel'],
	    controller: 'DatepickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if ( ngModelCtrl ) {
	        datepickerCtrl.init( ngModelCtrl );
	      }
	    }
	  };
	})
	
	.directive('daypicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/day.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      scope.showWeeks = ctrl.showWeeks;
	
	      ctrl.step = { months: 1 };
	      ctrl.element = element;
	
	      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      function getDaysInMonth( year, month ) {
	        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
	      }
	
	      function getDates(startDate, n) {
	        var dates = new Array(n), current = new Date(startDate), i = 0;
	        current.setHours(12); // Prevent repeated dates because of timezone bug
	        while ( i < n ) {
	          dates[i++] = new Date(current);
	          current.setDate( current.getDate() + 1 );
	        }
	        return dates;
	      }
	
	      ctrl._refreshView = function() {
	        var year = ctrl.activeDate.getFullYear(),
	          month = ctrl.activeDate.getMonth(),
	          firstDayOfMonth = new Date(year, month, 1),
	          difference = ctrl.startingDay - firstDayOfMonth.getDay(),
	          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
	          firstDate = new Date(firstDayOfMonth);
	
	        if ( numDisplayedFromPreviousMonth > 0 ) {
	          firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
	        }
	
	        // 42 is the number of days on a six-month calendar
	        var days = getDates(firstDate, 42);
	        for (var i = 0; i < 42; i ++) {
	          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
	            secondary: days[i].getMonth() !== month,
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.labels = new Array(7);
	        for (var j = 0; j < 7; j++) {
	          scope.labels[j] = {
	            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
	            full: dateFilter(days[j].date, 'EEEE')
	          };
	        }
	
	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
	        scope.rows = ctrl.split(days, 7);
	
	        if ( scope.showWeeks ) {
	          scope.weekNumbers = [];
	          var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
	              numWeeks = scope.rows.length;
	          for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	            scope.weekNumbers.push(
	              getISO8601WeekNumber( scope.rows[curWeek][thursdayIndex].date ));
	          }
	        }
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
	      };
	
	      function getISO8601WeekNumber(date) {
	        var checkDate = new Date(date);
	        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	        var time = checkDate.getTime();
	        checkDate.setMonth(0); // Compare with Jan 1
	        checkDate.setDate(1);
	        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	      }
	
	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getDate();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 7;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 7;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setMonth(month, 1);
	          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
	        } else if (key === 'home') {
	          date = 1;
	        } else if (key === 'end') {
	          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
	        }
	        ctrl.activeDate.setDate(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.directive('monthpicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/month.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      ctrl.step = { years: 1 };
	      ctrl.element = element;
	
	      ctrl._refreshView = function() {
	        var months = new Array(12),
	            year = ctrl.activeDate.getFullYear();
	
	        for ( var i = 0; i < 12; i++ ) {
	          months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
	        scope.rows = ctrl.split(months, 3);
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
	      };
	
	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getMonth();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 3;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 3;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setFullYear(year);
	        } else if (key === 'home') {
	          date = 0;
	        } else if (key === 'end') {
	          date = 11;
	        }
	        ctrl.activeDate.setMonth(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.directive('yearpicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/year.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      var range = ctrl.yearRange;
	
	      ctrl.step = { years: range };
	      ctrl.element = element;
	
	      function getStartingYear( year ) {
	        return parseInt((year - 1) / range, 10) * range + 1;
	      }
	
	      ctrl._refreshView = function() {
	        var years = new Array(range);
	
	        for ( var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++ ) {
	          years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.title = [years[0].label, years[range - 1].label].join(' - ');
	        scope.rows = ctrl.split(years, 5);
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return date1.getFullYear() - date2.getFullYear();
	      };
	
	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getFullYear();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 5;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 5;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          date += (key === 'pageup' ? - 1 : 1) * ctrl.step.years;
	        } else if (key === 'home') {
	          date = getStartingYear( ctrl.activeDate.getFullYear() );
	        } else if (key === 'end') {
	          date = getStartingYear( ctrl.activeDate.getFullYear() ) + range - 1;
	        }
	        ctrl.activeDate.setFullYear(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.constant('datepickerPopupConfig', {
	  datepickerPopup: 'yyyy-MM-dd',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  currentText: 'Today',
	  clearText: 'Clear',
	  closeText: 'Done',
	  closeOnDateSelection: true,
	  appendToBody: false,
	  showButtonBar: true
	})
	
	.directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig',
	function ($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
	  return {
	    restrict: 'EA',
	    require: 'ngModel',
	    scope: {
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@',
	      dateDisabled: '&',
	      customClass: '&'
	    },
	    link: function(scope, element, attrs, ngModel) {
	      var dateFormat,
	          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
	          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
	
	      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
	
	      scope.getText = function( key ) {
	        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	      };
	
	      var isHtml5DateInput = false;
	      if (datepickerPopupConfig.html5Types[attrs.type]) {
	        dateFormat = datepickerPopupConfig.html5Types[attrs.type];
	        isHtml5DateInput = true;
	      } else {
	        dateFormat = attrs.datepickerPopup || datepickerPopupConfig.datepickerPopup;
	        attrs.$observe('datepickerPopup', function(value, oldValue) {
	            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	            // Invalidate the $modelValue to ensure that formatters re-run
	            // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	            if (newDateFormat !== dateFormat) {
	              dateFormat = newDateFormat;
	              ngModel.$modelValue = null;
	
	              if (!dateFormat) {
	                throw new Error('datepickerPopup must have a date format specified.');
	              }
	            }
	        });
	      }
	
	      if (!dateFormat) {
	        throw new Error('datepickerPopup must have a date format specified.');
	      }
	
	      if (isHtml5DateInput && attrs.datepickerPopup) {
	        throw new Error('HTML5 date input types do not support custom formats.');
	      }
	
	      // popup element used to display calendar
	      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
	      popupEl.attr({
	        'ng-model': 'date',
	        'ng-change': 'dateSelection()'
	      });
	
	      function cameltoDash( string ){
	        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	      }
	
	      // datepicker element
	      var datepickerEl = angular.element(popupEl.children()[0]);
	      if (isHtml5DateInput) {
	        if (attrs.type == 'month') {
	          datepickerEl.attr('datepicker-mode', '"month"');
	          datepickerEl.attr('min-mode', 'month');
	        }
	      }
	
	      if ( attrs.datepickerOptions ) {
	        var options = scope.$parent.$eval(attrs.datepickerOptions);
	        if(options.initDate) {
	          scope.initDate = options.initDate;
	          datepickerEl.attr( 'init-date', 'initDate' );
	          delete options.initDate;
	        }
	        angular.forEach(options, function( value, option ) {
	          datepickerEl.attr( cameltoDash(option), value );
	        });
	      }
	
	      scope.watchData = {};
	      angular.forEach(['minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function( key ) {
	        if ( attrs[key] ) {
	          var getAttribute = $parse(attrs[key]);
	          scope.$parent.$watch(getAttribute, function(value){
	            scope.watchData[key] = value;
	          });
	          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
	
	          // Propagate changes from datepicker to outside
	          if ( key === 'datepickerMode' ) {
	            var setAttribute = getAttribute.assign;
	            scope.$watch('watchData.' + key, function(value, oldvalue) {
	              if ( value !== oldvalue ) {
	                setAttribute(scope.$parent, value);
	              }
	            });
	          }
	        }
	      });
	      if (attrs.dateDisabled) {
	        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
	      }
	
	      if (attrs.showWeeks) {
	        datepickerEl.attr('show-weeks', attrs.showWeeks);
	      }
	
	      if (attrs.customClass){
	        datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
	      }
	
	      function parseDate(viewValue) {
	        if (angular.isNumber(viewValue)) {
	          // presumably timestamp to date object
	          viewValue = new Date(viewValue);
	        }
	
	        if (!viewValue) {
	          return null;
	        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	          return viewValue;
	        } else if (angular.isString(viewValue)) {
	          var date = dateParser.parse(viewValue, dateFormat, scope.date) || new Date(viewValue);
	          if (isNaN(date)) {
	            return undefined;
	          } else {
	            return date;
	          }
	        } else {
	          return undefined;
	        }
	      }
	
	      function validator(modelValue, viewValue) {
	        var value = modelValue || viewValue;
	        if (angular.isNumber(value)) {
	          value = new Date(value);
	        }
	        if (!value) {
	          return true;
	        } else if (angular.isDate(value) && !isNaN(value)) {
	          return true;
	        } else if (angular.isString(value)) {
	          var date = dateParser.parse(value, dateFormat) || new Date(value);
	          return !isNaN(date);
	        } else {
	          return false;
	        }
	      }
	
	      if (!isHtml5DateInput) {
	        // Internal API to maintain the correct ng-invalid-[key] class
	        ngModel.$$parserName = 'date';
	        ngModel.$validators.date = validator;
	        ngModel.$parsers.unshift(parseDate);
	        ngModel.$formatters.push(function (value) {
	          scope.date = value;
	          return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
	        });
	      }
	      else {
	        ngModel.$formatters.push(function (value) {
	          scope.date = value;
	          return value;
	        });
	      }
	
	      // Inner change
	      scope.dateSelection = function(dt) {
	        if (angular.isDefined(dt)) {
	          scope.date = dt;
	        }
	        var date = scope.date ? dateFilter(scope.date, dateFormat) : '';
	        element.val(date);
	        ngModel.$setViewValue(date);
	
	        if ( closeOnDateSelection ) {
	          scope.isOpen = false;
	          element[0].focus();
	        }
	      };
	
	      // Detect changes in the view from the text box
	      ngModel.$viewChangeListeners.push(function () {
	        scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date) || new Date(ngModel.$viewValue);
	      });
	
	      var documentClickBind = function(event) {
	        if (scope.isOpen && event.target !== element[0]) {
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	        }
	      };
	
	      var keydown = function(evt, noApply) {
	        scope.keydown(evt);
	      };
	      element.bind('keydown', keydown);
	
	      scope.keydown = function(evt) {
	        if (evt.which === 27) {
	          evt.preventDefault();
	          if (scope.isOpen) {
	            evt.stopPropagation();
	          }
	          scope.close();
	        } else if (evt.which === 40 && !scope.isOpen) {
	          scope.isOpen = true;
	        }
	      };
	
	      scope.$watch('isOpen', function(value) {
	        if (value) {
	          scope.$broadcast('datepicker.focus');
	          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	          scope.position.top = scope.position.top + element.prop('offsetHeight');
	
	          $document.bind('click', documentClickBind);
	        } else {
	          $document.unbind('click', documentClickBind);
	        }
	      });
	
	      scope.select = function( date ) {
	        if (date === 'today') {
	          var today = new Date();
	          if (angular.isDate(scope.date)) {
	            date = new Date(scope.date);
	            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	          } else {
	            date = new Date(today.setHours(0, 0, 0, 0));
	          }
	        }
	        scope.dateSelection( date );
	      };
	
	      scope.close = function() {
	        scope.isOpen = false;
	        element[0].focus();
	      };
	
	      var $popup = $compile(popupEl)(scope);
	      // Prevent jQuery cache memory leak (template is now redundant after linking)
	      popupEl.remove();
	
	      if ( appendToBody ) {
	        $document.find('body').append($popup);
	      } else {
	        element.after($popup);
	      }
	
	      scope.$on('$destroy', function() {
	        $popup.remove();
	        element.unbind('keydown', keydown);
	        $document.unbind('click', documentClickBind);
	      });
	    }
	  };
	}])
	
	.directive('datepickerPopupWrap', function() {
	  return {
	    restrict:'EA',
	    replace: true,
	    transclude: true,
	    templateUrl: 'template/datepicker/popup.html',
	    link:function (scope, element, attrs) {
	      element.bind('click', function(event) {
	        event.preventDefault();
	        event.stopPropagation();
	      });
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.timepicker', [])
	
	.constant('timepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  showMeridian: true,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true
	})
	
	.controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
	
	  this.init = function( ngModelCtrl_, inputs ) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    ngModelCtrl.$formatters.unshift(function (modelValue) {
	      return modelValue ? new Date( modelValue ) : null;
	    });
	
	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1);
	
	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
	    if ( mousewheel ) {
	      this.setupMousewheelEvents( hoursInputEl, minutesInputEl );
	    }
	
	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents( hoursInputEl, minutesInputEl );
	    }
	
	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents( hoursInputEl, minutesInputEl );
	  };
	
	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = parseInt(value, 10);
	    });
	  }
	
	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = parseInt(value, 10);
	    });
	  }
	
	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;
	
	      if ( ngModelCtrl.$error.time ) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
	          selected.setHours( hours );
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    });
	  }
	
	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate ( ) {
	    var hours = parseInt( $scope.hours, 10 );
	    var valid = ( $scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
	    if ( !valid ) {
	      return undefined;
	    }
	
	    if ( $scope.showMeridian ) {
	      if ( hours === 12 ) {
	        hours = 0;
	      }
	      if ( $scope.meridian === meridians[1] ) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }
	
	  function getMinutesFromTemplate() {
	    var minutes = parseInt($scope.minutes, 10);
	    return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
	  }
	
	  function pad( value ) {
	    return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value.toString();
	  }
	
	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function( hoursInputEl, minutesInputEl ) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
	      return (e.detail || delta > 0);
	    };
	
	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementHours() : $scope.decrementHours() );
	      e.preventDefault();
	    });
	
	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementMinutes() : $scope.decrementMinutes() );
	      e.preventDefault();
	    });
	
	  };
	
	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function( hoursInputEl, minutesInputEl ) {
	    hoursInputEl.bind('keydown', function(e) {
	      if ( e.which === 38 ) { // up
	        e.preventDefault();
	        $scope.incrementHours();
	        $scope.$apply();
	      }
	      else if ( e.which === 40 ) { // down
	        e.preventDefault();
	        $scope.decrementHours();
	        $scope.$apply();
	      }
	    });
	
	    minutesInputEl.bind('keydown', function(e) {
	      if ( e.which === 38 ) { // up
	        e.preventDefault();
	        $scope.incrementMinutes();
	        $scope.$apply();
	      }
	      else if ( e.which === 40 ) { // down
	        e.preventDefault();
	        $scope.decrementMinutes();
	        $scope.$apply();
	      }
	    });
	  };
	
	  this.setupInputEvents = function( hoursInputEl, minutesInputEl ) {
	    if ( $scope.readonlyInput ) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      return;
	    }
	
	    var invalidate = function(invalidHours, invalidMinutes) {
	      ngModelCtrl.$setViewValue( null );
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }
	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }
	    };
	
	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate();
	
	      if ( angular.isDefined(hours) ) {
	        selected.setHours( hours );
	        refresh( 'h' );
	      } else {
	        invalidate(true);
	      }
	    };
	
	    hoursInputEl.bind('blur', function(e) {
	      if ( !$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply( function() {
	          $scope.hours = pad( $scope.hours );
	        });
	      }
	    });
	
	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate();
	
	      if ( angular.isDefined(minutes) ) {
	        selected.setMinutes( minutes );
	        refresh( 'm' );
	      } else {
	        invalidate(undefined, true);
	      }
	    };
	
	    minutesInputEl.bind('blur', function(e) {
	      if ( !$scope.invalidMinutes && $scope.minutes < 10 ) {
	        $scope.$apply( function() {
	          $scope.minutes = pad( $scope.minutes );
	        });
	      }
	    });
	
	  };
	
	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;
	
	    if ( isNaN(date) ) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if ( date ) {
	        selected = date;
	      }
	      makeValid();
	      updateTemplate();
	    }
	  };
	
	  // Call internally when we know that model is valid.
	  function refresh( keyboardChange ) {
	    makeValid();
	    ngModelCtrl.$setViewValue( new Date(selected) );
	    updateTemplate( keyboardChange );
	  }
	
	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	  }
	
	  function updateTemplate( keyboardChange ) {
	    var hours = selected.getHours(), minutes = selected.getMinutes();
	
	    if ( $scope.showMeridian ) {
	      hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
	    }
	
	    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
	    if (keyboardChange !== 'm') {
	      $scope.minutes = pad(minutes);
	    }
	    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	  }
	
	  function addMinutes( minutes ) {
	    var dt = new Date( selected.getTime() + minutes * 60000 );
	    selected.setHours( dt.getHours(), dt.getMinutes() );
	    refresh();
	  }
	
	  $scope.incrementHours = function() {
	    addMinutes( hourStep * 60 );
	  };
	  $scope.decrementHours = function() {
	    addMinutes( - hourStep * 60 );
	  };
	  $scope.incrementMinutes = function() {
	    addMinutes( minuteStep );
	  };
	  $scope.decrementMinutes = function() {
	    addMinutes( - minuteStep );
	  };
	  $scope.toggleMeridian = function() {
	    addMinutes( 12 * 60 * (( selected.getHours() < 12 ) ? 1 : -1) );
	  };
	}])
	
	.directive('timepicker', function () {
	  return {
	    restrict: 'EA',
	    require: ['timepicker', '?^ngModel'],
	    controller:'TimepickerController',
	    replace: true,
	    scope: {},
	    templateUrl: 'template/timepicker/timepicker.html',
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if ( ngModelCtrl ) {
	        timepickerCtrl.init( ngModelCtrl, element.find('input') );
	      }
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])
	
	.constant('dropdownConfig', {
	  openClass: 'open'
	})
	
	.service('dropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;
	
	  this.open = function( dropdownScope ) {
	    if ( !openScope ) {
	      $document.bind('click', closeDropdown);
	      $document.bind('keydown', escapeKeyBind);
	    }
	
	    if ( openScope && openScope !== dropdownScope ) {
	        openScope.isOpen = false;
	    }
	
	    openScope = dropdownScope;
	  };
	
	  this.close = function( dropdownScope ) {
	    if ( openScope === dropdownScope ) {
	      openScope = null;
	      $document.unbind('click', closeDropdown);
	      $document.unbind('keydown', escapeKeyBind);
	    }
	  };
	
	  var closeDropdown = function( evt ) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }
	
	    if( evt && openScope.getAutoClose() === 'disabled' )  { return ; }
	
	    var toggleElement = openScope.getToggleElement();
	    if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
	        return;
	    }
	
	    var $element = openScope.getElement();
	    if( evt && openScope.getAutoClose() === 'outsideClick' && $element && $element[0].contains(evt.target) ) {
	      return;
	    }
	
	    openScope.isOpen = false;
	
	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };
	
	  var escapeKeyBind = function( evt ) {
	    if ( evt.which === 27 ) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    }
	  };
	}])
	
	.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', '$position', '$document', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate, $position, $document) {
	  var self = this,
	      scope = $scope.$new(), // create a child scope so we are not polluting original one
	      openClass = dropdownConfig.openClass,
	      getIsOpen,
	      setIsOpen = angular.noop,
	      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	      appendToBody = false;
	
	  this.init = function( element ) {
	    self.$element = element;
	
	    if ( $attrs.isOpen ) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;
	
	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }
	
	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	
	    if ( appendToBody && self.dropdownMenu ) {
	      $document.find('body').append( self.dropdownMenu );
	      element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };
	
	  this.toggle = function( open ) {
	    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	  };
	
	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };
	
	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };
	
	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };
	
	  scope.getElement = function() {
	    return self.$element;
	  };
	
	  scope.focusToggleElement = function() {
	    if ( self.toggleElement ) {
	      self.toggleElement[0].focus();
	    }
	  };
	
	  scope.$watch('isOpen', function( isOpen, wasOpen ) {
	    if ( appendToBody && self.dropdownMenu ) {
	      var pos = $position.positionElements(self.$element, self.dropdownMenu, 'bottom-left', true);
	      self.dropdownMenu.css({
	        top: pos.top + 'px',
	        left: pos.left + 'px',
	        display: isOpen ? 'block' : 'none'
	      });
	    }
	
	    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);
	
	    if ( isOpen ) {
	      scope.focusToggleElement();
	      dropdownService.open( scope );
	    } else {
	      dropdownService.close( scope );
	    }
	
	    setIsOpen($scope, isOpen);
	    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	      toggleInvoker($scope, { open: !!isOpen });
	    }
	  });
	
	  $scope.$on('$locationChangeSuccess', function() {
	    scope.isOpen = false;
	  });
	
	  $scope.$on('$destroy', function() {
	    scope.$destroy();
	  });
	}])
	
	.directive('dropdown', function() {
	  return {
	    controller: 'DropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init( element );
	    }
	  };
	})
	
	.directive('dropdownMenu', function() {
	  return {
	    restrict: 'AC',
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if ( !dropdownCtrl ) {
	        return;
	      }
	      dropdownCtrl.dropdownMenu = element;
	    }
	  };
	})
	
	.directive('dropdownToggle', function() {
	  return {
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if ( !dropdownCtrl ) {
	        return;
	      }
	
	      dropdownCtrl.toggleElement = element;
	
	      var toggleDropdown = function(event) {
	        event.preventDefault();
	
	        if ( !element.hasClass('disabled') && !attrs.disabled ) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };
	
	      element.bind('click', toggleDropdown);
	
	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
	        element.attr('aria-expanded', !!isOpen);
	      });
	
	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.modal', [])
	
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function () {
	    return {
	      createNew: function () {
	        var stack = [];
	
	        return {
	          add: function (key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function (key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function () {
	            return stack[stack.length - 1];
	          },
	          remove: function (key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function () {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function () {
	            return stack.length;
	          }
	        };
	      }
	    };
	  })
	
	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('modalBackdrop', ['$timeout', function ($timeout) {
	    return {
	      restrict: 'EA',
	      replace: true,
	      templateUrl: 'template/modal/backdrop.html',
	      compile: function (tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };
	
	    function linkFn(scope, element, attrs) {
	      scope.animate = false;
	
	      //trigger CSS transitions
	      $timeout(function () {
	        scope.animate = true;
	      });
	    }
	  }])
	
	  .directive('modalWindow', ['$modalStack', '$q', function ($modalStack, $q) {
	    return {
	      restrict: 'EA',
	      scope: {
	        index: '@',
	        animate: '='
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'template/modal/window.html';
	      },
	      link: function (scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        scope.size = attrs.size;
	
	        scope.close = function (evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };
	
	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;
	
	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function (value) {
	          if (value == 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });
	
	        modalRenderDeferObj.promise.then(function () {
	          // trigger CSS transitions
	          scope.animate = true;
	
	          var inputsWithAutofocus = element[0].querySelectorAll('[autofocus]');
	          /**
	           * Auto-focusing of a freshly-opened modal element causes any child elements
	           * with the autofocus attribute to lose focus. This is an issue on touch
	           * based devices which will show and then hide the onscreen keyboard.
	           * Attempts to refocus the autofocus element via JavaScript will not reopen
	           * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	           * the modal element if the modal does not contain an autofocus element.
	           */
	          if (inputsWithAutofocus.length) {
	            inputsWithAutofocus[0].focus();
	          } else {
	            element[0].focus();
	          }
	
	          // Notify {@link $modalStack} that modal is rendered.
	          var modal = $modalStack.getTop();
	          if (modal) {
	            $modalStack.modalRendered(modal.key);
	          }
	        });
	      }
	    };
	  }])
	
	  .directive('modalAnimationClass', [
	    function () {
	      return {
	        compile: function (tElement, tAttrs) {
	          if (tAttrs.modalAnimation) {
	            tElement.addClass(tAttrs.modalAnimationClass);
	          }
	        }
	      };
	    }])
	
	  .directive('modalTransclude', function () {
	    return {
	      link: function($scope, $element, $attrs, controller, $transclude) {
	        $transclude($scope.$parent, function(clone) {
	          $element.empty();
	          $element.append(clone);
	        });
	      }
	    };
	  })
	
	  .factory('$modalStack', ['$animate', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap',
	    function ($animate, $timeout, $document, $compile, $rootScope, $$stackedMap) {
	
	      var OPENED_MODAL_CLASS = 'modal-open';
	
	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var $modalStack = {};
	
	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }
	        return topBackdropIndex;
	      }
	
	      $rootScope.$watch(backdropIndex, function(newBackdropIndex){
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });
	
	      function removeModalWindow(modalInstance) {
	
	        var body = $document.find('body').eq(0);
	        var modalWindow = openedWindows.get(modalInstance).value;
	
	        //clean up the stack
	        openedWindows.remove(modalInstance);
	
	        //remove window DOM element
	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
	          checkRemoveBackdrop();
	        });
	      }
	
	      function checkRemoveBackdrop() {
	          //remove backdrop if no longer needed
	          if (backdropDomEl && backdropIndex() == -1) {
	            var backdropScopeRef = backdropScope;
	            removeAfterAnimate(backdropDomEl, backdropScope, function () {
	              backdropScopeRef = null;
	            });
	            backdropDomEl = undefined;
	            backdropScope = undefined;
	          }
	      }
	
	      function removeAfterAnimate(domEl, scope, done) {
	        // Closing animation
	        scope.animate = false;
	
	        if (domEl.attr('modal-animation') && $animate.enabled()) {
	          // transition out
	          domEl.one('$animate:close', function closeFn() {
	            $rootScope.$evalAsync(afterAnimating);
	          });
	        } else {
	          // Ensure this call is async
	          $timeout(afterAnimating);
	        }
	
	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;
	
	          domEl.remove();
	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }
	
	      $document.bind('keydown', function (evt) {
	        var modal;
	
	        if (evt.which === 27) {
	          modal = openedWindows.top();
	          if (modal && modal.value.keyboard) {
	            evt.preventDefault();
	            $rootScope.$apply(function () {
	              $modalStack.dismiss(modal.key, 'escape key press');
	            });
	          }
	        }
	      });
	
	      $modalStack.open = function (modalInstance, modal) {
	
	        var modalOpener = $document[0].activeElement;
	
	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard
	        });
	
	        var body = $document.find('body').eq(0),
	            currBackdropIndex = backdropIndex();
	
	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.index = currBackdropIndex;
	          var angularBackgroundDomEl = angular.element('<div modal-backdrop="modal-backdrop"></div>');
	          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            angularBackgroundDomEl.attr('modal-animation', 'true');
	          }
	          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
	          body.append(backdropDomEl);
	        }
	
	        var angularDomEl = angular.element('<div modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'size': modal.size,
	          'index': openedWindows.length() - 1,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }
	
	        var modalDomEl = $compile(angularDomEl)(modal.scope);
	        openedWindows.top().value.modalDomEl = modalDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	        body.append(modalDomEl);
	        body.addClass(OPENED_MODAL_CLASS);
	      };
	
	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	          return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }
	
	      $modalStack.close = function (modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance);
	          modalWindow.value.modalOpener.focus();
	          return true;
	        }
	        return !modalWindow;
	      };
	
	      $modalStack.dismiss = function (modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance);
	          modalWindow.value.modalOpener.focus();
	          return true;
	        }
	        return !modalWindow;
	      };
	
	      $modalStack.dismissAll = function (reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };
	
	      $modalStack.getTop = function () {
	        return openedWindows.top();
	      };
	
	      $modalStack.modalRendered = function (modalInstance) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.renderDeferred.resolve();
	        }
	      };
	
	      return $modalStack;
	    }])
	
	  .provider('$modal', function () {
	
	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$modalStack',
	        function ($injector, $rootScope, $q, $templateRequest, $controller, $modalStack) {
	
	          var $modal = {};
	
	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
	          }
	
	          function getResolvePromises(resolves) {
	            var promisesArr = [];
	            angular.forEach(resolves, function (value) {
	              if (angular.isFunction(value) || angular.isArray(value)) {
	                promisesArr.push($q.when($injector.invoke(value)));
	              }
	            });
	            return promisesArr;
	          }
	
	          $modal.open = function (modalOptions) {
	
	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();
	
	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              rendered: modalRenderDeferred.promise,
	              close: function (result) {
	                return $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                return $modalStack.dismiss(modalInstance, reason);
	              }
	            };
	
	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};
	
	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }
	
	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
	
	
	            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {
	
	              var modalScope = (modalOptions.scope || $rootScope).$new();
	              modalScope.$close = modalInstance.close;
	              modalScope.$dismiss = modalInstance.dismiss;
	
	              var ctrlInstance, ctrlLocals = {};
	              var resolveIter = 1;
	
	              //controllers
	              if (modalOptions.controller) {
	                ctrlLocals.$scope = modalScope;
	                ctrlLocals.$modalInstance = modalInstance;
	                angular.forEach(modalOptions.resolve, function (value, key) {
	                  ctrlLocals[key] = tplAndVars[resolveIter++];
	                });
	
	                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
	                if (modalOptions.controllerAs) {
	                  modalScope[modalOptions.controllerAs] = ctrlInstance;
	                }
	              }
	
	              $modalStack.open(modalInstance, {
	                scope: modalScope,
	                deferred: modalResultDeferred,
	                renderDeferred: modalRenderDeferred,
	                content: tplAndVars[0],
	                animation: modalOptions.animation,
	                backdrop: modalOptions.backdrop,
	                keyboard: modalOptions.keyboard,
	                backdropClass: modalOptions.backdropClass,
	                windowClass: modalOptions.windowClass,
	                windowTemplateUrl: modalOptions.windowTemplateUrl,
	                size: modalOptions.size
	              });
	
	            }, function resolveError(reason) {
	              modalResultDeferred.reject(reason);
	            });
	
	            templateAndResolvePromise.then(function () {
	              modalOpenedDeferred.resolve(true);
	            }, function (reason) {
	              modalOpenedDeferred.reject(reason);
	            });
	
	            return modalInstance;
	          };
	
	          return $modal;
	        }]
	    };
	
	    return $modalProvider;
	  });
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {/**
	 * angular-strap
	 * @version v2.1.6 - 2015-01-11
	 * @link http://mgcrea.github.io/angular-strap
	 * @author Olivier Louvignes (olivier@mg-crea.com)
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
	'use strict';
	
	angular.module('mgcrea.ngStrap.helpers.dimensions', [])
	
	  .factory('dimensions', ["$document", "$window", function($document, $window) {
	
	    var jqLite = angular.element;
	    var fn = {};
	
	    /**
	     * Test the element nodeName
	     * @param element
	     * @param name
	     */
	    var nodeName = fn.nodeName = function(element, name) {
	      return element.nodeName && element.nodeName.toLowerCase() === name.toLowerCase();
	    };
	
	    /**
	     * Returns the element computed style
	     * @param element
	     * @param prop
	     * @param extra
	     */
	    fn.css = function(element, prop, extra) {
	      var value;
	      if (element.currentStyle) { //IE
	        value = element.currentStyle[prop];
	      } else if (window.getComputedStyle) {
	        value = window.getComputedStyle(element)[prop];
	      } else {
	        value = element.style[prop];
	      }
	      return extra === true ? parseFloat(value) || 0 : value;
	    };
	
	    /**
	     * Provides read-only equivalent of jQuery's offset function:
	     * @required-by bootstrap-tooltip, bootstrap-affix
	     * @url http://api.jquery.com/offset/
	     * @param element
	     */
	    fn.offset = function(element) {
	      var boxRect = element.getBoundingClientRect();
	      var docElement = element.ownerDocument;
	      return {
	        width: boxRect.width || element.offsetWidth,
	        height: boxRect.height || element.offsetHeight,
	        top: boxRect.top + (window.pageYOffset || docElement.documentElement.scrollTop) - (docElement.documentElement.clientTop || 0),
	        left: boxRect.left + (window.pageXOffset || docElement.documentElement.scrollLeft) - (docElement.documentElement.clientLeft || 0)
	      };
	    };
	
	    /**
	     * Provides read-only equivalent of jQuery's position function
	     * @required-by bootstrap-tooltip, bootstrap-affix
	     * @url http://api.jquery.com/offset/
	     * @param element
	     */
	    fn.position = function(element) {
	
	      var offsetParentRect = {top: 0, left: 0},
	          offsetParentElement,
	          offset;
	
	      // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
	      if (fn.css(element, 'position') === 'fixed') {
	
	        // We assume that getBoundingClientRect is available when computed position is fixed
	        offset = element.getBoundingClientRect();
	
	      } else {
	
	        // Get *real* offsetParentElement
	        offsetParentElement = offsetParent(element);
	
	        // Get correct offsets
	        offset = fn.offset(element);
	        if (!nodeName(offsetParentElement, 'html')) {
	          offsetParentRect = fn.offset(offsetParentElement);
	        }
	
	        // Add offsetParent borders
	        offsetParentRect.top += fn.css(offsetParentElement, 'borderTopWidth', true);
	        offsetParentRect.left += fn.css(offsetParentElement, 'borderLeftWidth', true);
	      }
	
	      // Subtract parent offsets and element margins
	      return {
	        width: element.offsetWidth,
	        height: element.offsetHeight,
	        top: offset.top - offsetParentRect.top - fn.css(element, 'marginTop', true),
	        left: offset.left - offsetParentRect.left - fn.css(element, 'marginLeft', true)
	      };
	
	    };
	
	    /**
	     * Returns the closest, non-statically positioned offsetParent of a given element
	     * @required-by fn.position
	     * @param element
	     */
	    var offsetParent = function offsetParentElement(element) {
	      var docElement = element.ownerDocument;
	      var offsetParent = element.offsetParent || docElement;
	      if(nodeName(offsetParent, '#document')) return docElement.documentElement;
	      while(offsetParent && !nodeName(offsetParent, 'html') && fn.css(offsetParent, 'position') === 'static') {
	        offsetParent = offsetParent.offsetParent;
	      }
	      return offsetParent || docElement.documentElement;
	    };
	
	    /**
	     * Provides equivalent of jQuery's height function
	     * @required-by bootstrap-affix
	     * @url http://api.jquery.com/height/
	     * @param element
	     * @param outer
	     */
	    fn.height = function(element, outer) {
	      var value = element.offsetHeight;
	      if(outer) {
	        value += fn.css(element, 'marginTop', true) + fn.css(element, 'marginBottom', true);
	      } else {
	        value -= fn.css(element, 'paddingTop', true) + fn.css(element, 'paddingBottom', true) + fn.css(element, 'borderTopWidth', true) + fn.css(element, 'borderBottomWidth', true);
	      }
	      return value;
	    };
	
	    /**
	     * Provides equivalent of jQuery's width function
	     * @required-by bootstrap-affix
	     * @url http://api.jquery.com/width/
	     * @param element
	     * @param outer
	     */
	    fn.width = function(element, outer) {
	      var value = element.offsetWidth;
	      if(outer) {
	        value += fn.css(element, 'marginLeft', true) + fn.css(element, 'marginRight', true);
	      } else {
	        value -= fn.css(element, 'paddingLeft', true) + fn.css(element, 'paddingRight', true) + fn.css(element, 'borderLeftWidth', true) + fn.css(element, 'borderRightWidth', true);
	      }
	      return value;
	    };
	
	    return fn;
	
	  }]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {/**
	 * angular-strap
	 * @version v2.1.6 - 2015-01-11
	 * @link http://mgcrea.github.io/angular-strap
	 * @author Olivier Louvignes (olivier@mg-crea.com)
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
	'use strict';
	
	angular.module('mgcrea.ngStrap.popover', ['mgcrea.ngStrap.tooltip'])
	
	  .provider('$popover', function() {
	
	    var defaults = this.defaults = {
	      animation: 'am-fade',
	      customClass: '',
	      container: false,
	      target: false,
	      placement: 'right',
	      template: 'popover/popover.tpl.html',
	      contentTemplate: false,
	      trigger: 'click',
	      keyboard: true,
	      html: false,
	      title: '',
	      content: '',
	      delay: 0,
	      autoClose: false
	    };
	
	    this.$get = ["$tooltip", function($tooltip) {
	
	      function PopoverFactory(element, config) {
	
	        // Common vars
	        var options = angular.extend({}, defaults, config);
	
	        var $popover = $tooltip(element, options);
	
	        // Support scope as string options [/*title, */content]
	        if(options.content) {
	          $popover.$scope.content = options.content;
	        }
	
	        return $popover;
	
	      }
	
	      return PopoverFactory;
	
	    }];
	
	  })
	
	  .directive('bsPopover', ["$window", "$sce", "$popover", function($window, $sce, $popover) {
	
	    var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
	
	    return {
	      restrict: 'EAC',
	      scope: true,
	      link: function postLink(scope, element, attr) {
	
	        // Directive options
	        var options = {scope: scope};
	        angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'customClass', 'autoClose', 'id'], function(key) {
	          if(angular.isDefined(attr[key])) options[key] = attr[key];
	        });
	
	        // Support scope as data-attrs
	        angular.forEach(['title', 'content'], function(key) {
	          attr[key] && attr.$observe(key, function(newValue, oldValue) {
	            scope[key] = $sce.trustAsHtml(newValue);
	            angular.isDefined(oldValue) && requestAnimationFrame(function() {
	              popover && popover.$applyPlacement();
	            });
	          });
	        });
	
	        // Support scope as an object
	        attr.bsPopover && scope.$watch(attr.bsPopover, function(newValue, oldValue) {
	          if(angular.isObject(newValue)) {
	            angular.extend(scope, newValue);
	          } else {
	            scope.content = newValue;
	          }
	          angular.isDefined(oldValue) && requestAnimationFrame(function() {
	            popover && popover.$applyPlacement();
	          });
	        }, true);
	
	        // Visibility binding support
	        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
	          if(!popover || !angular.isDefined(newValue)) return;
	          if(angular.isString(newValue)) newValue = !!newValue.match(/true|,?(popover),?/i);
	          newValue === true ? popover.show() : popover.hide();
	        });
	
	        // Initialize popover
	        var popover = $popover(element, options);
	
	        // Garbage collection
	        scope.$on('$destroy', function() {
	          if (popover) popover.destroy();
	          options = null;
	          popover = null;
	        });
	
	      }
	    };
	
	  }]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {/**
	 * angular-strap
	 * @version v2.1.6 - 2015-01-11
	 * @link http://mgcrea.github.io/angular-strap
	 * @author Olivier Louvignes (olivier@mg-crea.com)
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
	'use strict';
	
	angular.module('mgcrea.ngStrap.tooltip', ['mgcrea.ngStrap.helpers.dimensions'])
	
	  .provider('$tooltip', function() {
	
	    var defaults = this.defaults = {
	      animation: 'am-fade',
	      customClass: '',
	      prefixClass: 'tooltip',
	      prefixEvent: 'tooltip',
	      container: false,
	      target: false,
	      placement: 'top',
	      template: 'tooltip/tooltip.tpl.html',
	      contentTemplate: false,
	      trigger: 'hover focus',
	      keyboard: false,
	      html: false,
	      show: false,
	      title: '',
	      type: '',
	      delay: 0,
	      autoClose: false,
	      bsEnabled: true
	    };
	
	    this.$get = ["$window", "$rootScope", "$compile", "$q", "$templateCache", "$http", "$animate", "$sce", "dimensions", "$$rAF", "$timeout", function($window, $rootScope, $compile, $q, $templateCache, $http, $animate, $sce, dimensions, $$rAF, $timeout) {
	
	      var trim = String.prototype.trim;
	      var isTouch = 'createTouch' in $window.document;
	      var htmlReplaceRegExp = /ng-bind="/ig;
	      var $body = angular.element($window.document);
	
	      function TooltipFactory(element, config) {
	
	        var $tooltip = {};
	
	        // Common vars
	        var nodeName = element[0].nodeName.toLowerCase();
	        var options = $tooltip.$options = angular.extend({}, defaults, config);
	        $tooltip.$promise = fetchTemplate(options.template);
	        var scope = $tooltip.$scope = options.scope && options.scope.$new() || $rootScope.$new();
	        if(options.delay && angular.isString(options.delay)) {
	          var split = options.delay.split(',').map(parseFloat);
	          options.delay = split.length > 1 ? {show: split[0], hide: split[1]} : split[0];
	        }
	
	        // store $id to identify the triggering element in events
	        // give priority to options.id, otherwise, try to use
	        // element id if defined
	        $tooltip.$id = options.id || element.attr('id') || '';
	
	        // Support scope as string options
	        if(options.title) {
	          scope.title = $sce.trustAsHtml(options.title);
	        }
	
	        // Provide scope helpers
	        scope.$setEnabled = function(isEnabled) {
	          scope.$$postDigest(function() {
	            $tooltip.setEnabled(isEnabled);
	          });
	        };
	        scope.$hide = function() {
	          scope.$$postDigest(function() {
	            $tooltip.hide();
	          });
	        };
	        scope.$show = function() {
	          scope.$$postDigest(function() {
	            $tooltip.show();
	          });
	        };
	        scope.$toggle = function() {
	          scope.$$postDigest(function() {
	            $tooltip.toggle();
	          });
	        };
	        // Publish isShown as a protected var on scope
	        $tooltip.$isShown = scope.$isShown = false;
	
	        // Private vars
	        var timeout, hoverState;
	
	        // Support contentTemplate option
	        if(options.contentTemplate) {
	          $tooltip.$promise = $tooltip.$promise.then(function(template) {
	            var templateEl = angular.element(template);
	            return fetchTemplate(options.contentTemplate)
	            .then(function(contentTemplate) {
	              var contentEl = findElement('[ng-bind="content"]', templateEl[0]);
	              if(!contentEl.length) contentEl = findElement('[ng-bind="title"]', templateEl[0]);
	              contentEl.removeAttr('ng-bind').html(contentTemplate);
	              return templateEl[0].outerHTML;
	            });
	          });
	        }
	
	        // Fetch, compile then initialize tooltip
	        var tipLinker, tipElement, tipTemplate, tipContainer, tipScope;
	        $tooltip.$promise.then(function(template) {
	          if(angular.isObject(template)) template = template.data;
	          if(options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
	          template = trim.apply(template);
	          tipTemplate = template;
	          tipLinker = $compile(template);
	          $tooltip.init();
	        });
	
	        $tooltip.init = function() {
	
	          // Options: delay
	          if (options.delay && angular.isNumber(options.delay)) {
	            options.delay = {
	              show: options.delay,
	              hide: options.delay
	            };
	          }
	
	          // Replace trigger on touch devices ?
	          // if(isTouch && options.trigger === defaults.trigger) {
	          //   options.trigger.replace(/hover/g, 'click');
	          // }
	
	          // Options : container
	          if(options.container === 'self') {
	            tipContainer = element;
	          } else if(angular.isElement(options.container)) {
	            tipContainer = options.container;
	          } else if(options.container) {
	            tipContainer = findElement(options.container);
	          }
	
	          // Options: trigger
	          bindTriggerEvents();
	
	          // Options: target
	          if(options.target) {
	            options.target = angular.isElement(options.target) ? options.target : findElement(options.target);
	          }
	
	          // Options: show
	          if(options.show) {
	            scope.$$postDigest(function() {
	              options.trigger === 'focus' ? element[0].focus() : $tooltip.show();
	            });
	          }
	
	        };
	
	        $tooltip.destroy = function() {
	
	          // Unbind events
	          unbindTriggerEvents();
	
	          // Remove element
	          destroyTipElement();
	
	          // Destroy scope
	          scope.$destroy();
	
	        };
	
	        $tooltip.enter = function() {
	
	          clearTimeout(timeout);
	          hoverState = 'in';
	          if (!options.delay || !options.delay.show) {
	            return $tooltip.show();
	          }
	
	          timeout = setTimeout(function() {
	            if (hoverState ==='in') $tooltip.show();
	          }, options.delay.show);
	
	        };
	
	        $tooltip.show = function() {
	          if (!options.bsEnabled || $tooltip.$isShown) return;
	
	          scope.$emit(options.prefixEvent + '.show.before', $tooltip);
	          var parent, after;
	          if (options.container) {
	            parent = tipContainer;
	            if (tipContainer[0].lastChild) {
	              after = angular.element(tipContainer[0].lastChild);
	            } else {
	              after = null;
	            }
	          } else {
	            parent = null;
	            after = element;
	          }
	
	
	          // Hide any existing tipElement
	          if(tipElement) destroyTipElement();
	          // Fetch a cloned element linked from template
	          tipScope = $tooltip.$scope.$new();
	          tipElement = $tooltip.$element = tipLinker(tipScope, function(clonedElement, scope) {});
	
	          // Set the initial positioning.  Make the tooltip invisible
	          // so IE doesn't try to focus on it off screen.
	          tipElement.css({top: '-9999px', left: '-9999px', display: 'block', visibility: 'hidden'});
	
	          // Options: animation
	          if(options.animation) tipElement.addClass(options.animation);
	          // Options: type
	          if(options.type) tipElement.addClass(options.prefixClass + '-' + options.type);
	          // Options: custom classes
	          if(options.customClass) tipElement.addClass(options.customClass);
	
	          // Support v1.3+ $animate
	          // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
	          var promise = $animate.enter(tipElement, parent, after, enterAnimateCallback);
	          if(promise && promise.then) promise.then(enterAnimateCallback);
	
	          $tooltip.$isShown = scope.$isShown = true;
	          safeDigest(scope);
	          $$rAF(function () {
	            $tooltip.$applyPlacement();
	
	            // Once placed, make the tooltip visible
	            if(tipElement) tipElement.css({visibility: 'visible'});
	          }); // var a = bodyEl.offsetWidth + 1; ?
	
	          // Bind events
	          if(options.keyboard) {
	            if(options.trigger !== 'focus') {
	              $tooltip.focus();
	            }
	            bindKeyboardEvents();
	          }
	
	          if(options.autoClose) {
	            bindAutoCloseEvents();
	          }
	
	        };
	
	        function enterAnimateCallback() {
	          scope.$emit(options.prefixEvent + '.show', $tooltip);
	        }
	
	        $tooltip.leave = function() {
	
	          clearTimeout(timeout);
	          hoverState = 'out';
	          if (!options.delay || !options.delay.hide) {
	            return $tooltip.hide();
	          }
	          timeout = setTimeout(function () {
	            if (hoverState === 'out') {
	              $tooltip.hide();
	            }
	          }, options.delay.hide);
	
	        };
	
	        var _blur;
	        var _tipToHide;
	        $tooltip.hide = function(blur) {
	
	          if(!$tooltip.$isShown) return;
	          scope.$emit(options.prefixEvent + '.hide.before', $tooltip);
	
	          // store blur value for leaveAnimateCallback to use
	          _blur = blur;
	
	          // store current tipElement reference to use
	          // in leaveAnimateCallback
	          _tipToHide = tipElement;
	
	          // Support v1.3+ $animate
	          // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
	          var promise = $animate.leave(tipElement, leaveAnimateCallback);
	          if(promise && promise.then) promise.then(leaveAnimateCallback);
	
	          $tooltip.$isShown = scope.$isShown = false;
	          safeDigest(scope);
	
	          // Unbind events
	          if(options.keyboard && tipElement !== null) {
	            unbindKeyboardEvents();
	          }
	
	          if(options.autoClose && tipElement !== null) {
	            unbindAutoCloseEvents();
	          }
	        };
	
	        function leaveAnimateCallback() {
	          scope.$emit(options.prefixEvent + '.hide', $tooltip);
	
	          // check if current tipElement still references
	          // the same element when hide was called
	          if (tipElement === _tipToHide) {
	            // Allow to blur the input when hidden, like when pressing enter key
	            if(_blur && options.trigger === 'focus') {
	              return element[0].blur();
	            }
	
	            // clean up child scopes
	            destroyTipElement();
	          }
	        }
	
	        $tooltip.toggle = function() {
	          $tooltip.$isShown ? $tooltip.leave() : $tooltip.enter();
	        };
	
	        $tooltip.focus = function() {
	          tipElement[0].focus();
	        };
	
	        $tooltip.setEnabled = function(isEnabled) {
	          options.bsEnabled = isEnabled;
	        };
	
	        // Protected methods
	
	        $tooltip.$applyPlacement = function() {
	          if(!tipElement) return;
	
	          // Determine if we're doing an auto or normal placement
	          var placement = options.placement,
	              autoToken = /\s?auto?\s?/i,
	              autoPlace  = autoToken.test(placement);
	
	          if (autoPlace) {
	            placement = placement.replace(autoToken, '') || defaults.placement;
	          }
	
	          // Need to add the position class before we get
	          // the offsets
	          tipElement.addClass(options.placement);
	
	          // Get the position of the target element
	          // and the height and width of the tooltip so we can center it.
	          var elementPosition = getPosition(),
	              tipWidth = tipElement.prop('offsetWidth'),
	              tipHeight = tipElement.prop('offsetHeight');
	
	          // If we're auto placing, we need to check the positioning
	          if (autoPlace) {
	            var originalPlacement = placement;
	            var container = options.container ? angular.element(document.querySelector(options.container)) : element.parent();
	            var containerPosition = getPosition(container);
	
	            // Determine if the vertical placement
	            if (originalPlacement.indexOf('bottom') >= 0 && elementPosition.bottom + tipHeight > containerPosition.bottom) {
	              placement = originalPlacement.replace('bottom', 'top');
	            } else if (originalPlacement.indexOf('top') >= 0 && elementPosition.top - tipHeight < containerPosition.top) {
	              placement = originalPlacement.replace('top', 'bottom');
	            }
	
	            // Determine the horizontal placement
	            // The exotic placements of left and right are opposite of the standard placements.  Their arrows are put on the left/right
	            // and flow in the opposite direction of their placement.
	            if ((originalPlacement === 'right' || originalPlacement === 'bottom-left' || originalPlacement === 'top-left') &&
	                elementPosition.right + tipWidth > containerPosition.width) {
	
	              placement = originalPlacement === 'right' ? 'left' : placement.replace('left', 'right');
	            } else if ((originalPlacement === 'left' || originalPlacement === 'bottom-right' || originalPlacement === 'top-right') &&
	                elementPosition.left - tipWidth < containerPosition.left) {
	
	              placement = originalPlacement === 'left' ? 'right' : placement.replace('right', 'left');
	            }
	
	            tipElement.removeClass(originalPlacement).addClass(placement);
	          }
	
	          // Get the tooltip's top and left coordinates to center it with this directive.
	          var tipPosition = getCalculatedOffset(placement, elementPosition, tipWidth, tipHeight);
	          applyPlacementCss(tipPosition.top, tipPosition.left);
	        };
	
	        $tooltip.$onKeyUp = function(evt) {
	          if (evt.which === 27 && $tooltip.$isShown) {
	            $tooltip.hide();
	            evt.stopPropagation();
	          }
	        };
	
	        $tooltip.$onFocusKeyUp = function(evt) {
	          if (evt.which === 27) {
	            element[0].blur();
	            evt.stopPropagation();
	          }
	        };
	
	        $tooltip.$onFocusElementMouseDown = function(evt) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          // Some browsers do not auto-focus buttons (eg. Safari)
	          $tooltip.$isShown ? element[0].blur() : element[0].focus();
	        };
	
	        // bind/unbind events
	        function bindTriggerEvents() {
	          var triggers = options.trigger.split(' ');
	          angular.forEach(triggers, function(trigger) {
	            if(trigger === 'click') {
	              element.on('click', $tooltip.toggle);
	            } else if(trigger !== 'manual') {
	              element.on(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
	              element.on(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
	              nodeName === 'button' && trigger !== 'hover' && element.on(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
	            }
	          });
	        }
	
	        function unbindTriggerEvents() {
	          var triggers = options.trigger.split(' ');
	          for (var i = triggers.length; i--;) {
	            var trigger = triggers[i];
	            if(trigger === 'click') {
	              element.off('click', $tooltip.toggle);
	            } else if(trigger !== 'manual') {
	              element.off(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
	              element.off(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
	              nodeName === 'button' && trigger !== 'hover' && element.off(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
	            }
	          }
	        }
	
	        function bindKeyboardEvents() {
	          if(options.trigger !== 'focus') {
	            tipElement.on('keyup', $tooltip.$onKeyUp);
	          } else {
	            element.on('keyup', $tooltip.$onFocusKeyUp);
	          }
	        }
	
	        function unbindKeyboardEvents() {
	          if(options.trigger !== 'focus') {
	            tipElement.off('keyup', $tooltip.$onKeyUp);
	          } else {
	            element.off('keyup', $tooltip.$onFocusKeyUp);
	          }
	        }
	
	        var _autoCloseEventsBinded = false;
	        function bindAutoCloseEvents() {
	          // use timeout to hookup the events to prevent
	          // event bubbling from being processed imediately.
	          $timeout(function() {
	            // Stop propagation when clicking inside tooltip
	            tipElement.on('click', stopEventPropagation);
	
	            // Hide when clicking outside tooltip
	            $body.on('click', $tooltip.hide);
	
	            _autoCloseEventsBinded = true;
	          }, 0, false);
	        }
	
	        function unbindAutoCloseEvents() {
	          if (_autoCloseEventsBinded) {
	            tipElement.off('click', stopEventPropagation);
	            $body.off('click', $tooltip.hide);
	            _autoCloseEventsBinded = false;
	          }
	        }
	
	        function stopEventPropagation(event) {
	          event.stopPropagation();
	        }
	
	        // Private methods
	
	        function getPosition($element) {
	          $element = $element || (options.target || element);
	
	          var el = $element[0];
	
	          var elRect = el.getBoundingClientRect();
	          if (elRect.width === null) {
	            // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	            elRect = angular.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
	          }
	
	          var elPos;
	          if (options.container === 'body') {
	            elPos = dimensions.offset(el);
	          } else {
	            elPos = dimensions.position(el);
	          }
	
	          return angular.extend({}, elRect, elPos);
	        }
	
	        function getCalculatedOffset(placement, position, actualWidth, actualHeight) {
	          var offset;
	          var split = placement.split('-');
	
	          switch (split[0]) {
	          case 'right':
	            offset = {
	              top: position.top + position.height / 2 - actualHeight / 2,
	              left: position.left + position.width
	            };
	            break;
	          case 'bottom':
	            offset = {
	              top: position.top + position.height,
	              left: position.left + position.width / 2 - actualWidth / 2
	            };
	            break;
	          case 'left':
	            offset = {
	              top: position.top + position.height / 2 - actualHeight / 2,
	              left: position.left - actualWidth
	            };
	            break;
	          default:
	            offset = {
	              top: position.top - actualHeight,
	              left: position.left + position.width / 2 - actualWidth / 2
	            };
	            break;
	          }
	
	          if(!split[1]) {
	            return offset;
	          }
	
	          // Add support for corners @todo css
	          if(split[0] === 'top' || split[0] === 'bottom') {
	            switch (split[1]) {
	            case 'left':
	              offset.left = position.left;
	              break;
	            case 'right':
	              offset.left =  position.left + position.width - actualWidth;
	            }
	          } else if(split[0] === 'left' || split[0] === 'right') {
	            switch (split[1]) {
	            case 'top':
	              offset.top = position.top - actualHeight;
	              break;
	            case 'bottom':
	              offset.top = position.top + position.height;
	            }
	          }
	
	          return offset;
	        }
	
	        function applyPlacementCss(top, left) {
	          tipElement.css({ top: top + 'px', left: left + 'px' });
	        }
	
	        function destroyTipElement() {
	          // Cancel pending callbacks
	          clearTimeout(timeout);
	
	          if($tooltip.$isShown && tipElement !== null) {
	            if(options.autoClose) {
	              unbindAutoCloseEvents();
	            }
	
	            if(options.keyboard) {
	              unbindKeyboardEvents();
	            }
	          }
	
	          if(tipScope) {
	            tipScope.$destroy();
	            tipScope = null;
	          }
	
	          if(tipElement) {
	            tipElement.remove();
	            tipElement = $tooltip.$element = null;
	          }
	        }
	
	        return $tooltip;
	
	      }
	
	      // Helper functions
	
	      function safeDigest(scope) {
	        scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
	      }
	
	      function findElement(query, element) {
	        return angular.element((element || document).querySelectorAll(query));
	      }
	
	      var fetchPromises = {};
	      function fetchTemplate(template) {
	        if(fetchPromises[template]) return fetchPromises[template];
	        return (fetchPromises[template] = $q.when($templateCache.get(template) || $http.get(template))
	        .then(function(res) {
	          if(angular.isObject(res)) {
	            $templateCache.put(template, res.data);
	            return res.data;
	          }
	          return res;
	        }));
	      }
	
	      return TooltipFactory;
	
	    }];
	
	  })
	
	  .directive('bsTooltip', ["$window", "$location", "$sce", "$tooltip", "$$rAF", function($window, $location, $sce, $tooltip, $$rAF) {
	
	    return {
	      restrict: 'EAC',
	      scope: true,
	      link: function postLink(scope, element, attr, transclusion) {
	
	        // Directive options
	        var options = {scope: scope};
	        angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'backdropAnimation', 'type', 'customClass', 'id'], function(key) {
	          if(angular.isDefined(attr[key])) options[key] = attr[key];
	        });
	
	        // overwrite inherited title value when no value specified
	        // fix for angular 1.3.1 531a8de72c439d8ddd064874bf364c00cedabb11
	        if (!scope.hasOwnProperty('title')){
	          scope.title = '';
	        }
	
	        // Observe scope attributes for change
	        attr.$observe('title', function(newValue) {
	          if (angular.isDefined(newValue) || !scope.hasOwnProperty('title')) {
	            var oldValue = scope.title;
	            scope.title = $sce.trustAsHtml(newValue);
	            angular.isDefined(oldValue) && $$rAF(function() {
	              tooltip && tooltip.$applyPlacement();
	            });
	          }
	        });
	
	        // Support scope as an object
	        attr.bsTooltip && scope.$watch(attr.bsTooltip, function(newValue, oldValue) {
	          if(angular.isObject(newValue)) {
	            angular.extend(scope, newValue);
	          } else {
	            scope.title = newValue;
	          }
	          angular.isDefined(oldValue) && $$rAF(function() {
	            tooltip && tooltip.$applyPlacement();
	          });
	        }, true);
	
	        // Visibility binding support
	        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
	          if(!tooltip || !angular.isDefined(newValue)) return;
	          if(angular.isString(newValue)) newValue = !!newValue.match(/true|,?(tooltip),?/i);
	          newValue === true ? tooltip.show() : tooltip.hide();
	        });
	
	        // Enabled binding support
	        attr.bsEnabled && scope.$watch(attr.bsEnabled, function(newValue, oldValue) {
	          // console.warn('scope.$watch(%s)', attr.bsEnabled, newValue, oldValue);
	          if(!tooltip || !angular.isDefined(newValue)) return;
	          if(angular.isString(newValue)) newValue = !!newValue.match(/true|1|,?(tooltip),?/i);
	          newValue === false ? tooltip.setEnabled(false) : tooltip.setEnabled(true);
	        });
	
	        // Initialize popover
	        var tooltip = $tooltip(element, options);
	
	        // Garbage collection
	        scope.$on('$destroy', function() {
	          if(tooltip) tooltip.destroy();
	          options = null;
	          tooltip = null;
	        });
	
	      }
	    };
	
	  }]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWZjMTY0Y2M0NjVkMWFjZDk1MjYiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvYnV0dG9ucy9idXR0b25zLmpzIiwid2VicGFjazovLy8uL3NyYy91aS10ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmFwLXRlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3JhdGluZy9yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvdGFicy90YWJzLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9wb3NpdGlvbi9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9hbGVydC9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvY29sbGFwc2UvY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvZGF0ZXBhcnNlci9kYXRlcGFyc2VyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvZHJvcGRvd24vZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyLXN0cmFwL2Rpc3QvbW9kdWxlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhci1zdHJhcC9kaXN0L21vZHVsZXMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXItc3RyYXAvZGlzdC9tb2R1bGVzL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0EsbUNBQWtDLDBDQUEwQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUNwU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxXQUFXO0FBQ3ZCLGFBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7Ozs7QUN4RkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNEI7QUFDNUI7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsRUFBQzs7Ozs7Ozs7QUN0dUJEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQSxzQkFBcUIsOEJBQThCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlFQUFnRTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7O0FDdFNEOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsUUFBUTs7QUFFN0IsNERBQTJELFNBQVM7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7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QTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQU87O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF1QyxLQUFLO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhFQUE2RTtBQUM3RSx1Q0FBc0MsV0FBVyx3RUFBd0U7QUFDekg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7O0FBRUEsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTBCLHFDQUFxQztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBOztBQUVBLE1BQUs7O0FBRUwsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBLElBQUc7Ozs7Ozs7O0FDanJCSCwwQiIsImZpbGUiOiJidWlsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMWZjMTY0Y2M0NjVkMWFjZDk1MjZcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmJ1dHRvbnMnLCBbXSlcblxuLmNvbnN0YW50KCdidXR0b25Db25maWcnLCB7XG4gIGFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcbiAgdG9nZ2xlRXZlbnQ6ICdjbGljaydcbn0pXG5cbi5jb250cm9sbGVyKCdCdXR0b25zQ29udHJvbGxlcicsIFsnYnV0dG9uQ29uZmlnJywgZnVuY3Rpb24oYnV0dG9uQ29uZmlnKSB7XG4gIHRoaXMuYWN0aXZlQ2xhc3MgPSBidXR0b25Db25maWcuYWN0aXZlQ2xhc3MgfHwgJ2FjdGl2ZSc7XG4gIHRoaXMudG9nZ2xlRXZlbnQgPSBidXR0b25Db25maWcudG9nZ2xlRXZlbnQgfHwgJ2NsaWNrJztcbn1dKVxuXG4uZGlyZWN0aXZlKCdidG5SYWRpbycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiBbJ2J0blJhZGlvJywgJ25nTW9kZWwnXSxcbiAgICBjb250cm9sbGVyOiAnQnV0dG9uc0NvbnRyb2xsZXInLFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICB2YXIgYnV0dG9uc0N0cmwgPSBjdHJsc1swXSwgbmdNb2RlbEN0cmwgPSBjdHJsc1sxXTtcblxuICAgICAgLy9tb2RlbCAtPiBVSVxuICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhidXR0b25zQ3RybC5hY3RpdmVDbGFzcywgYW5ndWxhci5lcXVhbHMobmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUsIHNjb3BlLiRldmFsKGF0dHJzLmJ0blJhZGlvKSkpO1xuICAgICAgfTtcblxuICAgICAgLy91aS0+bW9kZWxcbiAgICAgIGVsZW1lbnQuYmluZChidXR0b25zQ3RybC50b2dnbGVFdmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNBY3RpdmUgPSBlbGVtZW50Lmhhc0NsYXNzKGJ1dHRvbnNDdHJsLmFjdGl2ZUNsYXNzKTtcblxuICAgICAgICBpZiAoIWlzQWN0aXZlIHx8IGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLnVuY2hlY2thYmxlKSkge1xuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKGlzQWN0aXZlID8gbnVsbCA6IHNjb3BlLiRldmFsKGF0dHJzLmJ0blJhZGlvKSk7XG4gICAgICAgICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ2J0bkNoZWNrYm94JywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmU6IFsnYnRuQ2hlY2tib3gnLCAnbmdNb2RlbCddLFxuICAgIGNvbnRyb2xsZXI6ICdCdXR0b25zQ29udHJvbGxlcicsXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciBidXR0b25zQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBmdW5jdGlvbiBnZXRUcnVlVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGF0dHJzLmJ0bkNoZWNrYm94VHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldEZhbHNlVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGF0dHJzLmJ0bkNoZWNrYm94RmFsc2UsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0Q2hlY2tib3hWYWx1ZShhdHRyaWJ1dGVWYWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciB2YWwgPSBzY29wZS4kZXZhbChhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh2YWwpID8gdmFsIDogZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvL21vZGVsIC0+IFVJXG4gICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKGJ1dHRvbnNDdHJsLmFjdGl2ZUNsYXNzLCBhbmd1bGFyLmVxdWFscyhuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSwgZ2V0VHJ1ZVZhbHVlKCkpKTtcbiAgICAgIH07XG5cbiAgICAgIC8vdWktPm1vZGVsXG4gICAgICBlbGVtZW50LmJpbmQoYnV0dG9uc0N0cmwudG9nZ2xlRXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKGVsZW1lbnQuaGFzQ2xhc3MoYnV0dG9uc0N0cmwuYWN0aXZlQ2xhc3MpID8gZ2V0RmFsc2VWYWx1ZSgpIDogZ2V0VHJ1ZVZhbHVlKCkpO1xuICAgICAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9idXR0b25zL2J1dHRvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZShcImFyaS51aS5jb3JlLnVpLWJvb3RzdHJhcC10ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG4gICAgPGg0IGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxuICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi10b2dnbGVcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVPcGVuKClcXFwiIGFjY29yZGlvbi10cmFuc2NsdWRlPVxcXCJoZWFkaW5nXFxcIj48c3BhbiBuZy1jbGFzcz1cXFwie1xcJ3RleHQtbXV0ZWRcXCc6IGlzRGlzYWJsZWR9XFxcIj57e2hlYWRpbmd9fTwvc3Bhbj48L2E+XFxuICAgIDwvaDQ+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBjb2xsYXBzZT1cXFwiIWlzT3BlblxcXCI+XFxuXHQgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInBhbmVsLWdyb3VwXFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2FsZXJ0L2FsZXJ0Lmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImFsZXJ0XFxcIiBuZy1jbGFzcz1cXFwiW1xcJ2FsZXJ0LVxcJyArICh0eXBlIHx8IFxcJ3dhcm5pbmdcXCcpLCBjbG9zZWFibGUgPyBcXCdhbGVydC1kaXNtaXNzYWJsZVxcJyA6IG51bGxdXFxcIiByb2xlPVxcXCJhbGVydFxcXCI+XFxuICAgIDxidXR0b24gbmctc2hvdz1cXFwiY2xvc2VhYmxlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNsb3NlKClcXFwiPlxcbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8ZGl2IG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmh0bWxcIixcIjxkaXYgbmctc3dpdGNoPVxcXCJkYXRlcGlja2VyTW9kZVxcXCIgcm9sZT1cXFwiYXBwbGljYXRpb25cXFwiIG5nLWtleWRvd249XFxcImtleWRvd24oJGV2ZW50KVxcXCI+XFxuICA8ZGF5cGlja2VyIG5nLXN3aXRjaC13aGVuPVxcXCJkYXlcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48L2RheXBpY2tlcj5cXG4gIDxtb250aHBpY2tlciBuZy1zd2l0Y2gtd2hlbj1cXFwibW9udGhcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48L21vbnRocGlja2VyPlxcbiAgPHllYXJwaWNrZXIgbmctc3dpdGNoLXdoZW49XFxcInllYXJcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48L3llYXJwaWNrZXI+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbFwiLFwiPHRhYmxlIHJvbGU9XFxcImdyaWRcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwie3t1bmlxdWVJZH19LXRpdGxlXFxcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XFxcInt7YWN0aXZlRGF0ZUlkfX1cXFwiPlxcbiAgPHRoZWFkPlxcbiAgICA8dHI+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKC0xKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aCBjb2xzcGFuPVxcXCJ7ezUgKyBzaG93V2Vla3N9fVxcXCI+PGJ1dHRvbiBpZD1cXFwie3t1bmlxdWVJZH19LXRpdGxlXFxcIiByb2xlPVxcXCJoZWFkaW5nXFxcIiBhcmlhLWxpdmU9XFxcImFzc2VydGl2ZVxcXCIgYXJpYS1hdG9taWM9XFxcInRydWVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVNb2RlKClcXFwiIG5nLWRpc2FibGVkPVxcXCJkYXRlcGlja2VyTW9kZSA9PT0gbWF4TW9kZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiPjxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKDEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICA8L3RyPlxcbiAgICA8dHI+XFxuICAgICAgPHRoIG5nLXNob3c9XFxcInNob3dXZWVrc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48L3RoPlxcbiAgICAgIDx0aCBuZy1yZXBlYXQ9XFxcImxhYmVsIGluIGxhYmVscyB0cmFjayBieSAkaW5kZXhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PHNtYWxsIGFyaWEtbGFiZWw9XFxcInt7bGFiZWwuZnVsbH19XFxcIj57e2xhYmVsLmFiYnJ9fTwvc21hbGw+PC90aD5cXG4gICAgPC90cj5cXG4gIDwvdGhlYWQ+XFxuICA8dGJvZHk+XFxuICAgIDx0ciBuZy1yZXBlYXQ9XFxcInJvdyBpbiByb3dzIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxuICAgICAgPHRkIG5nLXNob3c9XFxcInNob3dXZWVrc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyIGg2XFxcIj48ZW0+e3sgd2Vla051bWJlcnNbJGluZGV4XSB9fTwvZW0+PC90ZD5cXG4gICAgICA8dGQgbmctcmVwZWF0PVxcXCJkdCBpbiByb3cgdHJhY2sgYnkgZHQuZGF0ZVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiByb2xlPVxcXCJncmlkY2VsbFxcXCIgaWQ9XFxcInt7ZHQudWlkfX1cXFwiIGFyaWEtZGlzYWJsZWQ9XFxcInt7ISFkdC5kaXNhYmxlZH19XFxcIiBuZy1jbGFzcz1cXFwiZHQuY3VzdG9tQ2xhc3NcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc21cXFwiIG5nLWNsYXNzPVxcXCJ7XFwnYnRuLWluZm9cXCc6IGR0LnNlbGVjdGVkLCBhY3RpdmU6IGlzQWN0aXZlKGR0KX1cXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QoZHQuZGF0ZSlcXFwiIG5nLWRpc2FibGVkPVxcXCJkdC5kaXNhYmxlZFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBuZy1jbGFzcz1cXFwie1xcJ3RleHQtbXV0ZWRcXCc6IGR0LnNlY29uZGFyeSwgXFwndGV4dC1pbmZvXFwnOiBkdC5jdXJyZW50fVxcXCI+e3tkdC5sYWJlbH19PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvZGF0ZXBpY2tlci9tb250aC5odG1sXCIsXCI8dGFibGUgcm9sZT1cXFwiZ3JpZFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cXFwie3thY3RpdmVEYXRlSWR9fVxcXCI+XFxuICA8dGhlYWQ+XFxuICAgIDx0cj5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoLTEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoPjxidXR0b24gaWQ9XFxcInt7dW5pcXVlSWR9fS10aXRsZVxcXCIgcm9sZT1cXFwiaGVhZGluZ1xcXCIgYXJpYS1saXZlPVxcXCJhc3NlcnRpdmVcXFwiIGFyaWEtYXRvbWljPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlTW9kZSgpXFxcIiBuZy1kaXNhYmxlZD1cXFwiZGF0ZXBpY2tlck1vZGUgPT09IG1heE1vZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCU7XFxcIj48c3Ryb25nPnt7dGl0bGV9fTwvc3Ryb25nPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0XFxcIiBuZy1jbGljaz1cXFwibW92ZSgxKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XFxcIj48L2k+PC9idXR0b24+PC90aD5cXG4gICAgPC90cj5cXG4gIDwvdGhlYWQ+XFxuICA8dGJvZHk+XFxuICAgIDx0ciBuZy1yZXBlYXQ9XFxcInJvdyBpbiByb3dzIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxuICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiZHQgaW4gcm93IHRyYWNrIGJ5IGR0LmRhdGVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgcm9sZT1cXFwiZ3JpZGNlbGxcXFwiIGlkPVxcXCJ7e2R0LnVpZH19XFxcIiBhcmlhLWRpc2FibGVkPVxcXCJ7eyEhZHQuZGlzYWJsZWR9fVxcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCU7XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGFzcz1cXFwie1xcJ2J0bi1pbmZvXFwnOiBkdC5zZWxlY3RlZCwgYWN0aXZlOiBpc0FjdGl2ZShkdCl9XFxcIiBuZy1jbGljaz1cXFwic2VsZWN0KGR0LmRhdGUpXFxcIiBuZy1kaXNhYmxlZD1cXFwiZHQuZGlzYWJsZWRcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PHNwYW4gbmctY2xhc3M9XFxcIntcXCd0ZXh0LWluZm9cXCc6IGR0LmN1cnJlbnR9XFxcIj57e2R0LmxhYmVsfX08L3NwYW4+PC9idXR0b24+XFxuICAgICAgPC90ZD5cXG4gICAgPC90cj5cXG4gIDwvdGJvZHk+XFxuPC90YWJsZT5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3BvcHVwLmh0bWxcIixcIjx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmctc3R5bGU9XFxcIntkaXNwbGF5OiAoaXNPcGVuICYmIFxcJ2Jsb2NrXFwnKSB8fCBcXCdub25lXFwnLCB0b3A6IHBvc2l0aW9uLnRvcCtcXCdweFxcJywgbGVmdDogcG9zaXRpb24ubGVmdCtcXCdweFxcJ31cXFwiIG5nLWtleWRvd249XFxcImtleWRvd24oJGV2ZW50KVxcXCI+XFxuXHQ8bGkgbmctdHJhbnNjbHVkZT48L2xpPlxcblx0PGxpIG5nLWlmPVxcXCJzaG93QnV0dG9uQmFyXFxcIiBzdHlsZT1cXFwicGFkZGluZzoxMHB4IDlweCAycHhcXFwiPlxcblx0XHQ8c3BhbiBjbGFzcz1cXFwiYnRuLWdyb3VwIHB1bGwtbGVmdFxcXCI+XFxuXHRcdFx0PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1pbmZvXFxcIiBuZy1jbGljaz1cXFwic2VsZWN0KFxcJ3RvZGF5XFwnKVxcXCI+e3sgZ2V0VGV4dChcXCdjdXJyZW50XFwnKSB9fTwvYnV0dG9uPlxcblx0XHRcdDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXFxcIiBuZy1jbGljaz1cXFwic2VsZWN0KG51bGwpXFxcIj57eyBnZXRUZXh0KFxcJ2NsZWFyXFwnKSB9fTwvYnV0dG9uPlxcblx0XHQ8L3NwYW4+XFxuXHRcdDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tc3VjY2VzcyBwdWxsLXJpZ2h0XFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+e3sgZ2V0VGV4dChcXCdjbG9zZVxcJykgfX08L2J1dHRvbj5cXG5cdDwvbGk+XFxuPC91bD5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3llYXIuaHRtbFwiLFwiPHRhYmxlIHJvbGU9XFxcImdyaWRcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwie3t1bmlxdWVJZH19LXRpdGxlXFxcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XFxcInt7YWN0aXZlRGF0ZUlkfX1cXFwiPlxcbiAgPHRoZWFkPlxcbiAgICA8dHI+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKC0xKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aCBjb2xzcGFuPVxcXCIzXFxcIj48YnV0dG9uIGlkPVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIHJvbGU9XFxcImhlYWRpbmdcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU1vZGUoKVxcXCIgbmctZGlzYWJsZWQ9XFxcImRhdGVwaWNrZXJNb2RlID09PSBtYXhNb2RlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO1xcXCI+PHN0cm9uZz57e3RpdGxlfX08L3N0cm9uZz48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoMSlcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFxcXCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgIDwvdHI+XFxuICA8L3RoZWFkPlxcbiAgPHRib2R5PlxcbiAgICA8dHIgbmctcmVwZWF0PVxcXCJyb3cgaW4gcm93cyB0cmFjayBieSAkaW5kZXhcXFwiPlxcbiAgICAgIDx0ZCBuZy1yZXBlYXQ9XFxcImR0IGluIHJvdyB0cmFjayBieSBkdC5kYXRlXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHJvbGU9XFxcImdyaWRjZWxsXFxcIiBpZD1cXFwie3tkdC51aWR9fVxcXCIgYXJpYS1kaXNhYmxlZD1cXFwie3shIWR0LmRpc2FibGVkfX1cXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xhc3M9XFxcIntcXCdidG4taW5mb1xcJzogZHQuc2VsZWN0ZWQsIGFjdGl2ZTogaXNBY3RpdmUoZHQpfVxcXCIgbmctY2xpY2s9XFxcInNlbGVjdChkdC5kYXRlKVxcXCIgbmctZGlzYWJsZWQ9XFxcImR0LmRpc2FibGVkXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxzcGFuIG5nLWNsYXNzPVxcXCJ7XFwndGV4dC1pbmZvXFwnOiBkdC5jdXJyZW50fVxcXCI+e3tkdC5sYWJlbH19PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWxcIixcIjx0YWJsZT5cXG5cdDx0Ym9keT5cXG5cdFx0PHRyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJpbmNyZW1lbnRIb3VycygpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXFxcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkPiZuYnNwOzwvdGQ+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJpbmNyZW1lbnRNaW51dGVzKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcXFwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cXFwic2hvd01lcmlkaWFuXFxcIj48L3RkPlxcblx0XHQ8L3RyPlxcblx0XHQ8dHI+XFxuXHRcdFx0PHRkIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2hhcy1lcnJvclxcJzogaW52YWxpZEhvdXJzfVxcXCI+XFxuXHRcdFx0XHQ8aW5wdXQgc3R5bGU9XFxcIndpZHRoOjUwcHg7XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuZy1tb2RlbD1cXFwiaG91cnNcXFwiIG5nLWNoYW5nZT1cXFwidXBkYXRlSG91cnMoKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclxcXCIgbmctcmVhZG9ubHk9XFxcInJlYWRvbmx5SW5wdXRcXFwiIG1heGxlbmd0aD1cXFwiMlxcXCI+XFxuXHRcdFx0PC90ZD5cXG5cdFx0XHQ8dGQ+OjwvdGQ+XFxuXHRcdFx0PHRkIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2hhcy1lcnJvclxcJzogaW52YWxpZE1pbnV0ZXN9XFxcIj5cXG5cdFx0XHRcdDxpbnB1dCBzdHlsZT1cXFwid2lkdGg6NTBweDtcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5nLW1vZGVsPVxcXCJtaW51dGVzXFxcIiBuZy1jaGFuZ2U9XFxcInVwZGF0ZU1pbnV0ZXMoKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclxcXCIgbmctcmVhZG9ubHk9XFxcInJlYWRvbmx5SW5wdXRcXFwiIG1heGxlbmd0aD1cXFwiMlxcXCI+XFxuXHRcdFx0PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cXFwic2hvd01lcmlkaWFuXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCB0ZXh0LWNlbnRlclxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU1lcmlkaWFuKClcXFwiPnt7bWVyaWRpYW59fTwvYnV0dG9uPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHRcdDx0ciBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcblx0XHRcdDx0ZD48YSBuZy1jbGljaz1cXFwiZGVjcmVtZW50SG91cnMoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlua1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXFxcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkPiZuYnNwOzwvdGQ+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJkZWNyZW1lbnRNaW51dGVzKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blxcXCI+PC9zcGFuPjwvYT48L3RkPlxcblx0XHRcdDx0ZCBuZy1zaG93PVxcXCJzaG93TWVyaWRpYW5cXFwiPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHQ8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYmFja2Ryb3BcXFwiXFxuICAgICBtb2RhbC1hbmltYXRpb24tY2xhc3M9XFxcImZhZGVcXFwiXFxuICAgICBuZy1jbGFzcz1cXFwie2luOiBhbmltYXRlfVxcXCJcXG4gICAgIG5nLXN0eWxlPVxcXCJ7XFwnei1pbmRleFxcJzogMTA0MCArIChpbmRleCAmJiAxIHx8IDApICsgaW5kZXgqMTB9XFxcIlxcbj48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9tb2RhbC93aW5kb3cuaHRtbFwiLFwiPGRpdiBtb2RhbC1yZW5kZXI9XFxcInt7JGlzUmVuZGVyZWR9fVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGNsYXNzPVxcXCJtb2RhbFxcXCJcXG4gICAgbW9kYWwtYW5pbWF0aW9uLWNsYXNzPVxcXCJmYWRlXFxcIlxcblx0bmctY2xhc3M9XFxcIntpbjogYW5pbWF0ZX1cXFwiIG5nLXN0eWxlPVxcXCJ7XFwnei1pbmRleFxcJzogMTA1MCArIGluZGV4KjEwLCBkaXNwbGF5OiBcXCdibG9ja1xcJ31cXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgkZXZlbnQpXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIiBuZy1jbGFzcz1cXFwic2l6ZSA/IFxcJ21vZGFsLVxcJyArIHNpemUgOiBcXCdcXCdcXFwiPjxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiIG1vZGFsLXRyYW5zY2x1ZGU+PC9kaXY+PC9kaXY+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvYmFyLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhclxcXCIgbmctY2xhc3M9XFxcInR5cGUgJiYgXFwncHJvZ3Jlc3MtYmFyLVxcJyArIHR5cGVcXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiBhcmlhLXZhbHVlbm93PVxcXCJ7e3ZhbHVlfX1cXFwiIGFyaWEtdmFsdWVtaW49XFxcIjBcXFwiIGFyaWEtdmFsdWVtYXg9XFxcInt7bWF4fX1cXFwiIG5nLXN0eWxlPVxcXCJ7d2lkdGg6IChwZXJjZW50IDwgMTAwID8gcGVyY2VudCA6IDEwMCkgKyBcXCclXFwnfVxcXCIgYXJpYS12YWx1ZXRleHQ9XFxcInt7cGVyY2VudCB8IG51bWJlcjowfX0lXFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhclxcXCIgbmctY2xhc3M9XFxcInR5cGUgJiYgXFwncHJvZ3Jlc3MtYmFyLVxcJyArIHR5cGVcXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiBhcmlhLXZhbHVlbm93PVxcXCJ7e3ZhbHVlfX1cXFwiIGFyaWEtdmFsdWVtaW49XFxcIjBcXFwiIGFyaWEtdmFsdWVtYXg9XFxcInt7bWF4fX1cXFwiIG5nLXN0eWxlPVxcXCJ7d2lkdGg6IChwZXJjZW50IDwgMTAwID8gcGVyY2VudCA6IDEwMCkgKyBcXCclXFwnfVxcXCIgYXJpYS12YWx1ZXRleHQ9XFxcInt7cGVyY2VudCB8IG51bWJlcjowfX0lXFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL3JhdGluZy9yYXRpbmcuaHRtbFwiLFwiPHNwYW4gbmctbW91c2VsZWF2ZT1cXFwicmVzZXQoKVxcXCIgbmcta2V5ZG93bj1cXFwib25LZXlkb3duKCRldmVudClcXFwiIHRhYmluZGV4PVxcXCIwXFxcIiByb2xlPVxcXCJzbGlkZXJcXFwiIGFyaWEtdmFsdWVtaW49XFxcIjBcXFwiIGFyaWEtdmFsdWVtYXg9XFxcInt7cmFuZ2UubGVuZ3RofX1cXFwiIGFyaWEtdmFsdWVub3c9XFxcInt7dmFsdWV9fVxcXCI+XFxuICAgIDxpIG5nLXJlcGVhdD1cXFwiciBpbiByYW5nZSB0cmFjayBieSAkaW5kZXhcXFwiIG5nLW1vdXNlZW50ZXI9XFxcImVudGVyKCRpbmRleCArIDEpXFxcIiBuZy1jbGljaz1cXFwicmF0ZSgkaW5kZXggKyAxKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvblxcXCIgbmctY2xhc3M9XFxcIiRpbmRleCA8IHZhbHVlICYmIChyLnN0YXRlT24gfHwgXFwnZ2x5cGhpY29uLXN0YXJcXCcpIHx8IChyLnN0YXRlT2ZmIHx8IFxcJ2dseXBoaWNvbi1zdGFyLWVtcHR5XFwnKVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+KHt7ICRpbmRleCA8IHZhbHVlID8gXFwnKlxcJyA6IFxcJyBcXCcgfX0pPC9zcGFuPlxcbiAgICA8L2k+XFxuPC9zcGFuPlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL3RhYnMvdGFiLmh0bWxcIixcIjxsaSBuZy1jbGFzcz1cXFwie2FjdGl2ZTogYWN0aXZlLCBkaXNhYmxlZDogZGlzYWJsZWR9XFxcIj5cXG4gIDxhIGhyZWYgbmctY2xpY2s9XFxcInNlbGVjdCgpXFxcIiB0YWItaGVhZGluZy10cmFuc2NsdWRlPnt7aGVhZGluZ319PC9hPlxcbjwvbGk+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvdGFicy90YWJzZXQuaHRtbFwiLFwiPGRpdj5cXG4gIDx1bCBjbGFzcz1cXFwibmF2IG5hdi17e3R5cGUgfHwgXFwndGFic1xcJ319XFxcIiBuZy1jbGFzcz1cXFwie1xcJ25hdi1zdGFja2VkXFwnOiB2ZXJ0aWNhbCwgXFwnbmF2LWp1c3RpZmllZFxcJzoganVzdGlmaWVkfVxcXCIgbmctdHJhbnNjbHVkZT48L3VsPlxcbiAgPGRpdiBjbGFzcz1cXFwidGFiLWNvbnRlbnRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWItcGFuZVxcXCIgXFxuICAgICAgICAgbmctcmVwZWF0PVxcXCJ0YWIgaW4gdGFic1xcXCIgXFxuICAgICAgICAgbmctY2xhc3M9XFxcInthY3RpdmU6IHRhYi5hY3RpdmV9XFxcIlxcbiAgICAgICAgIHRhYi1jb250ZW50LXRyYW5zY2x1ZGU9XFxcInRhYlxcXCI+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCIpO31dKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3VpLXRlbXBsYXRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKFwiYXJpLnVpLmNvcmUubmctc3RyYXAtdGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJwb3BvdmVyL3BvcG92ZXIudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInBvcG92ZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYXJyb3dcXFwiPjwvZGl2PlxcbiAgPGgzIGNsYXNzPVxcXCJwb3BvdmVyLXRpdGxlXFxcIiBuZy1iaW5kPVxcXCJ0aXRsZVxcXCIgbmctc2hvdz1cXFwidGl0bGVcXFwiPjwvaDM+XFxuICA8ZGl2IGNsYXNzPVxcXCJwb3BvdmVyLWNvbnRlbnRcXFwiIG5nLWJpbmQ9XFxcImNvbnRlbnRcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRvb2x0aXAvdG9vbHRpcC50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwidG9vbHRpcCBpblxcXCIgbmctc2hvdz1cXFwidGl0bGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1hcnJvd1xcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLWlubmVyXFxcIiBuZy1iaW5kPVxcXCJ0aXRsZVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCIpO31dKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0cmFwLXRlbXBsYXRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuYWNjb3JkaW9uJywgWyd1aS5ib290c3RyYXAuY29sbGFwc2UnXSlcblxuLmNvbnN0YW50KCdhY2NvcmRpb25Db25maWcnLCB7XG4gIGNsb3NlT3RoZXJzOiB0cnVlXG59KVxuXG4uY29udHJvbGxlcignQWNjb3JkaW9uQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICdhY2NvcmRpb25Db25maWcnLCBmdW5jdGlvbiAoJHNjb3BlLCAkYXR0cnMsIGFjY29yZGlvbkNvbmZpZykge1xuXG4gIC8vIFRoaXMgYXJyYXkga2VlcHMgdHJhY2sgb2YgdGhlIGFjY29yZGlvbiBncm91cHNcbiAgdGhpcy5ncm91cHMgPSBbXTtcblxuICAvLyBFbnN1cmUgdGhhdCBhbGwgdGhlIGdyb3VwcyBpbiB0aGlzIGFjY29yZGlvbiBhcmUgY2xvc2VkLCB1bmxlc3MgY2xvc2Utb3RoZXJzIGV4cGxpY2l0bHkgc2F5cyBub3QgdG9cbiAgdGhpcy5jbG9zZU90aGVycyA9IGZ1bmN0aW9uKG9wZW5Hcm91cCkge1xuICAgIHZhciBjbG9zZU90aGVycyA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5jbG9zZU90aGVycykgPyAkc2NvcGUuJGV2YWwoJGF0dHJzLmNsb3NlT3RoZXJzKSA6IGFjY29yZGlvbkNvbmZpZy5jbG9zZU90aGVycztcbiAgICBpZiAoIGNsb3NlT3RoZXJzICkge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuZ3JvdXBzLCBmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgaWYgKCBncm91cCAhPT0gb3Blbkdyb3VwICkge1xuICAgICAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgYWNjb3JkaW9uLWdyb3VwIGRpcmVjdGl2ZSB0byBhZGQgaXRzZWxmIHRvIHRoZSBhY2NvcmRpb25cbiAgdGhpcy5hZGRHcm91cCA9IGZ1bmN0aW9uKGdyb3VwU2NvcGUpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5ncm91cHMucHVzaChncm91cFNjb3BlKTtcblxuICAgIGdyb3VwU2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdGhhdC5yZW1vdmVHcm91cChncm91cFNjb3BlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUaGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhY2NvcmRpb24tZ3JvdXAgZGlyZWN0aXZlIHdoZW4gdG8gcmVtb3ZlIGl0c2VsZlxuICB0aGlzLnJlbW92ZUdyb3VwID0gZnVuY3Rpb24oZ3JvdXApIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcbiAgICBpZiAoIGluZGV4ICE9PSAtMSApIHtcbiAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuXG59XSlcblxuLy8gVGhlIGFjY29yZGlvbiBkaXJlY3RpdmUgc2ltcGx5IHNldHMgdXAgdGhlIGRpcmVjdGl2ZSBjb250cm9sbGVyXG4vLyBhbmQgYWRkcyBhbiBhY2NvcmRpb24gQ1NTIGNsYXNzIHRvIGl0c2VsZiBlbGVtZW50LlxuLmRpcmVjdGl2ZSgnYWNjb3JkaW9uJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OidFQScsXG4gICAgY29udHJvbGxlcjonQWNjb3JkaW9uQ29udHJvbGxlcicsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICByZXBsYWNlOiBmYWxzZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbCdcbiAgfTtcbn0pXG5cbi8vIFRoZSBhY2NvcmRpb24tZ3JvdXAgZGlyZWN0aXZlIGluZGljYXRlcyBhIGJsb2NrIG9mIGh0bWwgdGhhdCB3aWxsIGV4cGFuZCBhbmQgY29sbGFwc2UgaW4gYW4gYWNjb3JkaW9uXG4uZGlyZWN0aXZlKCdhY2NvcmRpb25Hcm91cCcsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmU6J15hY2NvcmRpb24nLCAgICAgICAgIC8vIFdlIG5lZWQgdGhpcyBkaXJlY3RpdmUgdG8gYmUgaW5zaWRlIGFuIGFjY29yZGlvblxuICAgIHJlc3RyaWN0OidFQScsXG4gICAgdHJhbnNjbHVkZTp0cnVlLCAgICAgICAgICAgICAgLy8gSXQgdHJhbnNjbHVkZXMgdGhlIGNvbnRlbnRzIG9mIHRoZSBkaXJlY3RpdmUgaW50byB0aGUgdGVtcGxhdGVcbiAgICByZXBsYWNlOiB0cnVlLCAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBkaXJlY3RpdmUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSB0ZW1wbGF0ZVxuICAgIHRlbXBsYXRlVXJsOid0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICBoZWFkaW5nOiAnQCcsICAgICAgICAgICAgICAgLy8gSW50ZXJwb2xhdGUgdGhlIGhlYWRpbmcgYXR0cmlidXRlIG9udG8gdGhpcyBzY29wZVxuICAgICAgaXNPcGVuOiAnPT8nLFxuICAgICAgaXNEaXNhYmxlZDogJz0/J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldEhlYWRpbmcgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGVhZGluZyA9IGVsZW1lbnQ7XG4gICAgICB9O1xuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBhY2NvcmRpb25DdHJsKSB7XG4gICAgICBhY2NvcmRpb25DdHJsLmFkZEdyb3VwKHNjb3BlKTtcblxuICAgICAgc2NvcGUuJHdhdGNoKCdpc09wZW4nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoIHZhbHVlICkge1xuICAgICAgICAgIGFjY29yZGlvbkN0cmwuY2xvc2VPdGhlcnMoc2NvcGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2NvcGUudG9nZ2xlT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoICFzY29wZS5pc0Rpc2FibGVkICkge1xuICAgICAgICAgIHNjb3BlLmlzT3BlbiA9ICFzY29wZS5pc09wZW47XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufSlcblxuLy8gVXNlIGFjY29yZGlvbi1oZWFkaW5nIGJlbG93IGFuIGFjY29yZGlvbi1ncm91cCB0byBwcm92aWRlIGEgaGVhZGluZyBjb250YWluaW5nIEhUTUxcbi8vIDxhY2NvcmRpb24tZ3JvdXA+XG4vLyAgIDxhY2NvcmRpb24taGVhZGluZz5IZWFkaW5nIGNvbnRhaW5pbmcgSFRNTCAtIDxpbWcgc3JjPVwiLi4uXCI+PC9hY2NvcmRpb24taGVhZGluZz5cbi8vIDwvYWNjb3JkaW9uLWdyb3VwPlxuLmRpcmVjdGl2ZSgnYWNjb3JkaW9uSGVhZGluZycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsICAgLy8gR3JhYiB0aGUgY29udGVudHMgdG8gYmUgdXNlZCBhcyB0aGUgaGVhZGluZ1xuICAgIHRlbXBsYXRlOiAnJywgICAgICAgLy8gSW4gZWZmZWN0IHJlbW92ZSB0aGlzIGVsZW1lbnQhXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICByZXF1aXJlOiAnXmFjY29yZGlvbkdyb3VwJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0ciwgYWNjb3JkaW9uR3JvdXBDdHJsLCB0cmFuc2NsdWRlKSB7XG4gICAgICAvLyBQYXNzIHRoZSBoZWFkaW5nIHRvIHRoZSBhY2NvcmRpb24tZ3JvdXAgY29udHJvbGxlclxuICAgICAgLy8gc28gdGhhdCBpdCBjYW4gYmUgdHJhbnNjbHVkZWQgaW50byB0aGUgcmlnaHQgcGxhY2UgaW4gdGhlIHRlbXBsYXRlXG4gICAgICAvLyBbVGhlIHNlY29uZCBwYXJhbWV0ZXIgdG8gdHJhbnNjbHVkZSBjYXVzZXMgdGhlIGVsZW1lbnRzIHRvIGJlIGNsb25lZCBzbyB0aGF0IHRoZXkgd29yayBpbiBuZy1yZXBlYXRdXG4gICAgICBhY2NvcmRpb25Hcm91cEN0cmwuc2V0SGVhZGluZyh0cmFuc2NsdWRlKHNjb3BlLCBhbmd1bGFyLm5vb3ApKTtcbiAgICB9XG4gIH07XG59KVxuXG4vLyBVc2UgaW4gdGhlIGFjY29yZGlvbi1ncm91cCB0ZW1wbGF0ZSB0byBpbmRpY2F0ZSB3aGVyZSB5b3Ugd2FudCB0aGUgaGVhZGluZyB0byBiZSB0cmFuc2NsdWRlZFxuLy8gWW91IG11c3QgcHJvdmlkZSB0aGUgcHJvcGVydHkgb24gdGhlIGFjY29yZGlvbi1ncm91cCBjb250cm9sbGVyIHRoYXQgd2lsbCBob2xkIHRoZSB0cmFuc2NsdWRlZCBlbGVtZW50XG4vLyA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWdyb3VwXCI+XG4vLyAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGluZ1wiID48YSAuLi4gYWNjb3JkaW9uLXRyYW5zY2x1ZGU9XCJoZWFkaW5nXCI+Li4uPC9hPjwvZGl2PlxuLy8gICAuLi5cbi8vIDwvZGl2PlxuLmRpcmVjdGl2ZSgnYWNjb3JkaW9uVHJhbnNjbHVkZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmU6ICdeYWNjb3JkaW9uR3JvdXAnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyLCBjb250cm9sbGVyKSB7XG4gICAgICBzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBjb250cm9sbGVyW2F0dHIuYWNjb3JkaW9uVHJhbnNjbHVkZV07IH0sIGZ1bmN0aW9uKGhlYWRpbmcpIHtcbiAgICAgICAgaWYgKCBoZWFkaW5nICkge1xuICAgICAgICAgIGVsZW1lbnQuaHRtbCgnJyk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoaGVhZGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pXG5cbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5wcm9ncmVzc2JhcicsIFtdKVxuXG4uY29uc3RhbnQoJ3Byb2dyZXNzQ29uZmlnJywge1xuICBhbmltYXRlOiB0cnVlLFxuICBtYXg6IDEwMFxufSlcblxuLmNvbnRyb2xsZXIoJ1Byb2dyZXNzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICdwcm9ncmVzc0NvbmZpZycsIGZ1bmN0aW9uKCRzY29wZSwgJGF0dHJzLCBwcm9ncmVzc0NvbmZpZykge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYW5pbWF0ZSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5hbmltYXRlKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5hbmltYXRlKSA6IHByb2dyZXNzQ29uZmlnLmFuaW1hdGU7XG5cbiAgICB0aGlzLmJhcnMgPSBbXTtcbiAgICAkc2NvcGUubWF4ID0gYW5ndWxhci5pc0RlZmluZWQoJHNjb3BlLm1heCkgPyAkc2NvcGUubWF4IDogcHJvZ3Jlc3NDb25maWcubWF4O1xuXG4gICAgdGhpcy5hZGRCYXIgPSBmdW5jdGlvbihiYXIsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCAhYW5pbWF0ZSApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKHsndHJhbnNpdGlvbic6ICdub25lJ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iYXJzLnB1c2goYmFyKTtcblxuICAgICAgICBiYXIuJHdhdGNoKCd2YWx1ZScsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIGJhci5wZXJjZW50ID0gKygxMDAgKiB2YWx1ZSAvICRzY29wZS5tYXgpLnRvRml4ZWQoMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJhci4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQmFyKGJhcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnJlbW92ZUJhciA9IGZ1bmN0aW9uKGJhcikge1xuICAgICAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xuICAgIH07XG59XSlcblxuLmRpcmVjdGl2ZSgncHJvZ3Jlc3MnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlcjogJ1Byb2dyZXNzQ29udHJvbGxlcicsXG4gICAgICAgIHJlcXVpcmU6ICdwcm9ncmVzcycsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzcy5odG1sJ1xuICAgIH07XG59KVxuXG4uZGlyZWN0aXZlKCdiYXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgcmVxdWlyZTogJ15wcm9ncmVzcycsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICB2YWx1ZTogJz0nLFxuICAgICAgICAgICAgbWF4OiAnPT8nLFxuICAgICAgICAgICAgdHlwZTogJ0AnXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvcHJvZ3Jlc3NiYXIvYmFyLmh0bWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIHByb2dyZXNzQ3RybCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3NDdHJsLmFkZEJhcihzY29wZSwgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xufSlcblxuLmRpcmVjdGl2ZSgncHJvZ3Jlc3NiYXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlcjogJ1Byb2dyZXNzQ29udHJvbGxlcicsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICB2YWx1ZTogJz0nLFxuICAgICAgICAgICAgbWF4OiAnPT8nLFxuICAgICAgICAgICAgdHlwZTogJ0AnXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuaHRtbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgcHJvZ3Jlc3NDdHJsKSB7XG4gICAgICAgICAgICBwcm9ncmVzc0N0cmwuYWRkQmFyKHNjb3BlLCBhbmd1bGFyLmVsZW1lbnQoZWxlbWVudC5jaGlsZHJlbigpWzBdKSk7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnJhdGluZycsIFtdKVxuXG4uY29uc3RhbnQoJ3JhdGluZ0NvbmZpZycsIHtcbiAgbWF4OiA1LFxuICBzdGF0ZU9uOiBudWxsLFxuICBzdGF0ZU9mZjogbnVsbFxufSlcblxuLmNvbnRyb2xsZXIoJ1JhdGluZ0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAncmF0aW5nQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsIHJhdGluZ0NvbmZpZykge1xuICB2YXIgbmdNb2RlbEN0cmwgID0geyAkc2V0Vmlld1ZhbHVlOiBhbmd1bGFyLm5vb3AgfTtcblxuICB0aGlzLmluaXQgPSBmdW5jdGlvbihuZ01vZGVsQ3RybF8pIHtcbiAgICBuZ01vZGVsQ3RybCA9IG5nTW9kZWxDdHJsXztcbiAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gdGhpcy5yZW5kZXI7XG5cbiAgICBuZ01vZGVsQ3RybC4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoYW5ndWxhci5pc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPDwgMCAhPT0gdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RhdGVPbiA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5zdGF0ZU9uKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5zdGF0ZU9uKSA6IHJhdGluZ0NvbmZpZy5zdGF0ZU9uO1xuICAgIHRoaXMuc3RhdGVPZmYgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuc3RhdGVPZmYpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLnN0YXRlT2ZmKSA6IHJhdGluZ0NvbmZpZy5zdGF0ZU9mZjtcblxuICAgIHZhciByYXRpbmdTdGF0ZXMgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMucmF0aW5nU3RhdGVzKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5yYXRpbmdTdGF0ZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcnJheSggYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLm1heCkgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMubWF4KSA6IHJhdGluZ0NvbmZpZy5tYXggKTtcbiAgICAkc2NvcGUucmFuZ2UgPSB0aGlzLmJ1aWxkVGVtcGxhdGVPYmplY3RzKHJhdGluZ1N0YXRlcyk7XG4gIH07XG5cbiAgdGhpcy5idWlsZFRlbXBsYXRlT2JqZWN0cyA9IGZ1bmN0aW9uKHN0YXRlcykge1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gc3RhdGVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgc3RhdGVzW2ldID0gYW5ndWxhci5leHRlbmQoeyBpbmRleDogaSB9LCB7IHN0YXRlT246IHRoaXMuc3RhdGVPbiwgc3RhdGVPZmY6IHRoaXMuc3RhdGVPZmYgfSwgc3RhdGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfTtcblxuICAkc2NvcGUucmF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCAhJHNjb3BlLnJlYWRvbmx5ICYmIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gJHNjb3BlLnJhbmdlLmxlbmd0aCApIHtcbiAgICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUodmFsdWUpO1xuICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlcigpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuZW50ZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICggISRzY29wZS5yZWFkb25seSApIHtcbiAgICAgICRzY29wZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICAkc2NvcGUub25Ib3Zlcih7dmFsdWU6IHZhbHVlfSk7XG4gIH07XG5cbiAgJHNjb3BlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnZhbHVlID0gbmdNb2RlbEN0cmwuJHZpZXdWYWx1ZTtcbiAgICAkc2NvcGUub25MZWF2ZSgpO1xuICB9O1xuXG4gICRzY29wZS5vbktleWRvd24gPSBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAoLygzN3wzOHwzOXw0MCkvLnRlc3QoZXZ0LndoaWNoKSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAkc2NvcGUucmF0ZSggJHNjb3BlLnZhbHVlICsgKGV2dC53aGljaCA9PT0gMzggfHwgZXZ0LndoaWNoID09PSAzOSA/IDEgOiAtMSkgKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUudmFsdWUgPSBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlO1xuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ3JhdGluZycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHJlcXVpcmU6IFsncmF0aW5nJywgJ25nTW9kZWwnXSxcbiAgICBzY29wZToge1xuICAgICAgcmVhZG9ubHk6ICc9PycsXG4gICAgICBvbkhvdmVyOiAnJicsXG4gICAgICBvbkxlYXZlOiAnJidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdSYXRpbmdDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3JhdGluZy9yYXRpbmcuaHRtbCcsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICB2YXIgcmF0aW5nQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuICAgICAgcmF0aW5nQ3RybC5pbml0KCBuZ01vZGVsQ3RybCApO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9yYXRpbmcvcmF0aW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgdWkuYm9vdHN0cmFwLnRhYnNcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFuZ3VsYXJKUyB2ZXJzaW9uIG9mIHRoZSB0YWJzIGRpcmVjdGl2ZS5cbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnRhYnMnLCBbXSlcblxuLmNvbnRyb2xsZXIoJ1RhYnNldENvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uIFRhYnNldEN0cmwoJHNjb3BlKSB7XG4gIHZhciBjdHJsID0gdGhpcyxcbiAgICAgIHRhYnMgPSBjdHJsLnRhYnMgPSAkc2NvcGUudGFicyA9IFtdO1xuXG4gIGN0cmwuc2VsZWN0ID0gZnVuY3Rpb24oc2VsZWN0ZWRUYWIpIHtcbiAgICBhbmd1bGFyLmZvckVhY2godGFicywgZnVuY3Rpb24odGFiKSB7XG4gICAgICBpZiAodGFiLmFjdGl2ZSAmJiB0YWIgIT09IHNlbGVjdGVkVGFiKSB7XG4gICAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGFiLm9uRGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWxlY3RlZFRhYi5hY3RpdmUgPSB0cnVlO1xuICAgIHNlbGVjdGVkVGFiLm9uU2VsZWN0KCk7XG4gIH07XG5cbiAgY3RybC5hZGRUYWIgPSBmdW5jdGlvbiBhZGRUYWIodGFiKSB7XG4gICAgdGFicy5wdXNoKHRhYik7XG4gICAgLy8gd2UgY2FuJ3QgcnVuIHRoZSBzZWxlY3QgZnVuY3Rpb24gb24gdGhlIGZpcnN0IHRhYlxuICAgIC8vIHNpbmNlIHRoYXQgd291bGQgc2VsZWN0IGl0IHR3aWNlXG4gICAgaWYgKHRhYnMubGVuZ3RoID09PSAxICYmIHRhYi5hY3RpdmUgIT09IGZhbHNlKSB7XG4gICAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRhYi5hY3RpdmUpIHtcbiAgICAgIGN0cmwuc2VsZWN0KHRhYik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjdHJsLnJlbW92ZVRhYiA9IGZ1bmN0aW9uIHJlbW92ZVRhYih0YWIpIHtcbiAgICB2YXIgaW5kZXggPSB0YWJzLmluZGV4T2YodGFiKTtcbiAgICAvL1NlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXG4gICAgaWYgKHRhYi5hY3RpdmUgJiYgdGFicy5sZW5ndGggPiAxICYmICFkZXN0cm95ZWQpIHtcbiAgICAgIC8vSWYgdGhpcyBpcyB0aGUgbGFzdCB0YWIsIHNlbGVjdCB0aGUgcHJldmlvdXMgdGFiLiBlbHNlLCB0aGUgbmV4dCB0YWIuXG4gICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBpbmRleCA9PSB0YWJzLmxlbmd0aCAtIDEgPyBpbmRleCAtIDEgOiBpbmRleCArIDE7XG4gICAgICBjdHJsLnNlbGVjdCh0YWJzW25ld0FjdGl2ZUluZGV4XSk7XG4gICAgfVxuICAgIHRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICB2YXIgZGVzdHJveWVkO1xuICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgIGRlc3Ryb3llZCA9IHRydWU7XG4gIH0pO1xufV0pXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgdWkuYm9vdHN0cmFwLnRhYnMuZGlyZWN0aXZlOnRhYnNldFxuICogQHJlc3RyaWN0IEVBXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUYWJzZXQgaXMgdGhlIG91dGVyIGNvbnRhaW5lciBmb3IgdGhlIHRhYnMgZGlyZWN0aXZlXG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gdmVydGljYWwgV2hldGhlciBvciBub3QgdG8gdXNlIHZlcnRpY2FsIHN0eWxpbmcgZm9yIHRoZSB0YWJzLlxuICogQHBhcmFtIHtib29sZWFuPX0ganVzdGlmaWVkIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBqdXN0aWZpZWQgc3R5bGluZyBmb3IgdGhlIHRhYnMuXG4gKlxuICogQGV4YW1wbGVcbjxleGFtcGxlIG1vZHVsZT1cInVpLmJvb3RzdHJhcFwiPlxuICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgIDx0YWJzZXQ+XG4gICAgICA8dGFiIGhlYWRpbmc9XCJUYWIgMVwiPjxiPkZpcnN0PC9iPiBDb250ZW50ITwvdGFiPlxuICAgICAgPHRhYiBoZWFkaW5nPVwiVGFiIDJcIj48aT5TZWNvbmQ8L2k+IENvbnRlbnQhPC90YWI+XG4gICAgPC90YWJzZXQ+XG4gICAgPGhyIC8+XG4gICAgPHRhYnNldCB2ZXJ0aWNhbD1cInRydWVcIj5cbiAgICAgIDx0YWIgaGVhZGluZz1cIlZlcnRpY2FsIFRhYiAxXCI+PGI+Rmlyc3Q8L2I+IFZlcnRpY2FsIENvbnRlbnQhPC90YWI+XG4gICAgICA8dGFiIGhlYWRpbmc9XCJWZXJ0aWNhbCBUYWIgMlwiPjxpPlNlY29uZDwvaT4gVmVydGljYWwgQ29udGVudCE8L3RhYj5cbiAgICA8L3RhYnNldD5cbiAgICA8dGFic2V0IGp1c3RpZmllZD1cInRydWVcIj5cbiAgICAgIDx0YWIgaGVhZGluZz1cIkp1c3RpZmllZCBUYWIgMVwiPjxiPkZpcnN0PC9iPiBKdXN0aWZpZWQgQ29udGVudCE8L3RhYj5cbiAgICAgIDx0YWIgaGVhZGluZz1cIkp1c3RpZmllZCBUYWIgMlwiPjxpPlNlY29uZDwvaT4gSnVzdGlmaWVkIENvbnRlbnQhPC90YWI+XG4gICAgPC90YWJzZXQ+XG4gIDwvZmlsZT5cbjwvZXhhbXBsZT5cbiAqL1xuLmRpcmVjdGl2ZSgndGFic2V0JywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHNjb3BlOiB7XG4gICAgICB0eXBlOiAnQCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdUYWJzZXRDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3RhYnMvdGFic2V0Lmh0bWwnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgc2NvcGUudmVydGljYWwgPSBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy52ZXJ0aWNhbCkgPyBzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLnZlcnRpY2FsKSA6IGZhbHNlO1xuICAgICAgc2NvcGUuanVzdGlmaWVkID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuanVzdGlmaWVkKSA/IHNjb3BlLiRwYXJlbnQuJGV2YWwoYXR0cnMuanVzdGlmaWVkKSA6IGZhbHNlO1xuICAgIH1cbiAgfTtcbn0pXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgdWkuYm9vdHN0cmFwLnRhYnMuZGlyZWN0aXZlOnRhYlxuICogQHJlc3RyaWN0IEVBXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBoZWFkaW5nIFRoZSB2aXNpYmxlIGhlYWRpbmcsIG9yIHRpdGxlLCBvZiB0aGUgdGFiLiBTZXQgSFRNTCBoZWFkaW5ncyB3aXRoIHtAbGluayB1aS5ib290c3RyYXAudGFicy5kaXJlY3RpdmU6dGFiSGVhZGluZyB0YWJIZWFkaW5nfS5cbiAqIEBwYXJhbSB7c3RyaW5nPX0gc2VsZWN0IEFuIGV4cHJlc3Npb24gdG8gZXZhbHVhdGUgd2hlbiB0aGUgdGFiIGlzIHNlbGVjdGVkLlxuICogQHBhcmFtIHtib29sZWFuPX0gYWN0aXZlIEEgYmluZGluZywgdGVsbGluZyB3aGV0aGVyIG9yIG5vdCB0aGlzIHRhYiBpcyBzZWxlY3RlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGRpc2FibGVkIEEgYmluZGluZywgdGVsbGluZyB3aGV0aGVyIG9yIG5vdCB0aGlzIHRhYiBpcyBkaXNhYmxlZC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZXMgYSB0YWIgd2l0aCBhIGhlYWRpbmcgYW5kIGNvbnRlbnQuIE11c3QgYmUgcGxhY2VkIHdpdGhpbiBhIHtAbGluayB1aS5ib290c3RyYXAudGFicy5kaXJlY3RpdmU6dGFic2V0IHRhYnNldH0uXG4gKlxuICogQGV4YW1wbGVcbjxleGFtcGxlIG1vZHVsZT1cInVpLmJvb3RzdHJhcFwiPlxuICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgIDxkaXYgbmctY29udHJvbGxlcj1cIlRhYnNEZW1vQ3RybFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc21hbGxcIiBuZy1jbGljaz1cIml0ZW1zWzBdLmFjdGl2ZSA9IHRydWVcIj5cbiAgICAgICAgU2VsZWN0IGl0ZW0gMSwgdXNpbmcgYWN0aXZlIGJpbmRpbmdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc21hbGxcIiBuZy1jbGljaz1cIml0ZW1zWzFdLmRpc2FibGVkID0gIWl0ZW1zWzFdLmRpc2FibGVkXCI+XG4gICAgICAgIEVuYWJsZS9kaXNhYmxlIGl0ZW0gMiwgdXNpbmcgZGlzYWJsZWQgYmluZGluZ1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIDx0YWJzZXQ+XG4gICAgICAgIDx0YWIgaGVhZGluZz1cIlRhYiAxXCI+Rmlyc3QgVGFiPC90YWI+XG4gICAgICAgIDx0YWIgc2VsZWN0PVwiYWxlcnRNZSgpXCI+XG4gICAgICAgICAgPHRhYi1oZWFkaW5nPjxpIGNsYXNzPVwiaWNvbi1iZWxsXCI+PC9pPiBBbGVydCBtZSE8L3RhYi1oZWFkaW5nPlxuICAgICAgICAgIFNlY29uZCBUYWIsIHdpdGggYWxlcnQgY2FsbGJhY2sgYW5kIGh0bWwgaGVhZGluZyFcbiAgICAgICAgPC90YWI+XG4gICAgICAgIDx0YWIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiXG4gICAgICAgICAgaGVhZGluZz1cInt7aXRlbS50aXRsZX19XCJcbiAgICAgICAgICBkaXNhYmxlZD1cIml0ZW0uZGlzYWJsZWRcIlxuICAgICAgICAgIGFjdGl2ZT1cIml0ZW0uYWN0aXZlXCI+XG4gICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxuICAgICAgICA8L3RhYj5cbiAgICAgIDwvdGFic2V0PlxuICAgIDwvZGl2PlxuICA8L2ZpbGU+XG4gIDxmaWxlIG5hbWU9XCJzY3JpcHQuanNcIj5cbiAgICBmdW5jdGlvbiBUYWJzRGVtb0N0cmwoJHNjb3BlKSB7XG4gICAgICAkc2NvcGUuaXRlbXMgPSBbXG4gICAgICAgIHsgdGl0bGU6XCJEeW5hbWljIFRpdGxlIDFcIiwgY29udGVudDpcIkR5bmFtaWMgSXRlbSAwXCIgfSxcbiAgICAgICAgeyB0aXRsZTpcIkR5bmFtaWMgVGl0bGUgMlwiLCBjb250ZW50OlwiRHluYW1pYyBJdGVtIDFcIiwgZGlzYWJsZWQ6IHRydWUgfVxuICAgICAgXTtcblxuICAgICAgJHNjb3BlLmFsZXJ0TWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBhbGVydChcIllvdSd2ZSBzZWxlY3RlZCB0aGUgYWxlcnQgdGFiIVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG4gIDwvZmlsZT5cbjwvZXhhbXBsZT5cbiAqL1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIHVpLmJvb3RzdHJhcC50YWJzLmRpcmVjdGl2ZTp0YWJIZWFkaW5nXG4gKiBAcmVzdHJpY3QgRUFcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZXMgYW4gSFRNTCBoZWFkaW5nIGZvciBhIHtAbGluayB1aS5ib290c3RyYXAudGFicy5kaXJlY3RpdmU6dGFiIHRhYn0uIE11c3QgYmUgcGxhY2VkIGFzIGEgY2hpbGQgb2YgYSB0YWIgZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuPGV4YW1wbGUgbW9kdWxlPVwidWkuYm9vdHN0cmFwXCI+XG4gIDxmaWxlIG5hbWU9XCJpbmRleC5odG1sXCI+XG4gICAgPHRhYnNldD5cbiAgICAgIDx0YWI+XG4gICAgICAgIDx0YWItaGVhZGluZz48Yj5IVE1MPC9iPiBpbiBteSB0aXRsZXM/ITwvdGFiLWhlYWRpbmc+XG4gICAgICAgIEFuZCBzb21lIGNvbnRlbnQsIHRvbyFcbiAgICAgIDwvdGFiPlxuICAgICAgPHRhYj5cbiAgICAgICAgPHRhYi1oZWFkaW5nPjxpIGNsYXNzPVwiaWNvbi1oZWFydFwiPjwvaT4gSWNvbiBoZWFkaW5nPyE/PC90YWItaGVhZGluZz5cbiAgICAgICAgVGhhdCdzIHJpZ2h0LlxuICAgICAgPC90YWI+XG4gICAgPC90YWJzZXQ+XG4gIDwvZmlsZT5cbjwvZXhhbXBsZT5cbiAqL1xuLmRpcmVjdGl2ZSgndGFiJywgWyckcGFyc2UnLCAnJGxvZycsIGZ1bmN0aW9uKCRwYXJzZSwgJGxvZykge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmU6ICdedGFic2V0JyxcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvdGFicy90YWIuaHRtbCcsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICBzY29wZToge1xuICAgICAgYWN0aXZlOiAnPT8nLFxuICAgICAgaGVhZGluZzogJ0AnLFxuICAgICAgb25TZWxlY3Q6ICcmc2VsZWN0JywgLy9UaGlzIGNhbGxiYWNrIGlzIGNhbGxlZCBpbiBjb250ZW50SGVhZGluZ1RyYW5zY2x1ZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbmNlIGl0IGluc2VydHMgdGhlIHRhYidzIGNvbnRlbnQgaW50byB0aGUgZG9tXG4gICAgICBvbkRlc2VsZWN0OiAnJmRlc2VsZWN0J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAvL0VtcHR5IGNvbnRyb2xsZXIgc28gb3RoZXIgZGlyZWN0aXZlcyBjYW4gcmVxdWlyZSBiZWluZyAndW5kZXInIGEgdGFiXG4gICAgfSxcbiAgICBjb21waWxlOiBmdW5jdGlvbihlbG0sIGF0dHJzLCB0cmFuc2NsdWRlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsbSwgYXR0cnMsIHRhYnNldEN0cmwpIHtcbiAgICAgICAgc2NvcGUuJHdhdGNoKCdhY3RpdmUnLCBmdW5jdGlvbihhY3RpdmUpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICB0YWJzZXRDdHJsLnNlbGVjdChzY29wZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzY29wZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIGF0dHJzLmRpc2FibGUgKSB7XG4gICAgICAgICAgc2NvcGUuJHBhcmVudC4kd2F0Y2goJHBhcnNlKGF0dHJzLmRpc2FibGUpLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgc2NvcGUuZGlzYWJsZWQgPSAhISB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlcHJlY2F0aW9uIHN1cHBvcnQgb2YgXCJkaXNhYmxlZFwiIHBhcmFtZXRlclxuICAgICAgICAvLyBmaXgodGFiKTogSUU5IGRpc2FibGVkIGF0dHIgcmVuZGVycyBncmV5IHRleHQgb24gZW5hYmxlZCB0YWIgIzI2NzdcbiAgICAgICAgLy8gVGhpcyBjb2RlIGlzIGR1cGxpY2F0ZWQgZnJvbSB0aGUgbGluZXMgYWJvdmUgdG8gbWFrZSBpdCBlYXN5IHRvIHJlbW92ZSBvbmNlXG4gICAgICAgIC8vIHRoZSBmZWF0dXJlIGhhcyBiZWVuIGNvbXBsZXRlbHkgZGVwcmVjYXRlZFxuICAgICAgICBpZiAoIGF0dHJzLmRpc2FibGVkICkge1xuICAgICAgICAgICRsb2cud2FybignVXNlIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUgaGFzIGJlZW4gZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcImRpc2FibGVcIicpO1xuICAgICAgICAgIHNjb3BlLiRwYXJlbnQuJHdhdGNoKCRwYXJzZShhdHRycy5kaXNhYmxlZCksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBzY29wZS5kaXNhYmxlZCA9ICEhIHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCAhc2NvcGUuZGlzYWJsZWQgKSB7XG4gICAgICAgICAgICBzY29wZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0YWJzZXRDdHJsLmFkZFRhYihzY29wZSk7XG4gICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0YWJzZXRDdHJsLnJlbW92ZVRhYihzY29wZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vV2UgbmVlZCB0byB0cmFuc2NsdWRlIGxhdGVyLCBvbmNlIHRoZSBjb250ZW50IGNvbnRhaW5lciBpcyByZWFkeS5cbiAgICAgICAgLy93aGVuIHRoaXMgbGluayBoYXBwZW5zLCB3ZSdyZSBpbnNpZGUgYSB0YWIgaGVhZGluZy5cbiAgICAgICAgc2NvcGUuJHRyYW5zY2x1ZGVGbiA9IHRyYW5zY2x1ZGU7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd0YWJIZWFkaW5nVHJhbnNjbHVkZScsIFtmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6ICdedGFiJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycywgdGFiQ3RybCkge1xuICAgICAgc2NvcGUuJHdhdGNoKCdoZWFkaW5nRWxlbWVudCcsIGZ1bmN0aW9uIHVwZGF0ZUhlYWRpbmdFbGVtZW50KGhlYWRpbmcpIHtcbiAgICAgICAgaWYgKGhlYWRpbmcpIHtcbiAgICAgICAgICBlbG0uaHRtbCgnJyk7XG4gICAgICAgICAgZWxtLmFwcGVuZChoZWFkaW5nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ3RhYkNvbnRlbnRUcmFuc2NsdWRlJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnXnRhYnNldCcsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMpIHtcbiAgICAgIHZhciB0YWIgPSBzY29wZS4kZXZhbChhdHRycy50YWJDb250ZW50VHJhbnNjbHVkZSk7XG5cbiAgICAgIC8vTm93IG91ciB0YWIgaXMgcmVhZHkgdG8gYmUgdHJhbnNjbHVkZWQ6IGJvdGggdGhlIHRhYiBoZWFkaW5nIGFyZWFcbiAgICAgIC8vYW5kIHRoZSB0YWIgY29udGVudCBhcmVhIGFyZSBsb2FkZWQuICBUcmFuc2NsdWRlICdlbSBib3RoLlxuICAgICAgdGFiLiR0cmFuc2NsdWRlRm4odGFiLiRwYXJlbnQsIGZ1bmN0aW9uKGNvbnRlbnRzKSB7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChjb250ZW50cywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgIGlmIChpc1RhYkhlYWRpbmcobm9kZSkpIHtcbiAgICAgICAgICAgIC8vTGV0IHRhYkhlYWRpbmdUcmFuc2NsdWRlIGtub3cuXG4gICAgICAgICAgICB0YWIuaGVhZGluZ0VsZW1lbnQgPSBub2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uYXBwZW5kKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGlzVGFiSGVhZGluZyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudGFnTmFtZSAmJiAgKFxuICAgICAgbm9kZS5oYXNBdHRyaWJ1dGUoJ3RhYi1oZWFkaW5nJykgfHxcbiAgICAgIG5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXRhYi1oZWFkaW5nJykgfHxcbiAgICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGFiLWhlYWRpbmcnIHx8XG4gICAgICBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2RhdGEtdGFiLWhlYWRpbmcnXG4gICAgKTtcbiAgfVxufSlcblxuO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3RhYnMvdGFicy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAudHJhbnNpdGlvbicsIFtdKVxuXG4udmFsdWUoJyR0cmFuc2l0aW9uU3VwcHJlc3NEZXByZWNhdGVkJywgZmFsc2UpXG4vKipcbiAqICR0cmFuc2l0aW9uIHNlcnZpY2UgcHJvdmlkZXMgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0cmlnZ2VyIENTUyAzIHRyYW5zaXRpb25zIGFuZCB0byBiZSBpbmZvcm1lZCB3aGVuIHRoZXkgY29tcGxldGUuXG4gKiBAcGFyYW0gIHtET01FbGVtZW50fSBlbGVtZW50ICBUaGUgRE9NRWxlbWVudCB0aGF0IHdpbGwgYmUgYW5pbWF0ZWQuXG4gKiBAcGFyYW0gIHtzdHJpbmd8b2JqZWN0fGZ1bmN0aW9ufSB0cmlnZ2VyICBUaGUgdGhpbmcgdGhhdCB3aWxsIGNhdXNlIHRoZSB0cmFuc2l0aW9uIHRvIHN0YXJ0OlxuICogICAtIEFzIGEgc3RyaW5nLCBpdCByZXByZXNlbnRzIHRoZSBjc3MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQuXG4gKiAgIC0gQXMgYW4gb2JqZWN0LCBpdCByZXByZXNlbnRzIGEgaGFzaCBvZiBzdHlsZSBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQuXG4gKiAgIC0gQXMgYSBmdW5jdGlvbiwgaXQgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB0aGF0IHdpbGwgY2F1c2UgdGhlIHRyYW5zaXRpb24gdG8gb2NjdXIuXG4gKiBAcmV0dXJuIHtQcm9taXNlfSAgQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBmaW5pc2hlcy5cbiAqL1xuLmZhY3RvcnkoJyR0cmFuc2l0aW9uJywgW1xuICAgICAgICAnJHEnLCAnJHRpbWVvdXQnLCAnJHJvb3RTY29wZScsICckbG9nJywgJyR0cmFuc2l0aW9uU3VwcHJlc3NEZXByZWNhdGVkJyxcbmZ1bmN0aW9uKCRxICwgICR0aW1lb3V0ICwgICRyb290U2NvcGUgLCAgJGxvZyAsICAkdHJhbnNpdGlvblN1cHByZXNzRGVwcmVjYXRlZCkge1xuXG4gIGlmICghJHRyYW5zaXRpb25TdXBwcmVzc0RlcHJlY2F0ZWQpIHtcbiAgICAkbG9nLndhcm4oJyR0cmFuc2l0aW9uIGlzIG5vdyBkZXByZWNhdGVkLiBVc2UgJGFuaW1hdGUgZnJvbSBuZ0FuaW1hdGUgaW5zdGVhZC4nKTtcbiAgfVxuXG4gIHZhciAkdHJhbnNpdGlvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRyaWdnZXIsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgIHZhciBlbmRFdmVudE5hbWUgPSAkdHJhbnNpdGlvbltvcHRpb25zLmFuaW1hdGlvbiA/ICdhbmltYXRpb25FbmRFdmVudE5hbWUnIDogJ3RyYW5zaXRpb25FbmRFdmVudE5hbWUnXTtcblxuICAgIHZhciB0cmFuc2l0aW9uRW5kSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAkcm9vdFNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudC51bmJpbmQoZW5kRXZlbnROYW1lLCB0cmFuc2l0aW9uRW5kSGFuZGxlcik7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKGVuZEV2ZW50TmFtZSkge1xuICAgICAgZWxlbWVudC5iaW5kKGVuZEV2ZW50TmFtZSwgdHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFdyYXAgaW4gYSB0aW1lb3V0IHRvIGFsbG93IHRoZSBicm93c2VyIHRpbWUgdG8gdXBkYXRlIHRoZSBET00gYmVmb3JlIHRoZSB0cmFuc2l0aW9uIGlzIHRvIG9jY3VyXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIGFuZ3VsYXIuaXNTdHJpbmcodHJpZ2dlcikgKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkQ2xhc3ModHJpZ2dlcik7XG4gICAgICB9IGVsc2UgaWYgKCBhbmd1bGFyLmlzRnVuY3Rpb24odHJpZ2dlcikgKSB7XG4gICAgICAgIHRyaWdnZXIoZWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKCBhbmd1bGFyLmlzT2JqZWN0KHRyaWdnZXIpICkge1xuICAgICAgICBlbGVtZW50LmNzcyh0cmlnZ2VyKTtcbiAgICAgIH1cbiAgICAgIC8vSWYgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRyYW5zaXRpb25zLCBpbnN0YW50bHkgcmVzb2x2ZVxuICAgICAgaWYgKCAhZW5kRXZlbnROYW1lICkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQWRkIG91ciBjdXN0b20gY2FuY2VsIGZ1bmN0aW9uIHRvIHRoZSBwcm9taXNlIHRoYXQgaXMgcmV0dXJuZWRcbiAgICAvLyBXZSBjYW4gY2FsbCB0aGlzIGlmIHdlIGFyZSBhYm91dCB0byBydW4gYSBuZXcgdHJhbnNpdGlvbiwgd2hpY2ggd2Uga25vdyB3aWxsIHByZXZlbnQgdGhpcyB0cmFuc2l0aW9uIGZyb20gZW5kaW5nLFxuICAgIC8vIGkuZS4gaXQgd2lsbCB0aGVyZWZvcmUgbmV2ZXIgcmFpc2UgYSB0cmFuc2l0aW9uRW5kIGV2ZW50IGZvciB0aGF0IHRyYW5zaXRpb25cbiAgICBkZWZlcnJlZC5wcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBlbmRFdmVudE5hbWUgKSB7XG4gICAgICAgIGVsZW1lbnQudW5iaW5kKGVuZEV2ZW50TmFtZSwgdHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuICAgICAgfVxuICAgICAgZGVmZXJyZWQucmVqZWN0KCdUcmFuc2l0aW9uIGNhbmNlbGxlZCcpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICAvLyBXb3JrIG91dCB0aGUgbmFtZSBvZiB0aGUgdHJhbnNpdGlvbkVuZCBldmVudFxuICB2YXIgdHJhbnNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHJhbnMnKTtcbiAgdmFyIHRyYW5zaXRpb25FbmRFdmVudE5hbWVzID0ge1xuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCdcbiAgfTtcbiAgdmFyIGFuaW1hdGlvbkVuZEV2ZW50TmFtZXMgPSB7XG4gICAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICdhbmltYXRpb25lbmQnLFxuICAgICdPVHJhbnNpdGlvbic6ICdvQW5pbWF0aW9uRW5kJyxcbiAgICAndHJhbnNpdGlvbic6ICdhbmltYXRpb25lbmQnXG4gIH07XG4gIGZ1bmN0aW9uIGZpbmRFbmRFdmVudE5hbWUoZW5kRXZlbnROYW1lcykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gZW5kRXZlbnROYW1lcyl7XG4gICAgICBpZiAodHJhbnNFbGVtZW50LnN0eWxlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGVuZEV2ZW50TmFtZXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR0cmFuc2l0aW9uLnRyYW5zaXRpb25FbmRFdmVudE5hbWUgPSBmaW5kRW5kRXZlbnROYW1lKHRyYW5zaXRpb25FbmRFdmVudE5hbWVzKTtcbiAgJHRyYW5zaXRpb24uYW5pbWF0aW9uRW5kRXZlbnROYW1lID0gZmluZEVuZEV2ZW50TmFtZShhbmltYXRpb25FbmRFdmVudE5hbWVzKTtcbiAgcmV0dXJuICR0cmFuc2l0aW9uO1xufV0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAucG9zaXRpb24nLCBbXSlcblxuLyoqXG4gKiBBIHNldCBvZiB1dGlsaXR5IG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlIHRvIHJldHJpZXZlIHBvc2l0aW9uIG9mIERPTSBlbGVtZW50cy5cbiAqIEl0IGlzIG1lYW50IHRvIGJlIHVzZWQgd2hlcmUgd2UgbmVlZCB0byBhYnNvbHV0ZS1wb3NpdGlvbiBET00gZWxlbWVudHMgaW5cbiAqIHJlbGF0aW9uIHRvIG90aGVyLCBleGlzdGluZyBlbGVtZW50cyAodGhpcyBpcyB0aGUgY2FzZSBmb3IgdG9vbHRpcHMsIHBvcG92ZXJzLFxuICogdHlwZWFoZWFkIHN1Z2dlc3Rpb25zIGV0Yy4pLlxuICovXG4gIC5mYWN0b3J5KCckcG9zaXRpb24nLCBbJyRkb2N1bWVudCcsICckd2luZG93JywgZnVuY3Rpb24gKCRkb2N1bWVudCwgJHdpbmRvdykge1xuXG4gICAgZnVuY3Rpb24gZ2V0U3R5bGUoZWwsIGNzc3Byb3ApIHtcbiAgICAgIGlmIChlbC5jdXJyZW50U3R5bGUpIHsgLy9JRVxuICAgICAgICByZXR1cm4gZWwuY3VycmVudFN0eWxlW2Nzc3Byb3BdO1xuICAgICAgfSBlbHNlIGlmICgkd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgICAgcmV0dXJuICR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbY3NzcHJvcF07XG4gICAgICB9XG4gICAgICAvLyBmaW5hbGx5IHRyeSBhbmQgZ2V0IGlubGluZSBzdHlsZVxuICAgICAgcmV0dXJuIGVsLnN0eWxlW2Nzc3Byb3BdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGdpdmVuIGVsZW1lbnQgaXMgc3RhdGljYWxseSBwb3NpdGlvbmVkXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSByYXcgRE9NIGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1N0YXRpY1Bvc2l0aW9uZWQoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIChnZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nKSB8fCAnc3RhdGljJyApID09PSAnc3RhdGljJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBjbG9zZXN0LCBub24tc3RhdGljYWxseSBwb3NpdGlvbmVkIHBhcmVudE9mZnNldCBvZiBhIGdpdmVuIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHZhciBwYXJlbnRPZmZzZXRFbCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB2YXIgZG9jRG9tRWwgPSAkZG9jdW1lbnRbMF07XG4gICAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgZG9jRG9tRWw7XG4gICAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZG9jRG9tRWwgJiYgaXNTdGF0aWNQb3NpdGlvbmVkKG9mZnNldFBhcmVudCkgKSB7XG4gICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY0RvbUVsO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBQcm92aWRlcyByZWFkLW9ubHkgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBwb3NpdGlvbiBmdW5jdGlvbjpcbiAgICAgICAqIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9wb3NpdGlvbi9cbiAgICAgICAqL1xuICAgICAgcG9zaXRpb246IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBlbEJDUiA9IHRoaXMub2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgICB2YXIgb2Zmc2V0UGFyZW50QkNSID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgICAgICAgdmFyIG9mZnNldFBhcmVudEVsID0gcGFyZW50T2Zmc2V0RWwoZWxlbWVudFswXSk7XG4gICAgICAgIGlmIChvZmZzZXRQYXJlbnRFbCAhPSAkZG9jdW1lbnRbMF0pIHtcbiAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IgPSB0aGlzLm9mZnNldChhbmd1bGFyLmVsZW1lbnQob2Zmc2V0UGFyZW50RWwpKTtcbiAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IudG9wICs9IG9mZnNldFBhcmVudEVsLmNsaWVudFRvcCAtIG9mZnNldFBhcmVudEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib3VuZGluZ0NsaWVudFJlY3QgPSBlbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgZWxlbWVudC5wcm9wKCdvZmZzZXRXaWR0aCcpLFxuICAgICAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBlbGVtZW50LnByb3AoJ29mZnNldEhlaWdodCcpLFxuICAgICAgICAgIHRvcDogZWxCQ1IudG9wIC0gb2Zmc2V0UGFyZW50QkNSLnRvcCxcbiAgICAgICAgICBsZWZ0OiBlbEJDUi5sZWZ0IC0gb2Zmc2V0UGFyZW50QkNSLmxlZnRcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdmlkZXMgcmVhZC1vbmx5IGVxdWl2YWxlbnQgb2YgalF1ZXJ5J3Mgb2Zmc2V0IGZ1bmN0aW9uOlxuICAgICAgICogaHR0cDovL2FwaS5qcXVlcnkuY29tL29mZnNldC9cbiAgICAgICAqL1xuICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IGVsZW1lbnQucHJvcCgnb2Zmc2V0V2lkdGgnKSxcbiAgICAgICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgZWxlbWVudC5wcm9wKCdvZmZzZXRIZWlnaHQnKSxcbiAgICAgICAgICB0b3A6IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyAoJHdpbmRvdy5wYWdlWU9mZnNldCB8fCAkZG9jdW1lbnRbMF0uZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksXG4gICAgICAgICAgbGVmdDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAoJHdpbmRvdy5wYWdlWE9mZnNldCB8fCAkZG9jdW1lbnRbMF0uZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIGNvb3JkaW5hdGVzIGZvciB0aGUgdGFyZ2V0RWwgaW4gcmVsYXRpb24gdG8gaG9zdEVsXG4gICAgICAgKi9cbiAgICAgIHBvc2l0aW9uRWxlbWVudHM6IGZ1bmN0aW9uIChob3N0RWwsIHRhcmdldEVsLCBwb3NpdGlvblN0ciwgYXBwZW5kVG9Cb2R5KSB7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uU3RyUGFydHMgPSBwb3NpdGlvblN0ci5zcGxpdCgnLScpO1xuICAgICAgICB2YXIgcG9zMCA9IHBvc2l0aW9uU3RyUGFydHNbMF0sIHBvczEgPSBwb3NpdGlvblN0clBhcnRzWzFdIHx8ICdjZW50ZXInO1xuXG4gICAgICAgIHZhciBob3N0RWxQb3MsXG4gICAgICAgICAgdGFyZ2V0RWxXaWR0aCxcbiAgICAgICAgICB0YXJnZXRFbEhlaWdodCxcbiAgICAgICAgICB0YXJnZXRFbFBvcztcblxuICAgICAgICBob3N0RWxQb3MgPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWwpIDogdGhpcy5wb3NpdGlvbihob3N0RWwpO1xuXG4gICAgICAgIHRhcmdldEVsV2lkdGggPSB0YXJnZXRFbC5wcm9wKCdvZmZzZXRXaWR0aCcpO1xuICAgICAgICB0YXJnZXRFbEhlaWdodCA9IHRhcmdldEVsLnByb3AoJ29mZnNldEhlaWdodCcpO1xuXG4gICAgICAgIHZhciBzaGlmdFdpZHRoID0ge1xuICAgICAgICAgIGNlbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoIC8gMiAtIHRhcmdldEVsV2lkdGggLyAyO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIGhvc3RFbFBvcy53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNoaWZ0SGVpZ2h0ID0ge1xuICAgICAgICAgIGNlbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyBob3N0RWxQb3MuaGVpZ2h0IC8gMiAtIHRhcmdldEVsSGVpZ2h0IC8gMjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3A7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBib3R0b206IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoIChwb3MwKSB7XG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMV0oKSxcbiAgICAgICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtwb3MwXSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MxXSgpLFxuICAgICAgICAgICAgICBsZWZ0OiBob3N0RWxQb3MubGVmdCAtIHRhcmdldEVsV2lkdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMF0oKSxcbiAgICAgICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtwb3MxXSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgICAgICB0b3A6IGhvc3RFbFBvcy50b3AgLSB0YXJnZXRFbEhlaWdodCxcbiAgICAgICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtwb3MxXSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0RWxQb3M7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5hbGVydCcsIFtdKVxuXG4uY29udHJvbGxlcignQWxlcnRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzKSB7XG4gICRzY29wZS5jbG9zZWFibGUgPSAnY2xvc2UnIGluICRhdHRycztcbiAgdGhpcy5jbG9zZSA9ICRzY29wZS5jbG9zZTtcbn1dKVxuXG4uZGlyZWN0aXZlKCdhbGVydCcsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDonRUEnLFxuICAgIGNvbnRyb2xsZXI6J0FsZXJ0Q29udHJvbGxlcicsXG4gICAgdGVtcGxhdGVVcmw6J3RlbXBsYXRlL2FsZXJ0L2FsZXJ0Lmh0bWwnLFxuICAgIHRyYW5zY2x1ZGU6dHJ1ZSxcbiAgICByZXBsYWNlOnRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIHR5cGU6ICdAJyxcbiAgICAgIGNsb3NlOiAnJidcbiAgICB9XG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCdkaXNtaXNzT25UaW1lb3V0JywgWyckdGltZW91dCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogJ2FsZXJ0JyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGFsZXJ0Q3RybCkge1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgYWxlcnRDdHJsLmNsb3NlKCk7XG4gICAgICB9LCBwYXJzZUludChhdHRycy5kaXNtaXNzT25UaW1lb3V0LCAxMCkpO1xuICAgIH1cbiAgfTtcbn1dKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9hbGVydC9hbGVydC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgnYXJpLnVpLmNvcmUnLCBbXG4ndWkuYm9vdHN0cmFwLmFjY29yZGlvbicsXG4ndWkuYm9vdHN0cmFwLmFsZXJ0Jyxcbid1aS5ib290c3RyYXAuYnV0dG9ucycsXG4ndWkuYm9vdHN0cmFwLmNvbGxhcHNlJyxcbid1aS5ib290c3RyYXAuZGF0ZXBhcnNlcicsXG4ndWkuYm9vdHN0cmFwLmRhdGVwaWNrZXInLFxuJ3VpLmJvb3RzdHJhcC50aW1lcGlja2VyJyxcbid1aS5ib290c3RyYXAuZHJvcGRvd24nLFxuJ3VpLmJvb3RzdHJhcC5tb2RhbCcsXG4ndWkuYm9vdHN0cmFwLnByb2dyZXNzYmFyJyxcbid1aS5ib290c3RyYXAucmF0aW5nJyxcbid1aS5ib290c3RyYXAudGFicycsXG4ndWkuYm9vdHN0cmFwLnRyYW5zaXRpb24nLFxuJ3VpLmJvb3RzdHJhcC5wb3NpdGlvbicsXG4nbWdjcmVhLm5nU3RyYXAuaGVscGVycy5kaW1lbnNpb25zJyxcbidtZ2NyZWEubmdTdHJhcC5wb3BvdmVyJyxcbidtZ2NyZWEubmdTdHJhcC50b29sdGlwJyxcbidhcmkudWkuY29yZS51aS1ib290c3RyYXAtdGVtcGxhdGVzJyxcbidhcmkudWkuY29yZS5uZy1zdHJhcC10ZW1wbGF0ZXMnXG5dKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuY29sbGFwc2UnLCBbXSlcblxuICAuZGlyZWN0aXZlKCdjb2xsYXBzZScsIFsnJGFuaW1hdGUnLCBmdW5jdGlvbiAoJGFuaW1hdGUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGZ1bmN0aW9uIGV4cGFuZCgpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpLmFkZENsYXNzKCdjb2xsYXBzaW5nJyk7XG4gICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgJ2luJywge1xuICAgICAgICAgICAgdG86IHsgaGVpZ2h0OiBlbGVtZW50WzBdLnNjcm9sbEhlaWdodCArICdweCcgfVxuICAgICAgICAgIH0pLnRoZW4oZXhwYW5kRG9uZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHBhbmREb25lKCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKTtcbiAgICAgICAgICBlbGVtZW50LmNzcyh7aGVpZ2h0OiAnYXV0byd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNvbGxhcHNlKCkge1xuICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIElNUE9SVEFOVDogVGhlIGhlaWdodCBtdXN0IGJlIHNldCBiZWZvcmUgYWRkaW5nIFwiY29sbGFwc2luZ1wiIGNsYXNzLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgYnJvd3NlciBhdHRlbXB0cyB0byBhbmltYXRlIGZyb20gaGVpZ2h0IDAgKGluXG4gICAgICAgICAgICAvLyBjb2xsYXBzaW5nIGNsYXNzKSB0byB0aGUgZ2l2ZW4gaGVpZ2h0IGhlcmUuXG4gICAgICAgICAgICAuY3NzKHtoZWlnaHQ6IGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0ICsgJ3B4J30pXG4gICAgICAgICAgICAvLyBpbml0aWFsbHkgYWxsIHBhbmVsIGNvbGxhcHNlIGhhdmUgdGhlIGNvbGxhcHNlIGNsYXNzLCB0aGlzIHJlbW92YWxcbiAgICAgICAgICAgIC8vIHByZXZlbnRzIHRoZSBhbmltYXRpb24gZnJvbSBqdW1waW5nIHRvIGNvbGxhcHNlZCBzdGF0ZVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKTtcblxuICAgICAgICAgICRhbmltYXRlLnJlbW92ZUNsYXNzKGVsZW1lbnQsICdpbicsIHtcbiAgICAgICAgICAgIHRvOiB7aGVpZ2h0OiAnMCd9XG4gICAgICAgICAgfSkudGhlbihjb2xsYXBzZURvbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY29sbGFwc2VEb25lKCkge1xuICAgICAgICAgIGVsZW1lbnQuY3NzKHtoZWlnaHQ6ICcwJ30pOyAvLyBSZXF1aXJlZCBzbyB0aGF0IGNvbGxhcHNlIHdvcmtzIHdoZW4gYW5pbWF0aW9uIGlzIGRpc2FibGVkXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpO1xuICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuY29sbGFwc2UsIGZ1bmN0aW9uIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgY29sbGFwc2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwYW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvY29sbGFwc2UvY29sbGFwc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5kYXRlcGFyc2VyJywgW10pXG5cbi5zZXJ2aWNlKCdkYXRlUGFyc2VyJywgWyckbG9jYWxlJywgJ29yZGVyQnlGaWx0ZXInLCBmdW5jdGlvbigkbG9jYWxlLCBvcmRlckJ5RmlsdGVyKSB7XG4gIC8vIFB1bGxlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYm9zdG9jay9kMy9ibG9iL21hc3Rlci9zcmMvZm9ybWF0L3JlcXVvdGUuanNcbiAgdmFyIFNQRUNJQUxfQ0hBUkFDVEVSU19SRUdFWFAgPSAvW1xcXFxcXF5cXCRcXCpcXCtcXD9cXHxcXFtcXF1cXChcXClcXC5cXHtcXH1dL2c7XG5cbiAgdGhpcy5wYXJzZXJzID0ge307XG5cbiAgdmFyIGZvcm1hdENvZGVUb1JlZ2V4ID0ge1xuICAgICd5eXl5Jzoge1xuICAgICAgcmVnZXg6ICdcXFxcZHs0fScsXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy55ZWFyID0gK3ZhbHVlOyB9XG4gICAgfSxcbiAgICAneXknOiB7XG4gICAgICByZWdleDogJ1xcXFxkezJ9JyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLnllYXIgPSArdmFsdWUgKyAyMDAwOyB9XG4gICAgfSxcbiAgICAneSc6IHtcbiAgICAgIHJlZ2V4OiAnXFxcXGR7MSw0fScsXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy55ZWFyID0gK3ZhbHVlOyB9XG4gICAgfSxcbiAgICAnTU1NTSc6IHtcbiAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuTU9OVEguam9pbignfCcpLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubW9udGggPSAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuTU9OVEguaW5kZXhPZih2YWx1ZSk7IH1cbiAgICB9LFxuICAgICdNTU0nOiB7XG4gICAgICByZWdleDogJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLlNIT1JUTU9OVEguam9pbignfCcpLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubW9udGggPSAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlRNT05USC5pbmRleE9mKHZhbHVlKTsgfVxuICAgIH0sXG4gICAgJ01NJzoge1xuICAgICAgcmVnZXg6ICcwWzEtOV18MVswLTJdJyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLm1vbnRoID0gdmFsdWUgLSAxOyB9XG4gICAgfSxcbiAgICAnTSc6IHtcbiAgICAgIHJlZ2V4OiAnWzEtOV18MVswLTJdJyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLm1vbnRoID0gdmFsdWUgLSAxOyB9XG4gICAgfSxcbiAgICAnZGQnOiB7XG4gICAgICByZWdleDogJ1swLTJdWzAtOV17MX18M1swLTFdezF9JyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLmRhdGUgPSArdmFsdWU7IH1cbiAgICB9LFxuICAgICdkJzoge1xuICAgICAgcmVnZXg6ICdbMS0yXT9bMC05XXsxfXwzWzAtMV17MX0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuZGF0ZSA9ICt2YWx1ZTsgfVxuICAgIH0sXG4gICAgJ0VFRUUnOiB7XG4gICAgICByZWdleDogJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLkRBWS5qb2luKCd8JylcbiAgICB9LFxuICAgICdFRUUnOiB7XG4gICAgICByZWdleDogJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLlNIT1JUREFZLmpvaW4oJ3wnKVxuICAgIH0sXG4gICAgJ0hIJzoge1xuICAgICAgcmVnZXg6ICcoPzowfDEpWzAtOV18MlswLTNdJyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLmhvdXJzID0gK3ZhbHVlOyB9XG4gICAgfSxcbiAgICAnSCc6IHtcbiAgICAgIHJlZ2V4OiAnMT9bMC05XXwyWzAtM10nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuaG91cnMgPSArdmFsdWU7IH1cbiAgICB9LFxuICAgICdtbSc6IHtcbiAgICAgIHJlZ2V4OiAnWzAtNV1bMC05XScsXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5taW51dGVzID0gK3ZhbHVlOyB9XG4gICAgfSxcbiAgICAnbSc6IHtcbiAgICAgIHJlZ2V4OiAnWzAtOV18WzEtNV1bMC05XScsXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5taW51dGVzID0gK3ZhbHVlOyB9XG4gICAgfSxcbiAgICAnc3NzJzoge1xuICAgICAgcmVnZXg6ICdbMC05XVswLTldWzAtOV0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubWlsbGlzZWNvbmRzID0gK3ZhbHVlOyB9XG4gICAgfSxcbiAgICAnc3MnOiB7XG4gICAgICByZWdleDogJ1swLTVdWzAtOV0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuc2Vjb25kcyA9ICt2YWx1ZTsgfVxuICAgIH0sXG4gICAgJ3MnOiB7XG4gICAgICByZWdleDogJ1swLTldfFsxLTVdWzAtOV0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuc2Vjb25kcyA9ICt2YWx1ZTsgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVQYXJzZXIoZm9ybWF0KSB7XG4gICAgdmFyIG1hcCA9IFtdLCByZWdleCA9IGZvcm1hdC5zcGxpdCgnJyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goZm9ybWF0Q29kZVRvUmVnZXgsIGZ1bmN0aW9uKGRhdGEsIGNvZGUpIHtcbiAgICAgIHZhciBpbmRleCA9IGZvcm1hdC5pbmRleE9mKGNvZGUpO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQuc3BsaXQoJycpO1xuXG4gICAgICAgIHJlZ2V4W2luZGV4XSA9ICcoJyArIGRhdGEucmVnZXggKyAnKSc7XG4gICAgICAgIGZvcm1hdFtpbmRleF0gPSAnJCc7IC8vIEN1c3RvbSBzeW1ib2wgdG8gZGVmaW5lIGNvbnN1bWVkIHBhcnQgb2YgZm9ybWF0XG4gICAgICAgIGZvciAodmFyIGkgPSBpbmRleCArIDEsIG4gPSBpbmRleCArIGNvZGUubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcmVnZXhbaV0gPSAnJztcbiAgICAgICAgICBmb3JtYXRbaV0gPSAnJCc7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LmpvaW4oJycpO1xuXG4gICAgICAgIG1hcC5wdXNoKHsgaW5kZXg6IGluZGV4LCBhcHBseTogZGF0YS5hcHBseSB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICByZWdleDogbmV3IFJlZ0V4cCgnXicgKyByZWdleC5qb2luKCcnKSArICckJyksXG4gICAgICBtYXA6IG9yZGVyQnlGaWx0ZXIobWFwLCAnaW5kZXgnKVxuICAgIH07XG4gIH1cblxuICB0aGlzLnBhcnNlID0gZnVuY3Rpb24oaW5wdXQsIGZvcm1hdCwgYmFzZURhdGUpIHtcbiAgICBpZiAoICFhbmd1bGFyLmlzU3RyaW5nKGlucHV0KSB8fCAhZm9ybWF0ICkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGZvcm1hdCA9ICRsb2NhbGUuREFURVRJTUVfRk9STUFUU1tmb3JtYXRdIHx8IGZvcm1hdDtcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShTUEVDSUFMX0NIQVJBQ1RFUlNfUkVHRVhQLCAnXFxcXCQmJyk7XG5cbiAgICBpZiAoICF0aGlzLnBhcnNlcnNbZm9ybWF0XSApIHtcbiAgICAgIHRoaXMucGFyc2Vyc1tmb3JtYXRdID0gY3JlYXRlUGFyc2VyKGZvcm1hdCk7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlciA9IHRoaXMucGFyc2Vyc1tmb3JtYXRdLFxuICAgICAgICByZWdleCA9IHBhcnNlci5yZWdleCxcbiAgICAgICAgbWFwID0gcGFyc2VyLm1hcCxcbiAgICAgICAgcmVzdWx0cyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcblxuICAgIGlmICggcmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCApIHtcbiAgICAgIHZhciBmaWVsZHMsIGR0O1xuICAgICAgaWYgKGJhc2VEYXRlKSB7XG4gICAgICAgIGZpZWxkcyA9IHtcbiAgICAgICAgICB5ZWFyOiBiYXNlRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIG1vbnRoOiBiYXNlRGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgIGRhdGU6IGJhc2VEYXRlLmdldERhdGUoKSxcbiAgICAgICAgICBob3VyczogYmFzZURhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICBtaW51dGVzOiBiYXNlRGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgc2Vjb25kczogYmFzZURhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgICAgIG1pbGxpc2Vjb25kczogYmFzZURhdGUuZ2V0TWlsbGlzZWNvbmRzKClcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkcyA9IHsgeWVhcjogMTkwMCwgbW9udGg6IDAsIGRhdGU6IDEsIGhvdXJzOiAwLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwLCBtaWxsaXNlY29uZHM6IDAgfTtcbiAgICAgIH1cblxuICAgICAgZm9yKCB2YXIgaSA9IDEsIG4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IG47IGkrKyApIHtcbiAgICAgICAgdmFyIG1hcHBlciA9IG1hcFtpLTFdO1xuICAgICAgICBpZiAoIG1hcHBlci5hcHBseSApIHtcbiAgICAgICAgICBtYXBwZXIuYXBwbHkuY2FsbChmaWVsZHMsIHJlc3VsdHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICggaXNWYWxpZChmaWVsZHMueWVhciwgZmllbGRzLm1vbnRoLCBmaWVsZHMuZGF0ZSkgKSB7XG4gICAgICAgIGR0ID0gbmV3IERhdGUoZmllbGRzLnllYXIsIGZpZWxkcy5tb250aCwgZmllbGRzLmRhdGUsIGZpZWxkcy5ob3VycywgZmllbGRzLm1pbnV0ZXMsIGZpZWxkcy5zZWNvbmRzLFxuICAgICAgICAgIGZpZWxkcy5taWxsaXNlY29uZHMgfHwgMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkdDtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2hlY2sgaWYgZGF0ZSBpcyB2YWxpZCBmb3Igc3BlY2lmaWMgbW9udGggKGFuZCB5ZWFyIGZvciBGZWJydWFyeSkuXG4gIC8vIE1vbnRoOiAwID0gSmFuLCAxID0gRmViLCBldGNcbiAgZnVuY3Rpb24gaXNWYWxpZCh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICAgIGlmIChkYXRlIDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICggbW9udGggPT09IDEgJiYgZGF0ZSA+IDI4KSB7XG4gICAgICAgIHJldHVybiBkYXRlID09PSAyOSAmJiAoKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDApO1xuICAgIH1cblxuICAgIGlmICggbW9udGggPT09IDMgfHwgbW9udGggPT09IDUgfHwgbW9udGggPT09IDggfHwgbW9udGggPT09IDEwKSB7XG4gICAgICAgIHJldHVybiBkYXRlIDwgMzE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1dKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9kYXRlcGFyc2VyL2RhdGVwYXJzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5kYXRlcGlja2VyJywgWyd1aS5ib290c3RyYXAuZGF0ZXBhcnNlcicsICd1aS5ib290c3RyYXAucG9zaXRpb24nXSlcblxuLmNvbnN0YW50KCdkYXRlcGlja2VyQ29uZmlnJywge1xuICBmb3JtYXREYXk6ICdkZCcsXG4gIGZvcm1hdE1vbnRoOiAnTU1NTScsXG4gIGZvcm1hdFllYXI6ICd5eXl5JyxcbiAgZm9ybWF0RGF5SGVhZGVyOiAnRUVFJyxcbiAgZm9ybWF0RGF5VGl0bGU6ICdNTU1NIHl5eXknLFxuICBmb3JtYXRNb250aFRpdGxlOiAneXl5eScsXG4gIGRhdGVwaWNrZXJNb2RlOiAnZGF5JyxcbiAgbWluTW9kZTogJ2RheScsXG4gIG1heE1vZGU6ICd5ZWFyJyxcbiAgc2hvd1dlZWtzOiB0cnVlLFxuICBzdGFydGluZ0RheTogMCxcbiAgeWVhclJhbmdlOiAyMCxcbiAgbWluRGF0ZTogbnVsbCxcbiAgbWF4RGF0ZTogbnVsbCxcbiAgc2hvcnRjdXRQcm9wYWdhdGlvbjogZmFsc2Vcbn0pXG5cbi5jb250cm9sbGVyKCdEYXRlcGlja2VyQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICckcGFyc2UnLCAnJGludGVycG9sYXRlJywgJyR0aW1lb3V0JywgJyRsb2cnLCAnZGF0ZUZpbHRlcicsICdkYXRlcGlja2VyQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsICRwYXJzZSwgJGludGVycG9sYXRlLCAkdGltZW91dCwgJGxvZywgZGF0ZUZpbHRlciwgZGF0ZXBpY2tlckNvbmZpZykge1xuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBuZ01vZGVsQ3RybCA9IHsgJHNldFZpZXdWYWx1ZTogYW5ndWxhci5ub29wIH07IC8vIG51bGxNb2RlbEN0cmw7XG5cbiAgLy8gTW9kZXMgY2hhaW5cbiAgdGhpcy5tb2RlcyA9IFsnZGF5JywgJ21vbnRoJywgJ3llYXInXTtcblxuICAvLyBDb25maWd1cmF0aW9uIGF0dHJpYnV0ZXNcbiAgYW5ndWxhci5mb3JFYWNoKFsnZm9ybWF0RGF5JywgJ2Zvcm1hdE1vbnRoJywgJ2Zvcm1hdFllYXInLCAnZm9ybWF0RGF5SGVhZGVyJywgJ2Zvcm1hdERheVRpdGxlJywgJ2Zvcm1hdE1vbnRoVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICdtaW5Nb2RlJywgJ21heE1vZGUnLCAnc2hvd1dlZWtzJywgJ3N0YXJ0aW5nRGF5JywgJ3llYXJSYW5nZScsICdzaG9ydGN1dFByb3BhZ2F0aW9uJ10sIGZ1bmN0aW9uKCBrZXksIGluZGV4ICkge1xuICAgIHNlbGZba2V5XSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRyc1trZXldKSA/IChpbmRleCA8IDggPyAkaW50ZXJwb2xhdGUoJGF0dHJzW2tleV0pKCRzY29wZS4kcGFyZW50KSA6ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRyc1trZXldKSkgOiBkYXRlcGlja2VyQ29uZmlnW2tleV07XG4gIH0pO1xuXG4gIC8vIFdhdGNoYWJsZSBkYXRlIGF0dHJpYnV0ZXNcbiAgYW5ndWxhci5mb3JFYWNoKFsnbWluRGF0ZScsICdtYXhEYXRlJ10sIGZ1bmN0aW9uKCBrZXkgKSB7XG4gICAgaWYgKCAkYXR0cnNba2V5XSApIHtcbiAgICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzW2tleV0pLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBzZWxmW2tleV0gPSB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XG4gICAgICAgIHNlbGYucmVmcmVzaFZpZXcoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmW2tleV0gPSBkYXRlcGlja2VyQ29uZmlnW2tleV0gPyBuZXcgRGF0ZShkYXRlcGlja2VyQ29uZmlnW2tleV0pIDogbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS5kYXRlcGlja2VyTW9kZSA9ICRzY29wZS5kYXRlcGlja2VyTW9kZSB8fCBkYXRlcGlja2VyQ29uZmlnLmRhdGVwaWNrZXJNb2RlO1xuICAkc2NvcGUubWF4TW9kZSA9IHNlbGYubWF4TW9kZTtcbiAgJHNjb3BlLnVuaXF1ZUlkID0gJ2RhdGVwaWNrZXItJyArICRzY29wZS4kaWQgKyAnLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG5cbiAgaWYoYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmluaXREYXRlKSkge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5pbml0RGF0ZSkgfHwgbmV3IERhdGUoKTtcbiAgICAkc2NvcGUuJHBhcmVudC4kd2F0Y2goJGF0dHJzLmluaXREYXRlLCBmdW5jdGlvbihpbml0RGF0ZSl7XG4gICAgICBpZihpbml0RGF0ZSAmJiAobmdNb2RlbEN0cmwuJGlzRW1wdHkobmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUpIHx8IG5nTW9kZWxDdHJsLiRpbnZhbGlkKSl7XG4gICAgICAgIHNlbGYuYWN0aXZlRGF0ZSA9IGluaXREYXRlO1xuICAgICAgICBzZWxmLnJlZnJlc2hWaWV3KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gIG5ldyBEYXRlKCk7XG4gIH1cblxuICAkc2NvcGUuaXNBY3RpdmUgPSBmdW5jdGlvbihkYXRlT2JqZWN0KSB7XG4gICAgaWYgKHNlbGYuY29tcGFyZShkYXRlT2JqZWN0LmRhdGUsIHNlbGYuYWN0aXZlRGF0ZSkgPT09IDApIHtcbiAgICAgICRzY29wZS5hY3RpdmVEYXRlSWQgPSBkYXRlT2JqZWN0LnVpZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oIG5nTW9kZWxDdHJsXyApIHtcbiAgICBuZ01vZGVsQ3RybCA9IG5nTW9kZWxDdHJsXztcblxuICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgfTtcbiAgfTtcblxuICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggbmdNb2RlbEN0cmwuJHZpZXdWYWx1ZSApIHtcbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoIG5nTW9kZWxDdHJsLiR2aWV3VmFsdWUgKSxcbiAgICAgICAgICBpc1ZhbGlkID0gIWlzTmFOKGRhdGUpO1xuXG4gICAgICBpZiAoIGlzVmFsaWQgKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmVycm9yKCdEYXRlcGlja2VyIGRpcmVjdGl2ZTogXCJuZy1tb2RlbFwiIHZhbHVlIG11c3QgYmUgYSBEYXRlIG9iamVjdCwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDAxLjAxLjE5NzAgb3IgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGFuIFJGQzI4MjIgb3IgSVNPIDg2MDEgZGF0ZS4nKTtcbiAgICAgIH1cbiAgICAgIG5nTW9kZWxDdHJsLiRzZXRWYWxpZGl0eSgnZGF0ZScsIGlzVmFsaWQpO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gIH07XG5cbiAgdGhpcy5yZWZyZXNoVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggdGhpcy5lbGVtZW50ICkge1xuICAgICAgdGhpcy5fcmVmcmVzaFZpZXcoKTtcblxuICAgICAgdmFyIGRhdGUgPSBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlID8gbmV3IERhdGUobmdNb2RlbEN0cmwuJHZpZXdWYWx1ZSkgOiBudWxsO1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdkYXRlLWRpc2FibGVkJywgIWRhdGUgfHwgKHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pc0Rpc2FibGVkKGRhdGUpKSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY3JlYXRlRGF0ZU9iamVjdCA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xuICAgIHZhciBtb2RlbCA9IG5nTW9kZWxDdHJsLiR2aWV3VmFsdWUgPyBuZXcgRGF0ZShuZ01vZGVsQ3RybC4kdmlld1ZhbHVlKSA6IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgICBsYWJlbDogZGF0ZUZpbHRlcihkYXRlLCBmb3JtYXQpLFxuICAgICAgc2VsZWN0ZWQ6IG1vZGVsICYmIHRoaXMuY29tcGFyZShkYXRlLCBtb2RlbCkgPT09IDAsXG4gICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkKGRhdGUpLFxuICAgICAgY3VycmVudDogdGhpcy5jb21wYXJlKGRhdGUsIG5ldyBEYXRlKCkpID09PSAwLFxuICAgICAgY3VzdG9tQ2xhc3M6IHRoaXMuY3VzdG9tQ2xhc3MoZGF0ZSlcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uKCBkYXRlICkge1xuICAgIHJldHVybiAoKHRoaXMubWluRGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5taW5EYXRlKSA8IDApIHx8ICh0aGlzLm1heERhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPiAwKSB8fCAoJGF0dHJzLmRhdGVEaXNhYmxlZCAmJiAkc2NvcGUuZGF0ZURpc2FibGVkKHtkYXRlOiBkYXRlLCBtb2RlOiAkc2NvcGUuZGF0ZXBpY2tlck1vZGV9KSkpO1xuICB9O1xuXG4gICAgdGhpcy5jdXN0b21DbGFzcyA9IGZ1bmN0aW9uKCBkYXRlICkge1xuICAgICAgcmV0dXJuICRzY29wZS5jdXN0b21DbGFzcyh7ZGF0ZTogZGF0ZSwgbW9kZTogJHNjb3BlLmRhdGVwaWNrZXJNb2RlfSk7XG4gICAgfTtcblxuICAvLyBTcGxpdCBhcnJheSBpbnRvIHNtYWxsZXIgYXJyYXlzXG4gIHRoaXMuc3BsaXQgPSBmdW5jdGlvbihhcnIsIHNpemUpIHtcbiAgICB2YXIgYXJyYXlzID0gW107XG4gICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgICBhcnJheXMucHVzaChhcnIuc3BsaWNlKDAsIHNpemUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5cztcbiAgfTtcblxuICAkc2NvcGUuc2VsZWN0ID0gZnVuY3Rpb24oIGRhdGUgKSB7XG4gICAgaWYgKCAkc2NvcGUuZGF0ZXBpY2tlck1vZGUgPT09IHNlbGYubWluTW9kZSApIHtcbiAgICAgIHZhciBkdCA9IG5nTW9kZWxDdHJsLiR2aWV3VmFsdWUgPyBuZXcgRGF0ZSggbmdNb2RlbEN0cmwuJHZpZXdWYWx1ZSApIDogbmV3IERhdGUoMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICBkdC5zZXRGdWxsWWVhciggZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpICk7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKCBkdCApO1xuICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmFjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgJHNjb3BlLmRhdGVwaWNrZXJNb2RlID0gc2VsZi5tb2Rlc1sgc2VsZi5tb2Rlcy5pbmRleE9mKCAkc2NvcGUuZGF0ZXBpY2tlck1vZGUgKSAtIDEgXTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLm1vdmUgPSBmdW5jdGlvbiggZGlyZWN0aW9uICkge1xuICAgIHZhciB5ZWFyID0gc2VsZi5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyBkaXJlY3Rpb24gKiAoc2VsZi5zdGVwLnllYXJzIHx8IDApLFxuICAgICAgICBtb250aCA9IHNlbGYuYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgZGlyZWN0aW9uICogKHNlbGYuc3RlcC5tb250aHMgfHwgMCk7XG4gICAgc2VsZi5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcbiAgICBzZWxmLnJlZnJlc2hWaWV3KCk7XG4gIH07XG5cbiAgJHNjb3BlLnRvZ2dsZU1vZGUgPSBmdW5jdGlvbiggZGlyZWN0aW9uICkge1xuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCAxO1xuXG4gICAgaWYgKCgkc2NvcGUuZGF0ZXBpY2tlck1vZGUgPT09IHNlbGYubWF4TW9kZSAmJiBkaXJlY3Rpb24gPT09IDEpIHx8ICgkc2NvcGUuZGF0ZXBpY2tlck1vZGUgPT09IHNlbGYubWluTW9kZSAmJiBkaXJlY3Rpb24gPT09IC0xKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICRzY29wZS5kYXRlcGlja2VyTW9kZSA9IHNlbGYubW9kZXNbIHNlbGYubW9kZXMuaW5kZXhPZiggJHNjb3BlLmRhdGVwaWNrZXJNb2RlICkgKyBkaXJlY3Rpb24gXTtcbiAgfTtcblxuICAvLyBLZXkgZXZlbnQgbWFwcGVyXG4gICRzY29wZS5rZXlzID0geyAxMzonZW50ZXInLCAzMjonc3BhY2UnLCAzMzoncGFnZXVwJywgMzQ6J3BhZ2Vkb3duJywgMzU6J2VuZCcsIDM2Oidob21lJywgMzc6J2xlZnQnLCAzODondXAnLCAzOToncmlnaHQnLCA0MDonZG93bicgfTtcblxuICB2YXIgZm9jdXNFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmVsZW1lbnRbMF0uZm9jdXMoKTtcbiAgICB9LCAwICwgZmFsc2UpO1xuICB9O1xuXG4gIC8vIExpc3RlbiBmb3IgZm9jdXMgcmVxdWVzdHMgZnJvbSBwb3B1cCBkaXJlY3RpdmVcbiAgJHNjb3BlLiRvbignZGF0ZXBpY2tlci5mb2N1cycsIGZvY3VzRWxlbWVudCk7XG5cbiAgJHNjb3BlLmtleWRvd24gPSBmdW5jdGlvbiggZXZ0ICkge1xuICAgIHZhciBrZXkgPSAkc2NvcGUua2V5c1tldnQud2hpY2hdO1xuXG4gICAgaWYgKCAha2V5IHx8IGV2dC5zaGlmdEtleSB8fCBldnQuYWx0S2V5ICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCFzZWxmLnNob3J0Y3V0UHJvcGFnYXRpb24pe1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2VudGVyJyB8fCBrZXkgPT09ICdzcGFjZScpIHtcbiAgICAgIGlmICggc2VsZi5pc0Rpc2FibGVkKHNlbGYuYWN0aXZlRGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkbyBub3RoaW5nXG4gICAgICB9XG4gICAgICAkc2NvcGUuc2VsZWN0KHNlbGYuYWN0aXZlRGF0ZSk7XG4gICAgICBmb2N1c0VsZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGV2dC5jdHJsS2V5ICYmIChrZXkgPT09ICd1cCcgfHwga2V5ID09PSAnZG93bicpKSB7XG4gICAgICAkc2NvcGUudG9nZ2xlTW9kZShrZXkgPT09ICd1cCcgPyAxIDogLTEpO1xuICAgICAgZm9jdXNFbGVtZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuaGFuZGxlS2V5RG93bihrZXksIGV2dCk7XG4gICAgICBzZWxmLnJlZnJlc2hWaWV3KCk7XG4gICAgfVxuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoICdkYXRlcGlja2VyJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGRhdGVwaWNrZXJNb2RlOiAnPT8nLFxuICAgICAgZGF0ZURpc2FibGVkOiAnJicsXG4gICAgICBjdXN0b21DbGFzczogJyYnLFxuICAgICAgc2hvcnRjdXRQcm9wYWdhdGlvbjogJyY/J1xuICAgIH0sXG4gICAgcmVxdWlyZTogWydkYXRlcGlja2VyJywgJz9ebmdNb2RlbCddLFxuICAgIGNvbnRyb2xsZXI6ICdEYXRlcGlja2VyQ29udHJvbGxlcicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgdmFyIGRhdGVwaWNrZXJDdHJsID0gY3RybHNbMF0sIG5nTW9kZWxDdHJsID0gY3RybHNbMV07XG5cbiAgICAgIGlmICggbmdNb2RlbEN0cmwgKSB7XG4gICAgICAgIGRhdGVwaWNrZXJDdHJsLmluaXQoIG5nTW9kZWxDdHJsICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnZGF5cGlja2VyJywgWydkYXRlRmlsdGVyJywgZnVuY3Rpb24gKGRhdGVGaWx0ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbCcsXG4gICAgcmVxdWlyZTogJ15kYXRlcGlja2VyJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIHNjb3BlLnNob3dXZWVrcyA9IGN0cmwuc2hvd1dlZWtzO1xuXG4gICAgICBjdHJsLnN0ZXAgPSB7IG1vbnRoczogMSB9O1xuICAgICAgY3RybC5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgdmFyIERBWVNfSU5fTU9OVEggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG4gICAgICBmdW5jdGlvbiBnZXREYXlzSW5Nb250aCggeWVhciwgbW9udGggKSB7XG4gICAgICAgIHJldHVybiAoKG1vbnRoID09PSAxKSAmJiAoeWVhciAlIDQgPT09IDApICYmICgoeWVhciAlIDEwMCAhPT0gMCkgfHwgKHllYXIgJSA0MDAgPT09IDApKSkgPyAyOSA6IERBWVNfSU5fTU9OVEhbbW9udGhdO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIG4pIHtcbiAgICAgICAgdmFyIGRhdGVzID0gbmV3IEFycmF5KG4pLCBjdXJyZW50ID0gbmV3IERhdGUoc3RhcnREYXRlKSwgaSA9IDA7XG4gICAgICAgIGN1cnJlbnQuc2V0SG91cnMoMTIpOyAvLyBQcmV2ZW50IHJlcGVhdGVkIGRhdGVzIGJlY2F1c2Ugb2YgdGltZXpvbmUgYnVnXG4gICAgICAgIHdoaWxlICggaSA8IG4gKSB7XG4gICAgICAgICAgZGF0ZXNbaSsrXSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQuc2V0RGF0ZSggY3VycmVudC5nZXREYXRlKCkgKyAxICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGVzO1xuICAgICAgfVxuXG4gICAgICBjdHJsLl9yZWZyZXNoVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeWVhciA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIG1vbnRoID0gY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLFxuICAgICAgICAgIGRpZmZlcmVuY2UgPSBjdHJsLnN0YXJ0aW5nRGF5IC0gZmlyc3REYXlPZk1vbnRoLmdldERheSgpLFxuICAgICAgICAgIG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID0gKGRpZmZlcmVuY2UgPiAwKSA/IDcgLSBkaWZmZXJlbmNlIDogLSBkaWZmZXJlbmNlLFxuICAgICAgICAgIGZpcnN0RGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZNb250aCk7XG5cbiAgICAgICAgaWYgKCBudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA+IDAgKSB7XG4gICAgICAgICAgZmlyc3REYXRlLnNldERhdGUoIC0gbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggKyAxICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA0MiBpcyB0aGUgbnVtYmVyIG9mIGRheXMgb24gYSBzaXgtbW9udGggY2FsZW5kYXJcbiAgICAgICAgdmFyIGRheXMgPSBnZXREYXRlcyhmaXJzdERhdGUsIDQyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0MjsgaSArKykge1xuICAgICAgICAgIGRheXNbaV0gPSBhbmd1bGFyLmV4dGVuZChjdHJsLmNyZWF0ZURhdGVPYmplY3QoZGF5c1tpXSwgY3RybC5mb3JtYXREYXkpLCB7XG4gICAgICAgICAgICBzZWNvbmRhcnk6IGRheXNbaV0uZ2V0TW9udGgoKSAhPT0gbW9udGgsXG4gICAgICAgICAgICB1aWQ6IHNjb3BlLnVuaXF1ZUlkICsgJy0nICsgaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUubGFiZWxzID0gbmV3IEFycmF5KDcpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgIHNjb3BlLmxhYmVsc1tqXSA9IHtcbiAgICAgICAgICAgIGFiYnI6IGRhdGVGaWx0ZXIoZGF5c1tqXS5kYXRlLCBjdHJsLmZvcm1hdERheUhlYWRlciksXG4gICAgICAgICAgICBmdWxsOiBkYXRlRmlsdGVyKGRheXNbal0uZGF0ZSwgJ0VFRUUnKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS50aXRsZSA9IGRhdGVGaWx0ZXIoY3RybC5hY3RpdmVEYXRlLCBjdHJsLmZvcm1hdERheVRpdGxlKTtcbiAgICAgICAgc2NvcGUucm93cyA9IGN0cmwuc3BsaXQoZGF5cywgNyk7XG5cbiAgICAgICAgaWYgKCBzY29wZS5zaG93V2Vla3MgKSB7XG4gICAgICAgICAgc2NvcGUud2Vla051bWJlcnMgPSBbXTtcbiAgICAgICAgICB2YXIgdGh1cnNkYXlJbmRleCA9ICg0ICsgNyAtIGN0cmwuc3RhcnRpbmdEYXkpICUgNyxcbiAgICAgICAgICAgICAgbnVtV2Vla3MgPSBzY29wZS5yb3dzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBjdXJXZWVrID0gMDsgY3VyV2VlayA8IG51bVdlZWtzOyBjdXJXZWVrKyspIHtcbiAgICAgICAgICAgIHNjb3BlLndlZWtOdW1iZXJzLnB1c2goXG4gICAgICAgICAgICAgIGdldElTTzg2MDFXZWVrTnVtYmVyKCBzY29wZS5yb3dzW2N1cldlZWtdW3RodXJzZGF5SW5kZXhdLmRhdGUgKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSggZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpICkgLSBuZXcgRGF0ZSggZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSwgZGF0ZTIuZ2V0RGF0ZSgpICkgKTtcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIGdldElTTzg2MDFXZWVrTnVtYmVyKGRhdGUpIHtcbiAgICAgICAgdmFyIGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpICsgNCAtIChjaGVja0RhdGUuZ2V0RGF5KCkgfHwgNykpOyAvLyBUaHVyc2RheVxuICAgICAgICB2YXIgdGltZSA9IGNoZWNrRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIGNoZWNrRGF0ZS5zZXRNb250aCgwKTsgLy8gQ29tcGFyZSB3aXRoIEphbiAxXG4gICAgICAgIGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJvdW5kKCh0aW1lIC0gY2hlY2tEYXRlKSAvIDg2NDAwMDAwKSAvIDcpICsgMTtcbiAgICAgIH1cblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgLSAxOyAgIC8vIHVwXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndXAnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgLSA3OyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBkYXRlID0gZGF0ZSArIDE7ICAgLy8gZG93blxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyA3O1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3BhZ2V1cCcgfHwga2V5ID09PSAncGFnZWRvd24nKSB7XG4gICAgICAgICAgdmFyIG1vbnRoID0gY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyAoa2V5ID09PSAncGFnZXVwJyA/IC0gMSA6IDEpO1xuICAgICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXRNb250aChtb250aCwgMSk7XG4gICAgICAgICAgZGF0ZSA9IE1hdGgubWluKGdldERheXNJbk1vbnRoKGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLCBjdHJsLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSksIGRhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgZGF0ZSA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZW5kJykge1xuICAgICAgICAgIGRhdGUgPSBnZXREYXlzSW5Nb250aChjdHJsLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSwgY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXREYXRlKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCdtb250aHBpY2tlcicsIFsnZGF0ZUZpbHRlcicsIGZ1bmN0aW9uIChkYXRlRmlsdGVyKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbCcsXG4gICAgcmVxdWlyZTogJ15kYXRlcGlja2VyJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIGN0cmwuc3RlcCA9IHsgeWVhcnM6IDEgfTtcbiAgICAgIGN0cmwuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIGN0cmwuX3JlZnJlc2hWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtb250aHMgPSBuZXcgQXJyYXkoMTIpLFxuICAgICAgICAgICAgeWVhciA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IDEyOyBpKysgKSB7XG4gICAgICAgICAgbW9udGhzW2ldID0gYW5ndWxhci5leHRlbmQoY3RybC5jcmVhdGVEYXRlT2JqZWN0KG5ldyBEYXRlKHllYXIsIGksIDEpLCBjdHJsLmZvcm1hdE1vbnRoKSwge1xuICAgICAgICAgICAgdWlkOiBzY29wZS51bmlxdWVJZCArICctJyArIGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLnRpdGxlID0gZGF0ZUZpbHRlcihjdHJsLmFjdGl2ZURhdGUsIGN0cmwuZm9ybWF0TW9udGhUaXRsZSk7XG4gICAgICAgIHNjb3BlLnJvd3MgPSBjdHJsLnNwbGl0KG1vbnRocywgMyk7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCBkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpICkgLSBuZXcgRGF0ZSggZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSApO1xuICAgICAgfTtcblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMTsgICAvLyB1cFxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3VwJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMzsgICAvLyBkb3duXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyAxOyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdkb3duJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlICsgMztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdwYWdldXAnIHx8IGtleSA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICAgIHZhciB5ZWFyID0gY3RybC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyAoa2V5ID09PSAncGFnZXVwJyA/IC0gMSA6IDEpO1xuICAgICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgICAgIGRhdGUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICBkYXRlID0gMTE7XG4gICAgICAgIH1cbiAgICAgICAgY3RybC5hY3RpdmVEYXRlLnNldE1vbnRoKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd5ZWFycGlja2VyJywgWydkYXRlRmlsdGVyJywgZnVuY3Rpb24gKGRhdGVGaWx0ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWwnLFxuICAgIHJlcXVpcmU6ICdeZGF0ZXBpY2tlcicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBjdHJsLnllYXJSYW5nZTtcblxuICAgICAgY3RybC5zdGVwID0geyB5ZWFyczogcmFuZ2UgfTtcbiAgICAgIGN0cmwuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFN0YXJ0aW5nWWVhciggeWVhciApIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KCh5ZWFyIC0gMSkgLyByYW5nZSwgMTApICogcmFuZ2UgKyAxO1xuICAgICAgfVxuXG4gICAgICBjdHJsLl9yZWZyZXNoVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeWVhcnMgPSBuZXcgQXJyYXkocmFuZ2UpO1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMCwgc3RhcnQgPSBnZXRTdGFydGluZ1llYXIoY3RybC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpOyBpIDwgcmFuZ2U7IGkrKyApIHtcbiAgICAgICAgICB5ZWFyc1tpXSA9IGFuZ3VsYXIuZXh0ZW5kKGN0cmwuY3JlYXRlRGF0ZU9iamVjdChuZXcgRGF0ZShzdGFydCArIGksIDAsIDEpLCBjdHJsLmZvcm1hdFllYXIpLCB7XG4gICAgICAgICAgICB1aWQ6IHNjb3BlLnVuaXF1ZUlkICsgJy0nICsgaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUudGl0bGUgPSBbeWVhcnNbMF0ubGFiZWwsIHllYXJzW3JhbmdlIC0gMV0ubGFiZWxdLmpvaW4oJyAtICcpO1xuICAgICAgICBzY29wZS5yb3dzID0gY3RybC5zcGxpdCh5ZWFycywgNSk7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUxLmdldEZ1bGxZZWFyKCkgLSBkYXRlMi5nZXRGdWxsWWVhcigpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMTsgICAvLyB1cFxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3VwJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gNTsgICAvLyBkb3duXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyAxOyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdkb3duJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlICsgNTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdwYWdldXAnIHx8IGtleSA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICAgIGRhdGUgKz0gKGtleSA9PT0gJ3BhZ2V1cCcgPyAtIDEgOiAxKSAqIGN0cmwuc3RlcC55ZWFycztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgICAgIGRhdGUgPSBnZXRTdGFydGluZ1llYXIoIGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZW5kJykge1xuICAgICAgICAgIGRhdGUgPSBnZXRTdGFydGluZ1llYXIoIGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICkgKyByYW5nZSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgY3RybC5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uY29uc3RhbnQoJ2RhdGVwaWNrZXJQb3B1cENvbmZpZycsIHtcbiAgZGF0ZXBpY2tlclBvcHVwOiAneXl5eS1NTS1kZCcsXG4gIGh0bWw1VHlwZXM6IHtcbiAgICBkYXRlOiAneXl5eS1NTS1kZCcsXG4gICAgJ2RhdGV0aW1lLWxvY2FsJzogJ3l5eXktTU0tZGRUSEg6bW06c3Muc3NzJyxcbiAgICAnbW9udGgnOiAneXl5eS1NTSdcbiAgfSxcbiAgY3VycmVudFRleHQ6ICdUb2RheScsXG4gIGNsZWFyVGV4dDogJ0NsZWFyJyxcbiAgY2xvc2VUZXh0OiAnRG9uZScsXG4gIGNsb3NlT25EYXRlU2VsZWN0aW9uOiB0cnVlLFxuICBhcHBlbmRUb0JvZHk6IGZhbHNlLFxuICBzaG93QnV0dG9uQmFyOiB0cnVlXG59KVxuXG4uZGlyZWN0aXZlKCdkYXRlcGlja2VyUG9wdXAnLCBbJyRjb21waWxlJywgJyRwYXJzZScsICckZG9jdW1lbnQnLCAnJHBvc2l0aW9uJywgJ2RhdGVGaWx0ZXInLCAnZGF0ZVBhcnNlcicsICdkYXRlcGlja2VyUG9wdXBDb25maWcnLFxuZnVuY3Rpb24gKCRjb21waWxlLCAkcGFyc2UsICRkb2N1bWVudCwgJHBvc2l0aW9uLCBkYXRlRmlsdGVyLCBkYXRlUGFyc2VyLCBkYXRlcGlja2VyUG9wdXBDb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGlzT3BlbjogJz0/JyxcbiAgICAgIGN1cnJlbnRUZXh0OiAnQCcsXG4gICAgICBjbGVhclRleHQ6ICdAJyxcbiAgICAgIGNsb3NlVGV4dDogJ0AnLFxuICAgICAgZGF0ZURpc2FibGVkOiAnJicsXG4gICAgICBjdXN0b21DbGFzczogJyYnXG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgIHZhciBkYXRlRm9ybWF0LFxuICAgICAgICAgIGNsb3NlT25EYXRlU2VsZWN0aW9uID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuY2xvc2VPbkRhdGVTZWxlY3Rpb24pID8gc2NvcGUuJHBhcmVudC4kZXZhbChhdHRycy5jbG9zZU9uRGF0ZVNlbGVjdGlvbikgOiBkYXRlcGlja2VyUG9wdXBDb25maWcuY2xvc2VPbkRhdGVTZWxlY3Rpb24sXG4gICAgICAgICAgYXBwZW5kVG9Cb2R5ID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZGF0ZXBpY2tlckFwcGVuZFRvQm9keSkgPyBzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLmRhdGVwaWNrZXJBcHBlbmRUb0JvZHkpIDogZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmFwcGVuZFRvQm9keTtcblxuICAgICAgc2NvcGUuc2hvd0J1dHRvbkJhciA9IGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLnNob3dCdXR0b25CYXIpID8gc2NvcGUuJHBhcmVudC4kZXZhbChhdHRycy5zaG93QnV0dG9uQmFyKSA6IGRhdGVwaWNrZXJQb3B1cENvbmZpZy5zaG93QnV0dG9uQmFyO1xuXG4gICAgICBzY29wZS5nZXRUZXh0ID0gZnVuY3Rpb24oIGtleSApIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlW2tleSArICdUZXh0J10gfHwgZGF0ZXBpY2tlclBvcHVwQ29uZmlnW2tleSArICdUZXh0J107XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXNIdG1sNURhdGVJbnB1dCA9IGZhbHNlO1xuICAgICAgaWYgKGRhdGVwaWNrZXJQb3B1cENvbmZpZy5odG1sNVR5cGVzW2F0dHJzLnR5cGVdKSB7XG4gICAgICAgIGRhdGVGb3JtYXQgPSBkYXRlcGlja2VyUG9wdXBDb25maWcuaHRtbDVUeXBlc1thdHRycy50eXBlXTtcbiAgICAgICAgaXNIdG1sNURhdGVJbnB1dCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlRm9ybWF0ID0gYXR0cnMuZGF0ZXBpY2tlclBvcHVwIHx8IGRhdGVwaWNrZXJQb3B1cENvbmZpZy5kYXRlcGlja2VyUG9wdXA7XG4gICAgICAgIGF0dHJzLiRvYnNlcnZlKCdkYXRlcGlja2VyUG9wdXAnLCBmdW5jdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXdEYXRlRm9ybWF0ID0gdmFsdWUgfHwgZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmRhdGVwaWNrZXJQb3B1cDtcbiAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlICRtb2RlbFZhbHVlIHRvIGVuc3VyZSB0aGF0IGZvcm1hdHRlcnMgcmUtcnVuXG4gICAgICAgICAgICAvLyBGSVhNRTogUmVmYWN0b3Igd2hlbiBQUiBpcyBtZXJnZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8xMDc2NFxuICAgICAgICAgICAgaWYgKG5ld0RhdGVGb3JtYXQgIT09IGRhdGVGb3JtYXQpIHtcbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdCA9IG5ld0RhdGVGb3JtYXQ7XG4gICAgICAgICAgICAgIG5nTW9kZWwuJG1vZGVsVmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgIGlmICghZGF0ZUZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGF0ZXBpY2tlclBvcHVwIG11c3QgaGF2ZSBhIGRhdGUgZm9ybWF0IHNwZWNpZmllZC4nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRlRm9ybWF0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGF0ZXBpY2tlclBvcHVwIG11c3QgaGF2ZSBhIGRhdGUgZm9ybWF0IHNwZWNpZmllZC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSHRtbDVEYXRlSW5wdXQgJiYgYXR0cnMuZGF0ZXBpY2tlclBvcHVwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSFRNTDUgZGF0ZSBpbnB1dCB0eXBlcyBkbyBub3Qgc3VwcG9ydCBjdXN0b20gZm9ybWF0cy4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gcG9wdXAgZWxlbWVudCB1c2VkIHRvIGRpc3BsYXkgY2FsZW5kYXJcbiAgICAgIHZhciBwb3B1cEVsID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IGRhdGVwaWNrZXItcG9wdXAtd3JhcD48ZGl2IGRhdGVwaWNrZXI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICBwb3B1cEVsLmF0dHIoe1xuICAgICAgICAnbmctbW9kZWwnOiAnZGF0ZScsXG4gICAgICAgICduZy1jaGFuZ2UnOiAnZGF0ZVNlbGVjdGlvbigpJ1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGNhbWVsdG9EYXNoKCBzdHJpbmcgKXtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKCQxKSB7IHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gZGF0ZXBpY2tlciBlbGVtZW50XG4gICAgICB2YXIgZGF0ZXBpY2tlckVsID0gYW5ndWxhci5lbGVtZW50KHBvcHVwRWwuY2hpbGRyZW4oKVswXSk7XG4gICAgICBpZiAoaXNIdG1sNURhdGVJbnB1dCkge1xuICAgICAgICBpZiAoYXR0cnMudHlwZSA9PSAnbW9udGgnKSB7XG4gICAgICAgICAgZGF0ZXBpY2tlckVsLmF0dHIoJ2RhdGVwaWNrZXItbW9kZScsICdcIm1vbnRoXCInKTtcbiAgICAgICAgICBkYXRlcGlja2VyRWwuYXR0cignbWluLW1vZGUnLCAnbW9udGgnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIGF0dHJzLmRhdGVwaWNrZXJPcHRpb25zICkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHNjb3BlLiRwYXJlbnQuJGV2YWwoYXR0cnMuZGF0ZXBpY2tlck9wdGlvbnMpO1xuICAgICAgICBpZihvcHRpb25zLmluaXREYXRlKSB7XG4gICAgICAgICAgc2NvcGUuaW5pdERhdGUgPSBvcHRpb25zLmluaXREYXRlO1xuICAgICAgICAgIGRhdGVwaWNrZXJFbC5hdHRyKCAnaW5pdC1kYXRlJywgJ2luaXREYXRlJyApO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmluaXREYXRlO1xuICAgICAgICB9XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChvcHRpb25zLCBmdW5jdGlvbiggdmFsdWUsIG9wdGlvbiApIHtcbiAgICAgICAgICBkYXRlcGlja2VyRWwuYXR0ciggY2FtZWx0b0Rhc2gob3B0aW9uKSwgdmFsdWUgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNjb3BlLndhdGNoRGF0YSA9IHt9O1xuICAgICAgYW5ndWxhci5mb3JFYWNoKFsnbWluRGF0ZScsICdtYXhEYXRlJywgJ2RhdGVwaWNrZXJNb2RlJywgJ2luaXREYXRlJywgJ3Nob3J0Y3V0UHJvcGFnYXRpb24nXSwgZnVuY3Rpb24oIGtleSApIHtcbiAgICAgICAgaWYgKCBhdHRyc1trZXldICkge1xuICAgICAgICAgIHZhciBnZXRBdHRyaWJ1dGUgPSAkcGFyc2UoYXR0cnNba2V5XSk7XG4gICAgICAgICAgc2NvcGUuJHBhcmVudC4kd2F0Y2goZ2V0QXR0cmlidXRlLCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICBzY29wZS53YXRjaERhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRhdGVwaWNrZXJFbC5hdHRyKGNhbWVsdG9EYXNoKGtleSksICd3YXRjaERhdGEuJyArIGtleSk7XG5cbiAgICAgICAgICAvLyBQcm9wYWdhdGUgY2hhbmdlcyBmcm9tIGRhdGVwaWNrZXIgdG8gb3V0c2lkZVxuICAgICAgICAgIGlmICgga2V5ID09PSAnZGF0ZXBpY2tlck1vZGUnICkge1xuICAgICAgICAgICAgdmFyIHNldEF0dHJpYnV0ZSA9IGdldEF0dHJpYnV0ZS5hc3NpZ247XG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ3dhdGNoRGF0YS4nICsga2V5LCBmdW5jdGlvbih2YWx1ZSwgb2xkdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKCB2YWx1ZSAhPT0gb2xkdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlKHNjb3BlLiRwYXJlbnQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChhdHRycy5kYXRlRGlzYWJsZWQpIHtcbiAgICAgICAgZGF0ZXBpY2tlckVsLmF0dHIoJ2RhdGUtZGlzYWJsZWQnLCAnZGF0ZURpc2FibGVkKHsgZGF0ZTogZGF0ZSwgbW9kZTogbW9kZSB9KScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0cnMuc2hvd1dlZWtzKSB7XG4gICAgICAgIGRhdGVwaWNrZXJFbC5hdHRyKCdzaG93LXdlZWtzJywgYXR0cnMuc2hvd1dlZWtzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJzLmN1c3RvbUNsYXNzKXtcbiAgICAgICAgZGF0ZXBpY2tlckVsLmF0dHIoJ2N1c3RvbS1jbGFzcycsICdjdXN0b21DbGFzcyh7IGRhdGU6IGRhdGUsIG1vZGU6IG1vZGUgfSknKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcGFyc2VEYXRlKHZpZXdWYWx1ZSkge1xuICAgICAgICBpZiAoYW5ndWxhci5pc051bWJlcih2aWV3VmFsdWUpKSB7XG4gICAgICAgICAgLy8gcHJlc3VtYWJseSB0aW1lc3RhbXAgdG8gZGF0ZSBvYmplY3RcbiAgICAgICAgICB2aWV3VmFsdWUgPSBuZXcgRGF0ZSh2aWV3VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2aWV3VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChhbmd1bGFyLmlzRGF0ZSh2aWV3VmFsdWUpICYmICFpc05hTih2aWV3VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHZpZXdWYWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChhbmd1bGFyLmlzU3RyaW5nKHZpZXdWYWx1ZSkpIHtcbiAgICAgICAgICB2YXIgZGF0ZSA9IGRhdGVQYXJzZXIucGFyc2Uodmlld1ZhbHVlLCBkYXRlRm9ybWF0LCBzY29wZS5kYXRlKSB8fCBuZXcgRGF0ZSh2aWV3VmFsdWUpO1xuICAgICAgICAgIGlmIChpc05hTihkYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdmFsaWRhdG9yKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBtb2RlbFZhbHVlIHx8IHZpZXdWYWx1ZTtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGFuZ3VsYXIuaXNEYXRlKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoYW5ndWxhci5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICB2YXIgZGF0ZSA9IGRhdGVQYXJzZXIucGFyc2UodmFsdWUsIGRhdGVGb3JtYXQpIHx8IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gIWlzTmFOKGRhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzSHRtbDVEYXRlSW5wdXQpIHtcbiAgICAgICAgLy8gSW50ZXJuYWwgQVBJIHRvIG1haW50YWluIHRoZSBjb3JyZWN0IG5nLWludmFsaWQtW2tleV0gY2xhc3NcbiAgICAgICAgbmdNb2RlbC4kJHBhcnNlck5hbWUgPSAnZGF0ZSc7XG4gICAgICAgIG5nTW9kZWwuJHZhbGlkYXRvcnMuZGF0ZSA9IHZhbGlkYXRvcjtcbiAgICAgICAgbmdNb2RlbC4kcGFyc2Vycy51bnNoaWZ0KHBhcnNlRGF0ZSk7XG4gICAgICAgIG5nTW9kZWwuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBzY29wZS5kYXRlID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIG5nTW9kZWwuJGlzRW1wdHkodmFsdWUpID8gdmFsdWUgOiBkYXRlRmlsdGVyKHZhbHVlLCBkYXRlRm9ybWF0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHNjb3BlLmRhdGUgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJbm5lciBjaGFuZ2VcbiAgICAgIHNjb3BlLmRhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbihkdCkge1xuICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoZHQpKSB7XG4gICAgICAgICAgc2NvcGUuZGF0ZSA9IGR0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRlID0gc2NvcGUuZGF0ZSA/IGRhdGVGaWx0ZXIoc2NvcGUuZGF0ZSwgZGF0ZUZvcm1hdCkgOiAnJztcbiAgICAgICAgZWxlbWVudC52YWwoZGF0ZSk7XG4gICAgICAgIG5nTW9kZWwuJHNldFZpZXdWYWx1ZShkYXRlKTtcblxuICAgICAgICBpZiAoIGNsb3NlT25EYXRlU2VsZWN0aW9uICkge1xuICAgICAgICAgIHNjb3BlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGVsZW1lbnRbMF0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gRGV0ZWN0IGNoYW5nZXMgaW4gdGhlIHZpZXcgZnJvbSB0aGUgdGV4dCBib3hcbiAgICAgIG5nTW9kZWwuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjb3BlLmRhdGUgPSBkYXRlUGFyc2VyLnBhcnNlKG5nTW9kZWwuJHZpZXdWYWx1ZSwgZGF0ZUZvcm1hdCwgc2NvcGUuZGF0ZSkgfHwgbmV3IERhdGUobmdNb2RlbC4kdmlld1ZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZG9jdW1lbnRDbGlja0JpbmQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoc2NvcGUuaXNPcGVuICYmIGV2ZW50LnRhcmdldCAhPT0gZWxlbWVudFswXSkge1xuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNjb3BlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIga2V5ZG93biA9IGZ1bmN0aW9uKGV2dCwgbm9BcHBseSkge1xuICAgICAgICBzY29wZS5rZXlkb3duKGV2dCk7XG4gICAgICB9O1xuICAgICAgZWxlbWVudC5iaW5kKCdrZXlkb3duJywga2V5ZG93bik7XG5cbiAgICAgIHNjb3BlLmtleWRvd24gPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgaWYgKGV2dC53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAoc2NvcGUuaXNPcGVuKSB7XG4gICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LndoaWNoID09PSA0MCAmJiAhc2NvcGUuaXNPcGVuKSB7XG4gICAgICAgICAgc2NvcGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2NvcGUuJHdhdGNoKCdpc09wZW4nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBzY29wZS4kYnJvYWRjYXN0KCdkYXRlcGlja2VyLmZvY3VzJyk7XG4gICAgICAgICAgc2NvcGUucG9zaXRpb24gPSBhcHBlbmRUb0JvZHkgPyAkcG9zaXRpb24ub2Zmc2V0KGVsZW1lbnQpIDogJHBvc2l0aW9uLnBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgICAgIHNjb3BlLnBvc2l0aW9uLnRvcCA9IHNjb3BlLnBvc2l0aW9uLnRvcCArIGVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0Jyk7XG5cbiAgICAgICAgICAkZG9jdW1lbnQuYmluZCgnY2xpY2snLCBkb2N1bWVudENsaWNrQmluZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGRvY3VtZW50LnVuYmluZCgnY2xpY2snLCBkb2N1bWVudENsaWNrQmluZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzY29wZS5zZWxlY3QgPSBmdW5jdGlvbiggZGF0ZSApIHtcbiAgICAgICAgaWYgKGRhdGUgPT09ICd0b2RheScpIHtcbiAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGF0ZShzY29wZS5kYXRlKSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHNjb3BlLmRhdGUpO1xuICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY29wZS5kYXRlU2VsZWN0aW9uKCBkYXRlICk7XG4gICAgICB9O1xuXG4gICAgICBzY29wZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xuICAgICAgfTtcblxuICAgICAgdmFyICRwb3B1cCA9ICRjb21waWxlKHBvcHVwRWwpKHNjb3BlKTtcbiAgICAgIC8vIFByZXZlbnQgalF1ZXJ5IGNhY2hlIG1lbW9yeSBsZWFrICh0ZW1wbGF0ZSBpcyBub3cgcmVkdW5kYW50IGFmdGVyIGxpbmtpbmcpXG4gICAgICBwb3B1cEVsLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoIGFwcGVuZFRvQm9keSApIHtcbiAgICAgICAgJGRvY3VtZW50LmZpbmQoJ2JvZHknKS5hcHBlbmQoJHBvcHVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuYWZ0ZXIoJHBvcHVwKTtcbiAgICAgIH1cblxuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkcG9wdXAucmVtb3ZlKCk7XG4gICAgICAgIGVsZW1lbnQudW5iaW5kKCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgICAgICRkb2N1bWVudC51bmJpbmQoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0JpbmQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ2RhdGVwaWNrZXJQb3B1cFdyYXAnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDonRUEnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbCcsXG4gICAgbGluazpmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC50aW1lcGlja2VyJywgW10pXG5cbi5jb25zdGFudCgndGltZXBpY2tlckNvbmZpZycsIHtcbiAgaG91clN0ZXA6IDEsXG4gIG1pbnV0ZVN0ZXA6IDEsXG4gIHNob3dNZXJpZGlhbjogdHJ1ZSxcbiAgbWVyaWRpYW5zOiBudWxsLFxuICByZWFkb25seUlucHV0OiBmYWxzZSxcbiAgbW91c2V3aGVlbDogdHJ1ZSxcbiAgYXJyb3drZXlzOiB0cnVlXG59KVxuXG4uY29udHJvbGxlcignVGltZXBpY2tlckNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJHBhcnNlJywgJyRsb2cnLCAnJGxvY2FsZScsICd0aW1lcGlja2VyQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsICRwYXJzZSwgJGxvZywgJGxvY2FsZSwgdGltZXBpY2tlckNvbmZpZykge1xuICB2YXIgc2VsZWN0ZWQgPSBuZXcgRGF0ZSgpLFxuICAgICAgbmdNb2RlbEN0cmwgPSB7ICRzZXRWaWV3VmFsdWU6IGFuZ3VsYXIubm9vcCB9LCAvLyBudWxsTW9kZWxDdHJsXG4gICAgICBtZXJpZGlhbnMgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMubWVyaWRpYW5zKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5tZXJpZGlhbnMpIDogdGltZXBpY2tlckNvbmZpZy5tZXJpZGlhbnMgfHwgJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLkFNUE1TO1xuXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCBuZ01vZGVsQ3RybF8sIGlucHV0cyApIHtcbiAgICBuZ01vZGVsQ3RybCA9IG5nTW9kZWxDdHJsXztcbiAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gdGhpcy5yZW5kZXI7XG5cbiAgICBuZ01vZGVsQ3RybC4kZm9ybWF0dGVycy51bnNoaWZ0KGZ1bmN0aW9uIChtb2RlbFZhbHVlKSB7XG4gICAgICByZXR1cm4gbW9kZWxWYWx1ZSA/IG5ldyBEYXRlKCBtb2RlbFZhbHVlICkgOiBudWxsO1xuICAgIH0pO1xuXG4gICAgdmFyIGhvdXJzSW5wdXRFbCA9IGlucHV0cy5lcSgwKSxcbiAgICAgICAgbWludXRlc0lucHV0RWwgPSBpbnB1dHMuZXEoMSk7XG5cbiAgICB2YXIgbW91c2V3aGVlbCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5tb3VzZXdoZWVsKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5tb3VzZXdoZWVsKSA6IHRpbWVwaWNrZXJDb25maWcubW91c2V3aGVlbDtcbiAgICBpZiAoIG1vdXNld2hlZWwgKSB7XG4gICAgICB0aGlzLnNldHVwTW91c2V3aGVlbEV2ZW50cyggaG91cnNJbnB1dEVsLCBtaW51dGVzSW5wdXRFbCApO1xuICAgIH1cblxuICAgIHZhciBhcnJvd2tleXMgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuYXJyb3drZXlzKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5hcnJvd2tleXMpIDogdGltZXBpY2tlckNvbmZpZy5hcnJvd2tleXM7XG4gICAgaWYgKGFycm93a2V5cykge1xuICAgICAgdGhpcy5zZXR1cEFycm93a2V5RXZlbnRzKCBob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsICk7XG4gICAgfVxuXG4gICAgJHNjb3BlLnJlYWRvbmx5SW5wdXQgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMucmVhZG9ubHlJbnB1dCkgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMucmVhZG9ubHlJbnB1dCkgOiB0aW1lcGlja2VyQ29uZmlnLnJlYWRvbmx5SW5wdXQ7XG4gICAgdGhpcy5zZXR1cElucHV0RXZlbnRzKCBob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsICk7XG4gIH07XG5cbiAgdmFyIGhvdXJTdGVwID0gdGltZXBpY2tlckNvbmZpZy5ob3VyU3RlcDtcbiAgaWYgKCRhdHRycy5ob3VyU3RlcCkge1xuICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzLmhvdXJTdGVwKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGhvdXJTdGVwID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBtaW51dGVTdGVwID0gdGltZXBpY2tlckNvbmZpZy5taW51dGVTdGVwO1xuICBpZiAoJGF0dHJzLm1pbnV0ZVN0ZXApIHtcbiAgICAkc2NvcGUuJHBhcmVudC4kd2F0Y2goJHBhcnNlKCRhdHRycy5taW51dGVTdGVwKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIG1pbnV0ZVN0ZXAgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gMTJIIC8gMjRIIG1vZGVcbiAgJHNjb3BlLnNob3dNZXJpZGlhbiA9IHRpbWVwaWNrZXJDb25maWcuc2hvd01lcmlkaWFuO1xuICBpZiAoJGF0dHJzLnNob3dNZXJpZGlhbikge1xuICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzLnNob3dNZXJpZGlhbiksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAkc2NvcGUuc2hvd01lcmlkaWFuID0gISF2YWx1ZTtcblxuICAgICAgaWYgKCBuZ01vZGVsQ3RybC4kZXJyb3IudGltZSApIHtcbiAgICAgICAgLy8gRXZhbHVhdGUgZnJvbSB0ZW1wbGF0ZVxuICAgICAgICB2YXIgaG91cnMgPSBnZXRIb3Vyc0Zyb21UZW1wbGF0ZSgpLCBtaW51dGVzID0gZ2V0TWludXRlc0Zyb21UZW1wbGF0ZSgpO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoIGhvdXJzICkgJiYgYW5ndWxhci5pc0RlZmluZWQoIG1pbnV0ZXMgKSkge1xuICAgICAgICAgIHNlbGVjdGVkLnNldEhvdXJzKCBob3VycyApO1xuICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlVGVtcGxhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIEdldCAkc2NvcGUuaG91cnMgaW4gMjRIIG1vZGUgaWYgdmFsaWRcbiAgZnVuY3Rpb24gZ2V0SG91cnNGcm9tVGVtcGxhdGUgKCApIHtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCggJHNjb3BlLmhvdXJzLCAxMCApO1xuICAgIHZhciB2YWxpZCA9ICggJHNjb3BlLnNob3dNZXJpZGlhbiApID8gKGhvdXJzID4gMCAmJiBob3VycyA8IDEzKSA6IChob3VycyA+PSAwICYmIGhvdXJzIDwgMjQpO1xuICAgIGlmICggIXZhbGlkICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoICRzY29wZS5zaG93TWVyaWRpYW4gKSB7XG4gICAgICBpZiAoIGhvdXJzID09PSAxMiApIHtcbiAgICAgICAgaG91cnMgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKCAkc2NvcGUubWVyaWRpYW4gPT09IG1lcmlkaWFuc1sxXSApIHtcbiAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaG91cnM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNaW51dGVzRnJvbVRlbXBsYXRlKCkge1xuICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQoJHNjb3BlLm1pbnV0ZXMsIDEwKTtcbiAgICByZXR1cm4gKCBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICkgPyBtaW51dGVzIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFkKCB2YWx1ZSApIHtcbiAgICByZXR1cm4gKCBhbmd1bGFyLmlzRGVmaW5lZCh2YWx1ZSkgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPCAyICkgPyAnMCcgKyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvLyBSZXNwb25kIG9uIG1vdXNld2hlZWwgc3BpblxuICB0aGlzLnNldHVwTW91c2V3aGVlbEV2ZW50cyA9IGZ1bmN0aW9uKCBob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsICkge1xuICAgIHZhciBpc1Njcm9sbGluZ1VwID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkge1xuICAgICAgICBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgfVxuICAgICAgLy9waWNrIGNvcnJlY3QgZGVsdGEgdmFyaWFibGUgZGVwZW5kaW5nIG9uIGV2ZW50XG4gICAgICB2YXIgZGVsdGEgPSAoZS53aGVlbERlbHRhKSA/IGUud2hlZWxEZWx0YSA6IC1lLmRlbHRhWTtcbiAgICAgIHJldHVybiAoZS5kZXRhaWwgfHwgZGVsdGEgPiAwKTtcbiAgICB9O1xuXG4gICAgaG91cnNJbnB1dEVsLmJpbmQoJ21vdXNld2hlZWwgd2hlZWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAkc2NvcGUuJGFwcGx5KCAoaXNTY3JvbGxpbmdVcChlKSkgPyAkc2NvcGUuaW5jcmVtZW50SG91cnMoKSA6ICRzY29wZS5kZWNyZW1lbnRIb3VycygpICk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBtaW51dGVzSW5wdXRFbC5iaW5kKCdtb3VzZXdoZWVsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgJHNjb3BlLiRhcHBseSggKGlzU2Nyb2xsaW5nVXAoZSkpID8gJHNjb3BlLmluY3JlbWVudE1pbnV0ZXMoKSA6ICRzY29wZS5kZWNyZW1lbnRNaW51dGVzKCkgKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8vIFJlc3BvbmQgb24gdXAvZG93biBhcnJvd2tleXNcbiAgdGhpcy5zZXR1cEFycm93a2V5RXZlbnRzID0gZnVuY3Rpb24oIGhvdXJzSW5wdXRFbCwgbWludXRlc0lucHV0RWwgKSB7XG4gICAgaG91cnNJbnB1dEVsLmJpbmQoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoIGUud2hpY2ggPT09IDM4ICkgeyAvLyB1cFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRzY29wZS5pbmNyZW1lbnRIb3VycygpO1xuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICggZS53aGljaCA9PT0gNDAgKSB7IC8vIGRvd25cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkc2NvcGUuZGVjcmVtZW50SG91cnMoKTtcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWludXRlc0lucHV0RWwuYmluZCgna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICggZS53aGljaCA9PT0gMzggKSB7IC8vIHVwXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJHNjb3BlLmluY3JlbWVudE1pbnV0ZXMoKTtcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIGUud2hpY2ggPT09IDQwICkgeyAvLyBkb3duXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJHNjb3BlLmRlY3JlbWVudE1pbnV0ZXMoKTtcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuc2V0dXBJbnB1dEV2ZW50cyA9IGZ1bmN0aW9uKCBob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsICkge1xuICAgIGlmICggJHNjb3BlLnJlYWRvbmx5SW5wdXQgKSB7XG4gICAgICAkc2NvcGUudXBkYXRlSG91cnMgPSBhbmd1bGFyLm5vb3A7XG4gICAgICAkc2NvcGUudXBkYXRlTWludXRlcyA9IGFuZ3VsYXIubm9vcDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKGludmFsaWRIb3VycywgaW52YWxpZE1pbnV0ZXMpIHtcbiAgICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUoIG51bGwgKTtcbiAgICAgIG5nTW9kZWxDdHJsLiRzZXRWYWxpZGl0eSgndGltZScsIGZhbHNlKTtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChpbnZhbGlkSG91cnMpKSB7XG4gICAgICAgICRzY29wZS5pbnZhbGlkSG91cnMgPSBpbnZhbGlkSG91cnM7XG4gICAgICB9XG4gICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoaW52YWxpZE1pbnV0ZXMpKSB7XG4gICAgICAgICRzY29wZS5pbnZhbGlkTWludXRlcyA9IGludmFsaWRNaW51dGVzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkc2NvcGUudXBkYXRlSG91cnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBob3VycyA9IGdldEhvdXJzRnJvbVRlbXBsYXRlKCk7XG5cbiAgICAgIGlmICggYW5ndWxhci5pc0RlZmluZWQoaG91cnMpICkge1xuICAgICAgICBzZWxlY3RlZC5zZXRIb3VycyggaG91cnMgKTtcbiAgICAgICAgcmVmcmVzaCggJ2gnICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhbGlkYXRlKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBob3Vyc0lucHV0RWwuYmluZCgnYmx1cicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICggISRzY29wZS5pbnZhbGlkSG91cnMgJiYgJHNjb3BlLmhvdXJzIDwgMTApIHtcbiAgICAgICAgJHNjb3BlLiRhcHBseSggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNjb3BlLmhvdXJzID0gcGFkKCAkc2NvcGUuaG91cnMgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc2NvcGUudXBkYXRlTWludXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1pbnV0ZXMgPSBnZXRNaW51dGVzRnJvbVRlbXBsYXRlKCk7XG5cbiAgICAgIGlmICggYW5ndWxhci5pc0RlZmluZWQobWludXRlcykgKSB7XG4gICAgICAgIHNlbGVjdGVkLnNldE1pbnV0ZXMoIG1pbnV0ZXMgKTtcbiAgICAgICAgcmVmcmVzaCggJ20nICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhbGlkYXRlKHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1pbnV0ZXNJbnB1dEVsLmJpbmQoJ2JsdXInLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoICEkc2NvcGUuaW52YWxpZE1pbnV0ZXMgJiYgJHNjb3BlLm1pbnV0ZXMgPCAxMCApIHtcbiAgICAgICAgJHNjb3BlLiRhcHBseSggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNjb3BlLm1pbnV0ZXMgPSBwYWQoICRzY29wZS5taW51dGVzICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH07XG5cbiAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGF0ZSA9IG5nTW9kZWxDdHJsLiR2aWV3VmFsdWU7XG5cbiAgICBpZiAoIGlzTmFOKGRhdGUpICkge1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCd0aW1lJywgZmFsc2UpO1xuICAgICAgJGxvZy5lcnJvcignVGltZXBpY2tlciBkaXJlY3RpdmU6IFwibmctbW9kZWxcIiB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBvYmplY3QsIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAwMS4wMS4xOTcwIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhbiBSRkMyODIyIG9yIElTTyA4NjAxIGRhdGUuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICggZGF0ZSApIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBkYXRlO1xuICAgICAgfVxuICAgICAgbWFrZVZhbGlkKCk7XG4gICAgICB1cGRhdGVUZW1wbGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBDYWxsIGludGVybmFsbHkgd2hlbiB3ZSBrbm93IHRoYXQgbW9kZWwgaXMgdmFsaWQuXG4gIGZ1bmN0aW9uIHJlZnJlc2goIGtleWJvYXJkQ2hhbmdlICkge1xuICAgIG1ha2VWYWxpZCgpO1xuICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUoIG5ldyBEYXRlKHNlbGVjdGVkKSApO1xuICAgIHVwZGF0ZVRlbXBsYXRlKCBrZXlib2FyZENoYW5nZSApO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVZhbGlkKCkge1xuICAgIG5nTW9kZWxDdHJsLiRzZXRWYWxpZGl0eSgndGltZScsIHRydWUpO1xuICAgICRzY29wZS5pbnZhbGlkSG91cnMgPSBmYWxzZTtcbiAgICAkc2NvcGUuaW52YWxpZE1pbnV0ZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRlbXBsYXRlKCBrZXlib2FyZENoYW5nZSApIHtcbiAgICB2YXIgaG91cnMgPSBzZWxlY3RlZC5nZXRIb3VycygpLCBtaW51dGVzID0gc2VsZWN0ZWQuZ2V0TWludXRlcygpO1xuXG4gICAgaWYgKCAkc2NvcGUuc2hvd01lcmlkaWFuICkge1xuICAgICAgaG91cnMgPSAoIGhvdXJzID09PSAwIHx8IGhvdXJzID09PSAxMiApID8gMTIgOiBob3VycyAlIDEyOyAvLyBDb252ZXJ0IDI0IHRvIDEyIGhvdXIgc3lzdGVtXG4gICAgfVxuXG4gICAgJHNjb3BlLmhvdXJzID0ga2V5Ym9hcmRDaGFuZ2UgPT09ICdoJyA/IGhvdXJzIDogcGFkKGhvdXJzKTtcbiAgICBpZiAoa2V5Ym9hcmRDaGFuZ2UgIT09ICdtJykge1xuICAgICAgJHNjb3BlLm1pbnV0ZXMgPSBwYWQobWludXRlcyk7XG4gICAgfVxuICAgICRzY29wZS5tZXJpZGlhbiA9IHNlbGVjdGVkLmdldEhvdXJzKCkgPCAxMiA/IG1lcmlkaWFuc1swXSA6IG1lcmlkaWFuc1sxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE1pbnV0ZXMoIG1pbnV0ZXMgKSB7XG4gICAgdmFyIGR0ID0gbmV3IERhdGUoIHNlbGVjdGVkLmdldFRpbWUoKSArIG1pbnV0ZXMgKiA2MDAwMCApO1xuICAgIHNlbGVjdGVkLnNldEhvdXJzKCBkdC5nZXRIb3VycygpLCBkdC5nZXRNaW51dGVzKCkgKTtcbiAgICByZWZyZXNoKCk7XG4gIH1cblxuICAkc2NvcGUuaW5jcmVtZW50SG91cnMgPSBmdW5jdGlvbigpIHtcbiAgICBhZGRNaW51dGVzKCBob3VyU3RlcCAqIDYwICk7XG4gIH07XG4gICRzY29wZS5kZWNyZW1lbnRIb3VycyA9IGZ1bmN0aW9uKCkge1xuICAgIGFkZE1pbnV0ZXMoIC0gaG91clN0ZXAgKiA2MCApO1xuICB9O1xuICAkc2NvcGUuaW5jcmVtZW50TWludXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGFkZE1pbnV0ZXMoIG1pbnV0ZVN0ZXAgKTtcbiAgfTtcbiAgJHNjb3BlLmRlY3JlbWVudE1pbnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICBhZGRNaW51dGVzKCAtIG1pbnV0ZVN0ZXAgKTtcbiAgfTtcbiAgJHNjb3BlLnRvZ2dsZU1lcmlkaWFuID0gZnVuY3Rpb24oKSB7XG4gICAgYWRkTWludXRlcyggMTIgKiA2MCAqICgoIHNlbGVjdGVkLmdldEhvdXJzKCkgPCAxMiApID8gMSA6IC0xKSApO1xuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ3RpbWVwaWNrZXInLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVxdWlyZTogWyd0aW1lcGlja2VyJywgJz9ebmdNb2RlbCddLFxuICAgIGNvbnRyb2xsZXI6J1RpbWVwaWNrZXJDb250cm9sbGVyJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHNjb3BlOiB7fSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3RpbWVwaWNrZXIvdGltZXBpY2tlci5odG1sJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICB2YXIgdGltZXBpY2tlckN0cmwgPSBjdHJsc1swXSwgbmdNb2RlbEN0cmwgPSBjdHJsc1sxXTtcblxuICAgICAgaWYgKCBuZ01vZGVsQ3RybCApIHtcbiAgICAgICAgdGltZXBpY2tlckN0cmwuaW5pdCggbmdNb2RlbEN0cmwsIGVsZW1lbnQuZmluZCgnaW5wdXQnKSApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3RpbWVwaWNrZXIvdGltZXBpY2tlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmRyb3Bkb3duJywgWyd1aS5ib290c3RyYXAucG9zaXRpb24nXSlcblxuLmNvbnN0YW50KCdkcm9wZG93bkNvbmZpZycsIHtcbiAgb3BlbkNsYXNzOiAnb3Blbidcbn0pXG5cbi5zZXJ2aWNlKCdkcm9wZG93blNlcnZpY2UnLCBbJyRkb2N1bWVudCcsICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJGRvY3VtZW50LCAkcm9vdFNjb3BlKSB7XG4gIHZhciBvcGVuU2NvcGUgPSBudWxsO1xuXG4gIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCBkcm9wZG93blNjb3BlICkge1xuICAgIGlmICggIW9wZW5TY29wZSApIHtcbiAgICAgICRkb2N1bWVudC5iaW5kKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgJGRvY3VtZW50LmJpbmQoJ2tleWRvd24nLCBlc2NhcGVLZXlCaW5kKTtcbiAgICB9XG5cbiAgICBpZiAoIG9wZW5TY29wZSAmJiBvcGVuU2NvcGUgIT09IGRyb3Bkb3duU2NvcGUgKSB7XG4gICAgICAgIG9wZW5TY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvcGVuU2NvcGUgPSBkcm9wZG93blNjb3BlO1xuICB9O1xuXG4gIHRoaXMuY2xvc2UgPSBmdW5jdGlvbiggZHJvcGRvd25TY29wZSApIHtcbiAgICBpZiAoIG9wZW5TY29wZSA9PT0gZHJvcGRvd25TY29wZSApIHtcbiAgICAgIG9wZW5TY29wZSA9IG51bGw7XG4gICAgICAkZG9jdW1lbnQudW5iaW5kKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgJGRvY3VtZW50LnVuYmluZCgna2V5ZG93bicsIGVzY2FwZUtleUJpbmQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2xvc2VEcm9wZG93biA9IGZ1bmN0aW9uKCBldnQgKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgbWF5IHN0aWxsIGJlIGNhbGxlZCBkdXJpbmcgdGhlIHNhbWUgbW91c2UgZXZlbnQgdGhhdFxuICAgIC8vIHVuYm91bmQgdGhpcyBldmVudCBoYW5kbGVyLiBTbyBjaGVjayBvcGVuU2NvcGUgYmVmb3JlIHByb2NlZWRpbmcuXG4gICAgaWYgKCFvcGVuU2NvcGUpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiggZXZ0ICYmIG9wZW5TY29wZS5nZXRBdXRvQ2xvc2UoKSA9PT0gJ2Rpc2FibGVkJyApICB7IHJldHVybiA7IH1cblxuICAgIHZhciB0b2dnbGVFbGVtZW50ID0gb3BlblNjb3BlLmdldFRvZ2dsZUVsZW1lbnQoKTtcbiAgICBpZiAoIGV2dCAmJiB0b2dnbGVFbGVtZW50ICYmIHRvZ2dsZUVsZW1lbnRbMF0uY29udGFpbnMoZXZ0LnRhcmdldCkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJGVsZW1lbnQgPSBvcGVuU2NvcGUuZ2V0RWxlbWVudCgpO1xuICAgIGlmKCBldnQgJiYgb3BlblNjb3BlLmdldEF1dG9DbG9zZSgpID09PSAnb3V0c2lkZUNsaWNrJyAmJiAkZWxlbWVudCAmJiAkZWxlbWVudFswXS5jb250YWlucyhldnQudGFyZ2V0KSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcGVuU2NvcGUuaXNPcGVuID0gZmFsc2U7XG5cbiAgICBpZiAoISRyb290U2NvcGUuJCRwaGFzZSkge1xuICAgICAgb3BlblNjb3BlLiRhcHBseSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZXNjYXBlS2V5QmluZCA9IGZ1bmN0aW9uKCBldnQgKSB7XG4gICAgaWYgKCBldnQud2hpY2ggPT09IDI3ICkge1xuICAgICAgb3BlblNjb3BlLmZvY3VzVG9nZ2xlRWxlbWVudCgpO1xuICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uY29udHJvbGxlcignRHJvcGRvd25Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRwYXJzZScsICdkcm9wZG93bkNvbmZpZycsICdkcm9wZG93blNlcnZpY2UnLCAnJGFuaW1hdGUnLCAnJHBvc2l0aW9uJywgJyRkb2N1bWVudCcsIGZ1bmN0aW9uKCRzY29wZSwgJGF0dHJzLCAkcGFyc2UsIGRyb3Bkb3duQ29uZmlnLCBkcm9wZG93blNlcnZpY2UsICRhbmltYXRlLCAkcG9zaXRpb24sICRkb2N1bWVudCkge1xuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBzY29wZSA9ICRzY29wZS4kbmV3KCksIC8vIGNyZWF0ZSBhIGNoaWxkIHNjb3BlIHNvIHdlIGFyZSBub3QgcG9sbHV0aW5nIG9yaWdpbmFsIG9uZVxuICAgICAgb3BlbkNsYXNzID0gZHJvcGRvd25Db25maWcub3BlbkNsYXNzLFxuICAgICAgZ2V0SXNPcGVuLFxuICAgICAgc2V0SXNPcGVuID0gYW5ndWxhci5ub29wLFxuICAgICAgdG9nZ2xlSW52b2tlciA9ICRhdHRycy5vblRvZ2dsZSA/ICRwYXJzZSgkYXR0cnMub25Ub2dnbGUpIDogYW5ndWxhci5ub29wLFxuICAgICAgYXBwZW5kVG9Cb2R5ID0gZmFsc2U7XG5cbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG4gICAgc2VsZi4kZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoICRhdHRycy5pc09wZW4gKSB7XG4gICAgICBnZXRJc09wZW4gPSAkcGFyc2UoJGF0dHJzLmlzT3Blbik7XG4gICAgICBzZXRJc09wZW4gPSBnZXRJc09wZW4uYXNzaWduO1xuXG4gICAgICAkc2NvcGUuJHdhdGNoKGdldElzT3BlbiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgc2NvcGUuaXNPcGVuID0gISF2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZFRvQm9keSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5kcm9wZG93bkFwcGVuZFRvQm9keSk7XG5cbiAgICBpZiAoIGFwcGVuZFRvQm9keSAmJiBzZWxmLmRyb3Bkb3duTWVudSApIHtcbiAgICAgICRkb2N1bWVudC5maW5kKCdib2R5JykuYXBwZW5kKCBzZWxmLmRyb3Bkb3duTWVudSApO1xuICAgICAgZWxlbWVudC5vbignJGRlc3Ryb3knLCBmdW5jdGlvbiBoYW5kbGVEZXN0cm95RXZlbnQoKSB7XG4gICAgICAgIHNlbGYuZHJvcGRvd25NZW51LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oIG9wZW4gKSB7XG4gICAgcmV0dXJuIHNjb3BlLmlzT3BlbiA9IGFyZ3VtZW50cy5sZW5ndGggPyAhIW9wZW4gOiAhc2NvcGUuaXNPcGVuO1xuICB9O1xuXG4gIC8vIEFsbG93IG90aGVyIGRpcmVjdGl2ZXMgdG8gd2F0Y2ggc3RhdHVzXG4gIHRoaXMuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNjb3BlLmlzT3BlbjtcbiAgfTtcblxuICBzY29wZS5nZXRUb2dnbGVFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNlbGYudG9nZ2xlRWxlbWVudDtcbiAgfTtcblxuICBzY29wZS5nZXRBdXRvQ2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJGF0dHJzLmF1dG9DbG9zZSB8fCAnYWx3YXlzJzsgLy9vciAnb3V0c2lkZUNsaWNrJyBvciAnZGlzYWJsZWQnXG4gIH07XG5cbiAgc2NvcGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzZWxmLiRlbGVtZW50O1xuICB9O1xuXG4gIHNjb3BlLmZvY3VzVG9nZ2xlRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggc2VsZi50b2dnbGVFbGVtZW50ICkge1xuICAgICAgc2VsZi50b2dnbGVFbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIHNjb3BlLiR3YXRjaCgnaXNPcGVuJywgZnVuY3Rpb24oIGlzT3Blbiwgd2FzT3BlbiApIHtcbiAgICBpZiAoIGFwcGVuZFRvQm9keSAmJiBzZWxmLmRyb3Bkb3duTWVudSApIHtcbiAgICAgIHZhciBwb3MgPSAkcG9zaXRpb24ucG9zaXRpb25FbGVtZW50cyhzZWxmLiRlbGVtZW50LCBzZWxmLmRyb3Bkb3duTWVudSwgJ2JvdHRvbS1sZWZ0JywgdHJ1ZSk7XG4gICAgICBzZWxmLmRyb3Bkb3duTWVudS5jc3Moe1xuICAgICAgICB0b3A6IHBvcy50b3AgKyAncHgnLFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCArICdweCcsXG4gICAgICAgIGRpc3BsYXk6IGlzT3BlbiA/ICdibG9jaycgOiAnbm9uZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICRhbmltYXRlW2lzT3BlbiA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShzZWxmLiRlbGVtZW50LCBvcGVuQ2xhc3MpO1xuXG4gICAgaWYgKCBpc09wZW4gKSB7XG4gICAgICBzY29wZS5mb2N1c1RvZ2dsZUVsZW1lbnQoKTtcbiAgICAgIGRyb3Bkb3duU2VydmljZS5vcGVuKCBzY29wZSApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcm9wZG93blNlcnZpY2UuY2xvc2UoIHNjb3BlICk7XG4gICAgfVxuXG4gICAgc2V0SXNPcGVuKCRzY29wZSwgaXNPcGVuKTtcbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoaXNPcGVuKSAmJiBpc09wZW4gIT09IHdhc09wZW4pIHtcbiAgICAgIHRvZ2dsZUludm9rZXIoJHNjb3BlLCB7IG9wZW46ICEhaXNPcGVuIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKCkge1xuICAgIHNjb3BlLmlzT3BlbiA9IGZhbHNlO1xuICB9KTtcblxuICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgIHNjb3BlLiRkZXN0cm95KCk7XG4gIH0pO1xufV0pXG5cbi5kaXJlY3RpdmUoJ2Ryb3Bkb3duJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcjogJ0Ryb3Bkb3duQ29udHJvbGxlcicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBkcm9wZG93bkN0cmwpIHtcbiAgICAgIGRyb3Bkb3duQ3RybC5pbml0KCBlbGVtZW50ICk7XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnZHJvcGRvd25NZW51JywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBQycsXG4gICAgcmVxdWlyZTogJz9eZHJvcGRvd24nLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgZHJvcGRvd25DdHJsKSB7XG4gICAgICBpZiAoICFkcm9wZG93bkN0cmwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3Bkb3duQ3RybC5kcm9wZG93bk1lbnUgPSBlbGVtZW50O1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ2Ryb3Bkb3duVG9nZ2xlJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogJz9eZHJvcGRvd24nLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgZHJvcGRvd25DdHJsKSB7XG4gICAgICBpZiAoICFkcm9wZG93bkN0cmwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZHJvcGRvd25DdHJsLnRvZ2dsZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICB2YXIgdG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICggIWVsZW1lbnQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgIWF0dHJzLmRpc2FibGVkICkge1xuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duQ3RybC50b2dnbGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZWxlbWVudC5iaW5kKCdjbGljaycsIHRvZ2dsZURyb3Bkb3duKTtcblxuICAgICAgLy8gV0FJLUFSSUFcbiAgICAgIGVsZW1lbnQuYXR0cih7ICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSwgJ2FyaWEtZXhwYW5kZWQnOiBmYWxzZSB9KTtcbiAgICAgIHNjb3BlLiR3YXRjaChkcm9wZG93bkN0cmwuaXNPcGVuLCBmdW5jdGlvbiggaXNPcGVuICkge1xuICAgICAgICBlbGVtZW50LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAhIWlzT3Blbik7XG4gICAgICB9KTtcblxuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50LnVuYmluZCgnY2xpY2snLCB0b2dnbGVEcm9wZG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9kcm9wZG93bi9kcm9wZG93bi5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLm1vZGFsJywgW10pXG5cbi8qKlxuICogQSBoZWxwZXIsIGludGVybmFsIGRhdGEgc3RydWN0dXJlIHRoYXQgYWN0cyBhcyBhIG1hcCBidXQgYWxzbyBhbGxvd3MgZ2V0dGluZyAvIHJlbW92aW5nXG4gKiBlbGVtZW50cyBpbiB0aGUgTElGTyBvcmRlclxuICovXG4gIC5mYWN0b3J5KCckJHN0YWNrZWRNYXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZU5ldzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhY2sgPSBbXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFkZDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoa2V5ID09IHN0YWNrW2ldLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGFja1tpXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBrZXlzLnB1c2goc3RhY2tbaV0ua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBpZHggPSAtMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGtleSA9PSBzdGFja1tpXS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhY2suc3BsaWNlKGlkeCwgMSlbMF07XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVUb3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFjay5zcGxpY2Uoc3RhY2subGVuZ3RoIC0gMSwgMSlbMF07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH0pXG5cbi8qKlxuICogQSBoZWxwZXIgZGlyZWN0aXZlIGZvciB0aGUgJG1vZGFsIHNlcnZpY2UuIEl0IGNyZWF0ZXMgYSBiYWNrZHJvcCBlbGVtZW50LlxuICovXG4gIC5kaXJlY3RpdmUoJ21vZGFsQmFja2Ryb3AnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbCcsXG4gICAgICBjb21waWxlOiBmdW5jdGlvbiAodEVsZW1lbnQsIHRBdHRycykge1xuICAgICAgICB0RWxlbWVudC5hZGRDbGFzcyh0QXR0cnMuYmFja2Ryb3BDbGFzcyk7XG4gICAgICAgIHJldHVybiBsaW5rRm47XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHNjb3BlLmFuaW1hdGUgPSBmYWxzZTtcblxuICAgICAgLy90cmlnZ2VyIENTUyB0cmFuc2l0aW9uc1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzY29wZS5hbmltYXRlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pXG5cbiAgLmRpcmVjdGl2ZSgnbW9kYWxXaW5kb3cnLCBbJyRtb2RhbFN0YWNrJywgJyRxJywgZnVuY3Rpb24gKCRtb2RhbFN0YWNrLCAkcSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGluZGV4OiAnQCcsXG4gICAgICAgIGFuaW1hdGU6ICc9J1xuICAgICAgfSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKHRFbGVtZW50LCB0QXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIHRBdHRycy50ZW1wbGF0ZVVybCB8fCAndGVtcGxhdGUvbW9kYWwvd2luZG93Lmh0bWwnO1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhhdHRycy53aW5kb3dDbGFzcyB8fCAnJyk7XG4gICAgICAgIHNjb3BlLnNpemUgPSBhdHRycy5zaXplO1xuXG4gICAgICAgIHNjb3BlLmNsb3NlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIHZhciBtb2RhbCA9ICRtb2RhbFN0YWNrLmdldFRvcCgpO1xuICAgICAgICAgIGlmIChtb2RhbCAmJiBtb2RhbC52YWx1ZS5iYWNrZHJvcCAmJiBtb2RhbC52YWx1ZS5iYWNrZHJvcCAhPSAnc3RhdGljJyAmJiAoZXZ0LnRhcmdldCA9PT0gZXZ0LmN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRtb2RhbFN0YWNrLmRpc21pc3MobW9kYWwua2V5LCAnYmFja2Ryb3AgY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IGFkZGVkIHRvIHRoZSBzY29wZSBmb3IgdGhlIHB1cnBvc2Ugb2YgZGV0ZWN0aW5nIHdoZW4gdGhpcyBkaXJlY3RpdmUgaXMgcmVuZGVyZWQuXG4gICAgICAgIC8vIFdlIGNhbiBkZXRlY3QgdGhhdCBieSB1c2luZyB0aGlzIHByb3BlcnR5IGluIHRoZSB0ZW1wbGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBkaXJlY3RpdmUgYW5kIHRoZW4gdXNlXG4gICAgICAgIC8vIHtAbGluayBBdHRyaWJ1dGUjJG9ic2VydmV9IG9uIGl0LiBGb3IgbW9yZSBkZXRhaWxzIHBsZWFzZSBzZWUge0BsaW5rIFRhYmxlQ29sdW1uUmVzaXplfS5cbiAgICAgICAgc2NvcGUuJGlzUmVuZGVyZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIERlZmVycmVkIG9iamVjdCB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiB0aGlzIG1vZGFsIGlzIHJlbmRlci5cbiAgICAgICAgdmFyIG1vZGFsUmVuZGVyRGVmZXJPYmogPSAkcS5kZWZlcigpO1xuICAgICAgICAvLyBPYnNlcnZlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIG5leHQgZGlnZXN0IGN5Y2xlIGFmdGVyIGNvbXBpbGF0aW9uLCBlbnN1cmluZyB0aGF0IHRoZSBET00gaXMgcmVhZHkuXG4gICAgICAgIC8vIEluIG9yZGVyIHRvIHVzZSB0aGlzIHdheSBvZiBmaW5kaW5nIHdoZXRoZXIgRE9NIGlzIHJlYWR5LCB3ZSBuZWVkIHRvIG9ic2VydmUgYSBzY29wZSBwcm9wZXJ0eSB1c2VkIGluIG1vZGFsJ3MgdGVtcGxhdGUuXG4gICAgICAgIGF0dHJzLiRvYnNlcnZlKCdtb2RhbFJlbmRlcicsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG1vZGFsUmVuZGVyRGVmZXJPYmoucmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWxSZW5kZXJEZWZlck9iai5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHRyaWdnZXIgQ1NTIHRyYW5zaXRpb25zXG4gICAgICAgICAgc2NvcGUuYW5pbWF0ZSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgaW5wdXRzV2l0aEF1dG9mb2N1cyA9IGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvckFsbCgnW2F1dG9mb2N1c10nKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBdXRvLWZvY3VzaW5nIG9mIGEgZnJlc2hseS1vcGVuZWQgbW9kYWwgZWxlbWVudCBjYXVzZXMgYW55IGNoaWxkIGVsZW1lbnRzXG4gICAgICAgICAgICogd2l0aCB0aGUgYXV0b2ZvY3VzIGF0dHJpYnV0ZSB0byBsb3NlIGZvY3VzLiBUaGlzIGlzIGFuIGlzc3VlIG9uIHRvdWNoXG4gICAgICAgICAgICogYmFzZWQgZGV2aWNlcyB3aGljaCB3aWxsIHNob3cgYW5kIHRoZW4gaGlkZSB0aGUgb25zY3JlZW4ga2V5Ym9hcmQuXG4gICAgICAgICAgICogQXR0ZW1wdHMgdG8gcmVmb2N1cyB0aGUgYXV0b2ZvY3VzIGVsZW1lbnQgdmlhIEphdmFTY3JpcHQgd2lsbCBub3QgcmVvcGVuXG4gICAgICAgICAgICogdGhlIG9uc2NyZWVuIGtleWJvYXJkLiBGaXhlZCBieSB1cGRhdGVkIHRoZSBmb2N1c2luZyBsb2dpYyB0byBvbmx5IGF1dG9mb2N1c1xuICAgICAgICAgICAqIHRoZSBtb2RhbCBlbGVtZW50IGlmIHRoZSBtb2RhbCBkb2VzIG5vdCBjb250YWluIGFuIGF1dG9mb2N1cyBlbGVtZW50LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChpbnB1dHNXaXRoQXV0b2ZvY3VzLmxlbmd0aCkge1xuICAgICAgICAgICAgaW5wdXRzV2l0aEF1dG9mb2N1c1swXS5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTm90aWZ5IHtAbGluayAkbW9kYWxTdGFja30gdGhhdCBtb2RhbCBpcyByZW5kZXJlZC5cbiAgICAgICAgICB2YXIgbW9kYWwgPSAkbW9kYWxTdGFjay5nZXRUb3AoKTtcbiAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICRtb2RhbFN0YWNrLm1vZGFsUmVuZGVyZWQobW9kYWwua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1dKVxuXG4gIC5kaXJlY3RpdmUoJ21vZGFsQW5pbWF0aW9uQ2xhc3MnLCBbXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24gKHRFbGVtZW50LCB0QXR0cnMpIHtcbiAgICAgICAgICBpZiAodEF0dHJzLm1vZGFsQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0RWxlbWVudC5hZGRDbGFzcyh0QXR0cnMubW9kYWxBbmltYXRpb25DbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1dKVxuXG4gIC5kaXJlY3RpdmUoJ21vZGFsVHJhbnNjbHVkZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluazogZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCBjb250cm9sbGVyLCAkdHJhbnNjbHVkZSkge1xuICAgICAgICAkdHJhbnNjbHVkZSgkc2NvcGUuJHBhcmVudCwgZnVuY3Rpb24oY2xvbmUpIHtcbiAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpO1xuICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH0pXG5cbiAgLmZhY3RvcnkoJyRtb2RhbFN0YWNrJywgWyckYW5pbWF0ZScsICckdGltZW91dCcsICckZG9jdW1lbnQnLCAnJGNvbXBpbGUnLCAnJHJvb3RTY29wZScsICckJHN0YWNrZWRNYXAnLFxuICAgIGZ1bmN0aW9uICgkYW5pbWF0ZSwgJHRpbWVvdXQsICRkb2N1bWVudCwgJGNvbXBpbGUsICRyb290U2NvcGUsICQkc3RhY2tlZE1hcCkge1xuXG4gICAgICB2YXIgT1BFTkVEX01PREFMX0NMQVNTID0gJ21vZGFsLW9wZW4nO1xuXG4gICAgICB2YXIgYmFja2Ryb3BEb21FbCwgYmFja2Ryb3BTY29wZTtcbiAgICAgIHZhciBvcGVuZWRXaW5kb3dzID0gJCRzdGFja2VkTWFwLmNyZWF0ZU5ldygpO1xuICAgICAgdmFyICRtb2RhbFN0YWNrID0ge307XG5cbiAgICAgIGZ1bmN0aW9uIGJhY2tkcm9wSW5kZXgoKSB7XG4gICAgICAgIHZhciB0b3BCYWNrZHJvcEluZGV4ID0gLTE7XG4gICAgICAgIHZhciBvcGVuZWQgPSBvcGVuZWRXaW5kb3dzLmtleXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcGVuZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob3BlbmVkV2luZG93cy5nZXQob3BlbmVkW2ldKS52YWx1ZS5iYWNrZHJvcCkge1xuICAgICAgICAgICAgdG9wQmFja2Ryb3BJbmRleCA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3BCYWNrZHJvcEluZGV4O1xuICAgICAgfVxuXG4gICAgICAkcm9vdFNjb3BlLiR3YXRjaChiYWNrZHJvcEluZGV4LCBmdW5jdGlvbihuZXdCYWNrZHJvcEluZGV4KXtcbiAgICAgICAgaWYgKGJhY2tkcm9wU2NvcGUpIHtcbiAgICAgICAgICBiYWNrZHJvcFNjb3BlLmluZGV4ID0gbmV3QmFja2Ryb3BJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZU1vZGFsV2luZG93KG1vZGFsSW5zdGFuY2UpIHtcblxuICAgICAgICB2YXIgYm9keSA9ICRkb2N1bWVudC5maW5kKCdib2R5JykuZXEoMCk7XG4gICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IG9wZW5lZFdpbmRvd3MuZ2V0KG1vZGFsSW5zdGFuY2UpLnZhbHVlO1xuXG4gICAgICAgIC8vY2xlYW4gdXAgdGhlIHN0YWNrXG4gICAgICAgIG9wZW5lZFdpbmRvd3MucmVtb3ZlKG1vZGFsSW5zdGFuY2UpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHdpbmRvdyBET00gZWxlbWVudFxuICAgICAgICByZW1vdmVBZnRlckFuaW1hdGUobW9kYWxXaW5kb3cubW9kYWxEb21FbCwgbW9kYWxXaW5kb3cubW9kYWxTY29wZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYm9keS50b2dnbGVDbGFzcyhPUEVORURfTU9EQUxfQ0xBU1MsIG9wZW5lZFdpbmRvd3MubGVuZ3RoKCkgPiAwKTtcbiAgICAgICAgICBjaGVja1JlbW92ZUJhY2tkcm9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjaGVja1JlbW92ZUJhY2tkcm9wKCkge1xuICAgICAgICAgIC8vcmVtb3ZlIGJhY2tkcm9wIGlmIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgICBpZiAoYmFja2Ryb3BEb21FbCAmJiBiYWNrZHJvcEluZGV4KCkgPT0gLTEpIHtcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcFNjb3BlUmVmID0gYmFja2Ryb3BTY29wZTtcbiAgICAgICAgICAgIHJlbW92ZUFmdGVyQW5pbWF0ZShiYWNrZHJvcERvbUVsLCBiYWNrZHJvcFNjb3BlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGJhY2tkcm9wU2NvcGVSZWYgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBiYWNrZHJvcERvbUVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgYmFja2Ryb3BTY29wZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUFmdGVyQW5pbWF0ZShkb21FbCwgc2NvcGUsIGRvbmUpIHtcbiAgICAgICAgLy8gQ2xvc2luZyBhbmltYXRpb25cbiAgICAgICAgc2NvcGUuYW5pbWF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChkb21FbC5hdHRyKCdtb2RhbC1hbmltYXRpb24nKSAmJiAkYW5pbWF0ZS5lbmFibGVkKCkpIHtcbiAgICAgICAgICAvLyB0cmFuc2l0aW9uIG91dFxuICAgICAgICAgIGRvbUVsLm9uZSgnJGFuaW1hdGU6Y2xvc2UnLCBmdW5jdGlvbiBjbG9zZUZuKCkge1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kZXZhbEFzeW5jKGFmdGVyQW5pbWF0aW5nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBFbnN1cmUgdGhpcyBjYWxsIGlzIGFzeW5jXG4gICAgICAgICAgJHRpbWVvdXQoYWZ0ZXJBbmltYXRpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWZ0ZXJBbmltYXRpbmcoKSB7XG4gICAgICAgICAgaWYgKGFmdGVyQW5pbWF0aW5nLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWZ0ZXJBbmltYXRpbmcuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICBkb21FbC5yZW1vdmUoKTtcbiAgICAgICAgICBzY29wZS4kZGVzdHJveSgpO1xuICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRkb2N1bWVudC5iaW5kKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgbW9kYWw7XG5cbiAgICAgICAgaWYgKGV2dC53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICBtb2RhbCA9IG9wZW5lZFdpbmRvd3MudG9wKCk7XG4gICAgICAgICAgaWYgKG1vZGFsICYmIG1vZGFsLnZhbHVlLmtleWJvYXJkKSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJG1vZGFsU3RhY2suZGlzbWlzcyhtb2RhbC5rZXksICdlc2NhcGUga2V5IHByZXNzJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkbW9kYWxTdGFjay5vcGVuID0gZnVuY3Rpb24gKG1vZGFsSW5zdGFuY2UsIG1vZGFsKSB7XG5cbiAgICAgICAgdmFyIG1vZGFsT3BlbmVyID0gJGRvY3VtZW50WzBdLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgb3BlbmVkV2luZG93cy5hZGQobW9kYWxJbnN0YW5jZSwge1xuICAgICAgICAgIGRlZmVycmVkOiBtb2RhbC5kZWZlcnJlZCxcbiAgICAgICAgICByZW5kZXJEZWZlcnJlZDogbW9kYWwucmVuZGVyRGVmZXJyZWQsXG4gICAgICAgICAgbW9kYWxTY29wZTogbW9kYWwuc2NvcGUsXG4gICAgICAgICAgYmFja2Ryb3A6IG1vZGFsLmJhY2tkcm9wLFxuICAgICAgICAgIGtleWJvYXJkOiBtb2RhbC5rZXlib2FyZFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgYm9keSA9ICRkb2N1bWVudC5maW5kKCdib2R5JykuZXEoMCksXG4gICAgICAgICAgICBjdXJyQmFja2Ryb3BJbmRleCA9IGJhY2tkcm9wSW5kZXgoKTtcblxuICAgICAgICBpZiAoY3VyckJhY2tkcm9wSW5kZXggPj0gMCAmJiAhYmFja2Ryb3BEb21FbCkge1xuICAgICAgICAgIGJhY2tkcm9wU2NvcGUgPSAkcm9vdFNjb3BlLiRuZXcodHJ1ZSk7XG4gICAgICAgICAgYmFja2Ryb3BTY29wZS5pbmRleCA9IGN1cnJCYWNrZHJvcEluZGV4O1xuICAgICAgICAgIHZhciBhbmd1bGFyQmFja2dyb3VuZERvbUVsID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IG1vZGFsLWJhY2tkcm9wPVwibW9kYWwtYmFja2Ryb3BcIj48L2Rpdj4nKTtcbiAgICAgICAgICBhbmd1bGFyQmFja2dyb3VuZERvbUVsLmF0dHIoJ2JhY2tkcm9wLWNsYXNzJywgbW9kYWwuYmFja2Ryb3BDbGFzcyk7XG4gICAgICAgICAgaWYgKG1vZGFsLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgYW5ndWxhckJhY2tncm91bmREb21FbC5hdHRyKCdtb2RhbC1hbmltYXRpb24nLCAndHJ1ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiYWNrZHJvcERvbUVsID0gJGNvbXBpbGUoYW5ndWxhckJhY2tncm91bmREb21FbCkoYmFja2Ryb3BTY29wZSk7XG4gICAgICAgICAgYm9keS5hcHBlbmQoYmFja2Ryb3BEb21FbCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYW5ndWxhckRvbUVsID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IG1vZGFsLXdpbmRvdz1cIm1vZGFsLXdpbmRvd1wiPjwvZGl2PicpO1xuICAgICAgICBhbmd1bGFyRG9tRWwuYXR0cih7XG4gICAgICAgICAgJ3RlbXBsYXRlLXVybCc6IG1vZGFsLndpbmRvd1RlbXBsYXRlVXJsLFxuICAgICAgICAgICd3aW5kb3ctY2xhc3MnOiBtb2RhbC53aW5kb3dDbGFzcyxcbiAgICAgICAgICAnc2l6ZSc6IG1vZGFsLnNpemUsXG4gICAgICAgICAgJ2luZGV4Jzogb3BlbmVkV2luZG93cy5sZW5ndGgoKSAtIDEsXG4gICAgICAgICAgJ2FuaW1hdGUnOiAnYW5pbWF0ZSdcbiAgICAgICAgfSkuaHRtbChtb2RhbC5jb250ZW50KTtcbiAgICAgICAgaWYgKG1vZGFsLmFuaW1hdGlvbikge1xuICAgICAgICAgIGFuZ3VsYXJEb21FbC5hdHRyKCdtb2RhbC1hbmltYXRpb24nLCAndHJ1ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1vZGFsRG9tRWwgPSAkY29tcGlsZShhbmd1bGFyRG9tRWwpKG1vZGFsLnNjb3BlKTtcbiAgICAgICAgb3BlbmVkV2luZG93cy50b3AoKS52YWx1ZS5tb2RhbERvbUVsID0gbW9kYWxEb21FbDtcbiAgICAgICAgb3BlbmVkV2luZG93cy50b3AoKS52YWx1ZS5tb2RhbE9wZW5lciA9IG1vZGFsT3BlbmVyO1xuICAgICAgICBib2R5LmFwcGVuZChtb2RhbERvbUVsKTtcbiAgICAgICAgYm9keS5hZGRDbGFzcyhPUEVORURfTU9EQUxfQ0xBU1MpO1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gYnJvYWRjYXN0Q2xvc2luZyhtb2RhbFdpbmRvdywgcmVzdWx0T3JSZWFzb24sIGNsb3NpbmcpIHtcbiAgICAgICAgICByZXR1cm4gIW1vZGFsV2luZG93LnZhbHVlLm1vZGFsU2NvcGUuJGJyb2FkY2FzdCgnbW9kYWwuY2xvc2luZycsIHJlc3VsdE9yUmVhc29uLCBjbG9zaW5nKS5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgfVxuXG4gICAgICAkbW9kYWxTdGFjay5jbG9zZSA9IGZ1bmN0aW9uIChtb2RhbEluc3RhbmNlLCByZXN1bHQpIHtcbiAgICAgICAgdmFyIG1vZGFsV2luZG93ID0gb3BlbmVkV2luZG93cy5nZXQobW9kYWxJbnN0YW5jZSk7XG4gICAgICAgIGlmIChtb2RhbFdpbmRvdyAmJiBicm9hZGNhc3RDbG9zaW5nKG1vZGFsV2luZG93LCByZXN1bHQsIHRydWUpKSB7XG4gICAgICAgICAgbW9kYWxXaW5kb3cudmFsdWUuZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIHJlbW92ZU1vZGFsV2luZG93KG1vZGFsSW5zdGFuY2UpO1xuICAgICAgICAgIG1vZGFsV2luZG93LnZhbHVlLm1vZGFsT3BlbmVyLmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFtb2RhbFdpbmRvdztcbiAgICAgIH07XG5cbiAgICAgICRtb2RhbFN0YWNrLmRpc21pc3MgPSBmdW5jdGlvbiAobW9kYWxJbnN0YW5jZSwgcmVhc29uKSB7XG4gICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IG9wZW5lZFdpbmRvd3MuZ2V0KG1vZGFsSW5zdGFuY2UpO1xuICAgICAgICBpZiAobW9kYWxXaW5kb3cgJiYgYnJvYWRjYXN0Q2xvc2luZyhtb2RhbFdpbmRvdywgcmVhc29uLCBmYWxzZSkpIHtcbiAgICAgICAgICBtb2RhbFdpbmRvdy52YWx1ZS5kZWZlcnJlZC5yZWplY3QocmVhc29uKTtcbiAgICAgICAgICByZW1vdmVNb2RhbFdpbmRvdyhtb2RhbEluc3RhbmNlKTtcbiAgICAgICAgICBtb2RhbFdpbmRvdy52YWx1ZS5tb2RhbE9wZW5lci5mb2N1cygpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhbW9kYWxXaW5kb3c7XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5kaXNtaXNzQWxsID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB2YXIgdG9wTW9kYWwgPSB0aGlzLmdldFRvcCgpO1xuICAgICAgICB3aGlsZSAodG9wTW9kYWwgJiYgdGhpcy5kaXNtaXNzKHRvcE1vZGFsLmtleSwgcmVhc29uKSkge1xuICAgICAgICAgIHRvcE1vZGFsID0gdGhpcy5nZXRUb3AoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJG1vZGFsU3RhY2suZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3BlbmVkV2luZG93cy50b3AoKTtcbiAgICAgIH07XG5cbiAgICAgICRtb2RhbFN0YWNrLm1vZGFsUmVuZGVyZWQgPSBmdW5jdGlvbiAobW9kYWxJbnN0YW5jZSkge1xuICAgICAgICB2YXIgbW9kYWxXaW5kb3cgPSBvcGVuZWRXaW5kb3dzLmdldChtb2RhbEluc3RhbmNlKTtcbiAgICAgICAgaWYgKG1vZGFsV2luZG93KSB7XG4gICAgICAgICAgbW9kYWxXaW5kb3cudmFsdWUucmVuZGVyRGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gJG1vZGFsU3RhY2s7XG4gICAgfV0pXG5cbiAgLnByb3ZpZGVyKCckbW9kYWwnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgJG1vZGFsUHJvdmlkZXIgPSB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgYmFja2Ryb3A6IHRydWUsIC8vY2FuIGFsc28gYmUgZmFsc2Ugb3IgJ3N0YXRpYydcbiAgICAgICAga2V5Ym9hcmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAkZ2V0OiBbJyRpbmplY3RvcicsICckcm9vdFNjb3BlJywgJyRxJywgJyR0ZW1wbGF0ZVJlcXVlc3QnLCAnJGNvbnRyb2xsZXInLCAnJG1vZGFsU3RhY2snLFxuICAgICAgICBmdW5jdGlvbiAoJGluamVjdG9yLCAkcm9vdFNjb3BlLCAkcSwgJHRlbXBsYXRlUmVxdWVzdCwgJGNvbnRyb2xsZXIsICRtb2RhbFN0YWNrKSB7XG5cbiAgICAgICAgICB2YXIgJG1vZGFsID0ge307XG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRUZW1wbGF0ZVByb21pc2Uob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMudGVtcGxhdGUgPyAkcS53aGVuKG9wdGlvbnMudGVtcGxhdGUpIDpcbiAgICAgICAgICAgICAgJHRlbXBsYXRlUmVxdWVzdChhbmd1bGFyLmlzRnVuY3Rpb24ob3B0aW9ucy50ZW1wbGF0ZVVybCkgPyAob3B0aW9ucy50ZW1wbGF0ZVVybCkoKSA6IG9wdGlvbnMudGVtcGxhdGVVcmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGdldFJlc29sdmVQcm9taXNlcyhyZXNvbHZlcykge1xuICAgICAgICAgICAgdmFyIHByb21pc2VzQXJyID0gW107XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzb2x2ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHZhbHVlKSB8fCBhbmd1bGFyLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXNBcnIucHVzaCgkcS53aGVuKCRpbmplY3Rvci5pbnZva2UodmFsdWUpKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzQXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRtb2RhbC5vcGVuID0gZnVuY3Rpb24gKG1vZGFsT3B0aW9ucykge1xuXG4gICAgICAgICAgICB2YXIgbW9kYWxSZXN1bHREZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgbW9kYWxPcGVuZWREZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgbW9kYWxSZW5kZXJEZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgICAgIC8vcHJlcGFyZSBhbiBpbnN0YW5jZSBvZiBhIG1vZGFsIHRvIGJlIGluamVjdGVkIGludG8gY29udHJvbGxlcnMgYW5kIHJldHVybmVkIHRvIGEgY2FsbGVyXG4gICAgICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9IHtcbiAgICAgICAgICAgICAgcmVzdWx0OiBtb2RhbFJlc3VsdERlZmVycmVkLnByb21pc2UsXG4gICAgICAgICAgICAgIG9wZW5lZDogbW9kYWxPcGVuZWREZWZlcnJlZC5wcm9taXNlLFxuICAgICAgICAgICAgICByZW5kZXJlZDogbW9kYWxSZW5kZXJEZWZlcnJlZC5wcm9taXNlLFxuICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkbW9kYWxTdGFjay5jbG9zZShtb2RhbEluc3RhbmNlLCByZXN1bHQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkaXNtaXNzOiBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRtb2RhbFN0YWNrLmRpc21pc3MobW9kYWxJbnN0YW5jZSwgcmVhc29uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy9tZXJnZSBhbmQgY2xlYW4gdXAgb3B0aW9uc1xuICAgICAgICAgICAgbW9kYWxPcHRpb25zID0gYW5ndWxhci5leHRlbmQoe30sICRtb2RhbFByb3ZpZGVyLm9wdGlvbnMsIG1vZGFsT3B0aW9ucyk7XG4gICAgICAgICAgICBtb2RhbE9wdGlvbnMucmVzb2x2ZSA9IG1vZGFsT3B0aW9ucy5yZXNvbHZlIHx8IHt9O1xuXG4gICAgICAgICAgICAvL3ZlcmlmeSBvcHRpb25zXG4gICAgICAgICAgICBpZiAoIW1vZGFsT3B0aW9ucy50ZW1wbGF0ZSAmJiAhbW9kYWxPcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT25lIG9mIHRlbXBsYXRlIG9yIHRlbXBsYXRlVXJsIG9wdGlvbnMgaXMgcmVxdWlyZWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZUFuZFJlc29sdmVQcm9taXNlID1cbiAgICAgICAgICAgICAgJHEuYWxsKFtnZXRUZW1wbGF0ZVByb21pc2UobW9kYWxPcHRpb25zKV0uY29uY2F0KGdldFJlc29sdmVQcm9taXNlcyhtb2RhbE9wdGlvbnMucmVzb2x2ZSkpKTtcblxuXG4gICAgICAgICAgICB0ZW1wbGF0ZUFuZFJlc29sdmVQcm9taXNlLnRoZW4oZnVuY3Rpb24gcmVzb2x2ZVN1Y2Nlc3ModHBsQW5kVmFycykge1xuXG4gICAgICAgICAgICAgIHZhciBtb2RhbFNjb3BlID0gKG1vZGFsT3B0aW9ucy5zY29wZSB8fCAkcm9vdFNjb3BlKS4kbmV3KCk7XG4gICAgICAgICAgICAgIG1vZGFsU2NvcGUuJGNsb3NlID0gbW9kYWxJbnN0YW5jZS5jbG9zZTtcbiAgICAgICAgICAgICAgbW9kYWxTY29wZS4kZGlzbWlzcyA9IG1vZGFsSW5zdGFuY2UuZGlzbWlzcztcblxuICAgICAgICAgICAgICB2YXIgY3RybEluc3RhbmNlLCBjdHJsTG9jYWxzID0ge307XG4gICAgICAgICAgICAgIHZhciByZXNvbHZlSXRlciA9IDE7XG5cbiAgICAgICAgICAgICAgLy9jb250cm9sbGVyc1xuICAgICAgICAgICAgICBpZiAobW9kYWxPcHRpb25zLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBjdHJsTG9jYWxzLiRzY29wZSA9IG1vZGFsU2NvcGU7XG4gICAgICAgICAgICAgICAgY3RybExvY2Fscy4kbW9kYWxJbnN0YW5jZSA9IG1vZGFsSW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG1vZGFsT3B0aW9ucy5yZXNvbHZlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgY3RybExvY2Fsc1trZXldID0gdHBsQW5kVmFyc1tyZXNvbHZlSXRlcisrXTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGN0cmxJbnN0YW5jZSA9ICRjb250cm9sbGVyKG1vZGFsT3B0aW9ucy5jb250cm9sbGVyLCBjdHJsTG9jYWxzKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxPcHRpb25zLmNvbnRyb2xsZXJBcykge1xuICAgICAgICAgICAgICAgICAgbW9kYWxTY29wZVttb2RhbE9wdGlvbnMuY29udHJvbGxlckFzXSA9IGN0cmxJbnN0YW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAkbW9kYWxTdGFjay5vcGVuKG1vZGFsSW5zdGFuY2UsIHtcbiAgICAgICAgICAgICAgICBzY29wZTogbW9kYWxTY29wZSxcbiAgICAgICAgICAgICAgICBkZWZlcnJlZDogbW9kYWxSZXN1bHREZWZlcnJlZCxcbiAgICAgICAgICAgICAgICByZW5kZXJEZWZlcnJlZDogbW9kYWxSZW5kZXJEZWZlcnJlZCxcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0cGxBbmRWYXJzWzBdLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW9kYWxPcHRpb25zLmFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogbW9kYWxPcHRpb25zLmJhY2tkcm9wLFxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBtb2RhbE9wdGlvbnMua2V5Ym9hcmQsXG4gICAgICAgICAgICAgICAgYmFja2Ryb3BDbGFzczogbW9kYWxPcHRpb25zLmJhY2tkcm9wQ2xhc3MsXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6IG1vZGFsT3B0aW9ucy53aW5kb3dDbGFzcyxcbiAgICAgICAgICAgICAgICB3aW5kb3dUZW1wbGF0ZVVybDogbW9kYWxPcHRpb25zLndpbmRvd1RlbXBsYXRlVXJsLFxuICAgICAgICAgICAgICAgIHNpemU6IG1vZGFsT3B0aW9ucy5zaXplXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiByZXNvbHZlRXJyb3IocmVhc29uKSB7XG4gICAgICAgICAgICAgIG1vZGFsUmVzdWx0RGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGVtcGxhdGVBbmRSZXNvbHZlUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbW9kYWxPcGVuZWREZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgICBtb2RhbE9wZW5lZERlZmVycmVkLnJlamVjdChyZWFzb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb2RhbEluc3RhbmNlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gJG1vZGFsO1xuICAgICAgICB9XVxuICAgIH07XG5cbiAgICByZXR1cm4gJG1vZGFsUHJvdmlkZXI7XG4gIH0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYW5ndWxhci11aS1ib290c3RyYXAvc3JjL21vZGFsL21vZGFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogYW5ndWxhci1zdHJhcFxuICogQHZlcnNpb24gdjIuMS42IC0gMjAxNS0wMS0xMVxuICogQGxpbmsgaHR0cDovL21nY3JlYS5naXRodWIuaW8vYW5ndWxhci1zdHJhcFxuICogQGF1dGhvciBPbGl2aWVyIExvdXZpZ25lcyAob2xpdmllckBtZy1jcmVhLmNvbSlcbiAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlLCBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdtZ2NyZWEubmdTdHJhcC5oZWxwZXJzLmRpbWVuc2lvbnMnLCBbXSlcblxuICAuZmFjdG9yeSgnZGltZW5zaW9ucycsIFtcIiRkb2N1bWVudFwiLCBcIiR3aW5kb3dcIiwgZnVuY3Rpb24oJGRvY3VtZW50LCAkd2luZG93KSB7XG5cbiAgICB2YXIganFMaXRlID0gYW5ndWxhci5lbGVtZW50O1xuICAgIHZhciBmbiA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGVzdCB0aGUgZWxlbWVudCBub2RlTmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICB2YXIgbm9kZU5hbWUgPSBmbi5ub2RlTmFtZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGVOYW1lICYmIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IGNvbXB1dGVkIHN0eWxlXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcHJvcFxuICAgICAqIEBwYXJhbSBleHRyYVxuICAgICAqL1xuICAgIGZuLmNzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHByb3AsIGV4dHJhKSB7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICBpZiAoZWxlbWVudC5jdXJyZW50U3R5bGUpIHsgLy9JRVxuICAgICAgICB2YWx1ZSA9IGVsZW1lbnQuY3VycmVudFN0eWxlW3Byb3BdO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICB2YWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3Byb3BdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBlbGVtZW50LnN0eWxlW3Byb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhID09PSB0cnVlID8gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCA6IHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyByZWFkLW9ubHkgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBvZmZzZXQgZnVuY3Rpb246XG4gICAgICogQHJlcXVpcmVkLWJ5IGJvb3RzdHJhcC10b29sdGlwLCBib290c3RyYXAtYWZmaXhcbiAgICAgKiBAdXJsIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9vZmZzZXQvXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBmbi5vZmZzZXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgYm94UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgZG9jRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBib3hSZWN0LndpZHRoIHx8IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogYm94UmVjdC5oZWlnaHQgfHwgZWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIHRvcDogYm94UmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsZW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgLSAoZG9jRWxlbWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IDApLFxuICAgICAgICBsZWZ0OiBib3hSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsZW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpIC0gKGRvY0VsZW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgMClcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIHJlYWQtb25seSBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIHBvc2l0aW9uIGZ1bmN0aW9uXG4gICAgICogQHJlcXVpcmVkLWJ5IGJvb3RzdHJhcC10b29sdGlwLCBib290c3RyYXAtYWZmaXhcbiAgICAgKiBAdXJsIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9vZmZzZXQvXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBmbi5wb3NpdGlvbiA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgdmFyIG9mZnNldFBhcmVudFJlY3QgPSB7dG9wOiAwLCBsZWZ0OiAwfSxcbiAgICAgICAgICBvZmZzZXRQYXJlbnRFbGVtZW50LFxuICAgICAgICAgIG9mZnNldDtcblxuICAgICAgLy8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSwgYmVjYXVzZSBpdCBpcyBpdCdzIG9ubHkgb2Zmc2V0IHBhcmVudFxuICAgICAgaWYgKGZuLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuXG4gICAgICAgIC8vIFdlIGFzc3VtZSB0aGF0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyBhdmFpbGFibGUgd2hlbiBjb21wdXRlZCBwb3NpdGlvbiBpcyBmaXhlZFxuICAgICAgICBvZmZzZXQgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50RWxlbWVudFxuICAgICAgICBvZmZzZXRQYXJlbnRFbGVtZW50ID0gb2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICAgICAgb2Zmc2V0ID0gZm4ub2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoIW5vZGVOYW1lKG9mZnNldFBhcmVudEVsZW1lbnQsICdodG1sJykpIHtcbiAgICAgICAgICBvZmZzZXRQYXJlbnRSZWN0ID0gZm4ub2Zmc2V0KG9mZnNldFBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG9mZnNldFBhcmVudCBib3JkZXJzXG4gICAgICAgIG9mZnNldFBhcmVudFJlY3QudG9wICs9IGZuLmNzcyhvZmZzZXRQYXJlbnRFbGVtZW50LCAnYm9yZGVyVG9wV2lkdGgnLCB0cnVlKTtcbiAgICAgICAgb2Zmc2V0UGFyZW50UmVjdC5sZWZ0ICs9IGZuLmNzcyhvZmZzZXRQYXJlbnRFbGVtZW50LCAnYm9yZGVyTGVmdFdpZHRoJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICB0b3A6IG9mZnNldC50b3AgLSBvZmZzZXRQYXJlbnRSZWN0LnRvcCAtIGZuLmNzcyhlbGVtZW50LCAnbWFyZ2luVG9wJywgdHJ1ZSksXG4gICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gb2Zmc2V0UGFyZW50UmVjdC5sZWZ0IC0gZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5MZWZ0JywgdHJ1ZSlcbiAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2xvc2VzdCwgbm9uLXN0YXRpY2FsbHkgcG9zaXRpb25lZCBvZmZzZXRQYXJlbnQgb2YgYSBnaXZlbiBlbGVtZW50XG4gICAgICogQHJlcXVpcmVkLWJ5IGZuLnBvc2l0aW9uXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZnVuY3Rpb24gb2Zmc2V0UGFyZW50RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgZG9jRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2NFbGVtZW50O1xuICAgICAgaWYobm9kZU5hbWUob2Zmc2V0UGFyZW50LCAnI2RvY3VtZW50JykpIHJldHVybiBkb2NFbGVtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHdoaWxlKG9mZnNldFBhcmVudCAmJiAhbm9kZU5hbWUob2Zmc2V0UGFyZW50LCAnaHRtbCcpICYmIGZuLmNzcyhvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2NFbGVtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBoZWlnaHQgZnVuY3Rpb25cbiAgICAgKiBAcmVxdWlyZWQtYnkgYm9vdHN0cmFwLWFmZml4XG4gICAgICogQHVybCBodHRwOi8vYXBpLmpxdWVyeS5jb20vaGVpZ2h0L1xuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG91dGVyXG4gICAgICovXG4gICAgZm4uaGVpZ2h0ID0gZnVuY3Rpb24oZWxlbWVudCwgb3V0ZXIpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYob3V0ZXIpIHtcbiAgICAgICAgdmFsdWUgKz0gZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5Ub3AnLCB0cnVlKSArIGZuLmNzcyhlbGVtZW50LCAnbWFyZ2luQm90dG9tJywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSAtPSBmbi5jc3MoZWxlbWVudCwgJ3BhZGRpbmdUb3AnLCB0cnVlKSArIGZuLmNzcyhlbGVtZW50LCAncGFkZGluZ0JvdHRvbScsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdib3JkZXJUb3BXaWR0aCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdib3JkZXJCb3R0b21XaWR0aCcsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIHdpZHRoIGZ1bmN0aW9uXG4gICAgICogQHJlcXVpcmVkLWJ5IGJvb3RzdHJhcC1hZmZpeFxuICAgICAqIEB1cmwgaHR0cDovL2FwaS5qcXVlcnkuY29tL3dpZHRoL1xuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG91dGVyXG4gICAgICovXG4gICAgZm4ud2lkdGggPSBmdW5jdGlvbihlbGVtZW50LCBvdXRlcikge1xuICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGlmKG91dGVyKSB7XG4gICAgICAgIHZhbHVlICs9IGZuLmNzcyhlbGVtZW50LCAnbWFyZ2luTGVmdCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5SaWdodCcsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgLT0gZm4uY3NzKGVsZW1lbnQsICdwYWRkaW5nTGVmdCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdwYWRkaW5nUmlnaHQnLCB0cnVlKSArIGZuLmNzcyhlbGVtZW50LCAnYm9yZGVyTGVmdFdpZHRoJywgdHJ1ZSkgKyBmbi5jc3MoZWxlbWVudCwgJ2JvcmRlclJpZ2h0V2lkdGgnLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZuO1xuXG4gIH1dKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXItc3RyYXAvZGlzdC9tb2R1bGVzL2RpbWVuc2lvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBhbmd1bGFyLXN0cmFwXG4gKiBAdmVyc2lvbiB2Mi4xLjYgLSAyMDE1LTAxLTExXG4gKiBAbGluayBodHRwOi8vbWdjcmVhLmdpdGh1Yi5pby9hbmd1bGFyLXN0cmFwXG4gKiBAYXV0aG9yIE9saXZpZXIgTG91dmlnbmVzIChvbGl2aWVyQG1nLWNyZWEuY29tKVxuICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UsIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ21nY3JlYS5uZ1N0cmFwLnBvcG92ZXInLCBbJ21nY3JlYS5uZ1N0cmFwLnRvb2x0aXAnXSlcblxuICAucHJvdmlkZXIoJyRwb3BvdmVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgYW5pbWF0aW9uOiAnYW0tZmFkZScsXG4gICAgICBjdXN0b21DbGFzczogJycsXG4gICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgdGFyZ2V0OiBmYWxzZSxcbiAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgIHRlbXBsYXRlOiAncG9wb3Zlci9wb3BvdmVyLnRwbC5odG1sJyxcbiAgICAgIGNvbnRlbnRUZW1wbGF0ZTogZmFsc2UsXG4gICAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgICBodG1sOiBmYWxzZSxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBhdXRvQ2xvc2U6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuJGdldCA9IFtcIiR0b29sdGlwXCIsIGZ1bmN0aW9uKCR0b29sdGlwKSB7XG5cbiAgICAgIGZ1bmN0aW9uIFBvcG92ZXJGYWN0b3J5KGVsZW1lbnQsIGNvbmZpZykge1xuXG4gICAgICAgIC8vIENvbW1vbiB2YXJzXG4gICAgICAgIHZhciBvcHRpb25zID0gYW5ndWxhci5leHRlbmQoe30sIGRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgICAgIHZhciAkcG9wb3ZlciA9ICR0b29sdGlwKGVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgc2NvcGUgYXMgc3RyaW5nIG9wdGlvbnMgWy8qdGl0bGUsICovY29udGVudF1cbiAgICAgICAgaWYob3B0aW9ucy5jb250ZW50KSB7XG4gICAgICAgICAgJHBvcG92ZXIuJHNjb3BlLmNvbnRlbnQgPSBvcHRpb25zLmNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJHBvcG92ZXI7XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFBvcG92ZXJGYWN0b3J5O1xuXG4gICAgfV07XG5cbiAgfSlcblxuICAuZGlyZWN0aXZlKCdic1BvcG92ZXInLCBbXCIkd2luZG93XCIsIFwiJHNjZVwiLCBcIiRwb3BvdmVyXCIsIGZ1bmN0aW9uKCR3aW5kb3csICRzY2UsICRwb3BvdmVyKSB7XG5cbiAgICB2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gJHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgJHdpbmRvdy5zZXRUaW1lb3V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRUFDJyxcbiAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgbGluazogZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcblxuICAgICAgICAvLyBEaXJlY3RpdmUgb3B0aW9uc1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtzY29wZTogc2NvcGV9O1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goWyd0ZW1wbGF0ZScsICdjb250ZW50VGVtcGxhdGUnLCAncGxhY2VtZW50JywgJ2NvbnRhaW5lcicsICd0YXJnZXQnLCAnZGVsYXknLCAndHJpZ2dlcicsICdrZXlib2FyZCcsICdodG1sJywgJ2FuaW1hdGlvbicsICdjdXN0b21DbGFzcycsICdhdXRvQ2xvc2UnLCAnaWQnXSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXR0cltrZXldKSkgb3B0aW9uc1trZXldID0gYXR0cltrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdXBwb3J0IHNjb3BlIGFzIGRhdGEtYXR0cnNcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKFsndGl0bGUnLCAnY29udGVudCddLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICBhdHRyW2tleV0gJiYgYXR0ci4kb2JzZXJ2ZShrZXksIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgc2NvcGVba2V5XSA9ICRzY2UudHJ1c3RBc0h0bWwobmV3VmFsdWUpO1xuICAgICAgICAgICAgYW5ndWxhci5pc0RlZmluZWQob2xkVmFsdWUpICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcG9wb3ZlciAmJiBwb3BvdmVyLiRhcHBseVBsYWNlbWVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgc2NvcGUgYXMgYW4gb2JqZWN0XG4gICAgICAgIGF0dHIuYnNQb3BvdmVyICYmIHNjb3BlLiR3YXRjaChhdHRyLmJzUG9wb3ZlciwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc09iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHNjb3BlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRlbnQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYW5ndWxhci5pc0RlZmluZWQob2xkVmFsdWUpICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBvcG92ZXIgJiYgcG9wb3Zlci4kYXBwbHlQbGFjZW1lbnQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gVmlzaWJpbGl0eSBiaW5kaW5nIHN1cHBvcnRcbiAgICAgICAgYXR0ci5ic1Nob3cgJiYgc2NvcGUuJHdhdGNoKGF0dHIuYnNTaG93LCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZighcG9wb3ZlciB8fCAhYW5ndWxhci5pc0RlZmluZWQobmV3VmFsdWUpKSByZXR1cm47XG4gICAgICAgICAgaWYoYW5ndWxhci5pc1N0cmluZyhuZXdWYWx1ZSkpIG5ld1ZhbHVlID0gISFuZXdWYWx1ZS5tYXRjaCgvdHJ1ZXwsPyhwb3BvdmVyKSw/L2kpO1xuICAgICAgICAgIG5ld1ZhbHVlID09PSB0cnVlID8gcG9wb3Zlci5zaG93KCkgOiBwb3BvdmVyLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwb3BvdmVyXG4gICAgICAgIHZhciBwb3BvdmVyID0gJHBvcG92ZXIoZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gR2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAocG9wb3ZlcikgcG9wb3Zlci5kZXN0cm95KCk7XG4gICAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgICAgcG9wb3ZlciA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfTtcblxuICB9XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbmd1bGFyLXN0cmFwL2Rpc3QvbW9kdWxlcy9wb3BvdmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogYW5ndWxhci1zdHJhcFxuICogQHZlcnNpb24gdjIuMS42IC0gMjAxNS0wMS0xMVxuICogQGxpbmsgaHR0cDovL21nY3JlYS5naXRodWIuaW8vYW5ndWxhci1zdHJhcFxuICogQGF1dGhvciBPbGl2aWVyIExvdXZpZ25lcyAob2xpdmllckBtZy1jcmVhLmNvbSlcbiAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlLCBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdtZ2NyZWEubmdTdHJhcC50b29sdGlwJywgWydtZ2NyZWEubmdTdHJhcC5oZWxwZXJzLmRpbWVuc2lvbnMnXSlcblxuICAucHJvdmlkZXIoJyR0b29sdGlwJywgZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgYW5pbWF0aW9uOiAnYW0tZmFkZScsXG4gICAgICBjdXN0b21DbGFzczogJycsXG4gICAgICBwcmVmaXhDbGFzczogJ3Rvb2x0aXAnLFxuICAgICAgcHJlZml4RXZlbnQ6ICd0b29sdGlwJyxcbiAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICB0YXJnZXQ6IGZhbHNlLFxuICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgIHRlbXBsYXRlOiAndG9vbHRpcC90b29sdGlwLnRwbC5odG1sJyxcbiAgICAgIGNvbnRlbnRUZW1wbGF0ZTogZmFsc2UsXG4gICAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgaHRtbDogZmFsc2UsXG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBhdXRvQ2xvc2U6IGZhbHNlLFxuICAgICAgYnNFbmFibGVkOiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMuJGdldCA9IFtcIiR3aW5kb3dcIiwgXCIkcm9vdFNjb3BlXCIsIFwiJGNvbXBpbGVcIiwgXCIkcVwiLCBcIiR0ZW1wbGF0ZUNhY2hlXCIsIFwiJGh0dHBcIiwgXCIkYW5pbWF0ZVwiLCBcIiRzY2VcIiwgXCJkaW1lbnNpb25zXCIsIFwiJCRyQUZcIiwgXCIkdGltZW91dFwiLCBmdW5jdGlvbigkd2luZG93LCAkcm9vdFNjb3BlLCAkY29tcGlsZSwgJHEsICR0ZW1wbGF0ZUNhY2hlLCAkaHR0cCwgJGFuaW1hdGUsICRzY2UsIGRpbWVuc2lvbnMsICQkckFGLCAkdGltZW91dCkge1xuXG4gICAgICB2YXIgdHJpbSA9IFN0cmluZy5wcm90b3R5cGUudHJpbTtcbiAgICAgIHZhciBpc1RvdWNoID0gJ2NyZWF0ZVRvdWNoJyBpbiAkd2luZG93LmRvY3VtZW50O1xuICAgICAgdmFyIGh0bWxSZXBsYWNlUmVnRXhwID0gL25nLWJpbmQ9XCIvaWc7XG4gICAgICB2YXIgJGJvZHkgPSBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdy5kb2N1bWVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFRvb2x0aXBGYWN0b3J5KGVsZW1lbnQsIGNvbmZpZykge1xuXG4gICAgICAgIHZhciAkdG9vbHRpcCA9IHt9O1xuXG4gICAgICAgIC8vIENvbW1vbiB2YXJzXG4gICAgICAgIHZhciBub2RlTmFtZSA9IGVsZW1lbnRbMF0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSAkdG9vbHRpcC4kb3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBkZWZhdWx0cywgY29uZmlnKTtcbiAgICAgICAgJHRvb2x0aXAuJHByb21pc2UgPSBmZXRjaFRlbXBsYXRlKG9wdGlvbnMudGVtcGxhdGUpO1xuICAgICAgICB2YXIgc2NvcGUgPSAkdG9vbHRpcC4kc2NvcGUgPSBvcHRpb25zLnNjb3BlICYmIG9wdGlvbnMuc2NvcGUuJG5ldygpIHx8ICRyb290U2NvcGUuJG5ldygpO1xuICAgICAgICBpZihvcHRpb25zLmRlbGF5ICYmIGFuZ3VsYXIuaXNTdHJpbmcob3B0aW9ucy5kZWxheSkpIHtcbiAgICAgICAgICB2YXIgc3BsaXQgPSBvcHRpb25zLmRlbGF5LnNwbGl0KCcsJykubWFwKHBhcnNlRmxvYXQpO1xuICAgICAgICAgIG9wdGlvbnMuZGVsYXkgPSBzcGxpdC5sZW5ndGggPiAxID8ge3Nob3c6IHNwbGl0WzBdLCBoaWRlOiBzcGxpdFsxXX0gOiBzcGxpdFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3JlICRpZCB0byBpZGVudGlmeSB0aGUgdHJpZ2dlcmluZyBlbGVtZW50IGluIGV2ZW50c1xuICAgICAgICAvLyBnaXZlIHByaW9yaXR5IHRvIG9wdGlvbnMuaWQsIG90aGVyd2lzZSwgdHJ5IHRvIHVzZVxuICAgICAgICAvLyBlbGVtZW50IGlkIGlmIGRlZmluZWRcbiAgICAgICAgJHRvb2x0aXAuJGlkID0gb3B0aW9ucy5pZCB8fCBlbGVtZW50LmF0dHIoJ2lkJykgfHwgJyc7XG5cbiAgICAgICAgLy8gU3VwcG9ydCBzY29wZSBhcyBzdHJpbmcgb3B0aW9uc1xuICAgICAgICBpZihvcHRpb25zLnRpdGxlKSB7XG4gICAgICAgICAgc2NvcGUudGl0bGUgPSAkc2NlLnRydXN0QXNIdG1sKG9wdGlvbnMudGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvdmlkZSBzY29wZSBoZWxwZXJzXG4gICAgICAgIHNjb3BlLiRzZXRFbmFibGVkID0gZnVuY3Rpb24oaXNFbmFibGVkKSB7XG4gICAgICAgICAgc2NvcGUuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHRvb2x0aXAuc2V0RW5hYmxlZChpc0VuYWJsZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBzY29wZS4kaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0b29sdGlwLmhpZGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NvcGUuJHNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdG9vbHRpcC5zaG93KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHNjb3BlLiR0b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdG9vbHRpcC50b2dnbGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUHVibGlzaCBpc1Nob3duIGFzIGEgcHJvdGVjdGVkIHZhciBvbiBzY29wZVxuICAgICAgICAkdG9vbHRpcC4kaXNTaG93biA9IHNjb3BlLiRpc1Nob3duID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSB2YXJzXG4gICAgICAgIHZhciB0aW1lb3V0LCBob3ZlclN0YXRlO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgY29udGVudFRlbXBsYXRlIG9wdGlvblxuICAgICAgICBpZihvcHRpb25zLmNvbnRlbnRUZW1wbGF0ZSkge1xuICAgICAgICAgICR0b29sdGlwLiRwcm9taXNlID0gJHRvb2x0aXAuJHByb21pc2UudGhlbihmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlRWwgPSBhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoVGVtcGxhdGUob3B0aW9ucy5jb250ZW50VGVtcGxhdGUpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihjb250ZW50VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbnRlbnRFbCA9IGZpbmRFbGVtZW50KCdbbmctYmluZD1cImNvbnRlbnRcIl0nLCB0ZW1wbGF0ZUVsWzBdKTtcbiAgICAgICAgICAgICAgaWYoIWNvbnRlbnRFbC5sZW5ndGgpIGNvbnRlbnRFbCA9IGZpbmRFbGVtZW50KCdbbmctYmluZD1cInRpdGxlXCJdJywgdGVtcGxhdGVFbFswXSk7XG4gICAgICAgICAgICAgIGNvbnRlbnRFbC5yZW1vdmVBdHRyKCduZy1iaW5kJykuaHRtbChjb250ZW50VGVtcGxhdGUpO1xuICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVFbFswXS5vdXRlckhUTUw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZldGNoLCBjb21waWxlIHRoZW4gaW5pdGlhbGl6ZSB0b29sdGlwXG4gICAgICAgIHZhciB0aXBMaW5rZXIsIHRpcEVsZW1lbnQsIHRpcFRlbXBsYXRlLCB0aXBDb250YWluZXIsIHRpcFNjb3BlO1xuICAgICAgICAkdG9vbHRpcC4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHRlbXBsYXRlKSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc09iamVjdCh0ZW1wbGF0ZSkpIHRlbXBsYXRlID0gdGVtcGxhdGUuZGF0YTtcbiAgICAgICAgICBpZihvcHRpb25zLmh0bWwpIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShodG1sUmVwbGFjZVJlZ0V4cCwgJ25nLWJpbmQtaHRtbD1cIicpO1xuICAgICAgICAgIHRlbXBsYXRlID0gdHJpbS5hcHBseSh0ZW1wbGF0ZSk7XG4gICAgICAgICAgdGlwVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgICB0aXBMaW5rZXIgPSAkY29tcGlsZSh0ZW1wbGF0ZSk7XG4gICAgICAgICAgJHRvb2x0aXAuaW5pdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdG9vbHRpcC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAvLyBPcHRpb25zOiBkZWxheVxuICAgICAgICAgIGlmIChvcHRpb25zLmRlbGF5ICYmIGFuZ3VsYXIuaXNOdW1iZXIob3B0aW9ucy5kZWxheSkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGVsYXkgPSB7XG4gICAgICAgICAgICAgIHNob3c6IG9wdGlvbnMuZGVsYXksXG4gICAgICAgICAgICAgIGhpZGU6IG9wdGlvbnMuZGVsYXlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVwbGFjZSB0cmlnZ2VyIG9uIHRvdWNoIGRldmljZXMgP1xuICAgICAgICAgIC8vIGlmKGlzVG91Y2ggJiYgb3B0aW9ucy50cmlnZ2VyID09PSBkZWZhdWx0cy50cmlnZ2VyKSB7XG4gICAgICAgICAgLy8gICBvcHRpb25zLnRyaWdnZXIucmVwbGFjZSgvaG92ZXIvZywgJ2NsaWNrJyk7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gT3B0aW9ucyA6IGNvbnRhaW5lclxuICAgICAgICAgIGlmKG9wdGlvbnMuY29udGFpbmVyID09PSAnc2VsZicpIHtcbiAgICAgICAgICAgIHRpcENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIGlmKGFuZ3VsYXIuaXNFbGVtZW50KG9wdGlvbnMuY29udGFpbmVyKSkge1xuICAgICAgICAgICAgdGlwQ29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICAgICAgfSBlbHNlIGlmKG9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aXBDb250YWluZXIgPSBmaW5kRWxlbWVudChvcHRpb25zLmNvbnRhaW5lcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3B0aW9uczogdHJpZ2dlclxuICAgICAgICAgIGJpbmRUcmlnZ2VyRXZlbnRzKCk7XG5cbiAgICAgICAgICAvLyBPcHRpb25zOiB0YXJnZXRcbiAgICAgICAgICBpZihvcHRpb25zLnRhcmdldCkge1xuICAgICAgICAgICAgb3B0aW9ucy50YXJnZXQgPSBhbmd1bGFyLmlzRWxlbWVudChvcHRpb25zLnRhcmdldCkgPyBvcHRpb25zLnRhcmdldCA6IGZpbmRFbGVtZW50KG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBPcHRpb25zOiBzaG93XG4gICAgICAgICAgaWYob3B0aW9ucy5zaG93KSB7XG4gICAgICAgICAgICBzY29wZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMudHJpZ2dlciA9PT0gJ2ZvY3VzJyA/IGVsZW1lbnRbMF0uZm9jdXMoKSA6ICR0b29sdGlwLnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIC8vIFVuYmluZCBldmVudHNcbiAgICAgICAgICB1bmJpbmRUcmlnZ2VyRXZlbnRzKCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgZWxlbWVudFxuICAgICAgICAgIGRlc3Ryb3lUaXBFbGVtZW50KCk7XG5cbiAgICAgICAgICAvLyBEZXN0cm95IHNjb3BlXG4gICAgICAgICAgc2NvcGUuJGRlc3Ryb3koKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLmVudGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgaG92ZXJTdGF0ZSA9ICdpbic7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmRlbGF5IHx8ICFvcHRpb25zLmRlbGF5LnNob3cpIHtcbiAgICAgICAgICAgIHJldHVybiAkdG9vbHRpcC5zaG93KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaG92ZXJTdGF0ZSA9PT0naW4nKSAkdG9vbHRpcC5zaG93KCk7XG4gICAgICAgICAgfSwgb3B0aW9ucy5kZWxheS5zaG93KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYnNFbmFibGVkIHx8ICR0b29sdGlwLiRpc1Nob3duKSByZXR1cm47XG5cbiAgICAgICAgICBzY29wZS4kZW1pdChvcHRpb25zLnByZWZpeEV2ZW50ICsgJy5zaG93LmJlZm9yZScsICR0b29sdGlwKTtcbiAgICAgICAgICB2YXIgcGFyZW50LCBhZnRlcjtcbiAgICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHRpcENvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICh0aXBDb250YWluZXJbMF0ubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgIGFmdGVyID0gYW5ndWxhci5lbGVtZW50KHRpcENvbnRhaW5lclswXS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWZ0ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgYWZ0ZXIgPSBlbGVtZW50O1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gSGlkZSBhbnkgZXhpc3RpbmcgdGlwRWxlbWVudFxuICAgICAgICAgIGlmKHRpcEVsZW1lbnQpIGRlc3Ryb3lUaXBFbGVtZW50KCk7XG4gICAgICAgICAgLy8gRmV0Y2ggYSBjbG9uZWQgZWxlbWVudCBsaW5rZWQgZnJvbSB0ZW1wbGF0ZVxuICAgICAgICAgIHRpcFNjb3BlID0gJHRvb2x0aXAuJHNjb3BlLiRuZXcoKTtcbiAgICAgICAgICB0aXBFbGVtZW50ID0gJHRvb2x0aXAuJGVsZW1lbnQgPSB0aXBMaW5rZXIodGlwU2NvcGUsIGZ1bmN0aW9uKGNsb25lZEVsZW1lbnQsIHNjb3BlKSB7fSk7XG5cbiAgICAgICAgICAvLyBTZXQgdGhlIGluaXRpYWwgcG9zaXRpb25pbmcuICBNYWtlIHRoZSB0b29sdGlwIGludmlzaWJsZVxuICAgICAgICAgIC8vIHNvIElFIGRvZXNuJ3QgdHJ5IHRvIGZvY3VzIG9uIGl0IG9mZiBzY3JlZW4uXG4gICAgICAgICAgdGlwRWxlbWVudC5jc3Moe3RvcDogJy05OTk5cHgnLCBsZWZ0OiAnLTk5OTlweCcsIGRpc3BsYXk6ICdibG9jaycsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSk7XG5cbiAgICAgICAgICAvLyBPcHRpb25zOiBhbmltYXRpb25cbiAgICAgICAgICBpZihvcHRpb25zLmFuaW1hdGlvbikgdGlwRWxlbWVudC5hZGRDbGFzcyhvcHRpb25zLmFuaW1hdGlvbik7XG4gICAgICAgICAgLy8gT3B0aW9uczogdHlwZVxuICAgICAgICAgIGlmKG9wdGlvbnMudHlwZSkgdGlwRWxlbWVudC5hZGRDbGFzcyhvcHRpb25zLnByZWZpeENsYXNzICsgJy0nICsgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAvLyBPcHRpb25zOiBjdXN0b20gY2xhc3Nlc1xuICAgICAgICAgIGlmKG9wdGlvbnMuY3VzdG9tQ2xhc3MpIHRpcEVsZW1lbnQuYWRkQ2xhc3Mob3B0aW9ucy5jdXN0b21DbGFzcyk7XG5cbiAgICAgICAgICAvLyBTdXBwb3J0IHYxLjMrICRhbmltYXRlXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9jb21taXQvYmYwZjU1MDJiMWJiZmRkYzVjZGQyZjEzOGVmZDkxODhiOGM2NTJhOVxuICAgICAgICAgIHZhciBwcm9taXNlID0gJGFuaW1hdGUuZW50ZXIodGlwRWxlbWVudCwgcGFyZW50LCBhZnRlciwgZW50ZXJBbmltYXRlQ2FsbGJhY2spO1xuICAgICAgICAgIGlmKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSBwcm9taXNlLnRoZW4oZW50ZXJBbmltYXRlQ2FsbGJhY2spO1xuXG4gICAgICAgICAgJHRvb2x0aXAuJGlzU2hvd24gPSBzY29wZS4kaXNTaG93biA9IHRydWU7XG4gICAgICAgICAgc2FmZURpZ2VzdChzY29wZSk7XG4gICAgICAgICAgJCRyQUYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHRvb2x0aXAuJGFwcGx5UGxhY2VtZW50KCk7XG5cbiAgICAgICAgICAgIC8vIE9uY2UgcGxhY2VkLCBtYWtlIHRoZSB0b29sdGlwIHZpc2libGVcbiAgICAgICAgICAgIGlmKHRpcEVsZW1lbnQpIHRpcEVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OiAndmlzaWJsZSd9KTtcbiAgICAgICAgICB9KTsgLy8gdmFyIGEgPSBib2R5RWwub2Zmc2V0V2lkdGggKyAxOyA/XG5cbiAgICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICAgIGlmKG9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgICAgICAgIGlmKG9wdGlvbnMudHJpZ2dlciAhPT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgICAkdG9vbHRpcC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmluZEtleWJvYXJkRXZlbnRzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYob3B0aW9ucy5hdXRvQ2xvc2UpIHtcbiAgICAgICAgICAgIGJpbmRBdXRvQ2xvc2VFdmVudHMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBlbnRlckFuaW1hdGVDYWxsYmFjaygpIHtcbiAgICAgICAgICBzY29wZS4kZW1pdChvcHRpb25zLnByZWZpeEV2ZW50ICsgJy5zaG93JywgJHRvb2x0aXApO1xuICAgICAgICB9XG5cbiAgICAgICAgJHRvb2x0aXAubGVhdmUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICBob3ZlclN0YXRlID0gJ291dCc7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmRlbGF5IHx8ICFvcHRpb25zLmRlbGF5LmhpZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAkdG9vbHRpcC5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChob3ZlclN0YXRlID09PSAnb3V0Jykge1xuICAgICAgICAgICAgICAkdG9vbHRpcC5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgb3B0aW9ucy5kZWxheS5oaWRlKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBfYmx1cjtcbiAgICAgICAgdmFyIF90aXBUb0hpZGU7XG4gICAgICAgICR0b29sdGlwLmhpZGUgPSBmdW5jdGlvbihibHVyKSB7XG5cbiAgICAgICAgICBpZighJHRvb2x0aXAuJGlzU2hvd24pIHJldHVybjtcbiAgICAgICAgICBzY29wZS4kZW1pdChvcHRpb25zLnByZWZpeEV2ZW50ICsgJy5oaWRlLmJlZm9yZScsICR0b29sdGlwKTtcblxuICAgICAgICAgIC8vIHN0b3JlIGJsdXIgdmFsdWUgZm9yIGxlYXZlQW5pbWF0ZUNhbGxiYWNrIHRvIHVzZVxuICAgICAgICAgIF9ibHVyID0gYmx1cjtcblxuICAgICAgICAgIC8vIHN0b3JlIGN1cnJlbnQgdGlwRWxlbWVudCByZWZlcmVuY2UgdG8gdXNlXG4gICAgICAgICAgLy8gaW4gbGVhdmVBbmltYXRlQ2FsbGJhY2tcbiAgICAgICAgICBfdGlwVG9IaWRlID0gdGlwRWxlbWVudDtcblxuICAgICAgICAgIC8vIFN1cHBvcnQgdjEuMysgJGFuaW1hdGVcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2NvbW1pdC9iZjBmNTUwMmIxYmJmZGRjNWNkZDJmMTM4ZWZkOTE4OGI4YzY1MmE5XG4gICAgICAgICAgdmFyIHByb21pc2UgPSAkYW5pbWF0ZS5sZWF2ZSh0aXBFbGVtZW50LCBsZWF2ZUFuaW1hdGVDYWxsYmFjayk7XG4gICAgICAgICAgaWYocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHByb21pc2UudGhlbihsZWF2ZUFuaW1hdGVDYWxsYmFjayk7XG5cbiAgICAgICAgICAkdG9vbHRpcC4kaXNTaG93biA9IHNjb3BlLiRpc1Nob3duID0gZmFsc2U7XG4gICAgICAgICAgc2FmZURpZ2VzdChzY29wZSk7XG5cbiAgICAgICAgICAvLyBVbmJpbmQgZXZlbnRzXG4gICAgICAgICAgaWYob3B0aW9ucy5rZXlib2FyZCAmJiB0aXBFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB1bmJpbmRLZXlib2FyZEV2ZW50cygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b0Nsb3NlICYmIHRpcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHVuYmluZEF1dG9DbG9zZUV2ZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBsZWF2ZUFuaW1hdGVDYWxsYmFjaygpIHtcbiAgICAgICAgICBzY29wZS4kZW1pdChvcHRpb25zLnByZWZpeEV2ZW50ICsgJy5oaWRlJywgJHRvb2x0aXApO1xuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgY3VycmVudCB0aXBFbGVtZW50IHN0aWxsIHJlZmVyZW5jZXNcbiAgICAgICAgICAvLyB0aGUgc2FtZSBlbGVtZW50IHdoZW4gaGlkZSB3YXMgY2FsbGVkXG4gICAgICAgICAgaWYgKHRpcEVsZW1lbnQgPT09IF90aXBUb0hpZGUpIHtcbiAgICAgICAgICAgIC8vIEFsbG93IHRvIGJsdXIgdGhlIGlucHV0IHdoZW4gaGlkZGVuLCBsaWtlIHdoZW4gcHJlc3NpbmcgZW50ZXIga2V5XG4gICAgICAgICAgICBpZihfYmx1ciAmJiBvcHRpb25zLnRyaWdnZXIgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRbMF0uYmx1cigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjbGVhbiB1cCBjaGlsZCBzY29wZXNcbiAgICAgICAgICAgIGRlc3Ryb3lUaXBFbGVtZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJHRvb2x0aXAudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHRvb2x0aXAuJGlzU2hvd24gPyAkdG9vbHRpcC5sZWF2ZSgpIDogJHRvb2x0aXAuZW50ZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC5mb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRpcEVsZW1lbnRbMF0uZm9jdXMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC5zZXRFbmFibGVkID0gZnVuY3Rpb24oaXNFbmFibGVkKSB7XG4gICAgICAgICAgb3B0aW9ucy5ic0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJvdGVjdGVkIG1ldGhvZHNcblxuICAgICAgICAkdG9vbHRpcC4kYXBwbHlQbGFjZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZighdGlwRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHdlJ3JlIGRvaW5nIGFuIGF1dG8gb3Igbm9ybWFsIHBsYWNlbWVudFxuICAgICAgICAgIHZhciBwbGFjZW1lbnQgPSBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgICAgICAgYXV0b1Rva2VuID0gL1xccz9hdXRvP1xccz8vaSxcbiAgICAgICAgICAgICAgYXV0b1BsYWNlICA9IGF1dG9Ub2tlbi50ZXN0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgICBpZiAoYXV0b1BsYWNlKSB7XG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQucmVwbGFjZShhdXRvVG9rZW4sICcnKSB8fCBkZWZhdWx0cy5wbGFjZW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTmVlZCB0byBhZGQgdGhlIHBvc2l0aW9uIGNsYXNzIGJlZm9yZSB3ZSBnZXRcbiAgICAgICAgICAvLyB0aGUgb2Zmc2V0c1xuICAgICAgICAgIHRpcEVsZW1lbnQuYWRkQ2xhc3Mob3B0aW9ucy5wbGFjZW1lbnQpO1xuXG4gICAgICAgICAgLy8gR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgICAvLyBhbmQgdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgdGhlIHRvb2x0aXAgc28gd2UgY2FuIGNlbnRlciBpdC5cbiAgICAgICAgICB2YXIgZWxlbWVudFBvc2l0aW9uID0gZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICAgICAgdGlwV2lkdGggPSB0aXBFbGVtZW50LnByb3AoJ29mZnNldFdpZHRoJyksXG4gICAgICAgICAgICAgIHRpcEhlaWdodCA9IHRpcEVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0Jyk7XG5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhdXRvIHBsYWNpbmcsIHdlIG5lZWQgdG8gY2hlY2sgdGhlIHBvc2l0aW9uaW5nXG4gICAgICAgICAgaWYgKGF1dG9QbGFjZSkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyID8gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXIpKSA6IGVsZW1lbnQucGFyZW50KCk7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyUG9zaXRpb24gPSBnZXRQb3NpdGlvbihjb250YWluZXIpO1xuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIHZlcnRpY2FsIHBsYWNlbWVudFxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUGxhY2VtZW50LmluZGV4T2YoJ2JvdHRvbScpID49IDAgJiYgZWxlbWVudFBvc2l0aW9uLmJvdHRvbSArIHRpcEhlaWdodCA+IGNvbnRhaW5lclBvc2l0aW9uLmJvdHRvbSkge1xuICAgICAgICAgICAgICBwbGFjZW1lbnQgPSBvcmlnaW5hbFBsYWNlbWVudC5yZXBsYWNlKCdib3R0b20nLCAndG9wJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsUGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpID49IDAgJiYgZWxlbWVudFBvc2l0aW9uLnRvcCAtIHRpcEhlaWdodCA8IGNvbnRhaW5lclBvc2l0aW9uLnRvcCkge1xuICAgICAgICAgICAgICBwbGFjZW1lbnQgPSBvcmlnaW5hbFBsYWNlbWVudC5yZXBsYWNlKCd0b3AnLCAnYm90dG9tJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSB0aGUgaG9yaXpvbnRhbCBwbGFjZW1lbnRcbiAgICAgICAgICAgIC8vIFRoZSBleG90aWMgcGxhY2VtZW50cyBvZiBsZWZ0IGFuZCByaWdodCBhcmUgb3Bwb3NpdGUgb2YgdGhlIHN0YW5kYXJkIHBsYWNlbWVudHMuICBUaGVpciBhcnJvd3MgYXJlIHB1dCBvbiB0aGUgbGVmdC9yaWdodFxuICAgICAgICAgICAgLy8gYW5kIGZsb3cgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiBvZiB0aGVpciBwbGFjZW1lbnQuXG4gICAgICAgICAgICBpZiAoKG9yaWdpbmFsUGxhY2VtZW50ID09PSAncmlnaHQnIHx8IG9yaWdpbmFsUGxhY2VtZW50ID09PSAnYm90dG9tLWxlZnQnIHx8IG9yaWdpbmFsUGxhY2VtZW50ID09PSAndG9wLWxlZnQnKSAmJlxuICAgICAgICAgICAgICAgIGVsZW1lbnRQb3NpdGlvbi5yaWdodCArIHRpcFdpZHRoID4gY29udGFpbmVyUG9zaXRpb24ud2lkdGgpIHtcblxuICAgICAgICAgICAgICBwbGFjZW1lbnQgPSBvcmlnaW5hbFBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6IHBsYWNlbWVudC5yZXBsYWNlKCdsZWZ0JywgJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvcmlnaW5hbFBsYWNlbWVudCA9PT0gJ2xlZnQnIHx8IG9yaWdpbmFsUGxhY2VtZW50ID09PSAnYm90dG9tLXJpZ2h0JyB8fCBvcmlnaW5hbFBsYWNlbWVudCA9PT0gJ3RvcC1yaWdodCcpICYmXG4gICAgICAgICAgICAgICAgZWxlbWVudFBvc2l0aW9uLmxlZnQgLSB0aXBXaWR0aCA8IGNvbnRhaW5lclBvc2l0aW9uLmxlZnQpIHtcblxuICAgICAgICAgICAgICBwbGFjZW1lbnQgPSBvcmlnaW5hbFBsYWNlbWVudCA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6IHBsYWNlbWVudC5yZXBsYWNlKCdyaWdodCcsICdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpcEVsZW1lbnQucmVtb3ZlQ2xhc3Mob3JpZ2luYWxQbGFjZW1lbnQpLmFkZENsYXNzKHBsYWNlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gR2V0IHRoZSB0b29sdGlwJ3MgdG9wIGFuZCBsZWZ0IGNvb3JkaW5hdGVzIHRvIGNlbnRlciBpdCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgICAgICAgIHZhciB0aXBQb3NpdGlvbiA9IGdldENhbGN1bGF0ZWRPZmZzZXQocGxhY2VtZW50LCBlbGVtZW50UG9zaXRpb24sIHRpcFdpZHRoLCB0aXBIZWlnaHQpO1xuICAgICAgICAgIGFwcGx5UGxhY2VtZW50Q3NzKHRpcFBvc2l0aW9uLnRvcCwgdGlwUG9zaXRpb24ubGVmdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHRvb2x0aXAuJG9uS2V5VXAgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0LndoaWNoID09PSAyNyAmJiAkdG9vbHRpcC4kaXNTaG93bikge1xuICAgICAgICAgICAgJHRvb2x0aXAuaGlkZSgpO1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC4kb25Gb2N1c0tleVVwID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICAgIGVsZW1lbnRbMF0uYmx1cigpO1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC4kb25Gb2N1c0VsZW1lbnRNb3VzZURvd24gPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgLy8gU29tZSBicm93c2VycyBkbyBub3QgYXV0by1mb2N1cyBidXR0b25zIChlZy4gU2FmYXJpKVxuICAgICAgICAgICR0b29sdGlwLiRpc1Nob3duID8gZWxlbWVudFswXS5ibHVyKCkgOiBlbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYmluZC91bmJpbmQgZXZlbnRzXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRUcmlnZ2VyRXZlbnRzKCkge1xuICAgICAgICAgIHZhciB0cmlnZ2VycyA9IG9wdGlvbnMudHJpZ2dlci5zcGxpdCgnICcpO1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0cmlnZ2VycywgZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgaWYodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsICR0b29sdGlwLnRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYodHJpZ2dlciAhPT0gJ21hbnVhbCcpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5vbih0cmlnZ2VyID09PSAnaG92ZXInID8gJ21vdXNlZW50ZXInIDogJ2ZvY3VzJywgJHRvb2x0aXAuZW50ZXIpO1xuICAgICAgICAgICAgICBlbGVtZW50Lm9uKHRyaWdnZXIgPT09ICdob3ZlcicgPyAnbW91c2VsZWF2ZScgOiAnYmx1cicsICR0b29sdGlwLmxlYXZlKTtcbiAgICAgICAgICAgICAgbm9kZU5hbWUgPT09ICdidXR0b24nICYmIHRyaWdnZXIgIT09ICdob3ZlcicgJiYgZWxlbWVudC5vbihpc1RvdWNoID8gJ3RvdWNoc3RhcnQnIDogJ21vdXNlZG93bicsICR0b29sdGlwLiRvbkZvY3VzRWxlbWVudE1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1bmJpbmRUcmlnZ2VyRXZlbnRzKCkge1xuICAgICAgICAgIHZhciB0cmlnZ2VycyA9IG9wdGlvbnMudHJpZ2dlci5zcGxpdCgnICcpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSB0cmlnZ2Vycy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gdHJpZ2dlcnNbaV07XG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQub2ZmKCdjbGljaycsICR0b29sdGlwLnRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYodHJpZ2dlciAhPT0gJ21hbnVhbCcpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5vZmYodHJpZ2dlciA9PT0gJ2hvdmVyJyA/ICdtb3VzZWVudGVyJyA6ICdmb2N1cycsICR0b29sdGlwLmVudGVyKTtcbiAgICAgICAgICAgICAgZWxlbWVudC5vZmYodHJpZ2dlciA9PT0gJ2hvdmVyJyA/ICdtb3VzZWxlYXZlJyA6ICdibHVyJywgJHRvb2x0aXAubGVhdmUpO1xuICAgICAgICAgICAgICBub2RlTmFtZSA9PT0gJ2J1dHRvbicgJiYgdHJpZ2dlciAhPT0gJ2hvdmVyJyAmJiBlbGVtZW50Lm9mZihpc1RvdWNoID8gJ3RvdWNoc3RhcnQnIDogJ21vdXNlZG93bicsICR0b29sdGlwLiRvbkZvY3VzRWxlbWVudE1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYmluZEtleWJvYXJkRXZlbnRzKCkge1xuICAgICAgICAgIGlmKG9wdGlvbnMudHJpZ2dlciAhPT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgdGlwRWxlbWVudC5vbigna2V5dXAnLCAkdG9vbHRpcC4kb25LZXlVcCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2tleXVwJywgJHRvb2x0aXAuJG9uRm9jdXNLZXlVcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdW5iaW5kS2V5Ym9hcmRFdmVudHMoKSB7XG4gICAgICAgICAgaWYob3B0aW9ucy50cmlnZ2VyICE9PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICB0aXBFbGVtZW50Lm9mZigna2V5dXAnLCAkdG9vbHRpcC4kb25LZXlVcCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQub2ZmKCdrZXl1cCcsICR0b29sdGlwLiRvbkZvY3VzS2V5VXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfYXV0b0Nsb3NlRXZlbnRzQmluZGVkID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIGJpbmRBdXRvQ2xvc2VFdmVudHMoKSB7XG4gICAgICAgICAgLy8gdXNlIHRpbWVvdXQgdG8gaG9va3VwIHRoZSBldmVudHMgdG8gcHJldmVudFxuICAgICAgICAgIC8vIGV2ZW50IGJ1YmJsaW5nIGZyb20gYmVpbmcgcHJvY2Vzc2VkIGltZWRpYXRlbHkuXG4gICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBTdG9wIHByb3BhZ2F0aW9uIHdoZW4gY2xpY2tpbmcgaW5zaWRlIHRvb2x0aXBcbiAgICAgICAgICAgIHRpcEVsZW1lbnQub24oJ2NsaWNrJywgc3RvcEV2ZW50UHJvcGFnYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBIaWRlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSB0b29sdGlwXG4gICAgICAgICAgICAkYm9keS5vbignY2xpY2snLCAkdG9vbHRpcC5oaWRlKTtcblxuICAgICAgICAgICAgX2F1dG9DbG9zZUV2ZW50c0JpbmRlZCA9IHRydWU7XG4gICAgICAgICAgfSwgMCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdW5iaW5kQXV0b0Nsb3NlRXZlbnRzKCkge1xuICAgICAgICAgIGlmIChfYXV0b0Nsb3NlRXZlbnRzQmluZGVkKSB7XG4gICAgICAgICAgICB0aXBFbGVtZW50Lm9mZignY2xpY2snLCBzdG9wRXZlbnRQcm9wYWdhdGlvbik7XG4gICAgICAgICAgICAkYm9keS5vZmYoJ2NsaWNrJywgJHRvb2x0aXAuaGlkZSk7XG4gICAgICAgICAgICBfYXV0b0Nsb3NlRXZlbnRzQmluZGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCRlbGVtZW50KSB7XG4gICAgICAgICAgJGVsZW1lbnQgPSAkZWxlbWVudCB8fCAob3B0aW9ucy50YXJnZXQgfHwgZWxlbWVudCk7XG5cbiAgICAgICAgICB2YXIgZWwgPSAkZWxlbWVudFswXTtcblxuICAgICAgICAgIHZhciBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBpZiAoZWxSZWN0LndpZHRoID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBtaXNzaW5nIGluIElFOCwgc28gY29tcHV0ZSB0aGVtIG1hbnVhbGx5OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xNDA5M1xuICAgICAgICAgICAgZWxSZWN0ID0gYW5ndWxhci5leHRlbmQoe30sIGVsUmVjdCwgeyB3aWR0aDogZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQsIGhlaWdodDogZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3AgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGVsUG9zO1xuICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lciA9PT0gJ2JvZHknKSB7XG4gICAgICAgICAgICBlbFBvcyA9IGRpbWVuc2lvbnMub2Zmc2V0KGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxQb3MgPSBkaW1lbnNpb25zLnBvc2l0aW9uKGVsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYW5ndWxhci5leHRlbmQoe30sIGVsUmVjdCwgZWxQb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2FsY3VsYXRlZE9mZnNldChwbGFjZW1lbnQsIHBvc2l0aW9uLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KSB7XG4gICAgICAgICAgdmFyIG9mZnNldDtcbiAgICAgICAgICB2YXIgc3BsaXQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKTtcblxuICAgICAgICAgIHN3aXRjaCAoc3BsaXRbMF0pIHtcbiAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsXG4gICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQgKyBwb3NpdGlvbi53aWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0LFxuICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsXG4gICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQgLSBhY3R1YWxXaWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wIC0gYWN0dWFsSGVpZ2h0LFxuICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoIXNwbGl0WzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBzdXBwb3J0IGZvciBjb3JuZXJzIEB0b2RvIGNzc1xuICAgICAgICAgIGlmKHNwbGl0WzBdID09PSAndG9wJyB8fCBzcGxpdFswXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc3BsaXRbMV0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICBvZmZzZXQubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICBvZmZzZXQubGVmdCA9ICBwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ud2lkdGggLSBhY3R1YWxXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYoc3BsaXRbMF0gPT09ICdsZWZ0JyB8fCBzcGxpdFswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgc3dpdGNoIChzcGxpdFsxXSkge1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgb2Zmc2V0LnRvcCA9IHBvc2l0aW9uLnRvcCAtIGFjdHVhbEhlaWdodDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICBvZmZzZXQudG9wID0gcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhcHBseVBsYWNlbWVudENzcyh0b3AsIGxlZnQpIHtcbiAgICAgICAgICB0aXBFbGVtZW50LmNzcyh7IHRvcDogdG9wICsgJ3B4JywgbGVmdDogbGVmdCArICdweCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95VGlwRWxlbWVudCgpIHtcbiAgICAgICAgICAvLyBDYW5jZWwgcGVuZGluZyBjYWxsYmFja3NcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAgICAgICBpZigkdG9vbHRpcC4kaXNTaG93biAmJiB0aXBFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZihvcHRpb25zLmF1dG9DbG9zZSkge1xuICAgICAgICAgICAgICB1bmJpbmRBdXRvQ2xvc2VFdmVudHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYob3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgICAgICAgICB1bmJpbmRLZXlib2FyZEV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHRpcFNjb3BlKSB7XG4gICAgICAgICAgICB0aXBTY29wZS4kZGVzdHJveSgpO1xuICAgICAgICAgICAgdGlwU2NvcGUgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHRpcEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRpcEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aXBFbGVtZW50ID0gJHRvb2x0aXAuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkdG9vbHRpcDtcblxuICAgICAgfVxuXG4gICAgICAvLyBIZWxwZXIgZnVuY3Rpb25zXG5cbiAgICAgIGZ1bmN0aW9uIHNhZmVEaWdlc3Qoc2NvcGUpIHtcbiAgICAgICAgc2NvcGUuJCRwaGFzZSB8fCAoc2NvcGUuJHJvb3QgJiYgc2NvcGUuJHJvb3QuJCRwaGFzZSkgfHwgc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmaW5kRWxlbWVudChxdWVyeSwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gYW5ndWxhci5lbGVtZW50KChlbGVtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmZXRjaFByb21pc2VzID0ge307XG4gICAgICBmdW5jdGlvbiBmZXRjaFRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgICAgIGlmKGZldGNoUHJvbWlzZXNbdGVtcGxhdGVdKSByZXR1cm4gZmV0Y2hQcm9taXNlc1t0ZW1wbGF0ZV07XG4gICAgICAgIHJldHVybiAoZmV0Y2hQcm9taXNlc1t0ZW1wbGF0ZV0gPSAkcS53aGVuKCR0ZW1wbGF0ZUNhY2hlLmdldCh0ZW1wbGF0ZSkgfHwgJGh0dHAuZ2V0KHRlbXBsYXRlKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc09iamVjdChyZXMpKSB7XG4gICAgICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGUsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gVG9vbHRpcEZhY3Rvcnk7XG5cbiAgICB9XTtcblxuICB9KVxuXG4gIC5kaXJlY3RpdmUoJ2JzVG9vbHRpcCcsIFtcIiR3aW5kb3dcIiwgXCIkbG9jYXRpb25cIiwgXCIkc2NlXCIsIFwiJHRvb2x0aXBcIiwgXCIkJHJBRlwiLCBmdW5jdGlvbigkd2luZG93LCAkbG9jYXRpb24sICRzY2UsICR0b29sdGlwLCAkJHJBRikge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRUFDJyxcbiAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgbGluazogZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIHRyYW5zY2x1c2lvbikge1xuXG4gICAgICAgIC8vIERpcmVjdGl2ZSBvcHRpb25zXG4gICAgICAgIHZhciBvcHRpb25zID0ge3Njb3BlOiBzY29wZX07XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChbJ3RlbXBsYXRlJywgJ2NvbnRlbnRUZW1wbGF0ZScsICdwbGFjZW1lbnQnLCAnY29udGFpbmVyJywgJ3RhcmdldCcsICdkZWxheScsICd0cmlnZ2VyJywgJ2tleWJvYXJkJywgJ2h0bWwnLCAnYW5pbWF0aW9uJywgJ2JhY2tkcm9wQW5pbWF0aW9uJywgJ3R5cGUnLCAnY3VzdG9tQ2xhc3MnLCAnaWQnXSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXR0cltrZXldKSkgb3B0aW9uc1trZXldID0gYXR0cltrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBvdmVyd3JpdGUgaW5oZXJpdGVkIHRpdGxlIHZhbHVlIHdoZW4gbm8gdmFsdWUgc3BlY2lmaWVkXG4gICAgICAgIC8vIGZpeCBmb3IgYW5ndWxhciAxLjMuMSA1MzFhOGRlNzJjNDM5ZDhkZGQwNjQ4NzRiZjM2NGMwMGNlZGFiYjExXG4gICAgICAgIGlmICghc2NvcGUuaGFzT3duUHJvcGVydHkoJ3RpdGxlJykpe1xuICAgICAgICAgIHNjb3BlLnRpdGxlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPYnNlcnZlIHNjb3BlIGF0dHJpYnV0ZXMgZm9yIGNoYW5nZVxuICAgICAgICBhdHRyLiRvYnNlcnZlKCd0aXRsZScsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG5ld1ZhbHVlKSB8fCAhc2NvcGUuaGFzT3duUHJvcGVydHkoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHNjb3BlLnRpdGxlO1xuICAgICAgICAgICAgc2NvcGUudGl0bGUgPSAkc2NlLnRydXN0QXNIdG1sKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGFuZ3VsYXIuaXNEZWZpbmVkKG9sZFZhbHVlKSAmJiAkJHJBRihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdG9vbHRpcCAmJiB0b29sdGlwLiRhcHBseVBsYWNlbWVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdXBwb3J0IHNjb3BlIGFzIGFuIG9iamVjdFxuICAgICAgICBhdHRyLmJzVG9vbHRpcCAmJiBzY29wZS4kd2F0Y2goYXR0ci5ic1Rvb2x0aXAsIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgIGlmKGFuZ3VsYXIuaXNPYmplY3QobmV3VmFsdWUpKSB7XG4gICAgICAgICAgICBhbmd1bGFyLmV4dGVuZChzY29wZSwgbmV3VmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29wZS50aXRsZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbmd1bGFyLmlzRGVmaW5lZChvbGRWYWx1ZSkgJiYgJCRyQUYoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0b29sdGlwICYmIHRvb2x0aXAuJGFwcGx5UGxhY2VtZW50KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIC8vIFZpc2liaWxpdHkgYmluZGluZyBzdXBwb3J0XG4gICAgICAgIGF0dHIuYnNTaG93ICYmIHNjb3BlLiR3YXRjaChhdHRyLmJzU2hvdywgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgaWYoIXRvb2x0aXAgfHwgIWFuZ3VsYXIuaXNEZWZpbmVkKG5ld1ZhbHVlKSkgcmV0dXJuO1xuICAgICAgICAgIGlmKGFuZ3VsYXIuaXNTdHJpbmcobmV3VmFsdWUpKSBuZXdWYWx1ZSA9ICEhbmV3VmFsdWUubWF0Y2goL3RydWV8LD8odG9vbHRpcCksPy9pKTtcbiAgICAgICAgICBuZXdWYWx1ZSA9PT0gdHJ1ZSA/IHRvb2x0aXAuc2hvdygpIDogdG9vbHRpcC5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEVuYWJsZWQgYmluZGluZyBzdXBwb3J0XG4gICAgICAgIGF0dHIuYnNFbmFibGVkICYmIHNjb3BlLiR3YXRjaChhdHRyLmJzRW5hYmxlZCwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCdzY29wZS4kd2F0Y2goJXMpJywgYXR0ci5ic0VuYWJsZWQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgaWYoIXRvb2x0aXAgfHwgIWFuZ3VsYXIuaXNEZWZpbmVkKG5ld1ZhbHVlKSkgcmV0dXJuO1xuICAgICAgICAgIGlmKGFuZ3VsYXIuaXNTdHJpbmcobmV3VmFsdWUpKSBuZXdWYWx1ZSA9ICEhbmV3VmFsdWUubWF0Y2goL3RydWV8MXwsPyh0b29sdGlwKSw/L2kpO1xuICAgICAgICAgIG5ld1ZhbHVlID09PSBmYWxzZSA/IHRvb2x0aXAuc2V0RW5hYmxlZChmYWxzZSkgOiB0b29sdGlwLnNldEVuYWJsZWQodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgcG9wb3ZlclxuICAgICAgICB2YXIgdG9vbHRpcCA9ICR0b29sdGlwKGVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIEdhcmJhZ2UgY29sbGVjdGlvblxuICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYodG9vbHRpcCkgdG9vbHRpcC5kZXN0cm95KCk7XG4gICAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgICAgdG9vbHRpcCA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfTtcblxuICB9XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbmd1bGFyLXN0cmFwL2Rpc3QvbW9kdWxlcy90b29sdGlwLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=