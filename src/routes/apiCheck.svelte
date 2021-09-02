<script>
	import { ApiCheckers } from '../stores/sneakers';
	import ApiCard from '../components/apiCard.svelte';
	import Index from './index.svelte';
	console.log($ApiCheckers);
</script>

{#each $ApiCheckers as ApiChecker, index}
	<ApiCard {ApiChecker} id={index + 1} />
{/each}
