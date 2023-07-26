<script>
  import { redirect } from '@sveltejs/kit';

	 /** @type {import('./$types').PageData} */
	let name = '';
	let email  = '';
	let password  = '';
	
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
	  <form>
		<h1>Olá, faça o seu cadastro</h1>
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
	</div>
</div>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.body {
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #EFF2F9;
}
.container{
  display: flex;
  flex-direction: column;
  margin-top: 42px;
}

.divLogin{
	padding-bottom: 15px;
}

h1{
  font-family: 'Roboto' ;
  font-size: 20px;
  color: #04183E;
}

input{
  background: #FFFFFF;
  border: 1px solid #E4EBFB;
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



</style>
