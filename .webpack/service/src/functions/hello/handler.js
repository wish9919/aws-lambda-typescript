/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/hello/handler.ts":
/*!****************************************!*\
  !*** ./src/functions/hello/handler.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _libs_hello_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/hello/services */ \"./src/libs/hello/services.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var lambda_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lambda-api */ \"lambda-api\");\n/* harmony import */ var lambda_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lambda_api__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = '/hello';\nconst api = lambda_api__WEBPACK_IMPORTED_MODULE_2___default()({ base: baseUrl });\napi.get('/', async (req) => await (0,_libs_hello_services__WEBPACK_IMPORTED_MODULE_0__.helloFunction)(req));\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_1__.middyfy)((event, context) => api.run(event, context));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F3cy1ub2RlanMtdHlwZXNjcmlwdC8uL3NyYy9mdW5jdGlvbnMvaGVsbG8vaGFuZGxlci50cz85MjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhlbGxvRnVuY3Rpb24gfSBmcm9tICdAbGlicy9oZWxsby9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSAnQGxpYnMvbGFtYmRhJztcbmltcG9ydCBjcmVhdGVBUEksIHsgUmVxdWVzdCB9IGZyb20gJ2xhbWJkYS1hcGknO1xuaW1wb3J0IHsgQVBJR2F0ZXdheUV2ZW50LCBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnL2hlbGxvJztcbmNvbnN0IGFwaSA9IGNyZWF0ZUFQSSh7IGJhc2U6IGJhc2VVcmwgfSk7XG5cbi8vIHNpbWVwbGUgZ2V0IHJlcXVlc3RcbmFwaS5nZXQoJy8nLCBhc3luYyAocmVxOiBSZXF1ZXN0KSA9PiBhd2FpdCBoZWxsb0Z1bmN0aW9uKHJlcSkpO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IG1pZGR5ZnkoKGV2ZW50OiBBUElHYXRld2F5RXZlbnQsIGNvbnRleHQ6IENvbnRleHQpID0+IGFwaS5ydW4oZXZlbnQsIGNvbnRleHQpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/hello/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendJsonResponse\": () => (/* binding */ sendJsonResponse),\n/* harmony export */   \"sendErrorResponse\": () => (/* binding */ sendErrorResponse),\n/* harmony export */   \"transformQuery\": () => (/* binding */ transformQuery),\n/* harmony export */   \"transformBody\": () => (/* binding */ transformBody)\n/* harmony export */ });\nconst sendJsonResponse = (message, data) => {\n    return {\n        success: true,\n        message: message,\n        data: data,\n    };\n};\nconst sendErrorResponse = (message, errors) => {\n    return {\n        success: false,\n        message: message,\n        data: errors,\n    };\n};\nconst transformQuery = (req, obj) => {\n    const body = req.query;\n    const jsonObj = JSON.parse(JSON.stringify(body));\n    if (typeof obj[\"fromJSON\"] === \"function\") {\n        obj[\"fromJSON\"](jsonObj);\n    }\n    else {\n        for (const propName in jsonObj) {\n            if (typeof obj[\"hasOwnProperty\"] === \"function\" &&\n                Object.prototype.hasOwnProperty.call(obj, propName)) {\n                obj[propName] = jsonObj[propName];\n            }\n        }\n    }\n    return obj;\n};\nconst transformBody = (req, obj) => {\n    const body = req.body;\n    const jsonObj = JSON.parse(JSON.stringify(body));\n    if (typeof obj[\"fromJSON\"] === \"function\") {\n        obj[\"fromJSON\"](jsonObj);\n    }\n    else {\n        for (const propName in jsonObj) {\n            if (typeof obj[\"hasOwnProperty\"] === \"function\" &&\n                Object.prototype.hasOwnProperty.call(obj, propName)) {\n                obj[propName] = jsonObj[propName];\n            }\n        }\n    }\n    return obj;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd3Mtbm9kZWpzLXR5cGVzY3JpcHQvLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzPzYyNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxuICBIYW5kbGVyLFxufSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSBcImpzb24tc2NoZW1hLXRvLXRzXCI7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSBcImxhbWJkYS1hcGlcIjtcbmltcG9ydCBSZXF1ZXN0RXJyb3IgZnJvbSBcIi4vY29tbW9uL2Vycm9ycy9SZXF1ZXN0RXJyb3JcIjtcbmltcG9ydCBSZXNwb25zZURhdGEgZnJvbSBcIi4vY29tbW9uL3Jlc3BvbnNlcy9SZXNwb25zZURhdGFcIjtcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsIFwiYm9keVwiPiAmIHtcbiAgYm9keTogRnJvbVNjaGVtYTxTPjtcbn07XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxcbiAgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdFxuPjtcblxuZXhwb3J0IGNvbnN0IHNlbmRKc29uUmVzcG9uc2UgPSAobWVzc2FnZTogc3RyaW5nLCBkYXRhPzogYW55KTogUmVzcG9uc2VEYXRhID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgZGF0YTogZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kRXJyb3JSZXNwb25zZSA9IChtZXNzYWdlOiBzdHJpbmcsIGVycm9ycz86IFJlcXVlc3RFcnJvcltdKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBkYXRhOiBlcnJvcnMsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtUXVlcnkgPSA8VD4ocmVxOiBSZXF1ZXN0LCBvYmo6IFQpOiBUID0+IHtcbiAgY29uc3QgYm9keSA9IHJlcS5xdWVyeTtcbiAgY29uc3QganNvbk9iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuXG4gIGlmICh0eXBlb2Ygb2JqW1wiZnJvbUpTT05cIl0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIG9ialtcImZyb21KU09OXCJdKGpzb25PYmopO1xuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4ganNvbk9iaikge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Ygb2JqW1wiaGFzT3duUHJvcGVydHlcIl0gPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wTmFtZSlcbiAgICAgICkge1xuICAgICAgICBvYmpbcHJvcE5hbWVdID0ganNvbk9ialtwcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQm9keSA9IDxUPihyZXE6IFJlcXVlc3QsIG9iajogVCk6IFQgPT4ge1xuICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XG4gIGNvbnN0IGpzb25PYmogPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcblxuICBpZiAodHlwZW9mIG9ialtcImZyb21KU09OXCJdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBvYmpbXCJmcm9tSlNPTlwiXShqc29uT2JqKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIGpzb25PYmopIHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIG9ialtcImhhc093blByb3BlcnR5XCJdID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcE5hbWUpXG4gICAgICApIHtcbiAgICAgICAgb2JqW3Byb3BOYW1lXSA9IGpzb25PYmpbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/common/errors/RequestError.ts":
