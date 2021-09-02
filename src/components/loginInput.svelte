<script>
	export let icon;
	export let type;
	// export let placeholder
	// 플레이스 홀더는 추가 준비 중
	let iconIsOn = true;
</script>

<div class="flex mx-auto relative right-2">
	<i class="{icon}  relative left-6 top-4 text-gray-300 {iconIsOn && 'z-10'}" />
	<input class="my-2 w-60 p-1 relative border" {type} on:focus={console.log('focus')} />
</div>
