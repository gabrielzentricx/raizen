<template>
  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Patente</h2>
      <div class="form-signin-heading">
        <label class="patentedato">ABC123</label>
      </div>
    <img alt="Islas" class="islas" src="../assets/isla.png">
	<div>
	<button class="btn btn-lg selectbutton okbutton" type="submit">Correcto</button>
	<button class="btn btn-lg selectbutton correctbutton" type="submit">Corregir</button>
	<button class="btn btn-lg selectbutton discardbutton" type="submit">Descartar</button>  
	</div>
	</form>
  </div>
</template>

<style>
.wrapper {	
	margin-top: 80px;
	margin-bottom: 80px;
  position: relative;
  border: 1px outset rgb(90, 90, 90);
}

.form-signin {
  max-width: 900px;
  padding: 25px 45px 55px;
  margin: 0 auto;
  background-color: #fff;
}

.form-signin-heading{
  font-size: 70px;
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

.patentedatorecuadro{
	margin: 10px;
	margin-bottom: 10px;
  position: relative;
  width: 50%;
  top: 50%;
  left: 50%;
}

.islas{
  position: relative;
  width: 50%;
}

.patentedato{
  font-size: 70px;
}

.okbutton{
	position: relative;
	background-color: rgb(18, 155, 0);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}
.correctbutton{
	position: relative;
	background-color: rgb(90, 90, 90);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}
.discardbutton{
	position: relative;
	background-color: rgb(155, 0, 8);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}

.selectbutton{
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 500;
  height: 100px;
  width: 200px;
  line-height: 20px;
  list-style: none;
  margin: 10px;
  outline: none;
  padding: 20px 26px;
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
