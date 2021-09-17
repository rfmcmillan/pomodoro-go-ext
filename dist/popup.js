/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/app.js":
/*!**************************!*\
  !*** ./src/popup/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionContext": () => (/* binding */ SessionContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Nav */ "./src/popup/components/Nav/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/popup/routes.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _store_sessions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/sessions */ "./src/store/sessions.js");







const SessionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)(() => ({
  main: {
    height: '100%',
    width: '100%'
  }
}));

const App = props => {
  const classes = useStyles();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const currentSession = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.currentSession);
  const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.auth);
  const [sessionTime, setSessionTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [goal, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [countDown, setCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [intervalID, setIntervalID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timeLeft = localStorage.getItem('sessionTime');
    if (parseInt(timeLeft) < 0) return;

    if (!parseInt(timeLeft) && currentSession.id && countDown) {
      props.endSession(currentSession.id, true);
    }
  }, [sessionTime]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (sessionTime, countDown) {
      const id = setInterval(() => {
        setSessionTime(sessionTime => {
          localStorage.setItem('sessionTime', sessionTime - 1000);
          return sessionTime - 1000;
        });
      }, 1000);
      setIntervalID(id);
    }

    if (!countDown) {
      clearInterval(intervalID);
      setSessionTime(0);
    }
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.localStorage.getItem('token')) {
      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.me)());
    }
  }, [dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SessionContext.Provider, {
    value: {
      sessionTime,
      setSessionTime,
      goal,
      setGoal,
      countDown,
      setCountDown,
      intervalID,
      setIntervalID
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__.default, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, dispatch => {
  return {
    endSession: (sessionId, successful) => dispatch((0,_store_sessions__WEBPACK_IMPORTED_MODULE_5__.endSession)(sessionId, successful))
  };
})(App));

/***/ }),

/***/ "./src/popup/components/AuthForm/SandboxLogin.js":
/*!*******************************************************!*\
  !*** ./src/popup/components/AuthForm/SandboxLogin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");





const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(theme => ({
  login: {
    padding: 10,
    minWidth: 100,
    flexGrow: 1,
    width: '20vw',
    position: 'fixed',
    right: '39vw',
    top: '30vh'
  },
  item: {
    width: 200,
    margin: 4
  }
}));

const SandboxLogin = props => {
  const {
    name,
    displayName,
    error,
    value
  } = props;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const classes = useStyles();

  const loginToSandbox = ev => {
    ev.preventDefault();
    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_2__.authenticate)('cody@mail.com', 'cody@mail.com', '123', 'login'));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    id: "sandboxLogin",
    onSubmit: loginToSandbox,
    name: name,
    value: value
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.login
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    container: true,
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    onClick: loginToSandbox,
    id: "submit",
    variant: "contained",
    type: "submit",
    value: value,
    color: "primary",
    style: {
      backgroundColor: '#5061a9',
      color: 'white',
      marginTop: '10px'
    },
    className: classes.item
  }, "Login To Sandbox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "caption"
  }, "Log in to your own account", `
            `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    variant: "caption",
    href: `${process.env.API_URL}/login`
  }, "here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "caption"
  }, "Need an account?", `
            `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    variant: "caption",
    href: `${process.env.API_URL}/signup`
  }, "Sign up")))))));
};

const mapSandboxLogin = state => {
  return {
    name: 'sandboxLogin',
    displayName: 'Log In To Sandbox',
    error: state.auth.error
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapSandboxLogin)(SandboxLogin));

/***/ }),

/***/ "./src/popup/components/AuthForm/index.js":
/*!************************************************!*\
  !*** ./src/popup/components/AuthForm/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": () => (/* binding */ Login),
/* harmony export */   "Signup": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");





const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(theme => ({
  login: {
    padding: 10,
    minWidth: 100,
    flexGrow: 1,
    width: '20vw',
    position: 'absolute',
    margin: 'auto',
    top: '40%',
    transform: 'translate(0, -50%)'
  },
  item: {
    width: 200,
    margin: 4
  },
  signupButton: {
    color: 'white',
    margin: '10px',
    borderRadius: 40
  },
  signInTitle: {}
}));
/**
 * COMPONENT
 */

