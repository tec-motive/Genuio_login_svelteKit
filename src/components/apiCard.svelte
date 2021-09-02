<script>
	export let ApiChecker;
	export let id;
	let imgsrc = 'https://image.tmdb.org/t/p/w1280';
</script>

<img src={imgsrc + ApiChecker.poster_path} alt="" />
<p>{id}.{ApiChecker.original_title}</p>