/*!************************************************!*\
  !*** ./src/libs/common/errors/RequestError.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RequestError)\n/* harmony export */ });\nclass RequestError {\n    constructor(field, message) {\n        this.field = field;\n        this.message = message;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jb21tb24vZXJyb3JzL1JlcXVlc3RFcnJvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLW5vZGVqcy10eXBlc2NyaXB0Ly4vc3JjL2xpYnMvY29tbW9uL2Vycm9ycy9SZXF1ZXN0RXJyb3IudHM/MmM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlcHJlc2VudHMgYW4gZXJyb3IgaW4gdGhlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdEVycm9yIHtcbiAgZmllbGQ6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGZpZWxkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/common/errors/RequestError.ts\n");

/***/ }),

/***/ "./src/libs/common/requests/BaseRequest.ts":
/*!*************************************************!*\
  !*** ./src/libs/common/requests/BaseRequest.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseRequest)\n/* harmony export */ });\nclass BaseRequest {\n    getRequestErrors() {\n        return [];\n    }\n    isValidRequest() {\n        return this.getRequestErrors().length == 0;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jb21tb24vcmVxdWVzdHMvQmFzZVJlcXVlc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd3Mtbm9kZWpzLXR5cGVzY3JpcHQvLi9zcmMvbGlicy9jb21tb24vcmVxdWVzdHMvQmFzZVJlcXVlc3QudHM/ZjY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdEVycm9yIGZyb20gJ0BsaWJzL2NvbW1vbi9lcnJvcnMvUmVxdWVzdEVycm9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVJlcXVlc3Qge1xuICBnZXRSZXF1ZXN0RXJyb3JzKCk6IFJlcXVlc3RFcnJvcltdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpc1ZhbGlkUmVxdWVzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXF1ZXN0RXJyb3JzKCkubGVuZ3RoID09IDA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/common/requests/BaseRequest.ts\n");

/***/ }),

