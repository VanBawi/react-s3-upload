import dotenv from 'dotenv';
import aws from 'aws-sdk';

dotenv.config();

const region = process.env.REACT_APP_REGION;
const bucketName = process.env.REACT_APP_BUCKET_NAME;
const accessKeyId = process.env.REACT_APP_ACCESS_ID;
const secretAccessKey = process.env.REACT_APP_ACCESS_KEY;

const s3 = new aws.S3({
	region,
	accessKeyId,
	secretAccessKey,
	signatureVersion: 'v4',
});

export async function generateUploadURL(reqBody) {
	const { fileType, fileName } = reqBody;

	const params = {
		Bucket: bucketName,
		Key: fileName,
		Expires: 6000,
		ContentType: fileType,
	};

	const uploadURL = await s3.getSignedUrlPromise('putObject', params);
	return uploadURL;
}
