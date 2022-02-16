# react-file-aws

## Intro

Here we are solving the problem of uploading files to AWS S3 directly using React and React Hooks.

### Quick Start

\*\*.env file values

- REACT_APP_ACCESS_ID=
- REACT_APP_ACCESS_KEY=
- REACT_APP_BUCKET_NAME=
- REACT_APP_REGION=
  \*\*

- Update S3 bucket Cors
- Success

```js
CORS configuration
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "DELETE"
        ],
        "AllowedOrigins": [
            "http://www.example.com"
        ],
        "ExposeHeaders": [
            "x-amz-server-side-encryption",
            "x-amz-request-id",
            "x-amz-id-2"
        ],
        "MaxAgeSeconds": 30000
    }
]
```
