"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-email";
exports.ids = ["vendor-chunks/@react-email"];
exports.modules = {

/***/ "(action-browser)/./node_modules/@react-email/render/dist/node/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@react-email/render/dist/node/index.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   plainTextSelectors: () => (/* binding */ plainTextSelectors),\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   renderAsync: () => (/* binding */ renderAsync)\n/* harmony export */ });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"(action-browser)/./node_modules/next/dist/compiled/react-dom/server.js\");\n/* harmony import */ var html_to_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-to-text */ \"(action-browser)/./node_modules/html-to-text/lib/html-to-text.mjs\");\n/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-beautify */ \"(action-browser)/./node_modules/js-beautify/js/index.js\");\n/* harmony import */ var node_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:stream */ \"node:stream\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n// src/shared/render.ts\n\n\n\n// src/shared/utils/pretty.ts\n\nvar defaults = {\n  unformatted: [\"code\", \"pre\", \"em\", \"strong\", \"span\"],\n  indent_inner_html: true,\n  indent_char: \" \",\n  indent_size: 2,\n  sep: \"\\n\"\n};\nvar pretty = (str, options = {}) => {\n  return js_beautify__WEBPACK_IMPORTED_MODULE_2__.html(str, __spreadValues(__spreadValues({}, defaults), options));\n};\n\n// src/shared/plain-text-selectors.ts\nvar plainTextSelectors = [\n  { selector: \"img\", format: \"skip\" },\n  { selector: \"#__react-email-preview\", format: \"skip\" },\n  {\n    selector: \"a\",\n    options: { linkBrackets: false }\n  }\n];\n\n// src/shared/render.ts\nvar render = (component, options) => {\n  if (options == null ? void 0 : options.plainText) {\n    return renderAsPlainText(component, options);\n  }\n  const doctype = '<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">';\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToStaticMarkup(component);\n  const document = `${doctype}${markup}`;\n  if (options && options.pretty) {\n    return pretty(document);\n  }\n  return document;\n};\nvar renderAsPlainText = (component, options) => {\n  return (0,html_to_text__WEBPACK_IMPORTED_MODULE_1__.convert)(react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToStaticMarkup(component), __spreadValues({\n    selectors: plainTextSelectors\n  }, (options == null ? void 0 : options.plainText) === true ? options.htmlToTextOptions : {}));\n};\n\n// src/node/render-async.ts\n\n\nvar decoder = new TextDecoder(\"utf-8\");\nvar readStream = (stream) => __async(void 0, null, function* () {\n  let result = \"\";\n  if (\"pipeTo\" in stream) {\n    const writableStream = new WritableStream({\n      write(chunk) {\n        result += decoder.decode(chunk);\n      }\n    });\n    yield stream.pipeTo(writableStream);\n  } else {\n    const writable = new node_stream__WEBPACK_IMPORTED_MODULE_3__.Writable({\n      write(chunk, _encoding, callback) {\n        result += decoder.decode(chunk);\n        callback();\n      }\n    });\n    stream.pipe(writable);\n    return new Promise((resolve, reject) => {\n      writable.on(\"error\", reject);\n      writable.on(\"close\", () => {\n        resolve(result);\n      });\n    });\n  }\n  return result;\n});\nvar renderAsync = (component, options) => __async(void 0, null, function* () {\n  const { default: reactDOMServer } = yield Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-dom/server */ \"(action-browser)/./node_modules/next/dist/compiled/react-dom/server.js\", 19));\n  let html;\n  if (Object.hasOwn(reactDOMServer, \"renderToReadableStream\")) {\n    html = yield readStream(\n      yield reactDOMServer.renderToReadableStream(component)\n    );\n  } else {\n    yield new Promise((resolve, reject) => {\n      const stream = reactDOMServer.renderToPipeableStream(component, {\n        onAllReady() {\n          return __async(this, null, function* () {\n            html = yield readStream(stream);\n            resolve();\n          });\n        },\n        onError(error) {\n          reject(error);\n        }\n      });\n    });\n  }\n  if (options == null ? void 0 : options.plainText) {\n    return (0,html_to_text__WEBPACK_IMPORTED_MODULE_1__.convert)(html, __spreadValues({\n      selectors: plainTextSelectors\n    }, options.htmlToTextOptions));\n  }\n  const doctype = '<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">';\n  const document = `${doctype}${html.replace(/<!DOCTYPE.*?>/, \"\")}`;\n  if (options == null ? void 0 : options.pretty) {\n    return pretty(document);\n  }\n  return document;\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AcmVhY3QtZW1haWwvcmVuZGVyL2Rpc3Qvbm9kZS9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ21EO0FBQ1o7O0FBRXZDO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLFNBQVMsNkNBQWUsc0NBQXNDO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlDQUFpQztBQUNyQyxJQUFJLG9EQUFvRDtBQUN4RDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtFQUFtQztBQUNwRCxzQkFBc0IsUUFBUSxFQUFFLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBTyxDQUFDLGtFQUFtQztBQUNwRDtBQUNBLEdBQUcsMEZBQTBGO0FBQzdGOztBQUVBO0FBQ3VDO0FBQ1k7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSix5QkFBeUIsaURBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLFVBQVUsMEJBQTBCLFFBQVEsNExBQTBCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLHFEQUFRO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUSxFQUFFLGtDQUFrQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFLQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9AcmVhY3QtZW1haWwvcmVuZGVyL2Rpc3Qvbm9kZS9pbmRleC5tanM/MzZmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG52YXIgX19hc3luYyA9IChfX3RoaXMsIF9fYXJndW1lbnRzLCBnZW5lcmF0b3IpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB2YXIgZnVsZmlsbGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZWplY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHN0ZXAgPSAoeCkgPT4geC5kb25lID8gcmVzb2x2ZSh4LnZhbHVlKSA6IFByb21pc2UucmVzb2x2ZSh4LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xuICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseShfX3RoaXMsIF9fYXJndW1lbnRzKSkubmV4dCgpKTtcbiAgfSk7XG59O1xuXG4vLyBzcmMvc2hhcmVkL3JlbmRlci50c1xuaW1wb3J0ICogYXMgUmVhY3REb21TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNvbnZlcnQgfSBmcm9tIFwiaHRtbC10by10ZXh0XCI7XG5cbi8vIHNyYy9zaGFyZWQvdXRpbHMvcHJldHR5LnRzXG5pbXBvcnQganNCZWF1dGlmeSBmcm9tIFwianMtYmVhdXRpZnlcIjtcbnZhciBkZWZhdWx0cyA9IHtcbiAgdW5mb3JtYXR0ZWQ6IFtcImNvZGVcIiwgXCJwcmVcIiwgXCJlbVwiLCBcInN0cm9uZ1wiLCBcInNwYW5cIl0sXG4gIGluZGVudF9pbm5lcl9odG1sOiB0cnVlLFxuICBpbmRlbnRfY2hhcjogXCIgXCIsXG4gIGluZGVudF9zaXplOiAyLFxuICBzZXA6IFwiXFxuXCJcbn07XG52YXIgcHJldHR5ID0gKHN0ciwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIHJldHVybiBqc0JlYXV0aWZ5Lmh0bWwoc3RyLCBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7fSwgZGVmYXVsdHMpLCBvcHRpb25zKSk7XG59O1xuXG4vLyBzcmMvc2hhcmVkL3BsYWluLXRleHQtc2VsZWN0b3JzLnRzXG52YXIgcGxhaW5UZXh0U2VsZWN0b3JzID0gW1xuICB7IHNlbGVjdG9yOiBcImltZ1wiLCBmb3JtYXQ6IFwic2tpcFwiIH0sXG4gIHsgc2VsZWN0b3I6IFwiI19fcmVhY3QtZW1haWwtcHJldmlld1wiLCBmb3JtYXQ6IFwic2tpcFwiIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogXCJhXCIsXG4gICAgb3B0aW9uczogeyBsaW5rQnJhY2tldHM6IGZhbHNlIH1cbiAgfVxuXTtcblxuLy8gc3JjL3NoYXJlZC9yZW5kZXIudHNcbnZhciByZW5kZXIgPSAoY29tcG9uZW50LCBvcHRpb25zKSA9PiB7XG4gIGlmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnBsYWluVGV4dCkge1xuICAgIHJldHVybiByZW5kZXJBc1BsYWluVGV4dChjb21wb25lbnQsIG9wdGlvbnMpO1xuICB9XG4gIGNvbnN0IGRvY3R5cGUgPSAnPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXRyYW5zaXRpb25hbC5kdGRcIj4nO1xuICBjb25zdCBtYXJrdXAgPSBSZWFjdERvbVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChjb21wb25lbnQpO1xuICBjb25zdCBkb2N1bWVudCA9IGAke2RvY3R5cGV9JHttYXJrdXB9YDtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcmV0dHkpIHtcbiAgICByZXR1cm4gcHJldHR5KGRvY3VtZW50KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQ7XG59O1xudmFyIHJlbmRlckFzUGxhaW5UZXh0ID0gKGNvbXBvbmVudCwgb3B0aW9ucykgPT4ge1xuICByZXR1cm4gY29udmVydChSZWFjdERvbVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChjb21wb25lbnQpLCBfX3NwcmVhZFZhbHVlcyh7XG4gICAgc2VsZWN0b3JzOiBwbGFpblRleHRTZWxlY3RvcnNcbiAgfSwgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGxhaW5UZXh0KSA9PT0gdHJ1ZSA/IG9wdGlvbnMuaHRtbFRvVGV4dE9wdGlvbnMgOiB7fSkpO1xufTtcblxuLy8gc3JjL25vZGUvcmVuZGVyLWFzeW5jLnRzXG5pbXBvcnQgeyBXcml0YWJsZSB9IGZyb20gXCJub2RlOnN0cmVhbVwiO1xuaW1wb3J0IHsgY29udmVydCBhcyBjb252ZXJ0MiB9IGZyb20gXCJodG1sLXRvLXRleHRcIjtcbnZhciBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XG52YXIgcmVhZFN0cmVhbSA9IChzdHJlYW0pID0+IF9fYXN5bmModm9pZCAwLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgaWYgKFwicGlwZVRvXCIgaW4gc3RyZWFtKSB7XG4gICAgY29uc3Qgd3JpdGFibGVTdHJlYW0gPSBuZXcgV3JpdGFibGVTdHJlYW0oe1xuICAgICAgd3JpdGUoY2h1bmspIHtcbiAgICAgICAgcmVzdWx0ICs9IGRlY29kZXIuZGVjb2RlKGNodW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB5aWVsZCBzdHJlYW0ucGlwZVRvKHdyaXRhYmxlU3RyZWFtKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB3cml0YWJsZSA9IG5ldyBXcml0YWJsZSh7XG4gICAgICB3cml0ZShjaHVuaywgX2VuY29kaW5nLCBjYWxsYmFjaykge1xuICAgICAgICByZXN1bHQgKz0gZGVjb2Rlci5kZWNvZGUoY2h1bmspO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN0cmVhbS5waXBlKHdyaXRhYmxlKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3JpdGFibGUub24oXCJlcnJvclwiLCByZWplY3QpO1xuICAgICAgd3JpdGFibGUub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbnZhciByZW5kZXJBc3luYyA9IChjb21wb25lbnQsIG9wdGlvbnMpID0+IF9fYXN5bmModm9pZCAwLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICBjb25zdCB7IGRlZmF1bHQ6IHJlYWN0RE9NU2VydmVyIH0gPSB5aWVsZCBpbXBvcnQoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuICBsZXQgaHRtbDtcbiAgaWYgKE9iamVjdC5oYXNPd24ocmVhY3RET01TZXJ2ZXIsIFwicmVuZGVyVG9SZWFkYWJsZVN0cmVhbVwiKSkge1xuICAgIGh0bWwgPSB5aWVsZCByZWFkU3RyZWFtKFxuICAgICAgeWllbGQgcmVhY3RET01TZXJ2ZXIucmVuZGVyVG9SZWFkYWJsZVN0cmVhbShjb21wb25lbnQpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBzdHJlYW0gPSByZWFjdERPTVNlcnZlci5yZW5kZXJUb1BpcGVhYmxlU3RyZWFtKGNvbXBvbmVudCwge1xuICAgICAgICBvbkFsbFJlYWR5KCkge1xuICAgICAgICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBodG1sID0geWllbGQgcmVhZFN0cmVhbShzdHJlYW0pO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGxhaW5UZXh0KSB7XG4gICAgcmV0dXJuIGNvbnZlcnQyKGh0bWwsIF9fc3ByZWFkVmFsdWVzKHtcbiAgICAgIHNlbGVjdG9yczogcGxhaW5UZXh0U2VsZWN0b3JzXG4gICAgfSwgb3B0aW9ucy5odG1sVG9UZXh0T3B0aW9ucykpO1xuICB9XG4gIGNvbnN0IGRvY3R5cGUgPSAnPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXRyYW5zaXRpb25hbC5kdGRcIj4nO1xuICBjb25zdCBkb2N1bWVudCA9IGAke2RvY3R5cGV9JHtodG1sLnJlcGxhY2UoLzwhRE9DVFlQRS4qPz4vLCBcIlwiKX1gO1xuICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wcmV0dHkpIHtcbiAgICByZXR1cm4gcHJldHR5KGRvY3VtZW50KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQ7XG59KTtcbmV4cG9ydCB7XG4gIHBsYWluVGV4dFNlbGVjdG9ycyxcbiAgcmVuZGVyLFxuICByZW5kZXJBc3luY1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/@react-email/render/dist/node/index.mjs\n");

/***/ })

};
;