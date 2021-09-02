<script>
	import Input from '../components/loginInput.svelte';
	const loginInputInfo = [
		{
			id: 1,
			type: 'text',
			icon: 'far fa-user',
			placeholder: 'Username: admin or User'
		},
		{
			id: 2,
			type: 'password',
			icon: 'fas fa-lock',
			placeholder: 'Password: ant.design'
		}
	];
	let submitMessage = '<p>Submit</p>';
	let src =
		'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1b90dfed-b084-49dd-8c03-b42e30e27e76%2FUntitled.png?table=block&id=f341bcf6-04b0-4f7c-844e-a5021e68428e&spaceId=9300b0b5-831f-4b8f-9a3b-94ab6aaef8a4&width=3840&userId=4ceb4837-6e48-41b9-902e-750b27fe3ecc&cache=v2';
</script>

<svelte:head>
	<title>GENUIO LOGIN</title>
</svelte:head>

<div class="flex items-center justify-center">
	<img class="w-8" {src} alt="genuio logo" />
	<h1 class="text-4xl my-8 uppercase">GENUIO</h1>
</div>
<form class="flex flex-col">
	<button class="border-none m-2 text-xs">Account Login</button>
	{#each loginInputInfo as info, i}
		<Input type={info.type} icon={info.icon} />
	{/each}
	<div class="flex my-2 items-center mx-auto justify-between">
		<div class="flex items-center mr-3">
			<input type="checkbox" />
			<p class="text-xs m-1">remember me</p>
		</div>
		<a class="text-xs ml-3" href="/">Forgot Password?</a>
	</div>
	<button class=" text-black mx-auto p-1 w-60 border hover:bg-buttonColor hover:text-white"
		>{@html submitMessage}</button
	>
</form>