const AuthForm = props => {
  const classes = useStyles();
  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)();
  const {
    name,
    displayName,
    error,
    value
  } = props;
  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  const onChange = ev => {
    if (ev.target.name === 'username') {
      setUsername(ev.target.value);
    } else if (ev.target.name === 'email') {
      setEmail(ev.target.value);
    } else if (ev.target.name === 'password') {
      setPassword(ev.target.value);
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    let formName = 'signup';

    if (!username) {
      formName = 'login';
    }

    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_2__.authenticate)(username, email, password, formName));
  };

  const loginToSandbox = ev => {
    ev.preventDefault();
    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_2__.authenticate)('cody@mail.com', 'cody@mail.com', '123', 'login'));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    id: "login",
    onSubmit: handleSubmit,
    name: name,
    value: value
  }, name === 'signup' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.login
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    container: true,
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "h6",
    style: {
      marginBottom: '20px'
    }
  }, "Sign Up for an Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    id: "username",
    label: "Username",
    name: "username",
    value: username,
    onChange: onChange,
    variant: "outlined",
    className: classes.item,
    size: "small"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    id: "email",
    label: "E-mail",
    name: "email",
    value: email,
    onChange: onChange,
    variant: "outlined",
    className: classes.item,
    size: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    type: "password",
    id: "password",
    label: "Password",
    name: "password" // type='password'
    ,
    value: password,
    onChange: onChange,
    variant: "outlined",
    className: classes.item,
    size: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.signupButton,
    onClick: handleSubmit,
    id: "submit",
    variant: "contained",
    type: "submit",
    value: value,
    color: "primary"
  }, displayName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true,
    container: true,
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "caption"
  }, "Already have an account?", `
              `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "caption",
    href: `${process.env.API_URL}/login`
  }, "Sign in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "caption"
  }, "Or sign in to our sandbox account", `
            `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "caption",
    href: `${process.env.API_URL}/sandboxLogin`
  }, "here."))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.login
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    container: true,
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "h6",
    className: classes.signInTitle
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    id: "email",
    label: "E-mail",
    name: "email",
    value: email,
    onChange: onChange,
    variant: "outlined",
    className: classes.item,
    size: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    type: "password",
    id: "password",
    label: "Password",
    name: "password",
    value: password,
    onChange: onChange,
    variant: "outlined",
    className: classes.item,
    size: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
    onClick: handleSubmit,
    id: "submit",
    variant: "contained",
    type: "submit",
    value: value,
    color: "primary",
    style: {
      backgroundColor: '#5061a9',
      color: 'white',
      marginTop: '10px'
    },
    className: classes.item
  }, displayName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "caption"
  }, "Sign in to our sandbox account", `
            `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "caption",
    href: `${process.env.API_URL}/sandboxLogin`
  }, "here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "caption"
  }, "Need an account?", `
            `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "caption",
    href: `${process.env.API_URL}/signup`
  }, "Sign up"))))), error && error.response && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " ", error.response.data, " ")));
};
/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */


const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Sign In',
    error: state.auth.error
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  };
};

const Login = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapLogin)(AuthForm);
const Signup = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapSignup)(AuthForm);

/***/ }),

/***/ "./src/popup/components/Nav/NavButton.js":
/*!***********************************************!*\
  !*** ./src/popup/components/Nav/NavButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/withStyles/withStyles.js");



const NavButton = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  root: {
    color: '#4d2a4e',
    fontSize: 'medium',
    textTransform: 'none',
    fontWeight: 'bold',
    fontFamily: ['Roboto', 'sans-serif'].join(',')
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavButton);

/***/ }),

/***/ "./src/popup/components/Nav/index.js":
/*!*******************************************!*\
  !*** ./src/popup/components/Nav/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/useTheme/useTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavButton */ "./src/popup/components/Nav/NavButton.js");









