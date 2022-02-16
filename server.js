import express from 'express';
import { generateUploadURL } from './s3.js';

const app = express();
app.use(express.json({ limit: '12mb' }));
// app.use(express.static('front'));

app.get('/s3Url', async (req, res) => {
	// console.log('req.body', req.query);
	const url = await generateUploadURL(req.query);
	res.send({ url });
});

app.listen(8080, () => console.log('listening on port 8080'));
