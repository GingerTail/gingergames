import React, {Component} from "react"
import "../stylesheets/login.css"
import SimpleNavBar from "./SimbleNav"

class LoginPage extends Component{

    render(){
        return(
          <>
          <SimpleNavBar/>
          <div className="image-r">
            <img src="https://i.pinimg.com/originals/0a/4f/6c/0a4f6c783dcc0e048b5de17d419174e7.png" alt="login-img"/>
         </div>
           <div className="image-l">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f50a1f7-fbc5-4950-8e9e-80efc76a8f70/d6f5riu-8bb9940e-1ac8-4f8d-adfe-5f46bda8d681.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlmNTBhMWY3LWZiYzUtNDk1MC04ZTllLTgwZWZjNzZhOGY3MFwvZDZmNXJpdS04YmI5OTQwZS0xYWM4LTRmOGQtYWRmZS01ZjQ2YmRhOGQ2ODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MznunEAbBp_XG1OgLJ9dSR1DJjBZjw3sZnq-LkIHxf4" alt="login-img"/>
         </div>  
         
            <div className="login-container">

<section class="form-gradient">

<div class="card">

  
  <div class="header pt-3 custom-gradient">

    <div class="row d-flex justify-content-center">
      <h3 class="white-text mb-3 pt-3 font-weight-bold">Log in</h3>
    </div>

    <div class="row mt-2 mb-3 d-flex justify-content-center">
          <a class="fa-lg p-2 m-2 fb-ic"><i class="fab fa-facebook-f white-text fa-lg"> </i></a>
   
      <a class="fa-lg p-2 m-2 tw-ic"><i class="fab fa-twitter white-text fa-lg"> </i></a>

      <a class="fa-lg p-2 m-2 gplus-ic"><i class="fab fa-google-plus-g white-text fa-lg"> </i></a>
    </div>

  </div>


  <div class="card-body mx-4 mt-4">

   
    <div class="md-form">
      <input type="text" id="Form-email3" class="form-control"/>
      <label for="Form-email3">Your email</label>
    </div>

    <div class="md-form pb-1 pb-md-3">
      <input type="password" id="Form-pass3" class="form-control"/>
      <label for="Form-pass3">Your password</label>
      <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#"
          class="dark-grey-text ml-1 font-weight-bold"> Password?</a></p>
    </div>

    <div class="row d-flex align-items-center mb-4">


      <div class="col-md-1 col-md-5 d-flex align-items-start">
        <div class="text-center">
          <button type="button" class="btn btn-grey btn-rounded z-depth-1a">Log in</button>
        </div>
      </div>
 

  
      <div class="col-md-7">
        <p class="font-small grey-text d-flex justify-content-end mt-3">Don't have an account? <a href="#"
            class="dark-grey-text ml-1 font-weight-bold"> Sign up</a></p>
      </div>


    </div>

  </div>

</div>

</section>
            </div>
            </>

        )
    }
}

export default LoginPage