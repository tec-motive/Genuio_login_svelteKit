<script>
	export let icon;
	export let type;
	// export let placeholder
	// 플레이스 홀더는 추가 준비 중
</script>

<div class="flex mx-auto relative right-2">
	<i class="{icon} z-10 relative left-6 top-4 text-gray-300" />
	<input class="my-2 w-60 p-1 relative border" {type} />
</div>
