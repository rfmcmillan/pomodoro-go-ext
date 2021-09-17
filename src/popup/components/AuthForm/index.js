import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { authenticate } from '../../../store';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Link,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login: {
    padding: 10,
    minWidth: 100,
    flexGrow: 1,
    width: '20vw',
    position: 'absolute',
    margin: 'auto',
    top: '40%',
    transform: 'translate(0, -50%)',
  },
  item: {
    width: 200,
    margin: 4,
  },
  signupButton: {
    color: 'white',
    margin: '10px',
    borderRadius: 40,
  },
  signInTitle: {},
}));

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { name, displayName, error, value } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = (ev) => {
    if (ev.target.name === 'username') {
      setUsername(ev.target.value);
    } else if (ev.target.name === 'email') {
      setEmail(ev.target.value);
    } else if (ev.target.name === 'password') {
      setPassword(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let formName = 'signup';
    if (!username) {
      formName = 'login';
    }
    dispatch(authenticate(username, email, password, formName));
  };

  const loginToSandbox = (ev) => {
    ev.preventDefault();
    dispatch(authenticate('cody@mail.com', 'cody@mail.com', '123', 'login'));
  };

  return (
    <div>
      {/* script for google OAuth */}
      <form id="login" onSubmit={handleSubmit} name={name} value={value}>
        {name === 'signup' ? (
          <Paper className={classes.login}>
            <Grid container direction="column" alignItems="center">
              <Typography
                variant="h6"
                style={{
                  marginBottom: '20px',
                }}
              >
                Sign Up for an Account
              </Typography>
              <TextField
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={onChange}
                variant="outlined"
                className={classes.item}
                size="small"
              />
              <Grid item>
                <TextField
                  id="email"
                  label="E-mail"
                  name="email"
                  value={email}
                  onChange={onChange}
                  variant="outlined"
                  className={classes.item}
                  size="small"
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  // type='password'
                  value={password}
                  onChange={onChange}
                  variant="outlined"
                  className={classes.item}
                  size="small"
                />
              </Grid>
              <Grid item>
                <Button
                  className={classes.signupButton}
                  onClick={handleSubmit}
                  id="submit"
                  variant="contained"
                  type="submit"
                  value={value}
                  color="primary"
                >
                  {displayName}
                </Button>
              </Grid>
              <Grid item container direction="column" alignItems="center">
                <Grid item>
                  <Typography variant="caption">
                    Already have an account?
                    {`
              `}
                  </Typography>
                  <Link
                    variant="caption"
                    href="https://pomodoro-go-1.herokuapp.com/login"
                  >
                    Sign in
                  </Link>
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                    Or sign in to our sandbox account
                    {`
            `}
                  </Typography>

                  <Link
                    variant="caption"
                    href="https://pomodoro-go-1.herokuapp.com/sandboxLogin"
                  >
                    here.
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Paper className={classes.login}>
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6" className={classes.signInTitle}>
                Sign In
              </Typography>

              <Grid item>
                <TextField
                  id="email"
                  label="E-mail"
                  name="email"
                  value={email}
                  onChange={onChange}
                  variant="outlined"
                  className={classes.item}
                  size="small"
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  variant="outlined"
                  className={classes.item}
                  size="small"
                />
              </Grid>
              <Grid item>
                <Button
                  onClick={handleSubmit}
                  id="submit"
                  variant="contained"
                  type="submit"
                  value={value}
                  color="primary"
                  style={{
                    backgroundColor: '#5061a9',
                    color: 'white',
                    marginTop: '10px',
                  }}
                  className={classes.item}
                >
                  {displayName}
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  Sign in to our sandbox account
                  {`
            `}
                </Typography>

                <Link
                  variant="caption"
                  href="https://pomodoro-go-1.herokuapp.com/sandboxLogin"
                >
                  here.
                </Link>
              </Grid>
              <Grid item>
                <Grid item>
                  <Typography variant="caption">
                    Need an account?
                    {`
            `}
                  </Typography>
                  <Link
                    variant="caption"
                    href="https://pomodoro-go-1.herokuapp.com/signup"
                  >
                    Sign up
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        )}
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Sign In',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

export const Login = connect(mapLogin)(AuthForm);
export const Signup = connect(mapSignup)(AuthForm);