const Navbar = props => {
  const theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__.default)();
  const useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.default)({
    header: {
      color: 'black',
      backgroundColor: '#ffffff00',
      boxShadow: 'none',
      height: 60
    },
    button: {
      color: theme.palette.text.primary,
      fontSize: 'medium',
      fontFamily: theme.typography.fontFamily
    },
    login: {
      color: 'black'
    },
    loggedIn: {
      justifyContent: 'flexEnd',
      width: 130
    },
    loggedOut: {
      justifyContent: 'flexEnd',
      width: 300
    },
    logo: {
      fontFamily: 'Righteous',
      color: 'black',
      fontSize: 34
    },
    signup: {
      borderRadius: 40,
      backgroundColor: 'black',
      color: 'white',
      fontSize: 14
    },
    signIn: {
      backgroundColor: '#ffffff00',
      color: 'black'
    },
    sandboxLogin: {
      backgroundColor: '#ffffff00',
      color: 'black'
    }
  });
  const classes = useStyles();
  const [isGoogleLoggedIn, setIsGoogleLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [authInstance, setAuthInstance] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});

  const handleSuccess = response => {
    props.getMe(response);
  };

  const handleFail = response => {};

  const handleLogOut = () => {
    clearInterval(window.timer);
    setAnchorEl(null);
    window.localStorage.clear();
    props.handleClick();
  };

  const {
    isLoggedIn
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    id: "navBar"
  }, chrome.storage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    position: "static",
    className: classes.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.logo,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/timer",
    disableFocusRipple: true,
    disableRipple: true
  }, "PomodoroGo"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    position: "static",
    className: classes.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.logo,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/timer",
    disableFocusRipple: true,
    disableRipple: true
  }, "PomodoroGo"), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.button,
    "aria-label": "timer",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/timer"
  }, "Timer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.button,
    id: "dashboard",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/dashboard"
  }, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.button,
    id: "blocksites",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/blocksites"
  }, "BlockList"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.button,
    id: "friends",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/friends"
  }, "Friends")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    container: true,
    id: "extension-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, {
    id: "menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    "aria-haspopup": "true",
    onClose: () => setAnchorEl(null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    key: "Login",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    onClick: () => setAnchorEl(null),
    to: "/login"
  }, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    key: "sandboxLogin",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    onClick: () => setAnchorEl(null),
    to: "/sandboxLogin"
  }, "Log In To Sandbox")))), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    container: true,
    className: classes.loggedIn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
    onClick: handleLogOut
  }, "Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLogout, {
    clientId: "811227993938-nd59os35t80qtuqgmul58232c54sbmsm.apps.googleusercontent.com",
    buttonText: "Logout",
    onLogoutSuccess: handleLogOut,
    isSignedIn: props.isLoggedIn,
    render: renderProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
      onClick: renderProps.onClick,
      src: "https://i.pinimg.com/originals/a3/d5/8f/a3d58f0b2820871d486e9851c0fdbb60.jpg"
    })
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    container: true,
    className: classes.loggedOut
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "text",
    className: classes.sandboxLogin,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/sandboxLogin"
  }, "Sandbox")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "text",
    className: classes.signIn,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/login"
  }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "contained",
    className: classes.signup,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/signup"
  }, "Sign Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLogin, {
    clientId: "811227993938-nd59os35t80qtuqgmul58232c54sbmsm.apps.googleusercontent.com",
    buttonText: "Login",
    onSuccess: handleSuccess,
    onFailure: handleFail,
    cookiePolicy: 'single_host_origin',
    isSignedIn: props.isLoggedIn,
    redirectUri: `${process.env.API_URL}/timer`,
    render: renderProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
      onClick: renderProps.onClick,
      src: "https://img-authors.flaticon.com/google.jpg"
    })
  })))))));
};
/**
 * CONTAINER
 */


const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_2__.logout)());
    },

    getMe(data) {
      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_2__.authenticateGoogle)(data));
    }

  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapState, mapDispatch)(Navbar));

/***/ }),

/***/ "./src/popup/history.js":
/*!******************************!*\
  !*** ./src/popup/history.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

const history =  false ? 0 : (0,history__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ }),

/***/ "./src/popup/routes.js":
/*!*****************************!*\
  !*** ./src/popup/routes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AuthForm */ "./src/popup/components/AuthForm/index.js");
/* harmony import */ var _components_AuthForm_SandboxLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AuthForm/SandboxLogin */ "./src/popup/components/AuthForm/SandboxLogin.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dashboard */ "./src/components/Dashboard/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _store_sessions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/sessions */ "./src/store/sessions.js");




 // import CreateSession from './components/Timer/CreateSession';
// import Timer from './components/Timer';



 // import { loadBlackList, updateBlackList } from '../store/blackList';
// import { loadBlocks } from '../store/blocks';
// import { loadSites } from '../store/sites';
// import { getSites } from '../store/blockSites';
// import BlockError from './components/BlockError';
// import BlockSites from './components/BlockSites';
// import Friends from './components/Friends/Friends';
// import RedirectToSite from './components/RedirectToSite';
// import About from './components/About';

