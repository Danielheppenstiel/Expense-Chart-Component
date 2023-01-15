class Days {
    constructor() {

    };


   async getData() {

    const dataResponse = await fetch('./data.json');

    const data = await dataResponse.json();

    return data;


    };


};