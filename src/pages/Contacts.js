import MyForm from '../components/form/Form';
const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Ulyanovsk, Russia</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram</h2>
						<a href="https://t.me/daatva">
								@daatva
						</a>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Send a message</h2>
						<MyForm />

					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;