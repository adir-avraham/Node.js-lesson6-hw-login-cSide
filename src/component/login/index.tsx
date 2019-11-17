import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FaceIcon from '@material-ui/icons/Face';
import axios from 'axios';


const logInUrl = ('http://localhost:4000/login')

export default class Login extends React.Component<any,any> {

  state = {
    email: "",
    password: "",
    message: " Enter your email and password",
  }

  handleOnChange = (event: any) =>{
    const { target } = event;
    this.setState({[target.name]: target.value})
  }
  
  handleLogin = async () => {
    console.log(this.state)
    const result = await axios.post(logInUrl, this.state)
    const {redirect, message, key} = result.data
    this.setState({message: message})
    if (redirect) {
    alert(message)
    this.props.history.push('/home')
    localStorage.setItem('key', key);
    } 
    if (!redirect) this.props.history.push('/login')
    
  }
  render() {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <FaceIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in {this.state.message}
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.handleOnChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handleOnChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleLogin}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}
}