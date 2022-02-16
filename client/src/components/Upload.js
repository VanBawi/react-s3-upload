import React, { useRef } from 'react';

function Upload() {
	const fileInput = useRef();
	const handleClick = async (event) => {
		event.preventDefault();
		let file = fileInput.current.files[0];
		let fileName;

		let fileType = file.type;
		if (file.type === 'video/mp4') {
			let name = fileInput.current.files[0] && fileInput.current.files[0].name;

			name.replace(/ /g, '-');
			fileName = name.replace(/&/g, '-'); // remove the & sign as it creates two names
		} else {
			fileName = fileInput.current.files[0] && fileInput.current.files[0].name;
		}

		// console.log('fileName', fileName);
		// get secure url from our server
		const { url } = await fetch(
			`/s3Url?fileName=${String(fileName)}&&fileType=${fileType}`
		).then((res) => res.json());
		console.log(url);

		// post the image directly to the s3 bucket
		await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			body: file,
		});

		const resUrl = url.split('?')[0];
		console.log(resUrl);
	};
	return (
		<>
			<form className='upload-steps' onSubmit={handleClick}>
				<label>
					Upload file:
					<input type='file' ref={fileInput} />
					{/* <input type='file' accept='video/*' ref={fileInput} /> */}
				</label>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<button type='submit'>Upload</button>
			</form>
		</>
	);
}

export default Upload;
