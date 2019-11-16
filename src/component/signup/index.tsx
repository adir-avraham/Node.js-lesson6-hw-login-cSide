import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import axios from 'axios';
import { async } from 'q';

const registerUrl = ('http://localhost:4000/register ')


export default class SignUp extends React.Component <any,any> {

state = {
  fullName: "",
  age: 0,
  email: "",
  password: ""
}

handleOnChange = (event: any) =>{
  const { target } = event;
  this.setState({[target.name]: target.value})
}

handleRegister = async () => {
  const result = await axios.post(registerUrl, this.state)
  const {redirect} = result.data
  if (redirect) {

    this.props.history.push('/login')
  } else {
    alert("User already exist")
  }
  console.log(this.state)
}

render() {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                onChange={this.handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                onChange={this.handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleOnChange}
              />
            </Grid>
          </Grid>
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleRegister}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
}