/***/ "./src/libs/hello/requests/HelloRequest.ts":
/*!*************************************************!*\
  !*** ./src/libs/hello/requests/HelloRequest.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HelloRequest)\n/* harmony export */ });\n/* harmony import */ var _libs_common_errors_RequestError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/common/errors/RequestError */ \"./src/libs/common/errors/RequestError.ts\");\n/* harmony import */ var _libs_common_requests_BaseRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/common/requests/BaseRequest */ \"./src/libs/common/requests/BaseRequest.ts\");\n\n\nclass HelloRequest extends _libs_common_requests_BaseRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super();\n        this.name = null;\n    }\n    getRequestErrors() {\n        const requestErrors = [];\n        if (this.name === null) {\n            requestErrors.push(new _libs_common_errors_RequestError__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('name', 'Name cannot be empty'));\n        }\n        return requestErrors;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9oZWxsby9yZXF1ZXN0cy9IZWxsb1JlcXVlc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUhBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLW5vZGVqcy10eXBlc2NyaXB0Ly4vc3JjL2xpYnMvaGVsbG8vcmVxdWVzdHMvSGVsbG9SZXF1ZXN0LnRzPzBkZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcXVlc3RFcnJvciBmcm9tICdAbGlicy9jb21tb24vZXJyb3JzL1JlcXVlc3RFcnJvcic7XG5pbXBvcnQgQmFzZVJlcXVlc3QgZnJvbSAnQGxpYnMvY29tbW9uL3JlcXVlc3RzL0Jhc2VSZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9SZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Qge1xuICBuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0UmVxdWVzdEVycm9ycygpOiBSZXF1ZXN0RXJyb3JbXSB7XG4gICAgY29uc3QgcmVxdWVzdEVycm9yczogUmVxdWVzdEVycm9yW10gPSBbXTtcbiAgICBpZiAodGhpcy5uYW1lID09PSBudWxsKSB7XG4gICAgICByZXF1ZXN0RXJyb3JzLnB1c2gobmV3IFJlcXVlc3RFcnJvcignbmFtZScsICdOYW1lIGNhbm5vdCBiZSBlbXB0eScpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdEVycm9ycztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/hello/requests/HelloRequest.ts\n");

/***/ }),

/***/ "./src/libs/hello/services.ts":
/*!************************************!*\
  !*** ./src/libs/hello/services.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"helloFunction\": () => (/* binding */ helloFunction)\n/* harmony export */ });\n/* harmony import */ var _apiGateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _requests_HelloRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests/HelloRequest */ \"./src/libs/hello/requests/HelloRequest.ts\");\n\n\nconst helloFunction = async (req) => {\n    const query = (0,_apiGateway__WEBPACK_IMPORTED_MODULE_0__.transformQuery)(req, new _requests_HelloRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n    if (!query.isValidRequest()) {\n        return (0,_apiGateway__WEBPACK_IMPORTED_MODULE_0__.sendErrorResponse)('Please query params', query.getRequestErrors());\n    }\n    try {\n        return (0,_apiGateway__WEBPACK_IMPORTED_MODULE_0__.sendJsonResponse)(`Hello ${query.name}`);\n    }\n    catch (error) {\n        return (0,_apiGateway__WEBPACK_IMPORTED_MODULE_0__.sendErrorResponse)('Something went wrong!');\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9oZWxsby9zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLW5vZGVqcy10eXBlc2NyaXB0Ly4vc3JjL2xpYnMvaGVsbG8vc2VydmljZXMudHM/YmZlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZW5kRXJyb3JSZXNwb25zZSwgc2VuZEpzb25SZXNwb25zZSwgdHJhbnNmb3JtUXVlcnkgfSBmcm9tICcuLy4uL2FwaUdhdGV3YXknO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2xhbWJkYS1hcGknO1xuaW1wb3J0IEhlbGxvUmVxdWVzdCBmcm9tICcuL3JlcXVlc3RzL0hlbGxvUmVxdWVzdCc7XG5cbmV4cG9ydCBjb25zdCBoZWxsb0Z1bmN0aW9uID0gYXN5bmMgKHJlcTogUmVxdWVzdCkgPT4ge1xuICAvLyB2YWxpZGF0ZSByZXF1ZXN0IGJvZHlcbiAgY29uc3QgcXVlcnk6IEhlbGxvUmVxdWVzdCA9IHRyYW5zZm9ybVF1ZXJ5KHJlcSwgbmV3IEhlbGxvUmVxdWVzdCgpKTtcblxuICBpZiAoIXF1ZXJ5LmlzVmFsaWRSZXF1ZXN0KCkpIHtcbiAgICByZXR1cm4gc2VuZEVycm9yUmVzcG9uc2UoJ1BsZWFzZSBxdWVyeSBwYXJhbXMnLCBxdWVyeS5nZXRSZXF1ZXN0RXJyb3JzKCkpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gc2VuZEpzb25SZXNwb25zZShgSGVsbG8gJHtxdWVyeS5uYW1lfWApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBzZW5kRXJyb3JSZXNwb25zZSgnU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/hello/services.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLW5vZGVqcy10eXBlc2NyaXB0Ly4vc3JjL2xpYnMvbGFtYmRhLnRzPzZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "lambda-api":
/*!*****************************!*\
  !*** external "lambda-api" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lambda-api");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/hello/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;