import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError]  = useState(null);

    const types = ['image/png','image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            ibmHandler(e);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    const [foodType, setFoodType] = useState(null);

    const ibmHandler = (e) => {

        const fs = require('fs');
        const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
        const { IamAuthenticator } = require('ibm-watson/auth');

        const visualRecognition = new VisualRecognitionV3({
        version: '2018-03-19',
        authenticator: new IamAuthenticator({
            apikey: 'Y9p7VozCJgWSIa4tpKViR8BSqd2kEEV_E8ixY2TDsg5m',
        }),
        url: 'https://api.kr-seo.visual-recognition.watson.cloud.ibm.com/instances/a4d58de3-7ea4-405c-a86b-467be29e7577',
        });

        const classifyParams = {
        url: file,
        classifierIds: ['food'],
        };

        visualRecognition.classify(classifyParams)
        .then(response => {
            const classifiedImages = response.result;
            setFoodType(JSON.stringify(classifiedImages));
            console.log(JSON.stringify(classifiedImages, null, 2));
        })
        .catch(err => {
            console.log('error:', err);
        });

        }

    return(
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className='output'>
                { error && <div className='error'>{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <div>{foodType}</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )

}

export default UploadForm;