class Routes extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.loadInitialData();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.auth && this.props.auth.id !== prevProps.auth.id) {// await this.props.getSites(this.props.auth.id);
    }

    console.log('sending set-blocked-sites message');
    console.log('chrome:', chrome);
    console.log('chrome.runtime:', chrome.runtime);
    chrome?.runtime?.sendMessage('kaghhmclljbnigfffgjhfbbbcpgenjoi', {
      message: 'set-blocked-sites',
      blockedSites: this.props.blockedSites.filter(each => {
        return each.blacklist.blockingEnabled === true;
      }),
      currUser: this.props.auth.id
    });
    console.log('set-blocked-sites message sent');
  }

  render() {
    const {
      isLoggedIn,
      auth,
      blackList,
      updateB
    } = this.props;
    if (chrome.storage) chrome.storage.onChanged.addListener(async (changes, areaName) => {
      if (changes.updatedBlackList) {
        const {
          updatedBlackList: {
            oldValue,
            newValue
          }
        } = changes;

        if (!oldValue) {
          updateB(newValue.id, newValue);
        } else if (oldValue.blocks !== newValue.blocks) {
          updateB(newValue.id, newValue);
        }
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, isLoggedIn && !chrome.storage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
      path: "/login"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
      to: "/dashboard"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
      path: "/sandboxLogin"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
      to: "/dashboard"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
      path: "/dashboard",
      component: _components_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
      path: "/sandboxLogin",
      component: _components_AuthForm_SandboxLogin__WEBPACK_IMPORTED_MODULE_3__.default
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
      path: "/login",
      component: _components_AuthForm__WEBPACK_IMPORTED_MODULE_2__.Login
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
      path: "/signup",
      component: _components_AuthForm__WEBPACK_IMPORTED_MODULE_2__.Signup
    })));
  }

}

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    sites: state.sites,
    auth: state.auth,
    blackList: state.blackList,
    blockedSites: state.blockedSites
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_5__.me)());
      dispatch((0,_store_sessions__WEBPACK_IMPORTED_MODULE_6__.loadSessions)()); // dispatch(loadSites());
      // dispatch(loadBlackList());
      // dispatch(loadBlocks());
    } // updateB: (blackListId, blackListInfo) => {
    //   return dispatch(updateBlackList(blackListId, blackListInfo));
    // },
    // getSites: (userId) => {
    //   return dispatch(getSites(userId));
    // },


  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapState, mapDispatch)(Routes)));

/***/ }),

/***/ "./src/store/auth.js":
/*!***************************!*\
  !*** ./src/store/auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "socket": () => (/* binding */ socket),
/* harmony export */   "me": () => (/* binding */ me),
/* harmony export */   "authenticateGoogle": () => (/* binding */ authenticateGoogle),
/* harmony export */   "authenticate": () => (/* binding */ authenticate),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popup_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/history */ "./src/popup/history.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/wrapper.mjs");



const ENDPOINT = process.env.API_URL;
const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.default)(ENDPOINT);
const TOKEN = 'token';
const SPOTIFY_ACCESS_TOKEN = 'spotify_access_token';
const SPOTIFY_REFRESH_TOKEN = 'spotify_refresh_token';
const NEW_SPOTIFY_DEVICE = 'new-spotify-device';
/**
 * ACTION TYPES
 */

const SET_AUTH = 'SET_AUTH';
/**
 * ACTION CREATORS
 */

const setAuth = auth => ({
  type: SET_AUTH,
  auth
});
/**
 * THUNK CREATORS
 */


const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);

  if (token) {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${process.env.API_URL}/auth/me`, {
      headers: {
        authorization: token
      }
    });
    return dispatch(setAuth(res.data));
  }
};
const authenticateGoogle = (data = {}) => async dispatch => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/auth/google', data, {
      headers: {
        authorization: data.tokenId
      }
    });
    window.localStorage.setItem('token', response.data.token);
    dispatch(me());
  } catch (error) {
    console.log(error);
  }
};
const authenticate = (username, email, password, method) => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${process.env.API_URL}/auth/${method}`, method === 'signup' ? {
      username,
      email,
      password
    } : {
      email,
      password
    });
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({
      error: authError
    }));
  }
};
const logout = () => {
  window.localStorage.removeItem(TOKEN);
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('timerDone');
  window.localStorage.removeItem(SPOTIFY_ACCESS_TOKEN);
  window.localStorage.removeItem(SPOTIFY_REFRESH_TOKEN);
  window.localStorage.removeItem(NEW_SPOTIFY_DEVICE);
  _popup_history__WEBPACK_IMPORTED_MODULE_1__.default.push('/login');
  return {
    type: SET_AUTH,
    auth: {}
  };
};
/**
 * REDUCER
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      if (action.auth.id) {
        socket.emit('login', {
          userId: action.auth.id
        });
      } else {
        socket.emit('logout', {
          userId: state.id
        });
      }

      return action.auth;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "authenticate": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.authenticate),
/* harmony export */   "authenticateGoogle": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.authenticateGoogle),
/* harmony export */   "logout": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.logout),
/* harmony export */   "me": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.me),
/* harmony export */   "socket": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.socket)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./src/store/auth.js");
/* harmony import */ var _sessions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions */ "./src/store/sessions.js");





 // import { sitesReducer } from './sites';
