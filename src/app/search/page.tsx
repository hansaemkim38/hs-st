export default async function Search({ searchParams }: { searchParams: Promise<{ q: string }> }) {
	console.log('searchParams', searchParams);
	console.log('searchParams', await searchParams);
	const { q } = await searchParams;
	return (
		<div>
			<h1>Search</h1>
			<p>search page : {q}</p>
		</div>
	);
}
