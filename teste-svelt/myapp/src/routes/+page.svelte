<script>
  import { redirect } from '@sveltejs/kit';
  import { onMount } from 'svelte';

	 /** @type {import('./$types').PageData} */
	let name = '';
	let email  = '';
	let password  = '';
  const src = 'https://free4kwallpapers.com/uploads/originals/2015/08/25/website-background.jpg';
  const srcImage = 'https://pa1.aminoapps.com/6552/a68c88ff52329b3e9667ece9b01fe1079592e04b_hq.gif';
  const rows = 8;
	const cols = 9;
	const w = 100;
	const h = 240;

  let current = 0;

	// onMount(() => {
	// 	const interval = setInterval(() => {
	// 		current = (current + 1) % (cols - 1);
	// 	}, 200);
	// });

  $: bgImage = `background-image: url("${src}");`;
  $: width = `width: ${w}px;`;
  $: height = `height: ${h}px;`;
	$: bgSize = `background-size: calc(100% * ${rows}) calc(100% * ${cols});`;
	$: bgPos = `background-position: ${current * -w}px ${-h}px;`;

	$: vars = `--background-image: url(${src}); --background-size= calc(100% * ${rows}); --background-position: ${current * -w}px ${-h}px; calc(100% * ${cols}); --width: ${w}px; --height: ${h}px;`;
	
	
	const signup = async () => {
    const res = await fetch(`http://localhost:5000/api/auth/register`, {
        method: 'POST',
        body: JSON.stringify({
            username: name,
            email,
            password
        }),
		headers: {
                    'Content-Type': 'application/json'
                }
    })
    
    const json = await res.json()
	if(json.status === true){
		 window.location.href = 'http://localhost:4200/'	
	}
	else alert(json.msg)
}
</script>

<svelte:head>
	<title>Cadastro</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="login">
  <div class="body">
		<form class="form">
      <h1>Formulário de cadastro</h1>
      <div class="form2" >
      <div class="container" >
        <label for="nome" class="nome"  >Nome</label>
        <input type="text" required bind:value={name}   class="emailInput"  placeholder="Nome">
        <label for="email_l" class="email"  >Email</label>
        <input type="email" bind:value={email} required   class="emailInput"  placeholder="Email">
        <label for="password" >Senha</label>
        <input type="password" bind:value={password} placeholder="Senha">
        <div class="divLogin">
        <a href="http://localhost:4200/">Login</a>
        </div>
        <button type="submit" on:click={signup} >
        Entrar
        </button>
      </div>
  </form>
  <div class=" h-screen w-full" style="background-image: url({src});
  background-size: calc(100% * {rows}) calc(100% * {cols});
  background-position: {current * -w}px {-h}px;
   width: {w}%;
  height: 100vh;">
    <div class="divImg">
       <img  src={srcImage} width="50%"/>
     </div>
 </div>
	</div>
</div>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.login{
  background: #FFF;
}
.body {
  justify-content: space-around;
  display: flex;
  align-items: center;
  height: 100vh;
}
.form{
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0 10rem;
  width: 100%;
}
.form2{
  border-radius: 14px;
  background: #FFF;
  display: flex;
  align-self: start;
}

.home{
  /* background-image: url($lib/assets/back.jpg); */
  background-size: cover;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 2rem 0 0 0;

}

.divLogin{
	padding-bottom: 15px;
}

h1{
  font-family: 'Roboto' ;
  font-size: 20px;
  color: #04183E;
  justify-content: start;
  display: flex;
}

input{
  background: #FFFFFF;
  border: 1px solid #bfbcbc;
  border-radius: 4px;
  height: 45px;
  width: 300px;
  padding-left: 10px;
  margin-bottom: 15px;
  outline-color: #66AFFF;
}

button{
	background: #8B0000;
	height: 45px;
	width: 300px;
	border: none;
	color: #FFFFFF;
	font-family: 'Roboto';
	font-size: 14px;
	border-radius: 4px;
	cursor: pointer;
  }
label{
	font-family: 'Roboto' ;
  font-size: 16px;
  color: #04183E;
}

a{
  color: #04183E;
  font-family: 'Roboto' ;
  text-decoration: none;
}

.divImg{
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 10rem;
}


</style>