// import { blackListReducer } from './blackList';
// import { blocksReducer } from './blocks';
// import blockedSitesReducer from './blockSites';
// import playlistsReducer from './spotify/getPlaylists';
// import currPlaylistReducer from './spotify/getCurrPlaylist';
// import currPlaybackReducer from './spotify/getCurrPlayback';
// import devicesReducer from './spotify/getDevices';
// import recPlaylistsReducer from './spotify/getRecPlaylists';
// import addToQueueReducer from './spotify/addToQueue';
// import recentTrackReducer from './spotify/getRecentTrack';
// import { myRequestReducer, requestToMeReducer } from './getFriends';
// import allUsersReducer from './getAllUsers';
// import { newFriendRequestReducer } from './addFriend';

const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_5__.combineReducers)({
  auth: _auth__WEBPACK_IMPORTED_MODULE_3__.default,
  blockedSites: blockedSitesReducer,
  sessions: _sessions__WEBPACK_IMPORTED_MODULE_4__.sessionsReducer,
  sites: sitesReducer,
  blackList: blackListReducer,
  blocks: blocksReducer,
  currentSession: _sessions__WEBPACK_IMPORTED_MODULE_4__.currentSessionReducer // allPlaylists: playlistsReducer,
  // currPlaylist: currPlaylistReducer,
  // recPlaylists: recPlaylistsReducer,
  // currPlayback: currPlaybackReducer,
  // newlyAddedTrack: addToQueueReducer,
  // devices: devicesReducer,
  // recentTrack: recentTrackReducer,
  // myRequests: myRequestReducer,
  // requestsToMe: requestToMeReducer,
  // allUsers: allUsersReducer,
  // newFriendRequest: newFriendRequestReducer,

});
const middleware = (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_5__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1__.default, (0,redux_logger__WEBPACK_IMPORTED_MODULE_0__.createLogger)({
  collapsed: true
})));
const store = (0,redux__WEBPACK_IMPORTED_MODULE_5__.createStore)(reducer, middleware);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./src/store/sessions.js":
/*!*******************************!*\
  !*** ./src/store/sessions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeSession": () => (/* binding */ removeSession),
/* harmony export */   "_endSession": () => (/* binding */ _endSession),
/* harmony export */   "endSession": () => (/* binding */ endSession),
/* harmony export */   "loadSession": () => (/* binding */ loadSession),
/* harmony export */   "loadSessions": () => (/* binding */ loadSessions),
/* harmony export */   "sessionsReducer": () => (/* binding */ sessionsReducer),
/* harmony export */   "currentSessionReducer": () => (/* binding */ currentSessionReducer),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "updateTask": () => (/* binding */ updateTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "createSession": () => (/* binding */ createSession),
/* harmony export */   "updateSession": () => (/* binding */ updateSession)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const LOAD_SESSIONS = 'LOAD_SESSIONS';

const loadSessionsActionCreator = sessions => {
  return {
    type: LOAD_SESSIONS,
    sessions
  };
};

const loadSessions = () => {
  return async dispatch => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${process.env.API_URL}/api/sessions`);
      const sessions = response.data;
      dispatch(loadSessionsActionCreator(sessions));
    } catch (error) {
      console.log(error);
    }
  };
};

const LOAD_SESSION = 'LOAD_SESSION';

const loadSessionActionCreator = session => {
  return {
    type: LOAD_SESSION,
    session
  };
};

const loadSession = sessionId => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${process.env.API_URL}/api/sessions/${sessionId}`);
    dispatch(loadSessionActionCreator(res.data));
  } catch (error) {
    console.log(error);
  }
};

const sessionsReducer = (state = [], action) => {
  if (action.type === LOAD_SESSIONS) {
    state = action.sessions;
  }

  return state;
};

const CREATE_SESSION = 'CREATE_SESSION';

const createSessionActionCreator = session => {
  return {
    type: CREATE_SESSION,
    session
  };
};

