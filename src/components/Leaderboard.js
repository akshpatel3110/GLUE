import './Leader.css';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "Anom", model: "BERT", href: "https://github.com/nyu-mll/nyu-ai-school-2023" },
{ name: "Megha", model: "GPT", href: "https://github.com/nyu-mll/quality" },
{ name: "Subham", model: "Robert", href: "https://github.com/nyu-mll/SQuALITY"},
]

function Leaderboard() {
return (
	<div className="Leader">
	<table>
		<tr>
		<th>Name</th>
		<th>Model</th>
		<th>Github</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.model}</td>
			<td>{val.href}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Leaderboard;
