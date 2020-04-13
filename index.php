<?php
  require "head.php";
 ?>

 <?php
   require "particles.php";
  ?>



  <main>
    <img src="/static/img/logo.svg" alt="">
    <break></break>
    <h1>nieaHax</h1>
    <break></break>
    <div id="btns">
      <a href="/register">
        <button type="button" name="button" class="blu">
          <h4>Register</h4>
        </button>
      </a>
      <a href="/request-invite">
        <button type="button" name="button" class="org">
          <h4>Request an Invite</h4>
        </button>
      </a>
      <a href="/login">
        <button type="button" name="button" class="grn">
          <h4>Login</h4>
        </button>
      </a>
    </div>
  </main>

  <?php
    require "foot.php";
   ?>
