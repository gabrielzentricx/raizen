<template>
  <div class="wrapper">
    <form class="form-signin">       
      <h2 class="form-signin-heading">Bienvenido</h2>
      <div>
		<input type="text" class="form-control" name="usuario" placeholder="Usuario" required="" autofocus="" />
		<input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
      </div>
	<button class="btn btn-lg selectbutton loginbutton" @click="$router.push('patentes')">Login</button>   
    </form>
  </div>
</template>

<style>
.wrapper {	
	margin-top: 80px;
	margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
} 

.form-control {
	position: relative;
	font-size: 16px;
	height: auto;
	padding: 10px;
	margin-top: 5px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}

.loginbutton{
	margin-top: 5px;
	position: relative;
	background-color: rgb(90, 90, 90);
}

.selectbutton{
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.selectbutton:hover,
.selectbutton:focus {
	transform: scale(1.065);
}

</style>
