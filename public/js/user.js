/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/user.js":
/*!******************************!*\
  !*** ./resources/js/user.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$(document).ready(function () {
  var UserRequest =
  /*#__PURE__*/
  function () {
    function UserRequest() {
      _classCallCheck(this, UserRequest);

      this.rowId = null;
      this.modal = $(".modal");
    }

    _createClass(UserRequest, [{
      key: "generate",
      value: function generate(url, func) {
        $.ajax({
          url: url,
          method: 'get',
          dataType: 'json'
        }).done(function (data) {
          if (!Object.entries(data).length) {
            window.location.reload();
            return false;
          }

          userRequest[func](data);
        });
      }
    }, {
      key: "userEdit",
      value: function userEdit(data) {
        var modalBody = $(".modal-body"),
            block = "<div>\n                             <div class=\"form-group\">\n                                <label for=\"name\">Name</label>\n                                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\">\n                                <span class=\"small text-danger errorBlock\"></span>\n                              </div>\n                              <div class=\"form-group\">\n                                <label for=\"email\">Email</label>\n                                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\">\n                                <span class=\"small text-danger errorBlock\"></span>\n                              </div>\n                              <div class=\"form-group mb-5\">\n                                <label for=\"status\">Status</label>\n                                <select name=\"status\" id=\"status\" class=\"form-control\">\n                                    <option value=\"0\">Default</option>\n                                    <option value=\"1\">Blocked</option>\n                                </select>                            \n                              </div>\n                             <button type=\"button\" class=\"btn btn-primary update\" data-action=\"/admin/user/".concat(data.id, "\">Update</button>\n                             <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                         </div>");
        modalBody.append(block);
        $("#name").val(data.name);
        $("#email").val(data.email);
        $("#status").find("option[value=".concat(data.status, "]")).attr("selected", "selected");
        this.modal.modal();
      }
    }, {
      key: "userShow",
      value: function userShow(data) {
        var block = "<p><span class=\"font-weight-bold\">Name: </span>".concat(data.name, "</p>\n                         <p><span class=\"font-weight-bold\">Email: </span>").concat(data.email, "</p>\n                         <p><span class=\"font-weight-bold\">Status: </span>").concat(data.status, "</p>\n                         <p><span class=\"font-weight-bold\">Created At: </span>").concat(data.created_at, "</p>\n                         <p><span class=\"font-weight-bold\">Updated At: </span>").concat(data.updated_at, "</p>");
        $(".modal-title").text("".concat(data.name, "'s data"));
        this.modal.find(".modal-body").append(block);
        this.modal.modal("show");
      }
    }, {
      key: "userDelete",
      value: function userDelete(url) {
        var _this = this;

        var tableBody = $("tbody"),
            block = "<p>You want to delete this user?</p>\n                         <button type=\"button\" class=\"btn btn-danger delete\">Yes</button>\n                         <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>";
        $(".modal-title").text("Delete user");
        this.modal.find(".modal-body").append(block);
        this.modal.modal();
        $(document).on("click", ".delete", function (e) {
          $.ajax({
            url: url,
            method: 'delete',
            dataType: 'json'
          }).done(function (data) {
            _this.modal.modal("hide");

            toastr.info(data.message);
            $("tr[data-id=".concat(userRequest.rowId, "]")).remove();

            if (!tableBody.children().length) {
              block = "<div class=\"jumbotron\">\n                                    <h2 class=\"text-muted\">Empty user</h2>\n                                </div>";
              $(".table").before(block).remove();
            }
          });
        });
      }
    }, {
      key: "updateUser",
      value: function updateUser(url) {
        var name = $("#name"),
            email = $("#email"),
            status = $("#status"),
            modal = $(".modal");
        $.ajax({
          url: url,
          type: 'put',
          data: {
            name: name.val(),
            email: email.val(),
            status: status.val()
          },
          dataType: 'json',
          success: function success(data) {
            var row = $("tr[data-id=".concat(userRequest.rowId, "]"));
            row.find(".name").text(data.user.name);
            row.find(".email").text(data.user.email);
            row.find(".status").text(data.user.status);
            modal.modal("hide");
            toastr.success(data.message);
          },
          error: function error(err) {
            $.each(err.responseJSON.errors, function (key, value) {
              if (key === 'status') {
                var option = "<option value=\"0\">Default</option>\n                                          <option value=\"1\">Blocked</option>";
                $("#status").empty().append(option);
              }

              $("#".concat(key)).siblings(".errorBlock").text(value[0]);
            });
          }
        });
      }
    }]);

    return UserRequest;
  }();

  var userRequest = new UserRequest();
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  $(document).on("click", ".request", function (e) {
    e.preventDefault();
    var elem = $(e.target).parent("a"),
        url = elem.attr("href"),
        func = elem.attr("data-func");
    if (!url || !func) return false;
    userRequest.rowId = elem.closest("tr").attr("data-id");

    if (func === 'userDelete') {
      userRequest.userDelete(url);
      return false;
    }

    userRequest.generate(url, func);
  });
  $(document).on("click", ".update", function (e) {
    var elem = $(e.target),
        url = elem.attr("data-action");
    if (!url) return false;
    userRequest.updateUser(url);
  });
  $(document).on("focus", "input", function (e) {
    $(this).siblings(".errorBlock").text("");
  });
  $(document).on("hidden.bs.modal", ".modal", function (e) {
    $(".modal-body").empty();
  });
});

/***/ }),

/***/ 2:
/*!************************************!*\
  !*** multi ./resources/js/user.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\eclipse\resources\js\user.js */"./resources/js/user.js");


/***/ })

/******/ });