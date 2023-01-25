import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Container from '@mui/material/Container';
import { useDispatch,useSelector } from 'react-redux';
//import { mapStateToProps, mapDispachToProps } from "../../store/MapToProps";

//import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { LoginApi } from '../../Redux/Actions/LoginAction';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="#">
        Vendoapp
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const checkLocalStorage = () => {
  return localStorage.getItem("uid") ? true : false;
};

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: "8em !important",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: "1em !important",
    backgroundColor: "#f50057 !important",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: "1em !important",
  },
  submit: {
    margin: '1em 0 1em 0 !important',
  },
}));

const Login = (props) => {


  const loginResponseData=useSelector(state=>state.LoginReducer)

  console.log("======loginResponseData=======>",loginResponseData);

  const dispatch=useDispatch()
  const [open, setOpen] = useState(false);
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [personName, setPersonName] = useState("admin");
  const classes = useStyles();

  if (checkLocalStorage()) {
    window.location = "/dashboard"
    // return null
  }

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handlePost=async (body)=>{
    console.log("body===>",body);
    //console.log("====person====>",person);
   dispatch(LoginApi(body))

 console.log("======handlePostData=======>",loginResponseData);
    

   
    // if(loginResponseData.isLogin){
    //   toast.success(loginResponseData.toastMessage)
    // }else{
    //   toast.error(loginResponseData.toastMessage)
    // }
    
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            // autoComplete="username"
            onChange={(e) => {
              // console.log(e.currentTarget.value);
              setUname(e.currentTarget.value)
            }}
          // autoFocus
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
            onChange={(e) => {
              // console.log(e.currentTarget.value);
              setPassword(e.currentTarget.value)
            }}
          // autoComplete="current-password"
          />
          <FormControl sx={{ width: 200, mt: "1em", mb: "0.5em" }}>
            <InputLabel id="demo-controlled-open-select-label">admin/provider</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={personName}
              label="select user"
              onChange={handleChange}
            >
              <MenuItem value={"admin"}>admin</MenuItem>
              <MenuItem value={"provider"}>provider</MenuItem>
            </Select>
          </FormControl>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
              switch (personName) {
                case "admin":
                  handlePost({
                    emailAddress: uname,
                    password: password
                  })
                  break;
                case "provider":
                  handlePost({
                    emailAddress: uname,
                    password: password
                  })
                  break;
                default: break
              }

            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/ForgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs>
              <Link href="/Registration" variant="body2">
              Registration
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Login