const createSession = (userId, goal) => async dispatch => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${process.env.API_URL}/api/sessions`, {
      userId,
      goal
    });
    const {
      data
    } = response;
    localStorage.setItem('currentSession', JSON.stringify(data));
    dispatch(createSessionActionCreator(data));
  } catch (error) {
    console.log(error);
  }
};

const UPDATE_SESSION = 'UPDATE_SESSION';

const updateSessionActionCreator = session => {
  return {
    type: UPDATE_SESSION,
    session
  };
};

const updateSession = (sessionId, sessionInfo) => async dispatch => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${process.env.API_URL}/api/sessions/${sessionId}`, sessionInfo);
    const {
      data
    } = response;
    window.localStorage.setItem('currentSession', JSON.stringify(data));
    dispatch(updateSessionActionCreator(data));
  } catch (error) {
    console.log(error);
  }
};

const END_SESSION = 'END_SESSION';
const REMOVE_SESSION = 'REMOVE_SESSION';
const removeSession = () => {
  return {
    type: REMOVE_SESSION
  };
};
const _endSession = session => {
  return {
    type: END_SESSION
  };
};
const endSession = (sessionId, successful = false) => async dispatch => {
  try {
    let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${process.env.API_URL}/api/sessions/${sessionId}/end`, {
      successful
    });

    if (response.data.status === 'Ongoing') {
      response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${process.env.API_URL}/api/sessions/${sessionId}/end`, {
        successful
      });
    }

    chrome.runtime.sendMessage('jgphbioennmnjogfbpchcgphelmfoiig', {
      message: 'timer-done'
    });
    const updatedSession = response.data;
    dispatch(_endSession());
    localStorage.setItem('currentSession', null);
  } catch (error) {
    console.log(error);
  }
};
const ADD_TASK = 'ADD_TASK';

const addTaskCreator = session => {
  return {
    type: ADD_TASK,
    session
  };
};

const addTask = (task, sessionId) => {
  return async dispatch => {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${process.env.API_URL}/api/sessions/${sessionId}/tasks`, {
      task
    });
    const updatedSession = response.data;
    dispatch(addTaskCreator(updatedSession));
  };
};

const DELETE_TASK = 'DELETE_TASK';

const deleteTaskCreator = session => {
  return {
    type: DELETE_TASK,
    session
  };
};

const deleteTask = (id, sessionId) => {
  return async dispatch => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete(`${process.env.API_URL}/api/sessions/${sessionId}/tasks/${id}`);
    dispatch(deleteTaskCreator(res.data));
  };
};

const UPDATE_TASK = 'UPDATE_TASK';

const updateTaskActionCreator = session => {
  return {
    type: UPDATE_TASK,
    session
  };
};

const updateTask = (taskId, sessionId) => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${process.env.API_URL}/api/sessions/${sessionId}/tasks/${taskId}`);
    dispatch(updateTaskActionCreator(res.data));
  } catch (error) {
    console.log(error);
  }
};

const currentSessionReducer = (state = {}, action) => {
  if (action.type === CREATE_SESSION || action.type === UPDATE_SESSION || action.type === ADD_TASK || action.type === DELETE_TASK || action.type === UPDATE_TASK || action.type === LOAD_SESSION) {
    state = action.session;
  } else if (action.type === REMOVE_SESSION || action.type === 'LOG_OUT' || action.type === END_SESSION) {
    return {};
  }

  return state;
};



/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history */ "./src/popup/history.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ "./src/popup/app.js");








const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)({
    palette: {
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        error: {
            contrastText: '#ffffff',
            main: '#a83942',
        },
        primary: {
            contrastText: '#e4ddee',
            main: '#5061a9',
        },
        secondary: {
            contrastText: '#9FE2BF',
            main: '#5c4fa8',
        },
        success: {
            contrastText: '#ffffff',
            main: '#261689',
        },
        info: {
            main: '#5061a9',
        },
        text: {
            primary: '#4d2a4e',
            secondary: '#9671a2',
        },
    },
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
});
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, { store: _store__WEBPACK_IMPORTED_MODULE_4__.default },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default, { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Router, { history: _history__WEBPACK_IMPORTED_MODULE_3__.default },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app__WEBPACK_IMPORTED_MODULE_5__.default, null)))), document.getElementById('app'));


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpomodoro_go_ext"] = self["webpackChunkpomodoro_go_ext"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_index_js","vendors-node_modules_material-ui_core_esm_Checkbox_Checkbox_js-node_modules_material-ui_core_-d5b6cb","vendors-node_modules_material-ui_core_esm_AppBar_AppBar_js-node_modules_material-ui_core_esm_-4df537","src_components_Dashboard_index_js"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map