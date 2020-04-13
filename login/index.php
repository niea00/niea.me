<?php
  require "../head.php";
  require "../particles.php";
 ?>

 <style media="screen">
   .login-form {
     width: 32rem;
     background-color: #272727;
     border: 1px solid #303030;
     border-radius: .25rem;
     align-content: center;
     justify-content: center;
   }

   main h4 {
     padding: .75rem;
     margin: 0;
   }

   .form-header {
     background-color: #343434;
       background: linear-gradient(180deg, rgba(52,52,52,1) 0%, rgba(42,42,42,1) 100%);
   }

   .form-group {
     padding:  1rem 1rem 0 1rem;
   }

   .form-group input {
     width: calc(100% - 1rem);
     background-color: #343434;
     color: #fff;
     padding: .5rem;
     border: none;
     font-family: monospace;
   }

   button {
     border: none;
     border-radius: 2rem;
     cursor: pointer;
     padding: .2rem;
     margin: 0 1rem 1rem 1rem;
     transition: all 0.15s ease-out;
   }

   button.blu {
     margin: 0 0 1rem 1rem;
   }

   button:hover {
     transform: none;
     filter: saturate(1.5);
     box-shadow: none;
     transition: all 0.15s ease-out;
   }

   .form-group-buttons {

  display: flex;
  align-items: center;
  justify-content: center;
   }
 </style>

 <main>
   <form class="login-form" action="/login.php" method="post">
     <div class="form-header">
       <h4>Login</h4>
     </div>
     <div class="form-group">
       <input type="text" name="username" placeholder="Username / Email">
     </div>
     <div class="form-group" style="padding: 1rem;">
       <input name="password" placeholder="Password" type="password">
     </div>
     <div class="form-group-buttons">
       <button type="button" name="login" class="blu"><h4>Login</h4></button>
       <button type="button" name="forgotpw" class="org"><h4>Forgot password?</h4></button>
     </div>
   </form>
 </main>


 <?php
   require "../foot.php";
  ?>
