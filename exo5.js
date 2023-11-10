const express = require('express');
const axios = require('axios');

axios.get("https://api.github.com/users/octocat")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    })