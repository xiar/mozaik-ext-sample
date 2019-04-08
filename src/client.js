// mozaik-ext-sample/src/client.js
import Promise from 'bluebird'; // use bluebird for simplicity, you should also use a Promise polyfill

// When Mozaïk instanciate a client, it pass the mozaik instance to it,
// it's usefull to use the builtin Mozaïk logger for example.
// This function MUST return an object whose keys correspond to all available operations.
const client = mozaik => {
    let count = 0;

    return {
        // Remember the request id `sample.sampleMethod`.
        // This function MUST return a promise.
        sample() {
            // each time this method is invoked, we increment the count by 1
            count += 1;
            
            return Promise.resolve({ count }); 
        }
    };
};

export default client;
